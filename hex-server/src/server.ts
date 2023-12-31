import cors from 'cors'
import express, { type Router } from 'express'
import { createServer } from 'http'
import { Server as SocketServer } from 'socket.io'

import { GameEvents } from './events/game.events'
import { RoomEvents } from './events/room.events'
import { UserEvents } from './events/user.events'
import { WaitListEvents } from './events/wait-list.events'
import { type SocketEvent } from './types/sockets'
import { CORS_ORIGIN } from './utils/env'

// Express app and socket server
export const app = express()
export const server = createServer(app)
export const io = new SocketServer(server, {
  cors: {
    origin: CORS_ORIGIN,
    methods: ['GET', 'POST'],
  },
})

app.use(express.json())
app.use(
  cors({
    origin: CORS_ORIGIN,
  })
)

// Init routes and api's
const routes: Router[] = []
routes.forEach((route) => {
  app.use(route)
})

// Init Socket events
const events: SocketEvent[] = [
  UserEvents,
  WaitListEvents,
  RoomEvents,
  GameEvents,
]
events.forEach((event) => {
  event()
})
