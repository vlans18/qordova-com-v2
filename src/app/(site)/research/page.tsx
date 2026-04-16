import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import { SectionHeader, CardGrid, StatementBlock, FinalCTA } from '@/components/sections'

export const metadata: Metadata = PAGE_META.research

export default function ResearchPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.research} />
      <Hero
        eyebrow="Qordova Labs Inc — Research"
        headline={<>Research discipline for<br /><em className="font-serif italic text-[#C9A84C]">governed</em> AI infrastructure.</>}
        subhead="Qordova Labs Inc approaches research as a practical engineering discipline — focused on execution control, reviewability, authority boundaries, auditability, and long-horizon operating models."
        primaryCta={{ label: 'Discuss Research and Architecture', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        signals={['Execution design','Control plane architecture','Auditability','Long-horizon methods']}
        minHeight="76svh"
      />
      <section className="section bg-[#111113]">
        <div className="container">
          <SectionHeader label="Research themes" heading="Where inquiry and architecture meet." />
          <CardGrid cols={3} items={[
            { num: '01', title: 'Governed execution models',     body: 'How AI work can be authorized, constrained, reviewed, and evidenced under explicit operating conditions.' },
            { num: '02', title: 'Control plane architecture',    body: 'How authority, routing, boundary enforcement, and execution gating are structured in enterprise AI systems.' },
            { num: '03', title: 'Auditability and evidence',     body: 'Reconstructible output, reviewable decisions, and conditions required for reliable post-execution analysis.' },
            { num: '04', title: 'Multi-provider operating models', body: 'How policy continuity and execution discipline can persist across heterogeneous providers and targets.' },
            { num: '05', title: 'Workflow consequence analysis', body: 'How different operating environments change the meaning of review, accountability, and risk.' },
            { num: '06', title: 'Long-horizon infrastructure',   body: 'Durable methods for building enterprise AI systems that remain governable over time — not just performant in short demos.' },
          ]} />
        </div>
      </section>
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[clamp(40px,6vw,80px)] items-start">
            <SectionHeader label="Architecture first" heading="Method and structure, not trend repetition." />
            <StatementBlock
              quote="Method and structure — not trend repetition."
              points={[
                'Qordova Labs Inc research focuses on the structures required for controlled operation — not capability display alone.',
                'Architecture choices made early determine how governable a system remains over time.',
                'Research that ignores institutional context produces methods that fail under real operating conditions.',
              ]}
            />
          </div>
        </div>
      </section>
      <FinalCTA
        headline="Start with method and structure, not trend repetition."
        primaryCta={{ label: 'Discuss Research and Architecture', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        layout="split"
      />
    </>
  )
}
