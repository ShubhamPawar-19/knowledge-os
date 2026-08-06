"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/src/components/ui/sheet";

import { Button } from "@/src/components/ui/button";

import { AppSidebar } from "./app-sidebar";

import type {
  DashboardUser,
  DashboardWorkspace,
} from "@/src/types/dashboard";


interface MobileSidebarProps {
  user: DashboardUser;
  workspace: DashboardWorkspace;
  workspaces: {
    id: string;
    name: string;
    slug: string;
  }[];
}


export function MobileSidebar({
  user,
  workspace,
  workspaces,
}: MobileSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-72 p-0"
      >
        <AppSidebar
          user={user}
          workspace={workspace}
          workspaces={workspaces}
        />
      </SheetContent>
    </Sheet>
  );
}