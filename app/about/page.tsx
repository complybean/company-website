import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, Compass, HeartHandshake, Link2 } from 'lucide-react'
import { PageHero, PageShell } from '@/components/page-shell'
import { ReasoningVisual } from '@/components/regulatory-visuals'

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
      <PageHero eyebrow="Why we're building this" title="ComplyBean started with a problem we lived, not one we studied." description="We believe regulatory expertise shouldn't be a black box. Teams deserve both answers and visibility into the reasoning behind them.">
        <ReasoningVisual />
      </PageHero>
      <section className="section-shell grid gap-12 py-16 md:py-24 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-16">
        <div className="visual-grid overflow-hidden rounded-4xl border bg-secondary p-5 shadow-[0_28px_60px_-42px_rgba(18,55,42,.65)] md:p-8">
          <Image src="/images/isometric-regulatory-pathway.webp" alt="Isometric medical-device regulatory pathway with evidence review and submission documents" width={1200} height={900} className="aspect-[4/3] size-full object-contain" priority />
        </div>
        <div>
          <p className="section-kicker mb-5">Our experience</p>
          <h2 className="section-title">We know what it feels like to navigate without an in-house regulatory team.</h2>
          <div className="mt-7 space-y-3">
            {[
              ['01', 'The challenge', 'Working in a research lab without in-house regulatory support, we had to navigate device classification, predicate selection, and evidence requirements largely on our own.'],
              ['02', 'The missing piece', 'External consultants gave us answers—but rarely the reasoning behind them. Decisions were often delivered through experience and instinct, with little visibility into why one path was chosen over another.'],
              ['03', 'The idea', 'Instead of simply telling teams what to do, ComplyBean helps them understand the reasoning behind regulatory decisions so they can move forward with greater certainty.'],
            ].map(([number, title, text]) => <article key={number} className="soft-card lift-card grid gap-3 rounded-2xl p-5 sm:grid-cols-[2.5rem_1fr]"><span className="font-mono text-xs text-primary">{number}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{text}</p></div></article>)}
          </div>
          <p className="mt-6 flex items-start gap-3 font-medium"><Check className="mt-1 size-5 shrink-0 text-primary" />Regulatory intelligence designed to make informed human judgment stronger.</p>
        </div>
      </section>
      <section className="border-y bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 max-w-2xl"><p className="section-kicker mb-5">Our principles</p><h2 className="section-title">Built around clarity, connection, and human judgment.</h2></div>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }, index) => <article key={title} className="soft-card lift-card relative overflow-hidden rounded-3xl p-6 md:p-8"><span className="absolute right-4 top-2 text-7xl font-semibold text-primary/[.035]">{index + 1}</span><span className="mb-12 flex size-12 items-center justify-center rounded-2xl bg-accent"><Icon className="size-6" /></span><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
