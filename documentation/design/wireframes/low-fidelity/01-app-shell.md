# 01-app-shell.md

**Version:** 1.0  
**Status:** Draft  
**Last Updated:** July 2026

---

# Purpose

The App Shell is the primary layout used across all authenticated pages of KnowledgeOS.

It provides a consistent structure containing global navigation, workspace context, and the main content area.

Every authenticated screen in Version 1 uses this layout.

---

# Entry Points

- Login
- Register
- Workspace Selection

---

# Exit Points

- Dashboard
- Documents
- AI Chat
- Conversations
- Settings
- Logout

---

# Layout

```
┌────────────────────────────────────────────────────────────────────────────────────────────┐
│ LOGO                     Workspace ▼          Search              Avatar ▼                  │
├────────────────┬───────────────────────────────────────────────────────────────────────────┤
│                │                                                                           │
│ Dashboard      │                                                                           │
│                │                                                                           │
│ Documents      │                                                                           │
│                │                                                                           │
│ AI Chat        │                                                                           │
│                │                                                                           │
│ Conversations  │                    PAGE CONTENT                                           │
│                │                                                                           │
│ Settings       │                                                                           │
│                │                                                                           │
│────────────────│                                                                           │
│                │                                                                           │
│ Storage        │                                                                           │
│ 3.2 / 10 GB    │                                                                           │
│                │                                                                           │
└────────────────┴───────────────────────────────────────────────────────────────────────────┘
```

---

# Layout Sections

## Top Navigation

Contains global application controls.

Components:

- KnowledgeOS Logo
- Workspace Switcher
- Global Search
- User Menu

The top navigation remains visible on every authenticated page.

---

## Sidebar

Primary application navigation.

Navigation Items:

- Dashboard
- Documents
- AI Chat
- Conversations
- Settings

Bottom Section:

- Storage Usage
- Profile

The sidebar remains fixed.

---

## Main Content

Displays the currently selected page.

Examples:

- Dashboard
- Documents
- AI Chat
- Settings

Only this section changes during navigation.

---

# Components

Global Components:

- App Logo
- Workspace Switcher
- Search Input
- User Avatar
- Sidebar Navigation
- Navigation Item
- Storage Indicator
- Page Container

---

# User Interactions

Users can:

- Switch workspace
- Navigate between pages
- Search documents
- Open profile menu
- Logout

---

# States

## Default

Workspace loaded successfully.

---

## Loading

Display skeleton UI while loading workspace data.

---

## Empty

No workspace available.

Display workspace creation screen.

---

## Error

Workspace unavailable.

Display retry action.

---

# Responsive Behaviour

## Desktop (≥1280px)

- Expanded sidebar
- Full top navigation
- Full page content

---

## Tablet (768px–1279px)

- Collapsed sidebar
- Icons only
- Full top navigation

---

## Mobile (<768px)

- Sidebar becomes drawer
- Top navigation remains visible
- Single-column layout

---

# Accessibility

Requirements:

- Keyboard-accessible navigation
- Visible focus indicators
- Semantic navigation landmarks
- ARIA labels for navigation controls
- Screen reader support

---

# Design Notes

- Sidebar remains persistent.
- Top navigation never changes.
- Only the page content updates.
- Navigation depth remains shallow.
- Every page follows this shell.

---

# Future Considerations

Future versions may extend the App Shell with:

- Notifications
- Team Switcher
- Billing Indicator
- AI Agent Status
- Workspace Activity Feed

These additions should integrate into the existing layout without changing the overall structure.

---

# Summary

The App Shell establishes the visual and navigational foundation of KnowledgeOS.

It ensures every authenticated screen provides a consistent, workspace-first experience while keeping the user's focus on documents and AI interactions.