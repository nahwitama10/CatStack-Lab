'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const roles = [
  'Fullstack Engineer 🚀',
  'ASP.NET Core Specialist ⚙️',
  'Next.js Frontend Builder 🌐',
  'REST API Architect 🔗',
  'Enterprise Systems Developer 🏢',
]

function CatSVG() {
  return (
    <svg viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Shadow */}
      <ellipse cx="120" cy="248" rx="60" ry="10" fill="rgba(0,0,0,0.08)" />
      {/* Body */}
      <ellipse cx="120" cy="190" rx="62" ry="54" fill="#f97316" />
      {/* Head */}
      <circle cx="120" cy="110" r="52" fill="#f97316" />
      {/* Left ear */}
      <polygon points="76,74 58,36 92,68" fill="#f97316" />
      <polygon points="78,72 64,44 88,67" fill="#fb7185" />
      {/* Right ear */}
      <polygon points="164,74 182,36 148,68" fill="#f97316" />
      <polygon points="162,72 176,44 152,67" fill="#fb7185" />
      {/* Left eye */}
      <ellipse cx="100" cy="106" rx="11" ry="13" fill="#1c1917" />
      <ellipse cx="103" cy="102" rx="3.5" ry="3.5" fill="white" />
      {/* Right eye */}
      <ellipse cx="140" cy="106" rx="11" ry="13" fill="#1c1917" />
      <ellipse cx="143" cy="102" rx="3.5" ry="3.5" fill="white" />
      {/* Nose */}
      <ellipse cx="120" cy="122" rx="5.5" ry="4" fill="#fb7185" />
      {/* Mouth */}
      <path d="M115 126 Q120 132 125 126" stroke="#c2410c" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Whiskers left */}
      <line x1="62" y1="116" x2="106" y2="120" stroke="#78716c" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="60" y1="123" x2="105" y2="123" stroke="#78716c" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="64" y1="130" x2="106" y2="126" stroke="#78716c" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Whiskers right */}
      <line x1="178" y1="116" x2="134" y2="120" stroke="#78716c" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="180" y1="123" x2="135" y2="123" stroke="#78716c" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="176" y1="130" x2="134" y2="126" stroke="#78716c" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Belly */}
      <ellipse cx="120" cy="198" rx="36" ry="34" fill="#fed7aa" />
      {/* Laptop screen */}
      <rect x="72" y="170" width="96" height="58" rx="6" fill="#0d9488" />
      <rect x="76" y="174" width="88" height="50" rx="4" fill="#0f766e" />
      {/* Code on screen */}
      <text x="120" y="195" textAnchor="middle" fill="#ccfbf1" fontSize="10" fontFamily="monospace" fontWeight="bold">{'const cat'}</text>
      <text x="120" y="208" textAnchor="middle" fill="#fcd34d" fontSize="9" fontFamily="monospace">{'= () => 🐱'}</text>
      <text x="120" y="219" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">{'// purr...'}</text>
      {/* Laptop base */}
      <rect x="60" y="226" width="120" height="8" rx="4" fill="#1c1917" />
      {/* Paws */}
      <ellipse cx="78" cy="234" rx="18" ry="11" fill="#f97316" />
      <ellipse cx="78" cy="235" rx="14" ry="8" fill="#fed7aa" />
      <ellipse cx="162" cy="234" rx="18" ry="11" fill="#f97316" />
      <ellipse cx="162" cy="235" rx="14" ry="8" fill="#fed7aa" />
      {/* Tail */}
      <path d="M178 210 Q210 185 200 155 Q192 130 182 148"
        stroke="#f97316" strokeWidth="16" strokeLinecap="round" fill="none"
        style={{ transformOrigin: '178px 210px', animation: 'tailWag 1.2s ease-in-out infinite' }} />
    </svg>
  )
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [show, setShow] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setInterval(() => {
      setShow(false)
      setTimeout(() => { setRoleIdx(i => (i + 1) % roles.length); setShow(true) }, 350)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  const techPills = [
    { label: 'ASP.NET Core', bg: '#f0fdfa', color: '#0d9488', border: '#99f6e4' },
    { label: 'Next.js', bg: '#f5f5f4', color: '#1c1917', border: '#e7e5e4' },
    { label: 'TypeScript', bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
    { label: 'PostgreSQL', bg: '#fff7ed', color: '#ea580c', border: '#fed7aa' },
    { label: 'Docker', bg: '#f0f9ff', color: '#0284c7', border: '#bae6fd' },
    { label: 'Tailwind CSS', bg: '#ecfeff', color: '#0891b2', border: '#a5f3fc' },
  ]

  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--cream)',
      paddingTop: 'var(--nav-height)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Bg blobs */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6 }} />

      {/* Floating paws */}
      {mounted && [
        { pos: { top: '15%', left: '6%' }, delay: '0s', size: '2rem' },
        { pos: { top: '30%', right: '8%' }, delay: '0.8s', size: '1.5rem' },
        { pos: { bottom: '25%', left: '10%' }, delay: '1.6s', size: '1.8rem' },
        { pos: { top: '60%', right: '5%' }, delay: '2.4s', size: '1.3rem' },
      ].map((p, i) => (
        <div key={i} style={{
          position: 'absolute', ...p.pos,
          fontSize: p.size, opacity: 0.12, pointerEvents: 'none',
          animation: `float 4s ease-in-out infinite`,
          animationDelay: p.delay,
        }}>🐾</div>
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="hero-grid">

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Available badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', background: 'rgba(13,148,136,0.08)',
              border: '1.5px solid rgba(13,148,136,0.2)', borderRadius: '9999px',
              width: 'fit-content',
              animation: 'slideUp 0.5s ease forwards',
            }}>
              <span style={{ width: '8px', height: '8px', background: '#0d9488', borderRadius: '9999px', animation: 'purr 2s ease-in-out infinite' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d9488', letterSpacing: '0.05em' }}>Available for hire</span>
            </div>

            {/* Name */}
            <div style={{ animation: 'slideUp 0.5s 0.1s ease both' }}>
              <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 0.98, color: '#1c1917' }}>
                Ibnu
                <span style={{ color: 'var(--orange)', fontStyle: 'italic' }}> Nahwitama</span>
              </h1>
              <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: '18px',
              }}
            >Open to Opportunities</div>
              {/* Role rotator */}
              <div style={{ height: '36px', marginTop: '12px', overflow: 'hidden' }}>
                <p style={{
                  fontSize: '1.25rem', fontWeight: 600, color: '#78716c',
                  transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                  opacity: show ? 1 : 0,
                  transform: show ? 'translateY(0)' : 'translateY(8px)',
                }}>
                  {roles[roleIdx]}
                </p>
              </div>
            </div>

            {/* Desc */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#57534e',
                maxWidth: '560px',
                animation: 'slideUp 0.5s 0.2s ease both',
              }}
            >
              I build scalable web applications, enterprise workflow systems, and
              production-ready APIs using{' '}
              <strong style={{ color: 'var(--orange)' }}>ASP.NET Core</strong>,{' '}
              <strong style={{ color: 'var(--teal)' }}>Next.js</strong>, TypeScript,
              and modern frontend architecture principles.
            </p>

            {/* Tech pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', animation: 'slideUp 0.5s 0.3s ease both' }}>
              {techPills.map(t => (
                <span key={t.label} className="pill" style={{ background: t.bg, color: t.color, borderColor: t.border }}>
                  {t.label}
                </span>
              ))}
            </div>

            {/* Engineering Metrics */}
            <div
              style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                animation: 'slideUp 0.5s 0.35s ease both',
              }}
            >
              {[
                { value: '30+', label: 'Projects' },
                { value: '50+', label: 'APIs Built' },
                { value: '4+', label: 'Years Exp' },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--orange)',
                      lineHeight: 1,
                    }}
                  >
                    {item.value}
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#a8a29e',
                      marginTop: '4px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>            

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', animation: 'slideUp 0.5s 0.4s ease both' }}>
              <Link href="/projects" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', background: 'var(--orange)', color: 'white',
                borderRadius: '9999px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(249,115,22,0.35)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(249,115,22,0.45)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(249,115,22,0.35)' }}
              >
                View Projects 🛠️
              </Link>
              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', background: 'white', color: 'var(--orange)',
                border: '2px solid rgba(249,115,22,0.25)', borderRadius: '9999px',
                fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--orange)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.25)' }}
              >
                About Me 😺
              </Link>
            </div>

            {/* Social row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', animation: 'slideUp 0.5s 0.5s ease both' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#a8a29e', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Find me on</span>
              {[
                { icon: '⌨️', label: 'GitHub', href: 'https://github.com/nahwitama10' },
                { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ibnu-nahwitama-a00bb3221/' },
                { icon: '📬', label: 'Email', href: '/contact' },
              ].map(s => (
                <a key={s.label} href={s.href}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: 600, color: '#57534e', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--orange)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#57534e'}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
            <p
              style={{
                fontSize: '0.85rem',
                color: '#78716c',
                marginTop: '8px',
              }}
            >
              Actively building and shipping frontend + backend projects on GitHub.
            </p>
          </div>

          {/* Right: cat + floating badges */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Glow */}
            <div style={{
              position: 'absolute', inset: '-20px',
              background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 65%)',
              borderRadius: '9999px', pointerEvents: 'none',
            }} />
            {/* Cat */}
            <div style={{ width: '280px', height: '280px', animation: 'float 4s ease-in-out infinite', position: 'relative', zIndex: 1 }}>
              <CatSVG />
            </div>
            {/* Badge: Fast APIs */}
            <div style={{
              position: 'absolute', top: '10%', left: '-10%',
              background: 'white', borderRadius: '14px', padding: '10px 14px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid rgba(249,115,22,0.1)',
              display: 'flex', alignItems: 'center', gap: '10px',
              animation: 'float 4s 0.5s ease-in-out infinite', zIndex: 2,
            }}>
              <span style={{ fontSize: '1.4rem' }}>⚡</span>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1c1917' }}>
                  REST APIs
                </div>

                <div style={{ fontSize: '0.65rem', color: '#a8a29e' }}>
                  ASP.NET Core
                </div>
              </div>
            </div>
            {/* Badge: Ships fast */}
            <div style={{
              position: 'absolute', bottom: '12%', right: '-8%',
              background: 'var(--teal)', borderRadius: '14px', padding: '10px 14px',
              boxShadow: '0 8px 32px rgba(13,148,136,0.3)',
              display: 'flex', alignItems: 'center', gap: '10px', color: 'white',
              animation: 'float 4s 1s ease-in-out infinite', zIndex: 2,
            }}>
              <span style={{ fontSize: '1.4rem' }}>🚀</span>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                  Production Ready
                </div>

                <div style={{ fontSize: '0.65rem', opacity: 0.8 }}>
                  Next.js + PostgreSQL
                </div>
              </div>
            </div>
            {/* Badge: System Design */}
            <div
              style={{
                position: 'absolute',
                top: '45%',
                right: '-12%',
                background: '#f5f3ff',
                borderRadius: '14px',
                padding: '10px 14px',
                boxShadow: '0 8px 32px rgba(139,92,246,0.18)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                animation: 'float 4s 1.5s ease-in-out infinite',
                zIndex: 2,
                border: '1px solid rgba(139,92,246,0.12)',
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>🧠</span>

              <div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#1c1917',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Clean Architecture
                </div>

                <div
                  style={{
                    fontSize: '0.65rem',
                    color: '#8b5cf6',
                  }}
                >
                  Scalable Systems
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          animation: 'float 3s ease-in-out infinite',
        }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#a8a29e', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '22px', height: '36px', border: '2px solid rgba(249,115,22,0.3)', borderRadius: '11px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
            <div style={{ width: '4px', height: '8px', background: 'var(--orange)', borderRadius: '2px', animation: 'float 1.5s ease-in-out infinite' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes purr {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        @keyframes tailWag {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  )
}