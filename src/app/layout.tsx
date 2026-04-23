// src/app/layout.tsx
// Root layout — owns <html> and <body>.
// Fonts:
//   Cormorant Garamond — display serif, loaded via <link> in <head> (runtime fetch)
//   Geist Sans         — body sans, via geist/font/sans
//   Geist Mono         — mono labels, via geist/font/mono
// note: next/font/google is blocked in network-restricted build environments.
// Cormorant Garamond is loaded as a standard <link> stylesheet instead.
//
// Schema: only global Organization + WebSite schema here.
// Homepage-specific WebPage + FAQ schema lives in JsonLd.tsx, called from page.tsx only.

import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const viewport: Viewport = {
  themeColor:   '#070809',
  colorScheme:  'dark',
  width:        'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.qordova.com'),
  title: {
    default:  'Qordova Labs Inc — Governance-First AI Infrastructure',
    template: '%s | Qordova Labs Inc',
  },
  // Institutional description — company-first, KAIS subordinate
  description:
    'Qordova Labs Inc is the parent company behind KAIS. We build governance-first AI systems for enterprises, banks, hospitals, and public-sector environments where execution control, audit integrity, and accountability matter from the start.',
  keywords: [
    'governance-first AI infrastructure',
    'enterprise AI governance',
    'AI execution control',
    'institutional AI governance',
    'governed AI infrastructure',
    'AI control plane',
    'KAIS platform',
    'Qordova Labs',
    'Singapore AI governance',
    'regulated AI environments',
  ],
  authors:   [{ name: 'Qordova Labs Inc', url: 'https://www.qordova.com' }],
  creator:   'Qordova Labs Inc',
  publisher: 'Qordova Labs Inc',
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
  alternates: { canonical: 'https://www.qordova.com' },
  openGraph: {
    type:        'website',
    locale:      'en_SG',
    url:         'https://www.qordova.com',
    siteName:    'Qordova Labs Inc',
    title:       'Qordova Labs Inc — Governance-First AI Infrastructure',
    description:
      'Qordova Labs Inc is the parent company behind KAIS. Governance-first AI infrastructure for enterprises, banks, hospitals, and public-sector environments.',
    images: [{
      url:    '/og/og-default.png',
      width:  1200,
      height: 630,
      type:   'image/png',
      alt:    'Qordova Labs Inc — Governance-First AI Infrastructure',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Qordova Labs Inc — Governance-First AI Infrastructure',
    description:
      'Governance-first AI systems for enterprises, banks, hospitals, and public-sector environments. KAIS is the execution governance system of Qordova Labs Inc.',
    images:      ['/og/og-default.png'],
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico',   sizes: 'any'       },
      { url: '/icons/icon-192.png',  sizes: '192x192',  type: 'image/png' },
      { url: '/icons/icon-512.png',  sizes: '512x512',  type: 'image/png' },
    ],
    apple:    [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/icons/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  category:  'technology',
}

// ── Global schema — Organization + WebSite only ──────────────────────────
// Homepage-specific schema (WebPage, FAQPage) is injected by JsonLd.tsx
// called from src/app/(site)/page.tsx — not here.
const organizationSchema = {
  '@context':  'https://schema.org',
  '@type':     'Organization',
  '@id':       'https://www.qordova.com/#organization',
  name:        'Qordova Labs Inc',
  legalName:   'Qordova Labs Inc Pte. Ltd.',
  url:         'https://www.qordova.com',
  logo: {
    '@type':  'ImageObject',
    url:      'https://www.qordova.com/icons/icon-512.png',
    width:    512,
    height:   512,
  },
  description:
    'Qordova Labs Inc is the parent company behind KAIS. We build governance-first AI systems for enterprises, banks, hospitals, and public-sector environments where execution control, audit integrity, and accountability matter from the start.',
  foundingDate:     '2026',
  foundingLocation: {
    '@type':         'Place',
    addressCountry:  'SG',
    addressLocality: 'Singapore',
  },
  areaServed:  'Worldwide',
  knowsAbout:  [
    'Governance-first AI infrastructure',
    'Enterprise AI governance',
    'AI execution control',
    'AI auditability',
    'Regulated AI environments',
    'AI control plane',
  ],
}

const websiteSchema = {
  '@context':   'https://schema.org',
  '@type':      'WebSite',
  '@id':        'https://www.qordova.com/#website',
  url:          'https://www.qordova.com',
  name:         'Qordova Labs Inc',
  description:  'Governance-First AI Infrastructure for Enterprise',
  publisher:    { '@id': 'https://www.qordova.com/#organization' },
  inLanguage:   'en',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Cormorant Garamond — runtime fetch, not build-time */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Global schema — Organization + WebSite only */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[500] focus:px-4 focus:py-2 focus:bg-[#C9A84C] focus:text-[#0C0C0D] focus:text-sm focus:font-medium focus:rounded-[2px]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
