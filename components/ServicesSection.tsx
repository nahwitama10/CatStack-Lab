'use client'

import Link from 'next/link'
import { useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Architectural Design',
    body: 'The most important material with which we design is light. We create spaces that respond to their context, their users, and the passage of time.',
    links: [
      { label: 'Residential', href: '/residential-architects' },
      { label: 'Commercial', href: '/commercial-architects' },
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format',
  },
  {
    number: '02',
    title: 'Interior Design',
    body: 'We aspire to create an interior experience that is both memorable and timeless — focusing on the experience of space as much as its aesthetic.',
    links: [
      { label: 'Residential', href: '/residential-interior-design' },
      { label: 'Commercial', href: '/commercial-interior-designers' },
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80&auto=format',
  },
  {
    number: '03',
    title: 'Conservation & Heritage',
    body: 'Specialist architects working to transform heritage properties while preserving their historical significance and character.',
    links: [{ label: 'Learn More', href: '/conservation-architects' }],
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f28f399f?w=900&q=80&auto=format',
  },
  {
    number: '04',
    title: 'Create & Construct',
    body: 'Whether a new build or a transformation — we take the ordinary and elevate it to the extraordinary through considered design and meticulous delivery.',
    links: [
      { label: 'Residential', href: '/residential-architectural-design-services' },
      { label: 'Commercial', href: '/commercial-design-and-build' },
    ],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80&auto=format',
  },
  {
    number: '05',
    title: 'Planning Applications',
    body: 'Expert guidance through the planning process, from pre-application advice to full planning submissions.',
    links: [{ label: 'Learn More', href: '/planning-applications' }],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format',
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section style={{ background: 'var(--color-black)', padding: 'clamp(80px, 12vw, 160px) 0' }}>
      {/* Section header */}
      <div style={{ padding: '0 clamp(24px, 8vw, 120px)', marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '16px' }}>
            — Our Services
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.01em', color: 'var(--color-white)', lineHeight: 1.1 }}>
            What We Do
          </h2>
        </div>
        <Link href="/about" style={{
          fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--color-warm-grey)',
          borderBottom: '1px solid rgba(200,196,188,0.3)', paddingBottom: '3px',
          transition: 'color 0.3s, border-color 0.3s',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-white)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-warm-grey)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,196,188,0.3)' }}
        >
          About the Studio
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>

      {/* Services list */}
      <div>
        {services.map((service, i) => (
          <div
            key={service.number}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              padding: '0 clamp(24px, 8vw, 120px)',
              borderTop: '1px solid rgba(200,196,188,0.08)',
              transition: 'background 0.4s',
              background: hoveredIndex === i ? 'rgba(200,196,188,0.03)' : 'transparent',
              cursor: 'default',
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr auto',
              gap: '32px',
              alignItems: 'center',
              padding: '36px 0',
            }}
              className="service-row"
            >
              {/* Number */}
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                color: 'var(--color-mid-grey)',
                fontStyle: 'italic',
                letterSpacing: '0.04em',
              }}>
                {service.number}
              </span>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 300,
                color: 'var(--color-white)',
                letterSpacing: '-0.01em',
                transition: 'color 0.3s',
              }}>
                {service.title}
              </h3>

              {/* Body + links */}
              <div style={{
                opacity: hoveredIndex === i ? 1 : 0,
                transform: hoveredIndex === i ? 'translateY(0)' : 'translateY(6px)',
                transition: 'opacity 0.4s, transform 0.4s',
              }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--color-warm-grey)', marginBottom: '16px', maxWidth: '380px' }}>
                  {service.body}
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                  {service.links.map(l => (
                    <Link key={l.label} href={l.href} style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'var(--color-white)',
                      borderBottom: '1px solid rgba(245,244,240,0.3)', paddingBottom: '2px',
                      transition: 'border-color 0.3s',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-white)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,244,240,0.3)' }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Image preview */}
              <div style={{
                width: '120px', height: '80px', overflow: 'hidden',
                opacity: hoveredIndex === i ? 1 : 0,
                transform: hoveredIndex === i ? 'scale(1)' : 'scale(0.96)',
                transition: 'opacity 0.5s, transform 0.5s',
              }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s', transform: hoveredIndex === i ? 'scale(1.05)' : 'scale(1)' }}
                />
              </div>
            </div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid rgba(200,196,188,0.08)' }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .service-row {
            grid-template-columns: 48px 1fr !important;
            grid-template-rows: auto auto;
          }
          .service-row > *:nth-child(3),
          .service-row > *:nth-child(4) { display: none; }
        }
      `}</style>
    </section>
  )
}
