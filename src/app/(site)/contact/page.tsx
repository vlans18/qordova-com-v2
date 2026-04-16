import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import { SectionHeader, CardGrid, FinalCTA } from '@/components/sections'

export const metadata: Metadata = PAGE_META.contact

// Contact rule C:
// enterprise@qordova.com — briefings and enterprise inquiries
// contact@qordova.com    — general contact, legal, and admin

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.contact} />
      <JsonLd schema={SCHEMA.contactPage} />

      <Hero
        eyebrow="Qordova Labs Inc — Contact"
        headline={<>Start the enterprise<br />conversation with <em className="font-serif italic text-[#C9A84C]">context</em>.</>}
        subhead="Qordova Labs Inc engages with organizations that need governed AI infrastructure, explicit control boundaries, and a clear operating model for AI execution."
        primaryCta={{ label: 'Request Enterprise Briefing', href: 'mailto:enterprise@qordova.com' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        minHeight="65svh"
      />

      {/* Contact addresses */}
      <section className="section bg-[#111113]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-start">
            <div>
              <SectionHeader
                label="Contact addresses"
                heading="Use the right address for your inquiry."
                body="Conversations start with operating environment, governance expectations, and architecture constraints — not product demonstrations."
              />
            </div>
            <div className="flex flex-col border-t border-[#272729]">
              <div className="flex flex-col gap-2 py-7 border-b border-[#272729]">
                <a
                  href="mailto:enterprise@qordova.com"
                  className="font-mono text-[13px] tracking-[0.06em] text-[#C9A84C] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
                >
                  enterprise@qordova.com
                </a>
                <span className="text-[13px] font-light text-[#606062]">
                  Enterprise briefings, architecture discussions, partnership inquiries
                </span>
              </div>
              <div className="flex flex-col gap-2 py-7 border-b border-[#272729]">
                <a
                  href="mailto:contact@qordova.com"
                  className="font-mono text-[13px] tracking-[0.06em] text-[#C9A84C] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
                >
                  contact@qordova.com
                </a>
                <span className="text-[13px] font-light text-[#606062]">
                  General inquiries, legal matters, and administrative correspondence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry paths */}
      <section className="section bg-[#0C0C0D]">
        <div className="container">
          <SectionHeader label="Inquiry paths" heading="Choose the right starting point." />
          <CardGrid cols={2} items={[
            { num: '01', title: 'Enterprise briefing',   body: 'For organizations evaluating governed AI infrastructure, execution boundaries, and enterprise operating fit.' },
            { num: '02', title: 'Architecture discussion',body: 'For teams that need to understand system structure, control plane authority, reviewability, and execution design.' },
            { num: '03', title: 'Partnership inquiry',   body: 'For strategic partners, channel discussions, and selected institutional collaboration.' },
            { num: '04', title: 'General contact',       body: 'For broader organizational inquiries related to Qordova Labs Inc and KAIS.' },
          ]} />
        </div>
      </section>

      <FinalCTA
        headline="Begin with the operating reality, not a generic form."
        primaryCta={{ label: 'Request Enterprise Briefing', href: 'mailto:enterprise@qordova.com' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        layout="split"
      />
    </>
  )
}
