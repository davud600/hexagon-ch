import { type Socket } from 'socket.io'

import { type UserData } from './user'

export type SocketEvent = Function

export type SocketWithUserData = UserData & Socket
