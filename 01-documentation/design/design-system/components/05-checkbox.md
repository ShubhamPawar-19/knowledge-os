# 05-checkbox.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Checkbox component allows users to select one or more independent options.

Unlike radio buttons or select menus, checkboxes support multiple simultaneous selections.

---

# Design Goals

The Checkbox should be:

- Easy to recognize
- Accessible
- Consistent
- Simple
- Touch-friendly

Users should immediately understand whether an option is selected.

---

# Usage Guidelines

Use Checkbox for:

- Accepting Terms
- Selecting Documents
- Bulk Actions
- Filter Options
- Feature Toggles (multiple)
- Notification Preferences

Do not use Checkbox for binary system settings.

Use the Switch component instead.

---

# Variants

KnowledgeOS defines three variants.

## Default

Standard selectable checkbox.

---

## Disabled

Displayed but cannot be modified.

---

## Indeterminate

Represents a partially selected group.

Example

```
☑ Select All

☑ PDF A

☐ PDF B

☑ PDF C
```

The parent checkbox displays the indeterminate state.

---

# Layout

```
☐  Enable notifications

Helper Text
```

Checkbox is always positioned to the left of the label.

---

# Size

Checkbox

```
16px × 16px
```

Touch Target

```
44px × 44px
```

The clickable area extends beyond the visible checkbox.

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

Unchecked

Background

```
surface.primary
```

Border

```
border.primary
```

Checked

Background

```
color.primary.600
```

Checkmark

```
text.inverse
```

Disabled

```
neutral.300
```

Error

```
error.500
```

---

# Border Radius

Uses

```
radius.sm
```

---

# Icons

Checked

```
Check
```

Indeterminate

```
Minus
```

Icon Size

```
12px
```

---

# States

Supports

```
Default

Hover

Focus

Checked

Unchecked

Disabled

Indeterminate

Error
```

---

## Hover

Border

```
border.secondary
```

---

## Focus

Border

```
border.focus
```

Focus Ring

```
focus.primary
```

---

## Checked

Filled with

```
color.primary.600
```

Displays check icon.

---

## Disabled

Interaction disabled.

Opacity reduced.

---

## Error

Border

```
error.500
```

Helper text

```
error.700
```

---

# Labels

Every checkbox requires a visible label.

Example

```
Remember Me
```

---

# Helper Text

Optional.

Used for clarification.

Example

```
We'll keep you signed in on this device.
```

---

# Groups

Checkboxes may be grouped.

Example

```
Notifications

☐ Email

☐ SMS

☐ Push Notifications
```

Groups should include a heading.

---

# Indeterminate State

Used only for grouped selections.

Example

```
☒ Select All
```

Represents

- Some items selected
- Not all items selected

---

# Responsive Behaviour

Desktop

Standard layout.

Tablet

No changes.

Mobile

Maintain

```
44px
```

minimum touch target.

---

# Accessibility

Requirements

- Keyboard accessible
- Space toggles selection
- Visible focus indicator
- Associated label
- Screen-reader support
- Proper ARIA checked state
- Indeterminate state announced correctly

---

# Motion

State transition

```
150ms
```

Background

Border

Checkmark fade

---

# Best Practices

✅ Keep labels concise

✅ Group related checkboxes

✅ Use "Select All" only when appropriate

---

# Anti-Patterns

Do NOT

❌ Use Checkbox for mutually exclusive choices

❌ Hide labels

❌ Use multiple nested checkbox groups

❌ Rely only on color to indicate selection

---

# Component API

Properties

```
State

Checked

Unchecked

Indeterminate

Disabled

Error
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

---

# Future Considerations

Future versions may support

- Rich checkbox descriptions
- Checkbox cards
- Animated selection indicators
- Bulk selection counters
- AI-generated filter groups

These enhancements should extend the current component while maintaining its existing interaction model.

---

# Summary

The Checkbox component provides a consistent and accessible way to select one or more independent options throughout KnowledgeOS.

Its support for grouped selection, indeterminate states, and strong accessibility ensures reliable behavior across forms, settings, and bulk actions.