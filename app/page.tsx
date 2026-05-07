'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const timeline = [
  { year: '2024–Now', role: 'Senior Fullstack Developer', place: 'Enterprise Client', desc: 'Building workflow management systems and REST APIs with ASP.NET Core, PostgreSQL, and React frontends.' },
  { year: '2022–2024', role: 'Fullstack Developer', place: 'Software House', desc: 'Delivered 20+ web projects across e-commerce, HR systems, and payment integrations for Indonesian SMEs.' },
  { year: '2021–2022', role: 'Junior Backend Developer', place: 'Startup', desc: 'Built the initial API layer for a logistics SaaS product. First production experience with microservices.' },
  { year: '2017–2021', role: 'Computer Science Degree', place: 'University', desc: 'Graduated with a focus on software engineering. Final project: a real-time inventory system with barcode scanning.' },
]

const skills = [
  { name: 'ASP.NET Core / C#', level: 92, color: 'var(--teal)' },
  { name: 'Next.js / React', level: 88, color: 'var(--orange)' },
  { name: 'PostgreSQL / SQL Server', level: 85, color: '#8b5cf6' },
  { name: 'TypeScript', level: 84, color: '#2563eb' },
  { name: 'Docker / DevOps', level: 72, color: '#0891b2' },
  { name: 'Tailwind CSS', level: 90, color: '#06b6d4' },
]

