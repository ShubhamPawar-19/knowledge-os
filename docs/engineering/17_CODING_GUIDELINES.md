# Coding Guidelines

**Project:** KnowledgeOS

**Version:** 1.0

---

# 1. Overview

This document defines the coding standards and development practices for KnowledgeOS.

The objective is to maintain a clean, consistent, scalable, and maintainable codebase throughout the project's lifecycle.

Every contributor should follow these guidelines.

---

# 2. General Principles

- Write readable code over clever code.
- Prefer simplicity over premature optimization.
- Keep functions small and focused.
- Avoid duplication (DRY).
- Favor composition over inheritance.
- Follow SOLID principles where appropriate.
- Leave the codebase better than you found it.

---

# 3. Project Structure

```
src/
├── app/
├── components/
│   ├── ui/
│   ├── shared/
│   └── features/
├── lib/
├── server/
│   ├── api/
│   ├── db/
│   ├── auth/
│   ├── services/
│   └── repositories/
├── ai/
│   ├── prompts/
│   ├── retrieval/
│   ├── embeddings/
│   └── services/
├── hooks/
├── types/
├── utils/
└── styles/
```

Every folder should have a clear responsibility.

---

# 4. Naming Conventions

## Files

- kebab-case.ts
- user-service.ts
- upload-dialog.tsx

---

## Components

Use PascalCase.

Examples

- ChatWindow
- UploadDialog
- DashboardCard

---

## Variables

Use camelCase.

Examples

```ts
documentCount
currentWorkspace
chatHistory
```

---

## Constants

Use UPPER_SNAKE_CASE.

Examples

```ts
MAX_FILE_SIZE
SUPPORTED_FILE_TYPES
SYSTEM_PROMPT
```

---

## Types & Interfaces

Use PascalCase.

Examples

```ts
Workspace
DocumentChunk
ChatMessage
```

---

# 5. TypeScript

Rules

- Avoid `any`.
- Prefer explicit types.
- Enable strict mode.
- Share reusable types.
- Prefer interfaces for object contracts.
- Use enums sparingly.

---

# 6. React Guidelines

- Prefer Server Components by default.
- Use Client Components only when necessary.
- Keep components focused on one responsibility.
- Extract reusable UI.
- Avoid deeply nested JSX.

---

# 7. API Guidelines

- Validate every request.
- Return consistent response objects.
- Use proper HTTP status codes.
- Never expose internal errors.
- Keep business logic out of route handlers.

---

# 8. Database Guidelines

- Access the database through repositories or service functions.
- Never duplicate queries.
- Use transactions when updating multiple related records.
- Keep migrations small and focused.
- Never modify production data manually.

---

# 9. AI Guidelines

- Centralize prompts.
- Never hardcode API keys.
- Keep prompts version controlled.
- Always use retrieved context.
- Never allow responses without citations.
- Separate retrieval from generation logic.

---

# 10. Error Handling

- Fail gracefully.
- Return meaningful error messages.
- Log unexpected errors.
- Never expose stack traces to users.
- Handle all asynchronous operations properly.

---

# 11. Logging

Log:

- Authentication events
- Upload events
- Processing failures
- AI errors

Do not log:

- Passwords
- API keys
- Session tokens
- Raw document contents

---

# 12. Git Workflow

Branch Strategy

```
main
│
└── dev
     │
     ├── feature/auth
     ├── feature/upload
     ├── feature/chat
     └── feature/dashboard
```

Rules

- One feature per branch.
- Small, focused commits.
- Descriptive commit messages.
- Merge only after testing.

---

# 13. Commit Message Convention

Format

```
type(scope): short description
```

Examples

```
feat(auth): add workspace login
feat(chat): implement streaming responses
fix(upload): validate file size
refactor(api): simplify document service
docs(rag): update retrieval pipeline
```

Types

- feat
- fix
- docs
- refactor
- test
- chore
- style

---

# 14. Code Review Checklist

Before merging:

- Code compiles
- Feature works
- No TypeScript errors
- No lint errors
- No duplicated logic
- Documentation updated
- Tests completed

---

# 15. Performance Guidelines

- Avoid unnecessary re-renders.
- Lazy load heavy components.
- Cache expensive operations where appropriate.
- Stream AI responses.
- Optimize database queries.
- Avoid N+1 query patterns.

---

# 16. Security Guidelines

- Validate all user input.
- Never trust the client.
- Store secrets securely.
- Sanitize uploaded files.
- Enforce workspace isolation.
- Use HTTPS in production.

---

# 17. Documentation Rules

Whenever a significant change is made:

- Update relevant documentation.
- Update CURRENT_STATE.md.
- Add an ADR if architecture changes.
- Update CHANGELOG.md for user-visible changes.

Documentation should evolve with the codebase.

---

# 18. Definition of Done

A task is complete when:

- Implementation finished
- Code reviewed
- Manual testing completed
- Documentation updated
- No critical bugs remain
- Changes committed

---

# 19. References

Depends On

- 06_API_SPECIFICATION.md
- 08_DEVELOPMENT_ROADMAP.md
- 10_TESTING.md
- 11_SECURITY.md

Used By

- All Development
- Code Reviews
- Future Contributors