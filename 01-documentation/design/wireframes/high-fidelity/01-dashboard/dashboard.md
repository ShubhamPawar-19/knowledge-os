# Dashboard

## 1. Purpose

Provide users with a centralized overview of their workspace, AI activity, connected knowledge sources, and system health, enabling them to quickly understand the current state of their KnowledgeOS instance and navigate to the next task.

---

## 2. Primary Users

- Workspace Member
- Workspace Admin
- Organization Owner

---

## 3. User Goals

- Understand workspace status at a glance
- Continue previous AI conversations
- Search organizational knowledge
- Monitor document indexing
- View recent activity
- Access frequently used features
- Identify issues requiring attention

---

## 4. Layout

- Top Navigation
- Left Sidebar
- Main Content Area
- Optional Right Context Panel (future)

---

## 5. Header

### Contains

- Workspace Switcher
- Global Search
- New Chat Button
- Notifications
- User Profile Menu

---

## 6. Sidebar

### Primary Navigation

- Dashboard
- AI Chat
- Search
- Documents
- Knowledge Base
- Connectors
- Workflows
- Users
- Settings

---

## 7. Main Content

### Welcome Section

Displays:

- Greeting
- Workspace Name
- Quick Actions

---

### AI Assistant

Displays:

- Suggested prompts
- Resume previous conversation
- Start new chat

---

### Workspace Overview

Metrics:

- Documents
- Knowledge Sources
- Connected Integrations
- AI Conversations
- Active Users

---

### Recent Activity

Shows:

- Uploaded documents
- Indexed documents
- Recent searches
- Recent AI chats
- Workflow executions

---

### Indexing Status

Displays:

- Running jobs
- Pending jobs
- Failed jobs
- Completed jobs

---

### Connected Sources

Displays connected platforms.

Example:

- Google Drive
- Notion
- Confluence
- SharePoint
- Slack

---

### Quick Actions

- Upload Document
- Connect Source
- Create Workflow
- Start AI Chat
- Invite User

---

## 8. Components Used

Uses components from the Design System only.

- App Shell
- Sidebar
- Top Navigation
- Card
- Button
- Badge
- Avatar
- Search Input
- Progress Bar
- Table
- Dropdown
- Toast
- Skeleton Loader
- Empty State
- Loading Spinner

---

## 9. User Actions

Users can:

- Open AI Chat
- Search Knowledge
- Upload Documents
- Connect Data Sources
- Open Document
- Resume Conversation
- View Notifications
- Create Workflow

---

## 10. AI Behavior

When dashboard loads:

- Load recent conversations
- Generate suggested prompts
- Highlight important workspace events
- Recommend actions
- Surface indexing issues
- Display AI insights about workspace health

---

## 11. Data Requirements

Requires:

- Workspace
- Current User
- Recent Chats
- Documents
- Knowledge Sources
- Connectors
- Notifications
- Activity Feed
- Indexing Jobs
- Usage Statistics

---

## 12. Empty States

Examples:

- No documents uploaded
- No AI conversations
- No connected sources
- No recent activity

Each empty state should include an action to help users get started.

---

## 13. Loading States

- Skeleton cards
- Skeleton tables
- Skeleton metrics
- Loading spinner for background refresh

---

## 14. Error States

Examples:

- Failed to load dashboard
- Failed to load activity
- Failed to load connectors
- Failed to load AI suggestions

Provide retry actions where possible.

---

## 15. Responsive Behavior

Desktop:
- Full dashboard

Tablet:
- Collapsible sidebar

Mobile:
- Drawer navigation
- Stacked cards
- Single-column layout

---

## 16. Accessibility

- Full keyboard navigation
- Screen reader support
- Visible focus states
- WCAG AA color contrast
- ARIA labels for interactive elements

---

## 17. Future Enhancements

- Custom dashboard widgets
- Drag-and-drop layout
- Saved dashboard views
- AI-generated daily summaries
- Real-time collaboration
- Personalized recommendations