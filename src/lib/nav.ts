// src/lib/nav.ts
// Qordova Labs Inc â€” approved nav constants
// Revised: old broad product taxonomy removed.
// Primary nav: Home Â· Why Qordova Â· What We Build Â· KAIS (external â†’ kodana.dev)
// Secondary nav: Institutional Briefing â†’ /contact
// Footer nav: four links only per approved spec
// Legal nav: single /legal link until privacy/terms/disclosure pages are built
// ROUTING RULE (locked): KAIS nav item opens kodana.dev externally (external: true)

export interface NavItem {
  label:     string
  href:      string
  external?: boolean
}

// â”€â”€ Primary nav â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const PRIMARY_NAV: NavItem[] = [
  { label: 'Home',          href: '/'                       },
  { label: 'Why Qordova',   href: '/#why-qordova'            },
  { label: 'What We Build', href: '/#what-we-build'          },
  { label: 'KAIS',          href: 'https://www.kodana.dev', external: true },
]

// â”€â”€ Secondary nav (header separator group + mobile Engage section) â”€â”€â”€â”€â”€â”€â”€â”€
export const SECONDARY_NAV: NavItem[] = [
  { label: 'Institutional Briefing', href: '/contact' },
]

// â”€â”€ Footer nav â€” approved four links only â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const FOOTER_NAV: NavItem[] = [
  { label: 'Company Overview',  href: '/'                       },
  { label: 'KAIS Architecture', href: 'https://www.kodana.dev', external: true },
  { label: 'Contact',           href: '/contact'                },
  { label: 'Legal',             href: '/legal'                  },
]

// â”€â”€ Legal nav â€” single link until legal pages are built â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const LEGAL_NAV: NavItem[] = [
  { label: 'Legal', href: '/legal' },
]

