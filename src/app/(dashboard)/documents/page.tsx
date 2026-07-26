import { auth } from "@/src/server/auth";

import { getWorkspaceDocuments } from "@/src/features/documents/server";
import { EmptyState } from "@/src/features/documents/components/empty-state";
import { DocumentGrid } from "@/src/features/documents/components/document-grid";

export default async function DocumentsPage() {
  const session = await auth.api.getSession({
    headers: await import("next/headers").then(({ headers }) => headers()),
  });

  if (!session) {
    return null;
  }

  const documents = await getWorkspaceDocuments(
    session.user.id
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

      {documents.length === 0 ? (
        <EmptyState />
      ) : (
        <DocumentGrid documents={documents} />
      )}
    </div>
  );
}