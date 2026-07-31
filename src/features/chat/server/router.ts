
import { createTRPCRouter } from "@/src/server/api/trpc";
import { createConversation } from "./procedures/create-conversation";
import { listConversations } from "./procedures/list-conversations";

export const chatRouter = createTRPCRouter({
  createConversation,
  listConversations,
});