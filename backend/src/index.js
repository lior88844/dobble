import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import { GameManager } from './gameManager.js';

dotenv.config();

// Configure CORS origins - Allow all origins
const allowedOrigins = '*'; // Allow all origins

console.log('CORS Policy: Allowing all origins (*)');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

const gameManager = new GameManager();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join a game room
  socket.on('joinRoom', ({ roomCode, playerName, theme = 'pokemon' }) => {
    try {
      const result = gameManager.joinRoom(roomCode, socket.id, playerName);
      socket.join(roomCode);
      
      if (result.success) {
        socket.emit('roomJoined', result);
        socket.to(roomCode).emit('playerJoined', {
          player: result.player,
          players: result.players
        });
      } else {
        socket.emit('error', { message: result.message });
      }
    } catch (error) {
      socket.emit('error', { message: 'Failed to join room' });
    }
  });

  // Create a new game room
  socket.on('createRoom', ({ playerName, gameMode = 'multiplayer', difficulty = 'medium', theme = 'pokemon' }) => {
    try {
      const result = gameManager.createRoom(socket.id, playerName, gameMode, difficulty, theme);
      socket.join(result.roomCode);
      socket.emit('roomCreated', result);
    } catch (error) {
      socket.emit('error', { message: 'Failed to create room' });
    }
  });

  // Start the game
  socket.on('startGame', ({ roomCode }) => {
    try {
      const result = gameManager.startGame(roomCode, io);
      if (result.success) {
        // Send each player their own card and the center card
        const room = gameManager.rooms.get(roomCode);
        room.players.forEach((player) => {
          // Only send to human players (computer players don't need socket events)
          if (!player.isComputer) {
            io.to(player.id).emit('gameStarted', {
              centerCard: result.centerCard,
              playerCard: result.playerCards[player.id],
              players: result.players,
              round: result.round,
              theme: result.theme
            });
          }
        });
      } else {
        socket.emit('error', { message: result.message });
      }
    } catch (error) {
      socket.emit('error', { message: 'Failed to start game' });
    }
  });

  // Player selects a symbol
  socket.on('selectSymbol', ({ roomCode, symbolId }) => {
    try {
      const result = gameManager.selectSymbol(roomCode, socket.id, symbolId);
      if (result.success) {
        io.to(roomCode).emit('symbolSelected', result);

        // If game finished, announce winner and podium
        if (result.gameState === 'finished') {
          io.to(roomCode).emit('gameEnded', {
            winner: result.winner,
            podium: result.podium,
            players: result.players
          });
          return;
        }

        // If correct match, auto-advance to next round after a short delay
        if (result.isMatch) {
          setTimeout(() => {
            const next = gameManager.nextRound(roomCode, io);
            if (next.success) {
              const room = gameManager.rooms.get(roomCode);
              room.players.forEach((player) => {
                // Only send to human players
                if (!player.isComputer) {
                  io.to(player.id).emit('roundStarted', {
                    centerCard: next.centerCard,
                    playerCard: next.playerCards[player.id],
                    players: next.players,
                    round: next.round,
                    theme: next.theme
                  });
                }
              });
            }
          }, 1200); // 1.2 seconds delay for feedback
        }
      } else {
        socket.emit('error', { message: result.message });
      }
    } catch (error) {
      socket.emit('error', { message: 'Failed to select symbol' });
    }
  });

  // Next round
  socket.on('nextRound', ({ roomCode }) => {
    try {
      const result = gameManager.nextRound(roomCode, io);
      if (result.success) {
        const room = gameManager.rooms.get(roomCode);
        room.players.forEach((player) => {
          // Only send to human players
          if (!player.isComputer) {
            io.to(player.id).emit('roundStarted', {
              centerCard: result.centerCard,
              playerCard: result.playerCards[player.id],
              players: result.players,
              round: result.round,
              theme: result.theme
            });
          }
        });
      } else {
        socket.emit('error', { message: result.message });
      }
    } catch (error) {
      socket.emit('error', { message: 'Failed to start next round' });
    }
  });

  // Disconnect handling
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    const roomCode = gameManager.removePlayer(socket.id);
    if (roomCode) {
      io.to(roomCode).emit('playerLeft', {
        playerId: socket.id,
        players: gameManager.getRoomPlayers(roomCode)
      });
    }
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 