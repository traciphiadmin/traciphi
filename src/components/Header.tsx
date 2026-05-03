import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Course', to: '/course' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-medium tracking-[-0.03em] text-black">
          Traciphi
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-black transition"
              activeProps={{ className: 'text-black font-medium' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/login"
          className="hidden md:inline-flex rounded-full bg-black text-white px-5 py-2 text-sm font-medium hover:bg-neutral-800 transition"
        >
          Login
        </Link>

        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-6">
          <div className="flex flex-col gap-5 text-sm text-neutral-800">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
