'use client'

import { useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Workflow Engine Pro',
    desc: 'Enterprise BPM system with visual workflow designer, approval chains, and real-time notifications via SignalR.',
    type: 'backend',
    techs: ['ASP.NET Core', 'SignalR', 'PostgreSQL', 'React'],
    emoji: '⚙️',
    gradient: 'linear-gradient(135deg, #0d9488, #0f766e)',
    accentColor: '#0d9488',
    accentBg: 'rgba(13,148,136,0.08)',
    accentBorder: 'rgba(13,148,136,0.2)',
    featured: true,
    year: '2024',
    href: '/projects?type=backend',
  },
  {
    id: 2,
    title: 'CatStack Lab',
    desc: 'This very portfolio! Built with Next.js, Tailwind, and powered by an unreasonable love of cats.',
    type: 'web',
    techs: ['Next.js', 'Tailwind', 'TypeScript', 'Vercel'],
    emoji: '🐱',
    gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
    accentColor: '#f97316',
    accentBg: 'rgba(249,115,22,0.08)',
    accentBorder: 'rgba(249,115,22,0.2)',
    featured: true,
    year: '2025',
    href: '/projects?type=web',
  },
  {
    id: 3,
    title: 'Payment Gateway Integration',
    desc: 'Midtrans payment integration with webhook handling, retry logic, and reconciliation dashboard.',
    type: 'integration',
    techs: ['ASP.NET Core', 'Midtrans', 'PostgreSQL', 'Redis'],
    emoji: '💳',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    accentColor: '#8b5cf6',
    accentBg: 'rgba(139,92,246,0.08)',
    accentBorder: 'rgba(139,92,246,0.2)',
    featured: false,
    year: '2024',
    href: '/projects?type=integration',
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    desc: 'Multi-tenant e-commerce with inventory management, order tracking, and seller dashboard.',
    type: 'web',
    techs: ['Next.js', 'ASP.NET Core', 'PostgreSQL', 'Docker'],
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    accentColor: '#d97706',
    accentBg: 'rgba(245,158,11,0.08)',
    accentBorder: 'rgba(245,158,11,0.2)',
    featured: false,
    year: '2023',
    href: '/projects?type=web',
  },
  {
    id: 5,
    title: 'WhatsApp Notifier',
    desc: 'Automated WhatsApp notification system for business alerts, OTP, and order updates.',
    type: 'integration',
    techs: ['ASP.NET Core', 'WhatsApp API', 'RabbitMQ'],
    emoji: '💬',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    accentColor: '#16a34a',
    accentBg: 'rgba(34,197,94,0.08)',
    accentBorder: 'rgba(34,197,94,0.2)',
    featured: false,
    year: '2023',
    href: '/projects?type=integration',
  },
  {
    id: 6,
    title: 'HR Management System',
    desc: 'Full HR system with leave management, payroll integration, and performance tracking.',
    type: 'backend',
    techs: ['ASP.NET Core', 'C#', 'SQL Server', 'Angular'],
    emoji: '👥',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    accentColor: '#2563eb',
    accentBg: 'rgba(59,130,246,0.08)',
    accentBorder: 'rgba(59,130,246,0.2)',
    featured: false,
    year: '2023',
    href: '/projects?type=backend',
  },
]

