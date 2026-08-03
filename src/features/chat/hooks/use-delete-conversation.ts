"use client";

import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

import { trpcClient } from "@/src/trpc/client";

export function useDeleteConversation() {
  const router = useRouter();
  const pathname = usePathname();

  async function remove(conversationId: string) {
    try {
      await trpcClient.chat.deleteConversation.mutate({
        conversationId,
      });

      toast.success("Conversation deleted.");

      const currentConversationId =
        pathname.split("/").pop();

      if (currentConversationId === conversationId) {
        router.push("/dashboard/chat");
      }

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