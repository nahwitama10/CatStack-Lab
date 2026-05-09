'use client'

import { useEffect, useState, useCallback } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

interface Cat {
  id: string
  url: string
  breeds?: { name: string; temperament: string; origin: string }[]
}

const PAGE_SIZE = 12

// Reliable fallback cats — always shows something even if API fails
const FALLBACK_CATS: Cat[] = Array.from({ length: 48 }, (_, i) => ({
  id: `fallback-${i}`,
  url: `https://placekitten.com/${300 + (i % 6) * 20}/${240 + (i % 4) * 15}`,
  breeds: [],
}))

export default function CatsPage() {
  const [cats, setCats] = useState<Cat[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [hovered, setHovered] = useState<string | null>(null)
  const [usingFallback, setUsingFallback] = useState(false)

  const fetchCats = useCallback(async () => {
    setLoading(true)
    setUsingFallback(false)
    try {
      const apiKey = process.env.NEXT_PUBLIC_CAT_API_KEY || ''
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${PAGE_SIZE}&page=${page}&has_breeds=1&order=RAND`,
        { headers: { 'x-api-key': apiKey } }
      )
      if (!res.ok) throw new Error(`API error: ${res.status}`)
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        setCats(data)
      } else {
        throw new Error('Empty response')
      }
    } catch (err) {
      console.warn('Cat API failed, using fallback:', err)
      setUsingFallback(true)
      const start = (page * PAGE_SIZE) % FALLBACK_CATS.length
      setCats([...FALLBACK_CATS, ...FALLBACK_CATS].slice(start, start + PAGE_SIZE))
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => { fetchCats() }, [fetchCats])

  return (
    <>
      <Navbar />
      <main style={{
        paddingTop: 'var(--nav-height)',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #fffbf5 0%, #fff8f0 100%)',
      }}>

        {/* ─── Hero ─── */}
        <section style={{ padding: 'clamp(48px,8vw,100px) clamp(24px,8vw,120px) 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', opacity: 0.5 }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            {/* Label */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(249,115,22,0.08)', border: '1.5px solid rgba(249,115,22,0.2)', borderRadius: '9999px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f97316' }}>🐾 All Cats</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#1c1917' }}>
                  Cats{' '}
                  <span style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>
                    Around The World!
                  </span>
                </h1>
                <p style={{ fontSize: '1rem', color: '#78716c', marginTop: '12px', maxWidth: '460px', lineHeight: 1.7 }}>
                  A curated collection of the finest felines 🐱 Navigate pages to meet more cats.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link href="/cats/breeds" style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(0,0,0,0.1)', borderRadius: '9999px', fontWeight: 700, fontSize: '0.875rem', color: '#1c1917', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  📖 Breeds
                </Link>
                <Link href="/cats/gallery" style={{ padding: '10px 20px', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: 'white', borderRadius: '9999px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}>
                  🖼️ Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Grid ─── */}
        <section style={{ padding: '0 clamp(24px,8vw,120px) clamp(60px,8vw,100px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            {/* Fallback notice */}
            {usingFallback && !loading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'rgba(245,158,11,0.08)', border: '1.5px solid rgba(245,158,11,0.25)', borderRadius: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '1.2rem' }}>🐾</span>
                <p style={{ fontSize: '0.85rem', color: '#92400e', fontWeight: 500 }}>
                  Showing placeholder cats — API key may not be set in Vercel environment variables yet.
                </p>
              </div>
            )}

            {loading ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: '4rem', animation: 'bounce 1s ease-in-out infinite', display: 'inline-block' }}>🐾</div>
                <p style={{ marginTop: '16px', color: '#78716c', fontWeight: 600 }}>Loading cute cats...</p>
              </div>
            ) : (
              <>
                {/* Cat grid */}
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
                        cursor: 'default',
                      }}
                    >
                      {/* Image */}
                      <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#f5f4f0' }}>
                        <img
                          src={cat.url}
                          alt="Cat"
                          loading="lazy"
                          style={{
                            width: '100%', height: '100%', objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            transform: hovered === cat.id ? 'scale(1.07)' : 'scale(1)',
                          }}
                        />
                      </div>

                      {/* Breed info */}
                      {cat.breeds && cat.breeds.length > 0 && (
                        <div style={{ padding: '14px 16px' }}>
                          <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: '#1c1917', marginBottom: '4px' }}>
                            {cat.breeds[0].name}
                          </h3>
                          <p style={{ fontSize: '0.75rem', color: '#a8a29e', fontWeight: 500 }}>
                            🌍 {cat.breeds[0].origin}
                          </p>
                          {cat.breeds[0].temperament && (
                            <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                              {cat.breeds[0].temperament.split(', ').slice(0, 3).map(t => (
                                <span key={t} style={{ padding: '2px 8px', background: 'rgba(249,115,22,0.08)', border: '1.5px solid rgba(249,115,22,0.15)', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 600, color: '#f97316' }}>
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                  <button
                    onClick={() => setPage(p => Math.max(0, p - 1))}
                    disabled={page === 0}
                    style={{ padding: '10px 24px', borderRadius: '9999px', border: '1.5px solid rgba(0,0,0,0.1)', background: page === 0 ? 'rgba(0,0,0,0.04)' : 'white', color: page === 0 ? '#a8a29e' : '#1c1917', fontWeight: 700, fontSize: '0.875rem', cursor: page === 0 ? 'not-allowed' : 'pointer', transition: 'all 0.2s', fontFamily: 'inherit' }}
                  >
                    ← Prev
                  </button>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#78716c', padding: '10px 16px', background: 'rgba(249,115,22,0.08)', borderRadius: '9999px' }}>
                    Page {page + 1}
                  </span>
                  <button
                    onClick={() => setPage(p => p + 1)}
                    style={{ padding: '10px 24px', borderRadius: '9999px', border: 'none', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: 'white', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', boxShadow: '0 4px 16px rgba(249,115,22,0.3)', transition: 'all 0.2s', fontFamily: 'inherit' }}
                  >
                    Next →
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @keyframes bounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
      `}</style>
    </>
  )
}