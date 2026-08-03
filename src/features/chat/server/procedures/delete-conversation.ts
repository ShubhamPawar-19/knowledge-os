import { TRPCError } from "@trpc/server";

import { protectedProcedure } from "@/src/server/api/trpc";
import { db } from "@/src/server/db";

import { ConversationService } from "../services/conversation.service";
import { deleteConversationSchema } from "../schemas/create-conversation.schema";

export const deleteConversation = protectedProcedure
  .input(deleteConversationSchema)
  .mutation(async ({ ctx, input }) => {
    const conversation = await db.conversation.findUnique({
      where: {
        id: input.conversationId,
      },
      select: {
        id: true,
        workspaceId: true,
        deletedAt: true,
      },
    });

    if (!conversation || conversation.deletedAt) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Conversation not found.",
      });
    }

    const membership = await db.workspaceMember.findFirst({
      where: {
        workspaceId: conversation.workspaceId,
        userId: ctx.session.user.id,
      },
    });

    if (!membership) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have access to this conversation.",
      });
    }

    await ConversationService.deleteConversation(
      input.conversationId,
    );

    return {
      success: true,
    };
  });