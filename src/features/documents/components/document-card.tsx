"use client";

import { Document } from "@prisma/client";
import { FileText, Trash2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useDeleteDocument } from "../hooks/use-delete-document";
import { useState } from "react";
import { DeleteDocumentDialog } from "./delete-document-dialog";
import { Badge } from "@/components/ui/badge";

interface DocumentCardProps {
    document: Document;
}

export function DocumentCard({
    document,
}: DocumentCardProps) {
    const { remove } = useDeleteDocument();
    const [open, setOpen] = useState(false);
    return (
        <>
            <Card>
                <CardContent className="space-y-4 p-5">
                    <FileText className="h-8 w-8 text-primary" />

                    <div>
                        <h3 className="truncate font-medium">
                            {document.originalName}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {(document.size / 1024 / 1024).toFixed(2)} MB
                        </p>

                        <p className="text-xs text-muted-foreground">
                            Created {document.createdAt.toLocaleDateString()}
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