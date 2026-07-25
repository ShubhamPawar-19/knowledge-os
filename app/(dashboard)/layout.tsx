import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth-session";
import { AppShell } from "@/components/ui/layout/app-shell";
import { getCurrentWorkspace } from "@/features/workspace/queries";

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
        {children}
    </AppShell>;

}