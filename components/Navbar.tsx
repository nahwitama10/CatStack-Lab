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
      { label: '⚙️ Backend Systems', href: '/projects?type=backend' },
      { label: '🔗 Integrations', href: '/projects?type=integration' },
    ],
  },
  { label: '😺 About Me', href: '/about' },
  { label: '📬 Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cat-cream/95 backdrop-blur-md shadow-cat border-b border-cat-orange/20'
          : 'bg-transparent'
      }`} style={{ height: 'var(--nav-height)', fontFamily: 'var(--font-body)' }}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:animate-wiggle inline-block">🐱</span>
            <span className="font-display font-bold text-xl text-cat-dark tracking-tight">
              CatStack<span className="text-cat-orange"> Lab</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label} className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href ? (
                  <Link href={link.href} className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold text-cat-grey hover:bg-cat-orange/10 hover:text-cat-orange transition-all duration-200">
                    {link.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold text-cat-grey hover:bg-cat-orange/10 hover:text-cat-orange transition-all duration-200 cursor-pointer border-none bg-transparent">
                    {link.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`}>
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                )}

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="bg-white rounded-cat shadow-cat-lg border border-cat-orange/10 p-2 min-w-[180px] animate-fadeIn">
                      {link.children.map((child) => (
                        <Link key={child.label} href={child.href}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-cat-grey hover:bg-cat-orange/10 hover:text-cat-orange transition-all duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}

            {/* CTA */}
            <li className="ml-2">
              <Link href="/contact"
                className="px-5 py-2.5 bg-cat-orange text-white rounded-full text-sm font-bold hover:bg-orange-600 transition-all duration-200 shadow-cat hover:shadow-cat-lg hover:-translate-y-0.5 inline-block"
              >
                Hire Me 🐾
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-cat-orange/10 transition-colors"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className={`block w-6 h-0.5 bg-cat-dark rounded-full transition-all duration-300 ${
                mobileOpen
                  ? i === 0 ? 'translate-y-2 rotate-45' : i === 2 ? '-translate-y-2 -rotate-45' : 'opacity-0 scale-x-0'
                  : ''
              }`} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-cat-cream transition-transform duration-500 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ paddingTop: 'var(--nav-height)' }}>
        <div className="p-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.href ? (
                <Link href={link.href} onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-cat font-semibold text-lg text-cat-dark hover:bg-cat-orange/10 hover:text-cat-orange transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <div className="px-4 py-3 font-semibold text-lg text-cat-grey">{link.label}</div>
                  <div className="pl-6 flex flex-col gap-1">
                    {link.children?.map((child) => (
                      <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 rounded-xl text-base text-cat-grey hover:text-cat-orange transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="mt-4">
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="block text-center px-6 py-3 bg-cat-orange text-white rounded-full font-bold text-lg shadow-cat"
            >
              Hire Me 🐾
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}