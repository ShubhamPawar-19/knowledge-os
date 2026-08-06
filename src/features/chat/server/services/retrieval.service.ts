import { Prisma } from "@prisma/client";

import { generateEmbedding } from "@/src/server/ai/embeddings/embeddings";
import { db } from "@/src/server/db";

interface RetrievedChunk {
  id: string;
  documentId: string;
  documentName: string;
  content: string;
  metadata: Prisma.JsonValue;
  similarity: number;
}

const SIMILARITY_THRESHOLD = 0.4;
const DEFAULT_LIMIT = 5;

export class RetrievalService {
  static async retrieve(
  userId: string,
  workspaceId: string,
  question: string,
  limit = DEFAULT_LIMIT,
): Promise<RetrievedChunk[]> {
  const embedding = await generateEmbedding(
    userId,
    question,
  );

  const vector = `[${embedding.join(",")}]`;

  const chunks = await db.$queryRaw<RetrievedChunk[]>`
  SELECT
    dc.id,
    dc."documentId",
    d.name AS "documentName",
    dc.content,
    dc.metadata,
    1 - (dc.embedding <=> ${vector}::vector) AS similarity
  FROM "DocumentChunk" dc
  INNER JOIN "Document" d
    ON d.id = dc."documentId"
  WHERE dc."workspaceId" = ${workspaceId}
    AND (1 - (dc.embedding <=> ${vector}::vector)) > ${SIMILARITY_THRESHOLD}
  ORDER BY dc.embedding <=> ${vector}::vector
  LIMIT ${limit};
`;
  return chunks;
}
}