'use client'

import { useState } from 'react'

const team = [
  {
    name: 'Nik Minale',
    role: 'Director & Architect',
    bio: 'ARB registered architect with over 15 years experience in residential and commercial design. Passionate about the relationship between architecture and craft.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format',
  },
  {
    name: 'Dominic Mann',
    role: 'Director & Interior Designer',
    bio: 'Interior designer specialising in residential and hospitality projects. Brings a deep understanding of material culture and tactile design to every project.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80&auto=format',
  },
  {
    name: 'Sarah Whitmore',
    role: 'Associate Architect',
    bio: 'ARB registered architect leading our conservation and heritage work, with specialist knowledge in planning applications for listed buildings.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format',
  },
  {
    name: 'James Okafor',
    role: 'Senior Designer',
    bio: 'Designer with a background in furniture and product design, bringing a meticulous eye for joinery, fixtures, and bespoke detailing.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format',
  },
]

export default function AboutTeam() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section style={{
      background: 'var(--color-black)',
      padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)',
    }}>
      <div style={{ marginBottom: '72px' }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.65rem',
          letterSpacing: '0.24em', textTransform: 'uppercase',
          color: 'var(--color-accent)', marginBottom: '20px',
        }}>
          — The People
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 300, color: 'var(--color-white)', lineHeight: 1.1,
        }}>
          Meet the Team
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
      }} className="team-grid">
        {team.map((member, i) => (
          <div
            key={member.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: 'default' }}
          >
            {/* Photo */}
            <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '24px', aspectRatio: '3/4' }}>
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: hovered === i ? 'none' : 'grayscale(40%)',
                  transform: hovered === i ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.5s',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(10,10,10,0.2)',
                opacity: hovered === i ? 0 : 1,
                transition: 'opacity 0.4s',
              }} />
            </div>

            {/* Info */}
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem', fontWeight: 400,
              color: 'var(--color-white)', marginBottom: '6px',
            }}>
              {member.name}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.65rem',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--color-accent)', marginBottom: '14px',
            }}>
              {member.role}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.78rem',
              lineHeight: 1.75, color: 'var(--color-warm-grey)',
              maxHeight: hovered === i ? '120px' : '0',
              overflow: 'hidden',
              opacity: hovered === i ? 1 : 0,
              transition: 'max-height 0.4s ease, opacity 0.3s ease',
            }}>
              {member.bio}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}