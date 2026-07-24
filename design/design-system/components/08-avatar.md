# 08-avatar.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Avatar component visually represents a user, workspace member, or AI assistant.

It provides quick identity recognition across the application while maintaining a clean and consistent appearance.

---

# Design Goals

The Avatar should be:

- Recognizable
- Consistent
- Minimal
- Accessible
- Lightweight

Avatars should support recognition without dominating the interface.

---

# Usage Guidelines

Use Avatar for:

- User Profile
- Workspace Members (Future)
- AI Assistant
- Activity Feed (Future)
- Comments (Future)
- Chat Messages

Do not use avatars for documents or files.

---

# Variants

KnowledgeOS defines four avatar variants.

## Image

Displays the user's profile picture.

Preferred whenever available.

---

## Initials

Displays the user's initials.

Example

```
SP
```

Used when no profile image exists.

---

## AI Assistant

Represents the KnowledgeOS AI Assistant.

Uses the application logo or Bot icon.

---

## Placeholder

Used when no user information is available.

Displays a generic user icon.

---

# Sizes

## Extra Small

```
24px
```

Used in tables.

---

## Small

```
32px
```

Used in navigation.

---

## Medium (Default)

```
40px
```

Used across the application.

---

## Large

```
48px
```

Used in settings pages.

---

## Extra Large

```
64px
```

Used on profile pages.

---

# Layout

Image Variant

```
○
```

Initial Variant

```
SP
```

AI Variant

```
🤖
```

Always displayed inside a circular container.

---

# Typography

Initials

Font

```
Inter
```

Weight

```
Semibold
```

Size

Depends on avatar size.

---

# Colors

Background

```
surface.secondary
```

Border

```
border.primary
```

Text

```
text.primary
```

AI Avatar

Background

```
color.primary.600
```

Text/Icon

```
text.inverse
```

---

# Border Radius

Uses

```
radius.full
```

Avatars are always circular.

---

# Border

Default

```
1px solid border.primary
```

Optional for larger profile views.

---

# Fallback Logic

Display priority

```
Profile Image

↓

Initials

↓

Placeholder Icon
```

The component should never appear empty.

---

# Status Indicator (Future)

Future versions may display:

```
🟢 Online

🟡 Busy

⚫ Offline
```

Status appears in the bottom-right corner.

Not included in Version 1.

---

# States

Supports

```
Default

Loading

Error

Disabled
```

---

## Loading

Display Skeleton Avatar.

---

## Error

Fallback to Initials.

---

## Disabled

Reduce opacity.

---

# Responsive Behaviour

Desktop

Standard sizing.

Tablet

No changes.

Mobile

Use smaller variants where space is limited.

---

# Accessibility

Requirements

- Profile images require descriptive alt text.
- Initial avatars should expose the user's full name to screen readers.
- Decorative avatars use `aria-hidden="true"`.

---

# Motion

Image fade-in

```
150ms
```

Skeleton transition

```
200ms
```

No scaling or bounce effects.

---

# Best Practices

✅ Prefer profile images.

✅ Fall back to initials.

✅ Keep avatars circular.

✅ Use consistent sizing.

---

# Anti-Patterns

Do NOT

❌ Stretch avatars

❌ Use square avatars

❌ Display empty placeholders

❌ Use decorative backgrounds

---

# Component API

Properties

```
Variant

Image

Initials

AI

Placeholder
```

```
Size

XS

SM

MD

LG

XL
```

```
Image URL

Optional
```

```
Initials

Optional
```

```
Alt Text

Required (Image)
```

```
Loading

Boolean
```

---

# Future Considerations

Future versions may support

- Presence indicators
- Group avatars
- Avatar stacks
- Organization logos
- Animated AI avatars

These enhancements should extend the existing Avatar component while maintaining its simple and recognizable design.

---

# Summary

The Avatar component provides a consistent visual identity for users and AI throughout KnowledgeOS.

Its fallback strategy, accessibility, and standardized sizing ensure a reliable and professional experience across all screens.