# 13-table.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Table component presents structured data in rows and columns.

It is primarily used for displaying documents, conversations, processing jobs, and activity logs in KnowledgeOS.

Tables should prioritize readability, quick scanning, and efficient management of large datasets.

---

# Design Goals

The Table should be:

- Easy to scan
- Consistent
- Responsive
- Accessible
- Performant

Users should be able to locate information with minimal effort.

---

# Usage Guidelines

Use Tables for:

- Documents
- Processing Jobs
- Conversation History
- Activity Logs
- Workspace Members (Future)
- API Keys (Future)

Do not use tables for dashboard metrics.

Use Cards instead.

---

# Structure

```
┌─────────────────────────────────────────────────────────────┐
│ Header Row                                                  │
├─────────────────────────────────────────────────────────────┤
│ Row                                                        │
├─────────────────────────────────────────────────────────────┤
│ Row                                                        │
├─────────────────────────────────────────────────────────────┤
│ Row                                                        │
└─────────────────────────────────────────────────────────────┘
```

---

# Standard Columns

Example

```
□

Document

Status

Uploaded

Size

Actions
```

Columns should remain consistent across similar tables.

---

# Row Height

Default

```
56px
```

Compact

```
48px
```

Comfortable

```
64px
```

---

# Padding

Horizontal

```
16px
```

Vertical

```
12px
```

---

# Typography

Header

```
Inter

14px

Semibold
```

Body

```
14px

Regular
```

---

# Colors

Header Background

```
surface.secondary
```

Body Background

```
surface.primary
```

Border

```
border.primary
```

Hover

```
surface.secondary
```

Selected

```
primary.50
```

---

# Borders

Horizontal dividers only.

Avoid vertical borders.

---

# Selection

Supports

```
Single Selection

Multiple Selection
```

Uses checkboxes.

Example

```
☐

☑
```

---

# Sorting

Supported on sortable columns.

Example

```
Document ▲

Uploaded ▼
```

Default

Ascending

Descending

None

---

# Filtering

Tables may be filtered by

- Status
- Date
- Workspace
- AI Model (Future)

Filtering controls appear above the table.

---

# Search

Large tables include

```
Search...
```

Search filters rows instantly.

---

# Pagination

Default page size

```
20 rows
```

Options

```
20

50

100
```

Footer

```
Showing 1–20 of 128
```

---

# Row Actions

Actions appear on the right.

Examples

```
View

Rename

Download

Delete
```

Prefer an overflow menu when more than three actions exist.

---

# Empty State

If no data exists

```
No documents found.

[ Upload PDF ]
```

Uses the Empty State component.

---

# Loading State

Display

```
Skeleton Rows
```

Maintain table height.

Avoid layout shifts.

---

# Error State

Display an inline Alert.

Example

```
Unable to load documents.

Retry
```

---

# Responsive Behaviour

Desktop

Standard table.

Tablet

Reduce optional columns.

Mobile

Convert rows into stacked cards.

Avoid horizontal scrolling whenever possible.

---

# Accessibility

Requirements

- Proper table semantics
- Keyboard navigation
- Sort announcements
- Screen-reader support
- Visible focus indicators

---

# Motion

Row Hover

```
150ms
```

Sort Icon

```
150ms
```

Loading

Uses Skeleton component.

---

# Best Practices

✅ Keep important columns first

✅ Right-align numeric values

✅ Left-align text

✅ Keep row actions consistent

---

# Anti-Patterns

Do NOT

❌ Display excessive columns

❌ Use nested tables

❌ Hide important actions

❌ Mix different row heights

---

# Component API

Properties

```
Columns

Required
```

```
Rows

Required
```

```
Selectable

Boolean
```

```
Sortable

Boolean
```

```
Pagination

Boolean
```

```
Loading

Boolean
```

```
Empty State

Component
```

```
Row Actions

Optional
```

---

# Future Considerations

Future versions may support

- Column resizing
- Drag-and-drop columns
- Sticky headers
- Infinite scrolling
- Virtualized rendering
- Bulk editing

These enhancements should extend the existing Table component without changing its core interaction model.

---

# Summary

The Table component is the primary data presentation component in KnowledgeOS.

Its emphasis on readability, accessibility, and scalability makes it suitable for managing documents, conversations, jobs, and future administrative features while maintaining a clean production-quality interface.