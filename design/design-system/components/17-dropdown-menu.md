# 17-dropdown-menu.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Dropdown Menu component provides contextual actions without cluttering the interface.

It allows users to access secondary actions associated with an item while keeping the UI clean and focused.

---

# Design Goals

The Dropdown Menu should be:

- Compact
- Discoverable
- Consistent
- Accessible
- Fast

Menus should expose actions only when needed.

---

# Usage Guidelines

Use Dropdown Menus for:

- Document Actions
- Conversation Actions
- User Profile Menu
- Workspace Switcher
- Table Row Actions
- More (⋯) Menus

Do not use dropdowns for primary navigation.

---

# Variants

KnowledgeOS defines four menu variants.

## Standard

General contextual actions.

---

## User Menu

Profile-related actions.

Example

- Profile
- Settings
- Logout

---

## Table Actions

Actions related to a table row.

Example

- Open
- Rename
- Delete

---

## Nested Menu

Supports one additional submenu level.

Avoid deeper nesting.

---

# Layout

```
────────────────────────

✏ Rename

📄 Duplicate

⬇ Download

──────────────

🗑 Delete

────────────────────────
```

---

# Structure

A menu may contain

- Menu Items
- Icons
- Dividers
- Labels
- Submenus

---

# Sizes

Minimum Width

```
180px
```

Maximum Width

```
320px
```

Item Height

```
40px
```

---

# Typography

Label

```
14px

Medium
```

Section Label

```
12px

Semibold
```

Shortcut

```
12px

Regular
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

Hover

```
surface.secondary
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
radius.lg
```

---

# Elevation

```
shadow.lg
```

---

# Icons

Uses

```
Lucide React
```

Size

```
16px
```

Gap

```
12px
```

---

# Dividers

Optional.

Used to separate destructive actions.

Example

```
Rename

Duplicate

----------------

Delete
```

---

# States

Supports

```
Closed

Open

Hover

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

## Focus

Visible keyboard focus.

---

## Disabled

Interaction disabled.

Reduced opacity.

---

# Placement

Default

```
Bottom Start
```

Automatically reposition if viewport space is limited.

---

# Responsive Behaviour

Desktop

Floating menu.

Tablet

Same behavior.

Mobile

Use Bottom Sheet instead of dropdown.

---

# Accessibility

Requirements

- Keyboard navigation
- Arrow key support
- Enter activates item
- Escape closes menu
- Proper `role="menu"`
- Proper `role="menuitem"`

---

# Motion

Open

```
Fade In

+

Scale 96% → 100%
```

Duration

```
150ms
```

Close

```
Fade Out
```

Duration

```
100ms
```

---

# Best Practices

✅ Group related actions

✅ Separate destructive actions

✅ Keep labels action-oriented

Examples

```
Rename

Download

Delete
```

---

# Anti-Patterns

Do NOT

❌ Place primary actions inside dropdowns

❌ Use long menus

❌ Create more than one submenu level

❌ Mix unrelated actions

---

# Component API

Properties

```
Items

Required
```

```
Icons

Optional
```

```
Dividers

Optional
```

```
Disabled Items

Supported
```

```
Nested Menu

Optional
```

```
Placement

Top

Bottom

Left

Right
```

---

# Future Considerations

Future versions may support

- Searchable menus
- AI suggested actions
- Recently used actions
- Collaborative menus
- Dynamic permissions

These enhancements should extend the existing Dropdown Menu component while preserving its lightweight and contextual behavior.

---

# Summary

The Dropdown Menu component provides organized access to secondary actions throughout KnowledgeOS.

Its consistent structure, keyboard accessibility, and clean presentation make it ideal for contextual menus, row actions, and profile management while keeping the interface uncluttered.