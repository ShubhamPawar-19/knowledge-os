# 11-skeleton.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Skeleton component provides a visual placeholder while content is loading.

Instead of showing empty layouts or spinners, skeletons preserve page structure and reduce perceived waiting time.

---

# Design Goals

The Skeleton should be:

- Lightweight
- Predictable
- Non-distracting
- Consistent
- Performance-friendly

Skeletons should give users an immediate understanding of the upcoming layout.

---

# Usage Guidelines

Use Skeletons for:

- Dashboard Metrics
- Document Cards
- Tables
- Chat Messages
- Profile Information
- Settings Pages

Do not use Skeletons for operations shorter than 300ms.

Use a spinner instead.

---

# Variants

KnowledgeOS defines six skeleton variants.

## Text

Used for paragraphs and labels.

---

## Avatar

Used while profile images load.

---

## Button

Used while actions are loading.

---

## Card

Used for dashboard cards.

---

## Table Row

Used while table data loads.

---

## Chat Message

Used while AI messages are loading.

---

# Layout

Example

```
██████████████

██████████████████████

██████████
```

Cards

```
┌──────────────────────────────┐
│ ███████████                  │
│                              │
│ ███████████████████          │
│ ███████████████████████      │
│                              │
└──────────────────────────────┘
```

---

# Sizes

Text

```
Height

16px
```

Avatar

```
40px
```

Button

```
40px
```

Card

```
Matches final component
```

Table Row

```
56px
```

---

# Border Radius

Text

```
radius.sm
```

Buttons

```
radius.md
```

Cards

```
radius.lg
```

Avatar

```
radius.full
```

---

# Colors

Base

```
neutral.100
```

Highlight

```
neutral.50
```

Background

```
surface.primary
```

---

# Animation

Type

```
Shimmer
```

Direction

```
Left → Right
```

Duration

```
1.5 seconds
```

Iteration

```
Infinite
```

Animation should remain subtle.

---

# States

Supports

```
Loading

Hidden
```

Skeleton disappears immediately when real content is available.

---

# Dashboard Skeleton

Structure

```
██████████

┌──────────────┐
│              │
└──────────────┘

┌──────────────┐
│              │
└──────────────┘
```

---

# Table Skeleton

Example

```
██████████████████████

────────────────────────

██████████████████████

────────────────────────

██████████████████████
```

Rows should match the final table height.

---

# Chat Skeleton

Structure

```
🤖

██████████████████████

██████████████████

██████████
```

Represents a streaming AI response.

---

# Card Skeleton

Header

```
████████
```

Content

```
██████████████████

██████████████
```

Footer

```
██████
```

---

# Responsive Behaviour

Desktop

Match final layout.

Tablet

No changes.

Mobile

Skeleton width adapts to screen size.

Never exceed container width.

---

# Accessibility

Requirements

- Hidden from screen readers (`aria-hidden="true"`)
- Parent container indicates loading state
- Avoid announcing placeholder content

---

# Motion

Animation

```
Shimmer
```

Duration

```
1.5s

Linear

Infinite
```

If `prefers-reduced-motion` is enabled

- Disable shimmer
- Display static placeholder

---

# Best Practices

✅ Match the final layout

✅ Keep animation subtle

✅ Replace skeleton immediately when content loads

---

# Anti-Patterns

Do NOT

❌ Use random placeholder shapes

❌ Display skeletons for completed content

❌ Show both spinner and skeleton together

❌ Animate aggressively

---

# Component API

Properties

```
Variant

Text

Avatar

Button

Card

Table

Chat
```

```
Width

Optional
```

```
Height

Optional
```

```
Animation

Shimmer

Static
```

```
Count

Optional
```

---

# Future Considerations

Future versions may support

- Chart Skeletons
- AI Workflow Skeletons
- Timeline Skeletons
- PDF Preview Skeletons
- Collaboration Skeletons

These additions should extend the current Skeleton component while preserving its minimal appearance.

---

# Summary

The Skeleton component improves perceived performance by displaying structured placeholders while content loads.

Its consistent layout, subtle animation, and accessibility support create a smoother loading experience throughout KnowledgeOS.