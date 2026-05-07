import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhatIDo from '@/components/WhatIDo'
import ProjectsSection from '@/components/ProjectsSection'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CatStack Lab 🐱 | Fullstack Developer',
  description: 'Fullstack developer specializing in ASP.NET Core, Next.js, and modern web apps. With a touch of cats.',
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}