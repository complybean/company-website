import type { Metadata } from 'next'
import { Check, ClipboardList, FileSearch, RefreshCw, Send, ShieldCheck, Tags, TestTube2 } from 'lucide-react'
import { PageHero, PageShell } from '@/components/page-shell'
import { EvidenceStackVisual } from '@/components/regulatory-visuals'

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Explore ComplyBean, an AI-enabled regulatory intelligence platform supporting medical-device teams preparing FDA 510(k) submissions.',
}

const connections = [
  { icon: RefreshCw, label: 'Product change' },
  { icon: ClipboardList, label: 'Risk review' },
  { icon: TestTube2, label: 'Test evidence' },
  { icon: Tags, label: 'Labelling' },
  { icon: Send, label: 'Submission' },
]

export default function PlatformPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Platform" title="Guided regulatory intelligence for FDA 510(k) preparation." description="Work through device classification, product code, predicate selection, and supporting evidence in one conversational experience.">
        <EvidenceStackVisual />
      </PageHero>
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
        <div className="absolute -right-40 -top-56 size-[34rem] rounded-full border border-white/10" /><div className="absolute -right-24 -top-40 size-[26rem] rounded-full border border-white/10" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-16">
          <div>
            <ShieldCheck className="mb-8 size-12 text-accent" />
            <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-accent">Continuous alignment</p>
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em]">As your regulatory case evolves, stay aware of what changes.</h2>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/75">ComplyBean helps surface inconsistencies, evidence that may no longer align with your product, and relevant regulatory changes.</p>
            <ul className="mt-8 space-y-3">
              {['Make regulatory reasoning easier to follow', 'Keep product details and evidence aligned', 'Support informed decisions as your case evolves'].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex size-7 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check className="size-4" /></span>{item}</li>)}
            </ul>
          </div>
          <div className="rounded-4xl bg-card p-5 text-foreground shadow-[0_35px_75px_-45px_rgba(0,0,0,.7)] md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-secondary p-4"><span className="flex items-center gap-3 font-semibold"><RefreshCw className="size-5 text-primary" /> Design updated</span><span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold">Impact found</span></div>
            <div className="relative flex flex-col gap-2 py-5 before:absolute before:bottom-9 before:left-4 before:top-9 before:border-l before:border-dashed before:border-primary/25">
              {connections.map(({ icon: Icon, label }, index) => <div key={label} className="relative flex items-center gap-3"><span className={`z-10 flex size-9 shrink-0 items-center justify-center rounded-xl border ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-background text-primary'}`}><Icon className="size-4" /></span><span className="h-px w-4 bg-border" /><div className="flex flex-1 items-center justify-between rounded-xl border bg-card p-3"><span className="text-sm font-medium">{label}</span>{index > 0 && <FileSearch className="size-4 text-primary" />}</div></div>)}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm"><span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Check className="size-4" /></span><div><p className="font-semibold">Connections reviewed</p><p className="text-xs text-muted-foreground">Your team keeps the final decision.</p></div></div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
