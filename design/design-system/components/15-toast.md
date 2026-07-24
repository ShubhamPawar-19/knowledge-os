# 15-toast.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Toast component provides lightweight, temporary feedback after a user action.

Unlike Alerts or Modals, Toasts do not interrupt the user's workflow and automatically disappear after a short duration.

---

# Design Goals

The Toast should be:

- Informative
- Non-intrusive
- Consistent
- Accessible
- Fast

Users should receive immediate feedback without losing focus.

---

# Usage Guidelines

Use Toasts for:

- Document Uploaded
- Settings Saved
- Workspace Created
- Conversation Renamed
- Clipboard Copied
- Retry Successful

Do not use Toasts for critical errors that require user action.

Use Alerts or Modals instead.

---

# Variants

KnowledgeOS defines four toast variants.

## Success

Used after successful operations.

Example

```
Document uploaded successfully.
```

---

## Information

Used for informational feedback.

Example

```
Processing has started.
```

---

## Warning

Used for recoverable situations.

Example

```
Storage is almost full.
```

---

## Error

Used for failed operations.

Example

```
Upload failed.
```

---

# Layout

```
┌────────────────────────────────────────────┐
│ ✓ Title                              ✕     │
│ Supporting description                     │
└────────────────────────────────────────────┘
```

---

# Structure

Each Toast contains

- Icon
- Title
- Description (Optional)
- Close Button

Optional

- Action Button

---

# Sizes

Default Width

```
360px
```

Minimum Width

```
280px
```

Maximum Width

```
420px
```

---

# Typography

Title

```
14px

Semibold
```

Description

```
13px

Regular
```

---

# Colors

## Success

Background

```
success.50
```

Border

```
success.500
```

Icon

```
success.700
```

---

## Information

Background

```
info.50
```

Border

```
info.500
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

---

# Icons

Uses Lucide React.

| Variant | Icon |
|----------|------|
| Success | CircleCheck |
| Info | Info |
| Warning | TriangleAlert |
| Error | CircleX |

Icon Size

```
20px
```

---

# Placement

Desktop

```
Bottom Right
```

Mobile

```
Bottom Center
```

Avoid displaying more than three visible toasts simultaneously.

---

# Duration

Default

```
4 seconds
```

Success

```
3 seconds
```

Error

```
6 seconds
```

Persistent

Manual dismissal only.

---

# Actions

Optional.

Examples

```
Undo

Retry

View
```

Only one action button is allowed.

---

# Dismiss

Users may dismiss using

- Close Button
- Swipe (Mobile)
- Timeout

---

# States

Supports

```
Visible

Paused

Dismissed
```

Hovering pauses the dismissal timer.

---

# Queue Behavior

Maximum visible

```
3
```

Additional toasts are queued.

Oldest toast disappears first.

---

# Responsive Behaviour

Desktop

Fixed width.

Tablet

Same placement.

Mobile

Nearly full width with side margins.

---

# Accessibility

Requirements

- Use appropriate `role="status"` or `role="alert"`
- Screen readers announce new toasts
- Keyboard accessible close button
- Sufficient color contrast

---

# Motion

Entrance

```
Fade In

+

Slide Up

16px
```

Duration

```
200ms
```

Exit

```
Fade Out

+

Slide Down

8px
```

Duration

```
150ms
```

---

# Best Practices

✅ Keep messages short

✅ Use action buttons sparingly

✅ Display immediately after user actions

Examples

```
Workspace created successfully.
```

```
Settings saved.
```

```
Conversation renamed.
```

---

# Anti-Patterns

Do NOT

❌ Show long paragraphs

❌ Stack excessive toasts

❌ Use toasts for confirmations requiring decisions

❌ Display duplicate messages repeatedly

---

# Component API

Properties

```
Variant

Success

Info

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
Duration

Milliseconds
```

```
Dismissible

Boolean
```

```
Persistent

Boolean
```

---

# Future Considerations

Future versions may support

- Progress toasts
- File upload progress
- AI streaming notifications
- Workspace-wide notifications
- Interactive toast actions

These enhancements should extend the existing Toast component while maintaining its lightweight behavior.

---

# Summary

The Toast component delivers immediate, non-blocking feedback for user actions throughout KnowledgeOS.

Its consistent positioning, automatic dismissal, and semantic variants ensure users remain informed without interrupting their workflow.