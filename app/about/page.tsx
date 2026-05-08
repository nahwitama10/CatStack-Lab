'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const timeline = [
  {
    year: '2024 — Now',
    role: 'Senior Fullstack Developer',
    place: 'Enterprise Client',
    type: 'work',
    desc: 'Building workflow management systems and REST APIs with ASP.NET Core, PostgreSQL, and React frontends. Leading a small dev team.',
  },
  {
    year: '2022 — 2024',
    role: 'Fullstack Developer',
    place: 'Software House',
    type: 'work',
    desc: 'Delivered 20+ web projects across e-commerce, HR systems, and payment integrations for Indonesian SMEs and enterprise clients.',
  },
  {
    year: '2021 — 2022',
    role: 'Junior Backend Developer',
    place: 'Startup',
    type: 'work',
    desc: 'Built the initial API layer for a logistics SaaS product. First production experience with microservices and event-driven architecture.',
  },
  {
    year: '2017 — 2021',
    role: 'Computer Science Degree',
    place: 'University',
    type: 'edu',
    desc: 'Graduated with focus on software engineering. Final project: a real-time inventory system with barcode scanning and live reporting.',
  },
]

const skills = [
  { name: 'ASP.NET Core / C#', level: 92, color: '#0d9488' },
  { name: 'Next.js / React', level: 88, color: '#f97316' },
  { name: 'PostgreSQL / SQL Server', level: 85, color: '#8b5cf6' },
  { name: 'TypeScript', level: 84, color: '#2563eb' },
  { name: 'Tailwind CSS', level: 90, color: '#06b6d4' },
  { name: 'Docker / DevOps', level: 72, color: '#f59e0b' },
]

const funFacts = [
  { icon: '🐱', title: 'Cat Dad', text: 'Owned by 2 cats who review every PR' },
  { icon: '☕', title: 'Coffee Fueled', text: 'Min 3 cups before lunch, no exceptions' },
  { icon: '🌙', title: 'Night Owl', text: 'Best code always written after midnight' },
  { icon: '🇮🇩', title: 'Indonesian', text: 'Based in Indonesia, shipping globally' },
  { icon: '🎮', title: 'Gamer', text: 'Strategy games are basically system design' },
  { icon: '📚', title: 'Reading', text: 'Currently: Clean Architecture by Uncle Bob' },
]

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth(level), 300)
    return () => clearTimeout(t)
  }, [level])
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#44403c' }}>{name}</span>
        <span style={{ fontSize: '0.78rem', fontWeight: 800, color, letterSpacing: '0.02em' }}>{level}%</span>
      </div>
      <div style={{ height: '6px', background: 'rgba(0,0,0,0.06)', borderRadius: '9999px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: '9999px',
          background: `linear-gradient(90deg, ${color}, #f97316)`,
          width: `${width}%`,
          transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: `0 0 8px ${color}60`,
        }} />
      </div>
    </div>
  )
}

const sectionLabel = (emoji: string, text: string, color = '#f97316', bg = 'rgba(249,115,22,0.08)', border = 'rgba(249,115,22,0.2)') => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '6px 16px', background: bg,
    border: `1.5px solid ${border}`, borderRadius: '9999px', marginBottom: '20px',
  }}>
    <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color }}>
      {emoji} {text}
    </span>
  </div>
)

