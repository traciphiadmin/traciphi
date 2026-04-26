import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

type Fields = {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function Contact() {
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ background: '#080e1a', minHeight: '100vh' }}>
      <section
        style={{
          padding: '80px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left column */}
          <div>
            <p className="section-label" style={{ marginBottom: '16px' }}>
              Contact Us
            </p>
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 800,
                marginBottom: '20px',
                letterSpacing: '-0.03em',
              }}
            >
              Start a{' '}
              <span className="gradient-text">real conversation</span>{' '}
              about your data
            </h1>
            <p
              style={{
                color: '#64748b',
                lineHeight: 1.75,
                marginBottom: '48px',
                fontSize: '1.0625rem',
              }}
            >
              Whether you're evaluating a migration, exploring Data Mesh
              architecture, or curious about ProofStack — we're happy to talk
              through your situation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2 4.5A1.5 1.5 0 013.5 3h11A1.5 1.5 0 0116 4.5v9A1.5 1.5 0 0114.5 15h-11A1.5 1.5 0 012 13.5v-9z" stroke="#22d3ee" strokeWidth="1.25" />
                      <path d="M2 5l7 5 7-5" stroke="#22d3ee" strokeWidth="1.25" strokeLinecap="round" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hello@traciphi.com',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7" stroke="#22d3ee" strokeWidth="1.25" />
                      <path d="M9 4v5l3 3" stroke="#22d3ee" strokeWidth="1.25" strokeLinecap="round" />
                    </svg>
                  ),
                  label: 'Response time',
                  value: 'Within 1 business day',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9.5C3 5.91 5.91 3 9.5 3S16 5.91 16 9.5" stroke="#22d3ee" strokeWidth="1.25" strokeLinecap="round" />
                      <path d="M1 12a2 2 0 002 2h.5a1 1 0 001-1v-3a1 1 0 00-1-1H3a2 2 0 00-2 2v1zm16-2a2 2 0 00-2-2h-.5a1 1 0 00-1 1v3a1 1 0 001 1H14a2 2 0 002-2v-1z" stroke="#22d3ee" strokeWidth="1.25" />
                    </svg>
                  ),
                  label: 'Discovery call',
                  value: '60 min with our architects',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      background: 'rgba(34, 211, 238, 0.08)',
                      border: '1px solid rgba(34, 211, 238, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.625rem',
                        color: '#475569',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '3px',
                      }}
                    >
                      {item.label}
                    </p>
                    <p style={{ fontSize: '0.9375rem', color: '#cbd5e1' }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {status === 'success' ? (
              <SuccessState />
            ) : (
              <div
                style={{
                  background: 'rgba(13, 22, 40, 0.8)',
                  border: '1px solid rgba(59, 130, 246, 0.12)',
                  borderRadius: '12px',
                  padding: '40px',
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '28px',
                    color: '#e2e8f0',
                  }}
                >
                  Send us a message
                </h2>

                {status === 'error' && (
                  <div
                    style={{
                      padding: '12px 16px',
                      background: 'rgba(248, 113, 113, 0.08)',
                      border: '1px solid rgba(248, 113, 113, 0.2)',
                      borderRadius: '4px',
                      color: '#f87171',
                      fontSize: '0.875rem',
                      marginBottom: '20px',
                    }}
                  >
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="bot-field"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                  />

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                    className="form-row"
                  >
                    <FormField label="Full name" required>
                      <input
                        type="text"
                        name="name"
                        placeholder="Kiran Mehta"
                        value={fields.name}
                        onChange={handleChange}
                        required
                        className="input-dark"
                      />
                    </FormField>
                    <FormField label="Work email" required>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={fields.email}
                        onChange={handleChange}
                        required
                        className="input-dark"
                      />
                    </FormField>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <FormField label="Company">
                      <input
                        type="text"
                        name="company"
                        placeholder="Your organization"
                        value={fields.company}
                        onChange={handleChange}
                        className="input-dark"
                      />
                    </FormField>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <FormField label="Subject" required>
                      <select
                        name="subject"
                        value={fields.subject}
                        onChange={handleChange}
                        required
                        className="input-dark"
                        style={{
                          background: 'rgba(8, 14, 26, 0.8)',
                          cursor: 'pointer',
                          appearance: 'none',
                        }}
                      >
                        <option value="" disabled>
                          Select a topic…
                        </option>
                        <option value="migration">Legacy SQL Migration</option>
                        <option value="mesh">Data Mesh Architecture</option>
                        <option value="ai-enablement">AI/BI/ML Enablement</option>
                        <option value="governance">Data Governance</option>
                        <option value="course">Course Enrollment</option>
                        <option value="proofstack">ProofStack Waitlist</option>
                        <option value="enterprise-training">
                          Enterprise Training
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </FormField>
                  </div>

                  <div style={{ marginBottom: '28px' }}>
                    <FormField label="Message" required>
                      <textarea
                        name="message"
                        placeholder="Tell us about your data infrastructure situation…"
                        value={fields.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input-dark"
                        style={{ resize: 'vertical', minHeight: '120px' }}
                      />
                    </FormField>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      opacity: status === 'submitting' ? 0.7 : 1,
                      cursor:
                        status === 'submitting' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <span>
                      {status === 'submitting' ? 'Sending…' : 'Send Message'}
                    </span>
                    {status !== 'submitting' && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M14 2L7 9M14 2H9M14 2v5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(59, 130, 246, 0.08)',
          padding: '40px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            color: '#334155',
          }}
        >
          &copy; 2026 Traciphi, Inc.
        </span>
      </footer>
    </div>
  )
}

function FormField({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        style={{
          display: 'block',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.625rem',
          color: '#475569',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}
      >
        {label}
        {required && (
          <span style={{ color: '#22d3ee', marginLeft: '4px' }}>*</span>
        )}
      </label>
      {children}
    </div>
  )
}

function SuccessState() {
  return (
    <div
      style={{
        background: 'rgba(13, 22, 40, 0.8)',
        border: '1px solid rgba(34, 211, 238, 0.2)',
        borderRadius: '12px',
        padding: '60px 40px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'rgba(34, 211, 238, 0.1)',
          border: '1px solid rgba(34, 211, 238, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 12l5 5L20 7"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '1.375rem',
          fontWeight: 700,
          color: '#e2e8f0',
          marginBottom: '12px',
        }}
      >
        Message received
      </h3>
      <p style={{ color: '#64748b', lineHeight: 1.7, maxWidth: '340px', margin: '0 auto' }}>
        We'll get back to you within one business day. If your need is urgent,
        email us directly at{' '}
        <span style={{ color: '#22d3ee' }}>hello@traciphi.com</span>
      </p>
    </div>
  )
}
