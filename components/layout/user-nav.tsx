import { LogoutButton } from "./logout-button";
import type { DashboardUser } from "@/src/types/dashboard";

interface UserNavProps {
  user: DashboardUser;
}

export function UserNav({
  user,
}: UserNavProps) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>

      <LogoutButton />
    </>
  );
}