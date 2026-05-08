'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const projects = [
  { id: 1, title: 'Workflow Engine Pro', desc: 'Enterprise BPM system with visual workflow designer, approval chains, and real-time notifications via SignalR. Handles complex multi-step approval processes for enterprise clients.', type: 'backend', techs: ['ASP.NET Core', 'SignalR', 'PostgreSQL', 'React', 'Redis'], emoji: '⚙️', gradient: 'linear-gradient(135deg, #0d9488, #0f766e)', accentColor: '#0d9488', accentBg: 'rgba(13,148,136,0.08)', accentBorder: 'rgba(13,148,136,0.2)', featured: true, year: '2024', status: 'Production' },
  { id: 2, title: 'CatStack Lab', desc: 'This very portfolio! Built with Next.js, Tailwind CSS, and TypeScript. Features cat-themed design, The Cat API integration, and a fullstack developer showcase.', type: 'web', techs: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'], emoji: '🐱', gradient: 'linear-gradient(135deg, #f97316, #ea580c)', accentColor: '#f97316', accentBg: 'rgba(249,115,22,0.08)', accentBorder: 'rgba(249,115,22,0.2)', featured: true, year: '2025', status: 'Live' },
  { id: 3, title: 'Payment Gateway Integration', desc: 'Midtrans payment integration with webhook handling, retry logic, idempotency keys, and a reconciliation dashboard for finance teams.', type: 'integration', techs: ['ASP.NET Core', 'Midtrans', 'PostgreSQL', 'Redis', 'Docker'], emoji: '💳', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', accentColor: '#8b5cf6', accentBg: 'rgba(139,92,246,0.08)', accentBorder: 'rgba(139,92,246,0.2)', featured: false, year: '2024', status: 'Production' },
  { id: 4, title: 'E-Commerce Platform', desc: 'Multi-tenant e-commerce with inventory management, order tracking, seller dashboard, and automated invoice generation.', type: 'web', techs: ['Next.js', 'ASP.NET Core', 'PostgreSQL', 'Docker', 'Nginx'], emoji: '🛒', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)', accentColor: '#d97706', accentBg: 'rgba(245,158,11,0.08)', accentBorder: 'rgba(245,158,11,0.2)', featured: false, year: '2023', status: 'Production' },
  { id: 5, title: 'WhatsApp Notifier Service', desc: 'Automated WhatsApp notification microservice for business alerts, OTP delivery, and order status updates using RabbitMQ for queuing.', type: 'integration', techs: ['ASP.NET Core', 'WhatsApp API', 'RabbitMQ', 'Docker'], emoji: '💬', gradient: 'linear-gradient(135deg, #22c55e, #16a34a)', accentColor: '#16a34a', accentBg: 'rgba(34,197,94,0.08)', accentBorder: 'rgba(34,197,94,0.2)', featured: false, year: '2023', status: 'Production' },
  { id: 6, title: 'HR Management System', desc: 'Full HR system with leave management, payroll integration, performance tracking, and org chart visualization.', type: 'backend', techs: ['ASP.NET Core', 'C#', 'SQL Server', 'Angular', 'SSRS'], emoji: '👥', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)', accentColor: '#2563eb', accentBg: 'rgba(59,130,246,0.08)', accentBorder: 'rgba(59,130,246,0.2)', featured: false, year: '2023', status: 'Production' },
  { id: 7, title: 'Fish Feed Landing Page', desc: 'Clean, responsive landing page for AquaBoost product showcase. Optimized for conversions with modern UI/UX design.', type: 'web', techs: ['Next.js', 'Tailwind CSS', 'TypeScript'], emoji: '🐟', gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)', accentColor: '#0891b2', accentBg: 'rgba(6,182,212,0.08)', accentBorder: 'rgba(6,182,212,0.2)', featured: false, year: '2024', status: 'Live' },
  { id: 8, title: 'Document Management System', desc: 'Enterprise DMS with version control, approval workflows, digital signatures, and role-based access control.', type: 'backend', techs: ['ASP.NET Core', 'PostgreSQL', 'MinIO', 'Redis', 'React'], emoji: '📄', gradient: 'linear-gradient(135deg, #ec4899, #db2777)', accentColor: '#db2777', accentBg: 'rgba(236,72,153,0.08)', accentBorder: 'rgba(236,72,153,0.2)', featured: false, year: '2023', status: 'Production' },
  { id: 9, title: 'Azure AD SSO Integration', desc: 'Single Sign-On implementation connecting enterprise Azure Active Directory with internal applications using OAuth 2.0 and OIDC.', type: 'integration', techs: ['ASP.NET Core', 'Azure AD', 'OAuth 2.0', 'OIDC'], emoji: '🔐', gradient: 'linear-gradient(135deg, #0078d4, #004e8c)', accentColor: '#0078d4', accentBg: 'rgba(0,120,212,0.08)', accentBorder: 'rgba(0,120,212,0.2)', featured: false, year: '2024', status: 'Production' },
]

const FILTERS = [
  { label: 'All Projects 🐾', value: 'all' },
  { label: 'Web Apps 🌐', value: 'web' },
  { label: 'Backend ⚙️', value: 'backend' },
  { label: 'Integrations 🔗', value: 'integration' },
]

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type') || 'all'

  const [filter, setFilter] = useState(typeParam)
  const [hovered, setHovered] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => { setFilter(typeParam) }, [typeParam])

  const filtered = useMemo(() => {
    let list = filter === 'all' ? projects : projects.filter(p => p.type === filter)
    if (search) list = list.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase()) || p.techs.some(t => t.toLowerCase().includes(search.toLowerCase())))
    return list
  }, [filter, search])

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
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f97316' }}>🛠️ Projects</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '32px' }}>
              <div>
                <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#1c1917' }}>
                  Things I've{' '}
                  <span style={{ background: 'linear-gradient(135deg, #f97316, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>built</span>
                </h1>
                <p style={{ fontSize: '1rem', color: '#78716c', marginTop: '12px', lineHeight: 1.7 }}>
                  {projects.length} projects across backend, web, and integrations 🐾
                </p>
              </div>
              {/* Search */}
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '1rem' }}>🔍</span>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects or tech..."
                  style={{ padding: '11px 16px 11px 40px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(249,115,22,0.2)', borderRadius: '9999px', fontSize: '0.875rem', color: '#1c1917', outline: 'none', fontFamily: 'inherit', width: '240px' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#f97316')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(249,115,22,0.2)')}
                />
              </div>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {FILTERS.map(f => (
                <button key={f.value} onClick={() => setFilter(f.value)}
                  style={{
                    padding: '9px 20px', borderRadius: '9999px', fontSize: '0.825rem', fontWeight: 700,
                    cursor: 'pointer', border: '1.5px solid', transition: 'all 0.2s',
                    ...(filter === f.value
                      ? { background: 'linear-gradient(135deg, #f97316, #ea580c)', color: 'white', borderColor: 'transparent', boxShadow: '0 4px 16px rgba(249,115,22,0.35)' }
                      : { background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', color: '#78716c', borderColor: 'rgba(0,0,0,0.08)' }
                    ),
                  }}
                >
                  {f.label}
                </button>
              ))}
              <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', fontSize: '0.8rem', color: '#a8a29e', fontWeight: 600 }}>
                {filtered.length} project{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section style={{ padding: '0 clamp(24px,8vw,120px) clamp(60px,8vw,100px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {filtered.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="projects-page-grid">
                {filtered.map(project => (
                  <div key={project.id}
                    onMouseEnter={() => setHovered(project.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: 'flex', flexDirection: 'column', borderRadius: '20px', overflow: 'hidden',
                      background: hovered === project.id ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.72)',
                      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                      border: `1.5px solid ${hovered === project.id ? project.accentColor + '50' : 'rgba(0,0,0,0.07)'}`,
                      boxShadow: hovered === project.id ? `0 24px 64px rgba(0,0,0,0.1)` : '0 2px 16px rgba(0,0,0,0.05)',
                      transform: hovered === project.id ? 'translateY(-8px)' : 'none',
                      transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                    }}
                  >
                    {/* Top bar */}
                    <div style={{ height: hovered === project.id ? '5px' : '3px', background: project.gradient, transition: 'height 0.3s', flexShrink: 0 }} />

                    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                        <span style={{ fontSize: '2rem', display: 'inline-block', transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)', transform: hovered === project.id ? 'scale(1.2) rotate(8deg)' : 'none' }}>{project.emoji}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                          {project.featured && <span style={{ padding: '2px 8px', background: 'rgba(252,211,77,0.25)', border: '1.5px solid rgba(252,211,77,0.5)', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 700, color: '#92400e' }}>⭐ Featured</span>}
                          <span style={{ padding: '2px 8px', background: project.accentBg, border: `1.5px solid ${project.accentBorder}`, borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 700, color: project.accentColor }}>{project.status}</span>
                          <span style={{ fontSize: '0.72rem', color: '#a8a29e', fontWeight: 500 }}>{project.year}</span>
                        </div>
                      </div>

                      <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.15rem', fontWeight: 700, color: hovered === project.id ? project.accentColor : '#1c1917', marginBottom: '8px', letterSpacing: '-0.02em', transition: 'color 0.2s' }}>{project.title}</h3>
                      <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#78716c', flex: 1, marginBottom: '16px' }}>{project.desc}</p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                        {project.techs.map(tech => (
                          <span key={tech} style={{ padding: '2px 8px', background: hovered === project.id ? project.accentBg : 'rgba(0,0,0,0.04)', border: `1.5px solid ${hovered === project.id ? project.accentBorder : 'rgba(0,0,0,0.07)'}`, borderRadius: '9999px', fontSize: '0.68rem', fontWeight: 600, color: hovered === project.id ? project.accentColor : '#78716c', transition: 'all 0.2s' }}>{tech}</span>
                        ))}
                      </div>

                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: project.accentColor, opacity: hovered === project.id ? 1 : 0, transform: hovered === project.id ? 'translateX(0)' : 'translateX(-6px)', transition: 'all 0.25s ease' }}>
                        View Details →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>😿</div>
                <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.5rem', color: '#78716c', marginBottom: '16px' }}>No projects match your search</p>
                <button onClick={() => { setSearch(''); setFilter('all') }} style={{ padding: '10px 24px', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: 'white', border: 'none', borderRadius: '9999px', fontWeight: 700, cursor: 'pointer' }}>Clear filters</button>
              </div>
            )}

            {/* CTA */}
            <div style={{ marginTop: '64px', padding: '32px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(249,115,22,0.15)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', boxShadow: '0 8px 32px rgba(249,115,22,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '2.5rem' }}>💼</span>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: '#1c1917', marginBottom: '4px' }}>Have a project in mind?</h3>
                  <p style={{ fontSize: '0.875rem', color: '#78716c' }}>Let's build something paw-some together 🐾</p>
                </div>
              </div>
              <Link href="/contact" style={{ padding: '12px 28px', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: 'white', borderRadius: '9999px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(249,115,22,0.35)', whiteSpace: 'nowrap' }}>
                Get In Touch →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <style>{`
        @media (max-width: 900px) { .projects-page-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .projects-page-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}