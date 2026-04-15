import type { Metadata } from 'next'

// PageMeta — per-page metadata presets.
// Root layout owns the title template: '%s | Qordova Labs Inc'
// Each page passes only its own title string.
// OG and Twitter images inherit from root unless overridden.

const base = {
  openGraph: {
    images: [{ url: '/og/og-default.png', width: 1200, height: 630, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    images: ['/og/og-default.png'],
  },
}

export const PAGE_META: Record<string, Metadata> = {
  home: {
    title:       'Governed AI Infrastructure for Enterprise',
    description: 'Qordova Labs Inc is the parent company. KAIS is its flagship governed AI execution platform — permit-bound, fail-closed, provider neutral, with immutable audit evidence.',
    alternates:  { canonical: '/' },
    ...base,
  },
  kais: {
    title:       'KAIS — Governed AI Execution Platform',
    description: 'KAIS is the flagship governed AI execution platform of Qordova Labs Inc. Permit-bound, fail-closed, ORION-authorized. The control surface for enterprise AI execution.',
    alternates:  { canonical: '/kais' },
    ...base,
  },
  solutions: {
    title:       'Solutions — Applied AI Governance for Enterprise',
    description: 'Governed AI execution solutions for enterprise internal AI, financial workflows, healthcare, research, and multi-provider environments.',
    alternates:  { canonical: '/solutions' },
    ...base,
  },
  industries: {
    title:       'Industries — Governed AI for Regulated Environments',
    description: 'Qordova Labs Inc supports financial services, healthcare, enterprise, public sector, and multi-entity organizations with governed AI execution.',
    alternates:  { canonical: '/industries' },
    ...base,
  },
  governance: {
    title:       'Governance — AI Execution Control and Authority',
    description: 'Governance as an operating condition. Qordova Labs Inc enforces AI execution authority, review boundaries, and auditability through KAIS and ORION.',
    alternates:  { canonical: '/governance' },
    ...base,
  },
  security: {
    title:       'Security — Fail-Closed AI Execution Posture',
    description: 'Security posture for governed AI execution. Access control, execution boundaries, immutable audit artifacts, and operational reliability by design.',
    alternates:  { canonical: '/security' },
    ...base,
  },
  research: {
    title:       'Research — Governed AI Infrastructure Methods',
    description: 'Research discipline focused on execution control, control plane architecture, auditability, and long-horizon governed AI infrastructure.',
    alternates:  { canonical: '/research' },
    ...base,
  },
  about: {
    title:       'About — Qordova Labs Inc',
    description: 'Qordova Labs Inc Pte. Ltd. is a Singapore-incorporated company building governed AI infrastructure. KAIS is the flagship platform. ORION is the control plane authority.',
    alternates:  { canonical: '/about' },
    ...base,
  },
  contact: {
    title:       'Contact — Request Enterprise Briefing',
    description: 'Start the enterprise conversation with context. Enterprise briefings, architecture discussions, and partnership inquiries at enterprise@qordova.com.',
    alternates:  { canonical: '/contact' },
    ...base,
  },
  privacy: {
    title:       'Privacy Policy',
    description: 'Privacy policy for Qordova Labs Inc Pte. Ltd. and the Qordova.com website.',
    alternates:  { canonical: '/privacy' },
    robots:      { index: false, follow: false },
  },
  terms: {
    title:       'Terms of Use',
    description: 'Terms of use for Qordova Labs Inc Pte. Ltd. and the Qordova.com website.',
    alternates:  { canonical: '/terms' },
    robots:      { index: false, follow: false },
  },
  disclosure: {
    title:       'Disclosure',
    description: 'Disclosure statement for Qordova Labs Inc Pte. Ltd.',
    alternates:  { canonical: '/disclosure' },
    robots:      { index: false, follow: false },
  },
}
