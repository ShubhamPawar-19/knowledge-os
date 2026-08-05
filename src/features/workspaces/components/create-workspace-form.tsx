"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { toast } from "sonner";
import { createWorkspace } from "../actions/create-workspace";

export function CreateWorkspaceForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();

    if (loading) return;

    const trimmedName = name.trim();

    if (!trimmedName) return;

    try {
      setLoading(true);

      const workspace = await createWorkspace({
        name: trimmedName,
      });

      toast.success("Workspace created successfully");
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      toast.error("Failed to create workspace");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="workspace-name">
          Workspace Name
        </Label>

        <Input
          id="workspace-name"
          placeholder="My Knowledge Base"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={loading || !name.trim()}
      >
        {loading
          ? "Creating..."
          : "Create Workspace"}
      </Button>
    </form>
  );
}