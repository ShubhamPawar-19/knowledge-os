"use client";

import { useQuery } from "@tanstack/react-query";
import { ConversationList } from "./conversation-list";
import { ChatSidebarContent } from "./chat-sidebar-content";


interface Props{
workspaceId:string;
}


export function ChatSidebar({
workspaceId
}:Props){


const {data=[]}=useQuery({
queryKey:["conversations",workspaceId],
queryFn:async()=>{

const res=await fetch(
`/api/conversations?workspaceId=${workspaceId}`
);

return res.json();

}

});

console.log("React Query conversations:", data);
return (
  <ChatSidebarContent
    conversations={data}
  />
);
}