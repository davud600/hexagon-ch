import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hexagon Chess',
  description: 'Innovative chess application',
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div>Profile layout</div>
      {children}
    </main>
  )
}
