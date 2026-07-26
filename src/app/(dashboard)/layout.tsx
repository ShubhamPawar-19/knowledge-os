import { redirect } from "next/navigation";

import { getCurrentSession } from "@/src/lib/auth-session";
import { AppShell } from "@/components/layout/app-shell";
import { getCurrentWorkspace } from "@/src/features/workspaces/queries";
import { TRPCProvider } from "../providers/trpc-provider";

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
    if (!session) {
        redirect("/login");
    }

    return <AppShell
        user={session.user}
        workspace={workspace}
    >
        <TRPCProvider>
            {children}
        </TRPCProvider>
    </AppShell>;

}