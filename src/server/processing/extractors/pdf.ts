import { extractText } from "unpdf";

import type {
  ExtractedDocument,
  ExtractedPage,
} from "../documents/types";

export async function extractPdf(
  pdfBuffer: Buffer,
): Promise<ExtractedDocument> {
  const result = await extractText(new Uint8Array(pdfBuffer));

  const pages: ExtractedPage[] = result.text.map((text, index) => ({
    pageNumber: index + 1,
    text: text.trim(),
  }));

  return {
    text: pages.map((p) => p.text).join("\n\n"),
    pageCount: pages.length,
    pages,
  };
}