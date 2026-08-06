import { db } from "../../db";

export async function getDocument(documentId: string) {
  const document = await db.document.findUnique({
    where: {
      id: documentId,
    },
    include: {
      workspace: {
        select: {
          ownerId: true,
        },
      },
    },
  });

  if (!document) {
    throw new Error("Document not found.");
  }

  return document;
}