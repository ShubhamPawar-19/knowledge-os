import { listConversations } from "../queries/list-conversations";

import { ConversationList } from "./conversation-list";
import { NewChatButton } from "./new-chat-button";

interface Props {
  workspaceId: string;
}

export async function ChatSidebar({
  workspaceId,
}: Props) {
  const conversations = await listConversations(workspaceId);

  return (
    <>
        <ConversationList conversations={conversations} />
    </>
  );
}