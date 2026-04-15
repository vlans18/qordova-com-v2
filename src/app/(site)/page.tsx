import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import {
  SectionHeader, CardGrid, PostureGrid, StatementBlock,
  DeliverList, SectionCallouts, FAQBlock, FinalCTA,
} from '@/components/sections'

export const metadata: Metadata = PAGE_META.home

export default function HomePage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.home} />
      <JsonLd schema={SCHEMA.faq.home} />

      <Hero
        eyebrow="Qordova Labs Inc — Parent Company"
        headline={<>Governed AI execution<br />for <em className="font-serif italic text-[#C9A84C]">enterprise</em> and<br />regulated environments.</>}
        subhead="Qordova Labs Inc is the parent company. KAIS is its flagship governed AI execution platform. It governs how AI is authorized, constrained, audited, and evidenced across providers and workflows."
        primaryCta={{ label: 'Request Briefing', href: '/contact' }}
        secondaryCta={{ label: 'See KAIS', href: '/kais' }}
        signals={['Deterministic execution gates','Immutable audit artifacts','Provider neutral control plane','Fail-closed enforcement']}
      />

      {/* Operating problem */}
      <section className="section bg-[#111113]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[clamp(40px,6vw,80px)] items-start">
            <div>
              <SectionHeader
                label="The operating problem"
                heading={<>AI capability is moving faster than enterprise control.</>}
              />
            </div>
            <StatementBlock
              quote="Most organizations can access model capability. The harder problem is operational control."
              points={[
                'AI tools are multiplying across teams, providers, and workflows faster than governance can mature — leaving execution without clear boundaries.',
                'Policy documentation and runtime enforcement are not the same thing. Describing what agents should do is not the same as technically constraining what they can do.',
                'Qordova Labs Inc addresses this at the point of execution — before invocation proceeds.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* What Qordova delivers */}
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-start">
            <div>
              <SectionHeader
                label="What Qordova delivers"
                heading="From informal AI use to governed operation."
                body="The flagship platform KAIS is designed to authorize, constrain, review, and evidence AI execution under explicit operating conditions — across providers, teams, and workflows."
              />
            </div>
            <DeliverList items={[
              { num: '01', text: 'Authorize AI invocation under defined conditions' },
              { num: '02', text: 'Constrain execution within explicit parameters' },
              { num: '03', text: 'Review outputs against governance criteria' },
              { num: '04', text: 'Evidence every decision with immutable audit artifacts' },
              { num: '05', text: 'Operate across providers without lock-in' },
            ]} />
          </div>
        </div>
      </section>

      {/* KAIS identity */}
      <section className="section bg-[#111113]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-start">
            <div>
              <SectionHeader
                label="KAIS — Flagship platform"
                heading={<>Not a gateway.<br />A control surface.</>}
                body="KAIS is the flagship governed AI execution platform of Qordova Labs Inc. ORION is the control plane authority inside KAIS and its sole permit issuer. No ORION permit means no execution."
              />
            </div>
            <SectionCallouts items={[
              { mark: '×', text: 'Not a model vendor or AI provider',          affirm: false },
              { mark: '×', text: 'Not a chatbot wrapper or assistant layer',    affirm: false },
              { mark: '×', text: 'Not a simple LLM gateway or request router',  affirm: false },
              { mark: '✦', text: 'The control surface for authorizing AI execution', affirm: true },
              { mark: '✦', text: 'Fail-closed. Audit-evidenced. Provider neutral.', affirm: true },
              { mark: '✦', text: 'ORION permit required — always',              affirm: true },
            ]} />
          </div>
        </div>
      </section>

      {/* Execution model */}
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <SectionHeader label="Execution model" heading="How governed execution works." />
          <CardGrid cols={3} items={[
            { num: '01', title: 'Capture',  body: 'Every invocation is intercepted and logged before any downstream action.' },
            { num: '02', title: 'Permit',   body: 'ORION evaluates against active policy and issues or denies the permit.' },
            { num: '03', title: 'Gate',     body: 'Execution is blocked at the boundary until a valid permit is confirmed.' },
            { num: '04', title: 'Execute',  body: 'Permitted tasks proceed within the parameters defined in the permit schema.' },
            { num: '05', title: 'Audit',    body: 'Every execution emits an immutable, cryptographically chained artifact.' },
            { num: '06', title: 'Review',   body: 'Outputs and decisions are available for structured governance reporting.' },
          ]} />
        </div>
      </section>

      {/* Differentiation */}
      <section className="section bg-[#111113]">
        <div className="container">
          <SectionHeader label="Differentiation" heading="What sets Qordova apart." />
          <PostureGrid items={[
            { title: 'Governance first',    desc: 'Policy is the primary design constraint, not an afterthought applied at the edge.' },
            { title: 'Deterministic gates', desc: 'Execution boundaries are enforced, not approximated or bypassed under load.' },
            { title: 'Provider neutrality', desc: 'No architectural lock-in. KAIS governs across providers without preference.' },
            { title: 'Evidence by design',  desc: 'Every decision emits a replayable, immutable audit artifact — always.' },
            { title: 'Fail-closed posture', desc: 'No permit, no execution. The enforcement boundary holds unconditionally.' },
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#0C0C0D]">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeader label="Common questions" heading="What enterprises ask about Qordova Labs Inc." />
          <FAQBlock blockId="home" items={[
            { q: 'What is Qordova Labs Inc?',               a: 'Qordova Labs Inc is the parent company. It is incorporated in Singapore as Qordova Labs Inc Pte. Ltd. and builds governed AI infrastructure for enterprise and regulated environments. KAIS is its flagship platform.' },
            { q: 'What is KAIS?',                           a: 'KAIS is the flagship governed AI execution platform of Qordova Labs Inc. It provides permit-bound, fail-closed execution authority through ORION — governing whether AI execution is allowed to proceed, under what conditions, and producing immutable audit evidence.' },
            { q: 'What is ORION?',                          a: 'ORION — Orchestrated Reasoning and Intelligence Over Networks — is the control plane authority inside KAIS. It is the sole permit issuer. No ORION permit means no execution.' },
            { q: 'How is KAIS different from an AI gateway?', a: 'AI gateways focus on request routing, cost controls, and throughput. KAIS centers permit-bound execution governance as its constitutional core. ORION-issued execution authority with fail-closed enforcement and immutable audit obligations is not equivalent to gateway-level interception.' },
            { q: 'Who is this for?',                        a: 'Qordova Labs Inc and KAIS serve enterprise and regulated-sector organizations that need AI execution to remain bounded, reviewable, and auditable — including financial services, healthcare, public sector, and multi-provider enterprise environments.' },
          ]} />
        </div>
      </section>

      <FinalCTA
        headline="Bring governed AI execution into your operating model."
        primaryCta={{ label: 'Request Briefing', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
      />
    </>
  )
}
