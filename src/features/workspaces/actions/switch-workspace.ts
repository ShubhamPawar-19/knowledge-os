"use server";

import { getCurrentSession } from "@/src/lib/auth-session";
import { db } from "@/src/server/db";

export async function switchWorkspace(
  workspaceId: string,
) {
  const session = await getCurrentSession();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  // Verify the user belongs to this workspace
  const membership = await db.workspaceMember.findFirst({
    where: {
      workspaceId,
      userId: session.user.id,
    },
  });

  if (!membership) {
    throw new Error("Access denied");
  }

  await db.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      activeWorkspaceId: workspaceId,
    },
  });
}