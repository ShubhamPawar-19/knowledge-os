"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { trpcClient } from "@/src/trpc/client";

export function useRenameConversation() {
  const router = useRouter();

  async function rename(
    conversationId: string,
    title: string,
  ) {
    try {
      await trpcClient.chat.renameConversation.mutate({
        conversationId,
        title,
      });

      router.refresh();

      toast.success("Conversation renamed.");
    } catch (error) {
      console.error(error);

      toast.error("Failed to rename conversation.");
    }
  }

  return {
    rename,
  };
}