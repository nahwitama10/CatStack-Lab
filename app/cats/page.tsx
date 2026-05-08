'use client'

import { useEffect, useState, useCallback } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

interface Cat { id: string; url: string; breeds?: { name: string; temperament: string; origin: string }[] }

const PAGE_SIZE = 12

// Curated real cat images that always work
const STATIC_CATS: Cat[] = [
  { id: 'c1', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/640px-Cat_November_2010-1a.jpg', breeds: [{ name: 'Domestic Shorthair', temperament: 'Curious, Playful', origin: 'Various' }] },
  { id: 'c2', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/640px-Kittyply_edit1.jpg', breeds: [{ name: 'British Shorthair', temperament: 'Calm, Affectionate', origin: 'United Kingdom' }] },
  { id: 'c3', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/1200px-YellowLabradorLooking_new.jpg'.replace('YellowLabradorLooking_new', 'Felis_catus-cat_on_snow'), breeds: [{ name: 'Siberian', temperament: 'Gentle, Intelligent', origin: 'Russia' }] },
  { id: 'c4', url: 'https://placekitten.com/640/480', breeds: [] },
  { id: 'c5', url: 'https://placekitten.com/641/481', breeds: [] },
  { id: 'c6', url: 'https://placekitten.com/642/482', breeds: [] },
  { id: 'c7', url: 'https://placekitten.com/643/483', breeds: [] },
  { id: 'c8', url: 'https://placekitten.com/644/484', breeds: [] },
  { id: 'c9', url: 'https://placekitten.com/645/485', breeds: [] },
  { id: 'c10', url: 'https://placekitten.com/646/486', breeds: [] },
  { id: 'c11', url: 'https://placekitten.com/500/400', breeds: [] },
  { id: 'c12', url: 'https://placekitten.com/501/401', breeds: [] },
  { id: 'c13', url: 'https://placekitten.com/502/402', breeds: [] },
  { id: 'c14', url: 'https://placekitten.com/503/403', breeds: [] },
  { id: 'c15', url: 'https://placekitten.com/504/404', breeds: [] },
  { id: 'c16', url: 'https://placekitten.com/505/405', breeds: [] },
  { id: 'c17', url: 'https://placekitten.com/506/406', breeds: [] },
  { id: 'c18', url: 'https://placekitten.com/507/407', breeds: [] },
  { id: 'c19', url: 'https://placekitten.com/508/408', breeds: [] },
  { id: 'c20', url: 'https://placekitten.com/509/409', breeds: [] },
  { id: 'c21', url: 'https://placekitten.com/510/410', breeds: [] },
  { id: 'c22', url: 'https://placekitten.com/511/411', breeds: [] },
  { id: 'c23', url: 'https://placekitten.com/512/412', breeds: [] },
  { id: 'c24', url: 'https://placekitten.com/513/413', breeds: [] },
]

export default function CatsPage() {
  const [cats, setCats] = useState<Cat[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [hovered, setHovered] = useState<string | null>(null)

  const fetchCats = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${PAGE_SIZE}&page=${page}&order=RAND`)
      if (!res.ok) throw new Error()
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        setCats(data)
      } else {
        throw new Error()
      }
    } catch {
      // Always show something — use static cats paged
      const start = (page * PAGE_SIZE) % STATIC_CATS.length
      const slice = [...STATIC_CATS, ...STATIC_CATS].slice(start, start + PAGE_SIZE)
      setCats(slice)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => { fetchCats() }, [fetchCats])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", minHeight: '100vh', background: 'linear-gradient(180deg, #fffbf5 0%, #fff8f0 100%)' }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(48px,8vw,100px) clamp(24px,8vw,120px) 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', opacity: 0.5 }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(249,115,22,0.08)', border: '1.5px solid rgba(249,115,22,0.2)', borderRadius: '9999px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f97316' }}>🐾 All Cats</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#1c1917' }}>
                  The Cat{' '}
                  <span style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Gallery</span>
                </h1>
                <p style={{ fontSize: '1rem', color: '#78716c', marginTop: '12px', maxWidth: '460px', lineHeight: 1.7 }}>
                  A curated collection of the finest felines 🐱 Navigate pages to meet more cats.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link href="/cats/breeds" style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(0,0,0,0.1)', borderRadius: '9999px', fontWeight: 700, fontSize: '0.875rem', color: '#1c1917', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>📖 Breeds</Link>
                <Link href="/cats/gallery" style={{ padding: '10px 20px', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: 'white', borderRadius: '9999px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}>🖼️ Gallery</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section style={{ padding: '0 clamp(24px,8vw,120px) clamp(60px,8vw,100px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: '4rem', animation: 'bounce 1s ease-in-out infinite', display: 'inline-block' }}>🐾</div>
                <p style={{ marginTop: '16px', color: '#78716c', fontWeight: 600 }}>Loading cute cats...</p>
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px', marginBottom: '40px' }}>
                  {cats.map((cat, i) => (
                    <div key={`${cat.id}-${i}`}
                      onMouseEnter={() => setHovered(cat.id)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        borderRadius: '20px', overflow: 'hidden',
                        background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)',
                        border: `1.5px solid ${hovered === cat.id ? 'rgba(249,115,22,0.3)' : 'rgba(0,0,0,0.07)'}`,
                        boxShadow: hovered === cat.id ? '0 20px 60px rgba(249,115,22,0.12)' : '0 2px 12px rgba(0,0,0,0.05)',
                        transform: hovered === cat.id ? 'translateY(-6px)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                      }}
                    >
                      <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#f5f4f0' }}>
                        <img src={cat.url} alt="Cat" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', transform: hovered === cat.id ? 'scale(1.07)' : 'scale(1)' }} />
                      </div>
                      {cat.breeds && cat.breeds.length > 0 && (
                        <div style={{ padding: '14px 16px' }}>
                          <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: '#1c1917', marginBottom: '4px' }}>{cat.breeds[0].name}</h3>
                          <p style={{ fontSize: '0.75rem', color: '#a8a29e', fontWeight: 500 }}>🌍 {cat.breeds[0].origin}</p>
                          <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                            {cat.breeds[0].temperament?.split(', ').slice(0, 3).map(t => (
                              <span key={t} style={{ padding: '2px 8px', background: 'rgba(249,115,22,0.08)', border: '1.5px solid rgba(249,115,22,0.15)', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 600, color: '#f97316' }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                  <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}
                    style={{ padding: '10px 24px', borderRadius: '9999px', border: '1.5px solid rgba(0,0,0,0.1)', background: page === 0 ? 'rgba(0,0,0,0.04)' : 'white', color: page === 0 ? '#a8a29e' : '#1c1917', fontWeight: 700, fontSize: '0.875rem', cursor: page === 0 ? 'not-allowed' : 'pointer' }}>
                    ← Prev
                  </button>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#78716c', padding: '10px 16px', background: 'rgba(249,115,22,0.08)', borderRadius: '9999px' }}>Page {page + 1}</span>
                  <button onClick={() => setPage(p => p + 1)}
                    style={{ padding: '10px 24px', borderRadius: '9999px', border: 'none', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: 'white', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}>
                    Next →
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }`}</style>
    </>
  )
}