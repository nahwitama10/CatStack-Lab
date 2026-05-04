import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Minale + Mann | Architecture & Interior Design Studio London',
  description: 'Award winning architectural and interior design studio based in London.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
