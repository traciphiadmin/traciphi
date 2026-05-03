import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/products/proofstack')({
  component: ProofStack,
})

function ProofStack() {
  return (
    <main className="bg-white text-black pt-16">
      <section className="min-h-screen flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-5">
              ProofStack
            </p>

            <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.05em] leading-[0.95] text-black">
              Verify every claim before it reaches the boardroom.
            </h1>

            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              AI-powered verification for consulting, research, strategy, and executive deliverables.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition"
              >
                Request early access
              </Link>

              <Link
                to="/products"
                className="rounded-full border border-black text-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition"
              >
                View all products
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8">
            <p className="text-sm text-neutral-500">Document trust score</p>
            <p className="text-6xl font-medium tracking-tight mt-3 text-black">
              98.4%
            </p>

            <div className="mt-8 divide-y divide-neutral-200">
              {[
                'Claims checked against source documents',
                'Metrics validated for consistency',
                'Citations verified before delivery',
                'Risky assumptions flagged for review',
                'Executive summary validated',
              ].map((item) => (
                <div key={item} className="flex justify-between gap-4 py-4">
                  <span className="text-sm text-neutral-700">{item}</span>
                  <span className="text-xs rounded-full bg-neutral-100 text-neutral-700 px-3 py-1">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8"
            >
              <h2 className="text-2xl font-medium tracking-tight text-black">
                {feature.title}
              </h2>

              <p className="mt-4 text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 border-t border-neutral-200 text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] max-w-4xl mx-auto leading-tight text-black">
          Reduce delivery risk before your clients find it.
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-neutral-600 leading-relaxed">
          ProofStack helps teams ship client-ready documents with stronger evidence, cleaner claims, and fewer last-mile review gaps.
        </p>

        <Link
          to="/contact"
          className="inline-flex mt-10 rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition"
        >
          Request early access
        </Link>
      </section>
    </main>
  )
}

const FEATURES = [
  {
    title: 'Claim verification',
    description:
      'Checks important claims against uploaded source documents, research notes, data extracts, and references.',
  },
  {
    title: 'Citation validation',
    description:
      'Confirms whether cited sources support the exact sentence, number, or conclusion being presented.',
  },
  {
    title: 'Metric consistency',
    description:
      'Flags conflicting numbers, mismatched assumptions, stale data points, and unsupported calculations.',
  },
]