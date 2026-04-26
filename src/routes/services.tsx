import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: Services,
})

function Services() {
  return (
    <div style={{ background: '#080e1a', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 24px 60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
        className="grid-bg"
      >
        <p className="section-label" style={{ marginBottom: '16px' }}>
          Our Services
        </p>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            maxWidth: '680px',
            marginBottom: '20px',
            letterSpacing: '-0.03em',
          }}
        >
          Enterprise data infrastructure,{' '}
          <span className="gradient-text">rebuilt for the cloud era</span>
        </h1>
        <p
          style={{
            color: '#64748b',
            maxWidth: '520px',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
          }}
        >
          We specialize in the full migration stack — from legacy system audit
          through cloud deployment and AI enablement.
        </p>
      </section>

      <div className="divider" style={{ maxWidth: '1200px', margin: '0 auto' }} />

      {/* Service 1 */}
      <ServiceSection
        id="migration"
        tag="Core Service"
        title="Legacy SQL to Cloud Migration"
        body="Your SQL Server, Oracle, or PostgreSQL estate holds years of business logic. We migrate it without losing a single stored procedure — or stopping your operations."
        bullets={[
          'Full schema and data audit before migration begins',
          'Parallel-run migration with zero production downtime',
          'AWS S3 / Glue, Google Cloud Storage / BigQuery, Azure Data Lake Gen2',
          'Automated validation: every row, every table, checksummed',
          'Post-migration rollback window and hypercare support',
        ]}
        badge="AWS · GCP · Azure"
        reverse={false}
        icon={<MigrationIcon />}
      />

      <div className="divider" style={{ maxWidth: '1200px', margin: '0 auto' }} />

      {/* Service 2 */}
      <ServiceSection
        id="mesh"
        tag="Architecture"
        title="Domain-based Data Mesh Design"
        body="Monolithic data lakes collapse under organizational complexity. We architect your data as a mesh — distributed ownership, federated governance, and self-serve analytics at every domain."
        bullets={[
          'Domain discovery workshops with your business units',
          'Data product ownership model and interface contracts',
          'Federated computational governance layer',
          'Self-serve data infrastructure platform design',
          'Interoperability standards across all domains',
        ]}
        badge="Data Mesh v2"
        reverse={true}
        icon={<MeshIcon />}
      />

      <div className="divider" style={{ maxWidth: '1200px', margin: '0 auto' }} />

      {/* Service 3 */}
      <ServiceSection
        id="ai-enablement"
        tag="Downstream Value"
        title="AI / BI / ML Enablement"
        body="A clean data lake is a launchpad. We connect your cloud data estate to the analytics, ML, and AI tools your teams actually use — with clean lineage from source to insight."
        bullets={[
          'Feature store design for ML training pipelines',
          'BI semantic layer (dbt, LookML, Cube) over your lake',
          'LLM-ready data preparation and chunking pipelines',
          'Real-time streaming with Kafka / Kinesis / Pub/Sub',
          'Observability: data quality SLAs and drift monitoring',
        ]}
        badge="AI-Ready"
        reverse={false}
        icon={<AiIcon />}
      />

      <div className="divider" style={{ maxWidth: '1200px', margin: '0 auto' }} />

      {/* Service 4 */}
      <ServiceSection
        id="governance"
        tag="Compliance"
        title="Data Governance & Compliance"
        body="Cloud scale without governance is technical debt waiting to happen. We build cataloging, lineage, and access control into your architecture from day one."
        bullets={[
          'Data catalog design (Apache Atlas, Collibra, DataHub)',
          'Column-level lineage across your full pipeline',
          'Role-based access control aligned to your org structure',
          'GDPR, HIPAA, and SOC 2 readiness assessments',
          'Automated data classification and tagging',
        ]}
        badge="Governance"
        reverse={true}
        icon={<GovernanceIcon />}
      />

      {/* CTA */}
      <section
        style={{
          padding: '80px 24px',
          textAlign: 'center',
          background: 'rgba(13, 22, 40, 0.5)',
          borderTop: '1px solid rgba(59, 130, 246, 0.06)',
          marginTop: '40px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          Not sure where to start?
        </h2>
        <p
          style={{
            color: '#64748b',
            marginBottom: '32px',
            maxWidth: '440px',
            margin: '0 auto 32px',
          }}
        >
          We offer a free 90-minute infrastructure assessment to any organization
          running legacy SQL at scale.
        </p>
        <Link to="/contact" className="btn-primary">
          <span>Book a Free Assessment</span>
        </Link>
      </section>

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

function ServiceSection({
  tag,
  title,
  body,
  bullets,
  badge,
  reverse,
  icon,
}: {
  id: string
  tag: string
  title: string
  body: string
  bullets: string[]
  badge: string
  reverse: boolean
  icon: React.ReactNode
}) {
  return (
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
          direction: reverse ? 'rtl' : 'ltr',
        }}
        className="service-grid"
      >
        <div style={{ direction: 'ltr' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>
            {tag}
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '16px',
              letterSpacing: '-0.025em',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: '#94a3b8',
              marginBottom: '28px',
              lineHeight: 1.75,
            }}
          >
            {body}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
            {bullets.map((b) => (
              <li
                key={b}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid rgba(59, 130, 246, 0.06)',
                  marginBottom: '12px',
                  fontSize: '0.9375rem',
                  color: '#94a3b8',
                }}
              >
                <span style={{ color: '#22d3ee', marginTop: '2px', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
          <span className="tag">{badge}</span>
        </div>

        <div
          style={{
            direction: 'ltr',
            background: 'rgba(13, 22, 40, 0.8)',
            border: '1px solid rgba(59, 130, 246, 0.12)',
            borderRadius: '12px',
            padding: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '280px',
          }}
        >
          {icon}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr !important; direction: ltr !important; }
        }
      `}</style>
    </section>
  )
}

function MigrationIcon() {
  return (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      {/* SQL boxes */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="8" y={20 + i * 44} width="56" height="30" rx="3" fill="rgba(37,99,235,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
          <text x="16" y={40 + i * 44} fill="#60a5fa" fontFamily="'Space Mono'" fontSize="9">SQL</text>
        </g>
      ))}
      {/* Arrows */}
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M 65 ${35 + i * 44} L 95 80`} stroke="rgba(34,211,238,0.4)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr)" />
      ))}
      {/* Cloud */}
      <ellipse cx="140" cy="60" rx="40" ry="25" fill="rgba(8,145,178,0.12)" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" />
      <text x="118" y="65" fill="#22d3ee" fontFamily="'Space Mono'" fontSize="9">CLOUD</text>
      <path d="M 140 85 L 140 105" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="110" y="105" width="60" height="30" rx="3" fill="rgba(8,145,178,0.1)" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
      <text x="118" y="125" fill="#22d3ee" fontFamily="'Space Mono'" fontSize="8">Data Lake</text>
    </svg>
  )
}

