'use client'

import Link from 'next/link'
import { useState } from 'react'

// ── Shared design tokens ───────────────────────────────────────
// All section components use these — imported from CSS variables.
// No hardcoded colours outside of the token set.

// ── SectionLabel ──────────────────────────────────────────────
interface SectionLabelProps { children: React.ReactNode }
export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-3 font-mono text-[9.5px] tracking-[0.22em] uppercase text-[#C9A84C] mb-5">
      <span className="block w-6 h-px bg-[#C9A84C] flex-shrink-0" aria-hidden="true" />
      {children}
    </div>
  )
}

// ── GoldRule ──────────────────────────────────────────────────
export function GoldRule() {
  return <div className="w-10 h-px bg-[rgba(201,168,76,0.28)] mb-6" aria-hidden="true" />
}

// ── SectionHeading ────────────────────────────────────────────
interface SHProps { children: React.ReactNode; className?: string }
export function SectionHeading({ children, className = '' }: SHProps) {
  return (
    <h2
      className={`font-serif font-light text-[#EFEFEA] leading-[1.12] tracking-[-0.01em] ${className}`}
      style={{ fontSize: 'clamp(32px,3.8vw,56px)' }}
    >
      {children}
    </h2>
  )
}

// ── SectionBody ───────────────────────────────────────────────
interface SBodyProps { children: React.ReactNode; className?: string }
export function SectionBody({ children, className = '' }: SBodyProps) {
  return (
    <p className={`text-[#B8B8B2] font-light leading-[1.78] ${className}`}
       style={{ fontSize: 'clamp(15px,1.3vw,17px)' }}>
      {children}
    </p>
  )
}

// ── SectionHeader (label + rule + heading + optional body) ────
interface SectionHeaderProps {
  label:    string
  heading:  React.ReactNode
  body?:    string
  centered?: boolean
}
export function SectionHeader({ label, heading, body, centered }: SectionHeaderProps) {
  return (
    <div className={`mb-[clamp(40px,5vw,64px)] ${centered ? 'text-center' : ''}`}>
      <SectionLabel>{label}</SectionLabel>
      <GoldRule />
      <SectionHeading>{heading}</SectionHeading>
      {body && <SectionBody className="mt-4 max-w-[58ch]">{body}</SectionBody>}
    </div>
  )
}

// ── CardGrid ──────────────────────────────────────────────────
interface CardItem {
  num?:   string
  tag?:   string
  title:  string
  body:   string
}
interface CardGridProps {
  items: CardItem[]
  cols?: 2 | 3
}
export function CardGrid({ items, cols = 3 }: CardGridProps) {
  const colClass = cols === 2
    ? 'grid-cols-1 sm:grid-cols-2'
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid gap-px bg-[#272729] border border-[#272729] ${colClass}`}>
      {items.map((item, i) => (
        <div
          key={i}
          className="group relative bg-[#111113] p-[clamp(28px,3vw,44px)] overflow-hidden transition-colors duration-200 hover:bg-[#161618]"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A84C] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
          {item.num && (
            <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C9A84C] mb-5">{item.num}</div>
          )}
          {item.tag && (
            <div className="inline-flex px-2 py-[3px] mb-3.5 font-mono text-[8.5px] tracking-[0.18em] uppercase bg-[rgba(201,168,76,0.14)] text-[#C9A84C] border border-[rgba(201,168,76,0.28)] rounded-[1px]">
              {item.tag}
            </div>
          )}
          <div className="font-serif text-[#EFEFEA] leading-[1.25] mb-3" style={{ fontSize: 'clamp(18px,1.8vw,24px)' }}>
            {item.title}
          </div>
          <p className="text-[13px] font-light text-[#606062] leading-[1.72]">{item.body}</p>
        </div>
      ))}
    </div>
  )
}

// ── PostureGrid ───────────────────────────────────────────────
interface PostureItem { title: string; desc?: string }
interface PostureGridProps { items: PostureItem[] }
export function PostureGrid({ items }: PostureGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[#272729] border border-[#272729]">
      {items.map((item, i) => (
        <div
          key={i}
          className="group bg-[#111113] p-7 transition-colors duration-200 hover:bg-[#161618]"
        >
          <div className="w-5 h-px bg-[#C9A84C] mb-4 transition-all duration-300 group-hover:w-9" aria-hidden="true" />
          <div className="text-[14px] font-normal text-[#EFEFEA] leading-[1.3] mb-2">{item.title}</div>
          {item.desc && <p className="text-[12px] font-light text-[#606062] leading-[1.6]">{item.desc}</p>}
        </div>
      ))}
    </div>
  )
}

