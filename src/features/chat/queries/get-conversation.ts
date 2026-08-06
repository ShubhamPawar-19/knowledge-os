import "server-only";

import { db } from "@/src/server/db";

export async function getConversation(
  conversationId: string,
) {
  return db.conversation.findFirst({
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