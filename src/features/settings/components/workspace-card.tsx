"use client";

import { useState } from "react";
import { Check, Copy, Pencil } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

interface WorkspaceCardProps {
  workspace: {
    id: string;
    name: string;
    slug: string;
  };
}

export function WorkspaceCard({
  workspace,
}: WorkspaceCardProps) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(workspace.name);
  const [copied, setCopied] = useState(false);

  async function copyWorkspaceId() {
    await navigator.clipboard.writeText(workspace.id);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function cancelEdit() {
    setName(workspace.name);
    setEditing(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Workspace
        </CardTitle>

        <CardDescription>
          Manage your workspace identity and details.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Name */}

        <div className="space-y-3">
          <Label>
            Workspace Name
          </Label>

          {editing ? (
            <div className="flex gap-3">
              <Input
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

              <Button>
                Save
              </Button>

              <Button
                variant="outline"
                onClick={cancelEdit}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between rounded-xl border p-4">
              <div>
                <p className="font-medium">
                  {workspace.name}
                </p>

                <p className="text-muted-foreground text-sm">
                  Your workspace name.
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditing(true)}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>
          )}
        </div>


        {/* Slug */}

        <div className="space-y-3">
          <Label>
            Workspace Slug
          </Label>

          <div className="rounded-xl border bg-muted/30 p-4">
            <p className="font-mono text-sm">
              {workspace.slug}
            </p>

            <p className="text-muted-foreground mt-1 text-xs">
              Used internally to identify your workspace.
            </p>
          </div>
        </div>


        {/* ID */}

        <div className="space-y-3">
          <Label>
            Workspace ID
          </Label>

          <div className="flex items-center justify-between rounded-xl border bg-muted/30 p-4">
            <div className="min-w-0">
              <p className="truncate font-mono text-sm">
                {workspace.id}
              </p>

              <p className="text-muted-foreground mt-1 text-xs">
                Unique workspace identifier.
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={copyWorkspaceId}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}