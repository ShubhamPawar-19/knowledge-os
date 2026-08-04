"use server";

import { headers } from "next/headers";
import { AIProvider } from "@prisma/client";
import { auth } from "@/src/server/auth";
import { db } from "@/src/server/db";
import { encrypt } from "@/src/lib/crypto";
import { decrypt } from "@/src/lib/crypto";

const DEFAULT_PROVIDER_KEYS: Record<
  AIProvider,
  string | undefined
> = {
  OPENAI: process.env.OPENAI_API_KEY,
  OPENROUTER: process.env.OPENROUTER_API_KEY,
  GOOGLE: process.env.GOOGLE_API_KEY,
  ANTHROPIC: process.env.ANTHROPIC_API_KEY,
  VOYAGE: process.env.VOYAGE_API_KEY,
  COHERE: process.env.COHERE_API_KEY,
  OLLAMA: undefined,
};
export async function getProviderApiKey(
  userId: string,
  provider: AIProvider,
) {

  const record =
    await db.userAPIKey.findUnique({
      where: {
        userId_provider: {
          userId,
          provider,
        },
      },
    });


  if (record?.encryptedKey) {
    return decrypt(
      record.encryptedKey,
    );
  }


  return DEFAULT_PROVIDER_KEYS[
    provider
  ];
}

async function getCurrentUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return session.user;
}


// Get user's configured API keys
export async function getAPIKeys() {
  const user = await getCurrentUser();

  return db.userAPIKey.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      provider: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}


// Create or update API key
export async function saveAPIKey(
  provider: AIProvider,
  apiKey: string,
) {
  const user = await getCurrentUser();

  if (!apiKey.trim()) {
    throw new Error(
      "API key cannot be empty",
    );
  }


  const encryptedKey = encrypt(
    apiKey.trim(),
  );


  return db.userAPIKey.upsert({
    where: {
      userId_provider: {
        userId: user.id,
        provider,
      },
    },

    update: {
      encryptedKey,
    },

    create: {
      userId: user.id,
      provider,
      encryptedKey,
    },
  });
}


// Delete API key
export async function deleteAPIKey(
  provider: AIProvider,
) {
  const user = await getCurrentUser();


  return db.userAPIKey.delete({
    where: {
      userId_provider: {
        userId: user.id,
        provider,
      },
    },
  });
}