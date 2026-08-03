import { MessageSquarePlus } from "lucide-react";

import { headers } from "next/headers";

import { NewChatButton } from "@/src/features/chat/components/new-chat-button";
import { auth } from "@/src/server/auth";
import { getCurrentWorkspace } from "@/src/features/workspaces/queries";

export default async function ChatPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return null;
  }

  const workspace = await getCurrentWorkspace(
    session.user.id,
  );

  if (!workspace) {
    return null;
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <MessageSquarePlus className="h-8 w-8 text-muted-foreground" />
        </div>

        <h1 className="text-2xl font-semibold">
          Start a New Conversation
        </h1>

        <p className="mb-6 mt-2 text-sm text-muted-foreground">
          Ask questions about your uploaded documents, brainstorm ideas, or
          explore your knowledge base.
        </p>

        <NewChatButton workspaceId={workspace.id} />
      </div>
    </div>
  );
}