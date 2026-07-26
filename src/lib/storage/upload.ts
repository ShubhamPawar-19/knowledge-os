import { STORAGE_BUCKET, storageClient } from "./client";
import { StorageError } from "./errors";
import type { UploadFileInput } from "./types";

export async function uploadFile({
  key,
  body,
  contentType,
}: UploadFileInput): Promise<void> {
  const { error } = await storageClient.storage
    .from(STORAGE_BUCKET)
    .upload(key, body, {
      contentType,
      upsert: false,
    });

  if (error) {
    throw new StorageError(error.message);
  }
}