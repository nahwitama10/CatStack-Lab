'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with your Formspree endpoint or API route
    try {
      await new Promise(res => setTimeout(res, 1200)) // simulate
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section style={{ background: 'var(--color-black)', padding: 'clamp(80px, 12vw, 160px) clamp(24px, 8vw, 120px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px, 8vw, 120px)', alignItems: 'start' }} className="contact-grid">

        {/* Left: copy */}
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '24px' }}>
            — Get In Touch
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 300, color: 'var(--color-white)', lineHeight: 1.08, letterSpacing: '-0.01em', marginBottom: '40px' }}>
            Tell us about<br /><em style={{ fontStyle: 'italic' }}>your project.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--color-warm-grey)', maxWidth: '380px', marginBottom: '48px' }}>
            We'd love to hear about your project, however big or small. Get in touch and we'll arrange a time to discuss how we can help.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { label: 'Studio', value: 'London, United Kingdom' },
              { label: 'Email', value: 'studio@minaleandmann.com' },
              { label: 'Awards', value: 'London Design Awards 2018 Winner' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', minWidth: '60px' }}>{item.label}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--color-warm-grey)' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div>
          {status === 'sent' ? (
            <div style={{ padding: '48px', border: '1px solid rgba(200,196,188,0.15)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--color-white)', marginBottom: '16px' }}>Thank you.</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--color-warm-grey)' }}>We'll be in touch shortly.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { name: 'name', label: 'Full Name', type: 'text', required: true },
                { name: 'email', label: 'Email Address', type: 'email', required: true },
                { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
              ].map(field => (
                <div key={field.name} style={{ borderBottom: '1px solid rgba(200,196,188,0.12)', paddingBottom: '4px', marginBottom: '28px' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: '8px' }}>
                    {field.label}{field.required && ' *'}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(form as any)[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    style={{
                      width: '100%', background: 'transparent', border: 'none', outline: 'none',
                      fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-white)',
                      padding: '4px 0 10px', letterSpacing: '0.02em',
                    }}
                  />
                </div>
              ))}

              {/* Service select */}
              <div style={{ borderBottom: '1px solid rgba(200,196,188,0.12)', paddingBottom: '4px', marginBottom: '28px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: '8px' }}>
                  Service *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{
                    width: '100%', background: 'transparent', border: 'none', outline: 'none',
                    fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: form.service ? 'var(--color-white)' : 'var(--color-mid-grey)',
                    padding: '4px 0 10px', cursor: 'pointer', appearance: 'none',
                  }}
                >
                  <option value="" disabled style={{ background: '#0a0a0a' }}>Select a service…</option>
                  {['Architectural Design', 'Interior Design', 'Planning Applications', 'Conservation & Heritage', 'Create & Construct'].map(s => (
                    <option key={s} value={s} style={{ background: '#0a0a0a' }}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div style={{ borderBottom: '1px solid rgba(200,196,188,0.12)', paddingBottom: '4px', marginBottom: '40px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: '8px' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  style={{
                    width: '100%', background: 'transparent', border: 'none', outline: 'none', resize: 'none',
                    fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-white)',
                    padding: '4px 0 10px', letterSpacing: '0.02em', lineHeight: 1.7,
                  }}
                />
              </div>

              {/* Privacy */}
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--color-mid-grey)', marginBottom: '32px', lineHeight: 1.6 }}>
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy" style={{ color: 'var(--color-warm-grey)', borderBottom: '1px solid rgba(200,196,188,0.3)' }}>privacy policy</a>.
              </p>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                style={{
                  background: 'var(--color-white)',
                  color: 'var(--color-black)',
                  border: 'none',
                  padding: '16px 48px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 0.3s, color 0.3s',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-off-white)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-white)' }}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
