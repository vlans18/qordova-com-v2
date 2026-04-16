import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import {
  SectionHeader, CardGrid, PostureGrid, StatementBlock,
  PlatformPair, FAQBlock, FinalCTA,
} from '@/components/sections'

export const metadata: Metadata = PAGE_META.kais

export default function KaisPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.kais} />
      <JsonLd schema={SCHEMA.softwareApp.kais} />
      <JsonLd schema={SCHEMA.faq.kais} />

      <Hero
        eyebrow="Qordova Labs Inc — Flagship Platform"
        headline={<>KAIS.<br /><em className="font-serif italic text-[#C9A84C]">Governed</em> AI execution<br />for enterprise operations.</>}
        subhead="The control surface for authorizing, constraining, auditing, and reviewing AI execution. Built around one principle — no ORION permit, no execution."
        primaryCta={{ label: 'Request KAIS Briefing', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
        signals={['Permit-bound execution','Fail-closed enforcement','Cryptographic audit chain','ORION as sole permit authority']}
        minHeight="76svh"
      />

      {/* Core architecture */}
      <section className="section bg-[#111113]">
        <div className="container">
          <SectionHeader label="Core architecture" heading="Two layers. One governed execution model." />
          <PlatformPair blocks={[
            {
              tag:  'Control plane authority',
              name: 'ORION',
              desc: 'ORION — Orchestrated Reasoning and Intelligence Over Networks — is the control plane authority inside KAIS. It evaluates every invocation request against active policy and issues or denies execution permits.',
              note: 'No ORION permit — no execution. This is the constitutional enforcement posture.',
            },
            {
              tag:  'Flagship execution platform',
              name: 'KAIS',
              desc: 'KAIS is the control surface through which AI execution is approved, bounded, audited, and reviewed. It operates across providers, teams, and workflows without architectural lock-in or preference.',
              note: 'Fail-closed. Provider neutral. Every execution evidenced.',
            },
          ]} />
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <SectionHeader label="Core capabilities" heading="What KAIS governs." />
          <CardGrid cols={3} items={[
            { num: '01', title: 'Request capture and normalization',    body: 'Every invocation is intercepted, normalized, and logged before any action proceeds downstream.' },
            { num: '02', title: 'Permit and policy-bound execution',   body: 'ORION evaluates and issues or denies permits under active policy — before execution begins.' },
            { num: '03', title: 'Gate-based authorization',            body: 'Execution is blocked at the enforcement boundary until a valid permit is confirmed present.' },
            { num: '04', title: 'Tool and budget control',             body: 'Tool access and execution budgets are governed within defined operating parameters per permit.' },
            { num: '05', title: 'Immutable audit artifacts',           body: 'Every execution emits a cryptographically chained, append-only artifact — reconstructible and tamper-evident.' },
            { num: '06', title: 'Operator review loops',               body: 'Outputs and decisions are available for structured review and governance reporting post-execution.' },
          ]} />
        </div>
      </section>

      {/* Why KAIS matters */}
      <section className="section bg-[#111113]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[clamp(40px,6vw,80px)] items-start">
            <div>
              <SectionHeader
                label="Why KAIS matters"
                heading="Capability without governance is operational risk."
              />
            </div>
            <StatementBlock
              quote="Many AI systems optimize for capability and speed. KAIS is designed for governed execution under real operational constraints."
              points={[
                'Most organizations can describe what agents should do. Fewer can technically constrain what agents are allowed to do. The gap is the risk.',
                'The boundary between authorization and execution is where governance actually holds — or fails under load.',
                'KAIS addresses this at the control plane. Before invocation proceeds. Not after the fact.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <SectionHeader label="Operating principles" heading="How KAIS is built to operate." />
          <PostureGrid items={[
            { title: 'Governance first',    desc: 'Policy is the primary constraint on execution — not applied after the fact.' },
            { title: 'Deterministic gates', desc: 'Authorization boundaries are enforced, not approximated under any condition.' },
            { title: 'Provider neutrality', desc: 'KAIS governs across providers. No architectural preference or lock-in.' },
            { title: 'Evidence by design',  desc: 'Every execution decision produces a replayable, immutable audit artifact.' },
            { title: 'Controlled execution',desc: 'Fail-closed posture across every critical enforcement and audit boundary.' },
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#111113]">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeader label="KAIS questions" heading="What enterprises ask about KAIS." />
          <FAQBlock blockId="kais" items={[
            { q: 'What does fail-closed execution mean in KAIS?',  a: 'Fail-closed means that if a valid ORION permit is not present, execution does not proceed. There is no soft fail, no default-allow, and no bypass path. This is the constitutional enforcement posture of KAIS.' },
            { q: 'What is an immutable audit artifact in KAIS?',   a: 'Every execution event in KAIS produces a cryptographically chained, append-only artifact. These artifacts are reconstructible, replayable, and cannot be altered after creation.' },
            { q: 'Is KAIS provider-neutral?',                      a: 'Yes. KAIS governs AI execution across providers without architectural preference or lock-in. ORION enforces policy regardless of which model or execution target is involved.' },
            { q: 'How does KAIS differ from an AI gateway?',       a: 'AI gateways intercept requests and apply routing rules. KAIS centers permit-bound execution governance as its constitutional core. ORION-issued authority with fail-closed enforcement and immutable audit obligations is not equivalent to gateway-level interception.' },
          ]} />
        </div>
      </section>

      <FinalCTA
        headline="Bring governed AI execution into enterprise operations."
        primaryCta={{ label: 'Request KAIS Briefing', href: '/contact' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        layout="split"
      />
    </>
  )
}
