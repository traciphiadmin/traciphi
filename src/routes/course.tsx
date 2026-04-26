import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/course')({
  component: Course,
})

const COURSES = [
  {
    id: 'dmf',
    level: 'Foundations',
    duration: '6 weeks',
    tag: 'Self-paced',
    title: 'Data Mesh Fundamentals',
    description:
      'Learn the four principles of Data Mesh: domain ownership, data as a product, self-serve infrastructure, and federated computational governance. Build a working domain model from scratch.',
    modules: [
      'Why data lakes fail at scale',
      'Domain decomposition for data',
      'Data product design patterns',
      'Ownership and interface contracts',
      'Governance without gatekeeping',
      'Case study: Fintech data mesh migration',
    ],
    audience: 'Data engineers, architects, and engineering managers',
    outcomes: [
      'Design a domain-driven data architecture',
      'Define data product SLAs and interfaces',
      'Evaluate governance models for your org',
    ],
    accent: '#22d3ee',
  },
  {
    id: 'cdli',
    level: 'Intermediate',
    duration: '8 weeks',
    tag: 'Cohort-based',
    title: 'Cloud Data Lake Implementation',
    description:
      'Hands-on implementation of cloud data lakes across AWS, Google Cloud, and Azure. From raw ingestion zones to governed consumption layers — with real migrations as lab exercises.',
    modules: [
      'Medallion architecture (Bronze/Silver/Gold)',
      'AWS: S3 + Glue + Athena + Lake Formation',
      'GCP: Cloud Storage + Dataflow + BigQuery',
      'Azure: ADLS Gen2 + Synapse Analytics',
      'Schema evolution and data versioning',
      'Cost optimization and lifecycle policies',
    ],
    audience: 'Cloud engineers and data platform teams',
    outcomes: [
      'Deploy a production-grade data lake on any cloud',
      'Implement automated ingestion pipelines',
      'Apply cost governance across cloud storage tiers',
    ],
    accent: '#3b82f6',
  },
  {
    id: 'aiml',
    level: 'Advanced',
    duration: '10 weeks',
    tag: 'Live sessions',
    title: 'AI/ML Integration for Data Engineers',
    description:
      'Bridge the gap between your data platform and AI/ML workloads. Design feature stores, ML pipelines, and LLM-ready data layers that actually serve production models.',
    modules: [
      'Feature engineering at scale',
      'Feature stores: Feast, Tecton, Vertex AI',
      'ML pipeline design with Airflow / Prefect',
      'LLM data preparation and RAG pipelines',
      'Model monitoring and data drift detection',
      'End-to-end: data lake to production model',
    ],
    audience: 'Senior data engineers and ML engineers',
    outcomes: [
      'Build production feature stores on cloud data lakes',
      'Design end-to-end ML training pipelines',
      'Implement retrieval-augmented generation pipelines',
    ],
    accent: '#a78bfa',
  },
]

function Course() {
  return (
    <div style={{ background: '#080e1a', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 24px 60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <p className="section-label" style={{ marginBottom: '16px' }}>
          Traciphi Education
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
          Learn to build{' '}
          <span className="gradient-text">modern data infrastructure</span>{' '}
          from practitioners
        </h1>
        <p
          style={{
            color: '#64748b',
            maxWidth: '560px',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          Courses designed by engineers who have run real cloud migrations —
          not theoretical curricula. Practical, current, and built around
          the tools your team uses today.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
          {[
            { n: '3', label: 'Courses available' },
            { n: '24+', label: 'Hours of content' },
            { n: '180+', label: 'Engineers enrolled' },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                  lineHeight: 1,
                }}
              >
                {s.n}
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '4px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" style={{ maxWidth: '1200px', margin: '0 auto' }} />

      {/* Course Cards */}
      <section
        style={{
          padding: '80px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {COURSES.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section
        style={{
          padding: '80px 24px',
          background: 'rgba(13, 22, 40, 0.5)',
          borderTop: '1px solid rgba(59, 130, 246, 0.06)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '40px',
            alignItems: 'center',
          }}
          className="enterprise-cta"
        >
          <div>
            <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>
              Enterprise
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 700,
                marginBottom: '12px',
              }}
            >
              Training for your entire engineering team
            </h2>
            <p style={{ color: '#64748b', maxWidth: '520px', lineHeight: 1.7 }}>
              We run private cohorts for engineering organizations — tailored curriculum,
              your cloud environment, and direct access to our architects throughout.
            </p>
          </div>
          <div>
            <Link to="/contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              <span>Talk to Us</span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .enterprise-cta { grid-template-columns: 1fr !important; }
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

function CourseCard({
  level,
  duration,
  tag,
  title,
  description,
  modules,
  audience,
  outcomes,
  accent,
}: (typeof COURSES)[number]) {
  return (
    <div
      style={{
        background: 'rgba(13, 22, 40, 0.7)',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        borderRadius: '12px',
        overflow: 'hidden',
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
      {/* Top accent bar */}
      <div style={{ height: '2px', background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      <div
        style={{
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '48px',
          alignItems: 'start',
        }}
        className="course-inner"
      >
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6875rem',
                color: accent,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {level}
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6875rem',
                color: '#334155',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {duration} · {tag}
            </span>
          </div>

          <h3
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              marginBottom: '16px',
              letterSpacing: '-0.025em',
            }}
          >
            {title}
          </h3>

          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '28px' }}>
            {description}
          </p>

          <div style={{ marginBottom: '24px' }}>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6875rem',
                color: '#475569',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              For
            </p>
            <p style={{ color: '#64748b', fontSize: '0.9375rem' }}>{audience}</p>
          </div>

          <Link to="/contact" className="btn-primary">
            <span>Enroll Now</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div>
          <div style={{ marginBottom: '28px' }}>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6875rem',
                color: '#475569',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              Curriculum
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {modules.map((m, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start',
                    paddingBottom: '10px',
                    marginBottom: '10px',
                    borderBottom: '1px solid rgba(59, 130, 246, 0.05)',
                    fontSize: '0.875rem',
                    color: '#64748b',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6875rem',
                      color: '#334155',
                      minWidth: '20px',
                      marginTop: '1px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6875rem',
                color: '#475569',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              You will be able to
            </p>
            {outcomes.map((o, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginBottom: '10px',
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                }}
              >
                <span style={{ color: accent, flexShrink: 0, marginTop: '2px' }}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {o}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .course-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
