import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, Compass, HeartHandshake, Link2 } from 'lucide-react'
import { PageHero, PageShell } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn why ComplyBean is making medical-device regulatory expertise more transparent and accessible to early-stage teams.',
}

const principles = [
  { icon: Compass, title: 'Make reasoning visible', text: 'Teams should understand why a regulatory path is chosen, not only be told what to do.' },
  { icon: Link2, title: 'Connect every decision', text: 'Classification, predicates, evidence, and product details should remain aligned as a case evolves.' },
  { icon: HeartHandshake, title: 'Support human judgment', text: 'Technology should help people make informed decisions—not replace their responsibility or expertise.' },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Why we're building this" title="ComplyBean started with a problem we lived, not one we studied." description="We believe regulatory expertise shouldn't be a black box. Teams deserve both answers and visibility into the reasoning behind them." />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-4xl border bg-secondary">
          <Image src="/images/regulatory-journey.png" alt="Medical device professionals moving through regulatory milestones" width={1400} height={875} className="aspect-[16/10] size-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our experience</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight">We know what it feels like to navigate without an in-house regulatory team.</h2>
          <div className="mt-7 space-y-3">
            <article className="rounded-2xl border bg-card p-5"><p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">The challenge</p><p className="leading-relaxed text-muted-foreground">Working in a research lab without in-house regulatory support, we had to navigate device classification, predicate selection, and evidence requirements largely on our own.</p></article>
            <article className="rounded-2xl border bg-card p-5"><p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">The missing piece</p><p className="leading-relaxed text-muted-foreground">External consultants gave us answers—but rarely the reasoning behind them. Decisions were often delivered through experience and instinct, with little visibility into why one path was chosen over another.</p></article>
            <article className="rounded-2xl border bg-card p-5"><p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">The idea</p><p className="leading-relaxed text-muted-foreground">Instead of simply telling teams what to do, ComplyBean helps them understand the reasoning behind regulatory decisions so they can move forward with greater certainty.</p></article>
          </div>
          <p className="mt-6 flex items-start gap-3 font-medium"><Check className="mt-1 size-5 shrink-0 text-primary" />Regulatory intelligence designed to make informed human judgment stronger.</p>
        </div>
      </section>
      <section className="border-y bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Our principles</p>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl bg-card p-6 shadow-sm md:p-8"><span className="mb-12 flex size-12 items-center justify-center rounded-2xl bg-accent"><Icon className="size-6" /></span><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
