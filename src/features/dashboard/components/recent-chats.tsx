import Link from "next/link";
import { MessageSquare } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

interface RecentChatsProps {
  chats: {
    id: string;
    title: string;
    updatedAt: Date;
  }[];
}

export function RecentChats({ chats }: RecentChatsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Chats</CardTitle>
      </CardHeader>

      <CardContent>
        {chats.length === 0 ? (
          <div className="text-muted-foreground py-6 text-center text-sm">
            No conversations yet.
          </div>
        ) : (
          <div className="space-y-2">
            {chats.map((chat) => (
              <Link
                key={chat.id}
                href={`/dashboard/chat/${chat.id}`}
                className="hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors"
              >
                <MessageSquare className="text-muted-foreground h-4 w-4" />

                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">
                    {chat.title}
                  </p>

                  <p className="text-muted-foreground text-xs">
                    {chat.updatedAt.toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}