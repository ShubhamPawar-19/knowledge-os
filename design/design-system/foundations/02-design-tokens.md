# 02-design-tokens.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

This document defines the foundational design tokens used throughout KnowledgeOS.

Design tokens are reusable design decisions that ensure consistency across the application.

Every component and screen should reference these tokens instead of defining custom values.

---

# Token Categories

KnowledgeOS defines tokens for:

- Colors
- Typography
- Spacing
- Border Radius
- Borders
- Shadows
- Opacity
- Icon Sizes
- Component Sizes
- Motion
- Z-Index

---

# Naming Convention

Tokens follow a semantic naming convention.

Example

```
color.primary
surface.secondary
text.muted
radius.lg
shadow.md
space.6
```

Avoid hardcoding values in component specifications.

---

# Color Tokens

```
color.primary
color.secondary
color.success
color.warning
color.error
color.info

surface.primary
surface.secondary
surface.tertiary

text.primary
text.secondary
text.tertiary
text.inverse

border.primary
border.secondary

focus.primary
```

Actual color values are defined in:

```
03-colors.md
```

---

# Typography Tokens

```
font.family.sans

font.weight.regular
font.weight.medium
font.weight.semibold
font.weight.bold

font.size.xs
font.size.sm
font.size.md
font.size.lg
font.size.xl
font.size.2xl
font.size.3xl
font.size.4xl

line.height.tight
line.height.normal
line.height.relaxed
```

Typography specifications are defined in:

```
04-typography.md
```

---

# Spacing Tokens

KnowledgeOS follows an **8-point spacing system**.

```
space.0
space.1
space.2
space.3
space.4
space.5
space.6
space.8
space.10
space.12
space.16
space.20
space.24
space.32
```

Spacing values are documented in:

```
05-spacing.md
```

---

# Border Radius Tokens

```
radius.none
radius.sm
radius.md
radius.lg
radius.xl
radius.2xl
radius.full
```

Usage

| Component | Token |
|-----------|-------|
| Button | radius.md |
| Input | radius.md |
| Card | radius.lg |
| Modal | radius.xl |
| Avatar | radius.full |

---

# Border Tokens

```
border.none

border.width.sm

border.width.md

border.width.lg

border.color.primary

border.color.secondary
```

Borders should remain subtle.

Avoid heavy outlines.

---

# Shadow Tokens

```
shadow.none

shadow.xs

shadow.sm

shadow.md

shadow.lg

shadow.xl
```

Shadows communicate elevation only.

Never use shadows for decoration.

Detailed values are defined in:

```
07-elevation.md
```

---

# Opacity Tokens

```
opacity.disabled

opacity.hover

opacity.overlay

opacity.loading
```

Used for

- Disabled buttons
- Modal overlays
- Loading states
- Hover effects

---

# Icon Tokens

```
icon.xs

icon.sm

icon.md

icon.lg

icon.xl
```

Used consistently across

- Sidebar
- Buttons
- Tables
- Navigation
- Cards

Detailed sizing appears in

```
06-icons.md
```

---

# Avatar Tokens

```
avatar.sm

avatar.md

avatar.lg

avatar.xl
```

Used throughout

- Profile
- Workspace
- Navigation
- Teams (Future)

---

# Button Tokens

```
button.height.sm

button.height.md

button.height.lg

button.padding.x

button.padding.y
```

Variants

- Primary
- Secondary
- Ghost
- Outline
- Destructive

Component details belong in the Button specification.

---

# Input Tokens

```
input.height

input.padding

input.radius

input.border

input.focus
```

Applied consistently to

- Inputs
- Textareas
- Search Fields
- Select Components

---

# Card Tokens

```
card.background

card.padding

card.radius

card.shadow

card.border
```

Every card should use identical spacing and corner radius.

---

# Table Tokens

```
table.row.height

table.header.height

table.padding

table.border
```

Applies to

- Documents
- Conversations
- Settings
- Future Analytics

---

# Sidebar Tokens

```
sidebar.width

sidebar.item.height

sidebar.icon

sidebar.padding
```

Maintains consistency across navigation.

---

# Navbar Tokens

```
navbar.height

navbar.padding

navbar.shadow
```

Shared across all authenticated pages.

---

# Modal Tokens

```
modal.width

modal.padding

modal.radius

modal.overlay
```

Used for

- Upload
- Delete
- Rename
- Confirmation

---

# Motion Tokens

```
motion.fast

motion.normal

motion.slow

motion.page

motion.modal
```

Complete motion specifications are defined in

```
08-motion.md
```

---

# Z-Index Tokens

```
z.base

z.dropdown

z.sticky

z.overlay

z.modal

z.toast

z.tooltip
```

Avoid arbitrary z-index values.

Always use semantic tokens.

---

# State Tokens

Every interactive component supports

```
Default

Hover

Focus

Active

Disabled

Loading

Success

Warning

Error
```

No custom states should be introduced unless documented.

---

# Responsive Tokens

KnowledgeOS supports three primary breakpoints.

```
mobile

tablet

desktop
```

Components should adapt using these predefined breakpoints.

---

# Accessibility Tokens

Define reusable accessibility values for

- Focus Ring
- Focus Offset
- Minimum Touch Target
- Contrast Ratios

Accessibility tokens should never be overridden.

---

# Token Usage Rules

Always

- Reference tokens
- Reuse existing values
- Maintain consistency
- Extend instead of replacing

Never

- Hardcode spacing
- Hardcode colors
- Invent new shadows
- Create inconsistent radii

---

# Example

Instead of

```
Border Radius: 16px

Padding: 24px

Background: #FFFFFF
```

Use

```
Radius: radius.lg

Padding: space.6

Background: surface.primary
```

This keeps every component consistent and maintainable.

---

# Future Considerations

Future versions may introduce tokens for

- Charts
- AI Agent States
- Notifications
- Billing
- Team Presence
- Collaboration
- Realtime Indicators

These should extend the existing token system rather than replace it.

---

# Summary

Design Tokens are the single source of truth for visual consistency in KnowledgeOS.

All future components, screens, and design decisions should reference these tokens, ensuring scalability, maintainability, and a professional design system.