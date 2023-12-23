import crypto from 'crypto'

import { type Room, type RoomData } from '../types/sockets/rooms'

const roomsStore = new Map<string, Room>()

export const RoomsService = {
  get: (id: string): Room | Error => {
    try {
      const room = roomsStore.get(id)

      if (!!!room) throw new Error('Could not find room!')

      return room
    } catch (error) {
      console.error((error as Error).message)
      return error as Error
    }
  },

  create: (data: RoomData): Room | Error => {
    try {
      const uniqueId = crypto.randomBytes(8).toString('hex')
      const room = { id: uniqueId, ...data }

      roomsStore.set(uniqueId, room)

      return room
    } catch (error) {
      console.error('Failed to create room!')
      return new Error('Failed to create room!')
    }
  },

  delete: (id: string): void | Error => {
    try {
      roomsStore.delete(id)
    } catch (error) {
      console.error('Failed to delete rooms!')
      return new Error('Failed to delete rooms!')
    }
  },
}
