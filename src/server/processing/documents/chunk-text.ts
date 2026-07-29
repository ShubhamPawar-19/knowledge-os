import type { ExtractedDocument, TextChunk } from "./types";

import { chunkText } from "../text/chunker";
import { estimateTokenCount } from "../text/tokenizer";

const CHUNK_SIZE = 500;
const CHUNK_OVERLAP = 100;

export function chunkDocument(
  document: ExtractedDocument,
): TextChunk[] {
  const chunks: TextChunk[] = [];

  let chunkIndex = 0;

  for (const page of document.pages) {
    const pageChunks = chunkText(page.text, {
      chunkSize: CHUNK_SIZE,
      overlap: CHUNK_OVERLAP,
    });

    for (const content of pageChunks) {
      chunks.push({
        content,
        chunkIndex,
        tokenCount: estimateTokenCount(content),
        metadata: {
          pageNumber: page.pageNumber,
        },
      });

      chunkIndex++;
    }
  }

  return chunks;
}