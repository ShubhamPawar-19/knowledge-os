# 30-dialog.md

**Version:** 1.0
**Status:** Approved
**Last Updated:** July 2026

---

# Purpose

The Dialog component requests confirmation before performing destructive or irreversible actions.

Unlike Modals, Dialogs contain only a short confirmation workflow.

---

# Design Goals

The Dialog should be

- Clear
- Safe
- Focused
- Accessible
- Difficult to trigger accidentally

---

# Usage Guidelines

Use Dialogs for

- Delete Document
- Delete Conversation
- Leave Workspace
- Remove Member
- Reset Settings

Do not use Dialogs for forms.

---

# Layout

```
────────────────────────────

Delete Document?

This action cannot be undone.

Cancel        Delete

────────────────────────────
```

---

# Structure

Contains

- Icon (Optional)
- Title
- Description
- Secondary Action
- Primary Action

---

# Sizes

Small

```
400px
```

Medium

```
500px
```

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
```

---

# Colors

Background

```
surface.primary
```

Danger Action

```
error.600
```

Border

```
border.primary
```

---

# Button Order

Secondary

```
Cancel
```

Primary

```
Delete
```

Danger button appears on the right.

---

# States

Supports

```
Default

Loading

Error
```

---

# Keyboard

Supports

```
Enter

Escape

Tab
```

Escape closes the dialog unless the action is mandatory.

---

# Accessibility

- `role="alertdialog"`
- Focus trapped
- Initial focus on Cancel
- Keyboard navigation
- Screen-reader support

---

# Motion

Open

```
Fade + Scale

200ms
```

Close

```
Fade Out

150ms
```

---

# Best Practices

✅ Explain consequences

✅ Use clear action labels

✅ Highlight destructive actions

---

# Anti-Patterns

❌ Long paragraphs

❌ More than two actions

❌ Ambiguous buttons like "Yes"

---

# Examples

Delete Document

```
Delete "Architecture.pdf"?

This action permanently removes the document.

Cancel     Delete
```

Leave Workspace

```
Leave Workspace?

You will lose access to all documents.

Cancel     Leave
```

---

# Summary

The Dialog component protects users from accidental destructive actions by providing a focused confirmation step with clear messaging and accessible interactions.