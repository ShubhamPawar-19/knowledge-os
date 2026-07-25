# Search Architecture

## Purpose

This document describes the architecture of the KnowledgeOS search system, including keyword search, semantic search, hybrid retrieval, ranking, filtering, and AI-powered answer generation.

---

# Overview

KnowledgeOS uses a hybrid search architecture that combines traditional keyword search with semantic vector search to deliver fast, relevant, and context-aware results.

The search system powers:

- Global Search
- AI Chat
- Document Search
- Knowledge Base
- Workflow Search

---

# Search Architecture

```text
                 User Query
                      │
                      ▼
             Query Processing
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
 Keyword Search              Semantic Search
        │                           │
 PostgreSQL                 Vector Database
        │                           │
        └─────────────┬─────────────┘
                      ▼
              Result Ranking
                      │
                      ▼
             Context Assembly
                      │
                      ▼
         AI Response (Optional)
                      │
                      ▼
                Search Results
```

---

# Search Types

## Keyword Search

Uses structured database queries.

Best for

- File names
- Exact matches
- Metadata
- IDs
- Tags

---

## Semantic Search

Uses embeddings to retrieve information based on meaning instead of exact words.

Best for

- Natural language questions
- AI Chat
- Knowledge discovery
- Similar content

---

## Hybrid Search

Combines

- Keyword Search
- Semantic Search

Then merges and ranks results before returning them.

Hybrid search is the default search strategy.

---

# Search Pipeline

```text
Receive Query

↓

Validate Query

↓

Generate Embedding

↓

Keyword Search

↓

Vector Search

↓

Merge Results

↓

Rank Results

↓

Apply Filters

↓

Return Results
```

---

# Query Processing

Responsibilities

- Normalize query
- Remove extra whitespace
- Detect language
- Validate input
- Generate embedding

---

# Retrieval Sources

Search retrieves information from

- Documents
- Document Chunks
- Conversations
- Knowledge Collections
- Metadata
- Connected Sources

---

# Ranking Engine

Ranking considers

- Semantic similarity
- Keyword relevance
- Document freshness
- Metadata quality
- User permissions
- Workspace context

---

# Filters

Supported filters

- Workspace
- File Type
- Connector
- Author
- Tags
- Date
- Collection
- Language

---

# Search Results

Each result includes

- Title
- Description
- Matching Chunk
- Relevance Score
- Source
- Metadata
- Citations

---

# AI Search

If AI search is enabled

```text
Search Results

↓

Top Chunks

↓

Prompt Builder

↓

Large Language Model

↓

Generate Answer

↓

Attach Citations
```

The generated answer always references retrieved content.

---

# Search Index

The search index updates when

- Document Uploaded
- Document Updated
- Document Deleted
- Connector Sync Completed
- Metadata Changed

---

# Performance Optimizations

- Embedding Cache
- Query Cache
- Pagination
- Incremental Indexing
- Parallel Retrieval
- Lazy Loading

---

# Error Handling

Possible failures

- Invalid Query
- Index Unavailable
- Vector Search Failed
- Database Error
- AI Generation Failed

Errors should provide meaningful feedback and allow retry where appropriate.

---

# Design Principles

- Hybrid search by default
- Permission-aware retrieval
- Low-latency responses
- Source-backed AI answers
- Incremental indexing
- Scalable search architecture

---

# Future Enhancements

- Personalized Search Ranking
- Query Suggestions
- Search Analytics
- Image Search
- OCR Search
- Multilingual Search
- Voice Search
- Federated Search

---

# Related Documents

- 05-rag-architecture.md
- 06-ai-pipeline.md
- 07-data-flow.md
- 09-storage-architecture.md
- 11-workflow-engine.md
- 13-deployment-architecture.md