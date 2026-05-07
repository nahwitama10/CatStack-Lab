import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'CatStack Lab 🐱 | Fullstack Developer',
    template: '%s | Ibnu.dev',
  },
  description:
    'Fullstack developer specializing in ASP.NET Core, workflow systems, and modern web apps. Featuring projects, experiments, and a touch of cats 🐱.',

  keywords: [
    'Fullstack Developer',
    'ASP.NET Core',
    'Next.js',
    'Web Developer Indonesia',
    'Portfolio',
    'Cat themed website',
  ],

  authors: [{ name: 'Ibnu Nahwitama' }],

  openGraph: {
    title: 'CatStack Lab 🐱',
    description:
      'Fullstack developer portfolio with real-world enterprise experience and modern web projects.',
    url: 'https://portfolio-ibnu.vercel.app/',
    siteName: 'Ibnu.dev',
    images: [
      {
        url: '/og-image.png', // put this in /public
        width: 1200,
        height: 630,
        alt: 'Ibnu.dev Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CatStack Lab 🐱',
    description:
      'Fullstack developer portfolio with modern web projects and backend systems.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
          <main className="max-w-[1200px] mx-auto px-4 pt-[80px]">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}