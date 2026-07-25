# 04-typography.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

This document defines the typography system for KnowledgeOS.

Typography establishes hierarchy, improves readability, and creates a consistent visual language across the application.

All screens and components must use these typography tokens.

---

# Design Philosophy

Typography should be:

- Readable
- Minimal
- Professional
- Consistent
- Accessible

The interface should prioritize content over decoration.

---

# Font Family

Primary Typeface

```
Inter
```

Fallback Stack

```
Inter,
ui-sans-serif,
system-ui,
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
Roboto,
sans-serif
```

---

# Font Weights

| Token    | Weight |
|----------|--------|
| Regular  | 400    |
| Medium   | 500    |
| Semibold | 600    |
| Bold     | 700    |

Usage

Regular

- Paragraphs
- Labels

Medium

- Buttons
- Navigation

Semibold

- Headings
- Cards
- Dialog Titles

Bold

- Metrics
- Hero Numbers

---

# Font Sizes

| Token  | Size | Usage             |
|--------|------|-------------------|
| xs     | 12px | Helper Text       |
| sm     | 14px | Labels            |
| md     | 16px | Body Text         |
| lg     | 18px | Large Body        |
| xl     | 20px | Section Titles    |
| 2xl    | 24px | Page Titles       |
| 3xl    | 30px | Hero Titles       |
| 4xl    | 36px | Dashboard Metrics |

---

# Line Heights

| Token   | Value |
|---------|-------|
| Tight   | 1.2   |
| Normal  | 1.5   |
| Relaxed | 1.75  |

---

# Letter Spacing

Default

```
0
```

Large Headings

```
-0.02em
```

Buttons

```
0
```

Avoid excessive letter spacing.

---

# Heading Scale

## H1

Purpose

Main page title

Example

```
Dashboard
```

Specification

```
36px

Bold

Line Height: Tight
```

---

## H2

Purpose

Major section title

Example

```
Recent Documents
```

Specification

```
30px

Semibold
```

---

## H3

Purpose

Card titles

Specification

```
24px

Semibold
```

---

## H4

Purpose

Subsections

Specification

```
20px

Semibold
```

---

## H5

Purpose

Dialogs

Specification

```
18px

Semibold
```

---

## H6

Purpose

Small sections

Specification

```
16px

Semibold
```

---

# Body Text

Primary Body

```
16px

Regular

Line Height: Normal
```

Secondary Body

```
14px

Regular
```

Helper Text

```
12px

Regular
```

---

# Navigation Typography

Sidebar

```
14px

Medium
```

Top Navigation

```
14px

Medium
```

---

# Button Typography

Small Button

```
14px

Medium
```

Medium Button

```
14px

Medium
```

Large Button

```
16px

Medium
```

Text should always remain horizontally centered.

---

# Form Typography

Input Text

```
16px

Regular
```

Label

```
14px

Medium
```

Helper Text

```
12px

Regular
```

Validation Message

```
12px

Medium
```

---

# Table Typography

Header

```
14px

Semibold
```

Cell

```
14px

Regular
```

---

# Badge Typography

```
12px

Medium
```

Badges should remain short.

Examples

```
Ready

Processing

Failed
```

---

# Metric Typography

Dashboard Metrics

```
36px

Bold
```

Metric Label

```
14px

Medium
```

---

# Chat Typography

User Message

```
16px

Regular
```

Assistant Message

```
16px

Regular
```

Citation

```
14px

Medium
```

Timestamp

```
12px

Regular
```

---

# Empty States

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

# Responsive Typography

Desktop

Use full typography scale.

Tablet

Reduce large headings by one level.

Mobile

Reduce page titles while maintaining body text at 16px.

Never reduce body text below 16px.

---

# Accessibility

Requirements

- Minimum body text: 16px
- Maintain WCAG contrast ratios
- Avoid long line lengths
- Proper heading hierarchy
- Never rely solely on font weight for emphasis

---

# Typography Rules

Always

- Use semantic heading levels
- Maintain consistent hierarchy
- Prefer readability over density

Never

- Use multiple font families
- Use decorative fonts
- Use all caps for long text
- Create arbitrary font sizes

---

# Future Considerations

Future versions may introduce

- Monospace font for code blocks
- Markdown typography
- AI-generated rich text
- PDF preview typography

These additions should extend the existing system without changing current typography tokens.

---

# Summary

The KnowledgeOS typography system creates a clear visual hierarchy that improves readability, supports accessibility, and ensures consistency across every screen and component.

Typography should always guide attention toward content rather than draw attention to itself.