import { io } from '../server'
import { type GameData } from '../types/sockets/games'

export function GamesEvents() {
  io.on('start', (socket) => {
    console.log(`Game has started`)
  })

  io.on('playerMakeMove', (socket, data) => {
    const { gameData } = data as {
      gameData: GameData
    }

    // io.to(gameData.opponentSocketId).emit('newGameMove')
  })
}
