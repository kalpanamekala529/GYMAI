# GymAI — Frontend Prototype

An AI-powered fitness platform UI. **Frontend only** — no backend, database,
or real AI integration. All data is static/demo data, and "auth" is a
localStorage-based demo (any email/password combination works).

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- React Router v7
- Framer Motion
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run lint       # oxlint
```

## Folder Structure

```
src/
├── assets/                   # static images
├── components/
│   ├── layout/                # Navbar (auth-aware), Footer, Layout (Outlet wrapper)
│   ├── ui/                    # Button, GlassCard, SectionHeading, GradientOrb,
│   │                          # FormInput, Select, PlaceholderPage
│   ├── landing/                # Hero, Features, Testimonials, FAQ, CTA
│   ├── auth/                  # AuthLayout, ProtectedRoute
│   ├── dashboard/              # DashboardSidebar, StatCard, TodaysWorkoutCard,
│   │                          # WeeklyProgressChart, RecentWorkouts, QuickActions
│   ├── generator/              # DayPlanCard
│   ├── exercises/              # ExerciseCard, ExerciseModal
│   └── profile/                # ProfileField
├── context/
│   └── AuthContext.jsx         # localStorage-backed auth (login/signup/logout/updateProfile)
├── data/                       # Static demo data (testimonials, features, faqs,
│                              # dashboard, exercises, workoutPlan)
├── pages/                      # One file per route
├── App.jsx                     # Route definitions incl. ProtectedRoute group
├── main.jsx                    # App entry, BrowserRouter
└── index.css                   # Design tokens, glassmorphism + button utilities
```

## Pages

- [x] **Landing** — Hero, Features, Testimonials, FAQ, CTA
- [x] **Login** — email/password, remember me, forgot-password notice, redirects to Dashboard
- [x] **Signup** — full name/email/password/confirm, redirects to Dashboard
- [x] **Dashboard** *(protected)* — welcome message, calories/BMI/streak stat cards,
      today's workout, weekly progress chart, quick actions, recent workouts, sidebar nav
- [x] **Profile** *(protected)* — view/edit name, age, gender, height, weight, goal, level
- [x] **Workout Generator** *(protected)* — goal/level/day-count form, static 7-day plan,
      save/remove plan in localStorage
- [x] **Exercise Library** *(protected)* — 27 exercises, live search + muscle-group filter,
      detail modal per exercise

## Auth (demo only)

`AuthContext` persists to `localStorage`:
- `gymai_isLoggedIn` — `"true"` / `"false"`
- `gymai_user` — `{ fullName, email, age, gender, height, weight, goal, level }`

`login(email)` accepts any password and matches an existing stored user by
email, or creates one from the email. `logout()` clears both keys. Routes
under `/dashboard`, `/profile`, `/generator`, and `/exercises` are wrapped in
`ProtectedRoute`, which redirects to `/login` when logged out.

## Design System

- **Background:** near-black (`#07060c`) with a faint radial violet glow
- **Accent:** violet → magenta gradient (`#7c3aed` → `#d946ef`)
- **Type:** Space Grotesk (headings), Inter (body), Bebas Neue (stat numbers)
- **Cards:** glassmorphism — `bg-white/5`, `backdrop-blur-xl`, soft border
- **Signature motif:** a slow-pulsing gradient "orb" mesh used behind hero
  and CTA/auth sections, echoed by the floating workout-preview card in the hero
