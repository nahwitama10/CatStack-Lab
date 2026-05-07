'use client'

import { useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Workflow Engine Pro',
    desc: 'Enterprise BPM system with visual workflow designer, approval chains, and real-time notifications via SignalR.',
    type: 'backend',
    techs: ['ASP.NET Core', 'SignalR', 'PostgreSQL', 'React'],
    emoji: '⚙️',
    color: 'from-cat-teal to-teal-700',
    accent: 'bg-cat-teal/10 text-cat-teal border-cat-teal/20',
    featured: true,
    year: '2024',
    href: '/projects?type=backend',
  },
  {
    id: 2,
    title: 'CatStack Lab',
    desc: 'This very portfolio! Built with Next.js, Tailwind, and powered by an unreasonable love of cats.',
    type: 'web',
    techs: ['Next.js', 'Tailwind', 'TypeScript', 'Vercel'],
    emoji: '🐱',
    color: 'from-cat-orange to-orange-600',
    accent: 'bg-cat-orange/10 text-cat-orange border-cat-orange/20',
    featured: true,
    year: '2025',
    href: '/projects?type=web',
  },
  {
    id: 3,
    title: 'Payment Gateway Integration',
    desc: 'Midtrans payment integration with webhook handling, retry logic, and reconciliation dashboard.',
    type: 'integration',
    techs: ['ASP.NET Core', 'Midtrans', 'PostgreSQL', 'Redis'],
    emoji: '💳',
    color: 'from-purple-500 to-purple-700',
    accent: 'bg-purple-50 text-purple-600 border-purple-200',
    featured: false,
    year: '2024',
    href: '/projects?type=integration',
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    desc: 'Multi-tenant e-commerce with inventory management, order tracking, and seller dashboard.',
    type: 'web',
    techs: ['Next.js', 'ASP.NET Core', 'PostgreSQL', 'Docker'],
    emoji: '🛒',
    color: 'from-amber-500 to-orange-600',
    accent: 'bg-amber-50 text-amber-600 border-amber-200',
    featured: false,
    year: '2023',
    href: '/projects?type=web',
  },
  {
    id: 5,
    title: 'WhatsApp Notifier',
    desc: 'Automated WhatsApp notification system for business alerts, OTP, and order updates.',
    type: 'integration',
    techs: ['ASP.NET Core', 'WhatsApp API', 'RabbitMQ'],
    emoji: '💬',
    color: 'from-green-500 to-teal-600',
    accent: 'bg-green-50 text-green-600 border-green-200',
    featured: false,
    year: '2023',
    href: '/projects?type=integration',
  },
  {
    id: 6,
    title: 'HR Management System',
    desc: 'Full HR system with leave management, payroll integration, and performance tracking.',
    type: 'backend',
    techs: ['ASP.NET Core', 'C#', 'SQL Server', 'Angular'],
    emoji: '👥',
    color: 'from-blue-500 to-indigo-600',
    accent: 'bg-blue-50 text-blue-600 border-blue-200',
    featured: false,
    year: '2023',
    href: '/projects?type=backend',
  },
]

const FILTERS = [
  { label: 'All 🐾', value: 'all' },
  { label: 'Web Apps 🌐', value: 'web' },
  { label: 'Backend ⚙️', value: 'backend' },
  { label: 'Integrations 🔗', value: 'integration' },
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all')
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter)

  return (
    <section className="py-24 bg-cat-cream relative overflow-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cat-orange/10 border border-cat-orange/20 rounded-full mb-4">
              <span className="text-cat-orange text-sm font-bold">🛠️ Projects</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-cat-dark">
              Things I've <span className="text-cat-orange italic">built</span>
            </h2>
          </div>
          <Link href="/projects"
            className="inline-flex items-center gap-2 text-cat-orange font-bold hover:gap-3 transition-all duration-200 text-sm"
          >
            All Projects →
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(f => (
            <button key={f.value} onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
                filter === f.value
                  ? 'bg-cat-orange text-white border-cat-orange shadow-cat'
                  : 'bg-white text-cat-grey border-cat-light-grey hover:border-cat-orange/40 hover:text-cat-orange'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link key={project.id} href={project.href}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative bg-white rounded-cat-lg border-2 border-cat-light-grey overflow-hidden card-lift flex flex-col ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Top color bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="tag-pill bg-cat-yellow/30 text-amber-700 border-cat-yellow/40">⭐ Featured</span>
                    )}
                    <span className="text-xs text-cat-mid-grey font-medium">{project.year}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-cat-dark mb-2 group-hover:text-cat-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-cat-grey text-sm leading-relaxed flex-1 mb-4">{project.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techs.map(tech => (
                    <span key={tech} className={`tag-pill border ${project.accent}`}>{tech}</span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-1 text-cat-orange font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0">
                  View Project →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😿</div>
            <p className="font-display text-2xl text-cat-grey">No projects here yet...</p>
          </div>
        )}
      </div>
    </section>
  )
}
