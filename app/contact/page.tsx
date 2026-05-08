import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | CatStack Lab 🐱',
  description: 'Get in touch with Ibnu Nahwitama — fullstack developer based in Indonesia.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}