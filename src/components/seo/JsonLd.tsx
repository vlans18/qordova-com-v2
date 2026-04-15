// JsonLd — structured data injection for GEO and SEO.
// Each schema is a separate component.
// Usage: <JsonLd schema={SCHEMA.breadcrumb.home} />
// Root layout already injects Organization + WebSite schemas.

interface JsonLdProps {
  schema: Record<string, unknown>
}

export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ── Breadcrumb factory ────────────────────────────────────────
function breadcrumb(trail: { name: string; href: string }[]) {
  return {
    '@context':        'https://schema.org',
    '@type':           'BreadcrumbList',
    itemListElement:   trail.map((item, i) => ({
      '@type':    'ListItem',
      position:   i + 1,
      name:       item.name,
      item:       `https://qordova.com${item.href}`,
    })),
  }
}

// ── FAQ factory ───────────────────────────────────────────────
function faqPage(items: { q: string; a: string }[]) {
  return {
    '@context':    'https://schema.org',
    '@type':       'FAQPage',
    mainEntity:    items.map(({ q, a }) => ({
      '@type':          'Question',
      name:             q,
      acceptedAnswer:   { '@type': 'Answer', text: a },
    })),
  }
}

// ── All schemas ───────────────────────────────────────────────
export const SCHEMA = {

  // Breadcrumbs
  breadcrumb: {
    home:       breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }]),
    kais:       breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'KAIS', href: '/kais' }]),
    solutions:  breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Solutions', href: '/solutions' }]),
    industries: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Industries', href: '/industries' }]),
    governance: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Governance', href: '/governance' }]),
    security:   breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Security', href: '/security' }]),
    research:   breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Research', href: '/research' }]),
    about:      breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'About', href: '/about' }]),
    contact:    breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Contact', href: '/contact' }]),
  },

  // FAQ — home page
  faq: {
    home: faqPage([
      {
        q: 'What is Qordova Labs Inc?',
        a: 'Qordova Labs Inc is the parent company. It is incorporated in Singapore as Qordova Labs Inc Pte. Ltd. and builds governed AI infrastructure for enterprise and regulated environments. KAIS is its flagship platform.',
      },
      {
        q: 'What is KAIS?',
        a: 'KAIS is the flagship governed AI execution platform of Qordova Labs Inc. It provides permit-bound, fail-closed execution authority through ORION — governing whether AI execution is allowed to proceed, under what conditions, and producing immutable audit evidence.',
      },
      {
        q: 'What is ORION?',
        a: 'ORION — Orchestrated Reasoning and Intelligence Over Networks — is the control plane authority inside KAIS. It is the sole permit issuer. No ORION permit means no execution.',
      },
      {
        q: 'How is KAIS different from an AI gateway?',
        a: 'AI gateways focus on request routing, cost controls, and throughput. KAIS centers permit-bound execution governance as its constitutional core. ORION-issued execution authority with fail-closed enforcement and immutable audit obligations is not equivalent to gateway-level interception.',
      },
      {
        q: 'Who is this for?',
        a: 'Qordova Labs Inc and KAIS serve enterprise and regulated-sector organizations that need AI execution to remain bounded, reviewable, and auditable — including financial services, healthcare, public sector, and multi-provider enterprise environments.',
      },
    ]),

    // FAQ — kais page
    kais: faqPage([
      {
        q: 'What does fail-closed execution mean in KAIS?',
        a: 'Fail-closed means that if a valid ORION permit is not present, execution does not proceed. There is no soft fail, no default-allow, and no bypass path. This is the constitutional enforcement posture of KAIS.',
      },
      {
        q: 'What is an immutable audit artifact in KAIS?',
        a: 'Every execution event in KAIS produces a cryptographically chained, append-only artifact. These artifacts are reconstructible, replayable, and cannot be altered after creation.',
      },
      {
        q: 'Is KAIS provider-neutral?',
        a: 'Yes. KAIS governs AI execution across providers without architectural preference or lock-in. ORION enforces policy regardless of which model or execution target is involved.',
      },
      {
        q: 'How does KAIS differ from an AI gateway?',
        a: 'AI gateways intercept requests and apply routing rules. KAIS centers permit-bound execution governance as its constitutional core. ORION-issued authority with fail-closed enforcement and immutable audit obligations is not equivalent to gateway-level interception.',
      },
    ]),

    // FAQ — about page
    about: faqPage([
      {
        q: 'Where is Qordova Labs Inc incorporated?',
        a: 'Qordova Labs Inc is incorporated in Singapore as Qordova Labs Inc Pte. Ltd. UEN: 202615996C. Incorporated 10 April 2026.',
      },
      {
        q: 'What does Qordova Labs Inc build?',
        a: 'Governed AI infrastructure — systems that define how AI work is authorized, constrained, reviewed, and evidenced under explicit operating conditions. Not a model vendor. Not a generic AI wrapper.',
      },
      {
        q: 'What is the relationship between Qordova Labs Inc, KAIS, and ORION?',
        a: 'Qordova Labs Inc is the parent company. KAIS is the flagship governed AI execution platform. ORION is the control plane authority inside KAIS — the sole permit issuer. No ORION permit means no execution.',
      },
    ]),
  },

  // SoftwareApplication — KAIS
  softwareApp: {
    kais: {
      '@context':          'https://schema.org',
      '@type':             'SoftwareApplication',
      '@id':               'https://qordova.com/kais#product',
      name:                'KAIS',
      alternateName:       'KAIS — Governed AI Execution Platform',
      description:         'KAIS is the flagship governed AI execution platform of Qordova Labs Inc. Permit-bound, fail-closed, provider neutral, with immutable audit evidence.',
      applicationCategory: 'BusinessApplication',
      operatingSystem:     'Cloud',
      url:                 'https://qordova.com/kais',
      publisher:           { '@id': 'https://qordova.com/#organization' },
      offers: {
        '@type':       'Offer',
        availability:  'https://schema.org/InStock',
        priceCurrency: 'USD',
      },
    },
  },

  // ContactPage
  contactPage: {
    '@context':   'https://schema.org',
    '@type':      'ContactPage',
    '@id':        'https://qordova.com/contact#page',
    url:          'https://qordova.com/contact',
    name:         'Contact Qordova Labs Inc',
    description:  'Request an enterprise briefing or architecture discussion with Qordova Labs Inc.',
    publisher:    { '@id': 'https://qordova.com/#organization' },
  },
}
