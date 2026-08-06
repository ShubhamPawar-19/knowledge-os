"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { useSidebar } from "@/src/components/layout/sidebar-provider";

import { useCreateConversation } from "../hooks/use-create-conversation";


interface Props {
  workspaceId: string;
}


export function NewChatButton({
  workspaceId,
}: Props) {

  const {
    collapsed,
  } = useSidebar();


  const { create } = useCreateConversation();


  const [loading, setLoading] = useState(false);



  async function handleClick() {

    setLoading(true);

    await create(workspaceId);

    setLoading(false);

  }



  return (

    <Button
      className={`
        gap-2 rounded-lg
        text-sm font-medium
        transition-colors

        ${
          collapsed
            ? "h-10 w-10 justify-center px-0"
            : "w-full px-3 py-2"
        }
      `}
      disabled={loading}
      onClick={handleClick}
    >

      <Plus
        className="
        h-4 w-4 shrink-0
        "
      />


      {!collapsed && (
        <span>
          {loading
            ? "Creating..."
            : "New Chat"
          }
        </span>
      )}

    </Button>

  );
}