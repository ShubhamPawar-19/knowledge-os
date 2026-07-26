import { STORAGE_BUCKET, storageClient } from "./client";
import { StorageError } from "./errors";
import type { DeleteFileInput } from "./types";

export async function deleteFile({
  key,
}: DeleteFileInput): Promise<void> {
  const { error } = await storageClient.storage
    .from(STORAGE_BUCKET)
    .remove([key]);

  if (error) {
    throw new StorageError(error.message);
  }
}