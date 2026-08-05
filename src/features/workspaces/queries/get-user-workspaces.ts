import { db } from "@/src/server/db";

export async function getUserWorkspaces(
  userId: string,
) {
  return db.workspace.findMany({
    where: {
      OR: [
        {
          ownerId: userId,
        },
        {
          members: {
            some: {
              userId,
            },
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
      slug: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}