import Image from 'next/image'
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  FileSearch,
  FlaskConical,
  GitBranch,
  Lightbulb,
  Microscope,
  RefreshCw,
  Rocket,
  ScanSearch,
} from 'lucide-react'

const services = [
  { icon: GitBranch, title: 'Plan your route', text: 'Understand your device class, market, and regulatory pathway.' },
  { icon: ScanSearch, title: 'Study the landscape', text: 'Find useful predicate devices and see how similar products were cleared.' },
  { icon: FlaskConical, title: 'Know what to prove', text: 'Turn standards and regulations into a practical evidence plan.' },
  { icon: BookOpenCheck, title: 'Build your submission', text: 'Keep risks, tests, labels, and documents connected as your device evolves.' },
]

const people = [
  { icon: Lightbulb, title: 'Founders', text: 'Start with a clear plan before expensive decisions are made.' },
  { icon: Microscope, title: 'Researchers', text: 'Shape promising science into a product regulators can understand.' },
  { icon: Rocket, title: 'Growing teams', text: 'Build repeatable compliance without hiring a large department.' },
]

const outcomes = [
  ['A clear starting point', 'Know where your device fits and which route makes sense.'],
  ['A living evidence plan', 'See what must be tested, written, reviewed, and updated.'],
  ['Fewer late surprises', 'Spot gaps and affected documents while there is still time to act.'],
  ['A stronger submission', 'Bring the full story together in one connected dossier.'],
]

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-y bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we do</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Regulatory work, made easier to follow.</h2>
          </div>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:justify-self-end">Complybean turns complicated medical-device rules into a clear sequence of decisions, evidence, and documents.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="flex min-h-60 flex-col justify-between border bg-background p-6 md:p-8" style={{ borderRadius: '38px' }}>
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary"><Icon className="size-6" /></span>
                <span className="font-mono text-sm text-muted-foreground">0{index + 1}</span>
              </div>
              <div className="flex flex-col gap-3"><h3 className="text-2xl font-semibold leading-tight">{title}</h3><p className="max-w-md text-base leading-relaxed text-muted-foreground">{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PeopleWeHelp() {
  return (
    <section id="people" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
      <div className="overflow-hidden rounded-4xl border bg-secondary">
        <Image src="/images/regulatory-team.png" alt="A medical device founder, engineer, and regulatory specialist working together" width={1200} height={900} className="aspect-[4/3] size-full object-cover" />
      </div>
      <div className="flex flex-col gap-7 lg:p-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Who it is for</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Big ambition. Lean team.</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">You know your device. Complybean helps you understand the regulatory work around it, in plain language.</p>
        </div>
        <div className="flex flex-col gap-3">
          {people.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex items-start gap-4 rounded-2xl border bg-card p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"><Icon className="size-5" /></span>
              <div className="flex flex-col gap-1"><h3 className="text-lg font-semibold">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RegulatoryJourney() {
  return (
    <section className="border-y bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <Image src="/images/regulatory-journey.png" alt="Two medical device professionals moving through planning, testing, and submission milestones" width={1400} height={875} className="aspect-[16/10] size-full object-cover" loading="eager" style={{ borderRadius: '4px' }} />
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What you get</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">A map for the whole journey.</h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">Not another folder of templates. A connected view of what you are making, what regulators expect, and what your team should do next.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map(([title, text]) => (
              <article key={title} className="rounded-2xl bg-card p-5">
                <Check className="mb-4 size-5 text-primary" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ConnectedEvidence() {
  const items = ['Product change', 'Risk review', 'Test evidence', 'Labelling', 'Submission']
  return (
    <section id="platform" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Everything stays connected</p>
          <h2 className="max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Change one thing. See everything it touches.</h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75">When your device changes, Complybean points to the risks, tests, labels, and documents that may need attention.</p>
          <a href="#start" className="inline-flex items-center gap-2 font-semibold text-accent hover:opacity-80">See it in action <ArrowRight className="size-4" /></a>
        </div>
        <div className="rounded-4xl bg-card p-5 text-foreground md:p-8" role="img" aria-label="A device change linked to risks, evidence, labels, and submission documents">
          <div className="flex items-center justify-between gap-3 rounded-2xl bg-secondary p-4"><span className="flex items-center gap-3 font-semibold"><RefreshCw className="size-5 text-primary" /> Design updated</span><span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold">Impact found</span></div>
          <div className="flex flex-col gap-2 py-4">
            {items.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-xs">{index + 1}</span>
                <span className="h-px w-6 bg-border" />
                <div className="flex flex-1 items-center justify-between rounded-xl border p-3"><span className="text-sm font-medium">{item}</span>{index > 0 && <FileSearch className="size-4 text-primary" />}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">Every change traced. Every document aligned.</p>
        </div>
      </div>
    </section>
  )
}
