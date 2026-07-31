import "server-only";


import { db } from "@/src/server/db";

export async function listConversations(workspaceId: string) {
  return db.conversation.findMany({
    where: {
      workspaceId,
      deletedAt: null,
    },
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      id: true,
      title: true,
      updatedAt: true,
    },
  });
}