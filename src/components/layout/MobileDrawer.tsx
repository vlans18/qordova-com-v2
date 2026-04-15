'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { PRIMARY_NAV, SECONDARY_NAV } from '@/lib/nav'

interface Props {
  open:     boolean
  onClose:  () => void
  pathname: string
}

export default function MobileDrawer({ open, onClose, pathname }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  // Focus close button when drawer opens
  useEffect(() => {
    if (open) setTimeout(() => closeRef.current?.focus(), 50)
  }, [open])

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      {/* Backdrop */}
      <div
        className={[
          'fixed inset-0 z-[298] bg-[rgba(12,12,13,0.72)] backdrop-blur-[6px]',
          'transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          'fixed top-0 right-0 bottom-0 z-[299]',
          'w-[min(340px,92vw)]',
          'flex flex-col',
          'bg-[#161618] border-l border-[#272729]',
          'transition-transform duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        {/* Head */}
        <div className="h-16 flex-shrink-0 flex items-center justify-between px-6 border-b border-[#272729]">
          <Link
            href="/"
            onClick={onClose}
            className="flex flex-col gap-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
          >
            <span className="font-serif text-[18px] font-normal text-[#EFEFEA] leading-none">
              Qordova Labs Inc
            </span>
            <span className="font-mono text-[8.5px] tracking-[0.18em] uppercase text-[#C9A84C] leading-none">
              Governed AI Infrastructure for Enterprise
            </span>
          </Link>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close navigation"
            className="w-9 h-9 flex items-center justify-center text-[#909090] hover:text-[#EFEFEA] transition-colors rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-0 py-6" aria-label="Mobile navigation">
          <p className="font-mono text-[8.5px] tracking-[0.22em] uppercase text-[#606062] px-6 mb-2">
            Platform
          </p>
          {PRIMARY_NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={[
                'flex items-center justify-between px-6 py-3.5 text-[15px] font-light',
                'border-b border-[#1D1D20] transition-colors duration-200',
                isActive(href)
                  ? 'text-[#C9A84C] bg-[#1D1D20]'
                  : 'text-[#B8B8B2] hover:text-[#EFEFEA] hover:bg-[#1D1D20]',
              ].join(' ')}
            >
              {label}
              <span className="text-[#606062] text-xs">→</span>
            </Link>
          ))}

          <p className="font-mono text-[8.5px] tracking-[0.22em] uppercase text-[#606062] px-6 mb-2 mt-6">
            Company
          </p>
          {SECONDARY_NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={[
                'flex items-center justify-between px-6 py-3.5 text-[15px] font-light',
                'border-b border-[#1D1D20] transition-colors duration-200',
                isActive(href)
                  ? 'text-[#C9A84C] bg-[#1D1D20]'
                  : 'text-[#B8B8B2] hover:text-[#EFEFEA] hover:bg-[#1D1D20]',
              ].join(' ')}
            >
              {label}
              <span className="text-[#606062] text-xs">→</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="flex-shrink-0 px-6 py-5 pb-8 border-t border-[#272729]">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center w-full min-h-[44px] px-6 font-mono text-[10.5px] tracking-[0.14em] uppercase font-medium bg-[#C9A84C] text-[#0C0C0D] rounded-[2px] transition-colors hover:bg-[#D4B668] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
          >
            Request Briefing
          </Link>
          <p className="mt-4 text-center font-mono text-[8px] tracking-[0.12em] uppercase text-[#606062]">
            Qordova Labs Inc Pte. Ltd.
          </p>
        </div>
      </div>
    </>
  )
}
