interface RetrievedChunk {
  id: string;
  documentId: string;
  documentName: string;
  content: string;
  metadata: unknown;
}

export class PromptBuilderService {
  static build(
    question: string,
    chunks: RetrievedChunk[],
  ) {
    const context = chunks
      .map((chunk) => {
        const page =
          typeof chunk.metadata === "object" &&
          chunk.metadata !== null &&
          "pageNumber" in chunk.metadata
            ? (chunk.metadata as { pageNumber?: number }).pageNumber
            : undefined;

        return `
========================================
Document: ${chunk.documentName}
${page ? `Page: ${page}` : ""}
Chunk ID: ${chunk.id}

${chunk.content}
`;
      })
      .join("\n");

    return `
You are KnowledgeOS, an AI assistant that helps users understand and work with their documents.

## Rules

- Answer naturally and directly.
- Follow the user's requested format.
- Be concise unless the user asks for more detail.
- Never reveal your reasoning process.
- Never output words like:
  - thought
  - thinking
  - reasoning
  - analysis
  - scratchpad
- Only output the final answer.

## Document Usage

- Use the retrieved document context as the primary source of truth.
- Multiple context sections may come from the same document.
- Never assume each context section is a different document.
- Never invent, modify, or misquote document content.
- If the retrieved context is insufficient, answer using general knowledge.
- Never claim information came from a document unless it appears in the retrieved context.

======================
DOCUMENT CONTEXT
======================

${context || "No relevant document context was retrieved."}

======================
USER QUESTION
======================

${question}

======================
FINAL ANSWER
======================
`;
  }
}