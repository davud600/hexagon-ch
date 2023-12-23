import { type User } from '../user'

export type RoomData = {
  players: [User, User]
}

export type Room = {
  id: string
} & RoomData
