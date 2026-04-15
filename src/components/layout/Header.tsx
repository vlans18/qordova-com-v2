'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PRIMARY_NAV, SECONDARY_NAV } from '@/lib/nav'
import MobileDrawer from './MobileDrawer'

export default function Header() {
  const pathname  = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.classList.toggle('drawer-open', drawerOpen)
    return () => document.body.classList.remove('drawer-open')
  }, [drawerOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-[200] h-16',
          'border-b transition-all duration-300',
          scrolled
            ? 'bg-[rgba(12,12,13,0.88)] backdrop-blur-[20px] border-[#272729]'
            : 'bg-transparent border-transparent',
        ].join(' ')}
      >
        <div className="container h-16 flex items-center justify-between gap-8">

          {/* Brand */}
          <Link
            href="/"
            className="flex flex-col gap-[2px] flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
            aria-label="Qordova Labs Inc — Home"
          >
            <span className="font-serif text-[19px] font-normal tracking-[0.01em] text-[#EFEFEA] leading-none">
              Qordova Labs Inc
            </span>
            <span className="font-mono text-[8.5px] tracking-[0.22em] uppercase text-[#C9A84C] leading-none">
              Governed AI Infrastructure for Enterprise
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">
            {PRIMARY_NAV.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  'px-[11px] py-[7px] font-mono text-[10.5px] tracking-[0.10em] uppercase rounded-[2px] transition-colors duration-200',
                  isActive(href) ? 'text-[#C9A84C]' : 'text-[#909090] hover:text-[#EFEFEA]',
                ].join(' ')}
              >
                {label}
              </Link>
            ))}
            <span className="w-px h-[14px] bg-[#313134] mx-1.5 flex-shrink-0" aria-hidden="true" />
            {SECONDARY_NAV.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  'px-[11px] py-[7px] font-mono text-[10.5px] tracking-[0.10em] uppercase rounded-[2px] transition-colors duration-200',
                  isActive(href) ? 'text-[#C9A84C]' : 'text-[#909090] hover:text-[#EFEFEA]',
                ].join(' ')}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center justify-center min-h-[36px] px-5 py-[7px] font-mono text-[10px] tracking-[0.14em] uppercase font-medium bg-[#C9A84C] text-[#0C0C0D] rounded-[2px] transition-colors duration-200 hover:bg-[#D4B668] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0D]"
            >
              Request Briefing
            </Link>
            <button
              className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 p-[10px] rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation"
              aria-expanded={drawerOpen}
            >
              <span className="block h-px w-[20px] bg-[#EFEFEA] transition-all" />
              <span className="block h-px w-[14px] bg-[#EFEFEA] transition-all" />
              <span className="block h-px w-[17px] bg-[#EFEFEA] transition-all" />
            </button>
          </div>

        </div>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        pathname={pathname}
      />
    </>
  )
}
