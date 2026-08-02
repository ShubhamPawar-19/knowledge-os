"use client";

import { Button } from "@/src/components/ui/button";


interface UploadDocumentButtonProps {
  onClick: () => void;
}

export function UploadDocumentButton({
  onClick,
}: UploadDocumentButtonProps) {
  return (
    <Button onClick={onClick}>
      Upload Document
    </Button>
  );
}