import { db } from "../../../../server/db";

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
    throw new Error("Not implemented");
  }

  static async renameConversation(
    conversationId: string,
    title: string
  ) {
    throw new Error("Not implemented");
  }

  static async deleteConversation(conversationId: string) {
    throw new Error("Not implemented");
  }
}