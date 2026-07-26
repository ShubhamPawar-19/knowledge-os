const MAX_FILE_SIZE = 25 * 1024 * 1024;

const ALLOWED_MIME_TYPES = [
  "application/pdf",
] as const;

export function validateFile(file: File) {
  if (!ALLOWED_MIME_TYPES.includes(file.type as (typeof ALLOWED_MIME_TYPES)[number])) {
    throw new Error("Only PDF files are allowed.");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File size exceeds 25MB.");
  }
}