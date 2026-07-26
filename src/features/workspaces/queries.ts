import { db } from "@/src/server/db";

export async function getCurrentWorkspace(userId: string) {
  return db.workspace.findFirst({
    where: {
      members: {
        some: {
          userId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      slug: true,
    },
  });
}