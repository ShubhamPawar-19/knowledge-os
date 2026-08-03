import { db } from "@/src/server/db";

export class ConversationService {
  static async createConversation(workspaceId: string) {
    return db.conversation.create({
      data: {
        workspaceId,
        title: "New Chat",
      },
    });
  }

  static async listConversations(workspaceId: string) {
    return db.conversation.findMany({
      where: {
        workspaceId,
        deletedAt: null,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  static async getConversation(conversationId: string) {
    return db.conversation.findUnique({
      where: {
        id: conversationId,
        deletedAt: null,
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });
  }

  static async updateTitle(
    conversationId: string,
    title: string,
  ) {
    return db.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        title,
      },
    });
  }

  static async renameConversation(
    conversationId: string,
    title: string,
  ) {
    return this.updateTitle(
      conversationId,
      title,
    );
  }

  static async deleteConversation(
    conversationId: string,
  ) {
    return db.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}