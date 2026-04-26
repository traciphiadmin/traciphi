import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

function FAQ() {
  return (
    <main className="bg-white text-black pt-16">
      <section className="px-6 py-24 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-5">
            FAQ
          </p>

          <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.05em] leading-[0.95]">
            Common questions.
          </h1>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto divide-y divide-neutral-200">
          {FAQS.map((item) => (
            <div key={item.question} className="py-8">
              <h2 className="text-2xl font-medium tracking-tight">
                {item.question}
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

const FAQS = [
  {
    question: 'What does Traciphi help with?',
    answer:
      'Traciphi helps companies modernize legacy data infrastructure, migrate SQL workloads, design cloud data platforms, and enable AI-ready data products.',
  },
  {
    question: 'Do you only work with SQL Server?',
    answer:
      'No. SQL Server modernization is one focus area, but the same approach applies to broader data platform, analytics, governance, and cloud modernization work.',
  },
  {
    question: 'Can you help with architecture and execution?',
    answer:
      'Yes. We support assessment, roadmap creation, architecture, migration planning, execution patterns, validation, and enablement.',
  },
  {
    question: 'Is this suitable for AI initiatives?',
    answer:
      'Yes. A major goal is to create clean, governed, trusted data foundations that can support analytics, ML, BI, and agentic AI systems.',
  },
]
