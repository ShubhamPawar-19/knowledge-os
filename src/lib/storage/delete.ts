import { STORAGE_BUCKET, storageClient } from "./client";
import { StorageError } from "./errors";
import type { DeleteFileInput } from "./types";

export async function deleteFile({
  key,
}: DeleteFileInput): Promise<void> {
  const { data, error } = await storageClient.storage
  .from(STORAGE_BUCKET)
  .remove([key]);

console.log({
  bucket: STORAGE_BUCKET,
  key,
  data,
  error,
});

if (error) {
  throw new StorageError(error.message);
}
}