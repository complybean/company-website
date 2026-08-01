import type { Metadata } from 'next'
import Image from 'next/image'
import { BookOpenCheck, FileSearch, FlaskConical, GitBranch } from 'lucide-react'
import { PageHero, PageShell } from '@/components/page-shell'

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
        <div className="mt-8 flex min-h-56 items-center justify-center rounded-3xl bg-secondary p-6">
          <Image src="/images/illustrations/content-structure.svg" alt="Information organized into a clear content structure" width={514} height={645} className="max-h-64 w-auto" priority />
        </div>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="flex min-h-64 flex-col justify-between rounded-4xl border bg-card p-6 shadow-sm md:p-8">
              <div className="flex items-start justify-between"><span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary"><Icon className="size-6" /></span><span className="font-mono text-sm text-muted-foreground">0{index + 1}</span></div>
              <div><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{text}</p></div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
