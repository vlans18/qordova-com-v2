import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import { SectionHeader, CardGrid, StatementBlock, FinalCTA } from '@/components/sections'

export const metadata: Metadata = PAGE_META.industries

export default function IndustriesPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.industries} />
      <Hero
        eyebrow="Qordova Labs Inc — Industries"
        headline={<>Governed AI execution for serious<br />operating <em className="font-serif italic text-[#C9A84C]">environments</em>.</>}
        subhead="Qordova Labs Inc supports organizations where accountability, reviewability, execution boundaries, and audit evidence are not optional."
        primaryCta={{ label: 'Discuss Your Environment', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        signals={['Financial services','Healthcare','Enterprise operations','Public sector']}
        minHeight="88svh"
      />
      <section className="section bg-[#111113]">
        <div className="container">
          <SectionHeader label="Operating environments" heading="Where Qordova Labs Inc is relevant." />
          <CardGrid cols={3} items={[
            { num: '01', title: 'Financial services',                  body: 'AI-assisted workflows in regulated environments require bounded execution, traceable output, and explicit review conditions.' },
            { num: '02', title: 'Healthcare and clinical operations',  body: 'AI use in high consequence environments requires human accountability, controlled invocation paths, and reviewable outputs.' },
            { num: '03', title: 'Enterprise operations',              body: 'Internal enterprise AI requires policy enforcement across teams, tools, providers, and changing workflow conditions.' },
            { num: '04', title: 'Research and knowledge environments',body: 'Research support benefits from governed execution where evidence discipline and reconstructible output matter.' },
            { num: '05', title: 'Public sector and regulated institutions', body: 'Sensitive operating environments require execution controls that are explicit, reviewable, and operationally defensible.' },
            { num: '06', title: 'Multi-entity enterprises',           body: 'Large organizations require governance that persists across execution boundaries, departments, vendors, and systems.' },
          ]} />
        </div>
      </section>
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[clamp(40px,6vw,80px)] items-start">
            <SectionHeader label="Why industry context matters" heading="Same capability, different operational risk." />
            <StatementBlock
              quote="Qordova Labs Inc focuses on the operating conditions around AI execution — not capability in isolation."
              points={[
                'Regulated industries carry accountability requirements that general AI tooling was not designed to meet.',
                'KAIS — the flagship platform of Qordova Labs Inc — provides the control surface that makes AI work defensible inside those accountability structures.',
                'One governance model across every provider and workflow.',
              ]}
            />
          </div>
        </div>
      </section>
      <FinalCTA
        headline="Start with the operating environment, not the demo."
        primaryCta={{ label: 'Discuss Your Environment', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        layout="split"
      />
    </>
  )
}
