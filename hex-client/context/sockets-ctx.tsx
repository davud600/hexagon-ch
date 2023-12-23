'use client'

import { type SocketsContextData } from '@/types/sockets/sockets'
import { type ReactNode, createContext, useEffect, useState } from 'react'
import io, { type Socket } from 'socket.io-client'

const HEX_SERVER_URL = 'http://localhost:3000'

export const SocketsContext = createContext<SocketsContextData | undefined>(
  undefined
)

export function SocketsProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const socketInitializer = async () => {
      const socket = io(HEX_SERVER_URL)
      setSocket(socket)

      socket.on('connect', () => {
        console.log('connected')
      })
    }

    socketInitializer()
  }, [])

  const value = {
    socket,
  }

  return (
    <SocketsContext.Provider value={value}>{children}</SocketsContext.Provider>
  )
}
