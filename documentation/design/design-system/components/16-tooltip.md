# 16-tooltip.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Tooltip component provides brief contextual information when a user hovers over or focuses on an element.

Tooltips clarify icons, actions, or abbreviated content without permanently occupying screen space.

---

# Design Goals

The Tooltip should be:

- Lightweight
- Informative
- Fast
- Accessible
- Non-disruptive

Tooltips should assist users without interrupting their workflow.

---

# Usage Guidelines

Use Tooltips for:

- Icon Buttons
- Navigation Items
- Truncated Text
- Disabled Actions (with explanation)
- Keyboard Shortcuts
- AI Action Icons

Do not use tooltips for essential information.

Important information should always remain visible.

---

# Variants

KnowledgeOS defines three tooltip variants.

## Default

Standard informational tooltip.

---

## Rich

Supports a title and description.

Used sparingly.

---

## Shortcut

Displays an action with its keyboard shortcut.

Example

```
Search

Ctrl + K
```

---

# Layout

Default

```
┌────────────────────┐
│ Upload Document    │
└────────────────────┘
```

Rich

```
┌────────────────────────────┐
│ AI Chat                    │
│ Ask questions about your   │
│ uploaded documents.        │
└────────────────────────────┘
```

---

# Sizes

Small

```
Max Width

180px
```

---

Medium (Default)

```
240px
```

---

Large

```
320px
```

Used only for Rich Tooltips.

---

# Typography

Title

```
13px

Medium
```

Description

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
neutral.900
```

Text

```
white
```

Border

None

Shadow

```
shadow.md
```

---

# Border Radius

Uses

```
radius.md
```

---

# Padding

Horizontal

```
12px
```

Vertical

```
8px
```

---

# Placement

Supported Positions

```
Top

Bottom

Left

Right
```

Preferred

```
Top
```

Automatically reposition when insufficient space exists.

---

# Arrow

Optional.

Size

```
8px
```

Matches tooltip background.

---

# States

Supports

```
Hidden

Visible
```

Tooltips never receive keyboard focus.

---

# Trigger

Desktop

- Mouse Hover
- Keyboard Focus

Mobile

- Long Press (optional)

---

# Delay

Show Delay

```
300ms
```

Hide Delay

```
100ms
```

Prevent accidental flickering.

---

# Width

Minimum

```
80px
```

Maximum

```
320px
```

Content wraps automatically.

---

# Accessibility

Requirements

- Display on keyboard focus
- Proper `role="tooltip"`
- Associated using `aria-describedby`
- Hidden from screen readers when not visible

---

# Motion

Appearance

```
Fade In

+

Scale

98% → 100%
```

Duration

```
150ms
```

Disappearance

```
Fade Out
```

Duration

```
100ms
```

---

# Best Practices

✅ Keep text concise

✅ Explain icon-only actions

✅ Display shortcuts where helpful

Examples

```
Upload Document
```

```
Delete Conversation
```

```
Rename Workspace
```

---

# Anti-Patterns

Do NOT

❌ Place important instructions only inside tooltips

❌ Write long paragraphs

❌ Require hovering to complete a workflow

❌ Show multiple tooltips simultaneously

---

# Component API

Properties

```
Variant

Default

Rich

Shortcut
```

```
Placement

Top

Bottom

Left

Right
```

```
Content

Required
```

```
Open Delay

Milliseconds
```

```
Disabled

Boolean
```

---

# Future Considerations

Future versions may support

- Interactive tooltips
- AI-generated hints
- Markdown support
- Context-aware onboarding
- Animated illustrations

These enhancements should extend the existing Tooltip component while maintaining its lightweight behavior.

---

# Summary

The Tooltip component provides concise contextual guidance for icons, controls, and abbreviated content throughout KnowledgeOS.

Its subtle behavior and accessibility support improve discoverability while keeping the interface clean and uncluttered.