'use client'
import Link from 'next/link'

const footerLinks = {
  Services: [
    { label: 'Architectural Design', href: '/residential-architects' },
    { label: 'Interior Design', href: '/residential-interior-design' },
    { label: 'Planning Applications', href: '/planning-applications' },
    { label: 'Conservation & Heritage', href: '/conservation-architects' },
    { label: 'Create & Construct', href: '/residential-architectural-design-services' },
  ],
  Portfolio: [
    { label: 'Residential', href: '/residential-portfolio' },
    { label: 'Commercial', href: '/commercial-portfolio' },
    { label: 'Conservation', href: '/conservation-heritage-design-portfolio' },
  ],
  Studio: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-dark)', borderTop: '1px solid rgba(200,196,188,0.08)', padding: 'clamp(60px, 10vw, 100px) clamp(24px, 8vw, 120px) 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: '48px', marginBottom: '80px' }} className="footer-grid">
        {/* Brand */}
        <div>
          <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-white)', display: 'block', marginBottom: '20px' }}>
            Minale + Mann
          </Link>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', lineHeight: 1.8, color: 'var(--color-mid-grey)', maxWidth: '280px', marginBottom: '32px' }}>
            Award winning architectural and interior design studio based in London.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
            Design Matters
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: '24px' }}>
              {group}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {links.map(l => (
                <li key={l.label}>
                  <Link href={l.href} style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-warm-grey)',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-warm-grey)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(200,196,188,0.08)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--color-mid-grey)', letterSpacing: '0.06em' }}>
          © {new Date().getFullYear()} Minale + Mann. All rights reserved.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--color-mid-grey)' }}>
          London Design Studio
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > *:first-child { grid-column: span 2; }
        }
      `}</style>
    </footer>
  )
}
