import { auth } from "@/src/server/auth";

import { getWorkspaceDocuments } from "@/src/features/documents/server";
import { EmptyState } from "@/src/features/documents/components/empty-state";
import { DocumentsPolling } from "@/src/features/documents/components/polling";
import { DocumentsView } from "@/src/features/documents/components/documents-view";

export default async function DocumentsPage() {
  const session = await auth.api.getSession({
    headers: await import("next/headers").then(({ headers }) =>
      headers()
    ),
  });

  if (!session) {
    return null;
  }

  const documents = await getWorkspaceDocuments(
    session.user.id
  );

  const hasProcessing = documents.some(
    (doc) => doc.status === "PROCESSING"
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Documents
        </h1>

        <p className="text-muted-foreground">
          Manage your knowledge base.
        </p>
      </div>
<div className="h-px w-full bg-border my-4" /> 
     <DocumentsPolling hasProcessing={hasProcessing} />

      {documents.length === 0 ? (
        <EmptyState />
      ) : (
        <DocumentsView documents={documents} />
      )}
    </div>
  );
}