# 02-dashboard.md

**Version:** 1.0  
**Status:** Draft  
**Last Updated:** July 2026

---

# Purpose

The Dashboard is the entry point of the authenticated application.

Its purpose is to provide users with a quick overview of their workspace, document processing status, recent activity, and shortcuts to the most important actions.

The dashboard should answer one question:

> **"What is happening in my workspace right now?"**

---

# Entry Points

- Login
- Sidebar → Dashboard
- Workspace Creation

---

# Exit Points

- Documents
- Upload Document
- AI Chat
- Conversations
- Settings

---

# Layout

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ Dashboard                                                          Upload PDF [+]  │
│ Welcome back, Shubham.                                                             │
├────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                    │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                │
│ │ Documents    │ │ Chunks       │ │ Conversations│ │ Storage      │                │
│ │ 24           │ │ 18,245       │ │ 126          │ │ 3.2 / 10 GB  │                │
│ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘                │
│                                                                                    │
├────────────────────────────────────────────────────────────────────────────────────┤
│ Active Processing Jobs                                                             │
│                                                                                    │
│ Employee Handbook.pdf          Processing...      █████████░                       │
│ HR Policy.pdf                  Uploading...       ███░░░░░░░                       │
├────────────────────────────────────────────────────────────────────────────────────┤
│ Recent Documents                                                                   │
│                                                                                    │
│ Employee Handbook                Ready             Today                           │
│ HR Policy                        Ready             Yesterday                       │
│ Security Guide                   Failed            Retry                           │
├────────────────────────────────────────────────────────────────────────────────────┤
│ Recent Conversations                                                               │
│                                                                                    │
│ PTO Policy                                                               →         │
│ Benefits Overview                                                        →         │
│ Security Policy                                                          →         │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

# Sections

## Header

Displays:

- Page title
- Welcome message
- Primary action

Primary Action:

```
Upload PDF
```

---

## Workspace Metrics

Displays high-level statistics.

Cards:

- Total Documents
- Total Chunks
- Conversations
- Storage Usage

Purpose:

Provide an instant overview of workspace health.

---

## Active Processing Jobs

Displays documents currently being processed.

Information:

- Document Name
- Current Step
- Progress Indicator

Possible Statuses:

- Uploading
- Extracting Text
- Chunking
- Generating Embeddings
- Ready
- Failed

---

## Recent Documents

Displays the latest uploaded documents.

Columns:

- Name
- Status
- Upload Date
- Action

Primary Action:

Open Document

---

## Recent Conversations

Displays recently active conversations.

Information:

- Conversation Title
- Last Updated

Primary Action:

Open Conversation

---

# Components

- Dashboard Header
- Metric Card
- Processing Card
- Recent Documents Table
- Conversation List
- Status Badge
- Progress Bar
- Primary Button

---

# User Interactions

Users can:

- Upload a new document
- Open a document
- Retry failed processing
- Continue a conversation
- Navigate to Documents
- Navigate to Chat

---

# States

## Default

Workspace contains documents and conversations.

---

## Empty

```
No documents uploaded.

Upload your first PDF to begin building your knowledge base.

[ Upload PDF ]
```

---

## Loading

Display skeleton loaders for:

- Metric Cards
- Tables
- Lists

---

## Processing

Display active jobs with progress.

Processing continues even if the user leaves the page.

---

## Error

If dashboard data cannot be loaded:

Display:

```
Unable to load workspace.

[ Retry ]
```

---

# Responsive Behaviour

## Desktop

- Four metric cards
- Full-width processing section
- Two-column activity sections

---

## Tablet

- Two metric cards per row
- Stacked activity sections

---

## Mobile

- Single-column layout
- Horizontal card scrolling
- Collapsible processing section

---

# Accessibility

Requirements:

- Keyboard-accessible cards
- Screen-reader labels
- Progress bars expose percentage
- Proper heading hierarchy
- Visible keyboard focus

---

# UX Notes

The dashboard should remain lightweight.

It is **not** an analytics page.

Its primary purpose is to:

- Show workspace health
- Surface active processing
- Provide quick access to recent work
- Encourage the next logical action

The dashboard should never become cluttered with excessive metrics.

---

# Future Considerations

Future versions may add:

- Workspace Analytics
- Team Activity
- Storage Trends
- AI Usage Statistics
- Recent Integrations
- Notifications

These additions should not disrupt the existing dashboard hierarchy.

---

# Summary

The Dashboard provides a concise overview of the current workspace.

It enables users to quickly understand the state of their knowledge base, monitor ongoing document processing, resume recent conversations, and begin new work with minimal friction.