const FILTERS = [
  { label: 'All 🐾', value: 'all' },
  { label: 'Web Apps 🌐', value: 'web' },
  { label: 'Backend ⚙️', value: 'backend' },
  { label: 'Integrations 🔗', value: 'integration' },
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all')
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter)

  return (
    <section style={{
      background: 'linear-gradient(180deg, #fff8f0 0%, #fffbf5 100%)',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 8vw, 120px)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
        backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.07) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* ─── Header ─── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px',
              background: 'rgba(249,115,22,0.08)',
              border: '1.5px solid rgba(249,115,22,0.2)',
              borderRadius: '9999px',
              marginBottom: '16px',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f97316' }}>🛠️ Projects</span>
            </div>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 700,
              color: '#1c1917',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
            }}>
              Things I've{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontStyle: 'italic',
              }}>
                built
              </span>
            </h2>
          </div>
          <Link href="/projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '0.875rem', fontWeight: 700, color: '#f97316',
            textDecoration: 'none', transition: 'gap 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = '10px'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = '6px'}
          >
            All Projects →
          </Link>
        </div>

        {/* ─── Filters ─── */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {FILTERS.map(f => (
            <button key={f.value} onClick={() => setFilter(f.value)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.825rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: '1.5px solid',
                ...(filter === f.value ? {
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: 'white',
                  borderColor: 'transparent',
                  boxShadow: '0 4px 16px rgba(249,115,22,0.35)',
                } : {
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(8px)',
                  color: '#78716c',
                  borderColor: 'rgba(0,0,0,0.08)',
                }),
              }}
            >
              {f.label}
            </button>
          ))}
          <span style={{
            marginLeft: 'auto', display: 'flex', alignItems: 'center',
            fontSize: '0.8rem', color: '#a8a29e', fontWeight: 600,
          }}>
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* ─── Cards ─── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }} className="projects-grid">
          {filtered.map(project => (
            <Link
              key={project.id}
              href={project.href}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex', flexDirection: 'column',
                borderRadius: '20px',
                overflow: 'hidden',
                textDecoration: 'none',
                position: 'relative',
                // Glassmorphism
                background: hovered === project.id
                  ? 'rgba(255,255,255,0.97)'
                  : 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1.5px solid`,
                borderColor: hovered === project.id
                  ? project.accentColor + '50'
                  : 'rgba(0,0,0,0.07)',
                boxShadow: hovered === project.id
                  ? `0 24px 64px rgba(0,0,0,0.1), 0 0 0 0px ${project.accentColor}`
                  : '0 2px 16px rgba(0,0,0,0.05)',
                transform: hovered === project.id ? 'translateY(-8px)' : 'none',
                transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              {/* Gradient top bar */}
              <div style={{
                height: hovered === project.id ? '5px' : '3px',
                background: project.gradient,
                transition: 'height 0.3s ease',
                flexShrink: 0,
              }} />

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <span style={{
                    fontSize: '2rem',
                    display: 'inline-block',
                    transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                    transform: hovered === project.id ? 'scale(1.2) rotate(8deg)' : 'none',
                  }}>{project.emoji}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {project.featured && (
                      <span style={{
                        padding: '2px 8px',
                        background: 'rgba(252,211,77,0.25)',
                        border: '1.5px solid rgba(252,211,77,0.5)',
                        borderRadius: '9999px',
                        fontSize: '0.65rem', fontWeight: 700, color: '#92400e',
                      }}>⭐ Featured</span>
                    )}
                    <span style={{ fontSize: '0.72rem', color: '#a8a29e', fontWeight: 500 }}>{project.year}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: hovered === project.id ? project.accentColor : '#1c1917',
                  marginBottom: '8px',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s',
                }}>
                  {project.title}
                </h3>

                {/* Desc */}
                <p style={{
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                  color: '#78716c',
                  flex: 1,
                  marginBottom: '16px',
                }}>
                  {project.desc}
                </p>

                {/* Tech pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                  {project.techs.map(tech => (
                    <span key={tech} style={{
                      padding: '2px 8px',
                      background: hovered === project.id ? project.accentBg : 'rgba(0,0,0,0.04)',
                      border: `1.5px solid ${hovered === project.id ? project.accentBorder : 'rgba(0,0,0,0.07)'}`,
                      borderRadius: '9999px',
                      fontSize: '0.68rem', fontWeight: 600,
                      color: hovered === project.id ? project.accentColor : '#78716c',
                      transition: 'all 0.2s',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA row */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.78rem', fontWeight: 700,
                  color: project.accentColor,
                  opacity: hovered === project.id ? 1 : 0,
                  transform: hovered === project.id ? 'translateX(0)' : 'translateX(-6px)',
                  transition: 'all 0.25s ease',
                }}>
                  View Project →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>😿</div>
            <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.5rem', color: '#78716c' }}>No projects here yet...</p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}