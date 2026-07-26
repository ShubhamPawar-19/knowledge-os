

import { ALLOWED_MIME_TYPES, MAX_FILE_NAME_LENGTH, MAX_UPLOAD_SIZE } from "@/src/server/constants/documents";
import { InvalidFileError } from "./errors";

export function validateFile(file: File): void {
  if (!file) {
    throw new InvalidFileError("No file provided.");
  }

  if (file.size === 0) {
    throw new InvalidFileError("File is empty.");
  }

  if (file.size > MAX_UPLOAD_SIZE) {
    throw new InvalidFileError(
      `File size exceeds the ${MAX_UPLOAD_SIZE / 1024 / 1024} MB limit.`
    );
  }

  if (!ALLOWED_MIME_TYPES.includes(file.type as (typeof ALLOWED_MIME_TYPES)[number])) {
    throw new InvalidFileError("Unsupported file type.");
  }

  if (file.name.length > MAX_FILE_NAME_LENGTH) {
    throw new InvalidFileError("File name is too long.");
  }
}