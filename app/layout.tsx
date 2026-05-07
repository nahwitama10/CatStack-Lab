import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CatStack Lab 🐱 | Fullstack Developer',
  description: 'Fullstack developer specializing in ASP.NET Core, Next.js, and modern web apps. With a touch of cats 🐱.',
  keywords: ['Fullstack Developer', 'ASP.NET Core', 'Next.js', 'Web Developer Indonesia', 'Portfolio'],
  authors: [{ name: 'Ibnu Nahwitama' }],
  openGraph: {
    title: 'CatStack Lab 🐱',
    description: 'Fullstack developer portfolio with real-world enterprise experience and modern web projects.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  )
}