# 04-upload-dialog.md

**Version:** 1.0  
**Status:** Draft  
**Last Updated:** July 2026

---

# Purpose

The Upload Dialog provides a fast and focused way for users to add documents to their workspace.

Uploading a document is the primary entry point into the RAG pipeline, therefore the experience should be simple, predictable, and informative.

The dialog should allow users to start uploads without leaving the current page.

---

# Entry Points

- Dashboard → Upload PDF
- Documents → Upload PDF

---

# Exit Points

- Processing
- Documents Page
- Cancel Upload

---

# Layout

```
┌───────────────────────────────────────────────┐
│ Upload Document                               │
├───────────────────────────────────────────────┤
│                                               │
│                 📄                            │   
│                                               │
│      Drag & Drop PDF Here                     │
│                                               │
│                 or                            │
│                                               │
│         [ Choose File ]                       │
│                                               │
│-----------------------------------------------│
│ Selected File                                 │
│                                               │
│ Employee Handbook.pdf                         │
│ 12.5 MB                                       │
│                                               │
├───────────────────────────────────────────────┤
│ Cancel                     Upload Document    │
└───────────────────────────────────────────────┘
```

---

# Sections

## Dialog Header

Displays:

- Title
- Short description
- Close button

---

## Upload Area

Supports:

- Drag & Drop
- File Picker

Accepted File Types

- PDF (.pdf)

Future Versions

- DOCX
- TXT
- Markdown

---

## Selected File

Displays:

- File Name
- File Size

Future

- Number of Pages
- Estimated Processing Time

---

## Actions

Primary Action

```
Upload Document
```

Secondary Action

```
Cancel
```

---

# Validation

Before upload:

Validate

- File exists
- PDF format
- Maximum file size
- Duplicate filename (optional warning)

Invalid uploads should never start processing.

---

# User Interactions

Users can:

- Drag a PDF
- Browse files
- Replace selected file
- Remove selected file
- Start upload
- Cancel upload

---

# States

## Default

```
Drag PDF here

or

Choose File
```

---

## File Selected

Display

- File Name
- Size

Enable Upload button.

---

## Uploading

```
Uploading...

███████████░░░░░
```

Upload button becomes disabled.

Cancel is disabled after upload begins.

---

## Upload Complete

Dialog closes automatically.

Documents page refreshes.

Document appears with:

```
Processing
```

---

## Invalid File

Display

```
Unsupported file type.

Please upload a PDF document.
```

---

## Upload Failed

Display

```
Upload failed.

[ Retry ]

[ Cancel ]
```

---

# Components

- Modal Dialog
- Drag & Drop Area
- File Picker Button
- Selected File Card
- Progress Indicator
- Primary Button
- Secondary Button
- Validation Message

---

# UX Notes

The upload experience should require no more than three steps:

1. Select File
2. Upload
3. Processing Begins

Users should immediately regain control after the upload completes.

Background processing should continue independently.

---

# Responsive Behaviour

## Desktop

Centered modal.

---

## Tablet

Medium-width modal.

---

## Mobile

Full-screen bottom sheet.

Large touch targets.

---

# Accessibility

Requirements

- Keyboard-accessible upload
- Drag & Drop alternatives
- Screen-reader announcements
- Visible focus states
- Proper error messaging

---

# Future Considerations

Future versions may support:

- Multi-file Upload
- Folder Upload
- Drag Multiple Files
- Upload Queue
- Cloud Storage Import
- Google Drive
- Notion
- GitHub

The dialog should be designed to accommodate these additions without major redesign.

---

# Summary

The Upload Dialog is the entry point into the KnowledgeOS document ingestion pipeline.

Its responsibility is to provide a fast, intuitive, and reliable upload experience while validating user input and handing document processing off to the background pipeline.