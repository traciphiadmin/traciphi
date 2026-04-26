import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {
  const [fields, setFields] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Auth integration goes here
  }

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        background: '#080e1a',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="grid-bg"
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ width: '100%', maxWidth: '440px', position: 'relative' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '1.75rem',
                color: '#f8fafc',
                letterSpacing: '-0.03em',
              }}
            >
              Traci<span style={{ color: '#22d3ee' }}>phi</span>
            </span>
          </Link>
        </div>

        {/* Card */}
        <div
          style={{
            background: 'rgba(13, 22, 40, 0.9)',
            border: '1px solid rgba(59, 130, 246, 0.15)',
            borderRadius: '12px',
            padding: '40px',
            backdropFilter: 'blur(12px)',
          }}
        >
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.375rem',
              fontWeight: 700,
              color: '#e2e8f0',
              marginBottom: '6px',
              letterSpacing: '-0.02em',
            }}
          >
            Welcome back
          </h1>
          <p
            style={{
              color: '#475569',
              fontSize: '0.9375rem',
              marginBottom: '32px',
            }}
          >
            Sign in to your Traciphi account
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
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
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={fields.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="input-dark"
              />
            </div>

            <div style={{ marginBottom: '8px' }}>
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
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={fields.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="input-dark"
                  style={{ paddingRight: '44px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#475569',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8s2.5-5 6-5 6 5 6 5-2.5 5-6 5-6-5-6-5z" stroke="currentColor" strokeWidth="1.25" />
                      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.25" />
                      <path d="M2 2l12 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8s2.5-5 6-5 6 5 6 5-2.5 5-6 5-6-5-6-5z" stroke="currentColor" strokeWidth="1.25" />
                      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.25" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div
              style={{
                textAlign: 'right',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6875rem',
                  color: '#3b82f6',
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                }}
              >
                Forgot password?
              </span>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Sign In</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              margin: '24px 0',
            }}
          >
            <div style={{ flex: 1, height: '1px', background: 'rgba(59, 130, 246, 0.1)' }} />
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6875rem',
                color: '#334155',
                letterSpacing: '0.08em',
              }}
            >
              OR
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(59, 130, 246, 0.1)' }} />
          </div>

          {/* SSO Button */}
          <button
            type="button"
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.25" />
              <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.25" />
              <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.25" />
              <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.25" />
            </svg>
            Continue with SSO
          </button>
        </div>

        {/* Footer */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '24px',
            fontSize: '0.875rem',
            color: '#475569',
          }}
        >
          Don't have an account?{' '}
          <Link to="/contact" style={{ color: '#3b82f6', textDecoration: 'none' }}>
            Contact us
          </Link>
        </p>

        {/* Security note */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            marginTop: '20px',
          }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path
              d="M5.5 1L1.5 2.5v3c0 2.5 1.5 4 4 4.5 2.5-.5 4-2 4-4.5v-3L5.5 1z"
              stroke="#334155"
              strokeWidth="1"
            />
          </svg>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.625rem',
              color: '#334155',
              letterSpacing: '0.08em',
            }}
          >
            Secured by TLS 1.3
          </span>
        </div>
      </div>
    </div>
  )
}
