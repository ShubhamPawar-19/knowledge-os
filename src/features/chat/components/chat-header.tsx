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
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-14 items-center px-4 sm:px-6">
        <ConversationControls
          conversationId={conversationId}
          title={title}
          variant="header"
        />
      </div>
    </header>
  );
}