"use client";

import { ConversationControls } from "./conversation-controls";

interface ChatHeaderProps {
  conversationId: string;
  title: string;
}

export function ChatHeader({
  conversationId,
  title,
}: ChatHeaderProps) {
  return (
    <div className="border-b px-6 py-4">
      <ConversationControls
        conversationId={conversationId}
        title={title}
        variant="header"
      />
    </div>
  );
}