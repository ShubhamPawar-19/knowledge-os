import { AIProvider } from "@prisma/client";

export const AI_CATALOG = {
  [AIProvider.OPENAI]: {
    label: "OpenAI",
    logo: "/providers/openai.svg",
    chatModels: ["gpt-4.1-mini"],
    embeddingModels: [
      "text-embedding-3-small",
      "text-embedding-3-large",
    ],
  },

  [AIProvider.OPENROUTER]: {
    label: "OpenRouter",
    logo: "/providers/openrouter.svg",
    chatModels: [
      "google/gemma-3-27b-it",
      "openai/gpt-4.1-mini",
    ],
    embeddingModels: [],
  },

  [AIProvider.GOOGLE]: {
    label: "Google AI",
    logo: "/providers/google.svg",
    chatModels: [
      "gemini-2.5-flash",
      "gemini-2.5-pro",
    ],
    embeddingModels: [
      "gemini-embedding-001",
    ],
  },

  [AIProvider.ANTHROPIC]: {
    label: "Anthropic",
    logo: "/providers/anthropic.svg",
    chatModels: [
      "claude-3-7-sonnet-latest",
    ],
    embeddingModels: [],
  },

  [AIProvider.COHERE]: {
    label: "Cohere",
    logo: "/providers/cohere.svg",
    chatModels: [
      "command-r-plus",
    ],
    embeddingModels: [
      "embed-english-v3.0",
    ],
  },

  [AIProvider.VOYAGE]: {
    label: "Voyage AI",
    logo: "/providers/voyage.svg",
    chatModels: [
      "voyage-3-large",
    ],
    embeddingModels: [
      "voyage-3-large",
    ],
  },

  [AIProvider.OLLAMA]: {
    label: "Ollama",
    logo: "/providers/ollama.png",
    chatModels: [
      "llama3.1",
    ],
    embeddingModels: [],
  },
} as const;