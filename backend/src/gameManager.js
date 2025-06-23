import { DobbleDeck } from './dobbleDeck.js';
import { ComputerPlayer } from './computerPlayer.js';

export class GameManager {
  constructor() {
    this.rooms = new Map();
    this.playerToRoom = new Map();
    this.computerTimers = new Map(); // Track computer move timers
  }

  createRoom(hostId, hostName, gameMode = 'multiplayer', difficulty = 'medium', theme = 'pokemon') {
    const roomCode = this.generateRoomCode();
    const host = {
      id: hostId,
      name: hostName,
      isHost: true,
      score: 0
    };

    const players = [host];
    const computerNames = ['Bot Alpha'];

    // If single player mode, add computer opponent
    if (gameMode === 'singleplayer') {
      const computer = new ComputerPlayer(
        'computer_0',
        computerNames[0],
        difficulty
      );
      players.push({
        id: computer.id,
        name: computer.name,
        isHost: false,
        score: 0,
        isComputer: true
      });
    }

    const room = {
      code: roomCode,
      host: hostId,
      players: players,
      gameState: 'waiting',
      gameMode: gameMode,
      difficulty: difficulty,
      theme: theme,
      deck: null,
      currentCard: null,
      round: 0,
      maxRounds: 999,
      computerPlayers: gameMode === 'singleplayer' ? new Map() : null
    };

    // Initialize computer players for single player mode
    if (gameMode === 'singleplayer') {
      const computer = new ComputerPlayer('computer_0', computerNames[0], difficulty);
      room.computerPlayers.set('computer_0', computer);
    }

    this.rooms.set(roomCode, room);
    this.playerToRoom.set(hostId, roomCode);

    return {
      roomCode,
      host,
      players: players,
      gameMode,
      theme
    };
  }

  joinRoom(roomCode, playerId, playerName) {
    const room = this.rooms.get(roomCode);
    
    if (!room) {
      return { success: false, message: 'Room not found' };
    }

    if (room.gameState !== 'waiting') {
      return { success: false, message: 'Game already in progress' };
    }

    if (room.players.length >= 8) {
      return { success: false, message: 'Room is full' };
    }

    const player = {
      id: playerId,
      name: playerName,
      isHost: false,
      score: 0
    };

    room.players.push(player);
    this.playerToRoom.set(playerId, roomCode);

    return {
      success: true,
      player,
      players: room.players,
      roomCode
    };
  }

  startGame(roomCode, io = null) {
    const room = this.rooms.get(roomCode);
    
    if (!room) {
      return { success: false, message: 'Room not found' };
    }

    if (room.players.length < 2) {
      return { success: false, message: 'Need at least 2 players to start' };
    }

    // Generate Dobble deck with the selected theme
    const deck = new DobbleDeck(room.theme);
    room.deck = deck.generateDeck();
    room.gameState = 'playing';
    room.round = 1;
    // Assign cards
    room.centerCard = room.deck[0];
    room.playerCards = {};
    room.players.forEach((player, i) => {
      // Assign a different card to each player (not the center card)
      room.playerCards[player.id] = room.deck[(i + 1) % room.deck.length];
    });

    // Reset scores
    room.players.forEach(player => player.score = 0);

    // Start computer players if this is single player mode
    if (room.gameMode === 'singleplayer' && room.computerPlayers && io) {
      this.startComputerPlayers(roomCode, io);
    }

    return {
      success: true,
      centerCard: room.centerCard,
      playerCards: room.playerCards,
      players: room.players,
      round: room.round,
      theme: room.theme
    };
  }

  selectSymbol(roomCode, playerId, symbolId) {
    const room = this.rooms.get(roomCode);
    
    if (!room || room.gameState !== 'playing') {
      return { success: false, message: 'Game not in progress' };
    }

    const player = room.players.find(p => p.id === playerId);
    if (!player) {
      return { success: false, message: 'Player not found' };
    }

    const playerCard = room.playerCards[playerId];
    const centerCard = room.centerCard;
    if (!playerCard || !centerCard) {
      return { success: false, message: 'Cards not found' };
    }

    // Check if the symbol matches between the player's card and the center card
    const isMatch = playerCard.symbols.includes(symbolId) && centerCard.symbols.includes(symbolId);

    if (isMatch) {
      player.score += 1;
      // Check for win condition
      if (player.score >= 20) {
        room.gameState = 'finished';
        // Sort players by score descending
        const sortedPlayers = [...room.players].sort((a, b) => b.score - a.score);
        return {
          success: true,
          isMatch: true,
          symbolId,
          player: player,
          players: sortedPlayers,
          message: `${player.name} wins!`,
          gameState: 'finished',
          winner: sortedPlayers[0],
          podium: sortedPlayers
        };
      }
      return {
        success: true,
        isMatch: true,
        symbolId,
        player: player,
        players: room.players,
        message: `${player.name} found a match!`
      };
    } else {
      return {
        success: true,
        isMatch: false,
        symbolId,
        player: player,
        players: room.players,
        message: 'Wrong symbol!'
      };
    }
  }

