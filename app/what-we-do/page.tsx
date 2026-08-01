import type { Metadata } from 'next'
import { BookOpenCheck, FileSearch, FlaskConical, GitBranch } from 'lucide-react'
import { PageHero, PageShell } from '@/components/page-shell'
import { DecisionMapVisual, PathwayFlowVisual } from '@/components/regulatory-visuals'

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'See how ComplyBean helps medical-device teams prepare for FDA 510(k) submissions with greater clarity and confidence.',
}

const services = [
  { icon: GitBranch, title: 'Identify your pathway', text: 'Build a clearer understanding of device classification and the product code appropriate to your product.' },
  { icon: FileSearch, title: 'Study the landscape', text: 'Explore relevant predicate devices, standards, guidance, and comparable products without losing the thread.' },
  { icon: FlaskConical, title: 'Know what to prove', text: 'Translate regulatory expectations into a practical plan for testing, clinical evidence, risk, and documentation.' },
  { icon: BookOpenCheck, title: 'Stay on track', text: 'Surface inconsistencies and evidence that may no longer align as your product and regulatory case evolve.' },
]

export default function WhatWeDoPage() {
  return (
    <PageShell>
      <PageHero eyebrow="What we do" title="Greater clarity for the decisions behind an FDA 510(k)." description="ComplyBean helps early-stage medical-device teams navigate classification, product code, predicates, and supporting evidence without building an in-house regulatory team.">
        <DecisionMapVisual />
      </PageHero>
      <section className="section-shell py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div><p className="section-kicker mb-5">Connected guidance</p><h2 className="section-title">Four decisions. One regulatory story.</h2></div>
          <p className="body-large max-w-2xl lg:justify-self-end">Each decision affects the next. ComplyBean helps your team follow those connections instead of assembling an answer from disconnected documents and searches.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="soft-card lift-card relative flex min-h-64 flex-col justify-between overflow-hidden rounded-4xl p-6 md:p-8">
              <span className="absolute -right-3 -top-7 text-[8rem] font-semibold text-primary/[.035]">{index + 1}</span>
              <div className="flex items-start justify-between"><span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary"><Icon className="size-6" /></span><span className="font-mono text-sm text-muted-foreground">0{index + 1}</span></div>
              <div><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-3 max-w-lg leading-7 text-muted-foreground">{text}</p></div>
            </article>
          ))}
        </div>
        <div className="mt-6"><PathwayFlowVisual /></div>
      </section>
    </PageShell>
  )
}
