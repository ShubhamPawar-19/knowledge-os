"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { trpcClient } from "@/src/trpc/client";

export function useCreateConversation() {
  const router = useRouter();

  async function create(workspaceId: string) {
    try {
      const conversation =
        await trpcClient.chat.createConversation.mutate({
          workspaceId,
        });

      toast.success("Conversation created.");

      router.push(`/chats/${conversation.id}`);
    } catch (error) {
      console.error("Create conversation failed:", error);
      toast.error("Failed to create conversation.");

      throw error;
    }
  }

  return {
    create,
  };
}