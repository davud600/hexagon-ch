import { Game } from '../types/sockets/games'

export function getOpponent(socketId: string, game: Game): string {
  return game.player1.socketId === socketId
    ? game.player2.socketId
    : game.player1.socketId
}
export function getCurrentPlayer(socketId: string, game: Game): string {
  return game.player1.socketId === socketId ? 'player1' : 'player2'
}
