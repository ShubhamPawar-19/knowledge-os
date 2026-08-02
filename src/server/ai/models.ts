import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { google } from "@ai-sdk/google";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY!,
});

export const chatModel = openrouter.chat(
  "google/gemma-3-27b-it"
);

export const embeddingModel =
  google.textEmbeddingModel("gemini-embedding-001");