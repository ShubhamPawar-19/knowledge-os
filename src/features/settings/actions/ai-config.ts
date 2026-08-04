"use server";

import { headers } from "next/headers";
import { AIProvider } from "@prisma/client";

import { auth } from "@/src/server/auth";
import { db } from "@/src/server/db";

export async function getAIConfig() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return db.userAIConfig.findUnique({
    where: {
      userId: session.user.id,
    },
  });
}

export async function updateAIConfig(data: {
  chatProvider: AIProvider;
  chatModel: string;

  embeddingProvider: AIProvider;
  embeddingModel: string;

  temperature?: number;
  maxTokens?: number;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return db.userAIConfig.upsert({
    where: {
      userId: session.user.id,
    },
    update: {
      chatProvider: data.chatProvider,
      chatModel: data.chatModel,

      embeddingProvider: data.embeddingProvider,
      embeddingModel: data.embeddingModel,

      ...(data.temperature !== undefined && {
        temperature: data.temperature,
      }),

      ...(data.maxTokens !== undefined && {
        maxTokens: data.maxTokens,
      }),
    },
    create: {
      userId: session.user.id,

      chatProvider: data.chatProvider,
      chatModel: data.chatModel,

      embeddingProvider: data.embeddingProvider,
      embeddingModel: data.embeddingModel,

      temperature: data.temperature ?? 0.7,
      maxTokens: data.maxTokens ?? 2048,
    },
  });
}