import { ArrowRight, ArrowUpRight, Mail, Sparkles } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Footer } from './footer'
import { SiteHeader } from './site-header'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b bg-card">
      <div className="absolute -left-32 -top-32 size-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="section-shell relative grid gap-10 py-14 md:py-20 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16 lg:py-24">
        <div className="max-w-2xl">
          <Link href="/" className="mb-10 flex w-fit items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm hover:border-primary/25 hover:text-primary">
            <ArrowRight className="size-4 rotate-180" /> Back to overview
          </Link>
          <p className="section-kicker mb-5">{eyebrow}</p>
          <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl">{title}</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">{description}</p>
        </div>
        {children && <div className="lg:pl-2">{children}</div>}
      </div>
    </section>
  )
}

export function ContactBand() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-4xl bg-foreground p-8 text-background shadow-[0_30px_70px_-45px_rgba(18,55,42,.9)] md:flex-row md:items-center md:p-12">
        <div className="absolute -right-16 -top-20 size-64 rounded-full border border-background/10" />
        <div className="absolute -right-4 -top-8 size-40 rounded-full border border-background/10" />
        <div className="relative">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Ready when you are</p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-4xl">Let&apos;s make your regulatory path clearer.</h2>
          <p className="mt-4 flex items-center gap-2 text-sm text-background/65"><Sparkles className="size-4 text-accent" /> Start with the questions your team has today.</p>
        </div>
        <a href="mailto:admin@complybean.com" className="relative inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5">
          <Mail className="size-4" /> Talk to us <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  )
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main id="top">
      <a href="#main-content" className="sr-only z-[100] rounded-full bg-foreground px-5 py-3 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to main content</a>
      <SiteHeader />
      <div id="main-content">{children}</div>
      <ContactBand />
      <Footer />
    </main>
  )
}
