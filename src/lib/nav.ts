// Navigation constants — single source of truth.
// All layout components (Header, MobileDrawer, Footer) import from here.
// No local nav arrays anywhere.

export interface NavItem {
  label: string
  href:  string
}

export const PRIMARY_NAV: NavItem[] = [
  { label: 'KAIS',        href: '/kais' },
  { label: 'Solutions',   href: '/solutions' },
  { label: 'Industries',  href: '/industries' },
  { label: 'Governance',  href: '/governance' },
]

export const SECONDARY_NAV: NavItem[] = [
  { label: 'Security',  href: '/security' },
  { label: 'Research',  href: '/research' },
  { label: 'About',     href: '/about' },
]

export const FOOTER_NAV: NavItem[] = [
  { label: 'KAIS',        href: '/kais' },
  { label: 'Solutions',   href: '/solutions' },
  { label: 'Industries',  href: '/industries' },
  { label: 'Governance',  href: '/governance' },
  { label: 'Security',    href: '/security' },
  { label: 'Research',    href: '/research' },
  { label: 'About',       href: '/about' },
  { label: 'Contact',     href: '/contact' },
]

export const LEGAL_NAV: NavItem[] = [
  { label: 'Privacy',    href: '/privacy' },
  { label: 'Terms',      href: '/terms' },
  { label: 'Disclosure', href: '/disclosure' },
]
