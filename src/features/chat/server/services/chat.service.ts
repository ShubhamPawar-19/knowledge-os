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
    where:{
        userId,
    },
});


if(!config){
    throw new Error(
        "AI configuration missing"
    );
}



const chunks =
await RetrievalService.retrieve(
  userId,
  workspaceId,
  question,
);



const prompt =
PromptBuilderService.build(
    question,
    chunks,
);



const model =
await getChatModel(
    userId,
    config.chatProvider,
    config.chatModel,
);



return streamText({

    model,

    system:
    "You are KnowledgeOS AI assistant. Answer using uploaded documents.",

    prompt,

    temperature:
    config.temperature,

    maxOutputTokens:
    config.maxTokens,

});

}

}