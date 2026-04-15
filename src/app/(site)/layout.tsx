import PageShell from '@/components/layout/PageShell'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>
}
