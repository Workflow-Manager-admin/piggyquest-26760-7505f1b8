# PiggyQuest Main Container: Requirements Document

## Overview

PiggyQuest (PiggyWise) is envisioned as a playful, smart digital piggy bank and financial education app for children, teens, and their families. The application promotes healthy saving habits, family collaboration, and financial literacy through gamified features and a vibrant, cartoon-inspired user interface. This requirements document outlines the main container for the PiggyQuest frontend, focusing on architectural, functional, user, and visual guidelines.

---

## 1. Main Container

**Component Name:** Main Container for PiggyQuest  
**Platform:** Web (React-based SPA)

The main container coordinates all core user experiences for children and parents, with clear separation between their respective views, navigation/routing to individual features, and a shared, playful thematic style across the application.

---

## 2. Features & Functional Requirements

### 2.1 Home Dashboard

- Displays savings jars or piggy avatars, each representing a different savings goal.
- For each goal:  
  - Progress bar  
  - Goal name  
  - Amount saved  
  - Target amount  
- Total balance is shown at the top of the dashboard.
- Provides an interface/button for adding new savings goals.
- Uses illustrated piggy avatars and animated coin effects for visual engagement.

### 2.2 Goal Setup

- Allows users (children/teens) to:
  - Enter a custom goal name
  - Set a target amount and deadline
  - Select a jar style or piggy avatar (with support for custom themes)
  - Toggle options for auto-saving and priority status

### 2.3 Parent Dashboard

- Dedicated view for a parent or guardian.
- Features:
  - Manage and monitor linked child accounts
  - Assign chores with associated monetary rewards
  - Transfer allowances or bonuses to child accounts
  - Approve withdrawal requests and the creation of new saving goals
- Parental controls and controls for switching between roles/views are clear and strongly separated from child/teen features.

### 2.4 Savings Report

- Visualizes saving progress for each goal with charts and graphs
- Offers AI-driven suggestions and tips for achieving saving goals
- Tracks progress streaks and celebratory milestones (e.g., badges, achievements)

---

## 3. User Roles & Permissions

### 3.1 Child/Teen

- Can view, create, and manage savings goals
- Cannot approve withdrawals or bonuses
- Has access to playful educational feedback and encouragement

### 3.2 Parent/Guardian

- Can add/manage child accounts, assign tasks/rewards, and approve actions
- Can transfer allowances/bonuses and access savings reports for each child

---

## 4. Design & Styling Requirements

- **Theme:** Dark mode by default, with a vibrant, cartoon-inspired style
- **Color Palette:**  
  - Primary: Teal (#1DE9B6)  
  - Secondary: Coral (#FF6F61)  
  - Accents: Yellow (#FFD600), Purple (#8E24AA)
- **Typography:** Friendly, accessible fonts suitable for ages 6–16 and adults
- **UI Patterns:**  
  - Large touch targets  
  - Rounded elements and soft shadows  
  - Playful icons and piggy/avatar illustrations
  - Progress bars, badges, and animated coins
- **Navigation:** Simple, clear routing for main dashboard, goal setup, parent dashboard, and reports
- **Animations:** Engaging visual feedback for actions and milestones

---

## 5. Technical Specifications

- **Frontend Framework:** React JS
- **Platform:** JavaScript (ES6+)
- **Component Structure:**  
  - Separate, clearly organized React components for dashboards, goal setup, reports, and navigation
  - Use of vanilla CSS (no UI frameworks), with theme variables and component-level styling (see `App.css`)
- **Responsive Layout:**  
  - Design must be optimized for both desktop and tablet/mobile browsers
- **Accessibility:**  
  - Follows accessibility guidelines for color contrast, font sizing, and navigation clarity

---

## 6. Navigation & Routing

- The main container is responsible for managing routes between:
  - Home Dashboard
  - Goal Setup
  - Parent Dashboard
  - Savings Report
- Navigation should always make user context (child vs. parent) clear.

---

## 7. Assumptions & Constraints

- The backend is not in scope (frontend only for this phase).
- No heavy external UI frameworks; UI must be built with React and vanilla CSS.
- The cartoon-inspired brand style and color palette are essential for engagement.
- Animation and playful visual effects are preferred wherever possible.

---

## 8. References

- [React documentation](https://reactjs.org/)
- See project CSS variables in `piggyquest_frontend/src/App.css` for color and style guidelines.

---

## Appendix: Example UI/UX Elements

- Piggy avatars and savings jars with progress rings
- Animated coin drops when savings are added
- Achievement badges for milestones
- Parent/child account switch in navigation

---

This requirements document will guide design, development, and future refinement of the PiggyQuest main container.
