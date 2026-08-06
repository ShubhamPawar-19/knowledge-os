# 01-button.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Button component is the primary interaction element throughout KnowledgeOS.

Buttons allow users to trigger actions, submit forms, navigate workflows, and confirm operations.

Every clickable action should use the standardized Button component.

---

# Design Goals

The Button should be:

- Recognizable
- Accessible
- Consistent
- Responsive
- Easy to scan

Buttons should communicate importance through hierarchy rather than size alone.

---

# Usage Guidelines

Use buttons for:

- Uploading documents
- Starting a chat
- Saving settings
- Confirming dialogs
- Deleting resources
- Navigating workflows

Do not use buttons for simple hyperlinks.

---

# Variants

KnowledgeOS defines five button variants.

## Primary

Used for the most important action on the page.

Examples

- Upload PDF
- Save Changes
- Create Workspace
- Send Message

---

## Secondary

Used for supporting actions.

Examples

- Cancel
- View Details
- Download

---

## Outline

Used when the action should remain visible but less prominent.

Examples

- Rename
- Duplicate
- Export

---

## Ghost

Used inside toolbars, tables, and navigation.

Examples

- Icon Buttons
- Row Actions
- Menu Actions

---

## Destructive

Used only for irreversible actions.

Examples

- Delete Document
- Delete Conversation
- Delete Workspace

---

# Sizes

## Small

Height

```
32px
```

Padding

```
12px 16px
```

Used in

- Tables
- Toolbars
- Compact Dialogs

---

## Medium (Default)

Height

```
40px
```

Padding

```
16px 20px
```

Used across the application.

---

## Large

Height

```
48px
```

Padding

```
20px 24px
```

Used for

- Landing Pages
- Hero Sections
- Primary Dialog Actions

---

# Layout

Button Structure

```
┌──────────────────────────────┐
│  Icon   Label        Spinner │
└──────────────────────────────┘
```

Optional Elements

- Leading Icon
- Label
- Trailing Icon
- Loading Spinner

---

# Typography

Uses

```
Font

Inter

Weight

Medium

Size

14px
```

Large Buttons

```
16px
```

---

# Border Radius

Uses

```
radius.md
```

---

# Elevation

Default

```
shadow.none
```

Hover

```
shadow.xs
```

Active

```
shadow.none
```

---

# Colors

## Primary

Background

```
color.primary.600
```

Text

```
text.inverse
```

Hover

```
color.primary.700
```

Disabled

```
neutral.300
```

---

## Secondary

Background

```
surface.secondary
```

Text

```
text.primary
```

Border

```
border.primary
```

---

## Outline

Background

```
Transparent
```

Border

```
border.primary
```

---

## Ghost

Background

```
Transparent
```

Hover

```
surface.secondary
```

---

## Destructive

Background

```
error.500
```

Hover

```
error.700
```

Text

```
text.inverse
```

---

# States

Every button supports

```
Default

Hover

Focus

Pressed

Disabled

Loading
```

---

## Loading

Replace leading icon with

```
LoaderCircle
```

Disable interaction.

Maintain button width.

Example

```
Saving...

Uploading...

Deleting...
```

---

## Disabled

Disable

- Hover
- Click
- Keyboard activation

Reduce opacity using

```
opacity.disabled
```

---

# Icons

Uses

```
Lucide React
```

Default Size

```
20px
```

Gap

```
8px
```

---

# Responsive Behaviour

Desktop

Use default sizing.

Tablet

No changes.

Mobile

Buttons stretch to available width where appropriate.

Minimum height

```
44px
```

---

# Accessibility

Requirements

- Keyboard accessible
- Visible focus ring
- Minimum touch target 44×44px
- Proper ARIA labels for icon-only buttons
- Loading state announced to screen readers

---

# Motion

Hover

```
150ms
```

Background transition.

Loading Spinner

```
1 second

Linear

Infinite
```

---

# Best Practices

✅ One primary button per section

✅ Keep labels concise

✅ Use verbs

Examples

```
Upload PDF

Save Changes

Create Workspace

Delete Document
```

---

# Anti-Patterns

Do NOT

❌ Use multiple primary buttons together

❌ Use vague labels

```
OK

Yes

Continue
```

❌ Use buttons for navigation links

❌ Mix different button heights in the same section

---

# Component API

Properties

```
Variant

Primary

Secondary

Outline

Ghost

Destructive
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

Loading

Disabled
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
Full Width

Boolean
```

---

# Future Considerations

Future versions may support

- Split Buttons
- Dropdown Buttons
- Floating Action Buttons
- AI Action Buttons
- Loading Progress Buttons

These should extend the existing API rather than replacing it.

---

# Summary

The Button component is the primary action trigger within KnowledgeOS.

By maintaining consistent sizing, spacing, colors, and interaction states, users can confidently recognize and interact with actions throughout the application.