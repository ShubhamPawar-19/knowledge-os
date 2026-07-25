import { prisma } from "@/lib/prisma";
import { WorkspaceRole } from "@prisma/client";
import { slugify } from "./slug";

export async function createPersonalWorkspace(
  user: {
    id: string;
    name: string;
  },
) {
  const workspace = await prisma.workspace.create({
    data: {
      name: `${user.name}'s Workspace`,
      slug: slugify(`${user.name}-${user.id}`),
      ownerId: user.id,

      members: {
        create: {
          userId: user.id,
          role: WorkspaceRole.OWNER,
        },
      },
    },
  });

  return workspace;
}