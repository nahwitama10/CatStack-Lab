'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    category: 'Architectural Design',
    subcategory: 'Residential',
    headline: 'The most important\nmaterial is light.',
    cta: { label: 'View Residential', href: '/residential-architects' },
    bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80&auto=format',
  },
  {
    id: 2,
    category: 'Interior Design',
    subcategory: 'Commercial',
    headline: 'Design is about\na way of living.',
    cta: { label: 'View Commercial', href: '/commercial-interior-designers' },
    bg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80&auto=format',
  },
  {
    id: 3,
    category: 'Conservation & Heritage',
    subcategory: 'Residential',
    headline: 'Transforming heritage\nwith purpose.',
    cta: { label: 'View Projects', href: '/conservation-architects' },
    bg: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=80&auto=format',
  },
  {
    id: 4,
    category: 'Create & Construct',
    subcategory: 'Residential',
    headline: 'Elevating the\nordinary.',
    cta: { label: 'View Projects', href: '/residential-architectural-design-services' },
    bg: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1800&q=80&auto=format',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [progress, setProgress] = useState(0)

  const SLIDE_DURATION = 6000

  const goTo = useCallback((index: number, dir: 'next' | 'prev' = 'next') => {
    if (isTransitioning) return
    setDirection(dir)
    setPrev(current)
    setIsTransitioning(true)
    setCurrent(index)
    setProgress(0)
    setTimeout(() => {
      setPrev(null)
      setIsTransitioning(false)
    }, 900)
  }, [current, isTransitioning])

  const next = useCallback(() => goTo((current + 1) % slides.length, 'next'), [current, goTo])
  const goBack = useCallback(() => goTo((current - 1 + slides.length) % slides.length, 'prev'), [current, goTo])

  useEffect(() => {
    const interval = setInterval(next, SLIDE_DURATION)
    return () => clearInterval(interval)
  }, [next])

  useEffect(() => {
    let raf: number
    let start: number
    const animate = (ts: number) => {
      if (!start) start = ts
      const elapsed = ts - start
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100))
      raf = requestAnimationFrame(animate)
    }
    setProgress(0)
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [current])

  const slide = slides[current]

  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#0a0a0a' }}>

      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          style={{
            position: 'absolute', inset: 0,
            opacity: i === current ? 1 : i === prev ? 0 : 0,
            transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: i === current ? 2 : i === prev ? 1 : 0,
          }}
        >
          {/* Background image */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${s.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: i === current ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }} />
          {/* Dark gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.3) 60%, rgba(10,10,10,0.1) 100%)',
          }} />
        </div>
      ))}

      {/* Content */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(40px, 8vw, 100px)',
        paddingBottom: 'clamp(60px, 10vw, 120px)',
      }}>

        {/* Category label */}
        <div
          key={`cat-${current}`}
          style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            marginBottom: '24px',
            animation: 'slideUpFade 0.6s ease forwards',
          }}
        >
          <span style={{
            display: 'inline-block', width: '32px', height: '1px',
            background: 'var(--color-accent)',
          }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            fontWeight: 400,
          }}>
            {slide.category} — {slide.subcategory}
          </span>
        </div>

        {/* Headline */}
        <h1
          key={`h1-${current}`}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: 'var(--color-white)',
            whiteSpace: 'pre-line',
            maxWidth: '700px',
            marginBottom: '40px',
            animation: 'slideUpFade 0.7s 0.1s ease both',
          }}
        >
          {slide.headline}
        </h1>

        {/* CTA */}
        <div
          key={`cta-${current}`}
          style={{ animation: 'slideUpFade 0.7s 0.2s ease both' }}
        >
          <Link
            href={slide.cta.href}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '14px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-white)',
              borderBottom: '1px solid rgba(245,244,240,0.3)',
              paddingBottom: '4px',
              transition: 'border-color 0.3s, gap 0.3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-white)'; (e.currentTarget as HTMLElement).style.gap = '22px' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,244,240,0.3)'; (e.currentTarget as HTMLElement).style.gap = '14px' }}
          >
            {slide.cta.label}
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path d="M1 5h16M13 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Slide counter + navigation */}
      <div style={{
        position: 'absolute', right: 'clamp(24px, 5vw, 60px)', bottom: 'clamp(40px, 8vw, 80px)',
        zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px',
      }}>
        {/* Counter */}
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.14em', color: 'var(--color-warm-grey)', display: 'flex', gap: '6px' }}>
          <span style={{ color: 'var(--color-white)' }}>0{current + 1}</span>
          <span>/</span>
          <span>0{slides.length}</span>
        </div>

        {/* Arrow buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {[{ fn: goBack, d: 'M11 1L5 5l6 4', label: 'Previous' }, { fn: next, d: 'M7 1l6 4-6 4', label: 'Next' }].map(({ fn, d, label }) => (
            <button
              key={label}
              onClick={fn}
              aria-label={label}
              style={{
                width: '44px', height: '44px',
                border: '1px solid rgba(200,196,188,0.25)',
                background: 'rgba(10,10,10,0.4)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--color-white)',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,196,188,0.7)'; (e.currentTarget as HTMLElement).style.background = 'rgba(200,196,188,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,196,188,0.25)'; (e.currentTarget as HTMLElement).style.background = 'rgba(10,10,10,0.4)' }}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d={d} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{
        position: 'absolute', bottom: 'clamp(40px, 8vw, 80px)', left: '50%',
        transform: 'translateX(-50%)', zIndex: 10,
        display: 'flex', gap: '8px', alignItems: 'center',
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? '28px' : '6px',
              height: '2px',
              background: i === current ? 'var(--color-white)' : 'rgba(200,196,188,0.4)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.4s, background 0.3s',
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, zIndex: 10,
        height: '2px', background: 'rgba(200,196,188,0.15)', width: '100%',
      }}>
        <div style={{
          height: '100%',
          background: 'var(--color-accent)',
          width: `${progress}%`,
          transition: 'width 0.1s linear',
        }} />
      </div>

      {/* Design Matters tag */}
      <div style={{
        position: 'absolute', top: 'calc(var(--nav-height) + 32px)', right: 'clamp(24px, 5vw, 60px)',
        zIndex: 10,
        display: 'flex', alignItems: 'center', gap: '10px',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.6rem',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'var(--color-mid-grey)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
        }}>
          Design Matters
        </span>
        <span style={{ width: '1px', height: '40px', background: 'var(--color-mid-grey)', opacity: 0.4 }} />
      </div>

      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </section>
  )
}