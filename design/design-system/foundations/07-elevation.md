# 07-elevation.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

This document defines the elevation system used throughout KnowledgeOS.

Elevation communicates hierarchy, depth, and interaction—not decoration.

KnowledgeOS follows a minimal elevation strategy where shadows are subtle and used intentionally.

---

# Design Philosophy

Elevation should answer one question:

> **"Which element is above another?"**

Shadows should never be used simply to make the interface look "cool."

Instead, they should indicate:

- Layering
- Floating elements
- Interactive surfaces
- Temporary UI

---

# Elevation Principles

KnowledgeOS follows these principles:

- Prefer borders over heavy shadows.
- Use shadows sparingly.
- Keep elevation consistent.
- Higher elevation means higher importance.
- Avoid stacked shadows.

---

# Elevation Scale

KnowledgeOS defines six elevation levels.

| Token       | Purpose              |
|-------------|----------------------|
| shadow.none | Flat surfaces        |
| shadow.xs   | Inputs               |
| shadow.sm   | Cards                |
| shadow.md   | Dropdowns            |
| shadow.lg   | Modals               |
| shadow.xl   | Full-screen overlays |

---

# Shadow Values

## shadow.none

```
none
```

Used for

- Page background
- Sidebar
- Tables

---

## shadow.xs

```
0 1px 2px rgba(0,0,0,0.04)
```

Used for

- Text Inputs
- Search Fields
- Small Components

---

## shadow.sm

```
0 2px 6px rgba(0,0,0,0.06)
```

Used for

- Cards
- Metric Widgets
- Empty State Panels

This is the default elevation level.

---

## shadow.md

```
0 8px 20px rgba(0,0,0,0.08)
```

Used for

- Dropdown Menus
- Context Menus
- Popovers

---

## shadow.lg

```
0 16px 40px rgba(0,0,0,0.12)
```

Used for

- Dialogs
- Upload Modal
- Delete Confirmation
- Rename Dialog

---

## shadow.xl

```
0 24px 64px rgba(0,0,0,0.16)
```

Used for

- Future command palette
- Full-screen overlays
- Future onboarding flows

Should be used rarely.

---

# Surface Hierarchy

KnowledgeOS uses the following visual hierarchy:

```
Page Background

↓

Sidebar

↓

Cards

↓

Dropdowns

↓

Dialogs

↓

Toasts

↓

Tooltips
```

Every higher layer should have slightly more elevation.

---

# Card Elevation

Default

```
shadow.sm
```

Hover

```
shadow.md
```

Active

```
shadow.sm
```

Cards should never "jump" excessively.

---

# Modal Elevation

Dialogs always use

```
shadow.lg
```

Overlay

```
rgba(17,24,39,0.45)
```

The overlay should focus attention without making the interface feel heavy.

---

# Dropdown Elevation

Dropdown menus use

```
shadow.md
```

Border

```
border.primary
```

Radius

```
radius.lg
```

---

# Tooltip Elevation

Tooltips use

```
shadow.md
```

Small radius.

Compact padding.

---

# Toast Elevation

Toast notifications appear above all application content.

Elevation

```
shadow.lg
```

Position

```
Top Right
```

Desktop

```
Bottom Center
```

Mobile

---

# Hover Elevation

Interactive cards may increase elevation slightly.

Example

```
shadow.sm

↓

shadow.md
```

Animation

```
150ms
```

Avoid dramatic lifting effects.

---

# Focus Elevation

Focused components should prioritize:

- Focus Ring
- Border Color

Not increased shadow.

Accessibility takes precedence over aesthetics.

---

# Disabled Components

Disabled components never use elevation changes.

They remain visually flat.

---

# Layer Order (Z-Index)

| Layer         | Token      |
|---------------|------------|
| Base Content  | z.base     |
| Sticky Header | z.sticky   |
| Dropdown      | z.dropdown |
| Overlay       | z.overlay  |
| Modal         | z.modal    |
| Toast         | z.toast    |
| Tooltip       | z.tooltip  |

Avoid arbitrary z-index values.

---

# Responsive Behaviour

Elevation remains consistent across:

- Desktop
- Tablet
- Mobile

Only modal widths change—not shadow intensity.

---

# Accessibility

Shadows should never be the only indication of interaction.

Always combine elevation with:

- Borders
- Hover States
- Focus Rings
- Cursor Changes

---

# Usage Rules

Always

- Use semantic shadow tokens.
- Keep shadows subtle.
- Maintain consistent elevation hierarchy.

Never

- Stack multiple shadows.
- Use colorful shadows.
- Use shadows for decoration.
- Invent new shadow values.

---

# Future Considerations

Future versions may introduce elevation for:

- AI Agent Panels
- Side Drawers
- Floating Action Menus
- Collaboration Presence
- Notification Center

These should extend the existing elevation scale rather than replacing it.

---

# Summary

The KnowledgeOS elevation system provides a clear visual hierarchy through subtle, purposeful shadows.

By using a restrained elevation strategy, the interface feels modern, professional, and focused on content rather than visual effects.