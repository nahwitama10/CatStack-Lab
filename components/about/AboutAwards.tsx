const awards = [
  { year: '2023', title: 'Best Residential Project', body: 'London Design Awards' },
  { year: '2022', title: 'Heritage Project of the Year', body: 'RIBA London' },
  { year: '2021', title: 'Interior Design Excellence', body: 'Dezeen Awards — Longlist' },
  { year: '2020', title: 'Best Commercial Interior', body: 'London Design Awards' },
  { year: '2019', title: 'Emerging Studio of the Year', body: 'Blueprint Awards' },
  { year: '2018', title: 'Residential Interior of the Year', body: 'London Design Awards — Winner' },
]

export default function AboutAwards() {
  return (
    <section style={{
      background: 'var(--color-dark)',
      padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)',
    }}>
      <div style={{ marginBottom: '64px' }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.65rem',
          letterSpacing: '0.24em', textTransform: 'uppercase',
          color: 'var(--color-accent)', marginBottom: '20px',
        }}>
          — Recognition
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 300, color: 'var(--color-white)', lineHeight: 1.1,
        }}>
          Awards & Press
        </h2>
      </div>

      <div>
        {awards.map((award, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr',
              gap: '32px',
              alignItems: 'center',
              padding: '28px 0',
              borderTop: '1px solid rgba(200,196,188,0.08)',
              transition: 'background 0.3s',
            }}
            className="award-row"
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(200,196,188,0.03)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
          >
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem',
              letterSpacing: '0.12em', color: 'var(--color-mid-grey)',
            }}>
              {award.year}
            </span>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
              fontWeight: 300, color: 'var(--color-white)',
            }}>
              {award.title}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.78rem',
              color: 'var(--color-warm-grey)', letterSpacing: '0.04em',
              textAlign: 'right',
            }}>
              {award.body}
            </p>
          </div>
        ))}
        <div style={{ borderTop: '1px solid rgba(200,196,188,0.08)' }} />
      </div>

      <style>{`
        @media (max-width: 600px) {
          .award-row {
            grid-template-columns: 60px 1fr !important;
          }
          .award-row > *:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}