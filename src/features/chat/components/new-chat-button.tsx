"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useCreateConversation } from "../hooks/use-create-conversation";

interface Props {
  workspaceId: string;
}

export function NewChatButton({
  workspaceId,
}: Props) {
  const { create } = useCreateConversation();

  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);

    await create(workspaceId);

    setLoading(false);
  }

  return (
    <Button
      className="w-full gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
      disabled={loading}
      onClick={handleClick}
    >
      <Plus className="mr-2 h-4 w-4" />

      {loading ? "Creating..." : "New Chat"}
    </Button>
  );
}