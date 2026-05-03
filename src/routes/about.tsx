import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="bg-white text-black pt-16">
      <section className="min-h-screen flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-lg text-neutral-500 mb-5">
              About Traciphi
            </p>

            <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.05em] leading-[0.95]">
              Building AI-ready data foundations.
            </h1>
          </div>

          <div>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Traciphi helps organizations modernize legacy data systems into scalable, governed, cloud-native platforms for analytics, machine learning, BI, and agentic AI.
            </p>

            <p className="mt-6 text-neutral-600 leading-relaxed">
              We focus on pragmatic execution: assessment, architecture, migration, governance, and enablement.
            </p>

            <Link
              to="/contact"
              className="inline-flex mt-8 rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
