"use client";

import { toast } from "sonner";

export function useDeleteDocument() {
  async function remove(id: string) {
    const response = await fetch(`/api/documents/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      toast.error("Delete failed.");
      throw new Error("Delete failed.");
    }

    toast.success("Document deleted.");
  }

  return { remove };
}