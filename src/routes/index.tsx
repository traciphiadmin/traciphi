import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div style={{ background: '#080e1a' }}>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
        }}
        className="grid-bg"
      >
        {/* Background radial glows */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(8, 145, 178, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '80px 24px',
            width: '100%',
            position: 'relative',
          }}
        >
          <div style={{ maxWidth: '760px' }}>
            <div
              className="animate-fade-in-up delay-100"
              style={{ marginBottom: '24px' }}
            >
              <span className="tag">Data Infrastructure</span>
            </div>

            <h1
              className="animate-fade-in-up delay-200"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                marginBottom: '24px',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Legacy SQL to{' '}
              <span className="gradient-text">Cloud Data Lakes</span>
              {' '}— at enterprise scale.
            </h1>

            <p
              className="animate-fade-in-up delay-300"
              style={{
                fontSize: '1.125rem',
                color: '#94a3b8',
                maxWidth: '580px',
                marginBottom: '40px',
                lineHeight: 1.7,
              }}
            >
              Traciphi migrates your fragmented SQL servers to unified cloud data
              lakes on AWS, Google Cloud, or Azure — architected as a Domain-based
              Data Mesh that unlocks AI, BI, and ML pipelines downstream.
            </p>

            <div
              className="animate-fade-in-up delay-400"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
            >
              <Link to="/services" className="btn-primary">
                <span>Explore Services</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-secondary">
                Book a Discovery Call
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="animate-fade-in-up delay-500"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px',
                marginTop: '64px',
                paddingTop: '40px',
                borderTop: '1px solid rgba(59, 130, 246, 0.1)',
              }}
            >
              {[
                { n: '3', unit: 'clouds', label: 'AWS · Google · Azure' },
                { n: '∞', unit: 'scale', label: 'Petabyte-ready architecture' },
                { n: '0', unit: 'downtime', label: 'Zero-disruption migrations' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#f8fafc',
                        lineHeight: 1,
                      }}
                    >
                      {stat.n}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.75rem',
                        color: '#22d3ee',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {stat.unit}
                    </span>
                  </div>
                  <p
                    style={{
                      marginTop: '4px',
                      fontSize: '0.8125rem',
                      color: '#64748b',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture diagram — right side */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: 0.35,
            }}
            className="arch-diagram"
          >
            <ArchDiagram />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .arch-diagram { display: none !important; }
          }
        `}</style>
      </section>

      {/* Services Overview */}
      <section
        style={{
          padding: '100px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ marginBottom: '60px' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>
            What We Do
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              maxWidth: '540px',
              marginBottom: '16px',
            }}
          >
            Full-stack data modernization
          </h2>
          <p style={{ color: '#64748b', maxWidth: '480px' }}>
            From legacy infrastructure audit to production data mesh — we handle
            the full migration lifecycle.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1px',
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.08)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {SERVICES.map((svc, i) => (
            <ServiceTile key={i} {...svc} />
          ))}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link to="/services" className="btn-secondary">
            View All Services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section
        style={{
          padding: '80px 24px',
          background: 'rgba(13, 22, 40, 0.5)',
          borderTop: '1px solid rgba(59, 130, 246, 0.06)',
          borderBottom: '1px solid rgba(59, 130, 246, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '16px', textAlign: 'center' }}>
            Migration Path
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            Four phases. Zero disruption.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '32px',
            }}
          >
            {PHASES.map((phase, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: 'rgba(59, 130, 246, 0.12)',
                    lineHeight: 1,
                    marginBottom: '16px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                    color: '#e2e8f0',
                  }}
                >
                  {phase.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ProofStack Teaser */}
      <section
        style={{
          padding: '100px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="proofstack-grid"
        >
          <div>
            <span
              className="tag"
              style={{ marginBottom: '24px', display: 'inline-block' }}
            >
              Coming Soon
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                marginBottom: '20px',
                letterSpacing: '-0.03em',
              }}
            >
              <span className="gradient-text">ProofStack</span>
              {' '}— AI verification for consulting firms
            </h2>
            <p
              style={{
                color: '#94a3b8',
                marginBottom: '16px',
                lineHeight: 1.75,
              }}
            >
              Before your firm shares deliverables with clients, ProofStack
              cross-checks every data point, citation, and claim against your
              source repositories — catching errors before they reach the boardroom.
            </p>
            <p style={{ color: '#64748b', marginBottom: '32px', lineHeight: 1.75, fontSize: '0.9375rem' }}>
              Built for management consultancies, financial advisors, and data
              engineering teams who need document-level confidence in every
              artifact they produce.
            </p>
            <Link to="/contact" className="btn-secondary">
              Join the Waitlist
            </Link>
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg, rgba(13,22,40,0.9), rgba(8,14,26,0.9))',
              border: '1px solid rgba(59, 130, 246, 0.15)',
              borderRadius: '12px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <ProofStackPreview />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .proofstack-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
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
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Ready to modernize your data stack?
          </h2>
          <p
            style={{
              color: '#64748b',
              marginBottom: '32px',
              fontSize: '1.0625rem',
            }}
          >
            Talk to our architects. We'll assess your current infrastructure and
            map a migration path that fits your timeline.
          </p>
          <Link to="/contact" className="btn-primary">
            <span>Start the Conversation</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(59, 130, 246, 0.08)',
          padding: '40px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            color: '#334155',
            letterSpacing: '0.04em',
          }}
        >
          &copy; 2026 Traciphi, Inc. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Terms', 'Security'].map((l) => (
            <span
              key={l}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6875rem',
                color: '#334155',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              {l}
            </span>
          ))}
        </div>
      </footer>
    </div>
  )
}

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" stroke="#22d3ee" strokeWidth="1.5" />
        <path d="M4 15a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="1" fill="#22d3ee" />
        <circle cx="8" cy="16" r="1" fill="#3b82f6" />
      </svg>
    ),
    title: 'Legacy SQL Migration',
    desc: 'Full lifecycle migration from MSSQL, Oracle, and PostgreSQL to scalable cloud data lakes.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#22d3ee" strokeWidth="1.5" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: 'Data Mesh Architecture',
    desc: 'Domain-driven ownership with federated governance — your data products, your rules.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H5a2 2 0 00-2 2v4M9 3h6M9 3v18m6-18h4a2 2 0 012 2v4M15 3v18M9 21h6M3 9v6m18-6v6M3 15h18" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'AI/BI/ML Enablement',
    desc: 'Architect clean data layers that feed downstream analytics, ML models, and BI dashboards.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Data Governance',
    desc: 'Compliance-ready cataloging, lineage tracking, and access control across your cloud estate.',
  },
]

function ServiceTile({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div
      style={{
        background: '#080e1a',
        padding: '32px',
        transition: 'background 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background =
          'rgba(13, 22, 40, 0.95)')
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = '#080e1a')
      }
    >
      <div style={{ marginBottom: '16px' }}>{icon}</div>
      <h3
        style={{
          fontSize: '1rem',
          fontWeight: 700,
          color: '#e2e8f0',
          marginBottom: '8px',
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>
        {desc}
      </p>
    </div>
  )
}

const PHASES = [
  {
    title: 'Infrastructure Audit',
    desc: 'We map every table, stored procedure, and dependency in your existing SQL environment.',
  },
  {
    title: 'Cloud Architecture Design',
    desc: 'Domain-based data mesh blueprinted for AWS, GCP, or Azure — or multi-cloud hybrid.',
  },
  {
    title: 'Parallel Migration',
    desc: 'Data migrates in parallel with live systems. Your operations never stop during cutover.',
  },
  {
    title: 'AI/BI Handoff',
    desc: 'Pipelines validated, documentation complete, and downstream ML/BI tools connected.',
  },
]

function ArchDiagram() {
  return (
    <svg width="340" height="320" viewBox="0 0 340 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* SQL Servers - left */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(10, ${60 + i * 80})`}>
          <rect width="80" height="44" rx="4" fill="rgba(37,99,235,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
          <text x="8" y="17" fill="#60a5fa" fontFamily="'Space Mono'" fontSize="8">SQL Server</text>
          <text x="8" y="32" fill="#334155" fontFamily="'Space Mono'" fontSize="7">{['Finance', 'CRM', 'Ops'][i]}</text>
        </g>
      ))}

      {/* Arrow paths */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M 90 ${82 + i * 80} L 155 160`}
          stroke="rgba(34,211,238,0.3)"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
      ))}

      {/* Central mesh node */}
      <circle cx="180" cy="160" r="36" fill="rgba(8,145,178,0.12)" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" />
      <text x="167" y="157" fill="#22d3ee" fontFamily="'Space Mono'" fontSize="7">DATA</text>
      <text x="167" y="168" fill="#22d3ee" fontFamily="'Space Mono'" fontSize="7">MESH</text>

      {/* Output arrows */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M 216 160 L 255 ${82 + i * 80}`}
          stroke="rgba(59,130,246,0.3)"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
      ))}

      {/* Cloud outputs */}
      {['AWS Lake', 'GCP BQ', 'Azure DL'].map((label, i) => (
        <g key={label} transform={`translate(252, ${60 + i * 80})`}>
          <rect width="78" height="44" rx="4" fill="rgba(8,145,178,0.12)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
          <text x="8" y="17" fill="#22d3ee" fontFamily="'Space Mono'" fontSize="8">Cloud Lake</text>
          <text x="8" y="32" fill="#334155" fontFamily="'Space Mono'" fontSize="7">{label}</text>
        </g>
      ))}
    </svg>
  )
}

