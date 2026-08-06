# 09-card.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Card component is the primary surface used to group related information and actions throughout KnowledgeOS.

Cards improve visual organization while keeping interfaces modular and easy to scan.

---

# Design Goals

The Card should be:

- Clean
- Minimal
- Consistent
- Flexible
- Content-focused

Cards should organize information without overwhelming users.

---

# Usage Guidelines

Use Cards for:

- Dashboard Metrics
- Documents
- Conversations
- Workspace Information
- AI Responses
- Empty States
- Settings Sections

Avoid deeply nested cards.

---

# Variants

KnowledgeOS defines six card variants.

## Default

Standard content container.

---

## Metric Card

Displays KPIs and dashboard statistics.

Example

```
Total Documents

128
```

---

## Document Card

Displays uploaded document information.

Example

- Document Name
- Status
- Upload Date
- Actions

---

## Conversation Card

Displays previous AI conversations.

---

## Settings Card

Groups related settings.

---

## Empty State Card

Displays guidance when no data exists.

---

# Layout

```
┌──────────────────────────────────────┐
│ Header                               │
├──────────────────────────────────────┤
│                                      │
│ Content                              │
│                                      │
├──────────────────────────────────────┤
│ Footer                               │
└──────────────────────────────────────┘
```

Every section is optional.

---

# Card Structure

Supported sections

```
Header

Content

Footer
```

A card may contain only content.

---

# Padding

Default

```
24px
```

Compact

```
16px
```

Large

```
32px
```

---

# Border Radius

Uses

```
radius.lg
```

---

# Border

Default

```
1px solid border.primary
```

Cards should rely primarily on borders rather than heavy shadows.

---

# Elevation

Default

```
shadow.sm
```

Hover

```
shadow.md
```

Active

```
shadow.sm
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

---

# Typography

Header

```
20px

Semibold
```

Body

```
16px

Regular
```

Footer

```
14px

Medium
```

---

# Header

May contain

- Title
- Subtitle
- Badge
- Actions

Example

```
Documents                + Upload
```

---

# Content

May contain

- Text
- Tables
- Forms
- Charts
- Lists
- Images
- Metrics

Content should remain uncluttered.

---

# Footer

Optional.

Contains

- Buttons
- Metadata
- Links
- Secondary Actions

---

# States

Supports

```
Default

Hover

Selected

Disabled

Loading
```

---

## Hover

Increase elevation.

Border remains unchanged.

---

## Selected

Border

```
color.primary.600
```

Background

```
surface.primary
```

---

## Disabled

Reduce opacity.

Disable interaction.

---

## Loading

Replace content with Skeletons.

Maintain layout dimensions.

---

# Responsive Behaviour

Desktop

Multiple-column layouts.

Tablet

Two-column layouts.

Mobile

Single-column layout.

Cards expand to full available width.

---

# Accessibility

Requirements

- Proper heading hierarchy
- Keyboard navigation for interactive cards
- Screen-reader friendly content order
- Maintain sufficient spacing

---

# Motion

Hover Elevation

```
150ms
```

Content Fade

```
200ms
```

Avoid scaling cards.

---

# Best Practices

✅ Keep cards focused on a single purpose

✅ Group related information

✅ Limit actions in headers

✅ Maintain consistent spacing

---

# Anti-Patterns

Do NOT

❌ Nest multiple cards

❌ Overload cards with actions

❌ Mix different card styles

❌ Use heavy shadows

---

# Component API

Properties

```
Variant

Default

Metric

Document

Conversation

Settings

Empty State
```

```
Header

Optional
```

```
Footer

Optional
```

```
Loading

Boolean
```

```
Selected

Boolean
```

```
Clickable

Boolean
```

```
Padding

Compact

Default

Large
```

---

# Future Considerations

Future versions may support

- Expandable Cards
- Draggable Cards
- Collaborative Cards
- AI Insight Cards
- Analytics Cards

These enhancements should extend the current Card component without changing its overall structure.

---

# Summary

The Card component is the foundational layout container of KnowledgeOS.

Its modular structure, consistent spacing, and restrained visual styling make it suitable for organizing information across dashboards, documents, conversations, and settings while maintaining a clean production-quality interface.