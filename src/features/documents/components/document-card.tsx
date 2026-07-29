"use client";

import { Document } from "@prisma/client";
import { FileText, Trash2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useDeleteDocument } from "../hooks/use-delete-document";
import { useState } from "react";
import { DeleteDocumentDialog } from "./delete-document-dialog";
import { Badge } from "@/components/ui/badge";
import { DocumentStatusBadge } from "./document-status-badge";

interface DocumentCardProps {
    document: Document;
}

export function DocumentCard({
    document,
}: DocumentCardProps) {
    const { remove } = useDeleteDocument();
    const [open, setOpen] = useState(false);
    const formatter = new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    return (
        <>
            <Card>
                <DocumentStatusBadge status={document.status} />
                <CardContent className="space-y-4 p-5">
                    <FileText className="h-8 w-8 text-primary" />

                    <div>
                        <h3 className="truncate font-medium">
                            {document.originalName}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {(document.size / 1024 / 1024).toFixed(2)} MB
                        </p>

                        <p>
                            Created {formatter.format(document.createdAt)}
                        </p>

                        <Badge>
                            {document.status}
                        </Badge>
                    </div>

                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => setOpen(true)}
                    >
                        Delete
                    </Button>
                </CardContent>
            </Card>
            <DeleteDocumentDialog
                open={open}
                onOpenChange={setOpen}
                onConfirm={async () => {
                    await remove(document.id);
                    location.reload();
                }}
            />
        </>
    )
}