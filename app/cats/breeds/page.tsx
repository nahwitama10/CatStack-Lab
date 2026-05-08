'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Breed {
  id: string; name: string; origin: string; temperament: string
  description: string; life_span: string; weight: string
  affection: number; energy: number; intelligence: number; adaptability: number; grooming: number
  emoji: string
}

// Static breed data — always renders instantly, no API dependency
const BREEDS: Breed[] = [
  { id: 'abys', name: 'Abyssinian', origin: 'Ethiopia', temperament: 'Active, Energetic, Independent, Intelligent, Gentle', description: 'The Abyssinian is easy to care for, and a joy to have in your home. They\'re affectionate cats and love both people and other animals.', life_span: '14 - 15', weight: '3 - 5', affection: 5, energy: 5, intelligence: 5, adaptability: 5, grooming: 1, emoji: '🐱' },
  { id: 'aege', name: 'Aegean', origin: 'Greece', temperament: 'Affectionate, Social, Intelligent, Playful, Active', description: 'Native to the Cycladic Islands of Greece, the Aegean is considered a natural breed and one of the oldest domesticated cat breeds.', life_span: '9 - 12', weight: '3 - 7', affection: 4, energy: 3, intelligence: 3, adaptability: 4, grooming: 3, emoji: '😸' },
  { id: 'amau', name: 'American Bobtail', origin: 'United States', temperament: 'Intelligent, Interactive, Lively, Playful, Sensitive', description: 'American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance.', life_span: '11 - 15', weight: '3 - 7', affection: 5, energy: 3, intelligence: 5, adaptability: 5, grooming: 2, emoji: '🐈' },
  { id: 'ambu', name: 'American Curl', origin: 'United States', temperament: 'Affectionate, Curious, Intelligent, Interactive, Lively', description: 'Distinguished by their unique curled-back ears, American Curls are people cats that don\'t like to be left alone.', life_span: '12 - 16', weight: '3 - 5', affection: 5, energy: 3, intelligence: 3, adaptability: 5, grooming: 2, emoji: '🐈' },
  { id: 'asho', name: 'American Shorthair', origin: 'United States', temperament: 'Active, Curious, Easy Going, Playful, Calm', description: 'The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children and dogs.', life_span: '15 - 17', weight: '3 - 7', affection: 3, energy: 3, intelligence: 3, adaptability: 4, grooming: 1, emoji: '😺' },
  { id: 'bali', name: 'Balinese', origin: 'United States', temperament: 'Affectionate, Intelligent, Playful', description: 'The Balinese is a long-haired breed of domestic cat with Siamese-style point coloration and sapphire-blue eyes.', life_span: '10 - 15', weight: '2 - 5', affection: 5, energy: 5, intelligence: 5, adaptability: 5, grooming: 3, emoji: '🐱' },
  { id: 'beng', name: 'Bengal', origin: 'United States', temperament: 'Alert, Agile, Energetic, Demanding, Intelligent', description: 'Bengals are a lot of fun to live with, but they\'re definitely a cat for an experienced cat owner. They like to be busy.', life_span: '12 - 15', weight: '3 - 7', affection: 5, energy: 5, intelligence: 5, adaptability: 5, grooming: 1, emoji: '🐆' },
  { id: 'birm', name: 'Birman', origin: 'France', temperament: 'Affectionate, Active, Gentle, Social', description: 'The Birman is a gentle, quiet cat who loves people and will follow his favorite person from room to room.', life_span: '14 - 15', weight: '3 - 8', affection: 5, energy: 3, intelligence: 3, adaptability: 4, grooming: 2, emoji: '😻' },
  { id: 'bomb', name: 'Bombay', origin: 'United States', temperament: 'Affectionate, Dependent, Gentle, Intelligent, Playful', description: 'The Bombay is an easygoing but fun cat. She likes to play and is smart enough to learn tricks.', life_span: '12 - 16', weight: '2 - 5', affection: 5, energy: 3, intelligence: 3, adaptability: 5, grooming: 1, emoji: '🖤' },
  { id: 'bslo', name: 'British Longhair', origin: 'United Kingdom', temperament: 'Adaptable, Affectionate, Calm, Friendly, Gentle', description: 'The British Longhair is a medium to large sized cat. It has all of the British Shorthair\'s good nature and placid temperament.', life_span: '12 - 14', weight: '3 - 7', affection: 3, energy: 2, intelligence: 3, adaptability: 5, grooming: 4, emoji: '🐈' },
  { id: 'bsho', name: 'British Shorthair', origin: 'United Kingdom', temperament: 'Affectionate, Easy Going, Gentle, Loyal, Patient', description: 'The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body and dense coat.', life_span: '12 - 17', weight: '3 - 10', affection: 4, energy: 2, intelligence: 3, adaptability: 5, grooming: 2, emoji: '🧁' },
  { id: 'bure', name: 'Burmese', origin: 'Myanmar', temperament: 'Curious, Intelligent, Gentle, Playful, Social', description: 'The Burmese is a sociable and affectionate breed that bonds closely with their humans. They retain a kitten-like personality well into old age.', life_span: '16 - 18', weight: '3 - 6', affection: 5, energy: 4, intelligence: 5, adaptability: 5, grooming: 1, emoji: '💛' },
  { id: 'char', name: 'Chartreux', origin: 'France', temperament: 'Adaptable, Affectionate, Gentle, Intelligent, Quiet', description: 'The Chartreux is quiet, reserved and thoughtful. They are polite and non-intrusive — they don\'t like to be the center of attention.', life_span: '12 - 15', weight: '3 - 7', affection: 4, energy: 3, intelligence: 4, adaptability: 5, grooming: 1, emoji: '🩶' },
  { id: 'chau', name: 'Chausie', origin: 'Egypt', temperament: 'Affectionate, Intelligent, Playful, Social', description: 'Chausies are active, athletic, highly intelligent cats that need a lot of enrichment and interaction to stay happy.', life_span: '12 - 14', weight: '4 - 7', affection: 4, energy: 5, intelligence: 5, adaptability: 3, grooming: 1, emoji: '🦁' },
  { id: 'ragd', name: 'Ragdoll', origin: 'United States', temperament: 'Affectionate, Gentle, Intelligent, Sociable', description: 'Ragdolls are docile, mild-mannered and friendly. They are known for going limp when held — earning them their name.', life_span: '15 - 25', weight: '5 - 9', affection: 5, energy: 2, intelligence: 4, adaptability: 5, grooming: 2, emoji: '💙' },
  { id: 'siam', name: 'Siamese', origin: 'Thailand', temperament: 'Active, Agile, Clever, Sociable, Loving', description: 'The Siamese is one of the oldest and most recognized cat breeds. Highly social and vocal, they love to chat with their humans.', life_span: '8 - 15', weight: '3 - 6', affection: 5, energy: 5, intelligence: 5, adaptability: 5, grooming: 1, emoji: '🔵' },
  { id: 'soma', name: 'Somali', origin: 'Somalia', temperament: 'Mischievous, Curious, Active, Friendly, Playful', description: 'The Somali lives life to the fullest. They climb higher, jump farther, and play harder than almost any other cat.', life_span: '12 - 16', weight: '3 - 5', affection: 5, energy: 5, intelligence: 5, adaptability: 5, grooming: 3, emoji: '🦊' },
  { id: 'tonk', name: 'Tonkinese', origin: 'Canada', temperament: 'Curious, Playful, Lively, Outgoing, Social', description: 'Tonkinese are extroverts. They love people and other animals. They are highly active and very entertaining.', life_span: '14 - 16', weight: '2 - 5', affection: 5, energy: 5, intelligence: 5, adaptability: 5, grooming: 1, emoji: '💜' },
  { id: 'turk', name: 'Turkish Angora', origin: 'Turkey', temperament: 'Sociable, Active, Playful, Adaptable, Affectionate', description: 'The Turkish Angora is a natural cat breed known for its silky coat, fine boning, and graceful movements.', life_span: '12 - 18', weight: '2 - 5', affection: 5, energy: 5, intelligence: 5, adaptability: 5, grooming: 2, emoji: '🤍' },
  { id: 'norw', name: 'Norwegian Forest Cat', origin: 'Norway', temperament: 'Gentle, Independent, Intelligent, Social', description: 'The Norwegian Forest Cat is a large, semi-longhaired cat adapted to a cold climate. They are friendly, calm, and gentle.', life_span: '14 - 16', weight: '4 - 7', affection: 3, energy: 3, intelligence: 4, adaptability: 4, grooming: 3, emoji: '❄️' },
]

