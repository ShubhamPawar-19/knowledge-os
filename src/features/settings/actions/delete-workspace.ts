"use server";

import { getCurrentSession } from "@/src/lib/auth-session";
import { db } from "@/src/server/db";

export async function deleteWorkspace(
  workspaceId: string,
) {
  const session = await getCurrentSession();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  // Verify ownership
  const workspace = await db.workspace.findFirst({
    where: {
      id: workspaceId,
      ownerId: session.user.id,
    },
  });

  if (!workspace) {
    throw new Error("Workspace not found.");
  }

  // Prevent deleting the last workspace
  const workspaceCount = await db.workspace.count({
    where: {
      members: {
        some: {
          userId: session.user.id,
        },
      },
    },
  });

  if (workspaceCount <= 1) {
    throw new Error(
      "You must have at least one workspace.",
    );
  }

  // Find another workspace
  const nextWorkspace =
    await db.workspace.findFirst({
      where: {
        id: {
          not: workspaceId,
        },
        members: {
          some: {
            userId: session.user.id,
          },
        },
      },
      select: {
        id: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

  await db.$transaction(async (tx) => {
    // Switch active workspace first
    await tx.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        activeWorkspaceId:
          nextWorkspace?.id ?? null,
      },
    });

    // Delete workspace
    await tx.workspace.delete({
      where: {
        id: workspaceId,
      },
    });
  });

  return {
    success: true,
    nextWorkspaceId:
      nextWorkspace?.id ?? null,
  };
}