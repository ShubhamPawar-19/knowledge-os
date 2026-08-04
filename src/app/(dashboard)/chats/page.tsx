import Link from "next/link";
import { MessageSquare, Plus } from "lucide-react";

import { listConversations } from "@/src/features/chat/queries/list-conversations";
import { getCurrentWorkspace } from "@/src/features/workspaces/queries";
import { getCurrentSession } from "@/src/lib/auth-session";
import { Button } from "@/src/components/ui/button";

export default async function ChatPage() {
  const session = await getCurrentSession();

  if (!session?.user?.id) {
    return null;
  }

  const workspace = await getCurrentWorkspace(
    session.user.id,
  );

  if (!workspace) {
    return null;
  }

  const conversations = await listConversations(
    workspace.id,
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Conversations
          </h1>

          <p className="text-muted-foreground">
            Browse and continue your AI conversations.
          </p>
        </div>

        <Link href="/dashboard/chat/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Conversation
          </Button>
        </Link>
      </div>
      <hr className="my-4 border-gray-200 font-extrabold" />
      {conversations.length === 0 ? (
        <div className="flex h-64 items-center justify-center rounded-lg border text-sm text-muted-foreground">
          No conversations yet.
        </div>
      ) : (
        <div className="space-y-2">
          {conversations.map((conversation) => (
            <Link
              key={conversation.id}
              href={`/chat/${conversation.id}`}
              className="group flex items-center gap-3 rounded-xl border p-4 transition-all duration-200 hover:bg-muted/60 hover:shadow-sm"
            >
              <MessageSquare className="h-5 w-5 shrink-0" />

              <div className="min-w-0">
                <p className="truncate font-medium">
                  {conversation.title}
                </p>

                <p className="text-sm text-muted-foreground">
                  {conversation.updatedAt.toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}