// ── ListSection ───────────────────────────────────────────────
interface ListItem { num: string; title: string; body: string }
interface ListSectionProps { items: ListItem[] }
export function ListSection({ items }: ListSectionProps) {
  return (
    <div className="flex flex-col border-t border-[#272729]">
      {items.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-12 p-7 sm:px-0 sm:py-7 border-b border-[#272729] transition-colors hover:bg-[#161618]"
        >
          <div>
            <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C9A84C] mb-2">{item.num}</div>
            <div className="font-serif leading-[1.2] text-[#EFEFEA]" style={{ fontSize: 'clamp(18px,1.8vw,24px)' }}>
              {item.title}
            </div>
          </div>
          <p className="text-[14px] font-light text-[#606062] leading-[1.72] sm:pt-[26px]">{item.body}</p>
        </div>
      ))}
    </div>
  )
}

// ── StatementBlock ────────────────────────────────────────────
interface StatementBlockProps { quote: string; points: string[] }
export function StatementBlock({ quote, points }: StatementBlockProps) {
  return (
    <div className="border-l-2 border-[#C9A84C] pl-[clamp(24px,3vw,40px)]">
      <p
        className="font-serif font-light italic text-[#EFEFEA] leading-[1.38] mb-7"
        style={{ fontSize: 'clamp(22px,2.5vw,36px)' }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex flex-col border-t border-[#272729]">
        {points.map((pt, i) => (
          <div key={i} className="flex items-start gap-4 py-4 border-b border-[#272729]">
            <span className="w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0 mt-[7px]" aria-hidden="true" />
            <span className="text-[14px] font-light text-[#B8B8B2] leading-[1.7]">{pt}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── DeliverList ───────────────────────────────────────────────
interface DeliverItem { num: string; text: string }
interface DeliverListProps { items: DeliverItem[] }
export function DeliverList({ items }: DeliverListProps) {
  return (
    <div className="flex flex-col border border-[#272729]">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-5 px-7 py-[18px] border-b border-[#272729] last:border-b-0 transition-colors hover:bg-[#161618]"
        >
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C9A84C] flex-shrink-0 w-6">{item.num}</span>
          <span className="text-[13.5px] font-light text-[#B8B8B2] leading-[1.5]">{item.text}</span>
        </div>
      ))}
    </div>
  )
}

// ── PlatformPair ──────────────────────────────────────────────
interface PlatformBlock { tag: string; name: string; desc: string; note: string }
interface PlatformPairProps { blocks: [PlatformBlock, PlatformBlock] }
export function PlatformPair({ blocks }: PlatformPairProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#272729] border border-[#272729]">
      {blocks.map((b, i) => (
        <div
          key={i}
          className="group relative bg-[#111113] p-[clamp(32px,4vw,52px)] overflow-hidden transition-colors hover:bg-[#161618]"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A84C] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
          <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#C9A84C] mb-5">{b.tag}</div>
          <div className="font-serif font-light text-[#EFEFEA] leading-none tracking-[-0.02em] mb-5" style={{ fontSize: 'clamp(36px,4vw,52px)' }}>{b.name}</div>
          <div className="w-8 h-px bg-[rgba(201,168,76,0.28)] mb-5" />
          <p className="text-[14px] font-light text-[#B8B8B2] leading-[1.75] mb-5">{b.desc}</p>
          <div className="border-l-2 border-[#C9A84C] pl-4 bg-[#0C0C0D] py-3 pr-4">
            <p className="font-mono text-[11px] tracking-[0.04em] text-[#606062] leading-[1.6]">{b.note}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── IdentityStack ─────────────────────────────────────────────
// Used on About page — three stacked blocks: Qordova / KAIS / ORION
interface IdentityItem { tag: string; name: string; desc: string }
interface IdentityStackProps { items: IdentityItem[] }
export function IdentityStack({ items }: IdentityStackProps) {
  return (
    <div className="flex flex-col gap-px bg-[#272729] border border-[#272729]">
      {items.map((item, i) => (
        <div key={i} className="bg-[#111113] p-7 sm:p-8">
          <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#C9A84C] mb-2.5">{item.tag}</div>
          <div className="font-serif font-light text-[#EFEFEA] leading-none mb-2.5" style={{ fontSize: 'clamp(22px,2.5vw,32px)' }}>{item.name}</div>
          <p className="text-[13px] font-light text-[#606062] leading-[1.65]">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

// ── FAQBlock ──────────────────────────────────────────────────
// Accessible controlled accordion. <dl>/<dt>/<dd> structure.
// aria-expanded on trigger button, aria-controls on answer region.
// Height measured from scrollHeight — no max-h cap.

import { useRef, useEffect, useCallback } from 'react'

interface FAQItem { q: string; a: string }
interface FAQBlockProps {
  items:    FAQItem[]
  blockId?: string
}

function FAQItemRow({ item, index, blockId, isOpen, onToggle }: {
  item: FAQItem; index: number; blockId: string; isOpen: boolean; onToggle: (i: number) => void
}) {
  const answerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (answerRef.current) setHeight(answerRef.current.scrollHeight)
  }, [isOpen, item.a])

  const id = `faq-${blockId}-${index}`

  return (
    <div className="border-b border-[#272729]">
      <dt>
        <button
          type="button"
          onClick={() => onToggle(index)}
          aria-expanded={isOpen}
          aria-controls={id}
          className="w-full flex items-center justify-between gap-6 py-[22px] text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
        >
          <span className={`text-[15px] font-light leading-[1.45] transition-colors duration-200 ${isOpen ? 'text-[#EFEFEA]' : 'text-[#B8B8B2] group-hover:text-[#EFEFEA]'}`}>
            {item.q}
          </span>
          <span
            className={`flex-shrink-0 w-[18px] h-[18px] text-[#C9A84C] transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 18 18" fill="none">
              <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </span>
        </button>
      </dt>
      <dd
        id={id}
        role="region"
        aria-hidden={!isOpen}
        className="overflow-hidden transition-all duration-300"
        style={{ height: isOpen ? `${height}px` : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <div ref={answerRef} className="pb-[22px]">
          <p className="text-[14px] font-light text-[#606062] leading-[1.75] max-w-[680px]">{item.a}</p>
        </div>
      </dd>
    </div>
  )
}

export function FAQBlock({ items, blockId = 'faq' }: FAQBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = useCallback((i: number) => {
    setOpenIndex(prev => prev === i ? null : i)
  }, [])

  return (
    <dl className="flex flex-col border-t border-[#272729]">
      {items.map((item, i) => (
        <FAQItemRow
          key={i}
          item={item}
          index={i}
          blockId={blockId}
          isOpen={openIndex === i}
          onToggle={toggle}
        />
      ))}
    </dl>
  )
}

// ── FinalCTA ──────────────────────────────────────────────────
interface CtaLinkProps { label: string; href: string }
interface FinalCTAProps {
  headline:    string
  primaryCta:  CtaLinkProps
  secondaryCta: CtaLinkProps
  layout?:     'centred' | 'split'
}
export function FinalCTA({ headline, primaryCta, secondaryCta, layout = 'centred' }: FinalCTAProps) {  const isSplit = layout === 'split'
  return (
    <section className="relative overflow-hidden border-t border-[#272729]" style={{ padding: 'clamp(80px,10vw,140px) 0' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(201,168,76,.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className={`container relative z-10 ${isSplit ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 items-center' : 'flex flex-col items-center text-center'}`}>
        <h2
          className={`font-serif font-light text-[#EFEFEA] leading-[1.16] tracking-[-0.01em] ${isSplit ? '' : 'max-w-[700px] mb-9'}`}
          style={{ fontSize: 'clamp(28px,3.5vw,52px)', marginBottom: isSplit ? 0 : undefined }}
        >
          {headline}
        </h2>
        <div className={`flex flex-wrap gap-[14px] ${isSplit ? '' : 'justify-center'}`}>
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center min-h-[44px] px-7 py-[10px] font-mono text-[10.5px] tracking-[0.14em] uppercase font-medium bg-[#C9A84C] text-[#0C0C0D] rounded-[2px] transition-colors hover:bg-[#D4B668] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center min-h-[44px] px-7 py-[10px] font-mono text-[10.5px] tracking-[0.14em] uppercase text-[#C9A84C] border border-[rgba(201,168,76,0.28)] bg-transparent rounded-[2px] transition-all hover:border-[#C9A84C] hover:bg-[rgba(201,168,76,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── StagingNotice ─────────────────────────────────────────────
export function StagingNotice() {
  return (
    <div className="flex items-start gap-3.5 px-5 py-[14px] border border-[#272729] bg-[#161618] rounded-[2px] mb-10">
      <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C9A84C] flex-shrink-0 mt-[2px]">
        Notice
      </span>
      <p className="font-mono text-[11px] tracking-[0.04em] text-[#606062] leading-[1.65]">
        Preliminary staging text only. Full legal documentation will be published before commercial launch.
      </p>
    </div>
  )
}

// ── SectionCallouts ───────────────────────────────────────────
interface CalloutItem { mark: string; text: string; affirm: boolean }
interface SectionCalloutsProps { items: CalloutItem[] }
export function SectionCallouts({ items }: SectionCalloutsProps) {
  return (
    <div className="flex flex-col border-t border-[#272729]">
      {items.map((item, i) => (
        <div key={i} className="flex items-baseline gap-4 py-[17px] border-b border-[#272729]">
          <span
            className="text-[14px] flex-shrink-0 w-5"
            style={{ color: item.affirm ? '#C9A84C' : 'rgba(250,250,250,0.18)' }}
            aria-hidden="true"
          >
            {item.mark}
          </span>
          <span
            className="text-[14px] font-light leading-[1.45]"
            style={{ color: item.affirm ? '#EFEFEA' : '#606062' }}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  )
}