function Dots({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {[1,2,3,4,5].map(i => (
        <div key={i} style={{ width: '8px', height: '8px', borderRadius: '9999px', background: i <= value ? color : 'rgba(0,0,0,0.08)', transition: 'background 0.3s' }} />
      ))}
    </div>
  )
}

export default function BreedsPage() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Breed | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return BREEDS.filter(b =>
      b.name.toLowerCase().includes(q) ||
      b.origin.toLowerCase().includes(q) ||
      b.temperament.toLowerCase().includes(q)
    )
  }, [search])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", minHeight: '100vh', background: 'linear-gradient(180deg, #fffbf5 0%, #fff8f0 100%)' }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(48px,8vw,100px) clamp(24px,8vw,120px) 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', opacity: 0.5 }} />
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '360px', height: '360px', background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(13,148,136,0.08)', border: '1.5px solid rgba(13,148,136,0.2)', borderRadius: '9999px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0d9488' }}>📖 Breeds</span>
            </div>
            <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#1c1917', marginBottom: '12px' }}>
              Cat{' '}
              <span style={{ background: 'linear-gradient(135deg, #0d9488, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Breeds</span>
            </h1>
            <p style={{ fontSize: '1rem', color: '#78716c', marginBottom: '32px', lineHeight: 1.7 }}>Explore {BREEDS.length} cat breeds — click any card for full details 🐾</p>

            {/* Search */}
            <div style={{ position: 'relative', maxWidth: '440px' }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '1rem' }}>🔍</span>
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search breed, origin, or trait..."
                style={{ width: '100%', padding: '12px 16px 12px 44px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(13,148,136,0.2)', borderRadius: '9999px', fontSize: '0.9rem', color: '#1c1917', outline: 'none', boxShadow: '0 4px 20px rgba(13,148,136,0.08)', fontFamily: 'inherit' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#0d9488')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(13,148,136,0.2)')}
              />
              {search && <button onClick={() => setSearch('')} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#a8a29e', fontSize: '1rem' }}>✕</button>}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section style={{ padding: '0 clamp(24px,8vw,120px) clamp(60px,8vw,100px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', color: '#a8a29e', fontWeight: 600, marginBottom: '20px' }}>
              {filtered.length} breed{filtered.length !== 1 ? 's' : ''}{search ? ` matching "${search}"` : ''}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '16px' }}>
              {filtered.map(breed => (
                <div key={breed.id} onClick={() => setSelected(breed)}
                  onMouseEnter={() => setHovered(breed.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    borderRadius: '20px', padding: '24px', cursor: 'pointer',
                    background: hovered === breed.id ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                    border: `1.5px solid ${hovered === breed.id ? 'rgba(13,148,136,0.3)' : 'rgba(0,0,0,0.07)'}`,
                    boxShadow: hovered === breed.id ? '0 20px 60px rgba(13,148,136,0.1)' : '0 2px 12px rgba(0,0,0,0.04)',
                    transform: hovered === breed.id ? 'translateY(-6px)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div>
                      <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: hovered === breed.id ? '#0d9488' : '#1c1917', transition: 'color 0.2s', marginBottom: '3px' }}>{breed.name}</h3>
                      <p style={{ fontSize: '0.72rem', color: '#a8a29e', fontWeight: 600 }}>🌍 {breed.origin} · ⏳ {breed.life_span} yrs · ⚖️ {breed.weight} kg</p>
                    </div>
                    <span style={{ fontSize: '2rem', transition: 'transform 0.3s', transform: hovered === breed.id ? 'scale(1.2) rotate(10deg)' : 'none' }}>{breed.emoji}</span>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: '#78716c', lineHeight: 1.65, marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {breed.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                    {[
                      { label: 'Affection', value: breed.affection, color: '#f97316' },
                      { label: 'Energy', value: breed.energy, color: '#0d9488' },
                      { label: 'Intelligence', value: breed.intelligence, color: '#8b5cf6' },
                      { label: 'Adaptability', value: breed.adaptability, color: '#f59e0b' },
                    ].map(s => (
                      <div key={s.label}>
                        <p style={{ fontSize: '0.6rem', fontWeight: 800, color: '#a8a29e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{s.label}</p>
                        <Dots value={s.value} color={s.color} />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {breed.temperament.split(', ').slice(0, 3).map(t => (
                      <span key={t} style={{ padding: '2px 8px', background: 'rgba(13,148,136,0.08)', border: '1.5px solid rgba(13,148,136,0.15)', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 600, color: '#0d9488' }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: '12px', fontSize: '0.75rem', fontWeight: 700, color: '#0d9488', opacity: hovered === breed.id ? 1 : 0, transition: 'opacity 0.2s' }}>Click for full details →</div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: '4rem', marginBottom: '12px' }}>😿</div>
                <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.5rem', color: '#78716c' }}>No breeds match "{search}"</p>
                <button onClick={() => setSearch('')} style={{ marginTop: '16px', padding: '10px 24px', background: 'var(--orange)', color: 'white', border: 'none', borderRadius: '9999px', fontWeight: 700, cursor: 'pointer' }}>Clear search</button>
              </div>
            )}
          </div>
        </section>

        {/* Detail Modal */}
        {selected && (
          <div onClick={() => setSelected(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <div onClick={e => e.stopPropagation()} style={{ background: 'white', borderRadius: '24px', padding: '36px', maxWidth: '540px', width: '100%', maxHeight: '85vh', overflowY: 'auto', position: 'relative', boxShadow: '0 32px 80px rgba(0,0,0,0.2)' }}>
              <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '9999px', width: '32px', height: '32px', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
              <div style={{ fontSize: '3.5rem', marginBottom: '12px' }}>{selected.emoji}</div>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '2rem', fontWeight: 700, color: '#1c1917', marginBottom: '4px' }}>{selected.name}</h2>
              <p style={{ fontSize: '0.8rem', color: '#a8a29e', fontWeight: 600, marginBottom: '16px' }}>🌍 {selected.origin} · ⏳ {selected.life_span} years · ⚖️ {selected.weight} kg</p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#57534e', marginBottom: '28px' }}>{selected.description}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
                {[
                  { label: 'Affection', value: selected.affection, color: '#f97316' },
                  { label: 'Energy', value: selected.energy, color: '#0d9488' },
                  { label: 'Intelligence', value: selected.intelligence, color: '#8b5cf6' },
                  { label: 'Adaptability', value: selected.adaptability, color: '#f59e0b' },
                  { label: 'Grooming', value: selected.grooming, color: '#ec4899' },
                ].map(s => (
                  <div key={s.label} style={{ padding: '14px', background: 'rgba(249,115,22,0.04)', borderRadius: '12px' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, color: '#a8a29e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>{s.label}</p>
                    <Dots value={s.value} color={s.color} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {selected.temperament.split(', ').map(t => (
                  <span key={t} style={{ padding: '4px 12px', background: 'rgba(13,148,136,0.08)', border: '1.5px solid rgba(13,148,136,0.2)', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 600, color: '#0d9488' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}