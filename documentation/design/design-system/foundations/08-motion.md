# 08-motion.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

This document defines the motion system used throughout KnowledgeOS.

Motion should improve usability by communicating state changes, reinforcing hierarchy, and providing continuity between user interactions.

Animation should never exist purely for visual decoration.

---

# Design Philosophy

KnowledgeOS follows one simple rule:

> **Motion should explain, not entertain.**

Animations should help users understand:

- What changed
- Where content came from
- What is happening
- What will happen next

If an animation does not improve usability, it should not exist.

---

# Motion Principles

Every animation should be:

- Fast
- Smooth
- Predictable
- Purposeful
- Subtle

Avoid dramatic or distracting transitions.

---

# Motion Tokens

| Token | Duration | Usage |
|--------|----------|----------------------------|
| motion.instant | 0ms | Immediate updates |
| motion.fast | 150ms | Hover effects |
| motion.normal | 250ms | Most interactions |
| motion.slow | 350ms | Dialog transitions |
| motion.page | 300ms | Page transitions |

---

# Timing Functions

Standard

```
ease-out
```

Enter

```
ease-out
```

Exit

```
ease-in
```

Continuous

```
linear
```

---

# Hover Animations

Interactive components should respond immediately.

Examples

- Buttons
- Cards
- Navigation Items
- Table Rows

Duration

```
150ms
```

Changes

- Background
- Border
- Shadow
- Color

Avoid scaling components on hover.

---

# Button Motion

Hover

- Background transition
- Border transition

Active

- Slight opacity reduction

Loading

- Spinner rotation
- Disable interaction

Duration

```
150ms
```

---

# Sidebar Navigation

When changing pages

- Active indicator transitions
- Icon color fades
- Text color transitions

Duration

```
200ms
```

---

# Dialog Motion

Opening

```
Fade In

+

Scale

98%

↓

100%
```

Duration

```
250ms
```

Closing

```
Fade Out

+

Scale

100%

↓

98%
```

Duration

```
200ms
```

---

# Dropdown Motion

Opening

```
Fade

+

Slide Down

8px
```

Duration

```
180ms
```

Closing

```
Fade Out

+

Slide Up

8px
```

---

# Toast Notifications

Appear

```
Fade

+

Slide Up
```

Disappear

```
Fade Out
```

Duration

```
250ms
```

Auto Close

```
4 seconds
```

---

# Loading Motion

Skeletons

```
Subtle shimmer animation
```

Duration

```
1.5 seconds

Infinite
```

Avoid flashing placeholders.

---

# Spinner

Use

```
LoaderCircle
```

Animation

```
Continuous Rotation
```

Duration

```
1 second

Linear

Infinite
```

---

# AI Chat

When user submits a question

Immediately

- Clear input
- Show typing state

During generation

- Stream response
- Animate cursor

After completion

- Fade in citations

Avoid waiting for the full response before rendering.

---

# Upload Progress

Animate

- Progress Bar
- Processing Status
- Completion Checkmark

Example

```
Uploading

↓

Extracting

↓

Embedding

↓

Ready
```

Transitions should feel continuous.

---

# Card Motion

Hover

```
shadow.sm

↓

shadow.md
```

Duration

```
150ms
```

No scaling.

---

# Table Motion

Hover

- Background transition

Selection

- Border
- Background

Sorting

- Smooth row movement

Avoid animated row reordering.

---

# Search Motion

When filtering

- Fade results
- Replace content smoothly

Avoid flashing the page.

---

# Empty States

When data appears

```
Fade In

+

Slide Up

12px
```

Duration

```
250ms
```

---

# Page Transitions

Version 1

Minimal transitions only.

Avoid full-page animations.

Navigation should feel immediate.

---

# Error Motion

Shake animations

```
Not Allowed
```

Instead

- Fade in error message
- Highlight input border

Maintain a calm experience.

---

# Success Motion

Display

```
Circle Check

↓

Toast Appears
```

Duration

```
250ms
```

Keep confirmations lightweight.

---

# Accessibility

Respect

```
prefers-reduced-motion
```

When enabled

- Remove non-essential animations
- Disable shimmer
- Disable page transitions
- Keep focus transitions

Users should always be able to reduce motion.

---

# Performance

Animations should:

- Run at 60 FPS
- Prefer CSS transforms
- Animate opacity and transform only
- Avoid layout-triggering properties

Never animate:

- Width
- Height
- Top
- Left

when a transform can achieve the same effect.

---

# Usage Rules

Always

- Use motion tokens
- Keep animations under 350ms
- Animate with purpose
- Respect reduced-motion settings

Never

- Use bounce effects
- Use elastic animations
- Over-animate the interface
- Delay user interactions unnecessarily

---

# Future Considerations

Future versions may introduce motion for:

- AI Agent execution
- Realtime collaboration
- Multi-user cursors
- Workflow automation
- Notification center
- Command palette

These should extend the existing motion system while maintaining the same principles.

---

# Summary

The KnowledgeOS motion system reinforces usability through subtle, meaningful animations.

By keeping motion fast, purposeful, and accessible, the interface feels responsive and polished without distracting users from their work.