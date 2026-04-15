import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:  'Offline | Qordova Labs Inc',
  robots: { index: false, follow: false },
}

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0C0C0D] px-6 text-center">
      <div className="max-w-[480px] w-full flex flex-col items-center">
        <p className="font-mono text-[10px] tracking-[0.20em] uppercase text-[#C9A84C] mb-7">
          Qordova Labs Inc
        </p>
        <h1 className="font-serif font-light text-[#EFEFEA] leading-[1.15] tracking-[-0.01em] mb-4"
            style={{ fontSize: 'clamp(28px,4vw,40px)' }}>
          You are offline.
        </h1>
        <p className="text-[15px] font-light text-[#B8B8B2] leading-[1.7] mb-10 max-w-[340px]">
          No network connection is available. Please check your connection and try again.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center min-h-[44px] px-7 py-[10px] font-mono text-[10.5px] tracking-[0.14em] uppercase font-medium bg-[#C9A84C] text-[#0C0C0D] rounded-[2px] transition-colors hover:bg-[#D4B668]"
        >
          Try again
        </a>
        <p className="mt-12 font-mono text-[9px] tracking-[0.12em] uppercase text-[#606062]">
          Qordova Labs Inc Pte. Ltd.
        </p>
      </div>
    </div>
  )
}
