'use client'

import Link from 'next/link'

const footerLinks = {
  Navigation: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  Engineering: [
    { label: 'Frontend Systems', href: '/projects?type=frontend' },
    { label: 'Backend APIs', href: '/projects?type=backend' },
    { label: 'Workflow Platforms', href: '/projects?type=enterprise' },
    { label: 'Integrations', href: '/projects?type=integration' },
  ],

  Connect: [
    { label: 'GitHub', href: 'https://github.com/nahwitama10' },
    { label: 'LinkedIn', href: 'YOUR_LINKEDIN_URL' },
    { label: 'Email', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#F3E4C9] text-white relative overflow-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />

      {/* Paw print bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
        {['top-8 left-12', 'top-16 right-24', 'bottom-12 left-1/3', 'bottom-8 right-8'].map((pos, i) => (
          <div key={i} className={`absolute ${pos} text-4xl`}>🐾</div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐱</span>
              <span className="font-display text-xl font-bold" style={{color: '#1c1917'}}>
                CatStack<span className="text-orange-500"> Lab</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Fullstack developer building enterprise systems and modern web apps. Focused on scalable backend systems, modern frontend engineering, and production-ready web applications.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'ASP.NET Core',
                'Next.js',
                'TypeScript',
                'PostgreSQL',
                'Tailwind CSS',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-stone-700 text-stone-300 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>            
            <div className="flex gap-3">
              {[
                { icon: '⌨️', href: 'https://github.com/nahwitama10', label: 'GitHub' },
                { icon: '💼', href: '#', label: 'LinkedIn' },
                { icon: '📬', href: '/contact', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href}
                  className="w-9 h-9 bg-stone-800 hover:bg-orange-500 rounded-xl flex items-center justify-center text-base transition-all duration-200 hover:-translate-y-0.5"
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
                      className="text-stone-400 hover:text-orange-500 text-sm transition-colors duration-200"
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
            © {new Date().getFullYear()} Ibnu Nahwitama · Fullstack Engineer based in Indonesia
          </p>
          <div className="flex items-center gap-2 px-4 py-2 bg-stone-800 rounded-full">
            <span className="w-2 h-2 bg-teal-600 rounded-full animate-purr" />
            <span className="text-stone-400 text-xs font-medium">
              Next.js · ASP.NET Core · PostgreSQL · Vercel
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}