export default function AboutPage() {
  const [hoveredFact, setHoveredFact] = useState<number | null>(null)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>

        {/* ─── Hero ─── */}
        <section style={{
          background: 'linear-gradient(160deg, #fffbf5 0%, #fff8f0 60%, #f0fdfa 100%)',
          padding: 'clamp(60px,10vw,120px) clamp(24px,8vw,120px)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(13,148,136,0.07) 0%, transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', opacity: 0.6 }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            {sectionLabel('😺', 'About Me')}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="about-hero-grid">

              <div>
                <h1 style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 'clamp(2.8rem,6vw,4.5rem)', fontWeight: 700,
                  lineHeight: 1.05, letterSpacing: '-0.03em', color: '#1c1917', marginBottom: '24px',
                }}>
                  Hey, I'm{' '}
                  <span style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Ibnu</span> 👋
                </h1>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#57534e', marginBottom: '20px' }}>
                  I'm a fullstack developer from Indonesia with a passion for building things that actually work — and a slight obsession with cats 🐱.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#78716c', marginBottom: '36px' }}>
                  I specialize in <strong style={{ color: '#0d9488' }}>ASP.NET Core</strong> backend systems and <strong style={{ color: '#f97316' }}>Next.js</strong> frontends. I've shipped everything from payment gateways to enterprise workflow engines — always with clean code and a cat nearby.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{
                    padding: '12px 24px', background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    color: 'white', borderRadius: '9999px', fontWeight: 700, fontSize: '0.95rem',
                    textDecoration: 'none', boxShadow: '0 4px 20px rgba(249,115,22,0.35)', transition: 'all 0.2s',
                  }}>Let's Work Together 🐾</Link>
                  <a href="https://github.com/nahwitama10" target="_blank" rel="noopener noreferrer" style={{
                    padding: '12px 24px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)',
                    color: '#1c1917', border: '1.5px solid rgba(0,0,0,0.1)', borderRadius: '9999px',
                    fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s',
                  }}>⌨️ GitHub</a>
                </div>
              </div>

              {/* Stat cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { number: '4+', label: 'Years Experience', icon: '🗓️', color: '#f97316' },
                  { number: '50+', label: 'APIs Shipped', icon: '⚙️', color: '#0d9488' },
                  { number: '30+', label: 'Web Projects', icon: '🌐', color: '#8b5cf6' },
                  { number: '2', label: 'Cats (bosses)', icon: '🐱', color: '#d97706' },
                ].map((stat, i) => (
                  <div key={stat.label}
                    onMouseEnter={() => setHoveredStat(i)}
                    onMouseLeave={() => setHoveredStat(null)}
                    style={{
                      background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)', borderRadius: '20px', padding: '24px',
                      border: `1.5px solid ${hoveredStat === i ? stat.color + '40' : 'rgba(0,0,0,0.07)'}`,
                      boxShadow: hoveredStat === i ? `0 12px 40px ${stat.color}20` : '0 4px 20px rgba(0,0,0,0.05)',
                      textAlign: 'center', transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                      transform: hoveredStat === i ? 'translateY(-6px)' : 'none', cursor: 'default',
                    }}
                  >
                    <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>{stat.icon}</div>
                    <div style={{
                      fontFamily: "'Fraunces', Georgia, serif", fontSize: '2.4rem', fontWeight: 700, lineHeight: 1,
                      background: `linear-gradient(135deg, ${stat.color}, #f97316)`,
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>{stat.number}</div>
                    <div style={{ fontSize: '0.7rem', color: '#a8a29e', fontWeight: 600, marginTop: '4px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Timeline + Skills ─── */}
        <section style={{ background: 'white', padding: 'clamp(60px,10vw,120px) clamp(24px,8vw,120px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }} className="timeline-grid">

              <div>
                {sectionLabel('📅', 'Experience')}
                <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#1c1917', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '48px' }}>
                  My journey so far
                </h2>
                <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: '2px solid rgba(249,115,22,0.15)' }}>
                  {timeline.map((item, i) => (
                    <div key={i} style={{ position: 'relative', marginBottom: i < timeline.length - 1 ? '40px' : 0 }}>
                      <div style={{
                        position: 'absolute', left: '-38px', top: '5px',
                        width: '12px', height: '12px',
                        background: item.type === 'edu' ? '#8b5cf6' : '#f97316',
                        borderRadius: '9999px', border: '3px solid white',
                        boxShadow: `0 0 0 3px ${item.type === 'edu' ? 'rgba(139,92,246,0.2)' : 'rgba(249,115,22,0.2)'}`,
                      }} />
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: item.type === 'edu' ? '#8b5cf6' : '#f97316', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.year}</div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1c1917', marginBottom: '2px' }}>{item.role}</h3>
                      <div style={{ fontSize: '0.8rem', color: '#0d9488', fontWeight: 600, marginBottom: '8px' }}>@ {item.place}</div>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: '#78716c' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {sectionLabel('🛠️', 'Tech Skills', '#0d9488', 'rgba(13,148,136,0.08)', 'rgba(13,148,136,0.2)')}
                <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#1c1917', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '48px' }}>
                  What I work with
                </h2>
                {skills.map(s => <SkillBar key={s.name} {...s} />)}
                <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 800, color: '#a8a29e', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>Also comfortable with</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['Redis', 'RabbitMQ', 'Azure', 'SignalR', 'Entity Framework', 'SQL Server', 'Angular', 'Git', 'Linux'].map(t => (
                      <span key={t} style={{ padding: '3px 10px', background: 'rgba(0,0,0,0.04)', border: '1.5px solid rgba(0,0,0,0.07)', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600, color: '#78716c' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Fun Facts ─── */}
        <section style={{ background: 'linear-gradient(180deg, #fffbf5 0%, #fff8f0 100%)', padding: 'clamp(60px,10vw,120px) clamp(24px,8vw,120px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            {sectionLabel('😸', 'Fun Facts')}
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#1c1917', letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Beyond the code
            </h2>
            <p style={{ color: '#78716c', fontSize: '1rem', marginBottom: '56px' }}>Things you'd learn over coffee ☕</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }} className="facts-grid">
              {funFacts.map((fact, i) => (
                <div key={i}
                  onMouseEnter={() => setHoveredFact(i)}
                  onMouseLeave={() => setHoveredFact(null)}
                  style={{
                    background: hoveredFact === i ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: '20px', padding: '28px 24px',
                    border: `1.5px solid ${hoveredFact === i ? 'rgba(249,115,22,0.25)' : 'rgba(0,0,0,0.07)'}`,
                    boxShadow: hoveredFact === i ? '0 20px 60px rgba(249,115,22,0.1)' : '0 2px 12px rgba(0,0,0,0.04)',
                    transform: hoveredFact === i ? 'translateY(-6px) rotate(0.5deg)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                    textAlign: 'left', cursor: 'default',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '12px', display: 'inline-block', transform: hoveredFact === i ? 'scale(1.2) rotate(10deg)' : 'none', transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>{fact.icon}</div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 800, color: '#1c1917', marginBottom: '4px' }}>{fact.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#78716c', lineHeight: 1.6 }}>{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)',
          padding: 'clamp(60px,10vw,100px) clamp(24px,8vw,120px)',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.06)', borderRadius: '9999px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '250px', height: '250px', background: 'rgba(255,255,255,0.06)', borderRadius: '9999px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '20%', left: '12%', fontSize: '5rem', opacity: 0.08, pointerEvents: 'none', userSelect: 'none' }}>🐾</div>
          <div style={{ position: 'absolute', bottom: '15%', right: '12%', fontSize: '4rem', opacity: 0.08, pointerEvents: 'none', userSelect: 'none' }}>🐱</div>
          <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '16px', display: 'inline-block', animation: 'float 3s ease-in-out infinite' }}>😺</div>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px' }}>
              Let's build something paw-some!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '36px' }}>
              Whether you need a backend API, a full web app, or just want to talk about cats — I'm here for it.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 32px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
              color: '#f97316', borderRadius: '9999px', fontWeight: 800, fontSize: '1rem',
              textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', transition: 'all 0.2s',
            }}>Get In Touch 🐾</Link>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }
        @media (max-width:900px) {
          .about-hero-grid { grid-template-columns:1fr !important; }
          .timeline-grid { grid-template-columns:1fr !important; }
        }
        @media (max-width:768px) { .facts-grid { grid-template-columns:1fr 1fr !important; } }
        @media (max-width:480px) { .facts-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </>
  )
}