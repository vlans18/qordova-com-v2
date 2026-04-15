import Header from './Header'
import Footer from './Footer'

// PageShell — inherited by all routes under src/app/(site)/layout.tsx.
// Header and Footer are rendered once here. Pages receive only their content.

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}
