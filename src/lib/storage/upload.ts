import { PutObjectCommand } from "@aws-sdk/client-s3";

import { STORAGE_BUCKET, storageClient } from "./client";
import { StorageError } from "./errors";
import { UploadFileInput } from "./types";

export async function uploadFile({
    key,
    body,
    contentType,
}: UploadFileInput): Promise<void> {
    try {
        await storageClient.send(
            new PutObjectCommand({
                Bucket: STORAGE_BUCKET,
                Key: key,
                Body: body,
                ContentType: contentType,
            })
        );
    } catch (error) {
        throw new StorageError("Failed to upload file.", error);
    }
}