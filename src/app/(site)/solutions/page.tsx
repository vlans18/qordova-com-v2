import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import { SectionHeader, ListSection, StatementBlock, PostureGrid, FinalCTA } from '@/components/sections'

export const metadata: Metadata = PAGE_META.solutions

export default function SolutionsPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.solutions} />
      <Hero
        eyebrow="Qordova Labs Inc — Solutions"
        headline={<>Applied governance for<br /><em className="font-serif italic text-[#C9A84C]">enterprise</em> AI workflows.</>}
        subhead="Qordova Labs Inc supports organizations that need AI execution to remain bounded, reviewable, and operationally usable across real enterprise workflows."
        primaryCta={{ label: 'Discuss Your Environment', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        signals={['Execution control','Policy enforcement','Traceable output','Audit visibility']}
        minHeight="76svh"
      />
      <section className="section bg-[#111113]">
        <div className="container">
          <SectionHeader label="Where governance applies" heading="Five areas where execution control matters most." />
          <ListSection items={[
            { num: '01', title: 'Enterprise internal AI',                body: 'Control internal AI use across teams, tools, and providers with explicit policy boundaries and traceable output.' },
            { num: '02', title: 'Financial and regulated workflows',      body: 'Support AI-assisted work where reviewability, reason codes, and bounded execution are non-negotiable.' },
            { num: '03', title: 'Healthcare and high consequence operations', body: 'Use AI within controlled operating conditions where human accountability remains explicit throughout.' },
            { num: '04', title: 'Research and analysis workflows',        body: 'Improve structured research while preserving evidence discipline and reconstructible execution paths.' },
            { num: '05', title: 'Multi-provider AI governance',          body: 'Coordinate execution across providers without losing policy control, audit visibility, or operational discipline.' },
          ]} />
        </div>
      </section>
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-start">
            <SectionHeader label="Why governance at the point of execution" heading="Documentation is not enforcement." />
            <StatementBlock
              quote="Governance at the point of execution is not the same as governance documentation after the fact."
              points={[
                'Qordova Labs Inc defines the authority, conditions, and review boundaries around execution before it proceeds.',
                'KAIS enforces these conditions at the control plane — not as policy aspirations, but as operating gates.',
                'ORION is the sole permit issuer. No permit means no execution.',
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section bg-[#111113]">
        <div className="container">
          <SectionHeader label="What governance delivers" heading="Operational outcomes, not just compliance posture." />
          <PostureGrid items={[
            { title: 'Execution boundaries', desc: 'Clear technical limits on what AI agents are permitted to invoke and when.' },
            { title: 'Policy enforcement',   desc: 'Runtime constraint — not documentation that agents are expected to follow.' },
            { title: 'Traceable output',     desc: 'Every execution decision evidenced, reconstructible, and available for review.' },
            { title: 'Provider neutrality',  desc: 'Governance that persists across providers without architectural preference.' },
            { title: 'Governance feedback',  desc: 'Structured review paths for outputs and decisions post-execution.' },
          ]} />
        </div>
      </section>
      <FinalCTA
        headline="Bring governance into the workflow, not after the incident."
        primaryCta={{ label: 'Discuss Your Environment', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        layout="split"
      />
    </>
  )
}
