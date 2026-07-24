# AI Chat States

## Initial State

Displayed when the page opens.

### UI

- Header
- Conversation Sidebar
- Empty Chat Area
- Prompt Composer

---

# Loading State

Shown while conversations are loading.

### Components

- Skeleton Conversation List
- Skeleton Messages
- Skeleton Citation Cards

---

# Ready State

Chat is fully interactive.

### Visible

- Conversation List
- Messages
- Prompt Composer
- Citations
- Source Panel

---

# Streaming State

AI is generating a response.

### Behavior

- Display typing indicator
- Stream tokens progressively
- Disable Send button
- Enable Stop Generation

---

# Retrieving Knowledge

Before generation.

Display

- Searching documents...
- Retrieving context...
- Ranking sources...

---

# Empty States

## No Conversations

Message

> Start your first AI conversation.

Action

- New Chat

---

## No Messages

Message

> Ask anything about your organization's knowledge.

---

## No Search Results

Message

> No matching conversations found.

---

## No Sources Found

Message

> No relevant documents were found.

Action

- Broaden your question
- Upload documents

---

# Attachment Upload

Display

- Upload Progress
- Processing Indicator
- Upload Complete

---

# Error States

## AI Generation Failed

Message

> Failed to generate a response.

Actions

- Retry
- Edit Prompt

---

## Retrieval Failed

Message

> Unable to retrieve relevant knowledge.

Action

- Retry

---

## Upload Failed

Message

> File upload failed.

Action

- Retry Upload

---

## Context Limit Exceeded

Message

> The selected context exceeds the model limit.

Action

- Reduce attachments

---

## Rate Limited

Message

> Too many requests. Please wait a moment.

---

## Network Error

Message

> Connection lost.

Action

- Retry

---

# Read-Only State

Displayed when the user has view-only permission.

Behavior

- Messages remain visible
- Prompt input disabled
- Upload disabled

---

# Offline State

Behavior

- Existing conversation remains visible
- Sending disabled
- Offline banner displayed
- Retry automatically when online

---

# Responsive States

## Desktop

- Three-column layout

---

## Tablet

- Conversation sidebar collapsible
- Hide source panel

---

## Mobile

- Drawer sidebar
- Full-screen conversation
- Sticky composer

---

# Accessibility States

## Keyboard Navigation

- Navigate conversations
- Navigate messages
- Navigate citations

---

## Screen Reader

All messages and controls have descriptive labels.

---

## High Contrast

Supports WCAG AA contrast requirements.

---

# Future States

- Multi-agent conversations
- Live collaboration
- Voice mode
- AI memory mode
- Branch conversations
- Canvas mode
```