import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '../types';

interface GameRoomProps {
  roomCode: string;
  player: Player | null;
  players: Player[];
  onStartGame: () => void;
  onBackToHome: () => void;
}

const GameRoom: React.FC<GameRoomProps> = ({
  roomCode,
  player,
  players,
  onStartGame,
  onBackToHome
}) => {
  const isHost = player?.isHost;
  const canStart = players.length >= 2;

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Waiting Room</h1>
          <p className="text-xl text-white/80">Share the code with friends!</p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8"
        >
          {/* Room Code Section */}
          <div className="text-center mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-2">Room Code</h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-gray-100 rounded-lg px-6 py-3 cursor-pointer"
              onClick={copyRoomCode}
            >
              <span className="text-3xl font-mono font-bold text-gray-800 mr-3">
                {roomCode}
              </span>
              <span className="text-gray-500">📋</span>
            </motion.div>
            <p className="text-sm text-gray-500 mt-2">Click to copy</p>
          </div>

          {/* Players List */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Players ({players.length}/8)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {players.map((p, index) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center p-3 rounded-lg ${
                    p.isHost ? 'bg-yellow-50 border-2 border-yellow-200' : 'bg-gray-50'
                  }`}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {p.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">
                      {p.name}
                      {p.isHost && (
                        <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
                          Host
                        </span>
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBackToHome}
              className="flex-1 bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
              Leave Room
            </motion.button>

            {isHost && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartGame}
                disabled={!canStart}
                className={`flex-1 font-semibold py-3 px-6 rounded-lg transition-all duration-200 ${
                  canStart
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {canStart ? 'Start Game' : 'Need 2+ Players'}
              </motion.button>
            )}

            {!isHost && (
              <div className="flex-1 bg-blue-50 text-blue-800 font-semibold py-3 px-6 rounded-lg text-center">
                Waiting for host to start...
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">How to play:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Each player gets a card with 8 symbols</li>
              <li>• Find the matching symbol between your card and the host's card</li>
              <li>• Click on the matching symbol to score points</li>
              <li>• First to find the match gets the point!</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GameRoom; 