# Retrieval-Augmented Generation (RAG) Pipeline

**Project:** KnowledgeOS

**Version:** 1.0

---

# 1. Overview

KnowledgeOS uses a Retrieval-Augmented Generation (RAG) architecture to generate trustworthy, context-aware answers from organization-specific documents.

Instead of relying solely on the language model's pre-trained knowledge, the system retrieves relevant document content before generating a response.

This approach reduces hallucinations, improves answer accuracy, and provides transparent source citations.

---

# 2. Objectives

The RAG pipeline is designed to:

- Retrieve relevant information efficiently.
- Reduce hallucinations.
- Provide explainable AI responses.
- Support enterprise knowledge retrieval.
- Scale to thousands of documents.
- Keep AI responses grounded in uploaded knowledge.

---

# 3. High-Level Pipeline

```
Document Upload
        │
        ▼
Store Original File
        │
        ▼
Background Processing
        │
        ▼
Extract Text
        │
        ▼
Clean & Normalize
        │
        ▼
Chunk Document
        │
        ▼
Generate Embeddings
        │
        ▼
Store Vectors
        │
        ▼
Document Ready
        │
──────────────────────────────────────────────
        │
User Question
        │
        ▼
Generate Query Embedding
        │
        ▼
Vector Search
        │
        ▼
Retrieve Relevant Chunks
        │
        ▼
Build Prompt
        │
        ▼
LLM Generation
        │
        ▼
Stream Response
        │
        ▼
Return Citations
```

---

# 4. Document Ingestion Pipeline

When a document is uploaded, it passes through several processing stages.

## Step 1 – File Upload

The user uploads a supported document into a workspace.

Supported formats:

- PDF
- DOCX
- TXT
- Markdown

The original file is stored in object storage.

---

## Step 2 – Metadata Creation

A document record is created containing:

- Filename
- Workspace ID
- Upload time
- File size
- MIME type
- Processing status

The status is initially set to:

```
Processing
```

---

## Step 3 – Background Processing

A background job is created using Inngest.

This prevents long-running document processing from blocking the user interface.

Responsibilities:

- Download file
- Extract text
- Validate content
- Handle failures
- Update processing status

---

# 5. Text Extraction

The system extracts raw text from uploaded documents.

Examples:

PDF

↓

Plain Text

DOCX

↓

Plain Text

Markdown

↓

Plain Text

Only textual content is processed in Version 1.

OCR is intentionally excluded.

---

# 6. Text Cleaning

Before chunking, the extracted text is normalized.

Operations include:

- Remove extra whitespace
- Normalize line endings
- Remove empty paragraphs
- Preserve section structure
- Preserve page references (when available)

The goal is to improve chunk quality.

---

# 7. Chunking Strategy

Large documents cannot be embedded as a single vector.

The text is divided into smaller semantic chunks.

Version 1 Strategy

- Fixed-size chunking
- Small overlap between chunks
- Preserve paragraph boundaries where possible

Each chunk contains:

- Chunk ID
- Document ID
- Chunk Index
- Content
- Page Number (if available)

---

# 8. Embedding Generation

Each chunk is converted into a vector embedding.

Responsibilities:

- Generate semantic representation
- Preserve document relationships
- Support similarity search

Generated vectors are stored using pgvector.

Each embedding is permanently linked to its source chunk.

---

# 9. Vector Storage

The vector database stores:

- Embedding vector
- Chunk reference
- Workspace reference

Metadata remains in PostgreSQL.

Embeddings are never stored independently from their chunks.

---

# 10. Query Pipeline

When the user asks a question:

Example

```
What is our leave policy?
```

The system performs the following steps.

---

## Step 1

Receive user query.

---

## Step 2

Generate query embedding.

---

## Step 3

Search the vector database.

---

## Step 4

Retrieve the most relevant chunks.

Retrieval is restricted to the user's workspace.

---

## Step 5

Construct the final prompt.

The prompt contains:

- System instructions
- Retrieved chunks
- User question

The language model never receives the entire document.

Only relevant context.

---

# 11. Response Generation

The language model receives:

- User question
- Retrieved context
- Instructions
- Citation rules

The model generates a grounded response.

Responses are streamed back to the client.

---

# 12. Citation Generation

Every AI response includes supporting evidence.

Each citation contains:

- Document name
- Page number (if available)

The UI should allow users to verify every answer.

---

# 13. Conversation Storage

After generation:

Store:

- User question
- AI response
- Timestamp

Future versions may also store:

- Retrieved chunk IDs
- Latency
- User feedback

---

# 14. Failure Handling

## Upload Failure

Return validation error.

---

## Extraction Failure

Retry processing.

Mark document as Failed if retries are exhausted.

---

## Embedding Failure

Retry embedding generation.

Preserve original document.

---

## Retrieval Failure

Return:

"No relevant information was found."

Do not fabricate an answer.

---

## LLM Failure

Return a friendly error.

Conversation remains available.

---

# 15. Security

The RAG pipeline enforces workspace isolation.

Rules:

- Search only within current workspace.
- Never retrieve chunks from another organization.
- Validate workspace ownership before every retrieval.

---

# 16. Performance Considerations

Version 1 optimizations:

- Background indexing
- Streaming responses
- Indexed vector search
- Chunk-level retrieval

Future optimizations:

- Hybrid search
- Query caching
- Re-ranking
- Metadata filtering
- Incremental indexing

---

# 17. Future Enhancements

The pipeline is designed to support future capabilities without major architectural changes.

Potential improvements include:

- Semantic chunking
- Parent-child retrieval
- Hybrid keyword + vector search
- Re-ranking models
- Knowledge graphs
- OCR
- Image understanding
- Multi-modal retrieval
- Automatic document summarization
- Continuous synchronization with external sources

---

# 18. Pipeline Summary

The Version 1 RAG pipeline follows this sequence:

```
Upload Document
        │
        ▼
Store File
        │
        ▼
Extract Text
        │
        ▼
Clean Text
        │
        ▼
Chunk Document
        │
        ▼
Generate Embeddings
        │
        ▼
Store Vectors
        │
────────────────────────────────────────────
        │
User Question
        │
        ▼
Generate Query Embedding
        │
        ▼
Retrieve Relevant Chunks
        │
        ▼
Construct Prompt
        │
        ▼
Generate AI Response
        │
        ▼
Stream Response
        │
        ▼
Return Citations
```

---

# 19. Design Principles

The RAG implementation follows these principles:

- AI should answer only from retrieved knowledge.
- Every answer must include citations.
- Long-running work must execute asynchronously.
- Workspace data must remain isolated.
- Responses should stream to improve user experience.
- Retrieval quality is more important than generation speed.
- The architecture should allow future improvements without redesigning the pipeline.