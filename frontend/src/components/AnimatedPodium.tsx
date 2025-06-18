import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '../types';

interface AnimatedPodiumProps {
  podium: Player[];
  winner: Player | null;
  onBackToHome: () => void;
}

const trophy = ['🥇', '🥈', '🥉'];

const AnimatedPodium: React.FC<AnimatedPodiumProps> = ({ podium, winner, onBackToHome }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="bg-white rounded-3xl shadow-2xl px-8 py-10 max-w-lg w-full text-center"
      >
        <h1 className="text-4xl font-bold text-purple-700 mb-2">Game Over!</h1>
        {winner && (
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1.1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="mb-4"
          >
            <div className="text-6xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-green-600">{winner.name} Wins!</div>
          </motion.div>
        )}
        <div className="mt-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Final Standings</h2>
          <div className="flex flex-col gap-3 items-center">
            {podium.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className={`flex items-center gap-4 px-6 py-3 rounded-xl shadow-md w-64 ${i === 0 ? 'bg-yellow-100' : i === 1 ? 'bg-gray-100' : 'bg-orange-100'}`}
              >
                <span className="text-3xl">{trophy[i]}</span>
                <span className="flex-1 text-lg font-bold text-gray-800">{p.name}</span>
                <span className="text-xl font-mono text-purple-700">{p.score}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">All Players</h3>
          <div className="grid grid-cols-1 gap-2">
            {podium.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.05 }}
                className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50"
              >
                <span className="font-medium text-gray-800">{p.name}</span>
                <span className="text-purple-700 font-bold">{p.score}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBackToHome}
          className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
        >
          Back to Home
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedPodium; 