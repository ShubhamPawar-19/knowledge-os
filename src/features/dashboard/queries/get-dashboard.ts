import { headers } from "next/headers";

import { db } from "@/src/server/db";
import { auth } from "@/src/server/auth";
import { getCurrentWorkspace } from "../../workspaces/queries";

export async function getDashboardData() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  const workspace = await getCurrentWorkspace(session.user.id);

  if (!workspace) {
    throw new Error("Workspace not found");
  }

  const workspaceId = workspace.id;

  const [
    documents,
    chunks,
    chats,
    storage,
    recentDocuments,
    recentChats,
  ] = await Promise.all([
    db.document.count({
      where: {
        workspaceId,
      },
    }),

    db.documentChunk.count({
      where: {
        workspaceId,
      },
    }),

    db.conversation.count({
      where: {
        workspaceId,
        deletedAt: null,
      },
    }),
    db.document.aggregate({
      where: {
        workspaceId,
      },
      _sum: {
        size: true,
      },
    }),

    db.document.findMany({
      where: {
        workspaceId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    }),

    db.conversation.findMany({
      where: {
        workspaceId,
        deletedAt: null,
      },
      orderBy: {
        updatedAt: "desc",
      },
      take: 5,
    }),
  ]);

  return {
    stats: {
      documents,
      chunks,
      chats,
      storage: storage._sum.size ?? 0,
    },
    recentDocuments,
    recentChats,
  };
}