export default function AboutStory() {
  return (
    <section style={{
      background: 'var(--color-black)',
      padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr',
        gap: 'clamp(48px, 8vw, 120px)',
        alignItems: 'start',
      }} className="story-grid">

        {/* Left: image */}
        <div style={{ position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format"
            alt="Studio interior"
            style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
          />
          {/* Floating stat */}
          <div style={{
            position: 'absolute', bottom: '-28px', right: '-28px',
            background: 'var(--color-dark)',
            border: '1px solid rgba(200,196,188,0.12)',
            padding: '28px 32px',
          }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 300, color: 'var(--color-white)', lineHeight: 1 }}>15+</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginTop: '8px' }}>Years of Practice</p>
          </div>
        </div>

        {/* Right: text */}
        <div style={{ paddingTop: 'clamp(0px, 4vw, 60px)' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.65rem',
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'var(--color-accent)', marginBottom: '32px',
          }}>
            — Our Story
          </p>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: 'var(--color-white)',
            letterSpacing: '-0.01em',
            marginBottom: '40px',
          }}>
            Design is about a way of living — not just a way of decorating.
          </h2>

          {[
            'Minale + Mann is an award-winning architectural and interior design studio based in London. Founded on the belief that thoughtful design has the power to transform how people live, work, and experience space.',
            'We work across residential, commercial, conservation, and heritage projects — bringing the same rigorous attention to detail and creative ambition to every commission, whatever its scale.',
            'Our process is deeply collaborative. We listen carefully to each client to understand not just their brief, but the way they inhabit their world. From that understanding, we craft spaces that are beautiful, considered, and enduring.',
          ].map((para, i) => (
            <p key={i} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              lineHeight: 1.85,
              color: 'var(--color-warm-grey)',
              marginBottom: '24px',
            }}>
              {para}
            </p>
          ))}

          {/* Stats row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px', marginTop: '56px',
            borderTop: '1px solid rgba(200,196,188,0.1)', paddingTop: '40px',
          }}>
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '12', label: 'Design Awards' },
              { number: '3', label: 'Countries' },
            ].map(stat => (
              <div key={stat.label}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 300, color: 'var(--color-white)', lineHeight: 1 }}>{stat.number}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginTop: '8px' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}