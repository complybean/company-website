import { Footer } from '@/components/footer'
import { ConnectedEvidence, PeopleWeHelp, RegulatoryJourney, WhatWeDo } from '@/components/regulatory-sections'
import { SiteHeader } from '@/components/site-header'
import { ArrowUpRight, Cable, Check, FileCheck2, Files, ShieldCheck, Sparkles } from 'lucide-react'
import Image from 'next/image'

const steps = [
  { number: '01', title: 'Connect', text: 'Your tools, in a few clicks.' },
  { number: '02', title: 'Collect', text: 'Evidence gathers itself.' },
  { number: '03', title: 'Comply', text: 'Stay ready, every day.' },
]

function OrbitIllustration() {
  return (
    <div className="relative flex min-h-96 items-center justify-center overflow-hidden rounded-4xl bg-secondary p-8" aria-label="Compliance tasks flowing into one organized workspace" role="img">
      <div className="absolute inset-8 rounded-full border border-primary/20" />
      <div className="absolute inset-20 rounded-full border border-primary/20" />
      <div className="absolute left-8 top-16 rounded-full bg-card p-4 shadow-sm"><FileCheck2 className="size-6 text-primary" /></div>
      <div className="absolute bottom-12 right-10 rounded-full bg-accent p-4 text-accent-foreground shadow-sm"><Check className="size-6" /></div>
      <div className="absolute right-8 top-14 rounded-full bg-card p-4 shadow-sm"><ShieldCheck className="size-6 text-primary" /></div>
      <div className="relative flex size-48 items-center justify-center rounded-full bg-card shadow-xl sm:size-56">
        <Image src="/images/complybean-mark.png" alt="Complybean loop mark" width={250} height={250} className="size-40 object-contain sm:size-48" priority />
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-12 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:pb-28 lg:pt-20">
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium text-primary"><Sparkles className="size-4" /> Medical device compliance, made clearer</span>
          <h1 className="max-w-3xl text-balance font-sans text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">The gentler way to <span className="text-primary" style={{ color: '#009e6a' }}>serious compliance.</span></h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">Move from idea to submission with a clear plan, connected evidence, and fewer surprises.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#start" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2">Start gently <ArrowUpRight className="size-4" /></a>
            <a href="#how" className="inline-flex min-h-12 items-center rounded-full border bg-card px-6 font-semibold hover:bg-secondary">See how it works</a>
          </div>
        </div>
        <OrbitIllustration />
      </section>

      <WhatWeDo />
      <PeopleWeHelp />
      <RegulatoryJourney />
      <ConnectedEvidence />

      <section id="how" className="border-y bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">How it flows</p><h2 className="max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">From tangled to tidy.</h2></div>
            <p className="max-w-sm leading-relaxed text-muted-foreground">Three calm steps. No spreadsheet archaeology.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.number} className="group flex min-h-72 flex-col justify-between rounded-3xl border bg-background p-6 transition-colors hover:bg-secondary">
                <div className="flex items-center justify-between"><span className="font-mono text-sm text-muted-foreground">{step.number}</span><div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">{index === 0 ? <Cable className="size-5" /> : index === 1 ? <Files className="size-5" /> : <Check className="size-5" />}</div></div>
                <div><h3 className="mb-2 text-3xl font-semibold">{step.title}</h3><p className="text-muted-foreground">{step.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-96 overflow-hidden rounded-4xl bg-primary p-8 text-primary-foreground">
          <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/30" />
          <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/40" />
          <div className="relative flex h-full min-h-80 flex-col justify-between"><p className="font-mono text-sm uppercase tracking-widest">Always on</p><div className="self-center rounded-3xl bg-background p-6 text-foreground shadow-xl"><ShieldCheck className="mb-8 size-10 text-primary" /><p className="text-4xl font-semibold">One</p><p className="text-sm text-muted-foreground">connected dossier</p></div><p className="self-end text-sm">Quietly checking everything.</p></div>
        </div>
        <div className="flex flex-col items-start gap-6 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Less chasing</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Compliance that feels lighter.</h2>
          <ul className="flex flex-col gap-4 text-lg">
            {['Evidence on autopilot', 'Risks, made visible', 'Audits without the scramble'].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex size-7 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check className="size-4" /></span>{item}</li>)}
          </ul>
        </div>
      </section>

      <section id="start" className="px-5 pb-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-4xl bg-foreground p-8 text-background md:flex-row md:items-center md:p-14">
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Ready when you are</p><h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Take the sting out of compliance.</h2></div>
          <a href="mailto:hello@complybean.com" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">Let&apos;s talk <ArrowUpRight className="size-4" /></a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
