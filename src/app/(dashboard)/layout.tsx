import { redirect } from "next/navigation";

import { AppShell } from "@/src/components/layout/app-shell";
import { getCurrentSession } from "@/src/lib/auth-session";
import { getCurrentWorkspace } from "@/src/features/workspaces/queries";
import { getUserWorkspaces } from "@/src/features/workspaces/queries/get-user-workspaces";
import { Providers } from "@/src/trpc/provider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  const workspace = await getCurrentWorkspace(
    user.id,
  );

  if (!workspace) {
    redirect("/workspace");
  }

  const workspaces = await getUserWorkspaces(
    user.id,
  );

  return (
    <Providers>
      <AppShell
        user={user}
        workspace={workspace}
        workspaces={workspaces}
      >
        {children}
      </AppShell>
    </Providers>
  );
}