import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioFilteredGrid from '@/components/portfolio/PortfolioFilteredGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Minale + Mann',
  description: 'Selected works across residential, commercial, and conservation architecture and interior design.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHero />
        <PortfolioFilteredGrid />
      </main>
      <Footer />
    </>
  )
}