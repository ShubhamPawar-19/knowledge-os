import type { UploadDocumentInput } from "./types";

import { DocumentStatus } from "@prisma/client";

import { validateFile } from "@/src/lib/storage/validation";
import { generateStorageKey } from "@/src/lib/storage/key";
import { uploadFile } from "@/src/lib/storage/upload";
import { requireCurrentWorkspace } from "@/src/features/workspaces/server";
import { db } from "../../db";

export async function uploadDocument({
  userId,
  file,
}: UploadDocumentInput) {
  const workspace = await requireCurrentWorkspace(userId);

  validateFile(file);

  const buffer = Buffer.from(await file.arrayBuffer());

  const extension = file.name.split(".").pop() ?? "";

  const storageKey = generateStorageKey({
    workspaceId: workspace.id,
    extension,
  });

  await uploadFile({
    key: storageKey,
    body: buffer,
    contentType: file.type,
  });

  const document = await db.document.create({
    data: {
      workspaceId: workspace.id,

      name: file.name.replace(/\.[^.]+$/, ""),
      originalName: file.name,

      mimeType: file.type,
      extension,

      size: file.size,

      storageKey,

      status: DocumentStatus.UPLOADED,
    },
  });

  return document;
}