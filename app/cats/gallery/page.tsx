'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

// Curated gallery with different sizes for masonry feel
const GALLERY = [
  { id: 1, url: '/cats/cat1.jpg', label: 'The Gang', tags: ['Fluffy', 'Orange'] },
  { id: 2, url: '/cats/cat2.jpg', label: 'Sleepy Princess', tags: ['Curious', 'Indoor'] },
  { id: 3, url: '/cats/cat3.jpg', label: 'Mischief Ocil', tags: ['Sleepy', 'Cozy'] },
  { id: 4, url: '/cats/cat4.jpg', label: 'Masseur Chika', tags: ['Loaf', 'Black'] },
  { id: 5, url: '/cats/cat5.jpg', label: 'Mr. Chiko', tags: ['Active', 'Outdoor'] },
  { id: 6, url: '/cats/cat6.jpg', label: 'El-Lorengto Margriente Del-Partigore Hernando Zaragoza', tags: ['Majestic', 'Fluffy'] },
  { id: 7, url: '/cats/cat7.jpg', label: 'A random cat in Cikunir 2 Station', tags: ['Kitten', 'Tiny'] },
  { id: 8, url: '/cats/cat8.jpg', label: '(In Memoriam) Bolang', tags: ['Grumpy', 'Classic'] },
  { id: 9, url: '/cats/cat9.jpg', label: 'Mayor Chiko El-Gato', tags: ['Black', 'Mystery'] },
  { id: 10, url: '/cats/cat10.jpg', label: 'Orange Milk Cat', tags: ['Happy', 'Orange'] },
  { id: 11, url: '/cats/cat11.jpg', label: 'Little Sapi', tags: ['Indoor', 'Cozy'] },
  { id: 12, url: '/cats/cat12.jpg', label: 'Vet Keeper Cat', tags: ['Active', 'Athletic'] },
  // { id: 13, url: 'https://placekitten.com/605/805', label: 'Cuddle Pro', tags: ['Affectionate', 'Soft'] },
  // { id: 14, url: 'https://placekitten.com/705/505', label: 'Laser Eyes', tags: ['Intense', 'Focused'] },
  // { id: 15, url: 'https://placekitten.com/505/705', label: 'Garden Cat', tags: ['Outdoor', 'Explorer'] },
  // { id: 16, url: 'https://placekitten.com/606/806', label: 'Photogenic', tags: ['Beautiful', 'Posed'] },
  // { id: 17, url: 'https://placekitten.com/806/606', label: 'Sneaky Boi', tags: ['Mischievous', 'Clever'] },
  // { id: 18, url: 'https://placekitten.com/607/807', label: 'Zen Master', tags: ['Calm', 'Peaceful'] },
]

const ALL_TAGS = ['All', ...Array.from(new Set(GALLERY.flatMap(c => c.tags)))]

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState('All')
  const [lightbox, setLightbox] = useState<typeof GALLERY[0] | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = activeTag === 'All' ? GALLERY : GALLERY.filter(c => c.tags.includes(activeTag))

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", minHeight: '100vh', background: 'linear-gradient(180deg, #fffbf5 0%, #fff8f0 100%)' }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(48px,8vw,100px) clamp(24px,8vw,120px) 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', opacity: 0.5 }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(139,92,246,0.08)', border: '1.5px solid rgba(139,92,246,0.2)', borderRadius: '9999px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6' }}>🖼️ Gallery</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
              <div>
                <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#1c1917' }}>
                  Cat{' '}
                  <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Gallery</span>
                </h1>
                <p style={{ fontSize: '1rem', color: '#78716c', marginTop: '12px', lineHeight: 1.7 }}>
                  {filtered.length} curated cat moments 🐾 Click any photo to enlarge.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Link href="/cats" style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(0,0,0,0.1)', borderRadius: '9999px', fontWeight: 700, fontSize: '0.875rem', color: '#1c1917', textDecoration: 'none' }}>🐾 All Cats</Link>
                <Link href="/cats/breeds" style={{ padding: '10px 20px', background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', color: 'white', borderRadius: '9999px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(139,92,246,0.3)' }}>📖 Breeds</Link>
              </div>
            </div>

            {/* Tag filters */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {ALL_TAGS.map(tag => (
                <button key={tag} onClick={() => setActiveTag(tag)}
                  style={{
                    padding: '7px 16px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', border: '1.5px solid', transition: 'all 0.2s',
                    ...(activeTag === tag
                      ? { background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', color: 'white', borderColor: 'transparent', boxShadow: '0 4px 12px rgba(139,92,246,0.3)' }
                      : { background: 'rgba(255,255,255,0.8)', color: '#78716c', borderColor: 'rgba(0,0,0,0.1)' }
                    ),
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry Grid */}
        <section style={{ padding: '0 clamp(24px,8vw,120px) clamp(60px,8vw,100px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ columns: '3 280px', gap: '16px' }} className="gallery-masonry">
              {filtered.map(cat => (
                <div key={cat.id}
                  onClick={() => setLightbox(cat)}
                  onMouseEnter={() => setHovered(cat.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    breakInside: 'avoid', marginBottom: '16px',
                    borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
                    position: 'relative',
                    border: `1.5px solid ${hovered === cat.id ? 'rgba(139,92,246,0.4)' : 'rgba(0,0,0,0.07)'}`,
                    boxShadow: hovered === cat.id ? '0 16px 48px rgba(139,92,246,0.15)' : '0 2px 12px rgba(0,0,0,0.06)',
                    transform: hovered === cat.id ? 'translateY(-4px)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  <img src={cat.url} alt={cat.label} loading="lazy" style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease', transform: hovered === cat.id ? 'scale(1.04)' : 'scale(1)' }} />
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                    opacity: hovered === cat.id ? 1 : 0,
                    transition: 'opacity 0.3s',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '16px',
                  }}>
                    <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '6px' }}>{cat.label}</h3>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                      {cat.tags.map(t => (
                        <span key={t} style={{ padding: '2px 8px', background: 'rgba(139,92,246,0.7)', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 700, color: 'white' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ marginTop: '8px', fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>🔍 Click to enlarge</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightbox && (
          <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '680px', width: '100%' }}>
              <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: '-44px', right: 0, background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '9999px', width: '36px', height: '36px', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>✕</button>
              <img src={lightbox.url} alt={lightbox.label} style={{ width: '100%', borderRadius: '20px', display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }} />
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: 'white' }}>{lightbox.label}</h3>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {lightbox.tags.map(t => (
                    <span key={t} style={{ padding: '4px 12px', background: 'rgba(139,92,246,0.6)', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 700, color: 'white' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}