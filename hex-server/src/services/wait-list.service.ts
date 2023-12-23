import { type SocketWithUserData } from '../types/sockets'

const waitListStore = new Map<string, SocketWithUserData>()

export const WaitListService = {
  findSocket: (id: string): SocketWithUserData | Error => {
    try {
      const socket = waitListStore.get(id)

      if (!!!socket) throw new Error('Could not find socket in wait list!')

      return socket
    } catch (error) {
      console.error((error as Error).message)
      return error as Error
    }
  },

  addSocket: (socket: SocketWithUserData): void | Error => {
    try {
      waitListStore.set(socket.id, socket)
    } catch (error) {
      console.error('Failed to add socket to wait list!')
      return new Error('Failed to add socket to wait list!')
    }
  },

  removeSocket: (socketId: string): void | Error => {
    try {
      waitListStore.delete(socketId)
    } catch (error) {
      console.error('Failed to delete waitList!')
      return new Error('Failed to delete waitList!')
    }
  },

  getAllSockets: (): SocketWithUserData[] => {
    return Array.from(waitListStore.values())
  },
}
