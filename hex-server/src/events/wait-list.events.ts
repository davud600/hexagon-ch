import { STARTING_BOARD_FEN } from '../constants/games/board'
import { RoomEvents } from '../constants/sockets/room-events'
import { WaitListEvents as WaitListEventsEnum } from '../constants/sockets/wait-list-events'
import { io } from '../server'
import { GamesService } from '../services/games.service'
import { RoomsService } from '../services/rooms.service'
import { WaitListService } from '../services/wait-list.service'
import { type GameSettings } from '../types/sockets/games'
import { getRandomNumberByRange } from '../utils'

export function WaitListEvents() {
  io.on(WaitListEventsEnum.JoinWaitList, (socket, data) => {
    const { gameSettings } = data as { gameSettings: GameSettings }

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
      status: 'waiting',
      roomId: room.id,
      boardFen: STARTING_BOARD_FEN,
      player1: {
        socketId: socket.id,
        color: 'white',
        totalScore: 0,
        joined: false,
        timeLeft: gameSettings.time,
      },
      player2: {
        socketId: randomSocketOpponent.id,
        color: 'black',
        totalScore: 0,
        joined: false,
        timeLeft: gameSettings.time,
      },
    })

    if (game instanceof Error) throw new Error(game.message)

    // when client listens to 'inviteToRoom' redirect to /room/:roomid
    // when opening link /room/:roomId emit joinRoom event
    io.to(socket.id).emit(RoomEvents.Invite, {
      game,
      room,
    })
    io.to(randomSocketOpponent.id).emit(RoomEvents.Invite, {
      game,
      room,
    })
  })
}
