import { redirect } from "next/navigation";

import { getCurrentSession } from "@/src/lib/auth-session";
import { AppShell } from "@/src/components/layout/app-shell";
import { getCurrentWorkspace } from "@/src/features/workspaces/queries";
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

    const workspace = await getCurrentWorkspace(session.user.id);

    if (!workspace) {
        redirect("/login");
    }

    return (
  <Providers>
    <AppShell
      user={session.user}
      workspace={workspace}
    >
      {children}
    </AppShell>
  </Providers>
);

}