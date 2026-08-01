import type { Metadata } from 'next'
import Image from 'next/image'
import { Cable, Check, Files } from 'lucide-react'
import { PageHero, PageShell } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn how ComplyBean guides medical-device teams through FDA 510(k) pathway, predicate, and evidence decisions.',
}

const steps = [
  { icon: Cable, number: '01', title: 'Describe your device', text: 'Use a guided, conversational experience to build a clear picture of your product and intended use.', note: 'Begin with your product context.' },
  { icon: Files, number: '02', title: 'Explore the pathway', text: 'Work through device classification, product code, predicate devices, and relevant evidence requirements.', note: 'See the reasoning behind the route.' },
  { icon: Check, number: '03', title: 'Stay aligned', text: 'Surface inconsistencies and evidence that may no longer fit as your product and regulatory case evolve.', note: 'Final decisions remain in your hands.' },
]

export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageHero eyebrow="How it works" title="A guided path through complex regulatory decisions." description="ComplyBean helps your team understand the pathway, examine the supporting reasoning, and stay aligned as the case evolves.">
        <div className="mt-8 flex min-h-56 items-center justify-center rounded-3xl bg-secondary p-6">
          <Image src="/images/illustrations/sync-files.svg" alt="Files synchronizing into one organized system" width={462} height={689} className="max-h-64 w-auto" priority />
        </div>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <ol className="grid gap-5 lg:grid-cols-3">
          {steps.map(({ icon: Icon, number, title, text, note }) => (
            <li key={number} className="flex min-h-96 flex-col justify-between rounded-4xl border bg-card p-7 shadow-sm">
              <div className="flex items-center justify-between"><span className="font-mono text-sm text-muted-foreground">{number}</span><span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Icon className="size-6" /></span></div>
              <div><h2 className="text-3xl font-semibold">{title}</h2><p className="mt-3 text-lg leading-relaxed text-muted-foreground">{text}</p><p className="mt-6 border-t pt-5 font-medium text-primary">{note}</p></div>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  )
}
