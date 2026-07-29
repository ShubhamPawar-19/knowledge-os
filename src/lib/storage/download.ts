import "server-only";

import { STORAGE_BUCKET, storageClient } from "./client";
import { StorageError } from "./errors";

export async function downloadFile(storageKey: string): Promise<Buffer> {
  const { data, error } = await storageClient.storage
    .from(STORAGE_BUCKET)
    .download(storageKey);

  if (error) {
    throw new StorageError(error.message);
  }

  const arrayBuffer = await data.arrayBuffer();

  return Buffer.from(arrayBuffer);
}