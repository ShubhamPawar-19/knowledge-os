import "server-only";

import { STORAGE_BUCKET, storageClient } from "./client";
import { StorageError } from "./errors";


export async function createDownloadUrl(
  storageKey: string,
) {
  const { data, error } =
    await storageClient.storage
      .from(STORAGE_BUCKET)
      .createSignedUrl(
        storageKey,
        60 * 60, // 1 hour
      );


  if (error) {
    throw new StorageError(error.message);
  }


  return data.signedUrl;
}