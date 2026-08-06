# 05-spacing.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

This document defines the spacing system used throughout KnowledgeOS.

A consistent spacing system improves readability, establishes rhythm, and creates a professional interface.

Every layout and component should use these spacing tokens.

---

# Design Philosophy

KnowledgeOS follows an **8-point spacing system**.

Spacing should create:

- Visual hierarchy
- Consistency
- Breathing room
- Predictable layouts

Never use arbitrary spacing values.

---

# Base Unit

```
1 Unit = 8px
```

All spacing values are multiples of the base unit whenever practical.

---

# Spacing Scale

| Token    | Value | Usage             |
|----------|-------|-------------------|
| space.0  | 0px   | None              |
| space.1  | 4px   | Tiny gaps         |
| space.2  | 8px   | Icons, badges     |
| space.3  | 12px  | Compact layouts   |
| space.4  | 16px  | Standard spacing  |
| space.5  | 20px  | Card internals    |
| space.6  | 24px  | Sections          |
| space.8  | 32px  | Large sections    |
| space.10 | 40px  | Major layouts     |
| space.12 | 48px  | Page spacing      |
| space.16 | 64px  | Hero spacing      |
| space.20 | 80px  | Large layouts     |
| space.24 | 96px  | Marketing pages   |
| space.32 | 128px | Large empty areas |

---

# Page Layout

Desktop

```
Horizontal Padding

32px
```

Vertical Padding

```
32px
```

Maximum Content Width

```
1440px
```

---

# Section Spacing

Between major sections

```
32px
```

Between cards

```
24px
```

Between headings and content

```
16px
```

---

# Card Spacing

Internal Padding

```
24px
```

Gap Between Elements

```
16px
```

Card Grid Gap

```
24px
```

---

# Form Spacing

Label → Input

```
8px
```

Input → Helper Text

```
4px
```

Input → Input

```
24px
```

Section → Section

```
32px
```

---

# Button Spacing

Horizontal Padding

```
16px
```

Vertical Padding

```
10px
```

Button Group Gap

```
12px
```

---

# Navigation Spacing

Sidebar Item Height

```
40px
```

Sidebar Padding

```
16px
```

Navigation Item Gap

```
8px
```

Top Navigation Height

```
64px
```

---

# Table Spacing

Header Padding

```
16px
```

Cell Padding

```
16px
```

Row Height

```
56px
```

---

# Modal Spacing

Outer Padding

```
32px
```

Section Gap

```
24px
```

Footer Gap

```
16px
```

---

# Chat Layout

Message Gap

```
24px
```

Bubble Padding

```
16px
```

Citation Gap

```
12px
```

Input Margin

```
24px
```

---

# Dashboard

Metric Card Gap

```
24px
```

Section Gap

```
32px
```

Grid Gap

```
24px
```

---

# Empty States

Icon → Title

```
24px
```

Title → Description

```
12px
```

Description → CTA

```
24px
```

---

# Responsive Spacing

## Desktop

Use full spacing scale.

---

## Tablet

Reduce page padding to

```
24px
```

Reduce section gaps to

```
24px
```

---

## Mobile

Page Padding

```
16px
```

Card Padding

```
16px
```

Section Gap

```
24px
```

---

# Layout Grid

Desktop

```
12 Columns

24px Gutters
```

Tablet

```
8 Columns

16px Gutters
```

Mobile

```
4 Columns

16px Gutters
```

---

# Whitespace Rules

Always provide generous whitespace around:

- Page titles
- Cards
- Tables
- Forms
- Chat messages

Avoid crowded layouts.

---

# Accessibility

Touch Targets

Minimum

```
44px × 44px
```

Interactive spacing should prevent accidental clicks.

---

# Spacing Rules

Always

- Use spacing tokens
- Align to the 8-point grid
- Maintain consistent rhythm

Never

- Use random margins
- Mix spacing scales
- Crowd components
- Add unnecessary whitespace

---

# Future Considerations

Future versions may define spacing tokens for:

- Analytics dashboards
- AI Agent canvases
- Collaborative editing
- Kanban layouts
- Timeline views

These should extend the existing spacing scale rather than introduce new arbitrary values.

---

# Summary

The spacing system provides a consistent visual rhythm across KnowledgeOS.

By following a unified 8-point grid, every page and component remains balanced, readable, and predictable, resulting in a polished production-quality user experience.