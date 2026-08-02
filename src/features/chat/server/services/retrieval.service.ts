import { Prisma } from "@prisma/client";

import { generateEmbedding } from "@/src/server/ai/embeddings/embeddings";
import { db } from "@/src/server/db";

interface RetrievedChunk {
  id: string;
  documentId: string;
  content: string;
  metadata: Prisma.JsonValue;
  similarity: number;
}

const SIMILARITY_THRESHOLD = 0.4;
const DEFAULT_LIMIT = 5;

export class RetrievalService {
  static async retrieve(
    workspaceId: string,
    question: string,
    limit = DEFAULT_LIMIT,
  ): Promise<RetrievedChunk[]> {
    const embedding = await generateEmbedding(question);
    const vector = `[${embedding.join(",")}]`;

    const chunks = await db.$queryRaw<RetrievedChunk[]>`
      SELECT
        id,
        "documentId",
        content,
        metadata,
        1 - (embedding <=> ${vector}::vector) AS similarity
      FROM "DocumentChunk"
      WHERE "workspaceId" = ${workspaceId}
        AND (1 - (embedding <=> ${vector}::vector)) > ${SIMILARITY_THRESHOLD}
      ORDER BY embedding <=> ${vector}::vector
      LIMIT ${limit};
    `;

    return chunks;
  }
}