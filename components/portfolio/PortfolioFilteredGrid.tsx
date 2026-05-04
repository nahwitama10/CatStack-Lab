'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const allProjects = [
  { id: 1, title: 'Notting Hill Residence', category: 'Residential', type: 'Architectural Design', location: 'London, W11', year: '2023', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format', size: 'large' },
  { id: 2, title: 'Mayfair Penthouse', category: 'Residential', type: 'Interior Design', location: 'London, W1K', year: '2023', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80&auto=format', size: 'small' },
  { id: 3, title: 'Chelsea Boutique Hotel', category: 'Commercial', type: 'Create & Construct', location: 'London, SW3', year: '2022', image: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=800&q=80&auto=format', size: 'small' },
  { id: 4, title: 'Georgian Townhouse', category: 'Conservation', type: 'Heritage Design', location: 'Bath, BA1', year: '2022', image: 'https://images.unsplash.com/photo-1582407947304-fd86f28f399f?w=800&q=80&auto=format', size: 'large' },
  { id: 5, title: 'Shoreditch Creative Office', category: 'Commercial', type: 'Interior Design', location: 'London, EC2', year: '2022', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format', size: 'small' },
  { id: 6, title: 'Hampstead New Build', category: 'Residential', type: 'Architectural Design', location: 'London, NW3', year: '2021', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format', size: 'small' },
  { id: 7, title: 'Kensington Apartment', category: 'Residential', type: 'Interior Design', location: 'London, W8', year: '2021', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80&auto=format', size: 'large' },
  { id: 8, title: 'Victorian School Conversion', category: 'Conservation', type: 'Heritage Design', location: 'London, SE1', year: '2021', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format', size: 'small' },
  { id: 9, title: 'Soho Restaurant', category: 'Commercial', type: 'Interior Design', location: 'London, W1D', year: '2020', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80&auto=format', size: 'small' },
  { id: 10, title: 'Richmond Garden House', category: 'Residential', type: 'Create & Construct', location: 'London, TW10', year: '2020', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80&auto=format', size: 'large' },
]

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Conservation']
const TYPES = ['All Types', 'Architectural Design', 'Interior Design', 'Heritage Design', 'Create & Construct']

export default function PortfolioFilteredGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeType, setActiveType] = useState('All Types')
  const [hovered, setHovered] = useState<number | null>(null)
  const [layout, setLayout] = useState<'grid' | 'list'>('grid')

  const filtered = useMemo(() => {
    return allProjects.filter(p => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory
      const typeMatch = activeType === 'All Types' || p.type === activeType
      return catMatch && typeMatch
    })
  }, [activeCategory, activeType])

  return (
    <section style={{ background: 'var(--color-black)', padding: 'clamp(48px, 8vw, 80px) clamp(24px, 8vw, 120px)' }}>

      {/* Filter bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '24px', marginBottom: '48px',
        paddingBottom: '32px', borderBottom: '1px solid rgba(200,196,188,0.1)',
      }}>
        {/* Category filters */}
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.68rem',
                letterSpacing: '0.16em', textTransform: 'uppercase',
                background: activeCategory === cat ? 'var(--color-white)' : 'transparent',
                color: activeCategory === cat ? 'var(--color-black)' : 'var(--color-mid-grey)',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--color-white)' : 'rgba(200,196,188,0.2)',
                padding: '8px 20px', cursor: 'pointer',
                transition: 'all 0.25s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Type filter */}
          <select
            value={activeType}
            onChange={e => setActiveType(e.target.value)}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '0.68rem',
              letterSpacing: '0.12em', background: 'transparent',
              color: 'var(--color-warm-grey)', border: '1px solid rgba(200,196,188,0.2)',
              padding: '8px 16px', cursor: 'pointer', outline: 'none', appearance: 'none',
            }}
          >
            {TYPES.map(t => <option key={t} value={t} style={{ background: '#0a0a0a' }}>{t}</option>)}
          </select>

          {/* Count */}
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--color-mid-grey)' }}>
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>

          {/* Layout toggle */}
          <div style={{ display: 'flex', gap: '4px' }}>
            {(['grid', 'list'] as const).map(l => (
              <button key={l} onClick={() => setLayout(l)} style={{
                background: layout === l ? 'rgba(200,196,188,0.12)' : 'transparent',
                border: '1px solid rgba(200,196,188,0.15)',
                padding: '8px 10px', cursor: 'pointer', color: layout === l ? 'var(--color-white)' : 'var(--color-mid-grey)',
                transition: 'all 0.2s',
              }}>
                {l === 'grid' ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="0" y="0" width="6" height="6" fill="currentColor" opacity="0.8"/>
                    <rect x="8" y="0" width="6" height="6" fill="currentColor" opacity="0.8"/>
                    <rect x="0" y="8" width="6" height="6" fill="currentColor" opacity="0.8"/>
                    <rect x="8" y="8" width="6" height="6" fill="currentColor" opacity="0.8"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="0" y="1" width="14" height="2" fill="currentColor" opacity="0.8"/>
                    <rect x="0" y="6" width="14" height="2" fill="currentColor" opacity="0.8"/>
                    <rect x="0" y="11" width="14" height="2" fill="currentColor" opacity="0.8"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid view */}
      {layout === 'grid' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '300px',
          gap: '3px',
        }} className="portfolio-full-grid">
          {filtered.map((p, i) => (
            <Link
              key={p.id}
              href={`/portfolio/${p.id}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative', overflow: 'hidden', display: 'block',
                gridColumn: p.size === 'large' ? 'span 2' : 'span 1',
                gridRow: p.size === 'large' ? 'span 1' : 'span 1',
              }}
            >
              <img
                src={p.image} alt={p.title}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: hovered === p.id ? 'scale(1.06)' : 'scale(1)',
                  transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0) 55%)',
                opacity: hovered === p.id ? 1 : 0.55,
                transition: 'opacity 0.4s',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 28px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '8px' }}>
                  {p.type} — {p.year}
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: p.size === 'large' ? '1.6rem' : '1.2rem', fontWeight: 300, color: 'var(--color-white)' }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--color-warm-grey)',
                  marginTop: '6px', opacity: hovered === p.id ? 1 : 0, transition: 'opacity 0.3s',
                }}>
                  {p.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* List view */}
      {layout === 'list' && (
        <div>
          {filtered.map((p) => (
            <Link
              key={p.id}
              href={`/portfolio/${p.id}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 160px 160px 120px',
                gap: '24px',
                alignItems: 'center',
                padding: '24px 0',
                borderTop: '1px solid rgba(200,196,188,0.08)',
                background: hovered === p.id ? 'rgba(200,196,188,0.03)' : 'transparent',
                transition: 'background 0.3s',
              }}
              className="list-row"
            >
              {/* Thumb */}
              <div style={{ width: '72px', height: '48px', overflow: 'hidden' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', transform: hovered === p.id ? 'scale(1.1)' : 'scale(1)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 300, color: 'var(--color-white)' }}>{p.title}</h3>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--color-warm-grey)' }}>{p.category}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--color-warm-grey)' }}>{p.location}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--color-mid-grey)', textAlign: 'right' }}>{p.year}</span>
            </Link>
          ))}
          <div style={{ borderTop: '1px solid rgba(200,196,188,0.08)' }} />
        </div>
      )}

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--color-warm-grey)' }}>No projects match this filter.</p>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .portfolio-full-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .portfolio-full-grid {
            grid-template-columns: 1fr !important;
          }
          .portfolio-full-grid a { grid-column: span 1 !important; }
          .list-row {
            grid-template-columns: 60px 1fr !important;
          }
          .list-row > *:nth-child(3),
          .list-row > *:nth-child(4),
          .list-row > *:nth-child(5) { display: none; }
        }
      `}</style>
    </section>
  )
}