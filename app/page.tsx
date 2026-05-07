'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const timeline = [
  {
    year: '2024 — Present',
    role: 'Senior Fullstack Developer',
    place: 'Enterprise Workflow Systems',
    desc: 'Designing and maintaining enterprise-scale workflow management platforms using ASP.NET Core, PostgreSQL, and React/Next.js. Focused on approval systems, notification architecture, API integrations, and scalable business process automation.',
  },
  {
    year: '2022 — 2024',
    role: 'Fullstack Developer',
    place: 'Software House',
    desc: 'Delivered production-ready systems for Indonesian businesses including HR platforms, procurement systems, dashboards, and payment-integrated web applications. Worked closely with clients from requirement gathering through deployment.',
  },
  {
    year: '2021 — 2022',
    role: 'Backend Developer',
    place: 'Logistics SaaS Startup',
    desc: 'Built REST APIs and backend services for operational logistics workflows. Contributed to authentication systems, database optimization, and early microservice adoption.',
  },
  {
    year: '2017 — 2021',
    role: 'Computer Science Degree',
    place: 'Software Engineering Focus',
    desc: 'Focused on backend systems, software architecture, and database engineering. Final project involved a real-time inventory platform with barcode-based transaction tracking.',
  },
]

const skills = [
  { name: 'ASP.NET Core & C#', level: 92, color: 'var(--teal)' },
  { name: 'Next.js / React Ecosystem', level: 89, color: 'var(--orange)' },
  { name: 'SQL Server & PostgreSQL', level: 87, color: '#8b5cf6' },
  { name: 'REST API Architecture', level: 90, color: '#2563eb' },
  { name: 'TypeScript', level: 84, color: '#0891b2' },
  { name: 'Tailwind CSS & UI Systems', level: 91, color: '#06b6d4' },
]

const funFacts = [
  { icon: '🇮🇩', text: 'Based in Indonesia, collaborating with global technologies and modern web stacks' },
  { icon: '⚡', text: 'Interested in scalable workflow systems and clean backend architecture' },
  { icon: '🐱', text: 'Cat enthusiast — CatStack Lab is inspired by my two cats' },
  { icon: '📚', text: 'Actively learning system design, frontend architecture, and product engineering' },
  { icon: '🛠️', text: 'Enjoy turning complex business processes into usable software systems' },
  { icon: '🚀', text: 'Currently building modern frontend experiments with Next.js and Tailwind CSS' },
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
        <div className="skill-bar-fill" style={{ width: `${width}%`, background: `linear-gradient(135deg, rgba(249,115,22,1) 0%, rgba(251,146,60,1) 35%, rgba(13,148,136,0.95) 100%)` }} />
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
                  <span style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Ibnu Nahwitama.</span> 👋
                </h1>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.85, color: '#57534e', marginBottom: '24px' }}>
                  I'm a fullstack developer focused on building scalable web applications, workflow systems, and modern user interfaces with strong attention to performance, maintainability, and user experience.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#78716c', marginBottom: '32px' }}>
                  My core expertise is in <strong style={{ color: 'var(--teal)' }}>ASP.NET Core</strong>, <strong style={{ color: 'var(--orange)' }}>Next.js</strong>, REST API development, and database-driven applications. I enjoy building systems that solve operational problems while maintaining clean architecture and production-ready engineering standards.
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
                  { number: '30+', label: 'Projects Delivered', icon: '🚀', color: 'var(--orange)' },
                  { number: '50+', label: 'REST APIs Built', icon: '⚙️', color: 'var(--teal)' },
                  { number: '4+', label: 'Years Experience', icon: '🧠', color: '#8b5cf6' },
                  { number: '100%', label: 'Production Focused', icon: '🛡️', color: '#f59e0b' },
                ].map(stat => (
                    <div
                      key={stat.label}
                      className="glass-card"
                      style={{
                        borderRadius: '20px',
                        padding: '24px',
                        textAlign: 'center',
                        backdropFilter: 'blur(12px)',
                      }}
                    >
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

        {/* ─── Engineering Focus ─── */}
        <section
          style={{
            background: 'white',
            padding: 'clamp(60px, 10vw, 100px) clamp(24px, 8vw, 120px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            <div
              className="section-label"
              style={{ 
                marginBottom: '24px' 
              }}
            >
              ⚙️ Engineering Focus
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '24px',
                marginBottom: '56px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ maxWidth: '700px' }}>
                <h2
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    color: '#1c1917',
                    lineHeight: 1.1,
                    marginBottom: '16px',
                  }}
                >
                  Building software beyond just interfaces
                </h2>

                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.85,
                    color: '#78716c',
                  }}
                >
                  I focus on creating scalable systems, maintainable architectures,
                  and modern frontend experiences that solve real operational and
                  business problems.
                </p>
              </div>
            </div>

            <div
              className="engineering-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                backdropFilter: 'blur(12px)'
              }}
            >
              {[
                {
                  icon: '⚙️',
                  title: 'REST API Architecture',
                  desc: 'Designing secure and scalable backend APIs with ASP.NET Core, authentication flows, validation layers, and structured business logic.',
                  color: 'var(--orange)',
                },
                {
                  icon: '🏢',
                  title: 'Enterprise Workflow Systems',
                  desc: 'Building approval flows, notification systems, document processes, and operational dashboards for enterprise environments.',
                  color: 'var(--teal)',
                },
                {
                  icon: '💻',
                  title: 'Modern Frontend Engineering',
                  desc: 'Creating responsive, accessible, and performant interfaces using Next.js, React, TypeScript, and Tailwind CSS.',
                  color: '#8b5cf6',
                },
                {
                  icon: '🗄️',
                  title: 'Database Engineering',
                  desc: 'Working with PostgreSQL and SQL Server for query optimization, relational modeling, and transactional business systems.',
                  color: '#2563eb',
                },
                {
                  icon: '🚀',
                  title: 'Deployment & DevOps',
                  desc: 'Deploying applications with Docker, CI/CD workflows, environment management, and production-ready configuration practices.',
                  color: '#0891b2',
                },
                {
                  icon: '🧠',
                  title: 'System Thinking',
                  desc: 'Focused on maintainability, reusable architecture, scalable component systems, and long-term engineering quality.',
                  color: '#f59e0b',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-lift"
                  style={{
                    background: 'var(--cream)',
                    borderRadius: '24px',
                    padding: '32px',
                    border: '1.5px solid rgba(249,115,22,0.08)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      marginBottom: '20px',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#1c1917',
                      marginBottom: '12px',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      color: '#78716c',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
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
              Let's build modern software that scales!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '36px' }}>
              I'm available for frontend, backend, and fullstack development projects focused on scalable architecture, modern UI systems, and production-ready applications.
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
        .engineering-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 900px) {
          .engineering-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .engineering-grid {
            grid-template-columns: 1fr !important;
          }
        }          
      `}</style>
    </>
  )
}