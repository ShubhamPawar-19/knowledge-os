# 28-sidebar.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Sidebar is the primary navigation component of KnowledgeOS.

It provides persistent access to the application's core areas while maintaining workspace context and supporting future scalability.

Unlike the Navbar, which contains global actions, the Sidebar is responsible for application navigation.

---

# Design Goals

The Sidebar should be

- Persistent
- Predictable
- Workspace-first
- Minimal
- Scalable

Navigation should always remain accessible regardless of the current page.

---

# Usage Guidelines

The Sidebar contains

- Logo
- Workspace Switcher (Future)
- Primary Navigation
- Secondary Navigation
- Storage Usage
- Upgrade CTA
- User Profile

---

# Navigation Structure

Primary Navigation

```
Dashboard

Documents

AI Chat

Conversations
```

Secondary Navigation

```
Settings

Help

Feedback
```

Future

```
Members

Integrations

Analytics

Billing
```

---

# Layout

```
──────────────────────────────

KnowledgeOS

──────────────────────────────

🏠 Dashboard

📄 Documents

💬 AI Chat

🕒 Conversations

──────────────────────────────

⚙ Settings

❓ Help

──────────────────────────────

Storage

12 GB / 25 GB

████████░░░░

Upgrade

──────────────────────────────

👤 John Doe

──────────────────────────────
```

---

# Width

Expanded

```
280px
```

Collapsed

```
72px
```

---

# Behavior

Desktop

Persistent.

Tablet

Persistent.

Mobile

Hidden by default.

Opened using a hamburger menu.

---

# Collapsed Mode

Collapsed Sidebar displays

- Icons only
- Tooltips on hover
- Logo icon only

Expanded on user interaction.

---

# Active Navigation

The current page should be visually highlighted.

Example

```
▌ Documents
```

or

```
Primary Background

+

Primary Text
```

Only one navigation item may be active at a time.

---

# Icons

Uses

```
Lucide React
```

Examples

```
LayoutDashboard

FileText

MessageSquare

History

Settings

CircleHelp
```

Icon Size

```
20px
```

---

# Typography

Navigation Label

```
14px

Medium
```

Section Label

```
12px

Semibold
```

Workspace Name

```
16px

Semibold
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

Active

```
primary.50
```

Active Text

```
primary.700
```

---

# Dividers

Use dividers between

- Navigation
- Settings
- Storage
- User Profile

---

# Storage Card

Displays

```
Storage Used

Progress Bar

Upgrade Button
```

Hidden for free users if storage usage is not applicable.

---

# User Section

Displays

- Avatar
- Name
- Email (Optional)
- Dropdown Menu

Clicking opens the User Menu.

---

# States

Supports

```
Expanded

Collapsed

Hover

Active

Disabled
```

---

## Hover

Background changes to

```
surface.secondary
```

---

## Active

Primary color indicator.

Bold text.

---

## Disabled

Navigation item cannot be selected.

Reduced opacity.

---

# Responsive Behaviour

Desktop

Expanded by default.

Tablet

Supports collapsing.

Mobile

Displayed as an overlay drawer.

Dismisses after navigation.

---

# Accessibility

Requirements

- Landmark `<aside>`
- Keyboard navigation
- Proper focus indicators
- Active item uses `aria-current="page"`
- Icon-only mode provides accessible labels

---

# Motion

Expand

```
Width Transition

220ms
```

Collapse

```
220ms
```

Hover

```
150ms
```

Avoid excessive animations.

---

# Best Practices

✅ Keep navigation concise

✅ Group related items

✅ Highlight only the active page

✅ Keep sidebar visible on desktop

---

# Anti-Patterns

Do NOT

❌ Add more than 8 primary navigation items

❌ Nest multiple navigation levels

❌ Hide important pages

❌ Use inconsistent icons

---

# Component API

Properties

```
Collapsed

Boolean
```

```
Navigation Items

Required
```

```
Active Item

Required
```

```
Storage Card

Optional
```

```
User Section

Required
```

```
Workspace Name

Required
```

---

# Future Considerations

Future versions may support

- Workspace Switcher
- Team Spaces
- Favorite Pages
- Recently Visited
- AI Shortcuts
- Custom Navigation
- Drag-and-Drop Navigation
- Collapsible Navigation Groups

These enhancements should extend the Sidebar while maintaining a clean and predictable navigation experience.

---

# Summary

The Sidebar serves as the primary navigation hub of KnowledgeOS.

Its persistent layout, workspace-focused structure, and responsive behavior ensure users can efficiently navigate documents, conversations, settings, and future platform features while maintaining a professional SaaS experience.