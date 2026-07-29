export interface ExtractedPage {
  pageNumber: number;
  text: string;
}

export interface ExtractedDocument {
  text: string;
  pageCount: number;
  pages: ExtractedPage[];
}

export interface ChunkMetadata {
  pageNumber: number;
  section?: string;
}

export interface TextChunk {
  content: string;
  chunkIndex: number;
  tokenCount: number;
  metadata: ChunkMetadata;
}

export interface EmbeddedChunk extends TextChunk {
  embedding: number[];
}