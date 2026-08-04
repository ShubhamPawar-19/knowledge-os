import { embed, embedMany } from "ai";

import { db } from "@/src/server/db";
import { getEmbeddingModel } from "../models";

async function getUserEmbeddingModel(
  userId: string,
) {
  const config = await db.userAIConfig.findUnique({
    where: {
      userId,
    },
    select: {
      embeddingProvider: true,
      embeddingModel: true,
    },
  });

  if (!config) {
    throw new Error(
      "User AI configuration not found.",
    );
  }

  return getEmbeddingModel(
    userId,
    config.embeddingProvider,
    config.embeddingModel,
  );
}

export async function generateEmbedding(
  userId: string,
  text: string,
): Promise<number[]> {
  const model =
    await getUserEmbeddingModel(userId);

  const { embedding } = await embed({
    model,
    value: text.trim(),
  });

  return embedding;
}

export async function generateEmbeddings(
  userId: string,
  texts: string[],
): Promise<number[][]> {
  const cleanedTexts = texts
    .map((text) => text.trim())
    .filter(Boolean);

  if (cleanedTexts.length === 0) {
    return [];
  }

  const model =
    await getUserEmbeddingModel(userId);

  const { embeddings } = await embedMany({
    model,
    values: cleanedTexts,
  });

  return embeddings;
}