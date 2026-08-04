import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/ui/collapsible";

import { listConversations } from "../queries/list-conversations";
import { ConversationList } from "./conversation-list";

interface Props {
  workspaceId: string;
}

export async function ChatSidebar({
  workspaceId,
}: Props) {
  const conversations = await listConversations(
    workspaceId,
  );

  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="hover:bg-muted flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium">
        <span>Recents</span>

        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
      </CollapsibleTrigger>

      <CollapsibleContent className="mt-1">
        <ConversationList
          conversations={conversations}
        />
      </CollapsibleContent>
    </Collapsible>
  );
}