import { WorkspaceRole } from "@prisma/client";
import { slugify } from "./slug";
import { db } from "@/src/server/db";

export async function createPersonalWorkspace(
  user: {
    id: string;
    name: string;
  },
) {
  const workspace = await db.workspace.create({
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