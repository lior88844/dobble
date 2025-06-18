export type GameState = 'home' | 'waiting' | 'playing' | 'finished';

export interface Player {
  id: string;
  name: string;
  isHost: boolean;
  score: number;
}

export interface Card {
  id: number;
  symbols: number[];
}

export interface GameData {
  roomCode: string;
  players: Player[];
  centerCard: Card | null;
  playerCard: Card | null;
  round: number;
  gameState: GameState;
}

export interface SocketEvents {
  roomCreated: (data: { roomCode: string; host: Player; players: Player[] }) => void;
  roomJoined: (data: { roomCode: string; player: Player; players: Player[] }) => void;
  playerJoined: (data: { player: Player; players: Player[] }) => void;
  playerLeft: (data: { playerId: string; players: Player[] }) => void;
  gameStarted: (data: { centerCard: Card; playerCard: Card; players: Player[]; round: number }) => void;
  symbolSelected: (data: { isMatch: boolean; symbolId: number; player: Player; players: Player[]; message: string; gameState?: string; winner?: Player; podium?: Player[] }) => void;
  roundStarted: (data: { centerCard: Card; playerCard: Card; players: Player[]; round: number }) => void;
  gameEnded: (data: { winner: Player; podium: Player[]; players: Player[] }) => void;
  error: (data: { message: string }) => void;
} 