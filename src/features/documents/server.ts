import { requireCurrentWorkspace } from "@/src/features/workspaces/server";
import { getDocuments } from "@/src/server/services/documents";

export async function getWorkspaceDocuments(userId: string) {
  const workspace = await requireCurrentWorkspace(userId);

  return getDocuments(workspace.id);
}