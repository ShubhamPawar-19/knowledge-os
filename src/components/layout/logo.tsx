"use client";

import Link from "next/link";
import { useSidebar } from "./sidebar-provider";

export function Logo() {
  const { collapsed } = useSidebar();

  return (
    <Link
      href="/dashboard"
      className="text-xl font-semibold tracking-tight"
    >
      {collapsed ? "K" : "KnowledgeOS"}
    </Link>
  );
}