import { downloadFile } from "@/src/lib/storage/download";
import { Document } from "@prisma/client";


export async function downloadDocument(
  document: Document,
): Promise<Buffer> {
  return downloadFile(document.storageKey);
}