export function generateStorageKey(
  workspaceId: string,
  documentId: string,
  extension: string
) {
  return `workspaces/${workspaceId}/documents/${documentId}.${extension}`;
}