function ProofStackPreview() {
  const items = [
    { status: 'verified', text: 'Q3 revenue figure matches source ledger', confidence: '99.2%' },
    { status: 'warning', text: 'Footnote 14: citation link may be outdated', confidence: '71.4%' },
    { status: 'verified', text: 'Market share data aligns with primary source', confidence: '97.8%' },
    { status: 'error', text: 'Slide 7 projection: model input mismatch detected', confidence: '31.6%' },
    { status: 'verified', text: 'Executive summary statistics confirmed', confidence: '98.1%' },
  ]

  const colors: Record<string, string> = {
    verified: '#22d3ee',
    warning: '#f59e0b',
    error: '#f87171',
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.625rem',
            color: '#334155',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          ProofStack — Document Verification
        </p>
        <p
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: '0.875rem',
            color: '#e2e8f0',
          }}
        >
          Q3_Board_Deck_v4_FINAL.pptx
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 14px',
              background: 'rgba(8, 14, 26, 0.6)',
              borderRadius: '4px',
              border: `1px solid ${colors[item.status]}22`,
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: colors[item.status],
                flexShrink: 0,
                boxShadow: `0 0 6px ${colors[item.status]}88`,
              }}
            />
            <span
              style={{
                flex: 1,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.75rem',
                color: '#94a3b8',
                lineHeight: 1.4,
              }}
            >
              {item.text}
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.625rem',
                color: colors[item.status],
                flexShrink: 0,
              }}
            >
              {item.confidence}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '16px',
          padding: '10px 14px',
          background: 'rgba(37, 99, 235, 0.08)',
          borderRadius: '4px',
          border: '1px solid rgba(59, 130, 246, 0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.625rem', color: '#64748b' }}>
          DOCUMENT TRUST SCORE
        </span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.875rem', color: '#22d3ee', fontWeight: 700 }}>
          83.4 / 100
        </span>
      </div>
    </div>
  )
}
