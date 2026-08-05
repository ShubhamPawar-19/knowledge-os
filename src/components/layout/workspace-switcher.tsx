"use client";

import {
  Building2,
  ChevronsUpDown,
  Plus,
  Settings,
  Check,
} from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { DashboardWorkspace } from "@/src/types/dashboard";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { switchWorkspace } from "@/src/features/workspaces/actions/switch-workspace";

interface WorkspaceSwitcherProps {
  workspace: DashboardWorkspace;
  workspaces: {
    id: string;
    name: string;
    slug: string;
  }[];
}
export function WorkspaceSwitcher({
  workspace,
  workspaces,
}: WorkspaceSwitcherProps) {
  const router = useRouter();

  async function handleWorkspaceSwitch(
    workspaceId: string,
  ) {
    await switchWorkspace(workspaceId);

    router.refresh();
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className="
            flex items-center justify-between
            rounded-lg border px-3 py-2 gap-2
            text-sm font-medium
            transition-colors
            hover:bg-muted
          "
        >
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
              <Building2 className="h-4 w-4 text-primary" />
            </div>

            <span className="truncate">
              {workspace.name}
            </span>
          </div>

          <ChevronsUpDown className="h-4 w-4 text-muted-foreground " />
        </div>
      </DropdownMenuTrigger>


      <DropdownMenuContent
        align="start"
        className="w-64"
      >
        {/* Current Workspaces */}

        {workspaces.map((item) => {
          const isActive = item.id === workspace.id;

          return (
            <DropdownMenuItem
              key={item.id}
              onClick={() => handleWorkspaceSwitch(item.id)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="font-medium">
                  {item.name}
                </span>

                <span className="text-xs text-muted-foreground">
                  {item.slug}
                </span>
              </div>

              {item.id === workspace.id && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          );
        })}

        {/* Create */}

        <DropdownMenuItem >
          <Link
            href="/workspace"
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />

            Create Workspace
          </Link>
        </DropdownMenuItem>

        {/* Manage */}
        <DropdownMenuItem>
          <Link href="/settings">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Manage Workspace
            </div>
          </Link>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}