import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Traciphi — Data Infrastructure Modernization',
      },
      {
        name: 'description',
        content:
          'Traciphi modernizes legacy data infrastructure to cloud-based data lakes. Domain-based Data Mesh architecture enabling AI, BI, and ML tools downstream.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body
        style={{
          background: '#080e1a',
          minHeight: '100vh',
          margin: 0,
        }}
      >
        <Header />
        <main>{children}</main>
        <Scripts />
      </body>
    </html>
  )
}
