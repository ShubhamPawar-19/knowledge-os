import Link from "next/link";
import { FileText } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

interface RecentDocumentsProps {
  documents: {
    id: string;
    name: string;
    status: string;
    createdAt: Date;
  }[];
}

export function RecentDocuments({
  documents,
}: RecentDocumentsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Documents</CardTitle>
      </CardHeader>

      <CardContent>
        {documents.length === 0 ? (
          <div className="text-muted-foreground py-6 text-center text-sm">
            No documents yet.
          </div>
        ) : (
          <div className="space-y-2">
            {documents.map((document) => (
              <Link
                key={document.id}
                href="/dashboard/documents"
                className="hover:bg-muted flex items-center justify-between rounded-lg p-3 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText className="text-muted-foreground h-4 w-4" />

                  <div>
                    <p className="font-medium">{document.name}</p>

                    <p className="text-muted-foreground text-xs">
                      {document.createdAt.toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <Badge variant="secondary">
                  {document.status}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}