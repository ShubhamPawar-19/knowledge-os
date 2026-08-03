import Link from "next/link";
import { MessageSquare } from "lucide-react";

import { listConversations } from "@/src/features/chat/queries/list-conversations";
import { getCurrentWorkspace } from "@/src/features/workspaces/queries";
import { getCurrentSession } from "@/src/lib/auth-session";

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
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">
          Conversation History
        </h1>

        <p className="text-sm text-muted-foreground">
          Your previous AI conversations.
        </p>
      </div>

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
              className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
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