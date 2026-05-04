'use client'

export default function AboutHero() {
  return (
    <section style={{
      position: 'relative',
      height: '85vh',
      minHeight: '560px',
      overflow: 'hidden',
      background: 'var(--color-black)',
      display: 'flex',
      alignItems: 'flex-end',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80&auto=format)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.35) 60%, rgba(10,10,10,0.2) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(48px, 8vw, 100px)',
        paddingBottom: 'clamp(60px, 10vw, 110px)',
        width: '100%',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.65rem',
          letterSpacing: '0.24em', textTransform: 'uppercase',
          color: 'var(--color-accent)', marginBottom: '20px',
        }}>
          — The Studio
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 300,
          lineHeight: 1.0,
          color: 'var(--color-white)',
          letterSpacing: '-0.02em',
          maxWidth: '800px',
        }}>
          Architecture<br />
          <em style={{ fontStyle: 'italic' }}>with intention.</em>
        </h1>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '40px', right: 'clamp(24px, 5vw, 60px)',
        zIndex: 2, display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: '0.6rem',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--color-mid-grey)', writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
        }}>Scroll</span>
        <span style={{ width: '1px', height: '48px', background: 'var(--color-mid-grey)', opacity: 0.4 }} />
      </div>
    </section>
  )
}