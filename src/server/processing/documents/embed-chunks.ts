import { generateEmbeddings } from "../../ai/embeddings/embeddings";

import type { EmbeddedChunk, TextChunk } from "./types";

export async function embedChunks(
  userId: string,
  chunks: TextChunk[],
): Promise<EmbeddedChunk[]> {
  const embeddings = await generateEmbeddings(
    userId,
    chunks.map((chunk) => chunk.content),
  );

  return chunks.map((chunk, index) => ({
    ...chunk,
    embedding: embeddings[index],
  }));
}