import Image from 'next/image'
import {
  ArrowRight,
  Bot,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  FlaskConical,
  Lightbulb,
  Microscope,
  Network,
  Rocket,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Tags,
  UserRoundCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

function VisualFrame({ children, label, className = '' }: { children: React.ReactNode; label: string; className?: string }) {
  return (
    <div className={`visual-grid relative isolate min-h-[25rem] overflow-hidden rounded-[2rem] border border-primary/10 bg-secondary/70 p-5 shadow-[0_28px_70px_-42px_rgba(18,55,42,.55)] sm:p-7 ${className}`} role="img" aria-label={label}>
      <div className="absolute -right-20 -top-24 size-72 rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 size-72 rounded-full bg-primary/10 blur-3xl" />
      {children}
    </div>
  )
}

function MiniCard({ icon: Icon, label, tone = 'light' }: { icon: LucideIcon; label: string; tone?: 'light' | 'green' | 'lime' }) {
  const tones = {
    light: 'border bg-card text-foreground',
    green: 'border-primary/20 bg-primary text-primary-foreground',
    lime: 'border-accent bg-accent text-accent-foreground',
  }

  return (
    <div className={`flex items-center gap-2.5 rounded-2xl px-3.5 py-3 text-xs font-semibold shadow-[0_12px_25px_-16px_rgba(18,55,42,.8)] sm:text-sm ${tones[tone]}`}>
      <span className={`flex size-8 shrink-0 items-center justify-center rounded-xl ${tone === 'green' ? 'bg-white/12' : 'bg-primary/10 text-primary'}`}><Icon className="size-4" /></span>
      <span>{label}</span>
    </div>
  )
}

export function RegulatoryJourneyVisual() {
  return (
    <VisualFrame label="ComplyBean at the center of connected FDA 510(k) regulatory decisions" className="min-h-[31rem]">
      <div className="absolute left-5 top-5 rounded-full border bg-card/90 px-3 py-1.5 text-[.62rem] font-bold uppercase tracking-[.18em] text-primary shadow-sm sm:left-7 sm:top-7">FDA 510(k) pathway</div>
      <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-foreground px-3 py-1.5 text-[.62rem] font-bold text-background sm:right-7 sm:top-7"><span className="size-1.5 rounded-full bg-accent" />Case connected</div>

      <div className="absolute inset-10 top-20 rounded-full border border-primary/15 sm:inset-14 sm:top-24" />
      <div className="absolute inset-24 top-32 rounded-full border border-dashed border-primary/20 sm:inset-28 sm:top-36" />
      <svg className="pointer-events-none absolute inset-0 size-full text-primary/25" viewBox="0 0 600 500" preserveAspectRatio="none" aria-hidden="true">
        <path d="M75 165 C175 80 425 80 525 165 C590 240 520 390 300 405 C80 390 10 240 75 165Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" />
      </svg>

      <div className="absolute left-4 top-28 z-20 sm:left-7 sm:top-32"><MiniCard icon={Route} label="Classification" /></div>
      <div className="absolute right-4 top-36 z-20 sm:right-7 sm:top-40"><MiniCard icon={Tags} label="Product code" /></div>
      <div className="absolute bottom-16 left-5 z-20 sm:bottom-20 sm:left-10"><MiniCard icon={SearchCheck} label="Predicate" /></div>
      <div className="absolute bottom-12 right-5 z-20 sm:bottom-16 sm:right-10"><MiniCard icon={FileCheck2} label="Evidence aligned" tone="lime" /></div>

      <div className="absolute left-1/2 top-1/2 z-10 flex size-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/10 bg-card shadow-[0_22px_0_rgba(31,93,66,.08),0_38px_65px_-35px_rgba(18,55,42,.8)] sm:size-56">
        <div className="absolute inset-3 rounded-full border border-primary/10" />
        <Image src="/images/complybean-mark.png" alt="ComplyBean loop mark" width={220} height={220} className="relative size-36 object-contain sm:size-48" priority />
      </div>
    </VisualFrame>
  )
}

export function DecisionMapVisual() {
  const items = [
    { icon: Route, label: 'Pathway', pos: 'left-4 top-16 sm:left-7' },
    { icon: SearchCheck, label: 'Predicate', pos: 'right-4 top-16 sm:right-7' },
    { icon: FlaskConical, label: 'Testing', pos: 'bottom-12 left-4 sm:left-7' },
    { icon: ClipboardCheck, label: 'Evidence', pos: 'bottom-12 right-4 sm:right-7' },
  ]
  return (
    <VisualFrame label="Four connected regulatory decisions organized around ComplyBean">
      <svg className="absolute inset-0 size-full text-primary/25" viewBox="0 0 500 400" preserveAspectRatio="none" aria-hidden="true">
        <path d="M105 95 L250 200 L395 95 M105 315 L250 200 L395 315" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 7" />
      </svg>
      {items.map(({ icon, label, pos }) => <div key={label} className={`absolute ${pos}`}><MiniCard icon={icon} label={label} /></div>)}
      <div className="absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-primary/15 bg-primary text-center text-primary-foreground shadow-[0_22px_0_rgba(18,55,42,.12),0_35px_55px_-30px_rgba(18,55,42,.8)]">
        <Network className="size-7 text-accent" /><span className="mt-3 text-sm font-semibold">One connected<br />regulatory case</span>
      </div>
    </VisualFrame>
  )
}

export function TeamVisual() {
  const people = [
    { icon: Lightbulb, title: 'Founder', detail: 'Product direction', className: '-rotate-3 -translate-x-4' },
    { icon: Microscope, title: 'Researcher', detail: 'Scientific evidence', className: 'z-10 translate-x-3 -translate-y-2' },
    { icon: Rocket, title: 'Growing team', detail: 'Submission readiness', className: 'rotate-3 -translate-x-1 -translate-y-4' },
  ]
  return (
    <VisualFrame label="Founders, researchers, and growing teams connected by one regulatory workspace">
      <div className="relative mx-auto flex min-h-[21rem] max-w-sm flex-col items-center justify-center pt-8">
        {people.map(({ icon: Icon, title, detail, className }, index) => (
          <div key={title} className={`flex w-64 items-center gap-4 rounded-3xl border bg-card p-4 shadow-[0_18px_35px_-22px_rgba(18,55,42,.85)] ${className}`}>
            <span className={`flex size-12 items-center justify-center rounded-2xl ${index === 1 ? 'bg-accent' : 'bg-secondary text-primary'}`}><Icon className="size-5" /></span>
            <div><p className="font-semibold">{title}</p><p className="mt-0.5 text-xs text-muted-foreground">{detail}</p></div>
          </div>
        ))}
        <div className="absolute bottom-0 right-1 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg"><Sparkles className="mr-2 inline size-4 text-accent" />Shared clarity</div>
      </div>
    </VisualFrame>
  )
}

export function EvidenceStackVisual() {
  return (
    <VisualFrame label="A layered regulatory evidence stack being checked for alignment">
      <div className="relative mx-auto flex min-h-[21rem] max-w-sm items-center justify-center">
        <div className="absolute size-56 translate-x-7 translate-y-7 rounded-[2rem] border border-primary/10 bg-primary/10" />
        <div className="absolute size-56 translate-x-3 translate-y-3 rounded-[2rem] border border-primary/10 bg-card/70 shadow-sm" />
        <div className="relative w-64 rounded-[2rem] border bg-card p-5 shadow-[0_28px_50px_-30px_rgba(18,55,42,.8)]">
          <div className="flex items-center justify-between"><span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary"><FileSearch className="size-5" /></span><span className="rounded-full bg-accent px-3 py-1 text-[.65rem] font-bold uppercase tracking-wider">Aligned</span></div>
          <div className="mt-6 space-y-3"><span className="block h-2 w-3/4 rounded-full bg-primary/20" /><span className="block h-2 w-full rounded-full bg-primary/10" /><span className="block h-2 w-5/6 rounded-full bg-primary/10" /></div>
          <div className="mt-7 grid grid-cols-3 gap-2">{['Risk', 'Test', 'Label'].map((item) => <span key={item} className="rounded-xl bg-secondary py-2 text-center text-[.65rem] font-semibold">{item}</span>)}</div>
        </div>
        <div className="absolute bottom-3 right-0 flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl"><ShieldCheck className="size-7" /></div>
      </div>
    </VisualFrame>
  )
}

export function PathwayFlowVisual() {
  const steps = [
    { icon: Bot, label: 'Describe', detail: 'Product context' },
    { icon: Route, label: 'Explore', detail: 'Pathway reasoning' },
    { icon: UserRoundCheck, label: 'Decide', detail: 'Human judgment' },
  ]
  return (
    <VisualFrame label="A three-step flow from describing a device to an informed human decision" className="!min-h-0 py-10">
      <div className="relative z-10 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        {steps.map(({ icon: Icon, label, detail }, index) => (
          <div key={label} className="contents">
            <div className="rounded-3xl border bg-card p-5 shadow-[0_16px_35px_-26px_rgba(18,55,42,.8)]">
              <div className="flex items-center gap-3"><span className={`flex size-11 items-center justify-center rounded-2xl ${index === 2 ? 'bg-accent' : 'bg-secondary text-primary'}`}><Icon className="size-5" /></span><div><p className="font-semibold">{label}</p><p className="text-xs text-muted-foreground">{detail}</p></div></div>
            </div>
            {index < steps.length - 1 && <span className="hidden size-9 items-center justify-center rounded-full border bg-card text-primary md:flex"><ArrowRight className="size-4" /></span>}
          </div>
        ))}
      </div>
    </VisualFrame>
  )
}

export function ReasoningVisual() {
  return (
    <VisualFrame label="Regulatory inputs transformed into transparent reasoning and an informed human decision">
      <div className="relative z-10 flex min-h-[21rem] flex-col justify-center gap-3">
        <div className="grid grid-cols-2 gap-3">
          <MiniCard icon={Microscope} label="Product evidence" />
          <MiniCard icon={FileSearch} label="FDA landscape" />
        </div>
        <div className="mx-auto h-5 border-l-2 border-dashed border-primary/30" />
        <div className="mx-auto flex w-4/5 items-center gap-3 rounded-3xl bg-primary p-5 text-primary-foreground shadow-[0_18px_0_rgba(18,55,42,.12)]"><span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/10"><Network className="size-5 text-accent" /></span><div><p className="text-xs font-semibold uppercase tracking-wider text-accent">Visible reasoning</p><p className="mt-1 text-sm font-semibold">Understand why the path fits</p></div></div>
        <div className="mx-auto h-5 border-l-2 border-dashed border-primary/30" />
        <div className="mx-auto"><MiniCard icon={UserRoundCheck} label="Informed human decision" tone="lime" /></div>
      </div>
    </VisualFrame>
  )
}
