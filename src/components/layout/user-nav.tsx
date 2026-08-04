import { UserCircle } from "lucide-react";

import { LogoutButton } from "./logout-button";
import type { DashboardUser } from "@/src/types/dashboard";

interface UserNavProps {
  user: DashboardUser;
}

export function UserNav({
  user,
}: UserNavProps) {
  const displayName =
    user.name ?? user.email;

  const initials =
    displayName
      .charAt(0)
      .toUpperCase();

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border p-3">
      <div className="flex min-w-0 items-center gap-3">
        {/* Avatar */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {user.image ? (
            <img
              src={user.image}
              alt={displayName}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            initials
          )}
        </div>

        {/* User Info */}
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">
            {displayName}
          </p>

          <p className="truncate text-xs text-muted-foreground">
            {user.email}
          </p>
        </div>
      </div>

      <LogoutButton />
    </div>
  );
}