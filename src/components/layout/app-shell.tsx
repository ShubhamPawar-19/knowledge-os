import { AppSidebar } from "./app-sidebar";

import type {
  DashboardUser,
  DashboardWorkspace,
} from "@/src/types/dashboard";

interface AppShellProps {
  user: DashboardUser;
  workspace: DashboardWorkspace;
  children: React.ReactNode;
}

export function AppShell({
  user,
  workspace,
  children,
}: AppShellProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar
        user={user}
        workspace={workspace}
        workspaceId={workspace.id}
      />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}