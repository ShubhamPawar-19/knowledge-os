import type { EmbeddedChunk } from "./types";

import { db } from "../../db";

export async function saveChunks(
  documentId: string,
  workspaceId: string,
  chunks: EmbeddedChunk[],
): Promise<void> {
  await db.$transaction(async (tx) => {
    // Remove old chunks (for retries/reprocessing)
    await tx.documentChunk.deleteMany({
      where: {
        documentId,
      },
    });

    for (const chunk of chunks) {
      const embedding = `[${chunk.embedding.join(",")}]`;

      await tx.$executeRawUnsafe(
        `
  INSERT INTO "DocumentChunk"
  (
    id,
    "documentId",
    "workspaceId",
    content,
    "chunkIndex",
    "tokenCount",
    metadata,
    embedding,
    "createdAt"
  )
  VALUES
  (
    gen_random_uuid()::text,
    $1,
    $2,
    $3,
    $4,
    $5,
    $6::jsonb,
    $7::vector,
    NOW()
  )
  `,
        documentId,
        workspaceId,
        chunk.content,
        chunk.chunkIndex,
        chunk.tokenCount,
        JSON.stringify(chunk.metadata),
        embedding,
      );
    }
  });
}