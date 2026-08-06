# Dashboard States

## Initial State

Displayed immediately after navigation.

### UI

- Header
- Sidebar
- Skeleton Metrics
- Skeleton Cards
- Skeleton Activity Feed

---

# Loading State

Shown while dashboard data is loading.

### Components

- Skeleton Cards
- Skeleton Table
- Skeleton Statistics
- Spinner for background requests

---

# Loaded State

Dashboard is fully interactive.

### Visible Sections

- Welcome
- AI Assistant
- Workspace Metrics
- Recent Activity
- Indexing Status
- Connected Sources
- Quick Actions

---

# Refreshing State

Background refresh without blocking interaction.

### Behavior

- Keep existing data visible
- Refresh affected widgets
- Show subtle loading indicators

---

# Empty States

## No Documents

Message

> No documents have been added yet.

Primary Action

- Upload Document

---

## No Connected Sources

Message

> Connect your first knowledge source.

Primary Action

- Connect Source

---

## No AI Conversations

Message

> Start your first AI conversation.

Primary Action

- New Chat

---

## No Activity

Message

> Activity will appear here as your team uses KnowledgeOS.

---

## No Notifications

Message

> You're all caught up.

---

# Partial Loading

Only one widget fails or is still loading.

Examples

- Metrics loaded
- Activity still loading
- AI suggestions unavailable

Only the affected section displays a loading placeholder.

---

# Error States

## Dashboard Load Failed

Message

> Unable to load dashboard.

Actions

- Retry
- Refresh Page

---

## Metrics Failed

Only metrics card shows error.

Action

- Retry Metrics

---

## Activity Failed

Activity section displays retry button.

---

## AI Suggestions Failed

Fallback

- Hide suggestions
- Display "Try again"

---

## Connector Error

Display

- Connection failed
- Reconnect button

---

## Permission Denied

Displayed when user lacks permission.

Message

> You don't have permission to view this content.

Action

- Contact Administrator

---

# Offline State

Dashboard detects loss of internet.

Behavior

- Existing data remains visible
- Disable write operations
- Show offline banner
- Retry automatically when connection returns

---

# Responsive States

## Desktop

- Full sidebar
- Multi-column dashboard

---

## Tablet

- Collapsible sidebar
- Two-column layout

---

## Mobile

- Drawer navigation
- Single-column cards
- Sticky top navigation

---

# Accessibility States

## Keyboard Focus

Every interactive element has a visible focus indicator.

---

## Screen Reader

All sections include descriptive labels.

---

## High Contrast

Supports WCAG AA contrast requirements.

---

# Future States

- Custom dashboard layouts
- Drag-and-drop widgets
- Widget resize
- Personalized dashboards
- AI-generated daily briefing