'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(label)

      setTimeout(() => {
        setCopied(null)
      }, 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  const contactItems = [
    {
      label: 'Email',
      value: 'nahwitama2000@gmail.com',
      copyValue: 'nahwitama2000@gmail.com',
      icon: '📧',
    },
    {
      label: 'Location',
      value: 'Bekasi, Indonesia',
      copyValue: 'Bekasi, Indonesia',
      icon: '📍',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ibnu-nahwitama-a00bb3221',
      copyValue: 'https://www.linkedin.com/in/ibnu-nahwitama-a00bb3221/',
      icon: '💼',
      href: 'https://www.linkedin.com/in/ibnu-nahwitama-a00bb3221/',
    },
    {
      label: 'GitHub',
      value: 'github.com/nahwitama10',
      copyValue: 'https://github.com/nahwitama10',
      icon: '🐱',
      href: 'https://github.com/nahwitama10',
    },
  ]

  return (
    <section
      style={{
        background: '#A77F60',
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div
        className="contact-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(48px, 8vw, 120px)',
          alignItems: 'center',
        }}
      >
        {/* Left Side */}
        <div>
          <p
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#ffc27c',
              marginBottom: '24px',
              fontWeight: 2100,
            }}
          >
            — Contact
          </p>

          <h2
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              marginBottom: '32px',
            }}
          >
            Let&apos;s build
            <br />
            something great.
          </h2>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.9,
              color: '#ffffff',
              maxWidth: '520px',
              marginBottom: '40px',
            }}
          >
            Fullstack Developer specializing in ASP.NET, Next.js, and IT
            Analysis. I enjoy building scalable systems, modern web
            applications, API integrations, and enterprise solutions with clean
            architecture and excellent user experience.
          </p>

          {/* Tech Tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {[
              'ASP.NET Core',
              'Next.js',
              'TypeScript',
              'SQL Server',
              'REST API',
              'System Integration',
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '10px 16px',
                  borderRadius: '9999px',
                  background: '#18181b',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#e7e5e4',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {contactItems.map((item) => (
            <div
              key={item.label}
              onClick={() =>
                copyToClipboard(item.copyValue, item.label)
              }
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform =
                  'translateY(-4px)'

                ;(e.currentTarget as HTMLElement).style.border =
                  '1px solid rgba(249,115,22,0.5)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform =
                  'none'

                ;(e.currentTarget as HTMLElement).style.border =
                  '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '18px',
                      background: 'rgba(249,115,22,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.4rem',
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: '#f97316',
                        marginBottom: '8px',
                      }}
                    >
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          color: 'black',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          fontWeight: 600,
                          wordBreak: 'break-word',
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          color: 'black',
                          fontSize: '1rem',
                          fontWeight: 600,
                          wordBreak: 'break-word',
                        }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    color:
                      copied === item.label
                        ? '#22c55e'
                        : '#a8a29e',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    minWidth: '72px',
                    textAlign: 'right',
                  }}
                >
                  {copied === item.label
                    ? 'Copied ✓'
                    : 'Copy'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}