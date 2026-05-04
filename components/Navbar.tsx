'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const navLinks = [
  {
    label: 'Services',
    children: [
      {
        label: 'Architectural Design',
        children: [
          { label: 'Residential', href: '/residential-architects' },
          { label: 'Commercial', href: '/commercial-architects' },
        ],
      },
      { label: 'Planning Applications', href: '/planning-applications' },
      {
        label: 'Interior Design',
        children: [
          { label: 'Residential', href: '/residential-interior-design' },
          { label: 'Commercial', href: '/commercial-interior-designers' },
        ],
      },
      { label: 'Conservation & Heritage Design', href: '/conservation-architects' },
      {
        label: 'Create & Construct',
        children: [
          { label: 'Residential', href: '/residential-architectural-design-services' },
          { label: 'Commercial', href: '/commercial-design-and-build' },
        ],
      },
    ],
  },
  {
    label: 'Portfolio',
    children: [
      { label: 'Residential', href: '/residential-portfolio' },
      { label: 'Commercial', href: '/commercial-portfolio' },
      { label: 'Conservation & Heritage', href: '/conservation-heritage-design-portfolio' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          transition: 'background var(--transition-base), border-color var(--transition-base)',
          background: scrolled ? 'rgba(10,10,10,0.96)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(200,196,188,0.12)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 400, letterSpacing: '0.12em', color: 'var(--color-white)', textTransform: 'uppercase' }}>
          Minale + Mann
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <li
              key={link.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.children && handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              {link.href ? (
                <Link href={link.href} style={navLinkStyle}>{link.label}</Link>
              ) : (
                <button style={{ ...navLinkStyle, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {link.label}
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ transition: 'transform 0.3s', transform: activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </button>
              )}

              {/* Dropdown */}
              {link.children && activeDropdown === link.label && (
                <div
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                  style={dropdownStyle}
                >
                  {link.children.map((child: any) => (
                    <div key={child.label} style={{ marginBottom: child.children ? '16px' : '0' }}>
                      {child.href ? (
                        <Link href={child.href} style={dropdownItemStyle}>{child.label}</Link>
                      ) : (
                        <span style={{ ...dropdownItemStyle, color: 'var(--color-warm-grey)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'default', display: 'block', marginBottom: '6px' }}>{child.label}</span>
                      )}
                      {child.children && (
                        <div style={{ paddingLeft: '12px', borderLeft: '1px solid rgba(200,196,188,0.2)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {child.children.map((sub: any) => (
                            <Link key={sub.label} href={sub.href} style={dropdownSubItemStyle}>{sub.label}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hamburger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '1px',
              background: 'var(--color-white)',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: mobileOpen
                ? i === 0 ? 'translateY(6px) rotate(45deg)' : i === 2 ? 'translateY(-6px) rotate(-45deg)' : 'scaleX(0)'
                : 'none',
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 90,
        background: 'var(--color-black)',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform var(--transition-slow)',
        paddingTop: 'calc(var(--nav-height) + 32px)',
        overflowY: 'auto',
      }}>
        <ul style={{ listStyle: 'none', padding: '0 32px' }}>
          {navLinks.map((link) => (
            <li key={link.label} style={{ borderBottom: '1px solid rgba(200,196,188,0.1)', paddingBottom: '4px', marginBottom: '4px' }}>
              <button
                onClick={() => setExpandedMobile(expandedMobile === link.label ? null : link.label)}
                style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-white)', fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, letterSpacing: '0.04em', padding: '16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                {link.label}
                {link.children && (
                  <span style={{ fontSize: '1rem', transform: expandedMobile === link.label ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', display: 'inline-block' }}>+</span>
                )}
              </button>
              {link.children && expandedMobile === link.label && (
                <div style={{ paddingLeft: '16px', paddingBottom: '12px' }}>
                  {link.children.map((child: any) => (
                    <div key={child.label}>
                      {child.href
                        ? <Link href={child.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '8px 0', color: 'var(--color-warm-grey)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>{child.label}</Link>
                        : <span style={{ display: 'block', padding: '8px 0 4px', color: 'var(--color-mid-grey)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{child.label}</span>
                      }
                      {child.children && child.children.map((sub: any) => (
                        <Link key={sub.label} href={sub.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '6px 0 6px 16px', color: 'var(--color-warm-grey)', fontSize: '0.82rem', letterSpacing: '0.06em' }}>{sub.label}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

const navLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.72rem',
  fontWeight: 400,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--color-white)',
  opacity: 0.85,
  transition: 'opacity 0.2s',
  padding: '4px 0',
}

const dropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: 'calc(100% + 16px)',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'rgba(18,17,15,0.97)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(200,196,188,0.12)',
  padding: '24px 28px',
  minWidth: '220px',
  animation: 'fadeInDown 0.25s ease forwards',
}

const dropdownItemStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.78rem',
  letterSpacing: '0.1em',
  color: 'var(--color-white)',
  padding: '6px 0',
  opacity: 0.85,
  transition: 'opacity 0.2s, padding-left 0.2s',
}

const dropdownSubItemStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  letterSpacing: '0.08em',
  color: 'var(--color-warm-grey)',
  padding: '5px 0',
  transition: 'color 0.2s',
}
