import { db } from "../../db";

export async function getDocument(documentId: string) {
  const document = await db.document.findUnique({
    where: {
      id: documentId,
    },
  });

  if (!document) {
    throw new Error("Document not found.");
  }

  return document;
}