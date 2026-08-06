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
import { useSidebar } from "@/src/components/layout/sidebar-provider";
import { cn } from "@/src/lib/utils";

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

  const {
    collapsed,
  } = useSidebar();


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
    flex items-center justify-center
    rounded-lg border px-3 py-2
    hover:bg-muted
    transition
    "
        >

          <Building2 className="h-4 w-4 text-primary" />

          {!collapsed && (
            <>
              <span className="ml-2 truncate">
                {workspace.name}
              </span>

              <ChevronsUpDown className="ml-auto h-4 w-4 text-muted-foreground" />
            </>
          )}

        </div>
      </DropdownMenuTrigger>


      <DropdownMenuContent
        align="start"
        className="w-64"
      >

        {workspaces.map((item) => {

          const isActive =
            item.id === workspace.id;


          return (
            <DropdownMenuItem
              key={item.id}
              onClick={() =>
                handleWorkspaceSwitch(item.id)
              }
              className="
              flex cursor-pointer items-center 
              justify-between
              "
            >

              <div className="flex flex-col">

                <span className="font-medium">
                  {item.name}
                </span>

                <span className="text-xs text-muted-foreground">
                  {item.slug}
                </span>

              </div>


              {isActive && (
                <Check
                  className="
                  h-4 w-4 text-primary
                  "
                />
              )}

            </DropdownMenuItem>
          );

        })}



        <DropdownMenuItem>

          <Link
            href="/workspace"
            className="
            flex items-center gap-2
            "
          >

            <Plus className="h-4 w-4" />

            Create Workspace

          </Link>

        </DropdownMenuItem>




        <DropdownMenuItem>

          <Link
            href="/settings"
            className="
            flex items-center gap-2
            "
          >

            <Settings className="h-4 w-4" />

            Manage Workspace

          </Link>

        </DropdownMenuItem>


      </DropdownMenuContent>

    </DropdownMenu>
  );
}