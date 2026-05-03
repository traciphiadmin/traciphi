import { createFileRoute, Link, Outlet, useMatches } from '@tanstack/react-router'
import { products } from '@/data/products'

export const Route = createFileRoute('/products')({
  component: Products,
})

function Products() {
  const matches = useMatches()
  const isProductsChildRoute = matches.some(
    (match) => typeof match.routeId === 'string' && match.routeId.startsWith('/products/')
  )

  if (isProductsChildRoute) {
    return (
      <main className="bg-white text-black pt-16">
        <Outlet />
      </main>
    )
  }

  return (
    <main className="bg-white text-black pt-16">
      <section className="px-6 py-24 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-5">
            Products
          </p>

          <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.05em] leading-[0.95] max-w-4xl text-black">
            Purpose-built products for trusted AI and data work.
          </h1>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              to={product.href}
              className="rounded-3xl border border-neutral-200 bg-white p-8 hover:border-black transition"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-3xl font-medium tracking-tight text-black">
                  {product.name}
                </h2>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  {product.status}
                </span>
              </div>

              <p className="mt-5 text-lg text-neutral-700">
                {product.tagline}
              </p>

              <p className="mt-4 text-neutral-600 leading-relaxed">
                {product.description}
              </p>

              <span className="inline-flex mt-8 text-sm font-medium text-black">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Outlet />
    </main>
  )
}