'use client'

import { useState } from 'react'

const skills = [
  {
    emoji: '🏗️',
    number: '01',
    title: 'Backend Systems',
    stat: '50+ APIs',
    desc: 'Enterprise-grade REST APIs and microservices built with ASP.NET Core. Clean architecture, SOLID principles, and battle-tested patterns.',
    techs: ['ASP.NET Core', 'C#', 'Entity Framework', 'PostgreSQL', 'Redis'],
    gradientFrom: '#0d9488',
    gradientTo: '#0f766e',
    accentColor: '#0d9488',
    accentBg: 'rgba(13,148,136,0.08)',
    accentBorder: 'rgba(13,148,136,0.2)',
  },
  {
    emoji: '🌐',
    number: '02',
    title: 'Web Apps',
    stat: '30+ sites',
    desc: 'Snappy, SEO-friendly frontends with Next.js. From landing pages to complex dashboards — pixel-perfect and performant.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Framer Motion'],
    gradientFrom: '#f97316',
    gradientTo: '#ea580c',
    accentColor: '#f97316',
    accentBg: 'rgba(249,115,22,0.08)',
    accentBorder: 'rgba(249,115,22,0.2)',
  },
  {
    emoji: '🔗',
    number: '03',
    title: 'Integrations',
    stat: '20+ built',
    desc: "Connecting systems that weren't meant to talk to each other. Payment gateways, third-party APIs, webhooks, and workflow automation.",
    techs: ['Midtrans', 'WhatsApp API', 'SignalR', 'RabbitMQ', 'Azure'],
    gradientFrom: '#8b5cf6',
    gradientTo: '#7c3aed',
    accentColor: '#8b5cf6',
    accentBg: 'rgba(139,92,246,0.08)',
    accentBorder: 'rgba(139,92,246,0.2)',
  },
  {
    emoji: '⚙️',
    number: '04',
    title: 'Workflow Systems',
    stat: '10+ clients',
    desc: 'Custom workflow engines, approval chains, and BPM systems for enterprise clients. Complex state machines made manageable.',
    techs: ['State Machines', 'BPMN', 'Queue Systems', 'Event Sourcing', 'CQRS'],
    gradientFrom: '#f59e0b',
    gradientTo: '#d97706',
    accentColor: '#d97706',
    accentBg: 'rgba(245,158,11,0.08)',
    accentBorder: 'rgba(245,158,11,0.2)',
  },
]

export default function WhatIDo() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section style={{
      background: 'linear-gradient(180deg, #fffbf5 0%, #fff8f0 100%)',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 8vw, 120px)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    }}>

      {/* Background blobs */}
      <div style={{ position: 'absolute', top: '-100px', right: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(13,148,136,0.05) 0%, transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* ─── Section Header ─── */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          {/* Label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px',
            background: 'rgba(249,115,22,0.08)',
            border: '1.5px solid rgba(249,115,22,0.2)',
            borderRadius: '9999px',
            marginBottom: '20px',
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f97316' }}>🛠️ What I Do</span>
          </div>

          {/* Headline with gradient */}
          <h2 style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#1c1917',
            marginBottom: '16px',
          }}>
            I build things that{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f97316, #0d9488)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
            }}>
              actually work
            </span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#78716c', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            From database to deployment — full stack, all paws on deck 🐾
          </p>
        </div>

        {/* ─── Cards Grid ─── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }} className="whatido-grid">
          {skills.map((skill, i) => (
            <div
              key={skill.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                transform: hovered === i ? 'translateY(-8px)' : 'none',
                boxShadow: hovered === i
                  ? `0 32px 80px rgba(0,0,0,0.12), 0 0 0 1.5px ${skill.accentColor}40`
                  : '0 4px 24px rgba(0,0,0,0.06), 0 0 0 1.5px rgba(0,0,0,0.06)',
                // Glassmorphism base
                background: hovered === i
                  ? 'rgba(255,255,255,0.95)'
                  : 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              {/* Top gradient bar */}
              <div style={{
                height: '4px',
                background: `linear-gradient(90deg, ${skill.gradientFrom}, ${skill.gradientTo})`,
                transition: 'height 0.3s ease',
                ...(hovered === i ? { height: '5px' } : {}),
              }} />

              {/* Ghost number */}
              <div style={{
                position: 'absolute',
                top: '16px', right: '20px',
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: '5rem',
                fontWeight: 700,
                color: skill.accentColor,
                opacity: hovered === i ? 0.08 : 0.05,
                lineHeight: 1,
                transition: 'opacity 0.3s',
                userSelect: 'none',
                letterSpacing: '-0.04em',
              }}>
                {skill.number}
              </div>

              <div style={{ padding: '28px 32px 32px' }}>
                {/* Emoji + stat row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{
                    fontSize: '2.4rem',
                    display: 'inline-block',
                    transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                    transform: hovered === i ? 'scale(1.2) rotate(8deg)' : 'scale(1)',
                  }}>
                    {skill.emoji}
                  </span>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center',
                    padding: '4px 12px',
                    background: skill.accentBg,
                    border: `1.5px solid ${skill.accentBorder}`,
                    borderRadius: '9999px',
                    fontSize: '0.72rem', fontWeight: 700,
                    color: skill.accentColor,
                    letterSpacing: '0.04em',
                  }}>
                    {skill.stat}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1c1917',
                  marginBottom: '10px',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s',
                  ...(hovered === i ? { color: skill.accentColor } : {}),
                }}>
                  {skill.title}
                </h3>

                {/* Desc */}
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  color: '#78716c',
                  marginBottom: '20px',
                }}>
                  {skill.desc}
                </p>

                {/* Tech pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {skill.techs.map(tech => (
                    <span key={tech} style={{
                      padding: '3px 10px',
                      background: 'rgba(255,255,255,0.8)',
                      border: '1.5px solid rgba(0,0,0,0.08)',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: '#57534e',
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.2s',
                      ...(hovered === i ? {
                        background: skill.accentBg,
                        borderColor: skill.accentBorder,
                        color: skill.accentColor,
                      } : {}),
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Bottom CTA ─── */}
        <div style={{
          marginTop: '56px',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '20px',
            padding: '20px 32px',
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1.5px solid rgba(249,115,22,0.2)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(249,115,22,0.08)',
          }}>
            <span style={{ fontSize: '2.2rem', animation: 'float 3s ease-in-out infinite' }}>😸</span>
            <div>
              <p style={{ fontWeight: 700, color: '#1c1917', fontSize: '1rem', marginBottom: '2px' }}>Got a project in mind?</p>
              <p style={{ fontSize: '0.85rem', color: '#78716c' }}>Let's build something paw-some together</p>
            </div>
            <a href="/contact" style={{
              padding: '10px 22px',
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              color: 'white', borderRadius: '9999px',
              fontWeight: 700, fontSize: '0.875rem',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(249,115,22,0.35)',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(249,115,22,0.45)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(249,115,22,0.35)' }}
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (max-width: 768px) {
          .whatido-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}