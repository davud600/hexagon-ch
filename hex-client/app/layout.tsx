import { SocketsProvider } from '@/context/sockets-ctx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hexagon Chess',
  description: 'Innovative chess application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocketsProvider>{children}</SocketsProvider>
      </body>
    </html>
  )
}
