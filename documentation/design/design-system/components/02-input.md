# 02-input.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Input component allows users to enter and edit short-form text throughout KnowledgeOS.

It is used for authentication, search, document metadata, workspace settings, and various forms.

Every single-line text field should use this component.

---

# Design Goals

The Input component should be:

- Simple
- Consistent
- Accessible
- Easy to scan
- Easy to interact with

Inputs should never distract from the user's content.

---

# Usage Guidelines

Use Input for:

- Email
- Password
- Workspace Name
- Search
- Document Title
- Conversation Name
- API Keys (Future)

Do not use Input for multi-line content.

Use the Textarea component instead.

---

# Variants

KnowledgeOS defines four input variants.

## Default

Used across the application.

---

## Search

Includes a leading search icon.

Used in

- Documents
- Conversations
- Global Search

---

## Password

Supports password masking.

Includes visibility toggle.

---

## Read-only

Displays information that cannot be edited.

Example

- Workspace ID
- User Email

---

# Layout

```
Label

┌──────────────────────────────────────────────┐
│ 🔍  Placeholder Text                    Icon │
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

Used in compact toolbars.

---

## Medium (Default)

Height

```
40px
```

Used throughout the application.

---

## Large

Height

```
48px
```

Used on authentication pages.

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

Placeholder

```
text.tertiary
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

# Icons

Leading Icon

```
16px
```

Trailing Icon

```
16px
```

Gap

```
12px
```

Icons use

```
text.secondary
```

---

# States

Every input supports

```
Default

Hover

Focus

Filled

Disabled

Read-only

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

## Filled

No visual changes.

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

## Read-only

Background

```
surface.secondary
```

Cursor

```
default
```

---

## Error

Border

```
error.500
```

Helper text changes to

```
error.700
```

---

# Labels

Every editable input requires a visible label.

Example

```
Workspace Name
```

Avoid relying on placeholders as labels.

---

# Helper Text

Displayed below the input.

Used for

- Instructions
- Character limits
- Validation messages

Example

```
Maximum 100 characters.
```

---

# Validation

Validation occurs

- On Blur
- On Submit

Avoid validating every keystroke unless necessary.

---

# Search Variant

Structure

```
🔍 Search documents...
```

Leading icon

```
Search
```

Clear button appears after typing.

---

# Password Variant

Structure

```
Password

*************

👁
```

Trailing icon toggles visibility.

---

# Responsive Behaviour

Desktop

Default width determined by parent container.

Tablet

No changes.

Mobile

Expand to full available width.

Minimum touch height

```
44px
```

---

# Accessibility

Requirements

- Associated label
- Keyboard accessible
- Screen-reader support
- Visible focus indicator
- Proper error announcements
- Minimum 44px touch target

---

# Motion

Border transition

```
150ms
```

Focus Ring

```
150ms
```

Placeholder color transition

```
150ms
```

---

# Best Practices

✅ Keep labels short

✅ Use meaningful placeholders

Examples

```
Search documents

Workspace name

Email address
```

---

# Anti-Patterns

Do NOT

❌ Use placeholders instead of labels

❌ Hide validation messages

❌ Disable autocomplete unnecessarily

❌ Use multiple border colors inconsistently

---

# Component API

Properties

```
Variant

Default

Search

Password

Read-only
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

Focus

Error

Disabled

Read-only
```

```
Leading Icon

Optional
```

```
Trailing Icon

Optional
```

```
Helper Text

Optional
```

```
Error Message

Optional
```

```
Full Width

Boolean
```

---

# Future Considerations

Future versions may introduce

- AI-assisted inputs
- Mention support
- Inline autocomplete
- Command inputs
- Tokenized inputs
- Multi-value inputs

These enhancements should extend the existing component API without changing current behavior.

---

# Summary

The Input component is the standard single-line text field throughout KnowledgeOS.

It provides a consistent, accessible, and predictable experience for user input while supporting validation, search, authentication, and future enhancements.