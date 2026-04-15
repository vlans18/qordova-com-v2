import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import { StagingNotice } from '@/components/sections'
import Link from 'next/link'

export const metadata: Metadata = PAGE_META.terms

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0D] pt-16">
      <div className="container" style={{ maxWidth: '760px', paddingTop: '80px', paddingBottom: '80px' }}>
        <StagingNotice />
        <p className="font-mono text-[9.5px] tracking-[0.22em] uppercase text-[#C9A84C] mb-6">Legal</p>
        <h1 className="font-serif font-light text-[#EFEFEA] mb-8" style={{ fontSize: 'clamp(32px,3.5vw,48px)' }}>
          Terms of Use
        </h1>
        <div className="flex flex-col gap-5">
          <p className="text-[15px] font-light text-[#B8B8B2] leading-[1.78]" dangerouslySetInnerHTML={{ __html: 'These terms apply to Qordova Labs Inc Pte. Ltd. and the Qordova.com website.' }} />
          <p className="text-[15px] font-light text-[#B8B8B2] leading-[1.78]" dangerouslySetInnerHTML={{ __html: 'By accessing this website, you agree that the content is provided for informational purposes only and does not constitute a commercial offer, binding agreement, or product warranty.' }} />
          <p className="text-[15px] font-light text-[#B8B8B2] leading-[1.78]" dangerouslySetInnerHTML={{ __html: 'For questions, contact <a href="mailto:contact@qordova.com" className="text-[#C9A84C] hover:underline underline-offset-4">contact@qordova.com</a>.' }} />
        </div>
        <div className="mt-12">
          <Link href="/" className="inline-flex items-center justify-center min-h-[44px] px-7 py-[10px] font-mono text-[10.5px] tracking-[0.14em] uppercase font-medium bg-[#C9A84C] text-[#0C0C0D] rounded-[2px] transition-colors hover:bg-[#D4B668]">
            Back to Qordova
          </Link>
        </div>
      </div>
    </div>
  )
}
