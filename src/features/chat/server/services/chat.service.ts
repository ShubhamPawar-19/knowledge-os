import { streamText } from "ai";

import { db } from "@/src/server/db";

import { getChatModel } from "@/src/server/ai/models";

import { PromptBuilderService } from "./prompt-builder.service";
import { RetrievalService } from "./retrieval.service";


export class ChatService {

    static async streamResponse(
        userId: string,
        workspaceId: string,
        question: string,
    ) {


        const config =
            await db.userAIConfig.findUnique({
                where: {
                    userId,
                },
            });


        if (!config) {
            throw new Error(
                "AI configuration missing"
            );
        }



        const chunks = await RetrievalService.retrieve(
            userId,
            workspaceId,
            question,
        );

        const citations = [
            ...new Map(
                chunks.map((chunk) => {
                    const pageNumber =
                        typeof chunk.metadata === "object" &&
                            chunk.metadata !== null &&
                            "pageNumber" in chunk.metadata
                            ? (chunk.metadata as { pageNumber?: number }).pageNumber
                            : undefined;

                    return [
                        `${chunk.documentId}-${pageNumber ?? "unknown"}`,
                        {
                            documentId: chunk.documentId,
                            documentName: chunk.documentName,
                            pageNumber,
                        },
                    ];
                }),
            ).values(),
        ];

console.log("Chunks:", chunks);

console.log("Citations:", citations);

        const prompt =
            PromptBuilderService.build(
                question,
                chunks,
            );



        const model = await getChatModel(
            userId,
            config.chatProvider,
            config.chatModel,
        );

        const stream = streamText({
            model,

            system: `
You are KnowledgeOS AI Assistant.

Answer naturally and accurately.

Use the uploaded documents whenever they contain relevant information.

Never reveal your reasoning process.

Never output words like:
- thought
- thinking
- reasoning
- analysis
- scratchpad

Only output the final answer.
`,

            prompt,

            temperature: config.temperature,

            maxOutputTokens: config.maxTokens,
        });

        return {
            stream,
            citations,
        };
    }
}