# 06-document-details.md

**Version:** 1.0  
**Status:** Draft  
**Last Updated:** July 2026

---

# Purpose

The Document Details page provides detailed information about a single document after it has been uploaded.

It allows users to inspect document metadata, monitor processing status, understand how the document is indexed, and manage the document.

This page acts as the bridge between document management and AI retrieval.

---

# Entry Points

- Documents Page
- Search Results
- Processing Complete
- Dashboard → Recent Documents

---

# Exit Points

- Documents
- AI Chat
- Delete Document

---

# Layout

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ Documents > Employee Handbook.pdf                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Employee Handbook.pdf                                      Ready ●           │
│ Company HR Policies                                                    _     │
│                                                                              │
├───────────────────────────────┬──────────────────────────────────────────────┤
│                               │                                              │
│ Document Information          │ Processing Summary                           │
│                               │                                              │
│ Name                          │ Status: Ready                                │
│ Type: PDF                     │ Uploaded: Today                              │
│ Size: 12.5 MB                 │ Processing Time: 42 sec                      │
│ Pages: 86                     │ Chunks: 421                                  │
│ Uploaded By: Shubham          │ Embeddings: Generated                        │
│                               │                                              │
├───────────────────────────────┴──────────────────────────────────────────────┤
│                                                                              │
│ Processing Timeline                                                          │
│                                                                              │
│ ✓ Upload Complete                                                            │
│ ✓ Text Extraction                                                            │
│ ✓ Chunk Generation                                                           │
│ ✓ Embedding Generation                                                       │
│ ✓ Vector Storage                                                             │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Actions                                                                      │
│                                                                              │
│ Rename      Open in Chat      Reprocess      Delete                          │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# Sections

## Header

Displays

- Document Name
- Processing Status
- Overflow Menu

---

## Document Information

Displays

- Document Name
- File Type
- File Size
- Number of Pages
- Upload Date
- Uploaded By

---

## Processing Summary

Displays

- Processing Status
- Processing Duration
- Chunk Count
- Embedding Status

This information gives users confidence that the document is fully indexed.

---

## Processing Timeline

Displays every completed pipeline stage.

Stages

- Upload
- Text Extraction
- Chunk Generation
- Embedding Generation
- Vector Storage

---

## Actions

Primary Action

```
Open in AI Chat
```

Secondary Actions

- Rename
- Reprocess
- Delete

Future

- Download
- Version History
- Share

---

# Components

- Page Header
- Breadcrumbs
- Status Badge
- Metadata Card
- Processing Card
- Timeline
- Action Buttons
- Confirmation Dialog

---

# User Interactions

Users can

- View metadata
- Rename document
- Start AI Chat
- Reprocess document
- Delete document

---

# States

## Ready

Document fully indexed.

Available for retrieval.

---

## Processing

Display live processing progress.

Disable actions that require completed indexing.

---

## Failed

Display

```
Processing Failed

Retry Processing
```

---

## Deleted

Redirect user back to Documents page.

---

## Loading

Display skeleton cards.

---

# Delete Flow

```
Delete

↓

Confirmation Dialog

↓

Delete Document

↓

Delete Chunks

↓

Delete Embeddings

↓

Remove from Vector Database

↓

Return to Documents
```

Deletion is irreversible.

---

# Reprocess Flow

```
Reprocess

↓

Queue Background Job

↓

Processing

↓

Ready
```

---

# Responsive Behaviour

## Desktop

Two-column information layout.

---

## Tablet

Stack metadata vertically.

---

## Mobile

Single-column cards.

Actions become full-width buttons.

---

# Accessibility

Requirements

- Semantic headings
- Accessible timeline
- Keyboard-accessible action menu
- Confirmation dialogs support keyboard navigation
- Screen-reader labels for status badges

---

# UX Notes

This page should answer:

- Is my document ready?
- What happened during processing?
- Can I use it in AI Chat?
- Can I safely manage it?

Users should never need to inspect backend logs to understand document status.

---

# Future Considerations

Future versions may include

- Document Preview
- PDF Viewer
- Chunk Explorer
- Embedding Statistics
- Version History
- Document Tags
- Linked Conversations

The layout should accommodate these additions without significant redesign.

---

# Summary

The Document Details page provides transparency into the lifecycle of a document, allowing users to inspect processing results, manage document metadata, and confidently transition into AI-powered conversations.