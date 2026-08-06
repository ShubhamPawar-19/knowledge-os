"use client";

import { useSidebar } from "./sidebar-provider";

import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { UserNav } from "./user-nav";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { SidebarToggle } from "./sidebar-toggle";

import { NewChatButton } from "@/src/features/chat/components/new-chat-button";
import { ChatSidebar } from "@/src/features/chat/components/chat-sidebar";

import type {
  DashboardUser,
  DashboardWorkspace,
} from "@/src/types/dashboard";

import { cn } from "@/src/lib/utils";


interface Props {
  user: DashboardUser;
  workspace: DashboardWorkspace;
  workspaces:{
    id:string;
    name:string;
    slug:string;
  }[];
}


export function SidebarClient({
  user,
  workspace,
  workspaces,
}:Props){

const {collapsed}=useSidebar();


return (

<aside
className={cn(
"flex h-full flex-col border-r bg-background transition-all duration-300",
collapsed ? "w-20" : "w-64"
)}
>


<div className="flex items-center justify-between px-4 py-4">

 {!collapsed && <Logo/>}

 <SidebarToggle/>

</div>



<div className="px-3 pb-2">

<WorkspaceSwitcher
workspace={workspace}
workspaces={workspaces}
/>

</div>



<div className="px-2">

<Navigation/>

</div>



<div className="px-3 py-3">

<NewChatButton
workspaceId={workspace.id}
/>

</div>



<div className="flex-1 overflow-y-auto px-2">

<ChatSidebar
workspaceId={workspace.id}
/>

</div>



<div className="border-t p-3">

<UserNav user={user}/>

</div>


</aside>

)

}