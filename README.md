# ByteBattle - Real-Time Competitive Coding Platform

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6.svg) ![Vite](https://img.shields.io/badge/Vite-5.0-646cff.svg)

**ByteBattle** is a gamified competitive coding platform that combines the best of Boot.dev and LeetCode. Challenge yourself with coding problems, compete in real-time 1v1 battles, collaborate in team competitions, and track your progress through an engaging achievement system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## ✨ Features

- **📊 Dashboard** - Real-time stats, XP tracking, skill progress, and daily goals
- **💻 Challenges** - Browse, filter, and search coding problems by difficulty and category
- **⚔️ Battle Arena** - 1v1 duels, team battles, and tournaments with real-time updates
- **🏆 Leaderboard** - Global rankings with time-based filtering (All Time, Weekly, Monthly)
- **🎯 Achievements** - Gamified progress tracking with rarity system (Common, Rare, Epic, Legendary)
- **📝 Code Editor** - Monaco Editor with multi-language support and syntax highlighting
- **👤 Profile** - User stats, settings, and activity tracking
- **🔐 Authentication** - Sign in/Sign up with modern UI

## 🎮 Pages

| Route | Description |
|-------|-------------|
| `/dashboard` | Main overview with stats, active battles, achievements |
| `/challenges` | Challenge browser with search and filters |
| `/battles` | Battle arena for 1v1 and team competitions |
| `/leaderboard` | Global rankings and user stats |
| `/challenge-detail` | Challenge solver with code editor |
| `/profile` | User profile and settings |
| `/authentication/sign-in` | User login |
| `/authentication/sign-up` | User registration |

## 📦 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2 | Frontend framework |
| TypeScript | 5.3 | Type safety |
| Vite | 5.0 | Build tool & dev server |
| Material-UI | 5.9 | UI component library |
| Redux Toolkit | 2.0 | State management |
| React Router | 6.21 | Navigation |
| Monaco Editor | 4.6 | Code editor (VS Code engine) |
| Socket.io Client | 4.7 | Real-time communication |
| Axios | 1.6 | HTTP client |
| ApexCharts | 3.30 | Data visualization |

## 📁 Project Structure

```
src/
├── assets/                    # Static assets
│   ├── images/               # Images and icons
│   └── theme/                # MUI theme configuration
├── components/               # Reusable components
│   ├── AchievementBadge/     # Achievement display with rarity
│   ├── ChallengeCard/        # Challenge info cards
│   ├── CodeEditor/           # Monaco code editor wrapper
│   ├── LeaderboardCard/      # Ranking display cards
│   └── Vui*/                 # Base UI components (Box, Button, Input, etc.)
├── context/                  # React context providers
├── examples/                 # Layout components
│   ├── Breadcrumbs/          # Navigation breadcrumbs
│   ├── Cards/                # Card variants (Info, Project, Statistics)
│   ├── Charts/               # Chart components (Line)
│   ├── Configurator/         # Theme configurator
│   ├── Footer/               # Page footer
│   ├── GradientBorder/       # Gradient border effects
│   ├── Icons/                # Custom SVG icons
│   ├── Items/                # List items (Notifications)
│   ├── LayoutContainers/     # Page layout wrappers
│   ├── Navbars/              # Navigation bars
│   ├── Sidenav/              # Side navigation
│   ├── Tables/               # Data tables
│   └── Timeline/             # Timeline components
├── layouts/                  # Page layouts
│   ├── authentication/       # Sign in/Sign up pages
│   ├── battles/              # Battle arena
│   ├── challenge-detail/     # Challenge solver
│   ├── challenges/           # Challenge browser
│   ├── dashboard/            # Main dashboard
│   ├── leaderboard/          # Rankings page
│   └── profile/              # User profile
├── services/                 # API & external services
│   ├── api.ts                # Axios API client
│   └── socket.ts             # Socket.io client
├── store/                    # Redux store
│   ├── index.ts              # Store configuration
│   └── slices/               # Redux slices
│       ├── battleSlice.ts    # Battle state
│       ├── challengeSlice.ts # Challenge state
│       └── userSlice.ts      # User state
├── variables/                # Chart configurations
├── App.tsx                   # Main app component
├── main.tsx                  # App entry point
└── routes.jsx                # Route definitions
```

## 🛠 Development

### Available Scripts

```bash
npm run dev        # Start dev server (port 5173)
npm run build      # Build for production (tsc + vite)
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3001
VITE_SOCKET_URL=http://localhost:3001
```

## 🔌 Backend Integration

This is currently a **frontend-only** implementation with mock data. API and Socket services are ready for backend connection.

### API Endpoints (Expected)

```
GET    /api/challenges            # List challenges
GET    /api/challenges/:id        # Get challenge details
POST   /api/challenges/:id/submit # Submit solution
GET    /api/leaderboard           # Get rankings
POST   /api/battles/matchmaking   # Find opponent
POST   /api/execute               # Execute code
GET    /api/achievements          # Get achievements
GET    /api/users/profile         # Get user profile
```

### WebSocket Events

```typescript
// Battle events
socket.on('battle:start', (data) => { ... })
socket.on('battle:update', (data) => { ... })
socket.on('battle:end', (data) => { ... })

// Leaderboard events
socket.on('leaderboard:update', (data) => { ... })
```

## 📚 Documentation

See [BYTEBATTLE_GUIDE.md](./BYTEBATTLE_GUIDE.md) for detailed documentation.


