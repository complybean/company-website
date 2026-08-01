import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, FileSearch, RefreshCw, ShieldCheck } from 'lucide-react'
import { PageHero, PageShell } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Explore ComplyBean, an AI-enabled regulatory intelligence platform supporting medical-device teams preparing FDA 510(k) submissions.',
}

const connections = ['Product change', 'Risk review', 'Test evidence', 'Labelling', 'Submission']

export default function PlatformPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Platform" title="Guided regulatory intelligence for FDA 510(k) preparation." description="Work through device classification, product code, predicate selection, and supporting evidence in one conversational experience.">
        <div className="mt-8 flex min-h-56 items-center justify-center rounded-3xl bg-secondary p-6">
          <Image src="/images/illustrations/pending-approval.svg" alt="A documented review moving toward approval" width={516} height={464} className="max-h-60 w-auto" priority />
        </div>
      </PageHero>
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <ShieldCheck className="mb-8 size-12 text-accent" />
            <h2 className="text-balance text-4xl font-semibold leading-tight">As your regulatory case evolves, stay aware of what changes.</h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/75">ComplyBean helps surface inconsistencies, evidence that may no longer align with your product, and relevant regulatory changes.</p>
            <ul className="mt-8 space-y-3">
              {['Make regulatory reasoning easier to follow', 'Keep product details and evidence aligned', 'Support informed decisions as your case evolves'].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex size-7 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check className="size-4" /></span>{item}</li>)}
            </ul>
          </div>
          <div className="rounded-4xl bg-card p-5 text-foreground shadow-xl md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-secondary p-4"><span className="flex items-center gap-3 font-semibold"><RefreshCw className="size-5 text-primary" /> Design updated</span><span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold">Impact found</span></div>
            <div className="flex flex-col gap-2 py-5">
              {connections.map((item, index) => <div key={item} className="flex items-center gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-xs">{index + 1}</span><span className="h-px w-5 bg-border" /><div className="flex flex-1 items-center justify-between rounded-xl border p-3"><span className="text-sm font-medium">{item}</span>{index > 0 && <FileSearch className="size-4 text-primary" />}</div></div>)}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
