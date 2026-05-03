import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
    <main className="bg-white text-black pt-16">
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.25em] text-lg text-neutral-500 mb-5">
              Client portal
            </p>

            <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.05em]">
              Sign in.
            </h1>

            <p className="mt-4 text-neutral-600">
              Access your Traciphi workspace.
            </p>
          </div>

          <form className="rounded-3xl border border-neutral-200 bg-white p-8 space-y-5">
            <div>
              <label className="block text-sm text-neutral-600 mb-2">Email</label>
              <input className="w-full" placeholder="you@company.com" />
            </div>

            <div>
              <label className="block text-sm text-neutral-600 mb-2">Password</label>
              <input className="w-full" type="password" placeholder="••••••••" />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition"
            >
              Sign in
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-neutral-600">
            Need access?{' '}
            <Link to="/contact" className="text-black underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
