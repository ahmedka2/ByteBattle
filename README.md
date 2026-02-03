# ByteBattle - Real-Time Collaborative Coding Challenge Platform

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg) ![NestJS](https://img.shields.io/badge/Backend-NestJS-e0234e.svg)

**ByteBattle** is a gamified competitive coding platform that combines the best of Boot.dev and LeetCode. Challenge yourself with AI-generated problems, compete in real-time 1v1 battles, collaborate in team competitions, and track your progress through an engaging achievement system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000
```

## Features

### ✨ Implemented Features

- **📊 Dashboard**: Real-time stats, active battles, skill progress, daily goals
- **💻 Challenges**: Browse, filter, and search coding problems with detailed info
- **⚔️ Battle Arena**: 1v1 duels, team battles, and tournaments
- **🏆 Leaderboard**: Global rankings with time-based filtering
- **🎯 Achievements**: Gamified progress tracking with rarity system
- **📝 Code Editor**: Monaco Editor with multi-language support
- **🎨 Modern UI**: Dark theme with smooth animations and gradients

### 🎮 Pages

1. **Dashboard** (`/dashboard`)
   - User statistics and rankings
   - Active battles overview
   - Skill progress bars
   - Recommended challenges
   - Achievement display
   - Daily goal tracker

2. **Challenges** (`/challenges`)
   - Challenge browser with filters
   - Search functionality
   - Difficulty and category sorting
   - Detailed challenge cards
   - XP and success rate display

3. **Battles** (`/battles`)
   - 1v1 matchmaking system
   - Team battle mode
   - Tournament brackets
   - Active battle tracking
   - Real-time countdown timers

4. **Leaderboard** (`/leaderboard`)
   - Global rankings
   - Time-based views (All Time, Weekly, Monthly)
   - User stats (XP, challenges, streak)
   - Top 3 special badges
   - Current user highlighting

5. **Challenge Detail** (`/challenge-detail`)
   - Full problem description
   - Code editor integration
   - Test case runner
   - Submit functionality
   - Hints system
   - Examples and constraints

### 🎨 Components

- **CodeEditor**: Monaco-based editor with syntax highlighting
- **ChallengeCard**: Interactive challenge display cards
- **LeaderboardCard**: Ranking cards with user stats
- **AchievementBadge**: Rarity-based achievement system

## 📦 Tech Stack

- **React 18.2** - Frontend framework
- **Material-UI 5.9** - UI components
- **Monaco Editor 4.6** - Code editor (VS Code engine)
- **Socket.io-client 4.7** - Real-time communication
- **Axios 1.6** - HTTP client
- **React Router 5.2** - Navigation
- **ApexCharts 3.30** - Data visualization
- **React Icons 4.3** - Icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── CodeEditor/          # Monaco code editor
│   ├── ChallengeCard/        # Challenge display
│   ├── LeaderboardCard/      # Ranking display
│   ├── AchievementBadge/     # Achievement UI
│   └── Vui*/                 # Base components
├── layouts/
│   ├── dashboard/            # Main dashboard
│   ├── challenges/           # Challenge browser
│   ├── battles/              # Battle arena
│   ├── leaderboard/          # Rankings
│   ├── challenge-detail/     # Challenge solver
│   └── profile/              # User profile
├── routes.js                 # Route configuration
└── assets/                   # Themes and images
```

## 🛠 Development

### Available Scripts

```bash
npm start          # Start dev server (port 3000)
npm build          # Build for production
npm test           # Run tests
npm run eject      # Eject from create-react-app
```

### Environment Variables

Create a `.env` file:

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_SOCKET_URL=http://localhost:3001
```

## 🔌 Backend Integration

This is currently a **frontend-only** implementation with mock data. To connect to a backend:

### Required API Endpoints

```
GET    /api/challenges           # List challenges
GET    /api/challenges/:id       # Get challenge details
POST   /api/challenges/:id/submit # Submit solution
GET    /api/leaderboard           # Get rankings
POST   /api/battles/matchmaking   # Find opponent
POST   /api/execute               # Execute code
GET    /api/achievements          # Get achievements
```

### WebSocket Events

```javascript
// Battle updates
socket.on('battle:start', (data) => { ... })
socket.on('battle:update', (data) => { ... })
socket.on('battle:end', (data) => { ... })

// Leaderboard updates
socket.on('leaderboard:update', (data) => { ... })
```

## 📚 Documentation

See [BYTEBATTLE_GUIDE.md](./BYTEBATTLE_GUIDE.md) for:
- Detailed feature documentation
- Component API reference
- Backend integration guide
- Development roadmap
- Contributing guidelines


