# 03-colors.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

This document defines the official color system for KnowledgeOS.

Colors should communicate meaning rather than decoration.

Every component, page, and interaction must reference these color tokens instead of hardcoded values.

---

# Design Philosophy

KnowledgeOS is a productivity application.

The interface should feel:

- Clean
- Professional
- Calm
- Trustworthy
- Technical

Color should never distract users from their documents or AI conversations.

---

# Color Palette

The system consists of:

- Primary
- Neutral
- Semantic
- Surface
- Border
- Text
- Focus

---

# Primary Colors

Used for:

- Primary Buttons
- Links
- Active Navigation
- Selected States
- Focus Indicators

| Token             | Value   |
|-------------------|---------|
| color.primary.50  | #EEF4FF |
| color.primary.100 | #D9E8FF |
| color.primary.200 | #B8D3FF |
| color.primary.300 | #8CB7FF |
| color.primary.400 | #5C92FF |
| color.primary.500 | #3B82F6 |
| color.primary.600 | #2563EB |
| color.primary.700 | #1D4ED8 |
| color.primary.800 | #1E40AF |
| color.primary.900 | #172554 |

Primary Brand Color

```
color.primary.600
```

---

# Neutral Colors

Used for layouts and typography.

| Token       | Value   |
|-------------|---------|
| neutral.0   | #FFFFFF |
| neutral.50  | #F9FAFB |
| neutral.100 | #F3F4F6 |
| neutral.200 | #E5E7EB |
| neutral.300 | #D1D5DB |
| neutral.400 | #9CA3AF |
| neutral.500 | #6B7280 |
| neutral.600 | #4B5563 |
| neutral.700 | #374151 |
| neutral.800 | #1F2937 |
| neutral.900 | #111827 |

---

# Surface Colors

Used for application backgrounds.

| Token             | Value   |
|-------------------|---------|
| surface.primary   | #FFFFFF |
| surface.secondary | #F9FAFB |
| surface.tertiary  | #F3F4F6 |
| surface.inverse   | #111827 |

---

# Text Colors

| Token          | Value    |
|----------------|----------|
| text.primary   | #111827  |
| text.secondary | #4B5563  |
| text.tertiary  | #6B7280  |
| text.disabled  | #9CA3AF  |
| text.inverse   | #FFFFFF  |

---

# Border Colors

| Token            | Value   |
|------------------|---------|
| border.primary   | #E5E7EB |
| border.secondary | #D1D5DB |
| border.focus     | #2563EB |

Borders should remain subtle.

Never dominate the layout.

---

# Semantic Colors

## Success

| Token       | Value   |
|-------------|---------|
| success.5   | #ECFDF5 |
| success.500 | #22C55E |
| success.700 | #15803D |

Used for

- Completed uploads
- Ready documents
- Successful actions

---

## Warning

| Token       | Value   |
|-------------|---------|
| warning.50  | #FEFCE8 |
| warning.500 | #EAB308 |
| warning.700 | #A16207 |

Used for

- Processing
- Pending actions
- Warnings

---

## Error

| Token     | Value   |
|-----------|---------|
| error.50  | #FEF2F2 |
| error.500 | #EF4444 |
| error.700 | #B91C1C |

Used for

- Failed uploads
- Validation errors
- Delete actions

---

## Info

| Token    | Value   |
|----------|---------|
| info.50  | #EFF6FF |
| info.500 | #3B82F6 |
| info.700 | #1D4ED8 |

Used for

- Informational banners
- Help messages
- AI processing indicators

---

# Navigation Colors

Sidebar

```
Background

surface.primary
```

Active Item

```
color.primary.50
```

Active Icon

```
color.primary.600
```

Inactive Item

```
text.secondary
```

Hover

```
surface.secondary
```

---

# Button Colors

Primary

```
Background

color.primary.600

Text

text.inverse
```

Secondary

```
Background

surface.secondary

Text

text.primary
```

Ghost

```
Transparent
```

Destructive

```
error.500
```

Disabled

```
neutral.300
```

---

# Input Colors

Default

```
Background

surface.primary

Border

border.primary
```

Focus

```
Border

border.focus
```

Error

```
Border

error.500
```

Disabled

```
surface.secondary
```

---

# Status Badges

Ready

```
Background

success.50

Text

success.700
```

Processing

```
Background

warning.50

Text

warning.700
```

Failed

```
Background

error.50

Text

error.700
```

---

# Chat Colors

User Message

```
Background

color.primary.600

Text

text.inverse
```

Assistant Message

```
Background

surface.secondary

Text

text.primary
```

Citation Card

```
Background

surface.primary

Border

border.primary
```

---

# Focus Color

Every interactive component uses

```
border.focus
```

Focus indicators must never rely solely on browser defaults.

---

# Dark Mode

Version 1

```
Not Supported
```

The color system should be designed so dark mode can be introduced later without changing token names.

---

# Accessibility

Requirements

- WCAG AA contrast compliance
- Color never used as the only indicator
- Focus indicators visible
- Error states include icons/messages
- High readability

---

# Color Usage Rules

Always

- Use semantic tokens
- Maintain consistency
- Use color to communicate meaning

Never

- Introduce random colors
- Use gradients for primary UI
- Color entire pages unnecessarily
- Depend only on color for status

---

# Future Considerations

Future versions may introduce

- Dark Theme
- Team Presence Colors
- AI Agent Status Colors
- Analytics Charts
- Collaboration Indicators

These additions should extend the current palette without changing existing tokens.

---

# Summary

The KnowledgeOS color system prioritizes clarity, accessibility, and consistency.

Every color exists to communicate information, reinforce hierarchy, or provide user feedback—not decoration.