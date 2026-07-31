import { ChatSidebar } from "../../src/features/chat/components/chat-sidebar";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { UserNav } from "./user-nav";
import { WorkspaceSwitcher } from "./workspace-switcher";

import type {
    DashboardUser,
    DashboardWorkspace,
} from "@/src/types/dashboard";

interface AppSidebarProps {
    user: DashboardUser;
    workspace: DashboardWorkspace;
}

export function AppSidebar({
    user,
    workspace,
}: AppSidebarProps) {
    return (
        <aside className="flex h-screen w-64 flex-col border-r bg-background ">
            <div className="border-b p-6">
                <Logo />
            </div>
            
            <div className="overflow-y-auto">
            <div className="border-b p-4">
                <WorkspaceSwitcher workspace={workspace} />
            </div>


            <div className="flex-1 ">
                <Navigation  />
                <div className="border-t p-1">
                <ChatSidebar workspaceId={workspace.id} />
                </div>
            </div>
            </div>
            <div className="border-t p-4 ">
                <UserNav user={user} />
            </div>
        </aside>
    );
}