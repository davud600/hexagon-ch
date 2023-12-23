import { Header } from '@/components/header/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hexagon Chess',
  description: 'Innovative chess application',
}

export default function Tutorial({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-[100vh]">
      <Header />
      {children}
    </main>
  )
}
