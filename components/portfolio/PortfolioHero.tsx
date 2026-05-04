export default function PortfolioHero() {
  return (
    <section style={{
      background: 'var(--color-black)',
      paddingTop: 'calc(var(--nav-height) + clamp(60px, 10vw, 120px))',
      paddingBottom: 'clamp(48px, 8vw, 80px)',
      paddingLeft: 'clamp(24px, 8vw, 120px)',
      paddingRight: 'clamp(24px, 8vw, 120px)',
      borderBottom: '1px solid rgba(200,196,188,0.08)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '32px' }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.65rem',
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'var(--color-accent)', marginBottom: '20px',
          }}>
            — Selected Works
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 300, lineHeight: 1.0,
            color: 'var(--color-white)',
            letterSpacing: '-0.02em',
          }}>
            Portfolio
          </h1>
        </div>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.85rem',
          lineHeight: 1.8, color: 'var(--color-warm-grey)',
          maxWidth: '400px',
        }}>
          A selection of our residential, commercial, and conservation projects — each shaped by careful listening, rigorous craft, and a love of light.
        </p>
      </div>
    </section>
  )
}