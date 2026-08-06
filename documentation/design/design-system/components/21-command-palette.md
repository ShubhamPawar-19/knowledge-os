# 21-command-palette.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Command Palette provides a fast, keyboard-first interface for navigating and performing actions across KnowledgeOS.

Inspired by tools like VS Code, Linear, Notion, and Raycast, it enables power users to quickly access features without browsing menus.

---

# Design Goals

The Command Palette should be:

- Fast
- Minimal
- Search-first
- Keyboard-friendly
- Extensible

It should become the quickest way to navigate and execute actions.

---

# Usage Guidelines

Use the Command Palette for:

- Global Navigation
- Search Documents
- Search Conversations
- Create New Chat
- Upload Document
- Open Settings
- Future AI Commands

Do not use it for long-form data entry.

---

# Trigger

Keyboard Shortcut

```
Ctrl + K
```

macOS

```
⌘ + K
```

Alternative

Click

```
Search...
```

in the top navigation.

---

# Layout

```
┌──────────────────────────────────────────────┐
│ 🔍 Search...                                 │
├──────────────────────────────────────────────┤
│                                              │
│ Documents                                    │
│ 📄 AI Handbook.pdf                           │
│ 📄 Architecture.md                           │
│                                              │
│ Actions                                      │
│ ➕ Upload Document                           │
│ 💬 Start New Chat                           │
│ ⚙ Settings                                  │
│                                              │
└──────────────────────────────────────────────┘
```

---

# Structure

The Command Palette contains

- Search Input
- Search Results
- Categories
- Keyboard Shortcuts
- Empty State

---

# Categories

Default categories

```
Navigation

Documents

Conversations

Actions

Settings
```

Future versions may include

```
AI Commands

Integrations

Workspace Members
```

---

# Search

Search updates instantly while typing.

Matches

- Page Names
- Documents
- Conversations
- Commands
- Settings

Results ranked by relevance.

---

# Empty State

When no results exist

```
No matching results.

Try another keyword.
```

---

# Result Item

Each result contains

- Icon
- Title
- Category
- Optional Shortcut

Example

```
📄 AI Handbook

Documents
```

---

# Keyboard Navigation

Supported Keys

```
↑

↓

Enter

Esc

Tab
```

Behavior

- Arrow Keys move selection
- Enter executes command
- Escape closes palette
- Tab cycles focus

---

# Sizes

Width

```
640px
```

Maximum Height

```
70vh
```

Search Input Height

```
48px
```

Result Height

```
44px
```

---

# Typography

Search

```
16px

Regular
```

Result Title

```
14px

Medium
```

Category

```
12px

Regular
```

Shortcut

```
12px

Medium
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

Selected Result

```
surface.secondary
```

Text

```
text.primary
```

Secondary Text

```
text.secondary
```

---

# Border Radius

Uses

```
radius.xl
```

---

# Elevation

```
shadow.xl
```

Displayed above all application content.

---

# States

Supports

```
Closed

Open

Searching

No Results

Loading
```

---

## Loading

Display Skeleton rows.

Keep the search input interactive.

---

## Searching

Filter results in real time.

No submit button required.

---

# Responsive Behaviour

Desktop

Centered modal.

Tablet

Same layout.

Mobile

Full-screen search interface.

---

# Accessibility

Requirements

- Keyboard-first navigation
- Proper focus management
- Screen-reader announcements
- Search input labeled
- Visible active result
- Proper ARIA listbox roles

---

# Motion

Open

```
Fade In

+

Scale

96% → 100%
```

Duration

```
180ms
```

Close

```
Fade Out
```

Duration

```
120ms
```

---

# Best Practices

✅ Prioritize frequently used actions

✅ Show recent searches (future)

✅ Group similar results

✅ Keep search responsive

---

# Anti-Patterns

Do NOT

❌ Display unrelated results

❌ Require mouse interaction

❌ Hide keyboard shortcuts

❌ Overload with too many categories

---

# Component API

Properties

```
Open

Boolean
```

```
Search Query

String
```

```
Categories

Optional
```

```
Results

Required
```

```
Loading

Boolean
```

```
Empty State

Supported
```

---

# Future Considerations

Future versions may support

- AI-powered commands
- Natural language actions
- Recent commands
- Favorite commands
- Workspace-wide search
- Plugin commands

These enhancements should extend the existing Command Palette while preserving its keyboard-first interaction model.

---

# Summary

The Command Palette provides a fast and efficient way to navigate KnowledgeOS, search content, and execute actions without leaving the keyboard.

It serves as a productivity feature for power users while remaining intuitive enough for all users.