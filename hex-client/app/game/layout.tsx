import { Header } from '@/components/header/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hexagon Chess',
  description: 'Innovative chess application',
}

export default function Game({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-full">
      <Header />
      {children}
    </main>
  )
}
