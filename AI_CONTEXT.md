# AI_CONTEXT.md

> This file is intended to provide context to AI assistants when continuing development of KnowledgeOS.

---

# Project Overview

KnowledgeOS is a production-grade AI-powered knowledge management platform.

The goal is to allow organizations to upload internal documents and interact with them through an AI assistant using Retrieval-Augmented Generation (RAG).

This project is being built as a portfolio-quality application that demonstrates production AI engineering, modern full-stack development, and scalable SaaS architecture.

This is **not** a tutorial project. Every architectural decision should prioritize production readiness, maintainability, and clean engineering practices.

---

# Primary Goals

This project is designed to:

- Demonstrate Applied AI engineering skills
- Showcase production RAG architecture
- Build a portfolio that stands out to recruiters
- Help secure AI Engineer / AI Full Stack roles
- Demonstrate capabilities to Upwork clients

---

# Version 1 Scope

Version 1 includes:

- User Authentication
- Workspace Management
- Document Upload
- Background Processing
- PDF Text Extraction
- Text Chunking
- Embedding Generation
- pgvector Storage
- Retrieval Pipeline
- AI Chat
- Streaming Responses
- Source Citations
- Conversation History
- Dashboard
- Production Deployment

Version 1 intentionally excludes:

- Google Drive
- GitHub Sync
- Notion
- OCR
- Re-ranking
- Hybrid Search
- RBAC
- Teams
- AI Agents

These belong to future versions.

---

# Tech Stack

Frontend

- Next.js
- React
- TypeScript
- TailwindCSS
- shadcn/ui

Backend

- Next.js API Routes
- Better Auth
- Prisma ORM

Database

- PostgreSQL
- pgvector

AI

- OpenAI
- AI SDK

Background Jobs

- Inngest

Storage

- Cloudflare R2

Deployment

- Vercel

---

# Architecture

The application follows:

- Multi-tenant SaaS architecture
- Workspace-first design
- Backend-for-Frontend (BFF)
- Retrieval-Augmented Generation (RAG)
- Vertical Slice Development
- Documentation-first development

Every resource belongs to a workspace.

Every API validates authentication and authorization.

The frontend never communicates directly with AI providers.

---

# Development Workflow

The workflow must always follow:

Documentation

↓

Wireframes

↓

High Fidelity UI

↓

Design System

↓

Vertical Slice Development

↓

Testing

↓

Deployment

Never skip phases.

---

# Development Rules

Always follow these rules:

- Keep functions small.
- Prefer readability over clever code.
- Avoid duplicate logic.
- Never hardcode secrets.
- Never trust client input.
- Use TypeScript strict mode.
- Centralize prompts.
- Follow repository structure.
- Update documentation when architecture changes.
- Record major decisions in ADR.

---

# Repository Structure

```
docs/
    architecture/
    product/
    engineering/
    development/
    deployment/
    decisions/

design/

examples/

scripts/

src/
```

---

# Current Status

Documentation Phase: ✅ Complete

Design Phase: Next

Current Version:

1.0

Current Branch:

dev

---

# Documentation Available

- Project Overview
- PRD
- System Architecture
- Database Design
- Domain Model
- RAG Pipeline
- API Specification
- UI/UX Specification
- Development Roadmap
- Deployment Guide
- Testing Strategy
- Security
- Architecture Decision Records
- Current State
- Changelog
- Future Roadmap
- Prompt Library
- Coding Guidelines

These documents are the source of truth.

---

# Current Objective

Begin the Design Phase.

Tasks:

1. Low-fidelity wireframes
2. High-fidelity UI
3. Design System
4. Start Vertical Slice 1

---

# AI Assistant Instructions

When helping with this project:

- Use the documentation as the source of truth.
- Do not introduce new architecture unless there is a clear benefit.
- If architecture changes, update the ADR.
- Prefer production-ready solutions over quick hacks.
- Keep the code modular and maintainable.
- Keep the UI clean and professional.
- Explain architectural decisions when necessary.
- Challenge decisions if a significantly better approach exists.

Do not suggest unnecessary complexity.

---

# Project Philosophy

The objective is not to build the largest application.

The objective is to build an application that demonstrates excellent software engineering practices.

Quality is prioritized over quantity.

Every feature should solve a real problem and be implemented as if it were shipping to production.

---

# Success Criteria

KnowledgeOS Version 1 is considered successful if it demonstrates:

- Modern full-stack architecture
- Production-quality RAG pipeline
- Clean code organization
- Secure authentication
- Multi-tenant design
- Reliable document processing
- AI responses with citations
- Excellent developer experience
- Professional UI
- Deployment to production

If these goals are achieved, the project will serve as a strong portfolio piece for AI engineering roles and freelance opportunities.

---

# End of Context

This file should be updated whenever major architectural or product decisions change.