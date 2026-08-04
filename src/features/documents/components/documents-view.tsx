"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/src/components/ui/input";
import { DocumentGrid } from "./document-grid";

interface DocumentsViewProps {
  documents: any[];
}

export function DocumentsView({
  documents,
}: DocumentsViewProps) {
  const [query, setQuery] = useState("");

  const filteredDocuments = useMemo(() => {
    return documents.filter((document) =>
      document.originalName
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [documents, query]);

  return (
    <div className="space-y-6">
      <div className="relative max-w-full">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

        <Input
          placeholder="Search documents..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {filteredDocuments.length === 0 ? (
        <div className="text-muted-foreground py-12 text-center">
          No documents found.
        </div>
      ) : (
        <DocumentGrid documents={filteredDocuments} />
      )}
    </div>
  );
}