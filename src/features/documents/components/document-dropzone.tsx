"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

interface DocumentDropzoneProps {
  onFileSelect: (file: File) => void;
}

export function DocumentDropzone({
  onFileSelect,
}: DocumentDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        rounded-lg
        border-2
        border-dashed
        p-10
        text-center
        transition-colors
        ${
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25"
        }
      `}
    >
      <input {...getInputProps()} />

      <UploadCloud className="mb-4 h-10 w-10" />

      <p className="font-medium">
        Drag & drop your PDF here
      </p>

      <p className="mt-2 text-sm text-muted-foreground">
        or click to browse
      </p>
    </div>
  );
}