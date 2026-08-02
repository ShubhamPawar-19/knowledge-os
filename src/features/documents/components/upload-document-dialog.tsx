"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { DocumentDropzone } from "./document-dropzone";
import { useState } from "react";
import { useUploadDocument } from "../hooks/use-upload-document";
import { Button } from "@/src/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface UploadDocumentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UploadDocumentDialog({
  open,
  onOpenChange,
}: UploadDocumentDialogProps) {

  const [file, setFile] = useState<File | null>(null);

  const [isUploading, setIsUploading] = useState(false);

  const { upload } = useUploadDocument();

  const router = useRouter();


  const handleUpload = async () => {
    if (!file) return;

    try {
      setIsUploading(true);

      await upload(file);

      setFile(null);
      onOpenChange(false);
    } finally {
      setIsUploading(false);
    }
    router.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>

          <DialogDescription>
            Upload a PDF document to your workspace.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-8">
          {file ? (
            <div className="rounded-lg border p-4">
              <p className="font-medium">{file.name}</p>

              <p className="text-sm text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFile(null)}
                disabled={isUploading}
                className="mt-4"
              >
                Remove
              </Button>
            </div>
          ) : (
            <DocumentDropzone onFileSelect={setFile} />
          )}

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isUploading}
            >
              Cancel
            </Button>

            <Button
              onClick={handleUpload}
              disabled={!file || isUploading}
            >
              {isUploading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}

              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
}