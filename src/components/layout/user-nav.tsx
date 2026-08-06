"use client";

import Link from "next/link";

import { useSidebar } from "@/src/components/layout/sidebar-provider";
import type { DashboardUser } from "@/src/types/dashboard";

import { LogoutButton } from "./logout-button";


interface UserNavProps {
  user: DashboardUser;
}


export function UserNav({
  user,
}: UserNavProps) {

  const {
    collapsed,
  } = useSidebar();


  const displayName =
    user.name ?? user.email;


  const initials =
    displayName
      .charAt(0)
      .toUpperCase();



  return (
    <div
      className={
        collapsed
          ? "flex justify-center"
          : ""
      }
    >

      <Link
        href="/settings"
        className={`
          flex items-center gap-3
          rounded-xl border
          transition-colors
          hover:bg-muted

          ${collapsed
            ? "h-10 w-10 justify-center"
            : "justify-between p-3 w-full"
          }
        `}
      >

        {/* Avatar */}

        <div
          className="
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-full bg-primary/10
          text-sm font-semibold text-primary
          "
        >

          {user.image ? (

            <img
              src={user.image}
              alt={displayName}
              className="
              h-10 w-10 rounded-full object-cover
              "
            />

          ) : (

            initials

          )}

        </div>



        {!collapsed && (

          <div className="min-w-0 flex-1">

            <p
              className="
              truncate text-sm font-medium
              "
            >
              {displayName}
            </p>


            <p
              className="
              truncate text-xs text-muted-foreground
              "
            >
              {user.email}
            </p>

          </div>

        )}



        {!collapsed && (
          <LogoutButton />
        )}


      </Link>

    </div>
  );
}