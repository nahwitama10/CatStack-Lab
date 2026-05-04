const values = [
  {
    number: '01',
    title: 'Light',
    body: 'The most important material with which we design is light. Every space begins with understanding how light moves through it across the day and across the seasons.',
  },
  {
    number: '02',
    title: 'Context',
    body: 'We believe in architecture that responds to its surroundings — to the street, the neighbourhood, and the history of the place.',
  },
  {
    number: '03',
    title: 'Craft',
    body: 'Attention to detail is non-negotiable. We obsess over the quality of materials, junctions, and finishes that give a space its character.',
  },
  {
    number: '04',
    title: 'Longevity',
    body: 'We design spaces that endure — aesthetically, structurally, and environmentally. Good design should only improve with time.',
  },
]

export default function AboutValues() {
  return (
    <section style={{
      background: 'var(--color-dark)',
      padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)',
    }}>
      <div style={{ marginBottom: '72px' }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.65rem',
          letterSpacing: '0.24em', textTransform: 'uppercase',
          color: 'var(--color-accent)', marginBottom: '20px',
        }}>
          — What We Believe
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 300,
          color: 'var(--color-white)',
          lineHeight: 1.1,
        }}>
          Our Values
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: 'rgba(200,196,188,0.08)',
      }} className="values-grid">
        {values.map((v) => (
          <div key={v.number} style={{
            background: 'var(--color-dark)',
            padding: 'clamp(32px, 4vw, 52px) clamp(24px, 3vw, 40px)',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '5rem',
              fontWeight: 300,
              color: 'rgba(200,196,188,0.12)',
              lineHeight: 1,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}>
              {v.number}
            </p>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.7rem',
              fontWeight: 300,
              color: 'var(--color-white)',
              marginBottom: '20px',
            }}>
              {v.title}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              lineHeight: 1.8,
              color: 'var(--color-warm-grey)',
            }}>
              {v.body}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}