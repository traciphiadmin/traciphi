import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

const faqs = [
  {
    question: 'What types of databases does Traciphi migrate?',
    answer:
      'We specialize in Microsoft SQL Server, Oracle Database, PostgreSQL, and MySQL migrations. Our tooling also supports DB2 and Sybase for legacy enterprise environments. Every migration starts with a full schema and dependency audit.',
  },
  {
    question: 'Which cloud providers do you support?',
    answer:
      'We are cloud-agnostic and work with AWS (S3, Glue, Athena, Lake Formation), Google Cloud (Cloud Storage, Dataflow, BigQuery), and Azure (ADLS Gen2, Azure Synapse Analytics, Azure Data Factory). We also support multi-cloud and hybrid architectures.',
  },
  {
    question: 'How do you ensure zero downtime during migration?',
    answer:
      'We run migrations in parallel with your existing systems. Your SQL servers remain fully operational while we copy, transform, and validate data in the cloud environment. Cutover happens only after a full verification pass and a rollback window has been confirmed.',
  },
  {
    question: 'What is Data Mesh and why does Traciphi recommend it?',
    answer:
      'Data Mesh is an architectural approach that treats data as a product owned by domain teams, rather than centralizing it in a monolithic data warehouse. It scales better with organizational complexity, avoids bottlenecks, and creates clearer accountability. We recommend it for enterprises with multiple business units generating data independently.',
  },
  {
    question: 'How long does a typical migration take?',
    answer:
      'Timeline depends on the size and complexity of your estate. A 10TB SQL Server migration with straightforward schema typically takes 6–10 weeks. Large, multi-database migrations with complex stored procedures and compliance requirements can run 4–6 months. We provide a detailed project plan after the initial assessment.',
  },
  {
    question: 'What is ProofStack?',
    answer:
      'ProofStack is our upcoming AI-based document verification platform for consulting firms. Before your firm shares deliverables with clients, ProofStack cross-checks every data point, citation, and claim against your source repositories — catching errors before they reach the boardroom. It is currently in private development with a waitlist open.',
  },
  {
    question: 'Do you offer training for our engineering team?',
    answer:
      'Yes. We offer three structured courses — Data Mesh Fundamentals, Cloud Data Lake Implementation, and AI/ML Integration for Data Engineers — as well as private cohorts for enterprise teams. All course content is written by practitioners who have run real migrations.',
  },
]

function FAQ() {
  return (
    <div
      style={{ minHeight: '100vh', padding: '80px 24px', background: '#080e1a' }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <p className="section-label" style={{ marginBottom: '16px' }}>
          FAQ
        </p>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            marginBottom: '16px',
            letterSpacing: '-0.03em',
          }}
        >
          Frequently asked questions
        </h1>
        <p style={{ color: '#64748b', marginBottom: '56px', fontSize: '1.0625rem' }}>
          Can't find your answer?{' '}
          <Link to="/contact" style={{ color: '#3b82f6', textDecoration: 'none' }}>
            Send us a message
          </Link>
          .
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {faqs.map((faq, i) => (
            <Accordion key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Accordion({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        border: '1px solid rgba(59, 130, 246, 0.12)',
        borderRadius: '6px',
        overflow: 'hidden',
        background: open ? 'rgba(13, 22, 40, 0.8)' : 'rgba(8, 14, 26, 0.5)',
        transition: 'background 0.2s ease',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#e2e8f0',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '1rem',
          fontWeight: 500,
          gap: '16px',
        }}
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          style={{
            color: '#475569',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            flexShrink: 0,
          }}
        />
      </button>
      {open && (
        <div
          style={{
            padding: '0 24px 20px',
            color: '#64748b',
            lineHeight: 1.75,
            fontSize: '0.9375rem',
          }}
        >
          {answer}
        </div>
      )}
    </div>
  )
}
