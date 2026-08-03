import { z } from "zod";

export const renameConversationSchema = z.object({
  conversationId: z.string().cuid(),
  title: z
    .string()
    .trim()
    .min(1, "Title is required.")
    .max(100, "Title is too long."),
});

export type RenameConversationInput = z.infer<
  typeof renameConversationSchema
>;