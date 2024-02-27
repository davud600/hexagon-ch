import { type SocketWithUserData } from '../types/sockets'
import { getRandomNumberByRange } from './index'

export function getRandomOpponentFromWaitlist(
  socket: SocketWithUserData,
  socketsInWaitList: any[],
  depth = 0,
  maxDepth = 5
): SocketWithUserData | void {
  if (depth >= maxDepth) return

  const randomSocketOpponent =
    socketsInWaitList[getRandomNumberByRange(0, socketsInWaitList.length)]

  if (socket.id === randomSocketOpponent.id)
    return getRandomOpponentFromWaitlist(
      socket,
      socketsInWaitList,
      depth + 1,
      maxDepth
    )

  return randomSocketOpponent
}
