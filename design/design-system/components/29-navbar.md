# 29-navbar.md

**Version:** 1.0
**Status:** Approved
**Last Updated:** July 2026

---

# Purpose

The Navbar provides global actions and workspace context across KnowledgeOS.

Unlike the Sidebar, which handles navigation, the Navbar contains search, user actions, notifications, and workspace controls.

---

# Design Goals

The Navbar should be

- Minimal
- Consistent
- Always visible
- Workspace-aware
- Responsive

---

# Usage Guidelines

Contains

- Workspace Name
- Global Search
- Command Palette
- Theme Toggle
- Notifications (Future)
- User Menu

---

# Layout

```
────────────────────────────────────────────────────────────

KnowledgeOS

Search...

⌘K

☀

🔔

👤

────────────────────────────────────────────────────────────
```

---

# Height

```
64px
```

---

# Structure

Left

- Workspace Name

Center

- Search

Right

- Command Palette Shortcut
- Theme Toggle
- Notifications
- User Avatar

---

# Search

Uses

```
Search Component
```

Placeholder

```
Search documents, conversations...
```

---

# Theme Toggle

Supports

```
Light

Dark

System
```

---

# User Menu

Contains

```
Profile

Workspace Settings

Billing

Logout
```

---

# Colors

Background

```
surface.primary
```

Border Bottom

```
border.primary
```

---

# Responsive Behaviour

Desktop

Full navbar.

Tablet

Reduced spacing.

Mobile

Hide workspace title.

Search becomes icon.

---

# Accessibility

- Keyboard accessible
- Landmark `<header>`
- Search labeled
- Visible focus states

---

# Motion

Hover transitions

```
150ms
```

---

# Best Practices

✅ Keep actions minimal

✅ Always show workspace context

✅ Keep search easily accessible

---

# Anti-Patterns

❌ Too many actions

❌ Hide search

❌ Multiple navigation rows

---

# Summary

The Navbar provides global controls, search, and user actions while keeping the application focused and uncluttered.