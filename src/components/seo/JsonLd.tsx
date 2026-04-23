interface JsonLdProps {
  schema?: Record<string, unknown> | null
  page?: 'home' | string
}

const HOME_WEBPAGE = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.qordova.com/#webpage',
  url: 'https://www.qordova.com',
  name: 'Qordova Labs Inc — Governance-First AI Infrastructure',
  description:
    'Qordova Labs Inc is the parent company behind KAIS. Governance-first AI infrastructure for enterprises, banks, hospitals, and public-sector environments.',
  isPartOf: { '@id': 'https://www.qordova.com/#website' },
  about: { '@id': 'https://www.qordova.com/#organization' },
  inLanguage: 'en',
}

const HOME_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Qordova Labs Inc?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Qordova Labs Inc is a Singapore-incorporated parent company that builds governance-first AI systems for enterprises, banks, hospitals, and public-sector environments. KAIS is its flagship product.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is KAIS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KAIS is the execution governance system developed by Qordova Labs Inc. It is designed to control whether AI execution proceeds, under what conditions it proceeds, and what audit obligations follow when it does. KAIS is a product of Qordova, not the whole company identity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is Qordova built for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Qordova builds for enterprises, banks, hospitals, and public-sector environments where informal AI use creates unacceptable risk. The primary audience includes boards, procurement teams, enterprise buyers, regulators, and institutional partners.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does governance-first mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Governance-first means that authority, boundaries, and accountability are built into the AI execution path from the start, not added after the fact. AI execution is controlled at the point where action is taken, not reported on after it has occurred.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Qordova Labs Inc incorporated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Qordova Labs Inc Pte. Ltd. is incorporated in Singapore.',
      },
    },
  ],
}

function breadcrumb(trail: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://www.qordova.com${item.href}`,
    })),
  }
}

function faqPage(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export const SCHEMA = {
  breadcrumb: {
    home: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }]),
    kais: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'KAIS', href: '/kais' }]),
    solutions: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Solutions', href: '/solutions' }]),
    industries: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Industries', href: '/industries' }]),
    governance: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Governance', href: '/governance' }]),
    security: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Security', href: '/security' }]),
    research: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Research', href: '/research' }]),
    about: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'About', href: '/about' }]),
    contact: breadcrumb([{ name: 'Qordova Labs Inc', href: '/' }, { name: 'Contact', href: '/contact' }]),
  },

  faq: {
    home: faqPage([
      {
        q: 'What is Qordova Labs Inc?',
        a: 'Qordova Labs Inc is a Singapore-incorporated parent company that builds governance-first AI systems for enterprises, banks, hospitals, and public-sector environments. KAIS is its flagship product.',
      },
      {
        q: 'What is KAIS?',
        a: 'KAIS is the execution governance system developed by Qordova Labs Inc. It is designed to control whether AI execution proceeds, under what conditions it proceeds, and what audit obligations follow when it does. KAIS is a product of Qordova, not the whole company identity.',
      },
      {
        q: 'Who is Qordova built for?',
        a: 'Qordova builds for enterprises, banks, hospitals, and public-sector environments where informal AI use creates unacceptable risk. The primary audience includes boards, procurement teams, enterprise buyers, regulators, and institutional partners.',
      },
      {
        q: 'What does governance-first mean?',
        a: 'Governance-first means that authority, boundaries, and accountability are built into the AI execution path from the start, not added after the fact. AI execution is controlled at the point where action is taken, not reported on after it has occurred.',
      },
      {
        q: 'Where is Qordova Labs Inc incorporated?',
        a: 'Qordova Labs Inc Pte. Ltd. is incorporated in Singapore.',
      },
    ]),
    kais: faqPage([
      {
        q: 'What does fail-closed execution mean in KAIS?',
        a: 'Fail-closed means that if a valid ORION permit is not present, execution does not proceed.',
      },
      {
        q: 'Is KAIS provider-neutral?',
        a: 'Yes. KAIS governs AI execution across providers without architectural preference or lock-in.',
      },
    ]),
    about: faqPage([
      {
        q: 'Where is Qordova Labs Inc incorporated?',
        a: 'Qordova Labs Inc Pte. Ltd. is incorporated in Singapore.',
      },
      {
        q: 'What does Qordova Labs Inc build?',
        a: 'Qordova builds governance-first AI infrastructure and KAIS is its execution governance system.',
      },
    ]),
  },

  softwareApp: {
    kais: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': 'https://www.qordova.com/kais#product',
      name: 'KAIS',
      alternateName: 'KAIS — Governed AI Execution Platform',
      description: 'KAIS is the execution governance system of Qordova Labs Inc. It controls whether AI execution proceeds, under what conditions, and what audit obligations follow.',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Cloud',
      url: 'https://www.qordova.com/kais',
      publisher: { '@id': 'https://www.qordova.com/#organization' },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
      },
    },
  },

  contactPage: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://www.qordova.com/contact#page',
    url: 'https://www.qordova.com/contact',
    name: 'Contact Qordova Labs Inc',
    description: 'Request a company briefing or architecture discussion with Qordova Labs Inc.',
    publisher: { '@id': 'https://www.qordova.com/#organization' },
  },
}

export default function JsonLd({ schema = null, page }: JsonLdProps) {
  if (schema) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
  }

  if (page === 'home') {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_WEBPAGE) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQ) }}
        />
      </>
    )
  }

  return null
}
