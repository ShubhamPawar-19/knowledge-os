"use client";

import { FileText } from "lucide-react";
import { useState } from "react";

import { UploadDocumentButton } from "./upload-document-button";
import { UploadDocumentDialog } from "./upload-document-dialog";

export function EmptyState() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20">
        <FileText className="mb-4 h-10 w-10 text-muted-foreground" />

        <h2 className="text-lg font-semibold">
          No documents yet
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Upload your first PDF to get started.
        </p>

        <div className="mt-6">
          <UploadDocumentButton
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      <UploadDocumentDialog
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}