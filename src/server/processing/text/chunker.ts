import { estimateTokenCount } from "./tokenizer";

interface ChunkOptions {
  chunkSize: number;
  overlap: number;
}

export function chunkText(
  text: string,
  { chunkSize, overlap }: ChunkOptions,
): string[] {
  const words = text.split(/\s+/);

  const chunks: string[] = [];

  let start = 0;

  while (start < words.length) {
    let end = start;
    let tokenCount = 0;

    while (end < words.length) {
      const nextWord = words[end];
      const nextTokens = estimateTokenCount(nextWord);

      if (tokenCount + nextTokens > chunkSize) {
        break;
      }

      tokenCount += nextTokens;
      end++;
    }

    chunks.push(words.slice(start, end).join(" "));

    if (end >= words.length) {
      break;
    }

    start = Math.max(end - overlap, start + 1);
  }

  return chunks;
}