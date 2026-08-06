import type {
  DashboardUser,
  DashboardWorkspace,
} from "@/src/types/dashboard";

import { MobileSidebar } from "./mobile-sidebar";

interface AppHeaderProps {
  user: DashboardUser;
  workspace: DashboardWorkspace;
  workspaces: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export function AppHeader({
  user,
  workspace,
  workspaces,
}: AppHeaderProps) {
  return (
    <header className="flex h-16 items-center border-b px-4 md:px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar
          user={user}
          workspace={workspace}
          workspaces={workspaces}
        />

        <h1 className="text-lg font-semibold">
          {workspace.name}
        </h1>
      </div>
    </header>
  );
}