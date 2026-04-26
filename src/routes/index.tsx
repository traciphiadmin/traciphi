import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="bg-white text-black pt-16">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-5">
          Traciphi
        </p>

        <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.05em] max-w-5xl leading-[0.95] text-black">
          Modern data infrastructure for AI-ready enterprises.
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-neutral-600 leading-relaxed">
          We migrate legacy SQL estates into clean, governed, cloud-native data platforms built for analytics, machine learning, and intelligent automation.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition"
          >
            Book a discovery call
          </Link>

          <Link
            to="/services"
            className="rounded-full border border-black text-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            View services
          </Link>
        </div>
      </section>

      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-white text-black border-t border-neutral-200">
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] max-w-4xl leading-tight text-black">
          Build the data foundation your AI strategy deserves.
        </h2>

        <p className="mt-6 max-w-xl text-neutral-600 leading-relaxed">
          Start with a focused assessment of your SQL estate, cloud readiness, governance maturity, and modernization roadmap.
        </p>

        <Link
          to="/contact"
          className="mt-10 rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition"
        >
          Start the conversation
        </Link>
      </section>
    </main>
  )
}
