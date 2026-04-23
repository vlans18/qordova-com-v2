import Link from 'next/link'
import { FOOTER_NAV, LEGAL_NAV } from '@/lib/nav'

// src/components/layout/Footer.tsx
// Approved footer nav: Company Overview · KAIS Architecture · Contact · Legal
// Legal entity line locked: "KAIS, a product of Qordova Labs Inc Pte. Ltd., Singapore."
// Brand description: parent company first, KAIS subordinate.
// KAIS Architecture opens kodana.dev externally.
// Token: #C9A84C (gold) — matches tailwind.config gold token.

export default function Footer() {
  return (
    <footer
      className="bg-[#070809] border-t border-[rgba(255,255,255,0.08)]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container py-14 md:py-16">

        {/* Top — brand + nav */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-14 pb-10 border-b border-[rgba(255,255,255,0.08)] mb-6">

          {/* Brand block */}
          <div className="flex flex-col gap-3 max-w-[300px]">
            <Link
              href="/"
              className="flex flex-col gap-[3px] w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
              aria-label="Qordova Labs Inc — Home"
            >
              <span className="font-serif text-[19px] font-light tracking-[0.01em] text-[#ECE8DF] leading-none">
                Qordova Labs Inc
              </span>
              <span className="font-mono text-[8.5px] tracking-[0.18em] uppercase text-[#C9A84C] leading-none">
                Governed AI Infrastructure for Enterprise
              </span>
            </Link>
            <p className="text-[13px] font-light text-[#ACA69E] leading-[1.65]">
              Qordova builds governance-first AI systems for environments where
              execution control, audit integrity, and accountability cannot be
              optional.
            </p>
            {/* Footer primary CTA */}
            <div className="mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[36px] px-5 font-mono text-[10px] tracking-[0.12em] uppercase font-medium bg-[#C9A84C] text-[#070809] rounded-[2px] transition-colors duration-200 hover:bg-[#D4B668] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070809]"
              >
                Request Company Briefing
              </Link>
            </div>
          </div>

          {/* Footer nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-0">
              {FOOTER_NAV.map(({ label, href, external }) => (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-[6px] font-mono text-[11px] tracking-[0.08em] uppercase text-[#736D66] hover:text-[#ACA69E] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="inline-block py-[6px] font-mono text-[11px] tracking-[0.08em] uppercase text-[#736D66] hover:text-[#ACA69E] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Bottom — legal entity line + legal nav */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Locked exact wording */}
          <p className="font-mono text-[9px] tracking-[0.13em] uppercase text-[#736D66]">
            KAIS, a product of Qordova Labs Inc Pte. Ltd., Singapore.
          </p>
          <ul className="flex items-center gap-5">
            {LEGAL_NAV.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-mono text-[9px] tracking-[0.10em] uppercase text-[#736D66] hover:text-[#ACA69E] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-[2px]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Institutional close */}
        <p className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.05)] font-mono text-[8.5px] tracking-[0.06em] uppercase text-[#4A4840] italic">
          Start with the institution. Continue into the system when technical
          inspection is needed.
        </p>

      </div>
    </footer>
  )
}
