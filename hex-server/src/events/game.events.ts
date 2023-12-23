import { type Socket } from 'socket.io'

import { GameEvents as GameEventsEnum } from '../constants/sockets/game-events'
import { io } from '../server'
import { GamesService } from '../services/games.service'
import { type Game, type Move } from '../types/sockets/games'
import { Room } from '../types/sockets/rooms'
import { getOpponent } from '../utils/game'

export function GameEvents() {
  // is emitted by the server
  io.on(GameEventsEnum.Join, (data) => {
    const { socket, game, room } = data as {
      socket: Socket
      game: Game
      room: Room
    }

    console.log(
      `${socket.id} has joined the game: ${game.id}, room: ${room.id}`
    )

    // Check which player joined, update their joined key
    const playerToUpdate =
      socket.id === game.player1.socketId ? 'player1' : 'player2'

    game[playerToUpdate].joined = true

    GamesService.update(game.id, game)

    // If both players have joined, emit start game event and update game status
    if (!game.player1.joined || !game.player2.joined) return

    GamesService.update(game.id, { status: 'on going' })

    io.to([game.player1.socketId, game.player2.socketId]).emit(
      GameEventsEnum.Start
    )
  })

  io.on(GameEventsEnum.PlayerMakeMove, (socket, data) => {
    const { game, room, move } = data as {
      game: Game
      room: Room
      move: Move
    }

    GamesService.update(game.id, { boardFen: move.board })

    // Listen to this event on client side, and simulate the move
    io.to(getOpponent(socket.id, game)).emit(GameEventsEnum.BoardUpdate)
  })
}
