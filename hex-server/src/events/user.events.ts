import { GameEvents } from '../constants/sockets/game-events'
import { UserEvents as UserEventsEnum } from '../constants/sockets/user-events'
import { io } from '../server'
import { GamesService } from '../services/games.service'

export function UserEvents() {
  io.on(UserEventsEnum.Connect, (socket) => {
    console.log(`${socket} has connected`)
  })

  io.on(UserEventsEnum.Disconnect, (socket) => {
    console.log(`${socket} has disconnected`)
  })
}
