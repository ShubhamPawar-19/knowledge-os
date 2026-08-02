"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";

interface ConversationItemProps {
  id: string;
  title: string;
}

export function ConversationItem({
  id,
  title,
}: ConversationItemProps) {
  return (
    <Link
      href={`/dashboard/chat/${id}`}
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors"
    >
      <MessageSquare className="h-4 w-4 shrink-0" />

      <span className="truncate">{title}</span>
    </Link>
  );
}