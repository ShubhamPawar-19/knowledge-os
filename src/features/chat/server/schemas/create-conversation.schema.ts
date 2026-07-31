import { z } from "zod";

export const createConversationSchema = z.object({
  workspaceId: z.string().cuid(),
});

export type CreateConversationInput = z.infer<
  typeof createConversationSchema
>;

export const listConversationsSchema = z.object({
  workspaceId: z.string().cuid(),
});