import { ArrowRight, ArrowUpRight } from 'lucide-react'
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
    <section className="border-b bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_.8fr] lg:items-end">
        <div>
          <Link href="/" className="mb-8 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowRight className="size-4 rotate-180" /> Back to overview
          </Link>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-6xl">{title}</h1>
        </div>
        <div>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">{description}</p>
          {children}
        </div>
      </div>
    </section>
  )
}

export function ContactBand() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-4xl bg-foreground p-8 text-background shadow-xl md:flex-row md:items-center md:p-12">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Ready when you are</p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-4xl">Let&apos;s make your regulatory path clearer.</h2>
        </div>
        <a href="mailto:admin@complybean.com" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
          Talk to us <ArrowUpRight className="size-4" />
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
