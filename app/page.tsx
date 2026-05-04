import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import ServicesSection from '@/components/ServicesSection'
import PortfolioGrid from '@/components/PortfolioGrid'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <ServicesSection />
        <PortfolioGrid />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
