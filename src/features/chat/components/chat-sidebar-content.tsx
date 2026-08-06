"use client";

import { ChevronDown, MessageCircle } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/ui/collapsible";

import { useSidebar } from "@/src/components/layout/sidebar-provider";

import { ConversationList } from "./conversation-list";


interface Props {
  conversations: any[];
}


export function ChatSidebarContent({
  conversations,
}: Props) {


  const {
    collapsed,
  } = useSidebar();



  if (collapsed) {

    return (
      <div className="space-y-2">

        {conversations.map((conversation)=>(
          
          <div
            key={conversation.id}
            className="
            flex h-10 w-10
            items-center justify-center
            rounded-lg
            hover:bg-muted
            cursor-pointer
            "
            title={conversation.title}
          >

            <MessageCircle
              className="h-4 w-4"
            />

          </div>

        ))}

      </div>
    );

  }



  return (

    <Collapsible defaultOpen>

      <CollapsibleTrigger
        className="
        flex w-full items-center 
        justify-between rounded-md 
        px-3 py-2 text-sm font-medium
        hover:bg-muted
        "
      >

        <span>
          Recents
        </span>


        <ChevronDown
          className="
          h-4 w-4 
          transition-transform
          data-[state=open]:rotate-180
          "
        />

      </CollapsibleTrigger>



      <CollapsibleContent className="mt-1">

        <ConversationList
          conversations={conversations}
        />

      </CollapsibleContent>


    </Collapsible>

  );
}