"use client";

import { ConversationItem } from "./conversation-item";

interface Conversation {
  id: string;
  title: string;
  updatedAt: Date;
}

interface Props {
  conversations: Conversation[];
}

export function ConversationList({
  conversations,
}: Props) {
  if (conversations.length === 0) {
    return (
      <p className="p-4 text-sm text-muted-foreground">
        No conversations yet.
      </p>
    );
  }

  return (
    <div className="p-2 space-y-1">
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          id={conversation.id}
          title={conversation.title}
        />
      ))}
    </div>
  );
}