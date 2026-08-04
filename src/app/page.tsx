import { redirect } from "next/navigation";

import { getCurrentSession } from "@/src/lib/auth-session";
import { getCurrentWorkspace } from "@/src/features/workspaces/queries";

export default async function HomePage() {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/login");
  }

  const workspace = await getCurrentWorkspace(
    session.user.id,
  );

  if (!workspace) {
    redirect("/login");
  }

  redirect("/dashboard");
}