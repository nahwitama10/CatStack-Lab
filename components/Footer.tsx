'use client'

import Link from 'next/link'

const footerLinks = {
  '🐱 Cats': [
    { label: 'All Cats', href: '/cats' },
    { label: 'Breeds', href: '/cats/breeds' },
    { label: 'Gallery', href: '/cats/gallery' },
  ],
  '🛠️ Projects': [
    { label: 'Web Apps', href: '/projects?type=web' },
    { label: 'Backend', href: '/projects?type=backend' },
    { label: 'Integrations', href: '/projects?type=integration' },
  ],
  '😺 Me': [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'GitHub', href: 'https://github.com/nahwitama10' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-cat-dark text-white relative overflow-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cat-orange via-cat-yellow to-cat-teal" />

      {/* Paw print bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        {['top-8 left-12', 'top-16 right-24', 'bottom-12 left-1/3', 'bottom-8 right-8'].map((pos, i) => (
          <div key={i} className={`absolute ${pos} text-5xl`}>🐾</div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐱</span>
              <span className="font-display text-xl font-bold">
                CatStack<span className="text-cat-orange"> Lab</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Fullstack developer building enterprise systems and modern web apps. Powered by coffee & cats.
            </p>
            <div className="flex gap-3">
              {[
                { icon: '⌨️', href: 'https://github.com/nahwitama10', label: 'GitHub' },
                { icon: '💼', href: '#', label: 'LinkedIn' },
                { icon: '📬', href: '/contact', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href}
                  className="w-9 h-9 bg-stone-800 hover:bg-cat-orange rounded-xl flex items-center justify-center text-base transition-all duration-200 hover:-translate-y-0.5"
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4">{group}</p>
              <ul className="flex flex-col gap-3">
                {links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="text-stone-400 hover:text-cat-orange text-sm transition-colors duration-200"
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Ibnu Nahwitama · Made with 🧡 & 🐱 in Indonesia
          </p>
          <div className="flex items-center gap-2 px-4 py-2 bg-stone-800 rounded-full">
            <span className="w-2 h-2 bg-cat-teal rounded-full animate-purr" />
            <span className="text-stone-400 text-xs font-medium">Built with Next.js + Tailwind · Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}