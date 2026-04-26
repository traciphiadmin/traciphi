import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-6 py-10 text-black">
      <div className="mx-auto max-w-7xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-500">© 2026 Traciphi, Inc.</p>

        <div className="flex gap-6 text-sm text-neutral-600">
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
    </footer>
  )
}
