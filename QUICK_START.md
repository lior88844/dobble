# 🚀 Quick Start Guide

Get the Dobble multiplayer game running in under 5 minutes!

## Prerequisites

- Node.js v16 or higher
- npm or yarn

## 1. Install Dependencies

```bash
# Install all dependencies (root, backend, and frontend)
npm run install:all
```

## 2. Set Up Environment Files

```bash
# Copy environment examples
cp backend/env.example backend/.env
cp frontend/env.example frontend/.env
```

## 3. Start the Game

```bash
# Start both backend and frontend servers
npm run dev
```

This will start:
- Backend server on http://localhost:3001
- Frontend server on http://localhost:5173

## 4. Play the Game

1. Open http://localhost:5173 in your browser
2. Create a new game room
3. Share the room code with friends
4. Start playing when everyone joins!

## 🎮 How to Play

1. **Create Room**: Enter your name and create a new game
2. **Share Code**: Share the 6-character room code with friends
3. **Join Game**: Friends enter the code to join your room
4. **Start Game**: Host clicks "Start Game" when ready
5. **Find Matches**: Click the matching symbol between your card and the host's card
6. **Score Points**: First player to find the match gets a point!

## 🧪 Test the Backend

```bash
# Test the Dobble deck generation
cd backend
node test-deck.js
```

## 🛠️ Development Commands

```bash
# Start both servers in development mode
npm run dev

# Start servers separately
npm run dev:backend    # Backend only
npm run dev:frontend   # Frontend only

# Build for production
npm run build

# Run deployment script
./deploy.sh dev        # Setup development
./deploy.sh deploy     # Prepare for deployment
```

## 📱 Mobile Testing

The game is fully responsive! Test on mobile devices by:

1. Start the development servers
2. Find your computer's IP address: `ifconfig` (Mac/Linux) or `ipconfig` (Windows)
3. Open `http://YOUR_IP:5173` on your mobile device
4. Make sure both devices are on the same network

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill processes on ports 3001 and 5173
lsof -ti:3001 | xargs kill -9
lsof -ti:5173 | xargs kill -9
```

**Dependencies issues:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
rm -rf backend/node_modules backend/package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
npm run install:all
```

**Socket connection failed:**
- Check if backend is running on port 3001
- Verify `VITE_BACKEND_URL` in frontend/.env

## 🚀 Ready to Deploy?

See the main README.md for detailed deployment instructions to Vercel, Render, Railway, and other platforms.

---

**Happy gaming! 🎯** 