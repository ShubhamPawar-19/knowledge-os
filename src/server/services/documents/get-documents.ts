import { db } from "@/src/server/db";

export async function getDocuments(workspaceId: string) {
  return db.document.findMany({
    where: {
      workspaceId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}