import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Course', to: '/course' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(8, 14, 26, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(59, 130, 246, 0.1)',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <LogoMark />
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: '1.375rem',
              color: '#f8fafc',
              letterSpacing: '-0.03em',
            }}
          >
            Traci<span style={{ color: '#22d3ee' }}>phi</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ textDecoration: 'none' }}
            >
              {({ isActive }) => (
                <span
                  style={{
                    display: 'block',
                    padding: '8px 16px',
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: isActive ? '#60a5fa' : '#94a3b8',
                    borderBottom: isActive
                      ? '1px solid rgba(96, 165, 250, 0.6)'
                      : '1px solid transparent',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      ;(e.target as HTMLSpanElement).style.color = '#e2e8f0'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      ;(e.target as HTMLSpanElement).style.color = '#94a3b8'
                    }
                  }}
                >
                  {link.label}
                </span>
              )}
            </Link>
          ))}

          {/* Login button */}
          <Link to="/login" style={{ textDecoration: 'none', marginLeft: '16px' }}>
            <span
              style={{
                display: 'block',
                padding: '7px 20px',
                background: 'linear-gradient(135deg, #2563eb, #0891b2)',
                color: 'white',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                borderRadius: '4px',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLSpanElement).style.opacity = '0.85')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLSpanElement).style.opacity = '1')
              }
            >
              Login
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#94a3b8',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="17" x2="14" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: 'rgba(8, 14, 26, 0.98)',
            borderTop: '1px solid rgba(59, 130, 246, 0.1)',
            padding: '16px 24px 24px',
          }}
          className="mobile-menu"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ textDecoration: 'none', display: 'block' }}
              onClick={() => setMobileOpen(false)}
            >
              <span
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: '1rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#cbd5e1',
                  borderBottom: '1px solid rgba(59, 130, 246, 0.08)',
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link
            to="/login"
            style={{ textDecoration: 'none', display: 'block', marginTop: '16px' }}
            onClick={() => setMobileOpen(false)}
          >
            <span
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '12px',
                background: 'linear-gradient(135deg, #2563eb, #0891b2)',
                color: 'white',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius: '4px',
              }}
            >
              Login
            </span>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="6" fill="url(#logoGrad)" />
      <path d="M8 10h12M14 10v8M10 18h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
