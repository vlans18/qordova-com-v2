import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import { SectionHeader, CardGrid, StatementBlock, FinalCTA } from '@/components/sections'

export const metadata: Metadata = PAGE_META.security

export default function SecurityPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.security} />
      <Hero
        eyebrow="Qordova Labs Inc — Security"
        headline={<>Security posture for<br /><em className="font-serif italic text-[#C9A84C]">governed</em> AI execution.</>}
        subhead="Qordova Labs Inc approaches security as an operating condition. Execution control, reviewability, audit evidence, and operational discipline are built in — not applied as a layer on top."
        primaryCta={{ label: 'Discuss Your Security Context', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        signals={['Access control','Execution boundaries','Audit artifacts','Operational reliability']}
        minHeight="76svh"
      />
      <section className="section bg-[#111113]">
        <div className="container">
          <SectionHeader label="Security areas" heading="Where the operating boundary holds." />
          <CardGrid cols={3} items={[
            { num: '01', title: 'Access control',              body: 'Role-aware access and explicit boundaries around who can invoke, review, or manage governed execution flows.' },
            { num: '02', title: 'Execution boundaries',        body: 'AI work is constrained within defined operating conditions. No execution without a valid ORION permit.' },
            { num: '03', title: 'Audit artifacts',             body: 'Every execution produces a cryptographically chained, append-only artifact. Reconstructible. Tamper-evident.' },
            { num: '04', title: 'Data handling discipline',    body: 'Sensitive workflow context requires explicit handling boundaries and careful control over what is processed and returned.' },
            { num: '05', title: 'Provider neutral enforcement',body: 'Governance and execution controls persist regardless of which model or execution target is involved.' },
            { num: '06', title: 'Operational reliability',     body: 'Security depends on consistent operating behavior. Fail-closed posture means the boundary holds under every condition.' },
          ]} />
        </div>
      </section>
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[clamp(40px,6vw,80px)] items-start">
            <SectionHeader label="Security as an operating condition" heading="The boundary holds or it does not." />
            <StatementBlock
              quote="The operating boundary either holds at the enforcement layer or it does not hold at all."
              points={[
                'ORION permit validation is the security gate. No permit — no execution. No exceptions.',
                'Immutable audit artifacts mean every execution decision is available for post-incident review.',
                'Fail-closed posture ensures that enforcement failures stop execution, not degrade it.',
              ]}
            />
          </div>
        </div>
      </section>
      <FinalCTA
        headline="Start with the security boundary, not the feature list."
        primaryCta={{ label: 'Discuss Your Security Context', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        layout="split"
      />
    </>
  )
}
