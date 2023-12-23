import { STARTING_BOARD_FEN } from '../constants/games/board'
import { io } from '../server'
import { GamesService } from '../services/games.service'
import { RoomsService } from '../services/rooms.service'
import { WaitListService } from '../services/wait-list.service'
import { getRandomNumberByRange } from '../utils'

export function WaitListEvents() {
  io.on('joinWaitList', (socket) => {
    const socketsInWaitList = WaitListService.getAllSockets()

    const randomSocketOpponent =
      socketsInWaitList[getRandomNumberByRange(0, socketsInWaitList.length)]

    if (socketsInWaitList.length <= 1 || socket.id === randomSocketOpponent.id)
      return WaitListService.addSocket(socket)

    // create room
    const room = RoomsService.create({
      players: [socket, randomSocketOpponent],
    })

    if (room instanceof Error) throw new Error(room.message)

    // create game
    const game = GamesService.create({
      boardFen: STARTING_BOARD_FEN,
      player1: {
        color: 'white',
        totalScore: 0,
        joined: false,
      },
      player2: {
        color: 'black',
        totalScore: 0,
        joined: false,
      },
    })

    if (game instanceof Error) throw new Error(game.message)

    // when client listens to 'inviteToRoom' redirect to /room/:roomid
    io.to(socket.id).emit('inviteToRoom', {
      game,
      room,
    })
    io.to(randomSocketOpponent.id).emit('inviteToRoom', {
      game,
      room,
    })
  })
}
