# 06-icons.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

This document defines the iconography system for KnowledgeOS.

Icons improve recognition, reduce cognitive load, and provide visual cues for actions and content.

Icons should support the interface—not replace text.

---

# Design Philosophy

Icons should be:

- Simple
- Minimal
- Consistent
- Readable
- Functional

Every icon must communicate meaning clearly.

Avoid decorative icons.

---

# Icon Library

KnowledgeOS uses

```
Lucide React
```

Reasons

- Open Source
- Lightweight
- Consistent Stroke Width
- Excellent React Support
- Used widely in modern SaaS products

---

# Icon Style

Stroke

```
2px
```

Line Cap

```
Round
```

Line Join

```
Round
```

Icons should remain outlined.

Do not mix filled and outlined icons.

---

# Icon Sizes

| Token | Size | Usage |
|--------|------|----------------------|
| icon.xs | 14px | Badges |
| icon.sm | 16px | Inputs |
| icon.md | 20px | Buttons |
| icon.lg | 24px | Navigation |
| icon.xl | 32px | Empty States |

---

# Color Rules

Default

```
text.secondary
```

Hover

```
text.primary
```

Active

```
color.primary.600
```

Disabled

```
text.disabled
```

Destructive

```
error.500
```

Icons should inherit color from their parent component whenever possible.

---

# Navigation Icons

| Section       | Icon            |
|---------------|-----------------|
| Dashboard     | LayoutDashboard |
| Documents     | FileText        |
| AI Chat       | Bot             |
| Conversations | MessageSquare   |
| Settings      | Settings        |
| Profile       | User            |

---

# Document Icons

| Type     | Icon     |
|----------|----------|
| PDF      | FileText |
| Upload   | Upload   |
| Download | Download |
| Delete   | Trash2   |
| Rename   | Pencil   |
| Search   | Search   |

---

# AI Icons

| Action      | Icon             |
|-------------|------------------|
| Assistant   | Bot              |
| AI Response | Sparkles         |
| Citation    | Quote            |
| Processing  | LoaderCircle     |
| Thinking    | Brain *(Future)* |

---

# Workspace Icons

| Action               | Icon      |
|----------------------|-----------|
| Workspace            | Building2 |
| Members *(Future)*   | Users     |
| Storage              | HardDrive |
| Analytics *(Future)* | BarChart3 |

---

# Common Action Icons

| Action   | Icon              |
|----------|-------------------|
| Add      | Plus              |
| Edit     | Pencil            |
| Delete   | Trash2            |
| Save     | Save              |
| Close    | X                 |
| Back     | ArrowLeft         |
| Forward  | ArrowRight        |
| Refresh  | RefreshCw         |
| Filter   | SlidersHorizontal |
| Sort     | ArrowUpDown       |

---

# Status Icons

Success

```
CircleCheck
```

Warning

```
TriangleAlert
```

Error

```
CircleX
```

Information

```
Info
```

Loading

```
LoaderCircle
```

---

# Empty State Icons

Dashboard

```
FolderOpen
```

Documents

```
FileText
```

Chat

```
Bot
```

Conversations

```
MessageSquare
```

Search

```
SearchX
```

---

# Button Icons

Small

```
16px
```

Medium

```
20px
```

Large

```
20px
```

Gap Between Icon and Label

```
8px
```

Example

```
[ Upload ]  Upload PDF
```

---

# Input Icons

Leading Icon

```
16px
```

Trailing Icon

```
16px
```

Padding

```
12px
```

Example

```
🔍 Search documents...
```

---

# Sidebar Icons

Size

```
20px
```

Gap

```
12px
```

Alignment

Vertical Center

---

# Table Icons

Action Column

```
16px
```

Status Icons

```
16px
```

Never exceed 20px inside tables.

---

# Loading Icons

Use

```
LoaderCircle
```

Animation

```
Continuous Rotation
```

Duration

```
1 second
```

Linear

---

# Accessibility

Requirements

- Every interactive icon must include an accessible label.
- Decorative icons should use `aria-hidden="true"`.
- Icon-only buttons require `aria-label`.
- Icons should never be the sole indicator of meaning.

Example

❌ Red Trash Icon only

✅ Trash Icon + "Delete"

---

# Usage Rules

Always

- Use Lucide icons only
- Keep icon sizes consistent
- Pair icons with text where appropriate
- Use semantic icons

Never

- Mix multiple icon libraries
- Stretch icons
- Rotate icons unnecessarily
- Use icons as decoration

---

# Future Considerations

Future versions may introduce icons for:

- AI Agents
- GitHub Integration
- Google Drive
- Notion
- Teams
- Notifications
- Billing
- Marketplace

These additions should continue using the Lucide React library to maintain consistency.

---

# Summary

The iconography system provides a consistent visual language across KnowledgeOS.

By using a single icon library, semantic icon selection, and standardized sizing, the interface remains clean, recognizable, and easy to navigate.