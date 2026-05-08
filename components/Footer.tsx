'use client'

import Link from 'next/link'

const footerLinks = {
  Navigation: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  Engineering: [
    { label: 'Frontend Systems', href: '/projects?type=frontend' },
    { label: 'Backend APIs', href: '/projects?type=backend' },
    { label: 'Workflow Platforms', href: '/projects?type=enterprise' },
    { label: 'Integrations', href: '/projects?type=integration' },
  ],
  Connect: [
    { label: 'GitHub', href: 'https://github.com/nahwitama10' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ibnu-nahwitama-a00bb3221/' },
    { label: 'Email', href: '/contact' },
  ],
}

const techStack = ['ASP.NET Core', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS']

const socials = [
  { icon: '⌨️', href: 'https://github.com/nahwitama10', label: 'GitHub' },
  { icon: '💼', href: '#', label: 'LinkedIn' },
  { icon: '📬', href: '/contact', label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#F3E4C9',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    }}>
      {/* Top decorative border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, #f97316 30%, #fcd34d 50%, #0d9488 70%, transparent 100%)',
      }} />

      {/* Decorative paw prints — correct positioning without dynamic Tailwind strings */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {[
          { top: '12%', left: '4%' },
          { top: '8%', right: '10%' },
          { bottom: '20%', left: '38%' },
          { bottom: '10%', right: '4%' },
        ].map((pos, i) => (
          <div key={i} style={{ position: 'absolute', ...pos, fontSize: '3rem', opacity: 0.06, userSelect: 'none' }}>🐾</div>
        ))}
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 24px 32px', position: 'relative' }}>

        {/* ─── Main grid ─── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: '40px',
          marginBottom: '48px',
        }} className="footer-main-grid">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <Link href="/" style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              textDecoration: 'none', marginBottom: '16px',
            }}>
              <span style={{ fontSize: '1.6rem' }}>🐱</span>
              <span style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: '1.3rem', fontWeight: 700,
                color: '#1c1917', letterSpacing: '-0.02em',
              }}>
                CatStack<span style={{ color: '#f97316' }}> Lab</span>
              </span>
            </Link>

            {/* Tagline */}
            <p style={{
              fontSize: '0.875rem', lineHeight: 1.75,
              color: '#78350f', /* dark brown — readable on cream */
              marginBottom: '20px', maxWidth: '280px',
            }}>
              Fullstack developer building enterprise systems and modern web apps. Focused on scalable backend systems and production-ready web applications.
            </p>

            {/* Tech pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
              {techStack.map(tech => (
                <span key={tech} style={{
                  padding: '4px 10px',
                  background: 'rgba(249,115,22,0.1)',
                  border: '1.5px solid rgba(249,115,22,0.25)',
                  borderRadius: '9999px',
                  fontSize: '0.7rem', fontWeight: 700,
                  color: '#c2410c', /* dark orange — readable on cream */
                  letterSpacing: '0.02em',
                }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    width: '36px', height: '36px',
                    background: 'rgba(28,25,23,0.08)',
                    border: '1.5px solid rgba(28,25,23,0.12)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = '#f97316'
                    el.style.borderColor = '#f97316'
                    el.style.transform = 'translateY(-2px)'
                    el.style.boxShadow = '0 4px 12px rgba(249,115,22,0.35)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(28,25,23,0.08)'
                    el.style.borderColor = 'rgba(28,25,23,0.12)'
                    el.style.transform = 'none'
                    el.style.boxShadow = 'none'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p style={{
                fontSize: '0.65rem', fontWeight: 800,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#92400e', /* dark amber — readable on cream */
                marginBottom: '18px',
              }}>
                {group}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href}
                      style={{
                        fontSize: '0.875rem', fontWeight: 500,
                        color: '#57534e', /* stone-600 — dark enough on cream */
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        display: 'inline-flex', alignItems: 'center', gap: '4px',
                      }}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#f97316'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#57534e'}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ─── Divider ─── */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)',
          marginBottom: '24px',
        }} />

        {/* ─── Bottom bar ─── */}
        <div style={{
          display: 'flex', flexDirection: 'row',
          alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          {/* Copyright */}
          <p style={{ fontSize: '0.8rem', color: '#78716c', fontWeight: 500 }}>
            © {new Date().getFullYear()} Ibnu Nahwitama · Fullstack Engineer based in Indonesia
          </p>

          {/* Stack badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px',
            background: 'rgba(28,25,23,0.06)',
            border: '1.5px solid rgba(28,25,23,0.1)',
            borderRadius: '9999px',
          }}>
            <span style={{
              width: '7px', height: '7px',
              background: '#0d9488', borderRadius: '9999px',
              display: 'inline-block', animation: 'purr 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#57534e' }}>
              Next.js · ASP.NET Core · PostgreSQL · Vercel
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes purr {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.7; }
        }
        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-main-grid > div:first-child {
            grid-column: span 2;
          }
        }
        @media (max-width: 560px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-main-grid > div:first-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  )
}