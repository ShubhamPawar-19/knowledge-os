# 26-status-badge.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Status Badge component provides a compact visual indicator representing the current state of an entity.

It enables users to quickly understand the status of documents, processing jobs, conversations, and future resources without reading additional details.

---

# Design Goals

The Status Badge should be:

- Compact
- Recognizable
- Consistent
- Accessible
- Color-independent

Status should be understandable through both color and text.

---

# Usage Guidelines

Use Status Badges for

- Document Status
- Processing Jobs
- Upload Status
- AI Conversations
- Workspace Status
- Future Integrations

Avoid using badges as buttons.

---

# Supported Statuses

Version 1 supports

```
Ready

Processing

Queued

Failed

Archived
```

Future versions

```
Draft

Shared

Private

Syncing

Offline
```

---

# Layout

```
● Ready
```

```
● Processing
```

```
● Failed
```

Each badge consists of

- Status Indicator
- Label

---

# Badge Variants

## Ready

Meaning

```
Document is available for AI retrieval.
```

---

## Processing

Meaning

```
Background job is running.
```

---

## Queued

Meaning

```
Waiting for processing.
```

---

## Failed

Meaning

```
Processing encountered an error.
```

---

## Archived

Meaning

```
Resource is inactive.
```

---

# Sizes

Small

```
Height

24px
```

Default

```
28px
```

Large

```
32px
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

Large

```
14px
```

---

# Colors

Ready

```
Background

success.50

Text

success.700

Border

success.300
```

---

Processing

```
Background

primary.50

Text

primary.700

Border

primary.300
```

---

Queued

```
Background

warning.50

Text

warning.700

Border

warning.300
```

---

Failed

```
Background

error.50

Text

error.700

Border

error.300
```

---

Archived

```
Background

neutral.100

Text

neutral.700

Border

neutral.300
```

---

# Border Radius

Uses

```
radius.full
```

---

# Padding

Horizontal

```
10px
```

Vertical

```
4px
```

---

# Icons

Optional.

Uses Lucide React.

Examples

```
CircleCheck

LoaderCircle

Clock3

CircleX

Archive
```

Icon Size

```
14px
```

---

# States

Supports

```
Default

Loading

Disabled
```

---

## Loading

Processing badge icon rotates continuously.

---

## Disabled

Reduce opacity.

Badge remains readable.

---

# Placement

Common locations

- Tables
- Cards
- Lists
- Detail Pages
- Processing Timeline

---

# Responsive Behaviour

Desktop

Normal size.

Tablet

No changes.

Mobile

Wrap naturally if required.

---

# Accessibility

Requirements

- Do not rely on color alone
- Always display text
- Maintain WCAG contrast ratio
- Decorative icons ignored by screen readers

---

# Motion

Processing Icon

```
Continuous Rotation

1.2s

Linear

Infinite
```

All other badges remain static.

---

# Best Practices

✅ Use short labels

✅ Maintain consistent colors

✅ Show status everywhere users expect it

Examples

```
Ready

Processing

Failed
```

---

# Anti-Patterns

Do NOT

❌ Use badges as buttons

❌ Display long text

❌ Use different colors for identical statuses

❌ Depend only on icon or color

---

# Component API

Properties

```
Status

Ready

Processing

Queued

Failed

Archived
```

```
Size

Small

Medium

Large
```

```
Icon

Optional
```

```
Animated

Boolean
```

---

# Future Considerations

Future versions may support

- Live status updates
- Animated progress badges
- AI confidence badges
- Permission badges
- Integration status indicators

These enhancements should extend the existing Status Badge component while maintaining its compact and informative design.

---

# Summary

The Status Badge component provides an immediate visual representation of resource state throughout KnowledgeOS.

Its consistent styling, semantic colors, and accessible labeling help users quickly understand system status across documents, jobs, and future platform features.