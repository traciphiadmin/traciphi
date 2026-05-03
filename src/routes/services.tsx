import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: Services,
})

function Services() {
  return (
    <main className="bg-white text-black pt-16">
      <section className="px-6 py-24 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-lg text-neutral-500 mb-5">
            Services
          </p>

          <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.05em] leading-[0.95]">
            Data modernization for the AI era.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-neutral-600 leading-relaxed">
            We help enterprises move from legacy data estates to trusted, scalable, AI-ready platforms.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8"
            >
              <h2 className="text-2xl font-medium tracking-tight">
                {service.title}
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition"
          >
            Start a project
          </Link>
        </div>
      </section>
    </main>
  )
}

const SERVICES = [
  {
    title: 'SQL Server to BigQuery migration',
    description:
      'Modernize tables, stored procedures, jobs, dependencies, and reporting workflows into a clean cloud architecture.',
  },
  {
    title: 'Data platform architecture',
    description:
      'Design scalable ingestion, orchestration, transformation, serving, governance, and observability layers.',
  },
  {
    title: 'Data products and data mesh',
    description:
      'Create domain-owned, governed, reusable data products with contracts, quality checks, and access controls.',
  },
  {
    title: 'AI and BI enablement',
    description:
      'Build trusted data layers for dashboards, analytics, ML workflows, and agentic AI systems.',
  },
]
