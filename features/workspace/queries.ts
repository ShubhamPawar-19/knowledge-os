import { prisma } from "@/lib/prisma";

export async function getCurrentWorkspace(userId: string) {
  return prisma.workspace.findFirst({
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