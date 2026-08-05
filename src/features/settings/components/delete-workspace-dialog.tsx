"use client";

import {
  AlertTriangle,
  Loader2,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/src/components/ui/alert-dialog";

interface DeleteWorkspaceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  workspace: {
    id: string;
    name: string;
  };
  loading: boolean;
  onConfirm: () => Promise<void>;
}

export function DeleteWorkspaceDialog({
  open,
  onOpenChange,
  workspace,
  loading,
  onConfirm,
}: DeleteWorkspaceDialogProps) {
  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>

          <AlertDialogTitle>
            Delete workspace?
          </AlertDialogTitle>

          <AlertDialogDescription className="space-y-4">
            <p>
              This action is permanent and cannot be undone.
            </p>

            <div className="rounded-lg border bg-muted/50 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Workspace
              </p>

              <p className="mt-1 font-medium">
                {workspace.name}
              </p>
            </div>

            <p>
              All documents, conversations, embeddings, AI settings, and
              workspace members will be permanently removed.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              void onConfirm();
            }}
            className="bg-destructive hover:bg-destructive/90"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete Workspace"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}