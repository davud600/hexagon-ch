import cors from 'cors'
import express, { type Router } from 'express'
import { createServer } from 'http'
import { Server as SocketServer } from 'socket.io'

import { GamesEvents } from './events/games.events'
import { RoomsEvents } from './events/rooms.events'
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
const events: SocketEvent[] = [WaitListEvents, RoomsEvents, GamesEvents]
events.forEach((event) => {
  event()
})
