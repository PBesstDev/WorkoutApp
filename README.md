# FITTRACK

**Your Training. Your Progress. Your Health.**

A modern web-based workout tracking platform that helps athletes log lifts, follow structured programs, track progress, and stay accountable.

> **Status:** Initial frontend commit – landing page & core UI components.

---

## Overview

FITTRACK is a React + Vite application that currently delivers a polished marketing/landing experience for a full-featured fitness platform. The app is designed around progressive training, clear progress tracking, and community accountability.

The current codebase focuses on the public-facing experience (Hero, Features, Programs, Transformations, CTA, Login entry points, and dark/light theme support). Backend services (Express + PostgreSQL) are planned and partially reflected in dependencies.

---

## Features (Current + Planned)

### Live in this commit
- Responsive landing page with modern dark/light theme toggle
- Hero section with auto-rotating feature carousel
- Transformations / results section
- Call-to-action + Login / Sign-up entry points
- Modular, reusable React components

### Coming soon
- Full workout logging (sets, reps, weight)
- Feature showcase (Workout Tracking, Programs, Progress & PRs, Video Guidance, Nutrition, Community)
- Program catalog (Strength Foundation, Hypertrophy Split, Push Pull Legs, Power Building, Home Work, On-Demand)
- User authentication & profiles
- Progress charts and personal records
- Video exercise library
- Nutrition / macro tracking
- Leaderboards & community features
- Backend API (Express + PostgreSQL)

---

## Tech Stack

| Layer          | Technology                          |
|----------------|-------------------------------------|
| Frontend       | React 18, Vite 5                    |
| Styling        | Custom CSS (`public/styles.css`)    |
| Theming        | Context-based Dark / Light mode     |
| Backend (planned) | Express, PostgreSQL (`pg`), bcrypt |
| Tooling        | ESLint, npm                         |

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/PBesstDev/WorkoutApp.git
cd WorkoutApp

# Install dependencies
npm install

# Start the development server
npm run dev
