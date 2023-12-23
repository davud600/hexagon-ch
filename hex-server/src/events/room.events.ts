import { GameEvents } from '../constants/sockets/game-events'
import { RoomEvents as RoomEventsEnum } from '../constants/sockets/room-events'
import { io } from '../server'
import { type Game } from '../types/sockets/games'
import { type Room } from '../types/sockets/rooms'

export function RoomEvents() {
  // when client is redirected to /room/:roomId
  io.on(RoomEventsEnum.JoinRoom, (socket, data) => {
    const { room, game } = data as { room: Room; game: Game }

    console.log(`${socket} has joined the room: ${room.id}`)

    io.emit(GameEvents.Join, { socket, game, room })
  })
}
