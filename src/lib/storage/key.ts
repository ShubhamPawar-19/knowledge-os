import { randomUUID } from "crypto";

interface GenerateStorageKeyInput {
  workspaceId: string;
  extension?: string;
}

export function generateStorageKey({
  workspaceId,
  extension,
}: GenerateStorageKeyInput): string {
  const documentId = randomUUID();

  const normalizedExtension = extension
    ? extension.replace(/^\./, "").toLowerCase()
    : "bin";

  return `workspaces/${workspaceId}/documents/${documentId}.${normalizedExtension}`;
}