#!/bin/bash

# ByteBattle - Development Helper Script
# This script provides quick commands for common development tasks

echo "🎮 ByteBattle Development Helper"
echo "================================="
echo ""

# Function to display menu
show_menu() {
    echo "Choose an option:"
    echo ""
    echo "1) 🚀 Start Development Server (npm start)"
    echo "2) 📦 Install Dependencies (npm install)"
    echo "3) 🏗️  Build for Production (npm run build)"
    echo "4) 🧪 Run Tests (npm test)"
    echo "5) 🧹 Clean Install (remove node_modules and reinstall)"
    echo "6) 📊 Check Project Stats"
    echo "7) 📚 Open Documentation"
    echo "8) 🔍 View Available Routes"
    echo "9) 💡 Show Next Steps"
    echo "0) ❌ Exit"
    echo ""
}

# Function to show project stats
show_stats() {
    echo "📊 ByteBattle Project Statistics"
    echo "================================"
    echo ""
    echo "📂 Components Created:"
    ls -1 src/components/ | grep -E "^(CodeEditor|ChallengeCard|LeaderboardCard|AchievementBadge)$" | wc -l
    echo ""
    echo "📄 Layouts Created:"
    ls -1 src/layouts/ | grep -E "^(challenges|battles|leaderboard|challenge-detail)$" | wc -l
    echo ""
    echo "📝 Total React Components:"
    find src -name "*.js" | wc -l
    echo ""
    echo "📦 Dependencies:"
    cat package.json | grep -c '"'
    echo ""
}

# Function to show routes
show_routes() {
    echo "🔍 Available Routes"
    echo "=================="
    echo ""
    echo "Main Application Routes:"
    echo "  📊 /dashboard        - Main dashboard with stats and overview"
    echo "  💻 /challenges       - Browse coding challenges"
    echo "  ⚔️  /battles          - Battle arena (1v1, Team, Tournament)"
    echo "  🏆 /leaderboard      - Global rankings and leaderboard"
    echo "  👤 /profile          - User profile and settings"
    echo ""
    echo "Authentication Routes:"
    echo "  🔐 /authentication/sign-in   - Login page"
    echo "  📝 /authentication/sign-up   - Registration page"
    echo ""
}

# Function to show next steps
show_next_steps() {
    echo "💡 Next Development Steps"
    echo "========================"
    echo ""
    echo "1. Backend Development:"
    echo "   - Set up NestJS project"
    echo "   - Configure MongoDB database"
    echo "   - Implement JWT authentication"
    echo "   - Create REST API endpoints"
    echo "   - Add WebSocket server"
    echo ""
    echo "2. Code Execution Engine:"
    echo "   - Set up Docker containers"
    echo "   - Implement code runners for multiple languages"
    echo "   - Add test case validation"
    echo "   - Configure security sandboxing"
    echo ""
    echo "3. AI Integration:"
    echo "   - Integrate OpenAI or Claude API"
    echo "   - Implement challenge generation"
    echo "   - Add code analysis features"
    echo "   - Create hint generation system"
    echo ""
    echo "4. Frontend Enhancements:"
    echo "   - Connect components to backend APIs"
    echo "   - Add loading states and error handling"
    echo "   - Implement real-time WebSocket connections"
    echo "   - Add toast notifications"
    echo "   - Optimize performance"
    echo ""
    echo "📚 See BYTEBATTLE_GUIDE.md for detailed information"
    echo ""
}

# Function to open documentation
open_docs() {
    echo "📚 Available Documentation:"
    echo ""
    echo "1) README.md                - Quick start guide"
    echo "2) BYTEBATTLE_GUIDE.md     - Comprehensive development guide"
    echo "3) IMPLEMENTATION_SUMMARY.md - What has been built"
    echo ""
    read -p "Which document to view? (1-3): " doc_choice
    
    case $doc_choice in
        1) less README.md ;;
        2) less BYTEBATTLE_GUIDE.md ;;
        3) less IMPLEMENTATION_SUMMARY.md ;;
        *) echo "Invalid choice" ;;
    esac
}

# Main loop
while true; do
    show_menu
    read -p "Enter your choice (0-9): " choice
    echo ""
    
    case $choice in
        1)
            echo "🚀 Starting development server..."
            npm start
            ;;
        2)
            echo "📦 Installing dependencies..."
            npm install
            ;;
        3)
            echo "🏗️  Building for production..."
            npm run build
            ;;
        4)
            echo "🧪 Running tests..."
            npm test
            ;;
        5)
            echo "🧹 Performing clean install..."
            npm run install:clean
            ;;
        6)
            show_stats
            echo ""
            read -p "Press Enter to continue..."
            ;;
        7)
            open_docs
            echo ""
            read -p "Press Enter to continue..."
            ;;
        8)
            show_routes
            echo ""
            read -p "Press Enter to continue..."
            ;;
        9)
            show_next_steps
            echo ""
            read -p "Press Enter to continue..."
            ;;
        0)
            echo "👋 Goodbye! Happy coding!"
            exit 0
            ;;
        *)
            echo "❌ Invalid choice. Please try again."
            echo ""
            ;;
    esac
done
