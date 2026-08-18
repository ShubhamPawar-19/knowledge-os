

import { uploadDocumentSchema } from "@/src/features/documents/schemas/upload";
import {
  createTRPCRouter,
  protectedProcedure,
} from "../trpc";
import { requireCurrentWorkspace } from "@/src/features/workspaces/server";
import { uploadDocument } from "../../services/documents/upload-document";

export const documentsRouter = createTRPCRouter({
  upload: protectedProcedure
    .input(uploadDocumentSchema)
    .mutation(async ({ ctx, input }) => {
      const workspace = await requireCurrentWorkspace(
        ctx.session.user.id
      );

      return uploadDocument({
        workspaceId: workspace.id,
        file: input.file,
      });
    }),});