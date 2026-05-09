'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  {
    label: '🐱 Cats',
    children: [
      { label: '🐾 All Cats', href: '/cats' },
      { label: '📖 Breeds', href: '/cats/breeds' },
      { label: '🖼️ Gallery', href: '/cats/gallery' },
    ],
  },
  {
    label: '🛠️ Projects',
    children: [
      { label: '🌐 Web Apps', href: '/projects?type=web' },
      { label: '⚙️ Backend', href: '/projects?type=backend' },
      { label: '🔗 Integrations', href: '/projects?type=integration' },
    ],
  },
  { label: '😺 About', href: '/about' },
  { label: '📬 Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 'var(--nav-height)',
        display: 'flex', alignItems: 'center',
        padding: '0 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255,251,245,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(249,115,22,0.12)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(249,115,22,0.08)' : 'none',
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ fontSize: '1.5rem', display: 'inline-block', transition: 'transform 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(15deg) scale(1.2)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
            >🐱</span>
            <span className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1c1917', letterSpacing: '-0.02em' }}>
              CatStack<span style={{ color: 'var(--orange)' }}> Lab</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.label} style={{ position: 'relative' }}
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href ? (
                  <Link href={link.href} style={navItemStyle}>{link.label}</Link>
                ) : (
                  <button style={{ ...navItemStyle, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {link.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                      style={{ transition: 'transform 0.2s', transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none' }}>
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                )}

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    background: 'white', borderRadius: '16px', padding: '8px',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.12)', border: '1px solid rgba(249,115,22,0.1)',
                    minWidth: '180px', animation: 'fadeInDown 0.15s ease forwards', zIndex: 60,
                  }}>
                    {link.children.map(child => (
                      <Link key={child.label} href={child.href} style={{
                        display: 'block', padding: '10px 14px', borderRadius: '10px',
                        fontSize: '0.875rem', fontWeight: 500, color: '#44403c', textDecoration: 'none',
                        transition: 'all 0.15s',
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(249,115,22,0.08)'; (e.currentTarget as HTMLElement).style.color = 'var(--orange)' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#44403c' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            {/* Hire Me CTA */}
            <li style={{ marginLeft: '8px' }}>
              <Link href="/contact" style={{
                display: 'inline-block', padding: '10px 20px',
                background: 'var(--orange)', color: 'white',
                borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 700,
                textDecoration: 'none', boxShadow: '0 4px 16px rgba(249,115,22,0.3)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(249,115,22,0.4)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(249,115,22,0.3)' }}
              >
                Hire Me 🐾
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="hamburger"
            style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '8px', background: 'none', border: 'none', cursor: 'pointer', borderRadius: '10px' }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px', background: '#1c1917', borderRadius: '2px',
                transition: 'all 0.3s',
                transform: mobileOpen ? (i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)') : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 40,
        background: 'var(--cream)',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        paddingTop: 'var(--nav-height)', overflowY: 'auto',
      }}>
        <div style={{ padding: '24px' }}>
          {navLinks.map(link => (
            <div key={link.label} style={{ marginBottom: '4px' }}>
              {link.href ? (
                <Link href={link.href} onClick={() => setMobileOpen(false)} style={{
                  display: 'block', padding: '14px 16px', borderRadius: '14px',
                  fontSize: '1.125rem', fontWeight: 600, color: '#1c1917', textDecoration: 'none',
                }}>
                  {link.label}
                </Link>
              ) : (
                <>
                  <div style={{ padding: '14px 16px', fontSize: '1.125rem', fontWeight: 600, color: '#78716c' }}>{link.label}</div>
                  {link.children?.map(child => (
                    <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)} style={{
                      display: 'block', padding: '10px 32px', borderRadius: '10px',
                      fontSize: '1rem', color: '#57534e', textDecoration: 'none',
                    }}>
                      {child.label}
                    </Link>
                  ))}
                </>
              )}
            </div>
          ))}
          <div style={{ marginTop: '24px' }}>
            <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
              display: 'block', textAlign: 'center', padding: '14px',
              background: 'var(--orange)', color: 'white', borderRadius: '9999px',
              fontSize: '1.125rem', fontWeight: 700, textDecoration: 'none',
            }}>
              Hire Me 🐾
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  )
}

const navItemStyle: React.CSSProperties = {
  display: 'flex', alignItems: 'center', padding: '8px 14px', borderRadius: '9999px',
  fontSize: '0.875rem', fontWeight: 600, color: '#44403c', textDecoration: 'none',
  transition: 'all 0.2s', background: 'transparent',
}