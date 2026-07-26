import { Document } from "@prisma/client";

import { DocumentCard } from "./document-card";

interface DocumentGridProps {
  documents: Document[];
}

export function DocumentGrid({
  documents,
}: DocumentGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {documents.map((document) => (
        <DocumentCard
          key={document.id}
          document={document}
        />
      ))}
    </div>
  );
}