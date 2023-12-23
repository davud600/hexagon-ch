import { type Socket } from 'socket.io-client'

export type SocketsContextData = {
  socket: Socket | null
}
