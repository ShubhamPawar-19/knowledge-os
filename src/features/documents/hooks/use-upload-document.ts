"use client";

import { toast } from "sonner";

export function useUploadDocument() {
  async function upload(file: File) {
    const formData = new FormData();

    formData.append("file", file);

    const response = await fetch("/api/documents/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      toast.error("Upload failed.");
      throw new Error("Upload failed.");
    }

    toast.success("Document uploaded.");

    return response.json();
  }

  return { upload };
}