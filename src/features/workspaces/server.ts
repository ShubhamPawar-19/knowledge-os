import { TRPCError } from "@trpc/server";

import { getCurrentWorkspace } from "./queries";

export async function requireCurrentWorkspace(userId: string) {
  const workspace = await getCurrentWorkspace(userId);

  if (!workspace) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Workspace not found.",
    });
  }

  return workspace;
}