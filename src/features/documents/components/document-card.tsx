"use client";

import { useState } from "react";
import Link from "next/link";

import { Document } from "@prisma/client";
import {
  FileText,
  Trash2,
  ExternalLink,
} from "lucide-react";

import { formatDistanceToNow } from "date-fns";

import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

import { useDeleteDocument } from "../hooks/use-delete-document";
import { DeleteDocumentDialog } from "./delete-document-dialog";
import { DocumentStatusBadge } from "./document-status-badge";
import { documentRoute } from "../routes/documents";


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
      <Card className="group relative h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

        <CardContent className="space-y-5 p-6">

          <div className="flex items-start justify-between">

            <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl">
              <FileText className="h-6 w-6" />
            </div>


            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-destructive"
              onClick={() => setOpen(true)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>

          </div>


          <div className="space-y-1">

            <h3
              className="truncate text-base font-semibold"
              title={document.originalName}
            >
              {document.originalName}
            </h3>


            <p className="text-muted-foreground text-sm">
              {(document.size / 1024 / 1024).toFixed(2)} MB
            </p>


            <p className="text-muted-foreground text-sm">
              Uploaded{" "}
              {formatDistanceToNow(document.createdAt, {
                addSuffix: true,
              })}
            </p>

          </div>


          <DocumentStatusBadge
            status={document.status}
          />


          <Link
            href={documentRoute(document.id)}
          >

            <Button
              variant="outline"
              className="w-full gap-2"
              disabled={document.status !== "READY"}
            >

              <ExternalLink className="h-4 w-4" />

              View Document

            </Button>

          </Link>


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
  );
}