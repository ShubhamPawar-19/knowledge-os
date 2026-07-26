import { WorkspaceRole } from "@prisma/client";


import { generateWorkspaceSlug } from "./slug";
import { db } from "@/src/server/db";

interface CreatePersonalWorkspaceInput {
  id: string;
  name: string;
}

export async function createPersonalWorkspace({
  id,
  name,
}: CreatePersonalWorkspaceInput) {
  const workspace = await db.workspace.create({
    data: {
      name,
      slug: await generateWorkspaceSlug(name),
      ownerId: id,

      members: {
        create: {
          userId: id,
          role: WorkspaceRole.OWNER,
        },
      },
    },
  });

  return workspace;
}