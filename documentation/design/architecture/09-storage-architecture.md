# Storage Architecture

## Purpose

This document describes how KnowledgeOS stores, organizes, protects, and retrieves data across different storage systems. It defines the responsibilities of each storage technology and how they work together.

---

# Overview

KnowledgeOS uses multiple storage systems because different types of data have different requirements.

```text
                    KnowledgeOS

                         │
     ┌───────────────────┼───────────────────┐
     │                   │                   │
     ▼                   ▼                   ▼
PostgreSQL          Object Storage      Vector Database
(Relational)         (Files)            (Embeddings)

                         │
                         ▼
                     Redis Cache
                    (Fast Access)
```

---

# Storage Layers

KnowledgeOS consists of four storage layers.

- Relational Database
- Object Storage
- Vector Database
- Cache

Each layer has a specific responsibility.

---

# Relational Database

## Purpose

Stores structured application data.

## Technology

- PostgreSQL
- Prisma ORM

## Stores

- Users
- Organizations
- Workspaces
- Roles
- Permissions
- Documents
- Metadata
- Conversations
- Workflow Definitions
- Notifications
- Audit Logs

## Characteristics

- ACID Transactions
- Strong Consistency
- Relational Data
- Indexed Queries

---

# Object Storage

## Purpose

Stores large binary files.

## Stores

- PDFs
- Images
- Videos
- Office Documents
- Attachments
- Exported Reports

## Characteristics

- Highly Durable
- Scalable
- Low Cost
- Large File Support

---

# Vector Database

## Purpose

Stores embeddings for semantic search.

## Stores

- Document Embeddings
- Chunk Embeddings
- Search Vectors

## Used By

- AI Chat
- Semantic Search
- Knowledge Retrieval
- RAG Pipeline

## Characteristics

- Vector Similarity Search
- High-dimensional Indexing
- Fast Nearest Neighbor Search

---

# Cache

## Purpose

Stores temporary and frequently accessed data.

## Technology

- Redis (Planned)

## Stores

- User Sessions
- API Cache
- Search Cache
- AI Responses
- Rate Limits
- Temporary Workflow State

## Characteristics

- In-memory
- Very Low Latency
- Automatic Expiration

---

# Storage Flow

## Document Upload

```text
Upload Document

↓

Object Storage

↓

Extract Text

↓

Generate Chunks

↓

Generate Embeddings

↓

Store Metadata (PostgreSQL)

↓

Store Embeddings (Vector Database)

↓

Ready for Search
```

---

## AI Search

```text
User Query

↓

Generate Query Embedding

↓

Vector Search

↓

Retrieve Chunks

↓

Generate Response

↓

Return Citations
```

---

## Workflow Execution

```text
Workflow

↓

Read Configuration

↓

Execute Nodes

↓

Store Logs

↓

Store Execution History
```

---

# Backup Strategy

## PostgreSQL

- Daily Backups
- Point-in-Time Recovery

---

## Object Storage

- Versioning
- Replication

---

## Vector Database

- Periodic Snapshots
- Embedding Regeneration

---

## Cache

No backup required.

Cache can be rebuilt from persistent storage.

---

# Data Retention

Retention policies apply to

- Documents
- Conversations
- Audit Logs
- Notifications
- Workflow History

Policies should be configurable per workspace.

---

# Security

All storage systems should support

- Encryption at Rest
- Encryption in Transit
- Access Control
- Backup Encryption
- Audit Logging

---

# Design Principles

- Each data type has a single storage owner.
- Never store duplicate business data.
- Store metadata separately from files.
- AI never modifies original files.
- Cache should never be the source of truth.
- Storage systems should scale independently.

---

# Future Enhancements

- Multi-region Replication
- Cold Storage
- Automatic Tiering
- Storage Analytics
- Intelligent Archiving
- Backup Automation

---

# Related Documents

- 05-rag-architecture.md
- 07-data-flow.md
- 08-authentication-authorization.md
- 12-search-architecture.md
- 13-deployment-architecture.md