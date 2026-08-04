import {
  createOpenRouter,
} from "@openrouter/ai-sdk-provider";

import {
  createGoogleGenerativeAI,
} from "@ai-sdk/google";

import {
  createOpenAI,
} from "@ai-sdk/openai";

import { AIProvider } from "@prisma/client";
import { getProviderApiKey } from "@/src/features/settings/actions/api-keys";


export async function getChatModel(
  userId: string,
  provider: AIProvider,
  model: string,
) {
  const apiKey = await getProviderApiKey(
    userId,
    provider,
  );

  if (!apiKey) {
    throw new Error(
      `Missing API key for ${provider}`,
    );
  }

  switch (provider) {
    case AIProvider.OPENROUTER:
      return createOpenRouter({
        apiKey,
      }).chat(model);

    case AIProvider.GOOGLE:
      return createGoogleGenerativeAI({
        apiKey,
      }).languageModel(model);

    case AIProvider.OPENAI:
      return createOpenAI({
        apiKey,
      }).chat(model);

    default:
      throw new Error(
        `Unsupported chat provider ${provider}`,
      );
  }
}

export async function getEmbeddingModel(
  userId: string,
  provider: AIProvider,
  model: string,
) {
  const apiKey = await getProviderApiKey(
    userId,
    provider,
  );

  if (!apiKey) {
    throw new Error(
      `Missing API key for ${provider}`,
    );
  }

  switch (provider) {
    case AIProvider.GOOGLE:
      return createGoogleGenerativeAI({
        apiKey,
      }).textEmbeddingModel(model);

    case AIProvider.OPENAI:
      return createOpenAI({
        apiKey,
      }).textEmbeddingModel(model);

    default:
      throw new Error(
        `Embedding provider ${provider} is not supported.`,
      );
  }
}