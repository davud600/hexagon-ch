import { SocketsContext } from '@/context/sockets-ctx'
import { type SocketsContextData } from '@/types/sockets/sockets'
import { useContext } from 'react'

export function useSockets() {
  return useContext(SocketsContext) as SocketsContextData
}
