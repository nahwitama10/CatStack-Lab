'use client'

import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    title: 'Notting Hill Residence',
    category: 'Residential',
    type: 'Architectural Design',
    href: '/residential-portfolio',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format',
    span: 'large',
  },
  {
    title: 'Mayfair Penthouse',
    category: 'Residential',
    type: 'Interior Design',
    href: '/residential-interior-design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80&auto=format',
    span: 'small',
  },
  {
    title: 'Chelsea Boutique Hotel',
    category: 'Commercial',
    type: 'Create & Construct',
    href: '/commercial-portfolio',
    image: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=800&q=80&auto=format',
    span: 'small',
  },
  {
    title: 'Victorian Townhouse',
    category: 'Conservation',
    type: 'Heritage Design',
    href: '/conservation-heritage-design-portfolio',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f28f399f?w=800&q=80&auto=format',
    span: 'small',
  },
  {
    title: 'Shoreditch Office',
    category: 'Commercial',
    type: 'Interior Design',
    href: '/commercial-interior-designers',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format',
    span: 'small',
  },
  {
    title: 'Hampstead New Build',
    category: 'Residential',
    type: 'Architectural Design',
    href: '/residential-architects',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format',
    span: 'large',
  },
]

export default function PortfolioGrid() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section style={{ background: 'var(--color-dark)', padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '16px' }}>
            — Selected Works
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--color-white)', lineHeight: 1.1 }}>
            Portfolio
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {['All', 'Residential', 'Commercial', 'Conservation'].map((f, i) => (
            <button key={f} style={{
              fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.16em',
              textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer',
              color: i === 0 ? 'var(--color-white)' : 'var(--color-mid-grey)',
              borderBottom: i === 0 ? '1px solid var(--color-white)' : '1px solid transparent',
              paddingBottom: '3px', transition: 'color 0.3s',
            }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: '320px',
        gap: '3px',
      }} className="portfolio-grid">
        {projects.map((p, i) => (
          <Link
            key={p.title}
            href={p.href}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'relative', overflow: 'hidden', display: 'block',
              gridColumn: p.span === 'large' ? 'span 2' : 'span 1',
            }}
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: hovered === i ? 'scale(1.06)' : 'scale(1)',
              }}
            />

            {/* Overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0) 60%)',
              opacity: hovered === i ? 1 : 0.6,
              transition: 'opacity 0.4s',
            }} />

            {/* Text */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '28px',
              transform: hovered === i ? 'translateY(0)' : 'translateY(4px)',
              transition: 'transform 0.4s',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--color-accent)', marginBottom: '8px',
                opacity: hovered === i ? 1 : 0.7,
                transition: 'opacity 0.3s',
              }}>
                {p.type} — {p.category}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: p.span === 'large' ? '1.6rem' : '1.3rem',
                fontWeight: 300,
                color: 'var(--color-white)',
                letterSpacing: '0.01em',
              }}>
                {p.title}
              </h3>

              {/* Arrow */}
              <div style={{
                marginTop: '14px',
                opacity: hovered === i ? 1 : 0,
                transform: hovered === i ? 'translateX(0)' : 'translateX(-8px)',
                transition: 'opacity 0.3s, transform 0.4s',
                display: 'flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-body)', fontSize: '0.66rem',
                letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-white)',
              }}>
                View Project
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View all */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Link href="/residential-portfolio" style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--color-white)',
          border: '1px solid rgba(200,196,188,0.25)', padding: '16px 36px',
          transition: 'background 0.3s, border-color 0.3s',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(200,196,188,0.08)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,196,188,0.6)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,196,188,0.25)' }}
        >
          View All Projects
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 260px !important;
          }
          .portfolio-grid a { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
