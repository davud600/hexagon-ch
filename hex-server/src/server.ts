import { CORS_ORIGIN } from '@utils/env'
import cors from 'cors'
import express, { type Router } from 'express'

// Create express server
const server = express()

server.use(express.json())
server.use(
  cors({
    origin: CORS_ORIGIN,
  })
)

// Init routes and api's
const routes: Router[] = []
routes.forEach((route) => {
  server.use(route)
})

export default server
