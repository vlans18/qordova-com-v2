import type { Metadata } from 'next'
import Link from 'next/link'
import { PAGE_META } from '@/components/seo/PageMeta'

export const metadata: Metadata = PAGE_META.legal

export default function LegalPage() {
  return (
    <main id="main-content" className="bg-[#070809] min-h-screen pt-[7.5rem] pb-24 md:pt-36 md:pb-32">
      <div className="container">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-7">
          Legal
        </p>

        <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-medium leading-[1.13] tracking-[-0.01em] text-[#ECE8DF] max-w-[16ch] mb-7">
          Legal information
        </h1>

        <p className="text-[1.05rem] leading-[1.78] text-[#ACA69E] max-w-[58ch] mb-10">
          This page groups the legal documents for Qordova Labs Inc Pte. Ltd.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px]">
          <Link
            href="/privacy"
            className="block p-6 border border-[rgba(255,255,255,0.08)] rounded-[2px] bg-[#0B0D10] hover:border-[rgba(201,168,76,0.28)] transition-colors"
          >
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#C9A84C] mb-3">Privacy</p>
            <p className="text-sm leading-[1.7] text-[#ACA69E]">Privacy policy for Qordova Labs Inc Pte. Ltd. and qordova.com.</p>
          </Link>

          <Link
            href="/terms"
            className="block p-6 border border-[rgba(255,255,255,0.08)] rounded-[2px] bg-[#0B0D10] hover:border-[rgba(201,168,76,0.28)] transition-colors"
          >
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#C9A84C] mb-3">Terms</p>
            <p className="text-sm leading-[1.7] text-[#ACA69E]">Terms of use for Qordova Labs Inc Pte. Ltd. and qordova.com.</p>
          </Link>

          <Link
            href="/disclosure"
            className="block p-6 border border-[rgba(255,255,255,0.08)] rounded-[2px] bg-[#0B0D10] hover:border-[rgba(201,168,76,0.28)] transition-colors"
          >
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#C9A84C] mb-3">Disclosure</p>
            <p className="text-sm leading-[1.7] text-[#ACA69E]">Disclosure statement for Qordova Labs Inc Pte. Ltd.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
