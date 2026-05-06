import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Minale + Mann',
  description: 'Get in touch with our London architecture and interior design studio.',
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