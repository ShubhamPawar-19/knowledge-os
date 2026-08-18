import { headers } from "next/headers";

import { auth } from "@/src/server/auth";
import { getWorkspaceDocuments } from "@/src/features/documents/server";
import { EmptyState } from "@/src/features/documents/components/empty-state";
import { DocumentsPolling } from "@/src/features/documents/components/polling";
import { DocumentsView } from "@/src/features/documents/components/documents-view";

export default async function DocumentsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
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
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Documents
          </h1>

          <p className="text-muted-foreground">
            Manage your knowledge base.
          </p>
        </div>

      </div>

      <div className="h-px w-full bg-border" />
      <DocumentsPolling hasProcessing={hasProcessing} />

      {documents.length === 0 ? (
        <EmptyState />
      ) : (
        <DocumentsView documents={documents} />
      )}
    </div>
  );
}