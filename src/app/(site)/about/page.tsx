import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import {
  SectionHeader, IdentityStack, PostureGrid, FAQBlock, FinalCTA,
} from '@/components/sections'

export const metadata: Metadata = PAGE_META.about

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.about} />
      <JsonLd schema={SCHEMA.faq.about} />

      <Hero
        eyebrow="Qordova Labs Inc — About"
        headline={<>Qordova Labs Inc builds<br />governed AI infrastructure<br />for <em className="font-serif italic text-[#C9A84C]">enterprise</em>.</>}
        subhead="Qordova Labs Inc is the parent company. It is focused on the architectures, operating methods, and control structures required for AI execution in serious enterprise and regulated environments."
        primaryCta={{ label: 'Discuss Enterprise Architecture', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
        signals={['Parent company','Singapore','Flagship: KAIS','Authority: ORION']}
        minHeight="88svh"
      />

      {/* Company structure */}
      <section className="section bg-[#111113]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-start">
            <div>
              <SectionHeader
                label="Company structure"
                heading="Not a model vendor. Not a generic AI wrapper."
                body="Qordova Labs Inc builds governed AI infrastructure — systems that define how AI work is authorized, constrained, reviewed, and evidenced under explicit operating conditions. KAIS is the flagship platform. ORION is the control plane authority inside KAIS."
              />
            </div>
            <IdentityStack items={[
              {
                tag:  'Parent company',
                name: 'Qordova Labs Inc',
                desc: 'Incorporated in Singapore as Qordova Labs Inc Pte. Ltd. Builds governed AI infrastructure for enterprise and regulated environments.',
              },
              {
                tag:  'Flagship platform',
                name: 'KAIS',
                desc: 'The governed AI execution platform. Permit-bound, fail-closed, provider neutral. Built for authorization, boundary enforcement, reviewability, and audit-evidenced operation.',
              },
              {
                tag:  'Control plane authority',
                name: 'ORION',
                desc: 'Orchestrated Reasoning and Intelligence Over Networks. The sole permit issuer inside KAIS. No ORION permit — no execution.',
              },
            ]} />
          </div>
        </div>
      </section>

      {/* Operating posture */}
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <SectionHeader label="Operating posture" heading="How Qordova Labs Inc is positioned to operate." />
          <PostureGrid items={[
            { title: 'Governance first',       desc: 'Policy is the primary design constraint across every product and decision.' },
            { title: 'Control plane authority',desc: 'ORION is the enforcement core. Not advisory — authoritative.' },
            { title: 'Reviewable output',      desc: 'Every execution decision is evidenced. Nothing runs without a trail.' },
            { title: 'Provider neutral',       desc: 'No lock-in by design. Governance persists regardless of provider.' },
            { title: 'Long-horizon',           desc: 'Built to remain governable over time — not just impressive in early demos.' },
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#111113]">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeader label="About Qordova Labs Inc" heading="Common questions about the company." />
          <FAQBlock blockId="about" items={[
            { q: 'Where is Qordova Labs Inc incorporated?',                            a: 'Qordova Labs Inc is incorporated in Singapore as Qordova Labs Inc Pte. Ltd. UEN: 202615996C. Incorporated 10 April 2026.' },
            { q: 'What does Qordova Labs Inc build?',                                  a: 'Governed AI infrastructure — systems that define how AI work is authorized, constrained, reviewed, and evidenced under explicit operating conditions. Not a model vendor. Not a generic AI wrapper.' },
            { q: 'What is the relationship between Qordova Labs Inc, KAIS, and ORION?',a: 'Qordova Labs Inc is the parent company. KAIS is the flagship governed AI execution platform. ORION is the control plane authority inside KAIS — the sole permit issuer. No ORION permit means no execution.' },
          ]} />
        </div>
      </section>

      <FinalCTA
        headline="Start with structure and operating method, not surface features."
        primaryCta={{ label: 'Discuss Enterprise Architecture', href: '/contact' }}
        secondaryCta={{ label: 'Back to Home', href: '/' }}
        layout="split"
      />
    </>
  )
}
