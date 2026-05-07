'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const roles = ['Fullstack Developer', 'ASP.NET Core Enjoyer', 'Cat Enthusiast 🐱', 'Next.js Builder', 'API Architect']

// Inline SVG cat illustration
function CatIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <ellipse cx="100" cy="140" rx="55" ry="48" fill="#F97316" />
      {/* Head */}
      <circle cx="100" cy="82" r="46" fill="#F97316" />
      {/* Left ear */}
      <polygon points="62,48 50,20 80,42" fill="#F97316" />
      <polygon points="64,46 55,28 76,43" fill="#FB7185" />
      {/* Right ear */}
      <polygon points="138,48 150,20 120,42" fill="#F97316" />
      <polygon points="136,46 145,28 124,43" fill="#FB7185" />
      {/* Face - eyes */}
      <ellipse cx="84" cy="80" rx="10" ry="12" fill="#1C1917" className="animate-blink" />
      <ellipse cx="116" cy="80" rx="10" ry="12" fill="#1C1917" className="animate-blink" />
      <circle cx="87" cy="76" r="3" fill="white" />
      <circle cx="119" cy="76" r="3" fill="white" />
      {/* Nose */}
      <ellipse cx="100" cy="94" rx="5" ry="3.5" fill="#FB7185" />
      {/* Mouth */}
      <path d="M96 97 Q100 102 104 97" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Whiskers left */}
      <line x1="56" y1="90" x2="88" y2="94" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="54" y1="96" x2="87" y2="97" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="58" y1="102" x2="88" y2="100" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Whiskers right */}
      <line x1="144" y1="90" x2="112" y2="94" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="146" y1="96" x2="113" y2="97" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="142" y1="102" x2="112" y2="100" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Belly */}
      <ellipse cx="100" cy="148" rx="32" ry="30" fill="#FED7AA" />
      {/* Paws */}
      <ellipse cx="65" cy="180" rx="16" ry="10" fill="#F97316" />
      <ellipse cx="135" cy="180" rx="16" ry="10" fill="#F97316" />
      <ellipse cx="65" cy="181" rx="12" ry="7" fill="#FED7AA" />
      <ellipse cx="135" cy="181" rx="12" ry="7" fill="#FED7AA" />
      {/* Tail */}
      <path d="M152 155 Q180 130 170 100 Q162 75 155 90" stroke="#F97316" strokeWidth="14" strokeLinecap="round" fill="none" className="animate-tailWag" style={{ transformOrigin: '152px 155px' }} />
      {/* Laptop */}
      <rect x="52" y="166" width="96" height="6" rx="3" fill="#1C1917" opacity="0.8" />
      <rect x="58" y="148" width="84" height="20" rx="4" fill="#0D9488" />
      <text x="100" y="162" textAnchor="middle" fill="#CCFBF1" fontSize="8" fontFamily="monospace" fontWeight="bold">{'</>'}</text>
    </svg>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length)
        setVisible(true)
      }, 300)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-cat-cream overflow-hidden flex items-center"
      style={{ paddingTop: 'var(--nav-height)', fontFamily: 'var(--font-body)' }}>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large orange blob */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cat-orange/10 rounded-full blur-3xl" />
        {/* Teal blob */}
        <div className="absolute bottom-0 -left-24 w-80 h-80 bg-cat-teal/10 rounded-full blur-3xl" />
        {/* Yellow accent */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-cat-yellow/20 rounded-full blur-2xl" />
        {/* Floating paw prints */}
        {['top-20 left-12', 'top-40 right-32', 'bottom-32 left-1/3', 'top-1/2 right-12'].map((pos, i) => (
          <div key={i} className={`absolute ${pos} text-cat-orange/15 text-4xl select-none`}
            style={{ animation: `float ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.7}s` }}>
            🐾
          </div>
        ))}
        {/* Grid dots */}
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cat-teal/10 border border-cat-teal/20 rounded-full animate-slideUp">
              <span className="w-2 h-2 bg-cat-teal rounded-full animate-purr" />
              <span className="text-cat-teal text-sm font-semibold tracking-wide">Available for hire</span>
            </div>

            {/* Heading */}
            <div className="animate-slideUp" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-cat-dark leading-tight">
                Ibnu
                <span className="text-cat-orange italic"> Nahwitama</span>
              </h1>
              <div className="mt-3 h-12 flex items-center">
                <p className={`font-body text-xl lg:text-2xl font-medium text-cat-grey transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  {roles[roleIndex]}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-cat-grey text-lg leading-relaxed max-w-lg animate-slideUp"
              style={{ animationDelay: '0.2s', opacity: 0 }}>
              I build enterprise-grade web systems and modern frontends — powered by{' '}
              <span className="text-cat-orange font-semibold">ASP.NET Core</span>,{' '}
              <span className="text-cat-teal font-semibold">Next.js</span>, and an unreasonable love for cats 🐱.
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 animate-slideUp" style={{ animationDelay: '0.3s', opacity: 0 }}>
              {[
                { label: 'ASP.NET Core', color: 'bg-cat-teal/10 text-cat-teal border-cat-teal/20' },
                { label: 'Next.js', color: 'bg-cat-dark/10 text-cat-dark border-cat-dark/20' },
                { label: 'TypeScript', color: 'bg-blue-50 text-blue-600 border-blue-200' },
                { label: 'PostgreSQL', color: 'bg-cat-orange/10 text-cat-orange border-cat-orange/20' },
                { label: 'Docker', color: 'bg-sky-50 text-sky-600 border-sky-200' },
                { label: 'Tailwind CSS', color: 'bg-cyan-50 text-cyan-600 border-cyan-200' },
              ].map(tech => (
                <span key={tech.label} className={`tag-pill border ${tech.color}`}>{tech.label}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-slideUp" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <Link href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cat-orange text-white rounded-full font-bold text-base shadow-cat hover:shadow-cat-lg hover:-translate-y-1 hover:bg-orange-600 transition-all duration-200"
              >
                View Projects 🛠️
              </Link>
              <Link href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-cat-orange/30 text-cat-orange rounded-full font-bold text-base hover:border-cat-orange hover:bg-cat-orange/5 hover:-translate-y-1 transition-all duration-200"
              >
                About Me 😺
              </Link>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 animate-slideUp" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <span className="text-sm text-cat-mid-grey font-medium">Find me on:</span>
              {[
                { label: 'GitHub', href: 'https://github.com/nahwitama10', icon: '⌨️' },
                { label: 'LinkedIn', href: '#', icon: '💼' },
                { label: 'Email', href: '/contact', icon: '📬' },
              ].map(s => (
                <a key={s.label} href={s.href}
                  className="flex items-center gap-1.5 text-sm font-semibold text-cat-grey hover:text-cat-orange transition-colors"
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: cat illustration */}
          <div className="flex justify-center lg:justify-end animate-slideUp" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-cat-orange/20 rounded-full blur-3xl scale-90" />
              {/* Cat SVG */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
                <CatIllustration />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -left-8 bg-white rounded-cat shadow-cat px-3 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-lg">⚡</span>
                <div>
                  <div className="text-xs font-bold text-cat-dark">Fast APIs</div>
                  <div className="text-xs text-cat-mid-grey">ASP.NET Core</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-6 bg-cat-teal text-white rounded-cat shadow-teal px-3 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-lg">🚀</span>
                <div>
                  <div className="text-xs font-bold">Ships fast</div>
                  <div className="text-xs opacity-80">Next.js + Vercel</div>
                </div>
              </div>
              <div className="absolute top-1/2 -right-10 bg-cat-yellow rounded-cat shadow-cat px-3 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-lg">🐱</span>
                <div className="text-xs font-bold text-cat-dark">Cat approved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs font-semibold text-cat-mid-grey tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-cat-orange/40 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-cat-orange/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}