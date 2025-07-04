import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { motion, AnimatePresence } from 'framer-motion';
import HomeScreen from './components/HomeScreen';
import GameRoom from './components/GameRoom';
import GamePlay from './components/GamePlay';
import AnimatedPodium from './components/AnimatedPodium';
import { GameState, Player, Card, GameMode, Theme } from './types';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [gameState, setGameState] = useState<GameState>('home');
  const [roomCode, setRoomCode] = useState<string>('');
  const [player, setPlayer] = useState<Player | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [centerCard, setCenterCard] = useState<Card | null>(null);
  const [playerCard, setPlayerCard] = useState<Card | null>(null);
  const [message, setMessage] = useState<string>('');
  const [podium, setPodium] = useState<Player[]>([]);
  const [winner, setWinner] = useState<Player | null>(null);
  const [currentTheme, setCurrentTheme] = useState<Theme>('pokemon');

  useEffect(() => {
    const newSocket = io(BACKEND_URL);
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on('roomCreated', (data) => {
      setRoomCode(data.roomCode);
      setPlayer(data.host);
      setPlayers(data.players);
      setGameState('waiting');
    });

    socket.on('roomJoined', (data) => {
      setRoomCode(data.roomCode);
      setPlayer(data.player);
      setPlayers(data.players);
      setGameState('waiting');
    });

    socket.on('playerJoined', (data) => {
      setPlayers(data.players);
    });

    socket.on('playerLeft', (data) => {
      setPlayers(data.players);
    });

    socket.on('gameStarted', (data) => {
      setCenterCard(data.centerCard);
      setPlayerCard(data.playerCard);
      setPlayers(data.players);
      setGameState('playing');
      if (data.theme) {
        setCurrentTheme(data.theme);
      }
    });

    socket.on('symbolSelected', (data) => {
      setPlayers(data.players);
      setMessage(data.message);

      if (data.gameState === 'finished' && data.winner && data.podium) {
        setPodium(data.podium);
        setWinner(data.winner);
        setGameState('finished');
      }

      if (data.isMatch) {
        setTimeout(() => setMessage(''), 2000);
      }
    });

    socket.on('roundStarted', (data) => {
      setCenterCard(data.centerCard);
      setPlayerCard(data.playerCard);
      setPlayers(data.players);
      setMessage('');
      if (data.theme) {
        setCurrentTheme(data.theme);
      }
    });

    socket.on('error', (data) => {
      setMessage(data.message);
      setTimeout(() => setMessage(''), 3000);
    });

    socket.on('gameEnded', (data) => {
      setPodium(data.podium);
      setWinner(data.winner);
      setPlayers(data.players);
      setGameState('finished');
    });

    return () => {
      socket.off('roomCreated');
      socket.off('roomJoined');
      socket.off('playerJoined');
      socket.off('playerLeft');
      socket.off('gameStarted');
      socket.off('symbolSelected');
      socket.off('roundStarted');
      socket.off('error');
      socket.off('gameEnded');
    };
  }, [socket]);

  const handleCreateRoom = (playerName: string, gameMode: GameMode = 'multiplayer', difficulty: string = 'medium', theme: Theme = 'pokemon') => {
    if (socket) {
      setCurrentTheme(theme);
      socket.emit('createRoom', { playerName, gameMode, difficulty, theme });
    }
  };

  const handleJoinRoom = (roomCode: string, playerName: string, theme: Theme = 'pokemon') => {
    if (socket) {
      setCurrentTheme(theme);
      socket.emit('joinRoom', { roomCode, playerName, theme });
    }
  };

  const handleStartGame = () => {
    if (socket && roomCode) {
      socket.emit('startGame', { roomCode });
    }
  };

  const handleSelectSymbol = (symbolId: number) => {
    if (socket && roomCode) {
      socket.emit('selectSymbol', { roomCode, symbolId });
    }
  };

  const handleNextRound = () => {
    if (socket && roomCode) {
      socket.emit('nextRound', { roomCode });
    }
  };

  const handleBackToHome = () => {
    setGameState('home');
    setRoomCode('');
    setPlayer(null);
    setPlayers([]);
    setCenterCard(null);
    setPlayerCard(null);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-lg shadow-lg px-6 py-3"
          >
            <p className="text-lg font-semibold text-gray-800">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {gameState === 'home' && (
          <HomeScreen
            key="home"
            onCreateRoom={handleCreateRoom}
            onJoinRoom={handleJoinRoom}
          />
        )}

        {gameState === 'waiting' && (
          <GameRoom
            key="waiting"
            roomCode={roomCode}
            player={player}
            players={players}
            onStartGame={handleStartGame}
            onBackToHome={handleBackToHome}
          />
        )}

        {gameState === 'playing' && (
          <GamePlay
            key="playing"
            player={player}
            players={players}
            centerCard={centerCard}
            playerCard={playerCard}
            onSelectSymbol={handleSelectSymbol}
            onNextRound={handleNextRound}
            theme={currentTheme}
          />
        )}

        {gameState === 'finished' && (
          <AnimatedPodium
            key="podium"
            podium={podium}
            winner={winner}
            onBackToHome={handleBackToHome}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App; 