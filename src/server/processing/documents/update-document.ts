import {
  Document,
  DocumentStatus,
} from "@prisma/client";

export async function updateDocumentStatus(
  document: Document,
  status: DocumentStatus,
): Promise<void> {
  throw new Error("Not implemented");
}