import { DocumentStatus } from "@prisma/client";

import { db } from "../../db";

export async function markProcessing(
  documentId: string,
): Promise<void> {
  await db.document.update({
    where: {
      id: documentId,
    },
    data: {
      status: DocumentStatus.PROCESSING,
      processingStartedAt: new Date(),
      errorMessage: null,
    },
  });
}

export async function markReady(
  documentId: string,
  chunkCount: number,
): Promise<void> {
  await db.document.update({
    where: {
      id: documentId,
    },
    data: {
      status: DocumentStatus.READY,
      chunkCount,
      processedAt: new Date(),
      errorMessage: null,
    },
  });
}

export async function markFailed(
  documentId: string,
  error: string,
): Promise<void> {
  await db.document.update({
    where: {
      id: documentId,
    },
    data: {
      status: DocumentStatus.FAILED,
      errorMessage: error,
    },
  });
}