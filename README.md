# Dobble - Multiplayer Spot It! Game

A real-time multiplayer implementation of the popular Dobble (Spot It!) card game built with React, TypeScript, Node.js, and Socket.IO.

## 🎯 Game Overview

Dobble is a fast-paced card game where players race to find the matching symbol between their card and the host's card. Each card contains 8 symbols, and every pair of cards shares exactly one symbol.

## ✨ Features

- **Real-time Multiplayer**: Play with friends using unique room codes
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Beautiful Animations**: Smooth transitions and feedback using Framer Motion
- **Anti-cheat Protection**: Server-side card generation and match validation
- **Live Scoreboard**: Real-time updates of player scores and rankings
- **Room Management**: Create and join game rooms with up to 8 players
- **Modern UI**: Clean, intuitive interface with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dobble-multiplayer
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

This will start both the backend server (port 3001) and frontend development server (port 5173).

### Manual Setup

If you prefer to run servers separately:

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 🎮 How to Play

1. **Create or Join a Room**
   - Create a new game room and share the 6-character code with friends
   - Or join an existing room using a friend's room code

2. **Wait for Players**
   - The host can see all connected players
   - Game starts when the host clicks "Start Game" (minimum 2 players)

3. **Find the Match**
   - Each player sees their own card and the host's card
   - Click on the symbol that appears on both cards
   - First player to find the match gets a point!

4. **Continue Playing**
   - Host advances to the next round
   - Game continues for 10 rounds
   - Player with the most points wins!

## 🏗️ Project Structure

```
dobble-multiplayer/
├── backend/                 # Node.js + Express + Socket.IO server
│   ├── src/
│   │   ├── index.js        # Main server file
│   │   ├── gameManager.js  # Game logic and room management
│   │   └── dobbleDeck.js   # Dobble deck generation algorithm
│   └── package.json
├── frontend/               # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── GameRoom.tsx
│   │   │   └── GamePlay.tsx
│   │   ├── types.ts        # TypeScript type definitions
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # App entry point
│   └── package.json
└── package.json            # Root package.json with scripts
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3001
FRONTEND_URL=http://localhost:5173
```

Create a `.env` file in the frontend directory:

```env
VITE_BACKEND_URL=http://localhost:3001
```

## 🚀 Deployment

### Frontend (Vercel)

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**
   - Connect your repository to Vercel
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Set environment variable: `VITE_BACKEND_URL` to your backend URL

### Backend (Render)

1. **Deploy to Render**
   - Create a new Web Service
   - Connect your repository
   - Set build command: `cd backend && npm install`
   - Set start command: `cd backend && npm start`
   - Set environment variables:
     - `PORT`: 3001
     - `FRONTEND_URL`: Your frontend URL

### Alternative: Railway

Both frontend and backend can be deployed on Railway:

1. **Backend**
   - Create new service from GitHub
   - Set root directory: `backend`
   - Add environment variables

2. **Frontend**
   - Create new service from GitHub
   - Set root directory: `frontend`
   - Add environment variables

## 🛠️ Development

### Available Scripts

**Root:**
- `npm run dev` - Start both frontend and backend in development
- `npm run install:all` - Install dependencies for all packages
- `npm run build` - Build the frontend for production

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

**Frontend:**
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Adding New Features

1. **Backend**: Add new Socket.IO events in `backend/src/index.js`
2. **Frontend**: Add corresponding event handlers in `frontend/src/App.tsx`
3. **Types**: Update `frontend/src/types.ts` for new data structures

## 🎨 Customization

### Styling
- Modify `frontend/tailwind.config.js` for theme changes
- Update CSS in `frontend/src/index.css` for global styles

### Game Rules
- Adjust `maxRounds` in `backend/src/gameManager.js`
- Modify scoring logic in the `selectSymbol` method

### Symbols
- Update the symbols array in `backend/src/dobbleDeck.js`
- Ensure you have enough symbols for the deck size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Original Dobble game by Asmodee
- Socket.IO for real-time communication
- Framer Motion for animations
- Tailwind CSS for styling

## 🐛 Troubleshooting

### Common Issues

1. **Socket connection failed**
   - Check if backend server is running
   - Verify `VITE_BACKEND_URL` environment variable

2. **Room not found**
   - Ensure room code is exactly 6 characters
   - Check if room is still active

3. **Build errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

### Support

For issues and questions, please open an issue on GitHub. 