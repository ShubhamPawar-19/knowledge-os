# 07-badge.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Badge component is used to display concise status information, categories, or metadata.

Badges provide quick visual recognition without interrupting the user's workflow.

---

# Design Goals

The Badge should be:

- Compact
- Readable
- Consistent
- Semantic
- Non-intrusive

Badges should communicate information, not attract unnecessary attention.

---

# Usage Guidelines

Use Badges for:

- Document Status
- Processing Status
- File Type
- AI Model
- Workspace Plan
- Version Labels
- Tags

Do not use badges as buttons.

Use Buttons or Chips for interactive elements.

---

# Variants

KnowledgeOS defines six badge variants.

## Default

Used for general labels.

Example

```
PDF

Internal

Workspace
```

---

## Success

Used for completed states.

Examples

```
Ready

Completed

Synced
```

---

## Warning

Used for temporary or pending states.

Examples

```
Processing

Pending

Draft
```

---

## Error

Used for failure states.

Examples

```
Failed

Rejected

Expired
```

---

## Info

Used for informational labels.

Examples

```
OpenAI

GPT-4.1

Public
```

---

## Outline

Minimal badge used inside tables and metadata sections.

---

# Layout

```
┌───────────────┐
│   Ready       │
└───────────────┘
```

Optional

```
● Ready

✓ Ready

📄 PDF
```

Supports a leading icon.

---

# Sizes

## Small

Height

```
20px
```

Padding

```
4px 8px
```

---

## Medium (Default)

Height

```
24px
```

Padding

```
6px 10px
```

---

## Large

Height

```
28px
```

Padding

```
8px 12px
```

---

# Typography

Font

```
Inter
```

Weight

```
Medium
```

Size

```
12px
```

Large Badge

```
14px
```

---

# Border Radius

Uses

```
radius.full
```

Badges always use fully rounded corners.

---

# Colors

## Default

Background

```
surface.secondary
```

Text

```
text.primary
```

---

## Success

Background

```
success.50
```

Text

```
success.700
```

---

## Warning

Background

```
warning.50
```

Text

```
warning.700
```

---

## Error

Background

```
error.50
```

Text

```
error.700
```

---

## Info

Background

```
info.50
```

Text

```
info.700
```

---

## Outline

Background

```
Transparent
```

Border

```
border.primary
```

Text

```
text.secondary
```

---

# Icons

Optional.

Uses

```
Lucide React
```

Size

```
12px
```

Gap

```
4px
```

Examples

```
✓ Ready

⚠ Processing

✕ Failed
```

---

# States

Supports

```
Default

Hovered (Optional)

Disabled
```

Badges are non-interactive by default.

Hover styles should only exist if the badge is clickable.

---

# Placement

Badges may appear in:

- Tables
- Cards
- Lists
- Headers
- Chat Sources
- Document Metadata

Avoid using more than three badges together.

---

# Responsive Behaviour

Desktop

Default sizing.

Tablet

No changes.

Mobile

Wrap badges onto multiple lines when necessary.

Never truncate badge text.

---

# Accessibility

Requirements

- Minimum contrast ratio (WCAG AA)
- Icons should not be the sole indicator
- Text should remain readable
- Screen readers should announce badge text

---

# Motion

Background transition

```
150ms
```

Only if badge is interactive.

Otherwise badges remain static.

---

# Best Practices

✅ Keep labels short

Examples

```
Ready

PDF

Draft

GPT-4.1
```

✅ Use semantic colors consistently.

---

# Anti-Patterns

Do NOT

❌ Use long sentences inside badges

❌ Stack many badges together

❌ Use badges as primary actions

❌ Invent new badge colors

---

# Component API

Properties

```
Variant

Default

Success

Warning

Error

Info

Outline
```

```
Size

Small

Medium

Large
```

```
Leading Icon

Optional
```

```
Clickable

Boolean
```

```
Disabled

Boolean
```

---

# Future Considerations

Future versions may introduce

- Removable tags
- Filter chips
- Notification counters
- Team labels
- AI confidence badges

These should extend the existing Badge component while maintaining its compact and semantic design.

---

# Summary

The Badge component provides a compact and consistent way to communicate status, metadata, and categorization throughout KnowledgeOS.

Its restrained design ensures users can quickly recognize important information without disrupting the overall interface.