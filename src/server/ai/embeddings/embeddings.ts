import { embed, embedMany } from "ai";

import { embeddingModel } from "../models";

export async function generateEmbedding(
  text: string,
): Promise<number[]> {
  const { embedding } = await embed({
    model: embeddingModel,
    value: text.trim(),
  });

  return embedding;
}

export async function generateEmbeddings(
  texts: string[],
): Promise<number[][]> {
  const cleanedTexts = texts
    .map((text) => text.trim())
    .filter(Boolean);

  if (cleanedTexts.length === 0) {
    return [];
  }

  const { embeddings } = await embedMany({
    model: embeddingModel,
    values: cleanedTexts,
  });

  return embeddings;
}