import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/course')({
  component: Course,
})

function Course() {
  return (
    <main className="bg-white text-black pt-16">
      <section className="px-6 py-24 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-5">
            Course
          </p>

          <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.05em] leading-[0.95]">
            Learn modern data engineering.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-neutral-600 leading-relaxed">
            A practical course for engineers and leaders modernizing legacy data systems into cloud-native, AI-ready platforms.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {MODULES.map((module, index) => (
            <div
              key={module.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8"
            >
              <p className="text-sm text-neutral-400 mb-8">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="text-2xl font-medium tracking-tight">
                {module.title}
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition"
          >
            Register interest
          </Link>
        </div>
      </section>
    </main>
  )
}

const MODULES = [
  {
    title: 'Modernization strategy',
    description:
      'Assess legacy estates, define migration scope, prioritize workloads, and build an execution roadmap.',
  },
  {
    title: 'Cloud data architecture',
    description:
      'Design ingestion, orchestration, transformation, storage, semantic, and serving layers.',
  },
  {
    title: 'AI-ready data products',
    description:
      'Create governed, reusable, high-quality data products for analytics, ML, and AI systems.',
  },
]
