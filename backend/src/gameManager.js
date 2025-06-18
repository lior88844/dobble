import { DobbleDeck } from './dobbleDeck.js';

export class GameManager {
  constructor() {
    this.rooms = new Map();
    this.playerToRoom = new Map();
  }

  createRoom(hostId, hostName) {
    const roomCode = this.generateRoomCode();
    const host = {
      id: hostId,
      name: hostName,
      isHost: true,
      score: 0
    };

    const room = {
      code: roomCode,
      host: hostId,
      players: [host],
      gameState: 'waiting',
      deck: null,
      currentCard: null,
      round: 0,
      maxRounds: 999
    };

    this.rooms.set(roomCode, room);
    this.playerToRoom.set(hostId, roomCode);

    return {
      roomCode,
      host,
      players: [host]
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

  startGame(roomCode) {
    const room = this.rooms.get(roomCode);
    
    if (!room) {
      return { success: false, message: 'Room not found' };
    }

    if (room.players.length < 2) {
      return { success: false, message: 'Need at least 2 players to start' };
    }

    // Generate Dobble deck
    const deck = new DobbleDeck();
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

    return {
      success: true,
      centerCard: room.centerCard,
      playerCards: room.playerCards,
      players: room.players,
      round: room.round
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

  nextRound(roomCode) {
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

    return {
      success: true,
      centerCard: room.centerCard,
      playerCards: room.playerCards,
      round: room.round,
      players: room.players
    };
  }

  removePlayer(playerId) {
    const roomCode = this.playerToRoom.get(playerId);
    if (!roomCode) return null;

    const room = this.rooms.get(roomCode);
    if (!room) return null;

    room.players = room.players.filter(p => p.id !== playerId);
    this.playerToRoom.delete(playerId);

    // If no players left, remove the room
    if (room.players.length === 0) {
      this.rooms.delete(roomCode);
      return null;
    }

    // If host left, assign new host
    if (room.host === playerId && room.players.length > 0) {
      room.host = room.players[0].id;
      room.players[0].isHost = true;
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
} 