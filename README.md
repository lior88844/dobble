# Dobble - Multiplayer Spot It! Game

A real-time multiplayer implementation of the popular Dobble (Spot It!) card game built with React, TypeScript, Node.js, and Socket.IO.

## 🎯 Game Overview

Dobble is a fast-paced card game where players race to find the matching symbol between their card and the host's card. Each card contains 8 symbols, and every pair of cards shares exactly one symbol.

## 🚀 Live Demo

- **Frontend:** [https://dobble-rosy.vercel.app](https://dobble-rosy.vercel.app)
- **Backend:** [https://dobble-eymy.onrender.com](https://dobble-eymy.onrender.com)

## ✨ Features

- **Real-time multiplayer gameplay** with Socket.IO
- **Unique game rooms** with room codes
- **Server-side deck generation** and validation
- **Anti-cheat protection** with server-side game logic
- **Responsive design** with Tailwind CSS
- **Smooth animations** with Framer Motion
- **Auto-advance rounds** after correct matches
- **Win condition** - first to 20 points wins
- **Animated podium** for winners and rankings

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Socket.IO Client** for real-time communication

### Backend
- **Node.js** with Express
- **Socket.IO** for real-time communication
- **Mathematical Dobble deck generation**
- **Game state management**
- **CORS configuration** for cross-origin requests

## 🚀 Deployment

### Backend (Render)

1. **Create a new Web Service on Render**
   - Connect your GitHub repository
   - Set **Build Command:** `cd backend && npm install`
   - Set **Start Command:** `node backend/src/index.js`

2. **Environment Variables:**
   ```
   FRONTEND_URL=https://dobble-rosy.vercel.app
   NODE_ENV=production
   ```

3. **Deploy** - Render will automatically deploy from your main branch

### Frontend (Vercel)

1. **Import your GitHub repository to Vercel**
   - Framework Preset: **Vite**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`

2. **Environment Variables:**
   ```
   VITE_BACKEND_URL=https://dobble-eymy.onrender.com
   ```

3. **Deploy** - Vercel will automatically deploy from your main branch

## 🏃‍♂️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables (Local)

**Backend (.env):**
```
PORT=3001
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

**Frontend (.env):**
```
VITE_BACKEND_URL=http://localhost:3001
```

## 🎮 How to Play

1. **Create or Join a Room**
   - Enter your name and create a new room, or
   - Join an existing room using a room code

2. **Wait for Players**
   - The host can start the game when ready
   - Minimum 2 players required

3. **Find the Match**
   - Each player has a card with 8 symbols
   - There's a center card visible to all players
   - Find the one symbol that appears on both your card and the center card
   - Click the matching symbol on your card

4. **Score Points**
   - Correct matches earn points
   - First player to reach 20 points wins!

## 🔧 Configuration

### CORS Setup
The backend is configured to accept connections from:
- `http://localhost:5173` (local development)
- `https://dobble-rosy.vercel.app` (production frontend)
- Any URL specified in `FRONTEND_URL` environment variable

### Game Settings
- **Winning Score:** 20 points
- **Auto-advance Delay:** 1.2 seconds after correct match
- **Maximum Players:** No limit (practical limit based on performance)
- **Room Code Length:** 6 characters

## 📁 Project Structure

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

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
4. Test thoroughly
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

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is set correctly in Render
   - Check that the frontend URL matches exactly

2. **Socket Connection Failed**
   - Verify `VITE_BACKEND_URL` is set in Vercel
   - Check that the backend is running and accessible

3. **Build Failures**
   - Ensure all TypeScript errors are resolved
   - Check that all dependencies are installed

### Deployment Checklist

- [ ] Backend deployed to Render with correct start command
- [ ] Frontend deployed to Vercel with correct build settings
- [ ] Environment variables set in both services
- [ ] CORS configuration allows frontend domain
- [ ] All TypeScript errors resolved
- [ ] Socket.IO connection working between services

## 🛠️ Development

### Available Scripts

**Root:**
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