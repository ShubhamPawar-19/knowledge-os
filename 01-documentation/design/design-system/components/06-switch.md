# 06-switch.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Switch component allows users to enable or disable a single setting instantly.

Unlike a Checkbox, a Switch immediately changes the application state without requiring an additional confirmation.

---

# Design Goals

The Switch should be:

- Clear
- Immediate
- Accessible
- Consistent
- Touch-friendly

Users should instantly understand whether a setting is enabled or disabled.

---

# Usage Guidelines

Use Switch for:

- Dark Mode (Future)
- Email Notifications
- Auto Save
- AI Features
- Workspace Preferences
- Feature Flags

Do not use Switches for selecting multiple options.

Use Checkbox instead.

---

# Variants

KnowledgeOS defines three variants.

## Default

Standard interactive switch.

---

## Disabled

Displayed but cannot be modified.

---

## Loading

Used while the setting is being updated.

Interaction is disabled until completion.

---

# Layout

```
Enable Notifications

                     ○──────

Helper Text
```

Enabled

```
Enable Notifications

              ──────●
```

The label is positioned on the left.

The switch is positioned on the right.

---

# Size

Track

```
40px × 24px
```

Thumb

```
20px × 20px
```

Touch Target

```
44px × 44px
```

---

# Typography

Label

```
Inter

14px

Medium
```

Helper Text

```
12px

Regular
```

---

# Colors

Off

Track

```
neutral.300
```

Thumb

```
surface.primary
```

---

On

Track

```
color.primary.600
```

Thumb

```
surface.primary
```

---

Disabled

Track

```
neutral.200
```

Thumb

```
neutral.100
```

---

Loading

Track remains unchanged.

Thumb replaced with

```
LoaderCircle
```

---

# States

Supports

```
Off

On

Hover

Focus

Disabled

Loading
```

---

## Hover

Slight border emphasis.

No scaling.

---

## Focus

Visible focus ring.

Uses

```
focus.primary
```

---

## On

Thumb slides to the right.

Track changes to

```
color.primary.600
```

---

## Off

Thumb slides to the left.

Track changes to

```
neutral.300
```

---

## Disabled

Interaction disabled.

Opacity reduced.

---

## Loading

Interaction disabled.

Loading spinner shown inside the thumb.

---

# Labels

Every switch requires a visible label.

Example

```
Enable AI Responses
```

Avoid labels such as

```
On

Off
```

The label should describe the feature.

---

# Helper Text

Optional.

Example

```
Automatically summarize uploaded documents.
```

---

# Responsive Behaviour

Desktop

Standard size.

Tablet

No changes.

Mobile

Maintain minimum

```
44px
```

touch target.

---

# Accessibility

Requirements

- Keyboard accessible
- Space toggles state
- Visible focus ring
- Associated label
- Screen-reader support
- Proper `role="switch"`
- Announces checked state

---

# Motion

Thumb

```
Slide

150ms
```

Track Color

```
150ms
```

Spinner

```
1 second

Linear

Infinite
```

---

# Best Practices

✅ Use descriptive labels

✅ Apply changes immediately

✅ Use helper text when needed

Examples

```
Enable Notifications

Auto Save

Use Streaming Responses
```

---

# Anti-Patterns

Do NOT

❌ Use Switches inside data tables

❌ Require confirmation after every toggle

❌ Hide labels

❌ Use Switches for multiple selections

---

# Component API

Properties

```
State

On

Off

Loading

Disabled
```

```
Label

Required
```

```
Helper Text

Optional
```

```
Default Checked

Boolean
```

```
Disabled

Boolean
```

```
Required

Boolean
```

```
On Change

Callback
```

---

# Future Considerations

Future versions may support

- Animated icons
- Confirmation toggles
- AI-powered recommendations
- Feature rollout indicators
- Workspace-level inheritance

These enhancements should extend the existing component while preserving its interaction model.

---

# Summary

The Switch component provides a clear and accessible way to instantly enable or disable application settings.

Its immediate feedback, consistent behavior, and accessibility make it the preferred control for binary configuration options throughout KnowledgeOS.