import Link from 'next/link'
import { FOOTER_NAV, LEGAL_NAV } from '@/lib/nav'

// Footer is a Server Component — no client state needed.
// Legal entity line is locked: "KAIS, a product of Qordova Labs Inc Pte. Ltd., Singapore."
// Brand description: parent company first, then KAIS.

export default function Footer() {
  return (
    <footer
      className="bg-[#0C0C0D] border-t border-[#272729]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container py-16 md:py-20">

        {/* Top — brand + nav */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 pb-12 border-b border-[#1D1D20] mb-7">

          {/* Brand block */}
          <div className="flex flex-col gap-4 max-w-[300px]">
            <Link
              href="/"
              className="flex flex-col gap-[3px] w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
              aria-label="Qordova Labs Inc — Home"
            >
              <span className="font-serif text-[19px] font-light tracking-[0.01em] text-[#EFEFEA] leading-none">
                Qordova Labs Inc
              </span>
              <span className="font-mono text-[8.5px] tracking-[0.18em] uppercase text-[#C9A84C] leading-none">
                Governed AI Infrastructure for Enterprise
              </span>
            </Link>
            <p className="text-[13px] font-light text-[#606062] leading-relaxed">
              Qordova Labs Inc is the parent company. KAIS is its flagship governed AI execution platform for enterprise and regulated environments.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-0">
              {FOOTER_NAV.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-block py-2 font-mono text-[11px] tracking-[0.08em] uppercase text-[#606062] hover:text-[#B8B8B2] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Bottom — legal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.13em] uppercase text-[#606062]">
            KAIS, a product of Qordova Labs Inc Pte. Ltd., Singapore.
          </p>
          <ul className="flex items-center gap-5">
            {LEGAL_NAV.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-mono text-[9px] tracking-[0.10em] uppercase text-[#606062] hover:text-[#909090] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  )
}
