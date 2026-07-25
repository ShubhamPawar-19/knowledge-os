import type { DashboardWorkspace } from "@/types/dashboard";

interface WorkspaceSwitcherProps {
  workspace: DashboardWorkspace;
}

export function WorkspaceSwitcher({
  workspace,
}: WorkspaceSwitcherProps) {
  return (
    <button className="flex w-full items-center justify-between rounded-lg border px-3 py-2 text-sm font-medium">
      <span>{workspace.name}</span>
      <span>⌄</span>
    </button>
  );
}