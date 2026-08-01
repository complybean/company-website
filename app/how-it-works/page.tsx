import type { Metadata } from 'next'
import { Cable, Check, Files, MessageSquareText } from 'lucide-react'
import { PageHero, PageShell } from '@/components/page-shell'
import { PathwayFlowVisual } from '@/components/regulatory-visuals'

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
        <PathwayFlowVisual />
      </PageHero>
      <section className="section-shell py-16 md:py-24">
        <div className="mb-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="section-kicker mb-5">From question to direction</p><h2 className="section-title">A process your whole team can follow.</h2></div>
          <div className="flex items-start gap-4 rounded-3xl border bg-card p-5 shadow-sm lg:justify-self-end"><span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent"><MessageSquareText className="size-5" /></span><p className="max-w-lg leading-7 text-muted-foreground">The experience is conversational, but the underlying reasoning remains structured and connected.</p></div>
        </div>
        <ol className="relative grid gap-5 lg:grid-cols-3 lg:before:absolute lg:before:left-[16%] lg:before:right-[16%] lg:before:top-16 lg:before:border-t-2 lg:before:border-dashed lg:before:border-primary/15">
          {steps.map(({ icon: Icon, number, title, text, note }, index) => (
            <li key={number} className="soft-card lift-card relative z-10 flex min-h-96 flex-col justify-between rounded-4xl p-7">
              <div className="flex items-center justify-between"><span className="rounded-full bg-background px-3 py-1 font-mono text-xs text-muted-foreground">STEP {number}</span><span className={`flex size-14 items-center justify-center rounded-2xl ${index === 1 ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'} shadow-[0_12px_25px_-16px_rgba(18,55,42,.8)]`}><Icon className="size-6" /></span></div>
              <div><h3 className="text-3xl font-semibold">{title}</h3><p className="mt-4 text-lg leading-8 text-muted-foreground">{text}</p><p className="mt-6 flex items-start gap-2 border-t pt-5 font-medium text-primary"><Check className="mt-0.5 size-5 shrink-0" />{note}</p></div>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  )
}
