import type { DashboardWorkspace } from "@/src/types/dashboard";

interface AppHeaderProps {
  workspace: DashboardWorkspace;
}

export function AppHeader({
  workspace,
}: AppHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div>
        <h1 className="text-lg font-semibold">
          {workspace.name}
        </h1>
      </div>

      <div />
    </header>
  );
}