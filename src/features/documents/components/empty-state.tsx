import { FileText } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20">
      <FileText className="mb-4 h-10 w-10 text-muted-foreground" />

      <h2 className="text-lg font-semibold">
        No documents yet
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        Upload your first PDF to get started.
      </p>
    </div>
  );
}