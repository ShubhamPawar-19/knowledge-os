import { z } from "zod";

export const uploadDocumentSchema = z.object({
  workspaceId: z.string().cuid(),
});

export type UploadDocumentInput = z.infer<typeof uploadDocumentSchema>;