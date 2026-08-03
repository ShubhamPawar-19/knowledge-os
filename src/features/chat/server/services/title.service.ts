import { generateText } from "ai";
import { titleModel } from "@/src/server/ai/models";
import { db } from "@/src/server/db";
import { chatModel } from "@/src/server/ai/models";

export class TitleService {
  static async generateConversationTitle(
    conversationId: string,
    firstMessage: string,
  ) {
    try {
      const conversation = await db.conversation.findUnique({
        where: {
          id: conversationId,
        },
        select: {
          title: true,
        },
      });

      if (!conversation) {
        return;
      }

      if (conversation.title !== "New Chat") {
        return;
      }

      const { text } = await generateText({
        model: titleModel,
        temperature: 0,
        maxOutputTokens: 20,
        system: `
You generate concise conversation titles.

Rules:
- Maximum 5 words.
- Use Title Case.
- Do not use quotes.
- Do not end with punctuation.
- Return only the title.
`,
        prompt: firstMessage,
      });

      const title =
        text.trim().replace(/^["']|["']$/g, "").slice(0, 80) || "New Chat";

      await db.conversation.update({
        where: {
          id: conversationId,
        },
        data: {
          title,
        },
      });
    } catch (error) {
      console.error("Failed to generate conversation title:", error);
    }
  }
}