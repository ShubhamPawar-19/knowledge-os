import { z } from "zod";

export const sendMessageSchema = z.object({
  conversationId: z.string().cuid(),
  content: z.string().trim().min(1).max(10000),
});