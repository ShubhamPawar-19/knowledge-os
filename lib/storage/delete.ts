import { DeleteObjectCommand } from "@aws-sdk/client-s3";

import { STORAGE_BUCKET, storageClient } from "./client";
import { StorageError } from "./errors";
import { DeleteFileInput } from "./types";

export async function deleteFile({
  key,
}: DeleteFileInput): Promise<void> {
  try {
    await storageClient.send(
      new DeleteObjectCommand({
        Bucket: STORAGE_BUCKET,
        Key: key,
      })
    );
  } catch (error) {
    throw new StorageError("Failed to delete file.", error);
  }
}