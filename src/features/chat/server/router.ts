import { createTRPCRouter } from "@/src/server/api/trpc";

import { createConversation } from "./procedures/create-conversation";
import { deleteConversation } from "./procedures/delete-conversation";
import { listConversations } from "./procedures/list-conversations";
import { renameConversation } from "./procedures/rename-conversation";

export const chatRouter = createTRPCRouter({
  createConversation,
  listConversations,
  renameConversation,
  deleteConversation,
});