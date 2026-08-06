# 05-processing.md

**Version:** 1.0  
**Status:** Draft  
**Last Updated:** July 2026

---

# Purpose

The Processing screen communicates the progress of document ingestion after a successful upload.

Its primary objective is to reassure users that processing is occurring successfully while transparently displaying each stage of the Retrieval-Augmented Generation (RAG) pipeline.

Processing is asynchronous and continues independently of the user's current session.

---

# Entry Points

- Upload Complete
- Document Details
- Documents Page

---

# Exit Points

- Documents
- Document Details
- AI Chat

---

# Layout

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ Processing Document                                                          │
│ Employee Handbook.pdf                                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Upload Complete                                  ✓                           │
│ ████████████████████████████████████████████████                             │
│                                                                              │    
│ Extracting Text                                 ✓                            │
│ ████████████████████████████████████████████████                             │
│                                                                              │
│ Chunking Document                              ✓                             │
│ ████████████████████████████████████████████████                             │
│                                                                              │
│ Generating Embeddings                     Processing...                      │
│ ████████████████████████████░░░░░░░░░░░░░░░░░░░░                             │
│                                                                              │
│ Saving to Vector Database                Pending                             │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                              │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Status: Processing...                                                        │
│                                                                              │
│ You may safely leave this page.                                              │
│ Processing will continue in the background.                                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# Processing Pipeline

Every uploaded document passes through the following stages.

```
Upload Complete

↓

Extract Text

↓

Chunk Text

↓

Generate Embeddings

↓

Store in pgvector

↓

Ready
```

Each stage updates independently.

---

# Processing Stages

## Upload Complete

The document has been successfully uploaded to storage.

Status

```
Completed
```

---

## Extract Text

Extract readable text from the uploaded PDF.

Possible Outcomes

- Completed
- Failed

---

## Chunk Document

Split extracted text into semantic chunks.

Possible Outcomes

- Completed
- Failed

---

## Generate Embeddings

Generate vector embeddings for every chunk.

Possible Outcomes

- Processing
- Completed
- Failed

---

## Store in Vector Database

Persist embeddings into PostgreSQL with pgvector.

Possible Outcomes

- Pending
- Completed
- Failed

---

## Ready

The document is now searchable by the AI retrieval pipeline.

Status

```
Ready
```

---

# User Interactions

Users may:

- Close the page
- Navigate elsewhere
- View document details
- Retry failed processing

Users cannot manually progress stages.

---

# Components

- Processing Timeline
- Progress Bar
- Status Badge
- Pipeline Stage Card
- Success Indicator
- Error Indicator
- Retry Button
- Information Banner

---

# States

## Processing

Display live pipeline progress.

---

## Completed

Display

```
Document Ready

Start Chatting
```

Primary Action

```
Open AI Chat
```

---

## Failed

Display

```
Processing Failed
```

Include

- Failed Stage
- Failure Reason (user-friendly)
- Retry Button

---

## Cancelled

Not supported in Version 1.

Once processing begins, it completes in the background.

---

## Offline

Display

```
Connection Lost

Processing continues.

Reconnect to receive updates.
```

---

# Notifications

Show toast notifications.

Examples

```
Document uploaded successfully.
```

```
Processing started.
```

```
Document ready for AI chat.
```

```
Processing failed.
```

---

# UX Notes

Users should never wonder:

- Is it still processing?
- Is the application frozen?
- Can I leave this page?

The interface should answer these questions continuously.

The processing screen should build trust by making backend operations visible without exposing unnecessary technical complexity.

---

# Responsive Behaviour

## Desktop

Vertical pipeline timeline.

---

## Tablet

Compact timeline.

---

## Mobile

Stacked processing cards.

Large touch-friendly progress indicators.

---

# Accessibility

Requirements

- Screen-reader announcements for stage updates
- Accessible progress indicators
- Keyboard navigation
- High-contrast status badges
- Semantic headings

---

# Future Considerations

Future versions may introduce:

- Processing Queue
- Estimated Completion Time
- Batch Processing
- OCR Stage
- Re-ranking Preparation
- Hybrid Search Indexing
- WebSocket Live Updates

The current timeline should be extensible to support additional stages.

---

# Summary

The Processing screen provides visibility into the document ingestion pipeline while reinforcing that long-running operations execute safely in the background.

It improves user confidence by communicating progress, handling failures gracefully, and ensuring users understand when a document becomes available for AI-powered retrieval.