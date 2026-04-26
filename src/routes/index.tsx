import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="bg-white text-black">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="uppercase tracking-[0.28em] text-xs text-neutral-500 mb-5">
          Traciphi
        </p>

        <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.05em] max-w-5xl leading-[0.95]">
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

      <section className="min-h-screen flex items-center px-6 py-24 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-5">
              What we do
            </p>

            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] leading-tight">
              From legacy databases to intelligent data products.
            </h2>
          </div>

          <div className="space-y-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="border-b border-neutral-200 pb-8">
                <h3 className="text-2xl font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-5">
            Migration model
          </p>

          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] leading-tight">
            Clean migration. Minimal disruption. Measurable outcomes.
          </h2>

          <div className="mt-16 grid md:grid-cols-4 gap-6 text-left">
            {PHASES.map((phase, index) => (
              <div
                key={phase.title}
                className="bg-white border border-neutral-200 rounded-3xl p-8"
              >
                <p className="text-sm text-neutral-400 mb-8">
                  {String(index + 1).padStart(2, '0')}
                </p>

                <h3 className="text-xl font-medium tracking-tight">
                  {phase.title}
                </h3>

                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-5">
              ProofStack
            </p>

            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] leading-tight">
              AI verification for high-stakes consulting deliverables.
            </h2>

            <p className="mt-6 text-neutral-600 leading-relaxed">
              ProofStack checks claims, numbers, citations, and source references before client-ready documents reach the boardroom.
            </p>

            <Link
              to="/contact"
              className="inline-flex mt-8 rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition"
            >
              Join the waitlist
            </Link>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 p-6 bg-white shadow-sm">
            <div className="border-b border-neutral-200 pb-4 mb-4">
              <p className="text-sm text-neutral-500">Document trust score</p>
              <p className="text-5xl font-medium tracking-tight mt-2">98.4%</p>
            </div>

            {[
              'Revenue figure matched to source ledger',
              'Citation verified against original report',
              'Forecast assumption flagged for review',
              'Executive summary validated',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between py-4 border-b border-neutral-100 last:border-b-0"
              >
                <span className="text-sm text-neutral-700">{item}</span>
                <span className="text-xs rounded-full bg-neutral-100 px-3 py-1">
                  Checked
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-black text-white">
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] max-w-4xl leading-tight">
          Build the data foundation your AI strategy deserves.
        </h2>

        <p className="mt-6 max-w-xl text-neutral-300 leading-relaxed">
          Start with a focused assessment of your SQL estate, cloud readiness, governance maturity, and modernization roadmap.
        </p>

        <Link
          to="/contact"
          className="mt-10 rounded-full bg-white text-black px-8 py-3 text-sm font-medium hover:bg-neutral-200 transition"
        >
          Start the conversation
        </Link>
      </section>
    </main>
  )
}

const SERVICES = [
  {
    title: 'SQL Server modernization',
    description:
      'Move stored procedures, tables, jobs, and reporting dependencies into scalable cloud-native architecture.',
  },
  {
    title: 'Data mesh architecture',
    description:
      'Design domain-owned data products with clear contracts, governance, access patterns, and quality controls.',
  },
  {
    title: 'AI, BI, and ML enablement',
    description:
      'Create trusted serving layers for dashboards, analytics, machine learning workflows, and agentic AI tools.',
  },
  {
    title: 'Governance and security',
    description:
      'Implement lineage, access control, data classification, validation, and compliance-ready operating models.',
  },
]

const PHASES = [
  {
    title: 'Assess',
    description:
      'Inventory systems, dependencies, stored procedures, reports, and business-critical workflows.',
  },
  {
    title: 'Design',
    description:
      'Define the target cloud architecture, migration roadmap, domain model, and governance patterns.',
  },
  {
    title: 'Migrate',
    description:
      'Move workloads incrementally with validation, parallel runs, reconciliation, and controlled cutovers.',
  },
  {
    title: 'Enable',
    description:
      'Deliver reusable data products that power analytics, BI, ML, and AI use cases downstream.',
  },
]
