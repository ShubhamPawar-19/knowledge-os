# 12-empty-state.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Empty State component communicates that no content is currently available and guides users toward the next meaningful action.

An empty screen should never leave users wondering what to do next.

---

# Design Goals

The Empty State should be:

- Helpful
- Encouraging
- Informative
- Minimal
- Action-oriented

It should reduce uncertainty and help users make progress.

---

# Usage Guidelines

Use Empty States for:

- No Documents
- No Conversations
- No Search Results
- No Workspace Members
- No Upload History
- No Notifications
- First-Time User Experience

Do not use Empty States for loading.

Use Skeletons instead.

---

# Layout

```
        📄

No Documents Yet

Upload your first PDF to start
building your knowledge base.

[ Upload PDF ]
```

---

# Structure

Every Empty State consists of:

- Illustration or Icon
- Title
- Description
- Primary Action
- Optional Secondary Action

---

# Variants

KnowledgeOS defines six variants.

## Documents

Displayed when no documents have been uploaded.

Primary Action

```
Upload PDF
```

---

## Conversations

Displayed when no conversations exist.

Primary Action

```
Start New Chat
```

---

## Search

Displayed when no search results match.

Primary Action

```
Clear Filters
```

---

## Dashboard

Displayed for new workspaces.

Primary Action

```
Upload First Document
```

---

## Notifications

Displayed when there are no notifications.

No primary action required.

---

## Error Recovery

Displayed when content cannot be loaded.

Primary Action

```
Retry
```

---

# Illustration

Version 1

Uses

```
Lucide React Icons
```

Examples

Documents

```
FileText
```

Search

```
SearchX
```

Chat

```
Bot
```

Dashboard

```
FolderOpen
```

Notifications

```
Bell
```

Size

```
64px
```

---

# Typography

Title

```
24px

Semibold
```

Description

```
16px

Regular
```

CTA

```
14px

Medium
```

---

# Colors

Background

```
Transparent
```

Icon

```
text.tertiary
```

Title

```
text.primary
```

Description

```
text.secondary
```

---

# Spacing

Icon → Title

```
24px
```

Title → Description

```
12px
```

Description → Button

```
24px
```

---

# Buttons

Primary Button

Optional.

Used when the user can immediately resolve the empty state.

Examples

```
Upload PDF

Create Workspace

Start Chat
```

Secondary Button

Optional.

Used for learning more.

Example

```
View Documentation
```

---

# Responsive Behaviour

Desktop

Centered vertically and horizontally.

Tablet

No changes.

Mobile

Centered horizontally.

Reduce illustration size to

```
48px
```

---

# Accessibility

Requirements

- Proper heading hierarchy
- Descriptive button labels
- Icons marked as decorative when appropriate
- Screen readers announce title and description

---

# Motion

Appearance

```
Fade In

+

Slide Up

12px
```

Duration

```
250ms
```

Buttons follow standard button transitions.

---

# Best Practices

✅ Explain why the page is empty

✅ Suggest the next action

✅ Keep descriptions concise

Examples

```
No documents yet.

Upload your first PDF to begin asking questions.
```

```
No conversations yet.

Start a new chat to explore your knowledge base.
```

---

# Anti-Patterns

Do NOT

❌ Leave pages blank

❌ Use technical error messages

❌ Display multiple CTAs

❌ Add decorative illustrations unrelated to the product

---

# Component API

Properties

```
Variant

Documents

Conversations

Search

Dashboard

Notifications

Error
```

```
Icon

Required
```

```
Title

Required
```

```
Description

Required
```

```
Primary Action

Optional
```

```
Secondary Action

Optional
```

---

# Future Considerations

Future versions may support

- Animated illustrations
- AI onboarding suggestions
- Personalized recommendations
- Workspace-specific guidance
- Interactive tutorials

These enhancements should extend the existing Empty State component while preserving its simple, action-oriented design.

---

# Summary

The Empty State component transforms blank screens into helpful guidance.

By clearly explaining the current situation and presenting the next logical action, it improves onboarding, reduces confusion, and keeps users moving forward throughout KnowledgeOS.