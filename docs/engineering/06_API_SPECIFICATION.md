# API Specification

**Project:** KnowledgeOS

**Version:** 1.0

---

# 1. Overview

KnowledgeOS exposes a RESTful Backend-for-Frontend (BFF) API that enables the frontend to authenticate users, manage workspaces, upload documents, retrieve AI-powered answers, and manage conversations.

The frontend never communicates directly with external services such as OpenAI or Object Storage. All requests pass through the backend, which is responsible for authentication, authorization, validation, business logic, and AI orchestration.

---

# 2. Architecture Principles

The API follows these principles.

- RESTful resource naming
- Backend-for-Frontend (BFF)
- Stateless requests
- JSON request/response
- Workspace-first architecture
- Consistent error handling
- Authentication on protected routes
- Authorization on every request
- Secure multi-tenant isolation

---

# 3. Base URL

Development

```
http://localhost:3000/api
```

Production

```
https://knowledgeos.app/api
```

---

# 4. Authentication

Every protected request requires an authenticated session.

Authentication is handled by Better Auth.

Every request is validated before workspace resources are accessed.

---

# 5. Standard Response Format

## Success

```json
{
  "success": true,
  "data": {}
}
```

---

## Error

```json
{
  "success": false,
  "error": {
    "code": "DOCUMENT_NOT_FOUND",
    "message": "The requested document does not exist."
  }
}
```

---

# 6. API Resource Hierarchy

KnowledgeOS follows a workspace-first architecture.

```
Workspace
│
├── Documents
│
├── Chats
│     └── Messages
│
├── Dashboard
│
└── Settings
```

Every resource belongs to a workspace.

---

# 7. Authentication APIs

---

## Register

POST

```
/api/auth/register
```

Creates a new user account.

---

## Login

POST

```
/api/auth/login
```

Authenticates a user.

---

## Logout

POST

```
/api/auth/logout
```

Ends the current session.

---

## Current User

GET

```
/api/auth/me
```

Returns the authenticated user.

---

# 8. Workspace APIs

---

## Create Workspace

POST

```
/api/workspaces
```

---

## List Workspaces

GET

```
/api/workspaces
```

---

## Get Workspace

GET

```
/api/workspaces/{workspaceId}
```

---

## Update Workspace

PATCH

```
/api/workspaces/{workspaceId}
```

---

## Delete Workspace

DELETE

```
/api/workspaces/{workspaceId}
```

Deleting a workspace permanently removes all associated resources.

---

# 9. Document APIs

---

## Upload Document

POST

```
/api/workspaces/{workspaceId}/documents
```

Uploads a supported document and starts asynchronous processing.

---

## List Documents

GET

```
/api/workspaces/{workspaceId}/documents
```

Returns all uploaded documents.

---

## Get Document

GET

```
/api/workspaces/{workspaceId}/documents/{documentId}
```

Returns document metadata.

Example response

```json
{
  "id": "...",
  "filename": "Employee Handbook.pdf",
  "status": "READY",
  "uploadedAt": "..."
}
```

---

## Delete Document

DELETE

```
/api/workspaces/{workspaceId}/documents/{documentId}
```

Deletes

- Original file
- Metadata
- Chunks
- Embeddings

---

# 10. Chat APIs

---

## Create Chat

POST

```
/api/workspaces/{workspaceId}/chats
```

Creates a new conversation.

---

## List Chats

GET

```
/api/workspaces/{workspaceId}/chats
```

Returns all conversations.

---

## Get Chat

GET

```
/api/workspaces/{workspaceId}/chats/{chatId}
```

Returns chat metadata.

---

## Delete Chat

DELETE

```
/api/workspaces/{workspaceId}/chats/{chatId}
```

Deletes the conversation and all associated messages.

---

# 11. Message APIs

---

## Send Message

POST

```
/api/workspaces/{workspaceId}/chats/{chatId}/messages
```

Request

```json
{
  "content": "What is our leave policy?"
}
```

The backend performs:

1. Query embedding generation
2. Vector search
3. Prompt construction
4. LLM response generation
5. Streaming response
6. Conversation persistence

Response

Streaming Server-Sent Events (SSE)

---

## Get Messages

GET

```
/api/workspaces/{workspaceId}/chats/{chatId}/messages
```

Returns conversation history.

---

# 12. Dashboard APIs

---

## Workspace Dashboard

GET

```
/api/workspaces/{workspaceId}/dashboard
```

Returns

- Total documents
- Total chats
- Recent uploads
- Processing documents

---

# 13. Settings APIs

---

## Get Settings

GET

```
/api/workspaces/{workspaceId}/settings
```

---

## Update Settings

PATCH

```
/api/workspaces/{workspaceId}/settings
```

---

# 14. Health API

GET

```
/api/health
```

Response

```json
{
  "status": "ok"
}
```

---

# 15. Error Codes

Authentication

- UNAUTHORIZED
- INVALID_SESSION

Workspace

- WORKSPACE_NOT_FOUND
- ACCESS_DENIED

Documents

- DOCUMENT_NOT_FOUND
- INVALID_FILE
- FILE_TOO_LARGE
- PROCESSING_FAILED

Chat

- CHAT_NOT_FOUND
- MESSAGE_REQUIRED

AI

- CONTEXT_NOT_FOUND
- AI_SERVICE_UNAVAILABLE
- GENERATION_FAILED

---

# 16. HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

---

# 17. Security

The API enforces:

- Authentication
- Authorization
- Workspace isolation
- Input validation
- Server-side file validation
- Environment-based secrets
- No direct client access to AI providers

Every resource request is validated against the authenticated workspace.

---

# 18. Backend-for-Frontend (BFF)

The frontend communicates only with the KnowledgeOS backend.

```
Browser
      │
      ▼
Next.js API (BFF)
      │
 ┌────┼───────────────┐
 ▼    ▼               ▼
DB  Object Storage  OpenAI
```

Benefits

- Secure API keys
- Centralized validation
- Better logging
- Easier provider replacement
- Single integration layer

---

# 19. Future APIs

Future releases may introduce:

- Team Management
- Role Management
- API Keys
- Webhooks
- Google Drive Integration
- GitHub Integration
- Search Analytics
- Feedback APIs
- Document Versioning

---

# 20. API Summary

Version 1 exposes APIs for:

```
Authentication
│
├── Workspaces
│     ├── Documents
│     ├── Chats
│     │      └── Messages
│     ├── Dashboard
│     └── Settings
│
└── Health
```

The API is intentionally designed around a workspace-first architecture, ensuring secure multi-tenant isolation and providing a scalable foundation for future enterprise features.

---

# References

Depends On

- 02_PRD.md
- 03_SYSTEM_ARCHITECTURE.md
- 04_DATABASE_DESIGN.md
- 04A_DOMAIN_MODEL.md
- 05_RAG_PIPELINE.md

Used By

- 07_UI_UX.md
- Backend Implementation
- Frontend Integration