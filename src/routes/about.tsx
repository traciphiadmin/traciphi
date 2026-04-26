import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

const TEAM = [
  {
    name: 'Kiran Mehta',
    role: 'Co-founder & CEO',
    bio: 'Former Principal Architect at a Fortune 100 financial services firm. Led the migration of a 200TB Oracle estate to AWS. 14 years in enterprise data.',
    initials: 'KM',
    accent: '#22d3ee',
  },
  {
    name: 'Dara Osei',
    role: 'Co-founder & CTO',
    bio: 'ex-Google Cloud, data infrastructure lead. Designed domain-driven data platforms for healthcare and logistics at scale. Contributor to Apache Iceberg.',
    initials: 'DO',
    accent: '#3b82f6',
  },
  {
    name: 'Soo-Jin Park',
    role: 'Head of Delivery',
    bio: 'Specialized in zero-downtime migrations. Has shipped 40+ cloud data lake projects across AWS, Azure, and GCP with enterprise clients in 12 countries.',
    initials: 'SP',
    accent: '#a78bfa',
  },
  {
    name: 'Marcus Vidal',
    role: 'Principal Data Architect',
    bio: 'Data Mesh co-implementor. Defined domain ownership models for a 3,000-person engineering organization. Speaks at DataEngConf and dbt Coalesce.',
    initials: 'MV',
    accent: '#34d399',
  },
]

const VALUES = [
  {
    title: 'Infrastructure is a product',
    body: 'We build data platforms that teams want to use — not ones they have to use. User experience in infrastructure means self-serve, clear contracts, and observable pipelines.',
  },
  {
    title: 'Zero disruption is non-negotiable',
    body: 'Your SQL servers power real operations. Every migration we plan runs in parallel with your existing systems until the day you flip the switch — and only when you\'re ready.',
  },
  {
    title: 'Cloud-agnostic by principle',
    body: 'We are not cloud partners. We have no preferred vendor. Our recommendations are based on your data patterns, your team\'s skills, and your total cost of ownership.',
  },
  {
    title: 'Teach, don\'t just deliver',
    body: 'We leave every engagement with your team knowing how to operate what we built. Documentation, runbooks, and education are deliverables — not afterthoughts.',
  },
]

function About() {
  return (
    <div style={{ background: '#080e1a', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 24px 60px',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="grid-bg"
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '40%',
            height: '100%',
            background:
              'radial-gradient(ellipse at right top, rgba(34,211,238,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <p className="section-label" style={{ marginBottom: '16px' }}>
          About Traciphi
        </p>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            maxWidth: '680px',
            marginBottom: '24px',
            letterSpacing: '-0.03em',
          }}
        >
          We fix the data infrastructure problem that{' '}
          <span className="gradient-text">slows every enterprise down</span>
        </h1>
        <p
          style={{
            color: '#94a3b8',
            maxWidth: '580px',
            fontSize: '1.125rem',
            lineHeight: 1.75,
            marginBottom: '16px',
          }}
        >
          Legacy SQL servers weren't designed for the scale of data that modern
          businesses generate, or the AI and BI tools that need to consume it.
          Traciphi exists to close that gap — systematically, safely, and at
          enterprise speed.
        </p>
        <p
          style={{
            color: '#64748b',
            maxWidth: '520px',
            lineHeight: 1.75,
          }}
        >
          Founded in 2023 by infrastructure veterans who were tired of seeing
          good organizations held back by aging data stacks, we've since
          migrated hundreds of terabytes of business-critical data to cloud
          data lakes across three major cloud providers.
        </p>
      </section>

      <div className="divider" style={{ maxWidth: '1200px', margin: '0 auto' }} />

      {/* Mission */}
      <section
        style={{
          padding: '80px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="mission-grid"
        >
          <div>
            <p className="section-label" style={{ marginBottom: '16px' }}>
              Our Mission
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 700,
                marginBottom: '20px',
                letterSpacing: '-0.025em',
              }}
            >
              Make every organization's data
              <span className="gradient-text"> cloud-native</span>
            </h2>
            <p
              style={{
                color: '#94a3b8',
                lineHeight: 1.75,
                marginBottom: '20px',
              }}
            >
              The gap between organizations with modern data infrastructure
              and those without is growing — and it's becoming a competitive
              disadvantage that compounds over time.
            </p>
            <p style={{ color: '#64748b', lineHeight: 1.75 }}>
              We believe every organization deserves access to the same data
              platform quality that born-in-the-cloud companies take for
              granted. Our mission is to close that gap for enterprises
              carrying decades of data history.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            {[
              { n: '2023', label: 'Founded' },
              { n: '40+', label: 'Migrations delivered' },
              { n: '3', label: 'Cloud providers' },
              { n: '100%', label: 'Zero-downtime record' },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  padding: '24px',
                  background: 'rgba(13, 22, 40, 0.8)',
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {s.n}
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#475569' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          padding: '80px 24px',
          background: 'rgba(13, 22, 40, 0.4)',
          borderTop: '1px solid rgba(59, 130, 246, 0.06)',
          borderBottom: '1px solid rgba(59, 130, 246, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>
            How We Work
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '48px',
              maxWidth: '440px',
              letterSpacing: '-0.025em',
            }}
          >
            Principles that guide every engagement
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {VALUES.map((v, i) => (
              <div
                key={i}
                style={{
                  padding: '28px',
                  background: 'rgba(8, 14, 26, 0.7)',
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  borderRadius: '8px',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    'rgba(59, 130, 246, 0.25)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    'rgba(59, 130, 246, 0.1)')
                }
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6875rem',
                    color: '#22d3ee',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '14px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#e2e8f0',
                    marginBottom: '10px',
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        style={{
          padding: '80px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <p className="section-label" style={{ marginBottom: '16px' }}>
          The Team
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 700,
            marginBottom: '48px',
            letterSpacing: '-0.025em',
          }}
        >
          Built by infrastructure practitioners
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {TEAM.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '80px 24px',
          textAlign: 'center',
          background: 'rgba(13, 22, 40, 0.4)',
          borderTop: '1px solid rgba(59, 130, 246, 0.06)',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          Work with our team
        </h2>
        <p style={{ color: '#64748b', marginBottom: '32px' }}>
          Every engagement starts with a direct conversation with our architects.
        </p>
        <Link to="/contact" className="btn-primary">
          <span>Get in Touch</span>
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .mission-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(59, 130, 246, 0.08)',
          padding: '40px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            color: '#334155',
          }}
        >
          &copy; 2026 Traciphi, Inc.
        </span>
      </footer>
    </div>
  )
}

function TeamCard({
  name,
  role,
  bio,
  initials,
  accent,
}: {
  name: string
  role: string
  bio: string
  initials: string
  accent: string
}) {
  return (
    <div
      style={{
        padding: '28px',
        background: 'rgba(13, 22, 40, 0.7)',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        borderRadius: '8px',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.borderColor = `${accent}33`)
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.borderColor =
          'rgba(59, 130, 246, 0.1)')
      }
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          background: `${accent}15`,
          border: `1px solid ${accent}33`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Space Mono', monospace",
          fontWeight: 700,
          fontSize: '0.875rem',
          color: accent,
          marginBottom: '16px',
          letterSpacing: '0.05em',
        }}
      >
        {initials}
      </div>
      <h3
        style={{
          fontSize: '1.0625rem',
          fontWeight: 700,
          color: '#e2e8f0',
          marginBottom: '4px',
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.6875rem',
          color: accent,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '14px',
        }}
      >
        {role}
      </p>
      <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>
        {bio}
      </p>
    </div>
  )
}
