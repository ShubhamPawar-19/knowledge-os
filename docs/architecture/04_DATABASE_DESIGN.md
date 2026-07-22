# Database Design

**Project:** KnowledgeOS

**Version:** 1.0

---

# 1. Overview

KnowledgeOS uses PostgreSQL as its primary relational database.

The database stores structured application data such as users, workspaces, documents, conversations, and metadata.

Vector embeddings are stored using the pgvector extension, allowing semantic similarity search while keeping all data within a single database.

The schema is designed around a multi-tenant architecture where every resource belongs to a workspace.

---

# 2. Design Goals

The database is designed with the following objectives:

- Multi-tenant architecture
- Strong relational integrity
- Efficient semantic retrieval
- Easy future expansion
- Simple maintenance
- Scalable indexing

---

# 3. Entity Relationship Overview

User

↓

Workspace

↓

Documents

↓

Document Chunks

↓

Chats

↓

Messages

Every entity belongs to a workspace except User.

---

# 4. Entities

---

## User

Represents an authenticated platform user.

Responsibilities

- Authentication
- Workspace ownership
- Workspace membership (future)

Relationships

User

↓

Owns Multiple Workspaces

---

Main Fields

- id
- name
- email
- password/auth provider
- createdAt
- updatedAt

---

## Workspace

Represents an isolated organization.

Responsibilities

- Data isolation
- Document ownership
- Chat ownership

Relationships

Workspace

↓

Documents

↓

Chats

Future

↓

Members

↓

Roles

---

Main Fields

- id
- name
- ownerId
- createdAt
- updatedAt

---

## Document

Represents one uploaded file.

Responsibilities

- Store metadata
- Track processing
- Connect chunks

Relationships

Workspace

↓

Documents

↓

Chunks

---

Main Fields

- id
- workspaceId
- filename
- originalFilename
- mimeType
- size
- storagePath
- status
- uploadedAt

Status

- Uploading
- Processing
- Ready
- Failed

---

## Document Chunk

Represents a small section of a document.

Responsibilities

- Semantic retrieval
- Citation support

Relationships

Document

↓

Chunks

---

Main Fields

- id
- documentId
- chunkIndex
- pageNumber
- content
- embedding

The embedding field uses pgvector.

---

## Chat

Represents one conversation.

Responsibilities

- Group messages
- Maintain history

Relationships

Workspace

↓

Chats

↓

Messages

---

Main Fields

- id
- workspaceId
- title
- createdAt

---

## Message

Represents one chat message.

Types

- User
- Assistant

Responsibilities

- Conversation history

Main Fields

- id
- chatId
- role
- content
- createdAt

---

# 5. Relationships

User

1

↓

Many

Workspace

---

Workspace

1

↓

Many

Document

---

Workspace

1

↓

Many

Chat

---

Document

1

↓

Many

Chunk

---

Chat

1

↓

Many

Message

---

# 6. Multi-Tenant Strategy

Every document belongs to exactly one workspace.

Every chat belongs to exactly one workspace.

Every query must filter by workspaceId.

No resource may be shared across workspaces in Version 1.

This guarantees complete tenant isolation.

---

# 7. Cascading Rules

Deleting a Workspace removes:

- Documents
- Chunks
- Chats
- Messages

Deleting a Document removes:

- Chunks

Deleting a Chat removes:

- Messages

Deleting a User does not automatically delete workspaces.

Future implementations may support ownership transfer.

---

# 8. Indexing Strategy

Indexes improve lookup performance.

Recommended indexes

Workspace

- ownerId

Document

- workspaceId
- status

Chunk

- documentId

Chat

- workspaceId

Message

- chatId

Future

Vector similarity index

(pgvector)

---

# 9. Constraints

Email

Unique

Workspace Name

Required

Document

Must belong to workspace

Chunk

Must belong to document

Message

Must belong to chat

Embedding

Cannot exist without chunk

---

# 10. Soft Delete Strategy

Version 1

Permanent deletion

Future

Soft delete support may be introduced for enterprise recovery.

---

# 11. Database Transactions

Transactions should be used when:

Creating Workspace

Uploading Documents

Deleting Documents

Deleting Workspaces

This prevents partial writes.

---

# 12. Data Lifecycle

Document Upload

↓

Store File

↓

Create Document Record

↓

Process

↓

Generate Chunks

↓

Generate Embeddings

↓

Ready

↓

Available for Search

---

Workspace Deletion

↓

Delete Documents

↓

Delete Chunks

↓

Delete Chats

↓

Delete Messages

↓

Delete Workspace

---

# 13. Future Expansion

Future tables may include:

WorkspaceMember

Role

Permission

APIKey

Integration

Webhook

AuditLog

Feedback

SearchAnalytics

DocumentVersion

PromptTemplate

These tables are intentionally excluded from Version 1.

---

# 14. Database Design Principles

The schema follows these principles:

- Every entity has a single responsibility.
- Relationships use foreign keys.
- Data integrity is enforced at the database level.
- Multi-tenancy is mandatory.
- Avoid duplicated information.
- Store metadata separately from document content.
- Design for future extensibility.

---

# 15. Summary

The Version 1 schema is intentionally minimal while supporting:

- Secure authentication
- Workspace isolation
- Document storage
- Semantic search
- AI conversations
- Future scalability

Additional enterprise features will extend the schema without requiring major redesign.