import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import { StagingNotice } from '@/components/sections'
import Link from 'next/link'

export const metadata: Metadata = PAGE_META.privacy

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0D] pt-16">
      <div className="container" style={{ maxWidth: '720px', paddingTop: '72px', paddingBottom: '72px' }}>
        <StagingNotice />
        <p className="font-mono text-[9.5px] tracking-[0.22em] uppercase text-[#C9A84C] mb-5">Legal</p>
        <h1 className="font-serif font-light text-[#EFEFEA] mb-3" style={{ fontSize: 'clamp(28px,3.2vw,42px)' }}>
          Privacy Policy
        </h1>
        <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#606062] mb-8">Status: Preliminary — not final</p>
        <div className="flex flex-col gap-4">
          <p className="text-[14px] font-light text-[#B8B8B2] leading-[1.75]">This privacy policy applies to Qordova Labs Inc Pte. Ltd. and the Qordova.com website.</p>
          <p className="text-[14px] font-light text-[#B8B8B2] leading-[1.75]">Qordova Labs Inc does not sell personal data. Information submitted through contact or briefing requests is used solely for the purpose of responding to that inquiry.</p>
          <p className="text-[14px] font-light text-[#B8B8B2] leading-[1.75]"
             dangerouslySetInnerHTML={{ __html: 'For privacy inquiries, contact <a href="mailto:contact@qordova.com" className="text-[#C9A84C] hover:underline underline-offset-4">contact@qordova.com</a>.' }} />
        </div>
        <div className="mt-10">
          <Link href="/" className="inline-flex items-center justify-center min-h-[44px] px-7 py-[10px] font-mono text-[10.5px] tracking-[0.14em] uppercase font-medium bg-[#C9A84C] text-[#0C0C0D] rounded-[2px] transition-colors hover:bg-[#D4B668]">
            Back to Qordova
          </Link>
        </div>
      </div>
    </div>
  )
}