function MeshIcon() {
  const nodes = [
    { x: 100, y: 40 },
    { x: 160, y: 80 },
    { x: 140, y: 150 },
    { x: 60, y: 150 },
    { x: 40, y: 80 },
  ]
  const labels = ['Finance', 'CRM', 'Logistics', 'HR', 'Product']
  return (
    <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
      {nodes.map((n, i) =>
        nodes.slice(i + 1).map((m, j) => (
          <line key={`${i}-${j}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
        ))
      )}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="22" fill="rgba(13,22,40,0.9)" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" />
          <text x={n.x - 18} y={n.y + 4} fill="#94a3b8" fontFamily="'Space Mono'" fontSize="7">{labels[i]}</text>
        </g>
      ))}
      <circle cx="100" cy="95" r="10" fill="rgba(34,211,238,0.2)" stroke="#22d3ee" strokeWidth="1" />
    </svg>
  )
}

function AiIcon() {
  return (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      {/* Data lake */}
      <rect x="10" y="60" width="50" height="40" rx="4" fill="rgba(8,145,178,0.1)" stroke="rgba(34,211,238,0.4)" strokeWidth="1" />
      <text x="18" y="84" fill="#22d3ee" fontFamily="'Space Mono'" fontSize="7">Data Lake</text>
      {/* Pipelines */}
      <path d="M 60 80 L 90 80" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Feature store */}
      <rect x="90" y="65" width="44" height="30" rx="4" fill="rgba(37,99,235,0.12)" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
      <text x="96" y="84" fill="#60a5fa" fontFamily="'Space Mono'" fontSize="7">Features</text>
      {/* Output nodes */}
      {[
        { label: 'ML Model', y: 20, color: '#22d3ee' },
        { label: 'BI Layer', y: 70, color: '#3b82f6' },
        { label: 'LLM/AI', y: 120, color: '#34d399' },
      ].map((o) => (
        <g key={o.label}>
          <path d={`M 134 80 L 148 ${o.y + 15}`} stroke={`${o.color}44`} strokeWidth="1" strokeDasharray="4 3" />
          <rect x="148" y={o.y} width="44" height="30" rx="3" fill={`${o.color}12`} stroke={`${o.color}44`} strokeWidth="1" />
          <text x="153" y={o.y + 19} fill={o.color} fontFamily="'Space Mono'" fontSize="7">{o.label}</text>
        </g>
      ))}
    </svg>
  )
}

function GovernanceIcon() {
  return (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      <circle cx="100" cy="80" r="50" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />
      <circle cx="100" cy="80" r="35" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
      <circle cx="100" cy="80" r="20" fill="rgba(37,99,235,0.12)" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
      <path d="M 100 60 L 100 68M 100 92 L 100 100M 80 80 L 88 80M 112 80 L 120 80" stroke="rgba(34,211,238,0.6)" strokeWidth="1.5" strokeLinecap="round" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x = 100 + 50 * Math.cos(rad)
        const y = 80 + 50 * Math.sin(rad)
        return <circle key={deg} cx={x} cy={y} r="5" fill="rgba(34,211,238,0.3)" stroke="#22d3ee" strokeWidth="1" />
      })}
      <text x="88" y="84" fill="#22d3ee" fontFamily="'Space Mono'" fontSize="8">Govern</text>
    </svg>
  )
}
