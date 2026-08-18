import type { EmbeddedChunk } from "./types";
import { db } from "../../db";
import { Prisma } from "@prisma/client";

export async function saveChunks(
  documentId: string,
  workspaceId: string,
  chunks: EmbeddedChunk[],
): Promise<void> {
  if (chunks.length === 0) {
    return;
  }

  await db.$transaction(async (tx) => {
    await tx.documentChunk.deleteMany({
      where: {
        documentId,
      },
    });

    const values = chunks.map((chunk) => {
      const embedding = `[${chunk.embedding.join(",")}]`;

      return Prisma.sql`(
        gen_random_uuid()::text,
        ${documentId},
        ${workspaceId},
        ${chunk.content},
        ${chunk.chunkIndex},
        ${chunk.tokenCount},
        ${JSON.stringify(chunk.metadata)}::jsonb,
        ${embedding}::vector,
        NOW()
      )`;
    });

    await tx.$executeRaw(
      Prisma.sql`
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
        VALUES ${Prisma.join(values)}
      `,
    );
  });
}