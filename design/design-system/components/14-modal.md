# 14-modal.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Modal component is used to display focused tasks or important information without navigating away from the current page.

Modals temporarily interrupt the workflow to help users complete a single action.

---

# Design Goals

The Modal should be:

- Focused
- Simple
- Accessible
- Non-distracting
- Easy to dismiss

A modal should never feel like navigating to another page.

---

# Usage Guidelines

Use Modals for:

- Upload Document
- Delete Confirmation
- Rename Document
- Workspace Settings
- Invite Members (Future)
- API Key Creation (Future)

Do not use modals for large workflows.

Use dedicated pages instead.

---

# Structure

```
────────────────────────────────────────

Title                          X

----------------------------------------

Content

----------------------------------------

Cancel          Primary Action

────────────────────────────────────────
```

Every modal contains:

- Header
- Body
- Footer

---

# Sizes

## Small

```
400px
```

Examples

- Delete Confirmation
- Rename Document

---

## Medium (Default)

```
600px
```

Examples

- Upload PDF
- Workspace Settings

---

## Large

```
800px
```

Examples

- Future AI Settings
- Invite Members

---

## Full Screen

Mobile only.

---

# Layout

Header

Contains

- Title
- Description (Optional)
- Close Button

---

Body

Contains

- Forms
- Information
- Lists
- Upload Area

Scrollable if necessary.

---

Footer

Contains

- Secondary Button
- Primary Button

Primary action appears on the right.

---

# Typography

Title

```
20px

Semibold
```

Description

```
14px

Regular
```

Body

```
16px

Regular
```

---

# Colors

Background

```
surface.primary
```

Overlay

```
rgba(0,0,0,0.5)
```

Border

```
border.primary
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

Modal should appear above all application content.

---

# Close Behaviour

Users may close the modal using

- Close Button
- Escape Key
- Clicking Outside (optional)
- Cancel Button

Critical actions may disable outside click.

---

# States

Supports

```
Default

Loading

Success

Error
```

---

## Loading

Primary button shows loading spinner.

Interaction disabled while submitting.

---

## Success

Close automatically only if the action completes instantly.

Otherwise remain open and display confirmation.

---

## Error

Display inline Alert above the footer.

Keep entered form values.

---

# Scrolling

Header and Footer remain fixed.

Only the Body scrolls.

---

# Upload Modal Example

```
Upload Document

Drag & Drop PDF

or

Browse Files

--------------------------------

Cancel          Upload
```

---

# Delete Confirmation Example

```
Delete Document?

This action cannot be undone.

Cancel        Delete
```

---

# Responsive Behaviour

Desktop

Centered.

Tablet

Centered.

Mobile

Full screen.

---

# Accessibility

Requirements

- Trap keyboard focus
- Escape closes modal
- Initial focus on first interactive element
- Restore focus after closing
- Proper `role="dialog"`
- Proper `aria-modal="true"`

---

# Motion

Open

```
Fade In

+

Scale 95% → 100%
```

Duration

```
200ms
```

Close

```
Fade Out

+

Scale Down
```

Duration

```
150ms
```

---

# Best Practices

✅ Keep one task per modal

✅ Use clear titles

✅ Provide both Cancel and Confirm actions

✅ Preserve user input after validation errors

---

# Anti-Patterns

Do NOT

❌ Nest modals

❌ Display long multi-step workflows

❌ Open multiple modals simultaneously

❌ Hide the close button unnecessarily

---

# Component API

Properties

```
Size

Small

Medium

Large

Full Screen
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
Footer

Optional
```

```
Closable

Boolean
```

```
Loading

Boolean
```

```
Open

Boolean
```

---

# Future Considerations

Future versions may support

- Multi-step modals
- Side panels
- AI-assisted forms
- Full-screen editors
- Collaborative dialogs

These enhancements should extend the existing Modal component while maintaining its focused interaction model.

---

# Summary

The Modal component provides a focused environment for completing short, high-priority tasks without leaving the current page. Its consistent structure, accessibility, and responsive behavior make it suitable for forms, confirmations, and other contextual interactions throughout KnowledgeOS.