const funFacts = [
  { icon: '🐱', text: 'Owned by 2 cats (they own me, really)' },
  { icon: '☕', text: 'Coffee drinker — at least 3 cups before lunch' },
  { icon: '🌙', text: 'Best code written after midnight' },
  { icon: '🇮🇩', text: 'Based in Indonesia, building globally' },
  { icon: '🎮', text: 'Strategy game enjoyer on weekends' },
  { icon: '📚', text: 'Currently reading: Clean Architecture' },
]

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth(level), 200)
    return () => clearTimeout(t)
  }, [level])

  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#44403c' }}>{name}</span>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color }}>  {level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${width}%`, background: `linear-gradient(90deg, ${color}, var(--orange))` }} />
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>

        {/* ─── Hero ─── */}
        <section style={{ background: 'var(--cream)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 8vw, 120px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />
          <div className="dot-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4 }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '32px' }}>😺 About Me</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="about-hero-grid">
              <div>
                <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#1c1917', marginBottom: '24px' }}>
                  Hey, I'm{' '}
                  <span style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Ibnu</span> 👋
                </h1>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.85, color: '#57534e', marginBottom: '24px' }}>
                  I'm a fullstack developer from Indonesia with a passion for building things that actually work — and a slight obsession with cats 🐱.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#78716c', marginBottom: '32px' }}>
                  I specialize in <strong style={{ color: 'var(--teal)' }}>ASP.NET Core</strong> backend systems and <strong style={{ color: 'var(--orange)' }}>Next.js</strong> frontends. I've shipped everything from payment gateways to enterprise workflow engines — always with clean code and a cat nearby.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{
                    padding: '12px 24px', background: 'var(--orange)', color: 'white',
                    borderRadius: '9999px', fontWeight: 700, fontSize: '0.95rem',
                    textDecoration: 'none', boxShadow: '0 4px 20px rgba(249,115,22,0.35)',
                    transition: 'all 0.2s',
                  }}>
                    Let's Work Together 🐾
                  </Link>
                  <a href="https://github.com/nahwitama10" target="_blank" rel="noopener noreferrer" style={{
                    padding: '12px 24px', background: 'white', color: '#1c1917',
                    border: '2px solid #e7e5e4', borderRadius: '9999px', fontWeight: 700,
                    fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s',
                  }}>
                    ⌨️ GitHub
                  </a>
                </div>
              </div>

              {/* Stats card */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { number: '4+', label: 'Years Experience', icon: '🗓️', color: 'var(--orange)' },
                  { number: '50+', label: 'APIs Shipped', icon: '⚙️', color: 'var(--teal)' },
                  { number: '30+', label: 'Web Projects', icon: '🌐', color: '#8b5cf6' },
                  { number: '2', label: 'Cats (bosses)', icon: '🐱', color: '#f59e0b' },
                ].map(stat => (
                  <div key={stat.label} style={{
                    background: 'white', borderRadius: '20px', padding: '24px',
                    border: '1.5px solid rgba(249,115,22,0.1)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '4px' }}>{stat.icon}</div>
                    <div className="font-display" style={{ fontSize: '2.2rem', fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.number}</div>
                    <div style={{ fontSize: '0.75rem', color: '#a8a29e', fontWeight: 600, marginTop: '4px', letterSpacing: '0.04em' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Timeline ─── */}
        <section style={{ background: 'white', padding: 'clamp(60px, 10vw, 100px) clamp(24px, 8vw, 120px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="timeline-grid">
              <div>
                <div className="section-label" style={{ marginBottom: '24px' }}>📅 Experience</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1c1917', lineHeight: 1.1, marginBottom: '48px' }}>
                  My journey so far
                </h2>

                <div style={{ position: 'relative', paddingLeft: '28px', borderLeft: '2px solid rgba(249,115,22,0.15)' }}>
                  {timeline.map((item, i) => (
                    <div key={i} style={{ position: 'relative', marginBottom: i < timeline.length - 1 ? '40px' : 0 }}>
                      {/* Dot */}
                      <div className="timeline-dot" style={{ position: 'absolute', left: '-35px', top: '4px' }} />
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.year}</div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1c1917', marginBottom: '2px' }}>{item.role}</h3>
                      <div style={{ fontSize: '0.8rem', color: 'var(--teal)', fontWeight: 600, marginBottom: '8px' }}>{item.place}</div>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#78716c' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="section-label" style={{ marginBottom: '24px' }}>🛠️ Skills</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1c1917', lineHeight: 1.1, marginBottom: '48px' }}>
                  What I work with
                </h2>
                <div>
                  {skills.map(s => <SkillBar key={s.name} {...s} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Fun facts ─── */}
        <section style={{ background: 'var(--cream)', padding: 'clamp(60px, 10vw, 100px) clamp(24px, 8vw, 120px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-label" style={{ marginBottom: '24px', margin: '0 auto 24px' }}>😸 Fun Facts</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1c1917', marginBottom: '12px' }}>
              Beyond the code
            </h2>
            <p style={{ color: '#78716c', fontSize: '1rem', marginBottom: '48px' }}>Things you'd learn about me over coffee ☕</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="facts-grid">
              {funFacts.map((fact, i) => (
                <div key={i} className="card-lift" style={{
                  background: 'white', borderRadius: '20px', padding: '28px 24px',
                  border: '1.5px solid rgba(249,115,22,0.08)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  textAlign: 'left', cursor: 'default',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{fact.icon}</div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 500, color: '#44403c', lineHeight: 1.5 }}>{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{ background: 'var(--orange)', padding: 'clamp(60px, 10vw, 100px) clamp(24px, 8vw, 120px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-60px', left: '10%', fontSize: '8rem', opacity: 0.08, pointerEvents: 'none' }}>🐾</div>
          <div style={{ position: 'absolute', bottom: '-40px', right: '10%', fontSize: '6rem', opacity: 0.08, pointerEvents: 'none' }}>🐱</div>
          <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px', animation: 'float 3s ease-in-out infinite' }}>😺</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: 'white', marginBottom: '16px', lineHeight: 1.1 }}>
              Let's build something paw-some!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '36px' }}>
              Whether you need a backend API, a full web app, or just want to talk about cats — I'm here for it.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 32px', background: 'white', color: 'var(--orange)',
              borderRadius: '9999px', fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              transition: 'all 0.2s',
            }}>
              Get In Touch 🐾
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 768px) {
          .about-hero-grid { grid-template-columns: 1fr !important; }
          .timeline-grid { grid-template-columns: 1fr !important; }
          .facts-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .facts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}