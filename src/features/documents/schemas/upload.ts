import { z } from "zod";

export const uploadDocumentSchema = z.object({
  file: z.instanceof(File),
});

export type UploadDocumentSchema = z.infer<
  typeof uploadDocumentSchema
>;