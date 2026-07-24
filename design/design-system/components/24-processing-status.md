# 24-processing-status.md

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** July 2026

---

# Purpose

The Processing Status component communicates the progress of document ingestion after upload.

Since KnowledgeOS uses asynchronous background jobs, users must always understand what stage a document is currently in and whether any action is required.

This component is a key trust-building element of the product.

---

# Design Goals

The Processing Status component should be:

- Transparent
- Reassuring
- Real-time
- Informative
- Reliable

Users should never wonder whether processing is still running.

---

# Usage Guidelines

Use Processing Status for

- Document Upload
- Background Processing
- Embedding Generation
- Failed Jobs
- Retry Operations
- Queue Status

Do not use it for upload progress.

Upload progress is handled by the File Upload component.

---

# Processing Pipeline

Version 1 pipeline

```
Upload Complete

↓

Queued

↓

Extracting Text

↓

Chunking Document

↓

Generating Embeddings

↓

Saving to Database

↓

Ready
```

Each stage should be visible whenever possible.

---

# Status Types

KnowledgeOS supports

```
Queued

Processing

Completed

Failed

Cancelled
```

---

## Queued

Example

```
Waiting for processing...
```

---

## Processing

Example

```
Generating embeddings...
```

---

## Completed

Example

```
Ready for AI Chat
```

---

## Failed

Example

```
Embedding generation failed.

Retry
```

---

## Cancelled

Future support only.

---

# Layout

```
────────────────────────────────

Architecture.pdf

Generating Embeddings...

█████████████░░░░░

68%

────────────────────────────────
```

---

# Structure

Each processing card contains

- Document Name
- Current Stage
- Progress Indicator
- Estimated Status
- Timestamp
- Optional Retry Button

---

# Progress Indicator

Supports

```
Linear Progress Bar
```

Progress updates continuously from background jobs.

---

# Processing Timeline

Example

```
✓ Upload Complete

✓ Text Extraction

✓ Chunking

● Generating Embeddings

○ Saving Database

○ Ready
```

Completed steps display checkmarks.

Current step displays an active indicator.

Future steps remain inactive.

---

# Typography

Title

```
16px

Semibold
```

Stage

```
14px

Medium
```

Metadata

```
13px

Regular
```

---

# Colors

Queued

```
warning.500
```

Processing

```
primary.600
```

Completed

```
success.600
```

Failed

```
error.600
```

---

# Border Radius

Uses

```
radius.lg
```

---

# States

Supports

```
Queued

Processing

Completed

Failed
```

---

## Queued

Display waiting indicator.

---

## Processing

Animate progress bar.

Update stage dynamically.

---

## Completed

Display success icon.

Enable document actions.

---

## Failed

Display error message.

Offer retry.

---

# Retry

Available only when processing fails.

Primary Action

```
Retry Processing
```

Retry creates a new processing job.

---

# Background Behaviour

Processing continues

- After refresh
- After navigation
- After browser close

UI reconnects automatically when reopened.

---

# Notifications

When processing completes

Display

```
✓ Architecture.pdf is ready for AI chat.
```

Uses the Toast component.

---

# Responsive Behaviour

Desktop

Full processing timeline.

Tablet

Compact timeline.

Mobile

Vertical card layout.

Progress bar remains full width.

---

# Accessibility

Requirements

- Screen-reader announcements for stage changes
- Progress bar with `aria-valuenow`
- Visible status labels
- Keyboard accessible retry action

---

# Motion

Progress Bar

```
Smooth Width Transition
```

Duration

```
300ms
```

Stage Changes

```
Fade

150ms
```

Completion

```
Success Icon Animation

200ms
```

---

# Best Practices

✅ Clearly display the current stage

✅ Preserve progress after refresh

✅ Explain failures

✅ Continue processing in the background

---

# Anti-Patterns

Do NOT

❌ Restart processing automatically after failure

❌ Hide failed jobs

❌ Display fake progress

❌ Block navigation during processing

---

# Component API

Properties

```
Document Name

Required
```

```
Status

Queued

Processing

Completed

Failed
```

```
Stage

Required
```

```
Progress

0–100
```

```
Retry

Boolean
```

```
Timestamp

Optional
```

---

# Future Considerations

Future versions may support

- Multiple concurrent processing jobs
- Queue position
- Estimated completion time
- OCR stages
- AI-generated processing insights
- Distributed worker status

These enhancements should extend the existing Processing Status component while maintaining its transparent, real-time experience.

---

# Summary

The Processing Status component gives users continuous visibility into document ingestion.

By exposing each processing stage, handling failures gracefully, and reflecting real background job progress, it builds confidence that documents are being processed reliably and will soon be ready for AI-powered retrieval.