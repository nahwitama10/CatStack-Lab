'use client'

import { useState } from 'react'

const skills = [
  {
    emoji: '🏗️',
    title: 'Backend Systems',
    color: 'from-cat-teal/10 to-cat-teal/5 border-cat-teal/20',
    accent: 'text-cat-teal',
    badge: 'bg-cat-teal/10 text-cat-teal border-cat-teal/20',
    desc: 'Enterprise-grade REST APIs and microservices built with ASP.NET Core. Clean architecture, SOLID principles, and battle-tested patterns.',
    techs: ['ASP.NET Core', 'C#', 'Entity Framework', 'PostgreSQL', 'Redis'],
    stat: '50+ APIs shipped',
  },
  {
    emoji: '🌐',
    title: 'Web Apps',
    color: 'from-cat-orange/10 to-cat-orange/5 border-cat-orange/20',
    accent: 'text-cat-orange',
    badge: 'bg-cat-orange/10 text-cat-orange border-cat-orange/20',
    desc: 'Snappy, SEO-friendly frontends with Next.js. From landing pages to complex dashboards — pixel-perfect and fast.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Framer Motion'],
    stat: '30+ sites launched',
  },
  {
    emoji: '🔗',
    title: 'Integrations',
    color: 'from-purple-50 to-purple-50/30 border-purple-200',
    accent: 'text-purple-600',
    badge: 'bg-purple-50 text-purple-600 border-purple-200',
    desc: 'Connecting systems that weren\'t meant to talk to each other. Payment gateways, third-party APIs, webhooks, and workflow automation.',
    techs: ['Midtrans', 'WhatsApp API', 'SignalR', 'RabbitMQ', 'Azure'],
    stat: '20+ integrations',
  },
  {
    emoji: '⚙️',
    title: 'Workflow Systems',
    color: 'from-amber-50 to-amber-50/30 border-amber-200',
    accent: 'text-amber-600',
    badge: 'bg-amber-50 text-amber-600 border-amber-200',
    desc: 'Custom workflow engines, approval chains, and BPM systems for enterprise clients. Complex state machines made manageable.',
    techs: ['State Machines', 'BPMN', 'Queue Systems', 'Event Sourcing', 'CQRS'],
    stat: '10+ enterprise clients',
  },
]

export default function WhatIDo() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white relative overflow-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cat-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cat-teal/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cat-orange/10 border border-cat-orange/20 rounded-full mb-6">
            <span className="text-cat-orange text-sm font-bold">🛠️ What I Do</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-cat-dark mb-4">
            I build things that{' '}
            <span className="text-cat-orange italic">actually work</span>
          </h2>
          <p className="text-cat-grey text-lg max-w-2xl mx-auto">
            From database to deployment — full stack, all paws on deck 🐾
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative p-8 rounded-cat-lg bg-gradient-to-br border-2 transition-all duration-300 cursor-default card-lift ${skill.color}`}
            >
              {/* Emoji */}
              <div className="text-4xl mb-4" style={{
                display: 'inline-block',
                transition: 'transform 0.3s',
                transform: hovered === i ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
              }}>
                {skill.emoji}
              </div>

              <div className="flex items-start justify-between mb-3">
                <h3 className={`font-display text-2xl font-bold text-cat-dark`}>{skill.title}</h3>
                <span className={`tag-pill border ${skill.badge} ml-2 shrink-0`}>{skill.stat}</span>
              </div>

              <p className="text-cat-grey leading-relaxed mb-6">{skill.desc}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {skill.techs.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/70 border border-cat-light-grey rounded-full text-xs font-semibold text-cat-grey">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Corner decoration */}
              <div className={`absolute top-4 right-4 text-5xl opacity-5 font-display font-bold ${skill.accent}`}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-cat-cream rounded-cat-lg border-2 border-cat-orange/20">
            <span className="text-3xl animate-float">😸</span>
            <div className="text-left">
              <p className="font-bold text-cat-dark">Got a project in mind?</p>
              <p className="text-cat-grey text-sm">Let's build something paw-some together</p>
            </div>
            <a href="/contact"
              className="px-5 py-2.5 bg-cat-orange text-white rounded-full font-bold text-sm shadow-cat hover:shadow-cat-lg hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
