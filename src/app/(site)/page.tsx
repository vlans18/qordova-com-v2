// src/app/(site)/page.tsx
// Qordova Labs Inc — institutional homepage
// Approved spec: 8 sections, company-first, KAIS subordinate.
// Old product-led homepage removed entirely.
// JsonLd called here (homepage-specific schema only — WebPage + FAQ).
// Root layout handles global Organization + WebSite schema.
// ROUTING RULE (locked): all kodana.dev links → <a target="_blank" rel="noopener noreferrer">
// Token: #C9A84C (gold) — matches tailwind.config gold token

import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { PAGE_META } from '@/components/seo/PageMeta'

export const metadata: Metadata = PAGE_META.home

export default function HomePage() {
  return (
    <>
      {/* Homepage-specific schema — WebPage + FAQPage */}
      <JsonLd page="home" />

      <main id="main-content" className="bg-[#070809]">

        {/* ══════════════════════════════════════════════════════════
            SECTION 0 — HERO
            Single H1. Institutional framing. Company-first.
        ══════════════════════════════════════════════════════════ */}
        <section
          id="hero"
          aria-labelledby="hero-headline"
          className="relative overflow-hidden pt-[7.5rem] pb-24 md:pt-36 md:pb-32"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 38% at 0% 0%, rgba(201,168,76,0.05) 0%, transparent 68%)',
            }}
          />

          <div className="container relative z-10">

            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-7">
              Governance-first AI infrastructure
            </p>

            <h1
              id="hero-headline"
              className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.13] tracking-[-0.01em] text-[#ECE8DF] max-w-[18ch] mb-7"
            >
              Governed AI, built for institutions that{' '}
              <em className="not-italic text-[#C9A84C]">cannot afford</em>{' '}
              ambiguity
            </h1>

            <p className="text-[1.05rem] leading-[1.78] text-[#ACA69E] max-w-[58ch] mb-10">
              Qordova builds governance-first AI systems for enterprises, banks,
              hospitals, and public-sector environments where execution control,
              audit integrity, and accountability matter from the start.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-6 font-mono text-[10.5px] tracking-[0.12em] uppercase font-medium bg-[#C9A84C] text-[#070809] rounded-[2px] transition-colors duration-200 hover:bg-[#D4B668] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070809]"
              >
                Request Company Briefing
              </Link>
              <a
                href="https://www.kodana.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-6 font-mono text-[10.5px] tracking-[0.12em] uppercase text-[#ACA69E] border border-[rgba(255,255,255,0.12)] rounded-[2px] transition-colors duration-200 hover:border-[rgba(201,168,76,0.32)] hover:text-[#ECE8DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070809]"
              >
                View KAIS Architecture
              </a>
            </div>

            <p className="border-t border-[rgba(255,255,255,0.08)] pt-6 font-mono text-[10px] tracking-[0.08em] text-[#736D66]">
              <strong className="text-[#ACA69E] font-medium not-italic uppercase tracking-[0.08em]">
                KAIS
              </strong>{' '}
              is Qordova&#8217;s execution governance system for controlled,
              auditable AI operations.
            </p>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            SECTION 1 — Why governed AI matters now
        ══════════════════════════════════════════════════════════ */}
        <section
          id="why-qordova"
          aria-labelledby="s1-heading"
          className="border-t border-[rgba(255,255,255,0.08)] py-20 md:py-28"
        >
          <div className="container">
            <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#736D66] mb-8">
              01 — Context
            </p>
            <h2
              id="s1-heading"
              className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-[1.2] text-[#ECE8DF] mb-7"
            >
              Why governed AI matters now
            </h2>
            <div className="space-y-5 max-w-[64ch]">
              <p className="text-base leading-[1.8] text-[#ACA69E]">
                AI capability is advancing faster than institutional control. In
                serious environments, the challenge is no longer simple access to
                models. The real challenge is whether AI execution happens under
                authority, within defined boundaries, and with evidence that can
                withstand scrutiny.
              </p>
              <p className="text-base leading-[1.8] text-[#ACA69E]">
                Many organizations already have AI activity in motion. Far fewer
                can show that usage is governed at the point where action is
                taken. That gap is where operational risk, audit weakness, and
                trust failure begin.
              </p>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            SECTION 2 — What Qordova builds
        ══════════════════════════════════════════════════════════ */}
        <section
          id="what-we-build"
          aria-labelledby="s2-heading"
          className="border-t border-[rgba(255,255,255,0.08)] bg-[#0B0D10] py-20 md:py-28"
        >
          <div className="container">
            <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#736D66] mb-8">
              02 — Direction
            </p>
            <h2
              id="s2-heading"
              className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-[1.2] text-[#ECE8DF] mb-7"
            >
              What Qordova builds
            </h2>
            <div className="space-y-5 max-w-[64ch]">
              <p className="text-base leading-[1.8] text-[#ACA69E]">
                Qordova builds governance-first AI systems designed to make AI
                use operationally controllable, auditable, and fit for
                high-accountability environments. Our focus is the layer between
                intent and execution, where organizational trust is either
                preserved or lost.
              </p>
              <p className="text-base leading-[1.8] text-[#ACA69E]">
                This is not a company built around novelty for its own sake. It
                is built around the practical requirements that serious
                institutions face when AI moves from experimentation into real
                operations.
              </p>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            SECTION 3 — From informal use to governed operation
        ══════════════════════════════════════════════════════════ */}
        <section
          id="governed-operation"
          aria-labelledby="s3-heading"
          className="border-t border-[rgba(255,255,255,0.08)] py-20 md:py-28"
        >
          <div className="container">
            <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#736D66] mb-8">
              03 — Operating shift
            </p>
            <h2
              id="s3-heading"
              className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-[1.2] text-[#ECE8DF] mb-7"
            >
              From informal AI use to governed operation
            </h2>
            <div className="space-y-5 max-w-[64ch]">
              <p className="text-base leading-[1.8] text-[#ACA69E]">
                Most organizations do not begin with a fully governed AI
                environment. They begin with scattered usage, uneven oversight,
                and rising pressure to move faster without losing control.
              </p>
              <p className="text-base leading-[1.8] text-[#ACA69E]">
                Qordova exists to help close that gap. The objective is to move
                AI from informal or fragmented use toward governed operational
                deployment, where authority, boundaries, and accountability are
                built into the execution path rather than added after the fact.
              </p>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            SECTION 4 — KAIS bridge
        ══════════════════════════════════════════════════════════ */}
        <section
          id="kais"
          aria-labelledby="s4-heading"
          className="border-t border-[rgba(255,255,255,0.08)] bg-[#0B0D10] py-20 md:py-28"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#736D66]">
                    04 — The system
                  </p>
                  <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#C9A84C] bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.28)] px-2 py-[3px] rounded-[2px]">
                    KAIS
                  </span>
                </div>
                <h2
                  id="s4-heading"
                  className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-[1.2] text-[#ECE8DF]"
                >
                  KAIS, the operational system behind the thesis
                </h2>
              </div>

              <div className="space-y-5 lg:pt-2">
                <p className="text-base leading-[1.8] text-[#ACA69E]">
                  KAIS is Qordova&#8217;s execution governance system. It is
                  designed to control whether AI execution proceeds, under what
                  conditions it proceeds, and what audit obligations follow when
                  it does.
                </p>
                <p className="text-base leading-[1.8] text-[#ACA69E]">
                  In other words, Qordova is the institutional layer, and KAIS
                  is the operational system through which that governance becomes
                  real. The company defines the direction. The system carries
                  that direction into controlled execution.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.kodana.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center min-h-[40px] px-5 font-mono text-[10px] tracking-[0.12em] uppercase text-[#ACA69E] border border-[rgba(255,255,255,0.12)] rounded-[2px] transition-colors duration-200 hover:border-[rgba(201,168,76,0.28)] hover:text-[#ECE8DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
                  >
                    See how KAIS works
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            SECTION 5 — Non-negotiable principles
        ══════════════════════════════════════════════════════════ */}
        <section
          id="principles"
          aria-labelledby="s5-heading"
          className="border-t border-[rgba(255,255,255,0.08)] bg-[#101316] py-20 md:py-28"
        >
          <div className="container">
            <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#736D66] mb-8">
              05 — Operating principles
            </p>
            <h2
              id="s5-heading"
              className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-[1.2] text-[#ECE8DF] mb-5"
            >
              Built on a small set of non-negotiable principles
            </h2>
            <div className="space-y-4 max-w-[64ch] mb-14">
              <p className="text-base leading-[1.8] text-[#ACA69E]">
                Qordova&#8217;s approach is grounded in a small number of
                operating principles: controlled execution, fail-closed behavior,
                auditable operations, provider-neutral deployment, and
                accountability at the point where action is taken.
              </p>
              <p className="text-base leading-[1.8] text-[#ACA69E]">
                These are not styling choices or marketing phrases. They are
                operating requirements for any institution that expects AI use to
                hold up under internal review, external scrutiny, or real
                operational pressure.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[rgba(255,255,255,0.08)]"
              role="list"
            >
              {[
                {
                  num:   'I',
                  title: 'Controlled execution',
                  desc:  'AI execution proceeds only where it is explicitly authorized. Authority precedes action.',
                },
                {
                  num:   'II',
                  title: 'Fail-closed behaviour',
                  desc:  'Ambiguity resolves to denial. Systems that default to permitting unverified requests are not governance systems.',
                },
                {
                  num:   'III',
                  title: 'Auditable operations',
                  desc:  'Every decision produces evidence. Audit integrity is a design requirement, not a reporting function.',
                },
                {
                  num:   'IV',
                  title: 'Provider-neutral deployment',
                  desc:  'Governance is independent of which model or provider is engaged. The control plane does not change with the model.',
                },
                {
                  num:   'V',
                  title: 'Accountability at the point of action',
                  desc:  'Governance applied after the fact is a history record. Governance applied at execution is operational accountability.',
                },
              ].map((p) => (
                <div
                  key={p.num}
                  role="listitem"
                  className="p-7 border-r border-b border-[rgba(255,255,255,0.08)]"
                >
                  <span
                    aria-hidden="true"
                    className="block font-serif text-[1.5rem] font-normal text-[#C9A84C] opacity-40 mb-4"
                  >
                    {p.num}
                  </span>
                  <p className="font-mono text-[10px] tracking-[0.10em] uppercase text-[#ECE8DF] mb-2">
                    {p.title}
                  </p>
                  <p className="text-[13px] leading-[1.65] text-[#736D66]">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            SECTION 6 — Serious environments
        ══════════════════════════════════════════════════════════ */}
        <section
          id="serious-environments"
          aria-labelledby="s6-heading"
          className="border-t border-[rgba(255,255,255,0.08)] py-20 md:py-28"
        >
          <div className="container">
            <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#736D66] mb-8">
              06 — Who this is for
            </p>
            <h2
              id="s6-heading"
              className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-[1.2] text-[#ECE8DF] mb-5"
            >
              Built for serious environments
            </h2>
            <div className="space-y-4 max-w-[64ch] mb-14">
              <p className="text-base leading-[1.8] text-[#ACA69E]">
                Qordova&#8217;s direction is aimed at organizations where
                informal AI use creates unacceptable risk, including enterprise,
                healthcare, financial, and public-sector settings.
              </p>
              <p className="text-base leading-[1.8] text-[#ACA69E]">
                The objective is not to create another layer of AI enthusiasm.
                The objective is to create a governance layer that makes adoption
                safer, more controlled, and more credible when stakes are high.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[rgba(255,255,255,0.08)]"
              role="list"
            >
              {[
                {
                  name: 'Financial Services',
                  desc: 'Regulated banking, asset management, and insurance environments with high audit and accountability obligations.',
                },
                {
                  name: 'Healthcare',
                  desc: 'Clinical, administrative, and operational environments where data governance and decision accountability are non-negotiable.',
                },
                {
                  name: 'Public Sector',
                  desc: 'Government, regulatory, and public-interest environments where trust, sovereignty, and public accountability are foundational.',
                },
                {
                  name: 'Enterprise',
                  desc: 'Multi-team, multi-provider enterprise environments where AI usage is expanding and governance must scale with it.',
                },
              ].map((env) => (
                <div
                  key={env.name}
                  role="listitem"
                  className="p-7 border-r border-b border-[rgba(255,255,255,0.08)]"
                >
                  <p className="font-mono text-[10px] tracking-[0.10em] uppercase text-[#ECE8DF] mb-3">
                    {env.name}
                  </p>
                  <p className="text-[13px] leading-[1.65] text-[#736D66]">
                    {env.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            SECTION 7 — The company behind the system matters
        ══════════════════════════════════════════════════════════ */}
        <section
          id="company"
          aria-labelledby="s7-heading"
          className="border-t border-[rgba(255,255,255,0.08)] bg-[#0B0D10] py-20 md:py-28"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#736D66] mb-8">
                  07 — The institution
                </p>
                <h2
                  id="s7-heading"
                  className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-[1.2] text-[#ECE8DF] mb-8"
                >
                  The company behind the system matters
                </h2>
                {/* Exact approved provenance wording */}
                <p className="inline-flex items-center gap-2 font-mono text-[9.5px] tracking-[0.08em] uppercase text-[#736D66]">
                  <span
                    aria-hidden="true"
                    className="inline-block w-[6px] h-[6px] rounded-full bg-[#C9A84C] opacity-60 flex-shrink-0"
                  />
                  Qordova Labs Inc Pte. Ltd. is incorporated in Singapore.
                </p>
              </div>

              <div className="space-y-5 lg:pt-10">
                <p className="text-base leading-[1.8] text-[#ACA69E]">
                  Systems that govern execution must themselves be trusted. That
                  is why the institutional layer matters.
                </p>
                <p className="text-base leading-[1.8] text-[#ACA69E]">
                  Qordova Labs Inc is the parent company behind KAIS. The company
                  exists to build durable governance infrastructure for AI
                  deployment, not short-lived wrappers around changing model
                  cycles. The role of the company is to provide direction,
                  continuity, and a serious trust foundation behind the systems
                  it brings forward.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════
            SECTION 8 — Final CTA
            Locked: "Start with the institution, then inspect the system."
        ══════════════════════════════════════════════════════════ */}
        <section
          id="briefing"
          aria-labelledby="s8-heading"
          className="border-t border-[rgba(255,255,255,0.08)] py-24 md:py-32 text-center relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 50% 38% at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 68%)',
            }}
          />

          <div className="container relative z-10">
            <div className="max-w-[640px] mx-auto">

              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-7">
                Where to begin
              </p>

              <h2
                id="s8-heading"
                className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-[1.2] text-[#ECE8DF] mb-6"
              >
                Start with the institution, then inspect the system
              </h2>

              <p className="text-base leading-[1.8] text-[#ACA69E] max-w-[52ch] mx-auto mb-10">
                If you are evaluating strategic fit, institutional credibility,
                governance direction, or partnership potential, start with
                Qordova. If you need to inspect the technical control model
                behind that direction, continue into KAIS architecture.
              </p>

              <div className="flex flex-wrap gap-3 justify-center mb-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-[44px] px-6 font-mono text-[10.5px] tracking-[0.12em] uppercase font-medium bg-[#C9A84C] text-[#070809] rounded-[2px] transition-colors duration-200 hover:bg-[#D4B668] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070809]"
                >
                  Request Company Briefing
                </Link>
                <a
                  href="https://www.kodana.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[44px] px-6 font-mono text-[10.5px] tracking-[0.12em] uppercase text-[#ACA69E] border border-[rgba(255,255,255,0.12)] rounded-[2px] transition-colors duration-200 hover:border-[rgba(201,168,76,0.28)] hover:text-[#ECE8DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070809]"
                >
                  View KAIS Architecture
                </a>
              </div>

              <p className="font-mono text-[9.5px] tracking-[0.08em] uppercase text-[#736D66]">
                Engagements are structured and scoped. Not self-serve.
              </p>

            </div>
          </div>
        </section>

      </main>
    </>
  )
}