  nextRound(roomCode, io = null) {
    const room = this.rooms.get(roomCode);
    
    if (!room || room.gameState !== 'playing') {
      return { success: false, message: 'Game not in progress' };
    }

    room.round += 1;
    
    if (room.round > room.maxRounds) {
      room.gameState = 'finished';
      return {
        success: true,
        gameState: 'finished',
        players: room.players,
        winner: this.getWinner(room.players)
      };
    }

    // Assign new cards for the round
    const cardIndex = (room.round - 1) % room.deck.length;
    room.centerCard = room.deck[cardIndex];
    room.playerCards = {};
    room.players.forEach((player, i) => {
      room.playerCards[player.id] = room.deck[(cardIndex + i + 1) % room.deck.length];
    });

    // If single player mode and game continues, restart computer players
    if (room.gameMode === 'singleplayer' && room.computerPlayers && io) {
      // Clear existing timers
      room.computerPlayers.forEach((computer, computerId) => {
        if (this.computerTimers.has(computerId)) {
          clearTimeout(this.computerTimers.get(computerId));
        }
      });
      // Restart computer players
      this.startComputerPlayers(roomCode, io);
    }

    return {
      success: true,
      centerCard: room.centerCard,
      playerCards: room.playerCards,
      round: room.round,
      players: room.players,
      theme: room.theme
    };
  }

  nextRoundOriginal(roomCode) {
    // This method is no longer needed - keeping for compatibility
    return this.nextRound(roomCode);
  }

  removePlayer(playerId) {
    const roomCode = this.playerToRoom.get(playerId);
    if (!roomCode) return null;

    const room = this.rooms.get(roomCode);
    if (!room) return null;

    // Clear computer timer if it's a computer player
    if (this.computerTimers.has(playerId)) {
      clearTimeout(this.computerTimers.get(playerId));
      this.computerTimers.delete(playerId);
    }

    room.players = room.players.filter(p => p.id !== playerId);
    this.playerToRoom.delete(playerId);

    // If no players left, remove the room and clear all computer timers
    if (room.players.length === 0) {
      if (room.computerPlayers) {
        room.computerPlayers.forEach((computer, computerId) => {
          if (this.computerTimers.has(computerId)) {
            clearTimeout(this.computerTimers.get(computerId));
            this.computerTimers.delete(computerId);
          }
        });
      }
      this.rooms.delete(roomCode);
      return null;
    }

    // If host left, assign new host (but not to computer players)
    if (room.host === playerId && room.players.length > 0) {
      const humanPlayer = room.players.find(p => !p.isComputer);
      if (humanPlayer) {
        room.host = humanPlayer.id;
        humanPlayer.isHost = true;
      }
    }

    return roomCode;
  }

  getRoomPlayers(roomCode) {
    const room = this.rooms.get(roomCode);
    return room ? room.players : [];
  }

  generateRoomCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  getWinner(players) {
    const maxScore = Math.max(...players.map(p => p.score));
    return players.filter(p => p.score === maxScore);
  }

  startComputerPlayers(roomCode, io) {
    const room = this.rooms.get(roomCode);
    if (!room || !room.computerPlayers) return;

    // Start all computer players
    room.computerPlayers.forEach((computer, computerId) => {
      this.scheduleComputerMove(roomCode, computerId, io);
    });
  }

  scheduleComputerMove(roomCode, computerId, io) {
    const room = this.rooms.get(roomCode);
    if (!room || room.gameState !== 'playing') return;

    const computer = room.computerPlayers?.get(computerId);
    const computerCard = room.playerCards[computerId];
    const centerCard = room.centerCard;

    if (!computer || !computerCard || !centerCard) return;

    // Clear any existing timer for this computer
    if (this.computerTimers.has(computerId)) {
      clearTimeout(this.computerTimers.get(computerId));
    }

    // Schedule the computer's move
    computer.makeMove(computerCard, centerCard, (selectedSymbol) => {
      // Check if game is still in progress
      if (room.gameState === 'playing') {
        const result = this.selectSymbol(roomCode, computerId, selectedSymbol);
        if (result.success) {
          // Emit the computer's move to all players in the room
          io.to(roomCode).emit('symbolSelected', result);
          
          // If game is still ongoing, schedule next round for computer players
          if (result.isMatch && !result.gameState) {
            setTimeout(() => {
              const nextRoundResult = this.nextRound(roomCode, io);
              if (nextRoundResult.success && nextRoundResult.gameState !== 'finished') {
                // Send new cards to all human players
                room.players.forEach((player) => {
                  if (!player.isComputer) {
                    io.to(player.id).emit('roundStarted', {
                      centerCard: nextRoundResult.centerCard,
                      playerCard: nextRoundResult.playerCards[player.id],
                      players: nextRoundResult.players,
                      round: nextRoundResult.round
                    });
                  }
                });
                // Restart computer players for the new round
                this.startComputerPlayers(roomCode, io);
              }
            }, 1200); // Same delay as human players
          }
        }
      }
    });
  }
} 