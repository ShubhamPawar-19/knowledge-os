import { db } from "@/src/server/db";
import "server-only";


export async function getConversation(conversationId: string) {
  return db.conversation.findUnique({
    where: {
      id: conversationId,
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