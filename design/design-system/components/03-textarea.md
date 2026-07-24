# 03-textarea.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Textarea component allows users to enter and edit multi-line text throughout KnowledgeOS.

It is intended for longer content where a standard Input component is insufficient.

---

# Design Goals

The Textarea should be:

- Comfortable for long-form writing
- Consistent with Input
- Easy to resize
- Accessible
- Responsive

The experience should encourage writing without unnecessary distractions.

---

# Usage Guidelines

Use Textarea for:

- Workspace Description
- Document Description
- Notes
- Feedback
- Prompt Templates (Future)
- AI Instructions (Future)

Do not use Textarea for short values such as names or emails.

---

# Layout

```
Label

┌──────────────────────────────────────────────┐
│                                              │
│ Write something...                           │
│                                              │
│                                              │
│                                              │
└──────────────────────────────────────────────┘

Helper Text
```

---

# Sizes

## Small

```
80px
```

---

## Medium (Default)

```
120px
```

---

## Large

```
180px
```

---

# Typography

Font

```
Inter
```

Weight

```
Regular
```

Size

```
16px
```

Placeholder

```
text.tertiary
```

---

# Colors

Background

```
surface.primary
```

Border

```
border.primary
```

Text

```
text.primary
```

Placeholder

```
text.tertiary
```

---

# Border Radius

Uses

```
radius.md
```

---

# Padding

Internal Padding

```
16px
```

---

# Resize Behavior

Allowed

```
Vertical Only
```

Do not allow horizontal resizing.

---

# States

Supports

```
Default

Hover

Focus

Filled

Disabled

Read-only

Error
```

---

## Default

Border

```
border.primary
```

---

## Hover

Border

```
border.secondary
```

---

## Focus

Border

```
border.focus
```

Focus Ring

```
focus.primary
```

---

## Disabled

Background

```
surface.secondary
```

Text

```
text.disabled
```

---

## Read-only

Background

```
surface.secondary
```

Interaction disabled.

---

## Error

Border

```
error.500
```

Helper Text

```
error.700
```

---

# Labels

Every editable textarea requires a visible label.

Example

```
Workspace Description
```

---

# Helper Text

Used for

- Character limits
- Usage guidance
- Validation feedback

Example

```
Maximum 500 characters.
```

---

# Character Counter

Optional.

Displayed in the bottom-right corner.

Example

```
184 / 500
```

Should only appear when a limit exists.

---

# Responsive Behaviour

Desktop

Uses parent container width.

Tablet

No changes.

Mobile

Full width.

Minimum height

```
120px
```

---

# Accessibility

Requirements

- Visible label
- Keyboard accessible
- Screen-reader support
- Visible focus ring
- Proper validation announcements
- Minimum touch target of 44px

---

# Motion

Border transition

```
150ms
```

Focus Ring

```
150ms
```

---

# Best Practices

✅ Encourage concise writing

✅ Use helper text when needed

✅ Provide character limits for long content

---

# Anti-Patterns

Do NOT

❌ Use Textarea for single-line input

❌ Remove resize capability entirely

❌ Hide validation errors

❌ Use placeholder as the only label

---

# Component API

Properties

```
Size

Small

Medium

Large
```

```
State

Default

Focus

Disabled

Read-only

Error
```

```
Placeholder

Optional
```

```
Helper Text

Optional
```

```
Character Counter

Optional
```

```
Resizable

Boolean (Vertical Only)
```

```
Full Width

Boolean
```

---

# Future Considerations

Future versions may support

- Markdown editing
- AI-assisted writing
- Rich text formatting
- Auto-expanding height
- Prompt templates
- Slash commands

These features should extend the existing component without changing its core behavior.

---

# Summary

The Textarea component provides a consistent, accessible, and distraction-free experience for entering long-form content throughout KnowledgeOS while maintaining visual consistency with the Input component.