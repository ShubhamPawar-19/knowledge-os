import Link from "next/link";
import {
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

interface RecentChatsProps {
  chats: {
    id: string;
    title: string;
    updatedAt: Date;
  }[];
}

export function RecentChats({
  chats,
}: RecentChatsProps) {
  return (
    <Link 
    href="/chats/">
    <Card>
      <CardHeader>
        <CardTitle>Recent Conversations</CardTitle>

        <CardDescription>
          Continue where you left off.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {chats.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="bg-muted mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
              <MessageSquare className="text-muted-foreground h-6 w-6" />
            </div>

            <h3 className="text-sm font-semibold">
              No conversations yet
            </h3>

            <p className="text-muted-foreground mt-2 max-w-xs text-sm">
              Start a new AI conversation with your
              uploaded knowledge.
            </p>

            <Link
              href="/chat/new"
              className="mt-6"
            >
              <Button>New Chat</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {chats.map((chat) => (
              <Link
                key={chat.id}
                href={`/dashboard/chat/${chat.id}`}
                className="group hover:bg-muted/60 flex items-center justify-between rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
                    <MessageSquare className="text-muted-foreground h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">
                      {chat.title}
                    </p>

                    <p className="text-muted-foreground text-xs">
                      Updated{" "}
                      {formatDistanceToNow(
                        chat.updatedAt,
                        {
                          addSuffix: true,
                        }
                      )}
                    </p>
                  </div>
                </div>

                <ChevronRight className="text-muted-foreground h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
    </Link>
  );
}