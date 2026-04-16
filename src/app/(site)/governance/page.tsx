import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import { SectionHeader, ListSection, StatementBlock, PostureGrid, FinalCTA } from '@/components/sections'

export const metadata: Metadata = PAGE_META.governance

export default function GovernancePage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.governance} />
      <Hero
        eyebrow="Qordova Labs Inc — Governance"
        headline={<>Governance as an operating<br />condition for <em className="font-serif italic text-[#C9A84C]">AI execution</em>.</>}
        subhead="Qordova Labs Inc is built for environments where authority, review boundaries, execution conditions, and auditability must remain explicit throughout the operating model."
        primaryCta={{ label: 'Discuss Your Governance Model', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        signals={['Authority model','Review boundaries','Execution conditions','Auditability']}
        minHeight="76svh"
      />
      <section className="section bg-[#111113]">
        <div className="container">
          <SectionHeader label="Governance areas" heading="Where authority and boundary must hold." />
          <ListSection items={[
            { num: '01', title: 'Authority model',      body: 'AI execution should operate under explicit authority, not implied permission. ORION enforces this at the permit level.' },
            { num: '02', title: 'Review boundaries',    body: 'Outputs require clear review conditions and accountability paths. KAIS makes these boundaries operational, not aspirational.' },
            { num: '03', title: 'Execution conditions', body: 'Governance must define when execution is allowed, constrained, denied, or degraded. Ambiguity is not an operating condition.' },
            { num: '04', title: 'Auditability',         body: 'Decisions and outputs should remain reconstructible after execution. KAIS produces immutable, cryptographically chained artifacts.' },
            { num: '05', title: 'Policy continuity',    body: 'Governance should persist across workflows, teams, and providers. KAIS enforces policy regardless of execution target.' },
            { num: '06', title: 'Operating discipline', body: 'Real governance depends on consistent control surfaces. Fail-closed posture means no execution without a valid permit — ever.' },
          ]} />
        </div>
      </section>
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[clamp(40px,6vw,80px)] items-start">
            <SectionHeader label="How KAIS makes governance operational" heading="Enforcement, not documentation." />
            <StatementBlock
              quote="AI capability without governance creates ambiguity around authority, review, and responsibility."
              points={[
                'Qordova Labs Inc makes authority conditions explicit before execution proceeds.',
                'Review boundaries are defined at the point of execution, not applied retrospectively.',
                'ORION enforces these conditions as operating gates, not policy aspirations.',
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section bg-[#111113]">
        <div className="container">
          <SectionHeader label="Governance posture" heading="How KAIS holds the boundary." />
          <PostureGrid items={[
            { title: 'Explicit authority',        desc: 'No execution without an ORION-issued permit. Authority is declared, not assumed.' },
            { title: 'Structured review',         desc: 'Post-execution review paths are defined by design, not improvised after incidents.' },
            { title: 'Enforced boundaries',       desc: 'Governance boundaries are technical constraints, not guidelines subject to interpretation.' },
            { title: 'Reconstructible decisions', desc: 'Every decision produces a replayable artifact. The audit trail is always present.' },
            { title: 'Fail-closed discipline',    desc: 'If enforcement fails, execution stops. Not degrades — stops.' },
          ]} />
        </div>
      </section>
      <FinalCTA
        headline="Start with authority and boundary, not adoption theater."
        primaryCta={{ label: 'Discuss Your Governance Model', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        layout="split"
      />
    </>
  )
}
