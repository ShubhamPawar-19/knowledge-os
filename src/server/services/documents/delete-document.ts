import { db } from "@/src/server/db";

import { deleteFile } from "@/src/lib/storage/delete";

export async function deleteDocument(documentId: string) {
  const document = await db.document.findUnique({
    where: {
      id: documentId,
    },
  });

  if (!document) {
    throw new Error("Document not found.");
  }

  await deleteFile({
    key: document.storageKey,
  });

  await db.document.delete({
    where: {
      id: documentId,
    },
  });
}