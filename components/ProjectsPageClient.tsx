'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Props {
  typeParam: string
}

const projects = [
  {
    id: 1,
    title: 'Workflow Engine Pro',
    desc: 'Enterprise BPM system with approval chains and real-time notifications.',
    type: 'backend',
    techs: ['ASP.NET Core', 'SignalR', 'PostgreSQL'],
    emoji: '⚙️',
    gradient: 'linear-gradient(135deg, #0d9488, #0f766e)',
    accentColor: '#0d9488',
    accentBg: 'rgba(13,148,136,0.08)',
    accentBorder: 'rgba(13,148,136,0.2)',
    featured: true,
    year: '2024',
    status: 'Production',
  },
  {
    id: 2,
    title: 'CatStack Lab',
    desc: 'Modern developer portfolio built with Next.js and TypeScript.',
    type: 'web',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    emoji: '🐱',
    gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
    accentColor: '#f97316',
    accentBg: 'rgba(249,115,22,0.08)',
    accentBorder: 'rgba(249,115,22,0.2)',
    featured: true,
    year: '2025',
    status: 'Live',
  },
  {
    id: 3,
    title: 'Payment Gateway Integration',
    desc: 'Webhook-based Midtrans payment integration system.',
    type: 'integration',
    techs: ['ASP.NET Core', 'Midtrans', 'Redis'],
    emoji: '💳',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    accentColor: '#8b5cf6',
    accentBg: 'rgba(139,92,246,0.08)',
    accentBorder: 'rgba(139,92,246,0.2)',
    featured: false,
    year: '2024',
    status: 'Production',
  },
]

const FILTERS = [
  { label: 'All Projects 🐾', value: 'all' },
  { label: 'Web Apps 🌐', value: 'web' },
  { label: 'Backend ⚙️', value: 'backend' },
  { label: 'Integrations 🔗', value: 'integration' },
]

export default function ProjectsPageClient({
  typeParam,
}: Props) {
  const [filter, setFilter] = useState(typeParam)
  const [hovered, setHovered] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setFilter(typeParam)
  }, [typeParam])

  const filtered = useMemo(() => {
    let list =
      filter === 'all'
        ? projects
        : projects.filter(p => p.type === filter)

    if (search) {
      list = list.filter(
        p =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.desc.toLowerCase().includes(search.toLowerCase()) ||
          p.techs.some(t =>
            t.toLowerCase().includes(search.toLowerCase())
          )
      )
    }

    return list
  }, [filter, search])

  return (
    <>
      <Navbar />

      <main
        style={{
          paddingTop: 'var(--nav-height)',
          minHeight: '100vh',
          background:
            'linear-gradient(180deg, #fffbf5 0%, #fff8f0 100%)',
          fontFamily:
            "'Plus Jakarta Sans', system-ui, sans-serif",
        }}
      >
        {/* Hero */}
        <section
          style={{
            padding:
              'clamp(48px,8vw,100px) clamp(24px,8vw,120px)',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                background: 'rgba(249,115,22,0.08)',
                border:
                  '1.5px solid rgba(249,115,22,0.2)',
                borderRadius: '9999px',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#f97316',
                }}
              >
                🛠️ Projects
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem,6vw,4.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#1c1917',
                marginBottom: '16px',
              }}
            >
              Things I’ve Built
            </h1>

            <p
              style={{
                fontSize: '1rem',
                color: '#78716c',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Modern backend systems, integrations, and
              web applications 🐾
            </p>

            {/* Search */}
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search projects..."
              style={{
                width: '100%',
                maxWidth: '320px',
                padding: '12px 18px',
                borderRadius: '9999px',
                border:
                  '1.5px solid rgba(249,115,22,0.15)',
                outline: 'none',
                marginBottom: '24px',
                fontSize: '0.9rem',
              }}
            />

            {/* Filters */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '40px',
              }}
            >
              {FILTERS.map(f => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: '1.5px solid',
                    transition: 'all 0.2s',

                    ...(filter === f.value
                      ? {
                          background:
                            'linear-gradient(135deg,#f97316,#ea580c)',
                          color: 'white',
                          borderColor: 'transparent',
                        }
                      : {
                          background: 'white',
                          color: '#78716c',
                          borderColor:
                            'rgba(0,0,0,0.08)',
                        }),
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
              }}
            >
              {filtered.map(project => (
                <div
                  key={project.id}
                  onMouseEnter={() =>
                    setHovered(project.id)
                  }
                  onMouseLeave={() =>
                    setHovered(null)
                  }
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: 'white',
                    border: `1.5px solid ${
                      hovered === project.id
                        ? project.accentBorder
                        : 'rgba(0,0,0,0.06)'
                    }`,
                    boxShadow:
                      hovered === project.id
                        ? '0 18px 48px rgba(0,0,0,0.08)'
                        : '0 2px 10px rgba(0,0,0,0.04)',
                    transform:
                      hovered === project.id
                        ? 'translateY(-6px)'
                        : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  <div
                    style={{
                      height: '5px',
                      background: project.gradient,
                    }}
                  />

                  <div style={{ padding: '24px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent:
                          'space-between',
                        alignItems: 'center',
                        marginBottom: '16px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '2rem',
                        }}
                      >
                        {project.emoji}
                      </span>

                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color:
                            project.accentColor,
                        }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        color:
                          hovered === project.id
                            ? project.accentColor
                            : '#1c1917',
                        marginBottom: '10px',
                        transition: 'color 0.2s',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#78716c',
                        lineHeight: 1.7,
                        marginBottom: '18px',
                      }}
                    >
                      {project.desc}
                    </p>

                    {/* Tech pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                      }}
                    >
                      {project.techs.map(tech => (
                        <span
                          key={tech}
                          style={{
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            background:
                              project.accentBg,
                            color:
                              project.accentColor,
                            border:
                              '1px solid rgba(0,0,0,0.05)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              style={{
                marginTop: '64px',
                padding: '32px',
                borderRadius: '24px',
                background: 'white',
                border:
                  '1.5px solid rgba(249,115,22,0.12)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    marginBottom: '8px',
                    color: '#1c1917',
                  }}
                >
                  Have a project in mind?
                </h3>

                <p
                  style={{
                    color: '#78716c',
                    lineHeight: 1.7,
                  }}
                >
                  Let’s build something together 🚀
                </p>
              </div>

              <Link
                href="/contact"
                style={{
                  padding: '14px 26px',
                  borderRadius: '9999px',
                  background:
                    'linear-gradient(135deg,#f97316,#ea580c)',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                Contact Me →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}