import { TRPCError } from "@trpc/server";


import { ConversationService } from "../services/conversation.service";
import { createConversationSchema } from "../schemas/create-conversation.schema";
import { protectedProcedure } from "@/src/server/api/trpc";
import { db } from "@/src/server/db";

export const createConversation = protectedProcedure
  .input(createConversationSchema)
  .mutation(async ({ ctx, input }) => {
    const membership = await db.workspaceMember.findFirst({
      where: {
        workspaceId: input.workspaceId,
        userId: ctx.session.user.id,
      },
    });

    if (!membership) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have access to this workspace.",
      });
    }

    return ConversationService.createConversation(input.workspaceId);
  });