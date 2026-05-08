'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Breed {
  id: string
  name: string
  origin: string
  temperament: string
  description: string
  life_span: string
  weight: { metric: string }
  adaptability: number
  affection_level: number
  energy_level: number
  intelligence: number
  grooming: number
  image?: { url: string }
}

function StatDots({ value, color = '#f97316' }: { value: number; color?: string }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} style={{ width: '10px', height: '10px', borderRadius: '9999px', background: i <= value ? color : 'rgba(0,0,0,0.08)', transition: 'background 0.3s' }} />
      ))}
    </div>
  )
}

export default function BreedsPage() {
  const [breeds, setBreeds] = useState<Breed[]>([])
  const [filtered, setFiltered] = useState<Breed[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Breed | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(r => r.json())
      .then(data => {
        // Fetch a sample image for each breed (first 40 for perf)
        const withImages = data.slice(0, 40)
        setBreeds(withImages)
        setFiltered(withImages)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    const q = search.toLowerCase()
    setFiltered(breeds.filter(b =>
      b.name.toLowerCase().includes(q) ||
      b.origin?.toLowerCase().includes(q) ||
      b.temperament?.toLowerCase().includes(q)
    ))
  }, [search, breeds])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", minHeight: '100vh', background: 'linear-gradient(180deg, #fffbf5 0%, #fff8f0 100%)' }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(48px,8vw,100px) clamp(24px,8vw,120px) 40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', opacity: 0.5 }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(249,115,22,0.08)', border: '1.5px solid rgba(249,115,22,0.2)', borderRadius: '9999px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f97316' }}>📖 Breeds</span>
            </div>
            <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#1c1917', marginBottom: '12px' }}>
              Cat{' '}
              <span style={{ background: 'linear-gradient(135deg, #f97316, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Breeds</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#78716c', marginBottom: '32px', maxWidth: '480px', lineHeight: 1.7 }}>
              Explore {breeds.length} cat breeds from around the world 🌍
            </p>

            {/* Search */}
            <div style={{ position: 'relative', maxWidth: '440px' }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '1.1rem' }}>🔍</span>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search breed, origin, temperament..."
                style={{
                  width: '100%', padding: '12px 16px 12px 44px',
                  background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(249,115,22,0.2)', borderRadius: '9999px',
                  fontSize: '0.9rem', color: '#1c1917', outline: 'none',
                  boxShadow: '0 4px 20px rgba(249,115,22,0.08)',
                  fontFamily: 'inherit',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = '#f97316')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(249,115,22,0.2)')}
              />
              {search && (
                <button onClick={() => setSearch('')} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#a8a29e', fontSize: '1rem' }}>✕</button>
              )}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section style={{ padding: '0 clamp(24px,8vw,120px) clamp(60px,8vw,100px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: '4rem', animation: 'float 1.5s ease-in-out infinite', display: 'inline-block' }}>🐱</div>
                <p style={{ marginTop: '16px', color: '#78716c', fontWeight: 600 }}>Loading breeds...</p>
              </div>
            ) : (
              <>
                <p style={{ fontSize: '0.8rem', color: '#a8a29e', fontWeight: 600, marginBottom: '20px' }}>
                  Showing {filtered.length} breed{filtered.length !== 1 ? 's' : ''}
                  {search && ` for "${search}"`}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                  {filtered.map(breed => (
                    <div key={breed.id}
                      onClick={() => setSelected(breed)}
                      onMouseEnter={() => setHovered(breed.id)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        borderRadius: '20px', padding: '24px', cursor: 'pointer',
                        background: hovered === breed.id ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.75)',
                        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                        border: `1.5px solid ${hovered === breed.id ? 'rgba(249,115,22,0.3)' : 'rgba(0,0,0,0.07)'}`,
                        boxShadow: hovered === breed.id ? '0 20px 60px rgba(249,115,22,0.12)' : '0 2px 12px rgba(0,0,0,0.04)',
                        transform: hovered === breed.id ? 'translateY(-6px)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div>
                          <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: '#1c1917', marginBottom: '2px' }}>{breed.name}</h3>
                          <p style={{ fontSize: '0.75rem', color: '#a8a29e', fontWeight: 600 }}>🌍 {breed.origin} · ⏳ {breed.life_span} yrs · ⚖️ {breed.weight?.metric} kg</p>
                        </div>
                        <span style={{ fontSize: '1.8rem' }}>🐱</span>
                      </div>

                      <p style={{ fontSize: '0.82rem', color: '#78716c', lineHeight: 1.65, marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {breed.description}
                      </p>

                      {/* Stats */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                        {[
                          { label: 'Affection', value: breed.affection_level, color: '#f97316' },
                          { label: 'Energy', value: breed.energy_level, color: '#0d9488' },
                          { label: 'Intelligence', value: breed.intelligence, color: '#8b5cf6' },
                          { label: 'Adaptability', value: breed.adaptability, color: '#f59e0b' },
                        ].map(stat => (
                          <div key={stat.label}>
                            <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#a8a29e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{stat.label}</p>
                            <StatDots value={stat.value} color={stat.color} />
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {breed.temperament?.split(', ').slice(0, 3).map(t => (
                          <span key={t} style={{ padding: '2px 8px', background: 'rgba(249,115,22,0.08)', border: '1.5px solid rgba(249,115,22,0.15)', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 600, color: '#f97316' }}>{t}</span>
                        ))}
                      </div>

                      <div style={{ marginTop: '12px', fontSize: '0.75rem', fontWeight: 700, color: '#f97316', opacity: hovered === breed.id ? 1 : 0, transition: 'opacity 0.2s' }}>
                        Click for details →
                      </div>
                    </div>
                  ))}
                </div>

                {filtered.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '60px 0' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '12px' }}>😿</div>
                    <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.5rem', color: '#78716c' }}>No breeds match "{search}"</p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Modal */}
        {selected && (
          <div onClick={() => setSelected(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <div onClick={e => e.stopPropagation()} style={{ background: 'white', borderRadius: '24px', padding: '36px', maxWidth: '540px', width: '100%', maxHeight: '80vh', overflowY: 'auto', position: 'relative', boxShadow: '0 32px 80px rgba(0,0,0,0.2)' }}>
              <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '9999px', width: '32px', height: '32px', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🐱</div>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '2rem', fontWeight: 700, color: '#1c1917', marginBottom: '4px' }}>{selected.name}</h2>
              <p style={{ fontSize: '0.8rem', color: '#a8a29e', fontWeight: 600, marginBottom: '16px' }}>🌍 {selected.origin} · ⏳ {selected.life_span} years · ⚖️ {selected.weight?.metric} kg</p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#57534e', marginBottom: '24px' }}>{selected.description}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { label: 'Affection', value: selected.affection_level, color: '#f97316' },
                  { label: 'Energy', value: selected.energy_level, color: '#0d9488' },
                  { label: 'Intelligence', value: selected.intelligence, color: '#8b5cf6' },
                  { label: 'Adaptability', value: selected.adaptability, color: '#f59e0b' },
                  { label: 'Grooming', value: selected.grooming, color: '#ec4899' },
                ].map(s => (
                  <div key={s.label} style={{ padding: '12px', background: 'rgba(249,115,22,0.04)', borderRadius: '12px' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, color: '#a8a29e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>{s.label}</p>
                    <StatDots value={s.value} color={s.color} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {selected.temperament?.split(', ').map(t => (
                  <span key={t} style={{ padding: '4px 12px', background: 'rgba(249,115,22,0.08)', border: '1.5px solid rgba(249,115,22,0.2)', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 600, color: '#f97316' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <style>{`
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }
      `}</style>
    </>
  )
}