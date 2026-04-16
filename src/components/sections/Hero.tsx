'use client'

import Link from 'next/link'

// Hero section — primary above-fold for every page.
// Animations: CSS keyframe rise + fadein — no GSAP dependency.
// Signal strip is optional — appears when signals prop is provided.
// eyebrow format: "Qordova Labs Inc — [Page context]"

interface CtaProps { label: string; href: string }

interface HeroProps {
  eyebrow:      string
  headline:     React.ReactNode
  subhead:      string
  primaryCta:   CtaProps
  secondaryCta: CtaProps
  signals?:     string[]
  minHeight?:   string
}

export default function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  signals,
  minHeight = '92svh',
}: HeroProps) {
  return (
    <section
      className="relative flex items-center overflow-hidden bg-[#0C0C0D]"
      style={{ minHeight, padding: 'clamp(72px,9vw,120px) 0 clamp(48px,6vw,80px)' }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,.04) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial light */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: '-15%', right: '-5%',
          width: 'min(720px,70vw)', height: 'min(720px,70vw)',
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,.07) 0%, rgba(201,168,76,.03) 30%, transparent 68%)',
        }}
      />

      {/* Left edge accent */}
      <div
        className="absolute left-0 pointer-events-none"
        aria-hidden="true"
        style={{
          top: '15%', bottom: '15%', width: '2px',
          background: 'linear-gradient(to bottom, transparent, #C9A84C 40%, #C9A84C 60%, transparent)',
          opacity: .35,
        }}
      />

      <div className="container relative z-10 w-full">
        <div style={{ maxWidth: '960px' }}>

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-[14px] font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9A84C]"
            style={{
              marginBottom: '22px',
              animation: 'rise .9s cubic-bezier(.16,1,.3,1) .1s both',
            }}
          >
            <span className="block w-8 h-px bg-[#C9A84C] flex-shrink-0" aria-hidden="true" />
            {eyebrow}
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-light text-[#EFEFEA] leading-[1.04] tracking-[-0.015em]"
            style={{
              fontSize: 'clamp(48px, 6vw, 84px)',
              marginBottom: '20px',
              animation: 'rise .95s cubic-bezier(.16,1,.3,1) .22s both',
            }}
          >
            {headline}
          </h1>

          {/* Subhead */}
          <p
            className="font-light text-[#B8B8B2] leading-[1.72]"
            style={{
              fontSize: 'clamp(16px, 1.6vw, 19px)',
              maxWidth: '560px',
              marginBottom: '32px',
              animation: 'rise .95s cubic-bezier(.16,1,.3,1) .36s both',
            }}
          >
            {subhead}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-[14px]"
            style={{ animation: 'rise .9s cubic-bezier(.16,1,.3,1) .5s both' }}
          >
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-[10px] font-mono text-[10.5px] tracking-[0.14em] uppercase font-medium bg-[#C9A84C] text-[#0C0C0D] rounded-[2px] transition-colors hover:bg-[#D4B668] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0D]"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-[10px] font-mono text-[10.5px] tracking-[0.14em] uppercase text-[#C9A84C] border border-[rgba(201,168,76,0.28)] bg-transparent rounded-[2px] transition-all hover:border-[#C9A84C] hover:bg-[rgba(201,168,76,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0D]"
            >
              {secondaryCta.label}
            </Link>
          </div>

          {/* Signal strip */}
          {signals && signals.length > 0 && (
            <div
              className="flex flex-wrap mt-[72px] border-t border-l border-[#272729]"
              style={{ animation: 'fadein .8s ease .8s both' }}
            >
              {signals.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 px-7 py-5 border-r border-b border-[#272729] flex-1 min-w-[200px]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0" aria-hidden="true" />
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#B8B8B2]">{s}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <style>{`
        @keyframes rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  )
}
