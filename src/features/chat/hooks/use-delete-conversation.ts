"use client";

import { useRouter, usePathname } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { trpcClient } from "@/src/trpc/client";

export function useDeleteConversation() {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  async function remove(conversationId: string) {
    try {
      const result =
  await trpcClient.chat.deleteConversation.mutate({
    conversationId,
  });

console.log("Delete result:", result);

      // Remove immediately from cache
      queryClient.setQueriesData(
        {
          queryKey: ["conversations"],
        },
        (old: any) =>
          Array.isArray(old)
            ? old.filter(
                (conversation) =>
                  conversation.id !== conversationId,
              )
            : old,
      );

      // Refetch in background
      await queryClient.invalidateQueries({
        queryKey: ["conversations"],
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