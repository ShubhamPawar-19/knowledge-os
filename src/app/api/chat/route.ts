import { NextRequest } from "next/server";

import { db } from "@/src/server/db";

import { ChatService } from "@/src/features/chat/server/services/chat.service";
import { MessageService } from "@/src/features/chat/server/services/message.service";
import { TitleService } from "@/src/features/chat/server/services/title.service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { messages, conversationId } = body;

    if (!conversationId) {
      return new Response("Missing conversationId.", {
        status: 400,
      });
    }

    if (!messages?.length) {
      return new Response("Missing messages.", {
        status: 400,
      });
    }

    const lastMessage = messages.at(-1);

    if (!lastMessage || lastMessage.role !== "user") {
      return new Response("Invalid user message.", {
        status: 400,
      });
    }

    const question =
      lastMessage.parts
        ?.filter((part: any) => part.type === "text")
        .map((part: any) => part.text)
        .join("") ?? "";

    if (!question.trim()) {
      return new Response("Empty message.", {
        status: 400,
      });
    }

    await MessageService.createMessage(
      conversationId,
      "USER",
      question,
    );

    void TitleService.generateConversationTitle(
      conversationId,
      question,
    );

    const conversation = await db.conversation.findUnique({
      where: {
        id: conversationId,
      },
      select: {
        workspaceId: true,
      },
    });

    if (!conversation) {
      return new Response("Conversation not found.", {
        status: 404,
      });
    }

    let result;

    try {
      result = await ChatService.streamResponse(
        conversation.workspaceId,
        question,
      );
    } catch (error) {
      console.error("Failed to generate AI response:", error);

      return new Response(
        "Failed to generate AI response.",
        {
          status: 500,
        },
      );
    }

    return result.toUIMessageStreamResponse({
      onFinish: async ({ responseMessage }) => {
        const assistantText = responseMessage.parts
          .filter((part) => part.type === "text")
          .map((part) => part.text)
          .join("");

        if (!assistantText.trim()) {
          return;
        }

        await MessageService.createMessage(
          conversationId,
          "ASSISTANT",
          assistantText,
        );
      },
    });
  } catch (error) {
    console.error("Chat API Error:", error);

    return new Response(
      "Internal Server Error",
      {
        status: 500,
      },
    );
  }
}