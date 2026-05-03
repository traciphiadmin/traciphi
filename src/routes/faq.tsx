import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

function FAQ() {
  return (
    <main className="bg-white text-black pt-16">
      <section className="px-6 py-24 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-lg text-neutral-500 mb-5">
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
  {
    question: 'What is ProofStack?',
    answer:
      'ProofStack is our AI-powered document verification platform designed specifically for consulting firms. It helps verify claims, data, and insights in proposals, reports, and deliverables before they reach clients, ensuring accuracy and credibility.',
  },
  {
    question: 'How does ProofStack help consulting firms?',
    answer:
      'ProofStack helps consulting firms by providing AI-driven verification of facts, data sources, and claims in their deliverables. This reduces the risk of errors, enhances credibility with clients, and streamlines the review process for consultants and partners.',
  },
  {
    question: 'Does ProofStack store or save client confidential information?',
    answer:
      'No. ProofStack is designed with privacy and security in mind. It processes documents locally or through secure, temporary sessions without storing any confidential client information. All verification happens in real-time without data persistence.',
  },
  {
    question: 'Is ProofStack available now?',
    answer:
      'ProofStack is currently in development. You can join our waitlist on the contact page to be notified when it becomes available for early access.',
  },
]
