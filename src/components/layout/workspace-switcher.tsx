"use client";

import {
  Building2,
  ChevronsUpDown,
  Plus,
  Settings,
} from "lucide-react";

import Link from "next/link";

import type { DashboardWorkspace } from "@/src/types/dashboard";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

interface WorkspaceSwitcherProps {
  workspace: DashboardWorkspace;
}

export function WorkspaceSwitcher({
  workspace,
}: WorkspaceSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          className="
            flex w-full items-center justify-between
            rounded-lg border px-3 py-2
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

          <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>


      <DropdownMenuContent
        align="start"
        className="w-64"
      >
        {/* Current Workspace */}

        <DropdownMenuItem className="flex flex-col items-start gap-1">
          <span className="font-medium">
            {workspace.name}
          </span>

          <span className="text-xs text-muted-foreground">
            {workspace.slug}
          </span>
        </DropdownMenuItem>


        {/* Manage */}
        <DropdownMenuItem>
          <Link href="/dashboard/settings">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Manage Workspace
            </div>
          </Link>
        </DropdownMenuItem>


        {/* Create */}

        <DropdownMenuItem >
          <Link
            href="/dashboard/workspaces/new"
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />

            Create Workspace
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}