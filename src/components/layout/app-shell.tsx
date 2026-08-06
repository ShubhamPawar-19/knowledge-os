import { SidebarProvider } from "./sidebar-provider";
import { AppSidebar } from "./app-sidebar";

import type {
  DashboardUser,
  DashboardWorkspace,
} from "@/src/types/dashboard";
import { SidebarContainer } from "./sidebar-container";
import { TooltipProvider } from "@/src/components/ui/tooltip";

interface AppShellProps {
  user: DashboardUser;
  workspace: DashboardWorkspace;
  workspaces: {
    id: string;
    name: string;
    slug: string;
  }[];
  children: React.ReactNode;
}
export function AppShell({
  user,
  workspace,
  children,
  workspaces,
}: AppShellProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar
        user={user}
        workspace={workspace}
        workspaces={workspaces}
      />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}