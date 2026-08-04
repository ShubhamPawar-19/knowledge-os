"use client";

import { ConversationControls } from "./conversation-controls";

interface ConversationItemProps {
  id: string;
  title: string;
}

export function ConversationItem({
  id,
  title,
}: ConversationItemProps) {
  return (
    <div className="group rounded-lg hover:bg-accent">
      <ConversationControls
        conversationId={id}
        title={title}
        variant="sidebar"
      />
    </div>
  );
}