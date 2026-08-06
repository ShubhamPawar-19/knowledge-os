# 10-alert.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Alert component communicates important information that requires the user's attention.

Alerts provide contextual feedback without interrupting the user's workflow.

Unlike dialogs, alerts do not block user interaction.

---

# Design Goals

The Alert should be:

- Noticeable
- Informative
- Non-disruptive
- Accessible
- Consistent

Alerts should clearly communicate the situation and, when appropriate, guide users toward the next action.

---

# Usage Guidelines

Use Alerts for:

- Upload failures
- Processing warnings
- API errors
- Workspace notices
- Maintenance announcements
- Security messages

Do not use Alerts for temporary success messages.

Use Toasts instead.

---

# Variants

KnowledgeOS defines four alert variants.

## Information

Used for general information.

Example

```
Your documents are currently being processed.
```

---

## Success

Used for completed actions.

Example

```
Document uploaded successfully.
```

---

## Warning

Used for situations requiring user awareness.

Example

```
Storage usage is above 90%.
```

---

## Error

Used when an action fails.

Example

```
Embedding generation failed.
```

---

# Layout

```
┌──────────────────────────────────────────────┐
│ ℹ Title                                      │
│                                              │
│ Supporting description                       │
│                                              │
│               Optional Action                │
└──────────────────────────────────────────────┘
```

---

# Structure

An Alert may contain:

- Icon
- Title
- Description
- Action Button
- Dismiss Button

---

# Sizes

## Compact

Used inside cards.

Padding

```
12px
```

---

## Default

Used throughout the application.

Padding

```
16px
```

---

## Large

Used for page-level notifications.

Padding

```
24px
```

---

# Typography

Title

```
16px

Semibold
```

Description

```
14px

Regular
```

Action

```
14px

Medium
```

---

# Border Radius

Uses

```
radius.lg
```

---

# Colors

## Information

Background

```
info.50
```

Border

```
info.500
```

Text

```
info.700
```

---

## Success

Background

```
success.50
```

Border

```
success.500
```

Text

```
success.700
```

---

## Warning

Background

```
warning.50
```

Border

```
warning.500
```

Text

```
warning.700
```

---

## Error

Background

```
error.50
```

Border

```
error.500
```

Text

```
error.700
```

---

# Icons

Uses Lucide React.

| Variant | Icon |
|----------|------|
| Info | Info |
| Success | CircleCheck |
| Warning | TriangleAlert |
| Error | CircleX |

Size

```
20px
```

---

# Actions

Optional.

Examples

```
Retry

View Details

Upgrade Plan

Refresh
```

Only one primary action should appear inside an alert.

---

# Dismissible

Alerts may optionally include a close button.

Uses

```
X
```

Dismissing an alert should never remove critical information permanently.

---

# States

Supports

```
Default

Dismissible

Actionable

Disabled
```

---

# Placement

Alerts may appear

- At the top of a page
- Inside cards
- Inside forms
- Below navigation

Avoid stacking multiple alerts.

---

# Responsive Behaviour

Desktop

Full width of parent container.

Tablet

No changes.

Mobile

Alerts expand to available width.

Buttons wrap below the content if necessary.

---

# Accessibility

Requirements

- Use appropriate ARIA roles (`alert` or `status`)
- Icons are decorative only
- Alert text must remain readable
- Keyboard accessible dismiss button
- Color is never the only indicator

---

# Motion

Appearance

```
Fade In

+

Slide Down

8px
```

Duration

```
200ms
```

Dismiss

```
Fade Out
```

Duration

```
150ms
```

---

# Best Practices

✅ Keep titles concise

✅ Clearly explain the issue

✅ Provide an action when appropriate

Examples

```
Upload Failed

Retry Upload
```

```
Storage Almost Full

Upgrade Plan
```

---

# Anti-Patterns

Do NOT

❌ Display multiple alerts for the same issue

❌ Use alerts for confirmations

❌ Hide important errors

❌ Overuse warning alerts

---

# Component API

Properties

```
Variant

Info

Success

Warning

Error
```

```
Title

Required
```

```
Description

Optional
```

```
Action

Optional
```

```
Dismissible

Boolean
```

```
Icon

Optional
```

---

# Future Considerations

Future versions may support

- Persistent alerts
- Expandable alerts
- AI-generated recommendations
- Workspace-wide announcements
- Collaborative notifications

These enhancements should extend the existing Alert component while maintaining its simple and informative structure.

---

# Summary

The Alert component provides clear, contextual communication for important application events.

Its semantic variants, consistent layout, and optional actions help users understand system feedback without interrupting their workflow.