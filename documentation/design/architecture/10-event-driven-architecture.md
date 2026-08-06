# Event-Driven Architecture

## Purpose

This document describes how KnowledgeOS uses events to decouple services, improve scalability, and execute asynchronous operations across the platform.

---

# Overview

KnowledgeOS follows an event-driven architecture for operations that do not require an immediate response to the user.

Instead of tightly coupling services together, services publish events whenever important actions occur. Other services subscribe to these events and perform their own work independently.

---

# Why Event-Driven?

Benefits include

- Loose coupling
- Better scalability
- Improved reliability
- Independent services
- Easier extensibility
- Background processing

---

# Architecture

```text
                Event Publisher
                       │
                       ▼
                Event Bus / Queue
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
 Document Service  AI Service   Notification Service
        ▼              ▼              ▼
   Search Index    Embeddings     User Notification
```

---

# Event Lifecycle

```text
Business Action

↓

Publish Event

↓

Event Bus

↓

Event Subscribers

↓

Background Processing

↓

Update System State
```

---

# Event Sources

Events can originate from

- User actions
- Scheduled jobs
- Workflow execution
- Connector synchronization
- AI processing
- External webhooks

---

# Core Events

## Authentication Events

Examples

- User Logged In
- User Logged Out
- Password Changed
- Session Expired

---

## Workspace Events

Examples

- Workspace Created
- Workspace Updated
- Member Invited
- Member Removed

---

## Document Events

Examples

- Document Uploaded
- Document Updated
- Document Deleted
- Document Indexed
- Document Processing Failed

---

## AI Events

Examples

- Chat Started
- Response Generated
- Embedding Created
- Summarization Completed

---

## Workflow Events

Examples

- Workflow Started
- Node Executed
- Workflow Completed
- Workflow Failed

---

## Connector Events

Examples

- Sync Started
- Sync Completed
- Sync Failed
- Connector Connected
- Connector Disconnected

---

# Event Consumers

## AI Service

Consumes

- Document Uploaded
- Document Updated

Produces

- Embedding Generated
- Summary Generated

---

## Search Service

Consumes

- Document Indexed
- Document Deleted

Updates

- Search Index
- Vector Index

---

## Notification Service

Consumes

- Workflow Failed
- User Invited
- Connector Failed
- AI Completed

Sends

- In-app Notifications
- Email Notifications

---

## Audit Service

Consumes all major events.

Stores

- Activity Logs
- Security Events
- Administrative Actions

---

# Event Structure

Every event should contain

- Event ID
- Event Type
- Timestamp
- Workspace ID
- User ID
- Resource ID
- Payload
- Version

---

# Event Delivery

Requirements

- Reliable delivery
- Retry on failure
- Idempotent processing
- Dead-letter handling
- Ordered processing where required

---

# Error Handling

If an event fails

1. Retry automatically
2. Log failure
3. Move to dead-letter queue after retry limit
4. Notify administrators if necessary

---

# Design Principles

- Events represent completed business actions.
- Services communicate through events instead of direct dependencies where appropriate.
- Event handlers should be idempotent.
- Long-running tasks should execute asynchronously.
- Event publishing should not expose internal implementation details.

---

# Current Implementation

Current event processing is handled using **Inngest**.

Responsibilities

- Workflow execution
- Background jobs
- Scheduled tasks
- Event orchestration
- Retry handling

Future implementations may introduce dedicated message brokers for larger-scale deployments.

---

# Future Enhancements

- Kafka
- RabbitMQ
- Event Versioning
- Event Replay
- Dead Letter Queue Dashboard
- Distributed Event Bus
- Event Monitoring

---

# Related Documents

- 03-service-architecture.md
- 04-request-lifecycle.md
- 07-data-flow.md
- 11-workflow-engine.md
- 13-deployment-architecture.md