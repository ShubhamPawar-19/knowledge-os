# 19-breadcrumb.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Breadcrumb component displays the user's current location within the application hierarchy.

It helps users understand where they are and navigate back to higher-level pages without relying solely on the browser's back button.

---

# Design Goals

The Breadcrumb should be:

- Minimal
- Informative
- Consistent
- Accessible
- Secondary

It should provide context without competing with the page title.

---

# Usage Guidelines

Use Breadcrumbs for:

- Document Details
- Workspace Settings
- Conversation Details
- Future Admin Pages
- Multi-level Navigation

Do not use breadcrumbs on top-level pages like Dashboard or Login.

---

# Structure

Example

```
Home

/

Documents

/

Project Proposal.pdf
```

Only the final item represents the current page.

---

# Layout

```
Home

>

Documents

>

AI Handbook.pdf
```

Separator

```
ChevronRight
```

Uses Lucide React.

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

Current Page

```
Medium
```

Size

```
14px
```

---

# Colors

Inactive

```
text.secondary
```

Active

```
text.primary
```

Separator

```
text.tertiary
```

Hover

```
text.primary
```

---

# States

Supports

```
Default

Hover

Current

Disabled
```

---

## Current

Current page

- Not clickable
- Higher visual emphasis

---

## Hover

Clickable items underline slightly.

Text color changes to

```
text.primary
```

---

# Maximum Depth

Recommended maximum

```
4 levels
```

Example

```
Workspace

>

Documents

>

Policies

>

HR Handbook
```

---

# Overflow

If the hierarchy exceeds four levels

Display

```
Home

>

...

>

Current Folder

>

Current Page
```

Expand hidden items on click.

---

# Icons

Optional.

Example

```
🏠 Home

>

Documents

>

AI Handbook.pdf
```

Only the first item may use an icon.

---

# Responsive Behaviour

Desktop

Display full breadcrumb.

Tablet

Collapse middle items if necessary.

Mobile

Display only

```
Previous

>

Current
```

---

# Accessibility

Requirements

- Wrap in a `<nav>` element
- Use `aria-label="Breadcrumb"`
- Current page uses `aria-current="page"`
- Keyboard accessible links

---

# Motion

Hover

```
150ms
```

Color transition only.

Avoid animations during navigation.

---

# Best Practices

✅ Keep hierarchy logical

✅ Show only meaningful levels

✅ Use concise labels

Examples

```
Workspace

>

Documents

>

Project Plan
```

---

# Anti-Patterns

Do NOT

❌ Use breadcrumbs as primary navigation

❌ Include unnecessary levels

❌ Make the current page clickable

❌ Replace page titles with breadcrumbs

---

# Component API

Properties

```
Items

Required
```

```
Current Item

Required
```

```
Separator

ChevronRight

Default
```

```
Collapsed

Boolean
```

```
Icons

Optional
```

---

# Future Considerations

Future versions may support

- Dynamic breadcrumb generation
- Workspace-aware breadcrumbs
- Searchable breadcrumbs
- AI-generated navigation shortcuts

These enhancements should extend the existing Breadcrumb component while preserving its lightweight navigation role.

---

# Summary

The Breadcrumb component provides lightweight navigation context throughout KnowledgeOS.

Its consistent hierarchy, accessibility, and responsive behavior help users understand where they are and easily navigate to higher-level sections of the application.