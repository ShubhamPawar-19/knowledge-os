import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";

interface RecentDocumentsProps {
  documents: {
    id: string;
    name: string;
    status: string;
    createdAt: Date;
  }[];
}

function getStatusVariant(status: string) {
  switch (status.toUpperCase()) {
    case "READY":
      return "default";
    case "PROCESSING":
      return "secondary";
    case "FAILED":
      return "destructive";
    default:
      return "outline";
  }
}

export function RecentDocuments({
  documents,
}: RecentDocumentsProps) {
  return (
    <Link href="/documents/">
    <Card>
      <CardHeader>
        <CardTitle>Recent Documents</CardTitle>

        <CardDescription>
          Your latest uploaded knowledge sources.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {documents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="bg-muted mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
              <FileText className="text-muted-foreground h-6 w-6" />
            </div>

            <h3 className="text-sm font-semibold">
              No documents yet
            </h3>

            <p className="text-muted-foreground mt-2 max-w-xs text-sm">
              Upload PDFs, Markdown files, or text documents
              to start building your knowledge base.
            </p>

            <Link href="/documents">
              <Button className="mt-6">
                Upload Document
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {documents.map((document) => (
              <Link
                key={document.id}
                href="/documents"
                className="group hover:bg-muted/60 flex items-center justify-between rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
                    <FileText className="text-muted-foreground h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate font-medium">
                      {document.name}
                    </p>

                    <p className="text-muted-foreground text-xs">
                      Uploaded{" "}
                      {formatDistanceToNow(
                        document.createdAt,
                        {
                          addSuffix: true,
                        }
                      )}
                    </p>
                  </div>
                </div>

                <div className="ml-4 flex items-center gap-3">
                  <Badge
                    variant={getStatusVariant(
                      document.status
                    )}
                  >
                    {document.status}
                  </Badge>

                  <ChevronRight className="text-muted-foreground h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
    </Link>
  );
}