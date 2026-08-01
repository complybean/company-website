import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, FileCheck2, Route, SearchCheck, ShieldCheck, Tags } from 'lucide-react'
import CopyEmail from '@/components/CopyEmail'
import { Footer } from '@/components/footer'
import { SiteHeader } from '@/components/site-header'

const supportItems = [
  { title: 'Spot inconsistencies', text: 'Highlighting inconsistencies before they become a problem.' },
  { title: 'Check evidence alignment', text: 'Identifying when supporting evidence may no longer align with your product.' },
  { title: 'Follow regulatory change', text: 'Keeping you informed of relevant regulatory changes.' },
]

const decisions = [
  { icon: Route, title: 'Device classification', text: 'Build a clearer understanding of where your device fits.' },
  { icon: Tags, title: 'Product code', text: 'Identify the product code that supports the intended regulatory pathway.' },
  { icon: SearchCheck, title: 'Predicate devices', text: 'Identify and evaluate relevant predicate devices for your pathway.' },
  { icon: FileCheck2, title: 'Supporting evidence', text: 'Understand the evidence needed for an FDA 510(k) submission.' },
]

const problemPoints = [
  { number: '01', title: 'A sequence of high-stakes decisions', text: 'Bringing a medical device to market means making a series of high-stakes regulatory decisions—often without the support of a dedicated regulatory team.' },
  { number: '02', title: 'Every decision shapes the path', text: 'Classification, product code, predicate selection, and supporting evidence all influence the path to an FDA 510(k) submission.' },
  { number: '03', title: 'Small teams carry the uncertainty', text: 'For early-stage companies, this work often falls to founders and multidisciplinary teams, where uncertainty can mean delays, increased costs, and extended time to market.' },
]

function HeroIllustration() {
  return (
    <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden rounded-4xl bg-secondary p-8" aria-label="Regulatory decisions organized around the ComplyBean platform" role="img">
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle,var(--primary)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute inset-10 rounded-full border border-primary/20" />
      <div className="absolute inset-24 rounded-full border border-primary/20" />
      <div className="absolute left-7 top-14 rounded-2xl border bg-card px-4 py-3 text-sm font-semibold shadow-sm">Classification</div>
      <div className="absolute bottom-12 right-7 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold shadow-sm">Evidence aligned</div>
      <div className="absolute right-7 top-16 rounded-2xl border bg-card px-4 py-3 text-sm font-semibold shadow-sm">Predicate search</div>
      <div className="relative flex size-52 items-center justify-center rounded-full bg-card shadow-xl sm:size-60">
        <Image src="/images/complybean-mark.png" alt="ComplyBean loop mark" width={250} height={250} className="size-44 object-contain sm:size-52" priority />
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main id="top">
      <a href="#main-content" className="sr-only z-[100] rounded-full bg-foreground px-5 py-3 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to main content</a>
      <SiteHeader />
      <section id="main-content" className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 px-5 pb-20 pt-12 md:px-8 md:pt-16 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:pb-28 lg:pt-20">
        <div className="flex flex-col items-start gap-6">
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-[4.25rem]">You built the device. <span className="text-[#009e6a]">You shouldn&apos;t have to build a regulatory team too.</span></h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">ComplyBean helps medical-device companies navigate regulatory pathways with greater clarity and confidence—without the need for a dedicated in-house regulatory team.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#start" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5">Talk to us <ArrowUpRight className="size-4" /></a>
            <Link href="/how-it-works/" className="inline-flex min-h-12 items-center gap-2 rounded-full border bg-card px-6 font-semibold hover:bg-secondary">See how it works <ArrowRight className="size-4" /></Link>
          </div>
        </div>
        <HeroIllustration />
      </section>

      <section className="border-y bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">01 · The problem</p><h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">High-stakes decisions. Limited regulatory support.</h2></div>
          <div className="mt-12 divide-y rounded-4xl border bg-background px-6 shadow-sm md:px-8">
            {problemPoints.map((item) => <article key={item.number} className="grid gap-4 py-7 md:grid-cols-[4rem_.7fr_1.3fr] md:items-start md:gap-8"><span className="font-mono text-sm text-primary">{item.number}</span><h3 className="text-xl font-semibold">{item.title}</h3><p className="leading-relaxed text-muted-foreground">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div><p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">02 · How ComplyBean helps</p><h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Guided intelligence for FDA 510(k) preparation.</h2></div>
            <div><p className="text-lg leading-relaxed text-muted-foreground">ComplyBean is an AI-enabled regulatory intelligence platform for medical-device companies preparing FDA 510(k) submissions. Its guided, conversational experience helps teams work through four connected decisions:</p><Link href="/platform/" className="mt-5 inline-flex items-center gap-2 rounded-lg font-semibold text-primary hover:gap-3">Explore the platform <ArrowRight className="size-4" /></Link></div>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {decisions.map(({ icon: Icon, title, text }, index) => <li key={title} className="flex min-h-64 flex-col justify-between rounded-3xl border bg-card p-6 shadow-sm"><div className="flex items-center justify-between"><span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary"><Icon className="size-5" /></span><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="border-y bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">03 · As your case evolves</p><h2 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">Stay aligned as the regulatory picture changes.</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {supportItems.map((item) => <article key={item.title} className="rounded-3xl bg-card p-6 shadow-sm md:p-8"><span className="mb-10 flex size-9 items-center justify-center rounded-full bg-accent"><Check className="size-4" /></span><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p></article>)}
          </div>
          <div className="mt-6 grid gap-5 rounded-3xl bg-foreground p-6 text-background md:grid-cols-[auto_1fr] md:items-center md:p-8"><span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground"><ShieldCheck className="size-6" /></span><div><h3 className="text-xl font-semibold">Human judgment stays in control.</h3><p className="mt-2 max-w-4xl leading-relaxed text-background/75">Final regulatory decisions always remain in your hands. ComplyBean is designed to support informed human judgment—not replace it.</p></div></div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">04 · The vision</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Advancing the next generation of regulatory intelligence so that any medical-device innovator can bring safe, effective devices to patients faster.</h2>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="overflow-hidden rounded-4xl bg-secondary p-6"><Image src="/images/illustrations/medical-research.svg" alt="Medical research behind the ComplyBean founding story" width={855} height={578} className="aspect-[4/3] size-full object-contain" /></div>
          <div><p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">05 · Why we&apos;re building this</p><h2 className="text-balance text-4xl font-semibold leading-tight">A problem we lived, not one we studied.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Our experience navigating classification, predicates, and evidence without in-house regulatory support shaped a simple belief: regulatory expertise should not be a black box.</p><Link href="/about/" className="mt-6 inline-flex items-center gap-2 rounded-lg font-semibold text-primary hover:gap-3">Read our story <ArrowRight className="size-4" /></Link></div>
        </div>
      </section>

      <section id="start" className="scroll-mt-24 px-5 pb-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-4xl bg-foreground p-8 text-background shadow-xl md:flex-row md:items-center md:p-14">
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Move forward with greater certainty</p><h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight md:text-5xl">You don&apos;t have to navigate the journey alone.</h2></div>
          <div className="flex flex-col items-start gap-3 md:items-end"><a href="mailto:admin@complybean.com" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-foreground hover:-translate-y-0.5">Let&apos;s talk <ArrowUpRight className="size-4" /></a><CopyEmail /></div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
