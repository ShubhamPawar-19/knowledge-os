# 04-select.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Select component allows users to choose a single option from a predefined list.

It provides a consistent interface for selecting values throughout KnowledgeOS while minimizing input errors.

---

# Design Goals

The Select component should be:

- Easy to scan
- Keyboard accessible
- Consistent with Input
- Fast to use
- Accessible

Selections should require as few interactions as possible.

---

# Usage Guidelines

Use Select for:

- Workspace
- AI Model
- Sort By
- Filter Options
- Language (Future)
- Theme (Future)
- Organization Settings (Future)

Do not use Select when fewer than three mutually exclusive options exist.

Use Radio Buttons instead.

---

# Variants

KnowledgeOS defines three variants.

## Default

Standard dropdown selection.

---

## Searchable

Allows searching inside the available options.

Used for long option lists.

---

## Disabled

Displays a value that cannot currently be changed.

---

# Layout

```
Label

┌──────────────────────────────────────────────┐
│ GPT-4o Mini                           ▼      │
└──────────────────────────────────────────────┘

Helper Text
```

---

# Sizes

## Small

Height

```
36px
```

---

## Medium (Default)

Height

```
40px
```

---

## Large

Height

```
48px
```

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

Size

```
16px
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

Placeholder

```
text.tertiary
```

---

# Border Radius

Uses

```
radius.md
```

---

# Dropdown Icon

Uses

```
ChevronDown
```

Size

```
16px
```

Color

```
text.secondary
```

---

# Dropdown Menu

Background

```
surface.primary
```

Border

```
border.primary
```

Elevation

```
shadow.md
```

Radius

```
radius.lg
```

---

# States

Supports

```
Default

Hover

Focus

Open

Selected

Disabled

Error
```

---

## Default

Border

```
border.primary
```

---

## Hover

Border

```
border.secondary
```

---

## Focus

Border

```
border.focus
```

Focus Ring

```
focus.primary
```

---

## Open

Chevron rotates

```
180°
```

Dropdown becomes visible.

---

## Selected

Display chosen value.

Close dropdown automatically.

---

## Disabled

Background

```
surface.secondary
```

Text

```
text.disabled
```

Interaction disabled.

---

## Error

Border

```
error.500
```

Helper Text

```
error.700
```

---

# Searchable Variant

Structure

```
Search...

-------------------

Workspace A

Workspace B

Workspace C
```

Filtering occurs instantly while typing.

No server requests for local option lists.

---

# Empty State

If no options exist

```
No options available.
```

Disable selection.

---

# Labels

Every editable Select requires a visible label.

Example

```
AI Model
```

---

# Helper Text

Used for

- Explanations
- Validation
- Additional guidance

Example

```
Choose the model used for chat responses.
```

---

# Responsive Behaviour

Desktop

Uses parent width.

Tablet

No changes.

Mobile

Full width.

Dropdown height should never exceed viewport height.

---

# Accessibility

Requirements

- Keyboard navigation
- Arrow key support
- Enter to select
- Escape to close
- Screen-reader support
- Visible focus ring
- Proper ARIA roles

---

# Motion

Dropdown

```
Fade

+

Slide Down

8px
```

Duration

```
180ms
```

Chevron Rotation

```
150ms
```

---

# Best Practices

✅ Keep option labels concise

✅ Group related options when necessary

✅ Use searchable variant for long lists

---

# Anti-Patterns

Do NOT

❌ Use Select for binary choices

❌ Hide labels

❌ Display hundreds of options without search

❌ Allow horizontal scrolling

---

# Component API

Properties

```
Variant

Default

Searchable

Disabled
```

```
Size

Small

Medium

Large
```

```
State

Default

Open

Focus

Error

Disabled
```

```
Placeholder

Optional
```

```
Helper Text

Optional
```

```
Options

Required
```

```
Full Width

Boolean
```

---

# Future Considerations

Future versions may support

- Multi-select
- Async option loading
- Virtualized lists
- AI-assisted recommendations
- Grouped options
- Custom option rendering

These capabilities should extend the current Select component without changing its core API.

---

# Summary

The Select component provides a consistent, accessible, and efficient way to choose predefined values throughout KnowledgeOS while supporting keyboard navigation, validation, and future scalability.