import { NewChatButton } from "@/src/features/chat/components/new-chat-button";
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
    workspaceId: string;
}

export function AppSidebar({
    user,
    workspace,
    workspaceId
}: AppSidebarProps) {
    return (
        <aside className="flex h-full w-64 flex-col border-r bg-background">
            <div className="border-b p-6">
                <Logo />
            </div>

            <div className="border-b p-2">
                <WorkspaceSwitcher workspace={workspace} />
                <div className=" p-2">
                    <Navigation />
                </div>
            </div>
            <div className="border-b p-2">
                <NewChatButton workspaceId={workspaceId} />
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="border-t p-1">
                    <ChatSidebar workspaceId={workspace.id} />
                </div>
            </div>

            <div className="border-t p-4">
                <UserNav user={user} />
            </div>
        </aside>
    );
}