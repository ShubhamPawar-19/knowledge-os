import { AppSidebar } from "./app-sidebar";
import { AppHeader } from "./app-header";

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
    <div className="flex min-h-screen">
      <AppSidebar
        user={user}
        workspace={workspace}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader workspace={workspace} />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}