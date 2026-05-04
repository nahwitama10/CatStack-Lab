import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutValues from '@/components/about/AboutValues'
import AboutTeam from '@/components/about/AboutTeam'
import AboutAwards from '@/components/about/AboutAwards'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Minale + Mann',
  description: 'We are an award-winning architectural and interior design studio based in London.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <AboutAwards />
      </main>
      <Footer />
    </>
  )
}