import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqazeyy'

function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      event.currentTarget.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="bg-white text-black pt-16">
      <section className="min-h-screen flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-5">
              Contact
            </p>

            <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.05em] leading-[0.95]">
              Let’s modernize your data platform.
            </h1>

            <p className="mt-6 text-neutral-600 leading-relaxed max-w-xl">
              Tell us about your SQL estate, data products, reporting needs, or AI readiness goals.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-neutral-200 bg-white p-8 space-y-5"
          >
            <div>
              <label className="block text-sm text-neutral-600 mb-2">Name</label>
              <input name="name" required className="w-full" placeholder="Your name" />
            </div>

            <div>
              <label className="block text-sm text-neutral-600 mb-2">Email</label>
              <input
                name="email"
                required
                type="email"
                className="w-full"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-600 mb-2">Company</label>
              <input name="company" className="w-full" placeholder="Company name" />
            </div>

            <div>
              <label className="block text-sm text-neutral-600 mb-2">Message</label>
              <textarea
                name="message"
                required
                className="w-full min-h-36"
                placeholder="What are you trying to modernize?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-neutral-700">
                Thank you. Your message has been sent.
              </p>
            )}

            {status === 'error' && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}
