// Root layout — owns <html> and <body>.
// Fonts:
//   Cormorant Garamond — display serif, loaded via <link> in <head> (runtime fetch, not build-time)
//   DM Sans           — body sans, loaded via geist-adjacent local package
//   DM Mono           — mono labels, loaded via geist-adjacent local package
// Note: next/font/google is blocked in network-restricted build environments.
// Cormorant Garamond is loaded as a standard <link> stylesheet instead.
// DM Sans and DM Mono are loaded via their npm packages.

import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const viewport: Viewport = {
  themeColor:   '#0C0C0D',
  colorScheme:  'dark',
  width:        'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://qordova.com'),
  title: {
    default:  'Qordova Labs Inc | Governed AI Infrastructure for Enterprise',
    template: '%s | Qordova Labs Inc',
  },
  description:
    'Qordova Labs Inc is the parent company. KAIS is its flagship governed AI execution platform — permit-bound, fail-closed, provider neutral, with immutable audit evidence.',
  keywords: [
    'governed AI infrastructure',
    'enterprise AI governance',
    'AI execution control',
    'AI governance platform',
    'fail-closed AI execution',
    'KAIS platform',
    'ORION permit engine',
    'Qordova Labs',
    'AI control plane enterprise',
    'Singapore AI governance',
  ],
  authors:   [{ name: 'Qordova Labs Inc', url: 'https://qordova.com' }],
  creator:   'Qordova Labs Inc',
  publisher: 'Qordova Labs Inc',
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index: true, follow: true,
      'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
    },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'en_SG',
    url: 'https://qordova.com', siteName: 'Qordova Labs Inc',
    title: 'Qordova Labs Inc | Governed AI Infrastructure for Enterprise',
    description: 'KAIS is the flagship governed AI execution platform of Qordova Labs Inc. Permit-bound, fail-closed, provider neutral.',
    images: [{ url: '/og/og-default.png', width: 1200, height: 630, type: 'image/png', alt: 'Qordova Labs Inc — Governed AI Infrastructure for Enterprise' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qordova Labs Inc | Governed AI Infrastructure for Enterprise',
    description: 'KAIS — the flagship governed AI execution platform. Permit-bound, fail-closed, provider neutral.',
    images: ['/og/og-default.png'],
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/icons/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  category: 'technology',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://qordova.com/#organization',
  name: 'Qordova Labs Inc',
  legalName: 'Qordova Labs Inc Pte. Ltd.',
  url: 'https://qordova.com',
  logo: { '@type': 'ImageObject', url: 'https://qordova.com/icons/icon-512.png', width: 512, height: 512 },
  description: 'Qordova Labs Inc is the parent company building governed AI infrastructure for enterprise and regulated environments. KAIS is its flagship governed AI execution platform.',
  foundingLocation: { '@type': 'Place', addressCountry: 'SG', addressLocality: 'Singapore' },
  areaServed: 'Worldwide',
  knowsAbout: ['Governed AI infrastructure', 'Enterprise AI governance', 'AI execution control', 'AI auditability', 'Regulated AI environments', 'AI control plane'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://qordova.com/#website',
  url: 'https://qordova.com',
  name: 'Qordova Labs Inc',
  description: 'Governed AI Infrastructure for Enterprise',
  publisher: { '@id': 'https://qordova.com/#organization' },
  inLanguage: 'en',
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
        {/* Cormorant Garamond — loaded at runtime, not build time */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
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
