# 11-empty-states.md

**Version:** 1.0  
**Status:** Draft  
**Last Updated:** July 2026

---

# Purpose

This document defines every empty state used throughout KnowledgeOS.

An empty state should never feel like an error.

Instead, it should educate users, explain why the page is empty, and guide them toward the next meaningful action.

---

# Design Principles

Every empty state should:

- Explain why the page is empty.
- Guide users toward the next action.
- Remain visually simple.
- Avoid technical language.
- Include a single primary CTA.

---

# Dashboard

## Condition

The user has just created a workspace.

No documents have been uploaded.

---

### Layout

```
📄

Welcome to KnowledgeOS

Your workspace is ready.

Upload your first document to start building your knowledge base.

[ Upload PDF ]
```

Primary Action

```
Upload PDF
```

---

# Documents

## Condition

No documents exist.

---

### Layout

```
📂

No documents found.

Upload your first PDF to begin using AI-powered search.

[ Upload PDF ]
```

Primary Action

```
Upload PDF
```

---

# AI Chat

## Condition

No conversation has been started.

---

### Layout

```
🤖

Ask anything about your documents.

Suggested Questions

• Summarize my employee handbook.

• What are the leave policies?

• Explain our security guidelines.

_________________________

Ask a question...
```

Primary Action

Begin typing.

---

# Conversations

## Condition

No saved conversations.

---

### Layout

```
💬

No conversations yet.

Every AI conversation you start will appear here.

[ New Chat ]
```

Primary Action

```
New Chat
```

---

# Search

## Condition

Search returned zero results.

---

### Layout

```
🔍

No matching results.

Try another keyword or remove filters.
```

Primary Action

Clear Search

---

# Processing Queue

## Condition

No documents currently processing.

---

### Layout

```
✅

No active processing jobs.

All uploaded documents have finished processing.
```

No CTA required.

---

# Notifications (Future)

## Condition

No notifications available.

---

### Layout

```
🔔

You're all caught up.

No new notifications.
```

---

# Workspace Members (Future)

## Condition

Workspace contains only the owner.

---

### Layout

```
👥

No team members yet.

Invite collaborators to work together.

[ Invite Members ]
```

---

# Integrations (Future)

## Condition

No integrations connected.

---

### Layout

```
🔗

No integrations connected.

Connect Google Drive, GitHub, or Notion.

[ Browse Integrations ]
```

---

# Design Rules

Every empty state should include

- Illustration or icon
- Title
- Short explanation
- One primary action

Avoid:

- Long paragraphs
- Multiple CTAs
- Technical terminology

---

# UX Notes

Empty states are onboarding opportunities.

Instead of saying

```
No Data
```

The interface should answer

- Why is this empty?
- What should I do next?
- How do I get started?

Every empty state should reduce uncertainty and encourage the user's next action.

---

# Accessibility

Requirements

- Semantic headings
- Accessible buttons
- Screen-reader friendly descriptions
- High-contrast illustrations
- Keyboard-accessible actions

---

# Future Considerations

Future versions may introduce context-aware empty states with:

- AI-generated suggestions
- Recommended documents
- Popular prompts
- Workspace tips
- Product walkthroughs

---

# Summary

Empty states are an essential part of the KnowledgeOS user experience.

They transform moments of "nothing to show" into opportunities to educate, guide, and encourage users toward meaningful actions while maintaining a clean and welcoming interface.