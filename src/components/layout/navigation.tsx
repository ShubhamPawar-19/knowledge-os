"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/config/navigation";
import { cn } from "@/src/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

import { useSidebar } from "@/src/components/layout/sidebar-provider";

export function Navigation() {
  const pathname = usePathname();
  const { collapsed } = useSidebar();

  return (
    <nav className="flex flex-col gap-1">
      {navigation.map((item) => {
        const Icon = item.icon;

        const active =
          pathname === item.href ||
          pathname.startsWith(`${item.href}/`);

        const link = (
          <Link
            href={item.href}
            className={cn(
              "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              collapsed
                ? "justify-center"
                : "gap-3",
              active
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className="size-4 shrink-0" />

            {!collapsed && (
              <span>
                {item.title}
              </span>
            )}
          </Link>
        );


        if (collapsed) {
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                {link}
              </TooltipTrigger>

              <TooltipContent side="right">
                {item.title}
              </TooltipContent>
            </Tooltip>
          );
        }


        return (
          <div key={item.href}>
            {link}
          </div>
        );
      })}
    </nav>
  );
}