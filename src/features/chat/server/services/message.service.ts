import { db } from "@/src/server/db";

export class MessageService {
  static async createMessage(
    conversationId: string,
    role: "USER" | "ASSISTANT",
    content: string,
  ) {
    if (!content.trim()) {
      return null;
    }

    return db.$transaction(async (tx) => {
      const message = await tx.message.create({
        data: {
          conversationId,
          role,
          content,
        },
      });

      await tx.conversation.update({
        where: {
          id: conversationId,
        },
        data: {
          updatedAt: new Date(),
        },
      });

      return message;
    });
  }
}