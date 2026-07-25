# Deployment Guide

**Project:** KnowledgeOS

**Version:** 1.0

---

# 1. Overview

This document describes the production deployment architecture for KnowledgeOS.

The application follows a cloud-native architecture where the frontend, backend, database, object storage, background workers, and AI services are deployed independently while working together as a single platform.

---

# 2. Deployment Goals

The deployment should provide:

- Secure hosting
- Reliable storage
- Fast response times
- Easy scalability
- Automated deployments
- Zero manual server management

---

# 3. Production Architecture

```

Browser
│
▼
Vercel (Next.js)
│
├──────────────┐
│ │
▼ ▼
PostgreSQL Object Storage
(Neon) (Cloudflare R2)
│
▼
Inngest
│
▼
OpenAI API

```

---

# 4. Infrastructure

## Frontend & Backend

Platform

- Vercel

Responsibilities

- Next.js application
- API routes
- Authentication
- Server Actions
- Streaming AI responses

---

## Database

Platform

- Neon PostgreSQL

Responsibilities

- Application data
- Chat history
- Documents
- Metadata
- pgvector

---

## Object Storage

Platform

- Cloudflare R2

Responsibilities

- Store uploaded files
- Document retrieval

---

## Background Processing

Platform

- Inngest

Responsibilities

- Document processing
- Embedding generation
- Retry failed jobs

---

## AI Provider

Platform

- OpenAI

Responsibilities

- Embeddings
- Chat generation

---

# 5. Environment Variables

## Application

```

NEXT_PUBLIC_APP_URL=

NODE_ENV=

```

---

## Database

```

DATABASE_URL=

DIRECT_URL=

```

---

## Authentication

```

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=

```

---

## OpenAI

```

OPENAI_API_KEY=

```

---

## Object Storage

```

R2_ACCOUNT_ID=

R2_ACCESS_KEY_ID=

R2_SECRET_ACCESS_KEY=

R2_BUCKET=

```

---

## Inngest

```

INNGEST_EVENT_KEY=

INNGEST_SIGNING_KEY=

```

---

# 6. Deployment Workflow

Developer

↓

Push to GitHub

↓

GitHub

↓

Vercel Build

↓

Run Migrations

↓

Deploy

↓

Production

---

# 7. Database Migration Strategy

Every deployment should:

1. Build application
2. Run Prisma migrations
3. Verify schema
4. Start application

Database migrations should never be skipped.

---

# 8. Secrets Management

Rules

- Never commit secrets
- Store secrets in Vercel
- Rotate compromised keys
- Separate development and production secrets

---

# 9. Monitoring

Version 1

- Vercel Logs
- Inngest Dashboard
- Neon Dashboard

Future

- Sentry
- OpenTelemetry
- Grafana

---

# 10. Backup Strategy

Database

Automatic Neon backups.

Object Storage

Cloudflare redundancy.

Source Code

GitHub repository.

---

# 11. Failure Recovery

Database Failure

- Restore backup
- Redeploy application

Object Storage Failure

- Retry upload
- Display upload failure

OpenAI Failure

- Return graceful error
- Preserve chat history

Deployment Failure

- Roll back to previous deployment

---

# 12. Production Checklist

Before every deployment:

- All tests pass
- Environment variables configured
- Database migrations applied
- Object storage configured
- Authentication verified
- Upload tested
- AI chat tested
- Streaming verified

---

# 13. Future Improvements

- Custom domain
- CDN optimization
- Multi-region deployment
- Redis caching
- Background worker scaling
- Rate limiting
- Disaster recovery automation

---

# References

Depends On

- 03_SYSTEM_ARCHITECTURE.md
- 05_RAG_PIPELINE.md
- 06_API_SPECIFICATION.md

Used By

- Production Deployment
- DevOps
- CI/CD