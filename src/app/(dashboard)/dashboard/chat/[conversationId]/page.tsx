import { notFound } from "next/navigation";
import type { UIMessage } from "ai";

import { getConversation } from "@/src/features/chat/queries/get-conversation";

import { ChatHeader } from "@/src/features/chat/components/chat-header";
import { Chat } from "@/src/features/chat/components/chat";

interface Props {
  params: Promise<{
    conversationId: string;
  }>;
}

export default async function ConversationPage({
  params,
}: Props) {
  const { conversationId } = await params;

  const conversation = await getConversation(conversationId);

  if (!conversation) {
    notFound();
  }

  const initialMessages: UIMessage[] =
    conversation.messages.map((message) => ({
      id: message.id,
      role:
        message.role === "USER"
          ? "user"
          : "assistant",
      parts: [
        {
          type: "text",
          text: message.content,
        },
      ],
    }));

  return (
    <div className="flex h-full min-h-0 flex-col">
      <ChatHeader
        conversationId={conversation.id}
        title={conversation.title}
      />

      <div className="min-h-0 flex-1">
        <Chat
          conversationId={conversation.id}
          initialMessages={initialMessages}
        />
      </div>
    </div>
  );
}