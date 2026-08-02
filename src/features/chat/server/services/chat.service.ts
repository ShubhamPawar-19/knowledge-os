import { streamText } from "ai";

import { chatModel } from "@/src/server/ai/models";

import { PromptBuilderService } from "./prompt-builder.service";
import { RetrievalService } from "./retrieval.service";

export class ChatService {
  static async streamResponse(
    workspaceId: string,
    question: string,
  ) {
    const chunks = await RetrievalService.retrieve(
      workspaceId,
      question,
    );

    const prompt = PromptBuilderService.build(
      question,
      chunks,
    );

    return streamText({
      model: chatModel,

      system:
        "You are KnowledgeOS, an AI assistant that answers using uploaded documents whenever possible.",

      prompt,

      temperature: 0.3,

      // Prevent OpenRouter from requesting 65535 tokens
      maxOutputTokens: 1024,
    });
  }
}