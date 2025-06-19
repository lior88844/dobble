import React from 'react';
import { motion } from 'framer-motion';
import { Player, Card } from '../types';

interface GamePlayProps {
  player: Player | null;
  players: Player[];
  centerCard: Card | null;
  playerCard: Card | null;
  onSelectSymbol: (symbolId: number) => void;
  onNextRound: () => void;
}

const GamePlay: React.FC<GamePlayProps> = ({
  player,
  players,
  centerCard,
  playerCard,
  onSelectSymbol,
  onNextRound
}) => {
  const symbols = [
    '🦄', '🐱', '🐶', '🐸', '🐼', '🐨', '🐯', '🦁',
    '🐮', '🐷', '🐸', '🐙', '🦑', '🦐', '🦞', '🦀',
    '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊',
    '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏',
    '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🐐',
    '🦌', '🐕', '🐩', '🐈', '🐓', '🦃', '🦚', '🦜',
    '🦢', '🦩', '🕊️', '🦅', '🦆', '🦉', '🦇', '🐺',
    '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞'
  ];

  const isHost = player?.isHost;

  const handleSymbolClick = (symbolId: number) => {
    onSelectSymbol(symbolId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-4"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Scoreboard - left column on desktop */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/3 mb-8 lg:mb-0"
          >
            <h2 className="text-xl font-bold text-white mb-3">Scoreboard</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                {(players ?? [])
                  .sort((a, b) => b.score - a.score)
                  .map((p, index) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`text-center p-3 rounded-lg ${
                        p.id === player?.id
                          ? 'bg-blue-500/20 border-2 border-blue-400'
                          : 'bg-white/10'
                      }`}
                    >
                      <div className="text-2xl mb-1">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '👤'}
                      </div>
                      <p className="font-semibold text-white text-sm truncate">{p.name}</p>
                      <p className="text-2xl font-bold text-yellow-400">{p.score}</p>
                      {p.isHost && (
                        <span className="text-xs bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full">
                          Host
                        </span>
                      )}
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>

          {/* Game area - right column on desktop */}
          <div className="flex-1 flex flex-col items-center">
            {/* Center Card on top */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8 w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Center Card
              </h3>
              {centerCard && (
                <div className="grid grid-cols-4 gap-3">
                  {centerCard.symbols.map((symbolId, index) => (
                    <motion.div
                      key={index}
                      className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-4xl border-2 border-transparent"
                    >
                      {symbols[symbolId] || '❓'}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
            {/* Player Card below */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Your Card
              </h3>
              {playerCard && (
                <div className="grid grid-cols-4 gap-3">
                  {playerCard.symbols.map((symbolId, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center text-4xl cursor-pointer border-2 border-transparent hover:border-green-300 transition-all duration-200"
                      onClick={() => handleSymbolClick(symbolId)}
                    >
                      {symbols[symbolId] || '❓'}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Instructions */}
            {/* (Removed instructions as requested) */}

            {/* Next Round Button (Host Only) */}
            {isHost && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-center w-full max-w-md"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onNextRound}
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-200"
                >
                  Next Round
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GamePlay; 