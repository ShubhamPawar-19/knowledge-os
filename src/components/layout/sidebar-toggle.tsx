"use client";

import {
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { useSidebar } from "./sidebar-provider";


export function SidebarToggle() {
  const {
    collapsed,
    toggle,
  } = useSidebar();


  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
    >
      {collapsed ? (
        <PanelLeftOpen />
      ) : (
        <PanelLeftClose />
      )}
    </Button>
  );
}