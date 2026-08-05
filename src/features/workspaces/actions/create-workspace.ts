"use server";

import { WorkspaceRole } from "@prisma/client";

import { getCurrentSession } from "@/src/lib/auth-session";
import { createWorkspaceSchema } from "../schemas/create-workspace-schema";
import { db } from "@/src/server/db";

export async function createWorkspace(
  values: unknown,
) {
  const session = await getCurrentSession();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const parsed = createWorkspaceSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error("Invalid workspace name");
  }

  const slug = parsed.data.name
    .toLowerCase()
    .replace(/\s+/g, "-");

  const workspace = await db.workspace.create({
    data: {
      name: parsed.data.name,
      slug,

      owner: {
        connect: {
          id: session.user.id,
        },
      },

      members: {
        create: {
          userId: session.user.id,
          role: WorkspaceRole.OWNER,
        },
      },
    },
  });

  // Make the newly created workspace active
  await db.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      activeWorkspaceId: workspace.id,
    },
  });

  return workspace;
}