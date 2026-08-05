import { Building2 } from "lucide-react";

import { CreateWorkspaceForm } from "@/src/features/workspaces/components/create-workspace-form";

export default function NewWorkspacePage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-xl items-center">
      <div className="w-full rounded-2xl border bg-card p-8 shadow-sm">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Building2 className="h-6 w-6 text-primary" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Create Workspace
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Every workspace has its own documents, conversations,
              AI settings, and team members.
            </p>
          </div>
        </div>

        <CreateWorkspaceForm />
      </div>
    </div>
  );
}