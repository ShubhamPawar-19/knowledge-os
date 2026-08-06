# 10-user-profile.md

**Version:** 1.0  
**Status:** Draft  
**Last Updated:** July 2026

---

# Purpose

The User Profile page allows users to manage their personal account settings independently of the workspace.

Unlike Workspace Settings, changes made here affect only the authenticated user.

This page centralizes account information, preferences, security settings, and session management.

---

# Entry Points

- Avatar Menu
- Profile Dropdown

---

# Exit Points

- Dashboard
- Documents
- AI Chat
- Logout

---

# Layout

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ Profile                                                             Save     │
│ Manage your personal account settings.                                       │
├──────────────────────┬───────────────────────────────────────────────────────┤
│                      │                                                       │
│ Profile              │  Avatar                                               │
│                      │                                                       │
│ Security             │      ○                                                │
│                      │                                                       │
│ Preferences          │  Name                                                 │
│                      │  __________________________________                   │
│ Sessions             │                                                       │
│                      │  Email                                                │
│                      │  __________________________________                   │
│                      │                                                       │
├──────────────────────┼───────────────────────────────────────────────────────┤
│                      │ Preferences                                           │
│                      │                                                       │
│                      │ Theme            System ▼                             │
│                      │ Language         English ▼                            │
│                      │                                                       │
├──────────────────────┼───────────────────────────────────────────────────────┤
│                      │ Active Sessions                                       │
│                      │                                                       │
│                      │ Chrome • Windows • Current Device                     │
│                      │ Safari • iPhone • Yesterday                           │
│                      │                                                       │
│                      │ [ Sign Out Other Sessions ]                           │
└──────────────────────┴───────────────────────────────────────────────────────┘
```

---

# Sections

## Profile

Displays

- Profile Picture
- Full Name
- Email Address

Users may update:

- Name
- Avatar (Future)

Email is read-only in Version 1.

---

## Security

Displays

- Password
- Last Login
- Active Sessions

Actions

- Change Password
- Sign Out Other Sessions

---

## Preferences

Version 1

- Theme
- Language

Future

- AI Preferences
- Notification Settings
- Keyboard Shortcuts

---

## Sessions

Displays every active login session.

Each session shows

- Device
- Browser
- Location (Approximate)
- Last Active Time

---

# Components

- Avatar
- Text Input
- Select Dropdown
- Session Card
- Save Button
- Secondary Button
- Confirmation Dialog

---

# User Interactions

Users can

- Update profile information
- Change password
- Switch theme
- Change language
- View active sessions
- Sign out of other devices
- Logout

---

# States

## Default

Profile information loaded successfully.

---

## Saving

Display

```
Saving changes...
```

Disable Save button.

---

## Saved

Display toast

```
Profile updated successfully.
```

---

## Loading

Display skeleton placeholders.

---

## Error

Display

```
Unable to save changes.

[ Retry ]
```

---

# Logout Flow

```
Avatar Menu

↓

Logout

↓

Session Destroyed

↓

Redirect to Landing Page
```

---

# Responsive Behaviour

## Desktop

Two-column settings layout.

---

## Tablet

Compact navigation.

---

## Mobile

Single-column stacked cards.

Large touch-friendly controls.

---

# Accessibility

Requirements

- Keyboard navigation
- Accessible forms
- Screen-reader labels
- Visible focus states
- Semantic headings

---

# UX Notes

Workspace settings and user settings must remain completely separate.

Users should never confuse personal account configuration with workspace configuration.

Sensitive actions should always require confirmation.

---

# Future Considerations

Future versions may include

- Two-Factor Authentication (2FA)
- Social Account Linking
- API Tokens
- Notification Preferences
- Profile Picture Upload
- Activity Log
- Account Export

The page layout should accommodate these additions without major restructuring.

---

# Summary

The User Profile page provides a dedicated space for managing personal account information, security, and preferences while maintaining a clear separation from workspace-level configuration.