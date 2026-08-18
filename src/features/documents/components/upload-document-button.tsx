"use client";

import { Upload } from "lucide-react";

import { Button } from "@/src/components/ui/button";

interface UploadDocumentButtonProps {
  onClick: () => void;
}

export function UploadDocumentButton({
  onClick,
}: UploadDocumentButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="gap-2 rounded-lg px-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <Upload className="h-4 w-4" />
      Upload Document
    </Button>
  );
}