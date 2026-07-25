# 20-pagination.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Pagination component allows users to navigate through large datasets efficiently.

It divides content into manageable pages while maintaining consistent performance and usability.

---

# Design Goals

The Pagination component should be:

- Simple
- Predictable
- Accessible
- Responsive
- Easy to navigate

Users should always know their current position within the dataset.

---

# Usage Guidelines

Use Pagination for:

- Documents
- Conversations
- Activity Logs
- Processing Jobs
- Future Admin Tables

Do not use pagination for small datasets (less than 20 items).

---

# Structure

Example

```
← Previous

1

2

3

4

...

12

Next →
```

---

# Layout

```
Showing 21–40 of 238

← Previous

1

2

3

4

...

12

Next →
```

The page summary appears above or below the pagination controls.

---

# Page Size

Default

```
20 items
```

Supported Options

```
20

50

100
```

Changing page size resets the current page to Page 1.

---

# Buttons

Supports

- Previous
- Next
- First (Optional)
- Last (Optional)

Previous is disabled on the first page.

Next is disabled on the last page.

---

# Current Page

Displayed using the Primary color.

Example

```
[3]
```

Current page is not clickable.

---

# Overflow

For large datasets

```
1

2

3

...

10

11

12
```

Never display every page number.

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
14px
```

---

# Colors

Default

```
surface.primary
```

Border

```
border.primary
```

Active

```
primary.600
```

Text

```
text.primary
```

Disabled

```
text.disabled
```

---

# Border Radius

Uses

```
radius.md
```

---

# States

Supports

```
Default

Hover

Active

Focused

Disabled
```

---

## Hover

Background

```
surface.secondary
```

---

## Active

Background

```
primary.600
```

Text

```
text.inverse
```

---

## Disabled

Reduced opacity.

Interaction disabled.

---

# Page Summary

Example

```
Showing 41–60 of 238 documents
```

Always display when pagination exists.

---

# Responsive Behaviour

Desktop

Display page numbers.

Tablet

Reduce visible page numbers.

Mobile

Display only

```
← Previous

Page 3 of 12

Next →
```

---

# Accessibility

Requirements

- Wrap inside `<nav>`
- Use `aria-label="Pagination"`
- Current page uses `aria-current="page"`
- Keyboard accessible
- Proper focus indicators

---

# Motion

Hover

```
150ms
```

Color transition only.

Avoid page transition animations.

---

# Best Practices

✅ Display page summary

✅ Keep navigation predictable

✅ Disable unavailable actions

✅ Preserve filters and sorting between pages

---

# Anti-Patterns

Do NOT

❌ Show hundreds of page numbers

❌ Reset filters when changing pages

❌ Hide the current page

❌ Allow invalid page navigation

---

# Component API

Properties

```
Current Page

Required
```

```
Total Pages

Required
```

```
Page Size

20

50

100
```

```
Show Summary

Boolean
```

```
Show First/Last

Boolean
```

```
Disabled

Boolean
```

---

# Future Considerations

Future versions may support

- Infinite scrolling
- Cursor-based pagination
- Virtualized datasets
- Smart page jumping
- AI-recommended navigation

These enhancements should extend the existing Pagination component while maintaining its predictable interaction model.

---

# Summary

The Pagination component enables efficient navigation through large datasets in KnowledgeOS.

Its clear controls, responsive behavior, and accessibility ensure users can browse documents, conversations, and other resources without losing context.