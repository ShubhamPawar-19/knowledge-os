import Link from "next/link";

import { Button } from "@/src/components/ui/button";
import { WorkspaceCard } from "@/src/features/settings/components/workspace-card";
import { getCurrentWorkspace } from "@/src/features/workspaces/queries";
import { auth } from "@/src/server/auth";
import { headers } from "next/headers";
import { DangerZoneCard } from "@/src/features/settings/components/danger-zone-card";
import { MembersCard } from "@/src/features/settings/components/members-card";
import { getWorkspaceMembers } from "@/src/features/settings/queries/get-workspace-members";


export default async function SettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return null;
  }

  const workspace = await getCurrentWorkspace(
    session.user.id,
  );

  if (!workspace) {
    return null;
  }
    const members = await getWorkspaceMembers(
    workspace.id,
  );

  return (
    <div className="w-full space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your account and AI configuration.
        </p>
      </div>
      <hr className="my-4 border-gray-200 font-extrabold" />

      <WorkspaceCard workspace={workspace} />
      <MembersCard members={members}/>
      <div className="rounded-xl border p-6 space-y-4">

        <div>
          <h2 className="text-lg font-semibold">
            AI Models
          </h2>

          <p className="text-sm text-muted-foreground">
            Configure your chat models, embedding models,
            and API credentials.
          </p>
        </div>

        <Link href="/settings/credentials">
          <Button
            variant="outline"
            className="h-12 w-full text-base"
          >
            Model Configuration
          </Button>
        </Link>
      </div>
      <DangerZoneCard workspace={workspace} />
    </div>
  );
}