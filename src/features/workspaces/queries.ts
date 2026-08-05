import { db } from "@/src/server/db";

export async function getCurrentWorkspace(
  userId: string,
) {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      activeWorkspace: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
  });

  return user?.activeWorkspace ?? null;
}