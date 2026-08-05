"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

import { deleteWorkspace } from "../actions/delete-workspace";
import { DeleteWorkspaceDialog } from "./delete-workspace-dialog";

interface DangerZoneCardProps {
  workspace: {
    id: string;
    name: string;
  };
}

export function DangerZoneCard({
  workspace,
}: DangerZoneCardProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
  try {
    setLoading(true);

    const result = await deleteWorkspace(
      workspace.id,
    );

    setOpen(false);

    router.replace(
      result.nextWorkspaceId
        ? "/dashboard"
        : "/workspace",
    );
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

  return (
    <>
      <Card className="border-destructive/40">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />

            <CardTitle>
              Danger Zone
            </CardTitle>
          </div>

          <CardDescription>
            Actions here can permanently affect your workspace.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-4 rounded-xl border border-destructive/30 bg-destructive/5 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold">
                Delete Workspace
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Permanently delete this workspace,
                including all documents,
                conversations, AI settings,
                and team members.
              </p>
            </div>

            <Button
              variant="destructive"
              onClick={() => setOpen(true)}
            >
              Delete Workspace
            </Button>
          </div>
        </CardContent>
      </Card>

      <DeleteWorkspaceDialog
        open={open}
        onOpenChange={setOpen}
        workspace={workspace}
        loading={loading}
        onConfirm={handleDelete}
      />
    </>
  );
}