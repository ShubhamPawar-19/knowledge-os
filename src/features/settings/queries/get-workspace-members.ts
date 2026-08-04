import { db } from "@/src/server/db";

export async function getWorkspaceMembers(
  workspaceId: string,
) {
  return db.workspaceMember.findMany({
    where: {
      workspaceId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });
}