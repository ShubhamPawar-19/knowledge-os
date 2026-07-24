# 18-tabs.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Tabs component allows users to switch between related sections of content without leaving the current page.

Tabs organize information into logical groups while maintaining context.

---

# Design Goals

The Tabs component should be:

- Simple
- Discoverable
- Consistent
- Accessible
- Fast

Users should immediately understand which section is active.

---

# Usage Guidelines

Use Tabs for:

- Settings
- Document Details
- Workspace Management
- AI Chat Panels
- Analytics (Future)
- User Profile

Do not use Tabs for primary application navigation.

Use the Sidebar instead.

---

# Variants

KnowledgeOS defines three tab variants.

## Underline

Default variant.

Used across the application.

---

## Pills

Used inside cards and dialogs.

---

## Segmented

Used for compact switching between closely related views.

---

# Layout

```
Overview

Documents

Conversations

Settings
```

Active

```
Overview
──────────
```

---

# Sizes

## Small

Height

```
32px
```

---

## Medium (Default)

Height

```
40px
```

---

## Large

Height

```
48px
```

---

# Typography

Font

```
Inter
```

Weight

```
Medium
```

Size

```
14px
```

Large

```
16px
```

---

# Colors

Active Text

```
text.primary
```

Inactive Text

```
text.secondary
```

Active Indicator

```
color.primary.600
```

Hover

```
text.primary
```

---

# Active Indicator

Underline Variant

```
2px
```

Full width of tab label.

Pills

```
surface.secondary
```

Segmented

```
color.primary.600
```

---

# States

Supports

```
Default

Hover

Active

Focused

Disabled
```

---

## Hover

Text becomes

```
text.primary
```

---

## Active

Underline visible.

Content displayed.

---

## Disabled

Interaction disabled.

Reduced opacity.

---

# Icons

Optional.

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
8px
```

---

# Badges

Optional.

Example

```
Documents (24)

Notifications (3)
```

Badge uses the standard Badge component.

---

# Overflow

When tabs exceed available width

Desktop

```
Horizontal Scroll
```

Mobile

```
Scrollable Tabs
```

Do not wrap tabs onto multiple lines.

---

# Content Area

Only one tab panel is visible at a time.

Switching tabs should preserve scroll position whenever possible.

---

# Responsive Behaviour

Desktop

Inline tabs.

Tablet

Horizontal scrolling if required.

Mobile

Scrollable tabs with touch gestures.

---

# Accessibility

Requirements

- Keyboard navigation
- Arrow key support
- Home/End navigation
- Proper `role="tablist"`
- Proper `role="tab"`
- Proper `role="tabpanel"`
- Screen-reader announcements

---

# Motion

Indicator

```
Slide

150ms
```

Content

```
Fade

150ms
```

Avoid unnecessary page transitions.

---

# Best Practices

✅ Keep labels concise

✅ Limit the number of tabs

✅ Group related content

Examples

```
Overview

Documents

Settings
```

---

# Anti-Patterns

Do NOT

❌ Use more than 7 tabs

❌ Nest tab groups

❌ Use tabs for unrelated content

❌ Hide important actions inside inactive tabs

---

# Component API

Properties

```
Variant

Underline

Pills

Segmented
```

```
Items

Required
```

```
Icons

Optional
```

```
Badges

Optional
```

```
Disabled

Supported
```

```
Default Value

Optional
```

---

# Future Considerations

Future versions may support

- Closable tabs
- Drag-and-drop tab reordering
- Persistent tab state
- AI-generated tab suggestions
- Lazy-loaded tab panels

These enhancements should extend the existing Tabs component while maintaining its familiar interaction model.

---

# Summary

The Tabs component organizes related content into easily accessible sections while preserving context.

Its clean interaction model, accessibility, and responsive behavior make it ideal for settings, dashboards, and detail views throughout KnowledgeOS.