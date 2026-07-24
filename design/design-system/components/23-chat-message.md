# 23-chat-message.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Chat Message component is the core communication element of KnowledgeOS.

It displays conversations between the user and the AI assistant while supporting streaming responses, citations, feedback, and future AI capabilities.

---

# Design Goals

The Chat Message should be:

- Easy to read
- Citation-first
- Streaming friendly
- Accessible
- Minimal

The focus should always remain on the conversation.

---

# Usage Guidelines

Use Chat Messages for

- User Questions
- AI Responses
- Streaming Responses
- Source Citations
- Error Messages
- System Messages

---

# Message Types

KnowledgeOS supports

```
User

Assistant

System

Error
```

---

## User Message

Displays user input.

Example

```
How do I deploy this application?
```

---

## Assistant Message

Displays AI-generated responses.

Supports

- Markdown
- Lists
- Tables
- Code Blocks
- Citations

---

## System Message

Example

```
Document processing completed.
```

---

## Error Message

Example

```
Unable to generate response.

Retry
```

---

# Layout

User

```
                         You

How do embeddings work?
```

Assistant

```
🤖 KnowledgeOS

Embeddings convert text into vectors...

Sources

[Architecture.pdf]

[RAG Pipeline.pdf]
```

---

# Structure

Each message contains

- Avatar
- Sender
- Timestamp
- Message Content
- Citations
- Actions

---

# Typography

Sender

```
14px

Semibold
```

Message

```
16px

Regular
```

Timestamp

```
12px

Regular
```

---

# Colors

User Bubble

```
primary.600
```

User Text

```
white
```

Assistant Background

```
Transparent
```

Assistant Text

```
text.primary
```

System

```
surface.secondary
```

---

# Message Width

Maximum

```
800px
```

Messages should never span the full viewport width.

---

# Streaming

While generating

Display

```
Thinking...

▍
```

Text appears token by token.

No layout shifts.

---

# Citations

Displayed below AI responses.

Example

```
Sources

Architecture.pdf

System Design.pdf

PRD.pdf
```

Clicking a citation opens the referenced document.

---

# Message Actions

Assistant messages support

- Copy
- Regenerate
- Like
- Dislike

Future

- Share
- Export

---

# Code Blocks

Support

- Syntax Highlighting
- Copy Button
- Line Wrapping

Scrollable horizontally when necessary.

---

# Tables

Support responsive overflow.

Never break layout.

---

# States

Supports

```
Streaming

Completed

Failed

Regenerating
```

---

## Streaming

Display animated cursor.

---

## Failed

Show

```
Retry Response
```

---

## Regenerating

Previous response fades.

New response streams.

---

# Responsive Behaviour

Desktop

Centered conversation.

Tablet

Reduced margins.

Mobile

Full-width conversation.

Messages remain readable.

---

# Accessibility

Requirements

- Proper heading hierarchy
- Screen-reader announcements for new AI responses
- Keyboard accessible actions
- Sufficient color contrast

---

# Motion

Streaming

```
Token-by-token rendering
```

Reaction Buttons

```
150ms
```

Hover

```
150ms
```

---

# Best Practices

✅ Keep messages readable

✅ Always display citations

✅ Preserve conversation history

✅ Clearly distinguish user and assistant messages

---

# Anti-Patterns

Do NOT

❌ Hide citations

❌ Display overly wide messages

❌ Mix user and assistant styles

❌ Interrupt streaming unnecessarily

---

# Component API

Properties

```
Type

User

Assistant

System

Error
```

```
Content

Required
```

```
Streaming

Boolean
```

```
Sources

Optional
```

```
Timestamp

Optional
```

```
Actions

Optional
```

---

# Future Considerations

Future versions may support

- Voice Messages
- Image Responses
- Multi-modal Content
- AI Reasoning Indicators
- Conversation Branching
- Collaborative Chat

These enhancements should extend the existing Chat Message component while preserving its clean conversational interface.

---

# Summary

The Chat Message component is the heart of the KnowledgeOS experience.

It delivers AI responses with streaming support, citations, and rich formatting while maintaining a clean, production-quality conversational interface suitable for modern AI applications.