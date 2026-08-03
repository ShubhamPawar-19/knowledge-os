"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { trpcClient } from "@/src/trpc/client";

export function useDeleteConversation() {
  const router = useRouter();

  async function remove(conversationId: string) {
    try {
      await trpcClient.chat.deleteConversation.mutate({
        conversationId,
      });

      toast.success("Conversation deleted.");

      router.push("/dashboard/chat");
      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete conversation.");
    }
  }

  return {
    remove,
  };
}