import type { Metadata } from 'next'
import { ArrowRight, Lightbulb, Microscope, Rocket } from 'lucide-react'
import { PageHero, PageShell } from '@/components/page-shell'
import { TeamVisual } from '@/components/regulatory-visuals'

export const metadata: Metadata = {
  title: "Who It's For",
  description: 'ComplyBean supports early-stage medical-device founders, researchers, and multidisciplinary teams preparing FDA 510(k) submissions.',
}

const groups = [
  { icon: Lightbulb, title: 'Founders', text: 'Make early product and market decisions with a clearer view of the regulatory work ahead.', benefit: 'Start with direction before committing time and budget.' },
  { icon: Microscope, title: 'Researchers', text: 'Connect promising science to the evidence, controls, and product story regulators need to understand.', benefit: 'Turn research into a credible development path.' },
  { icon: Rocket, title: 'Growing teams', text: 'Introduce repeatable regulatory work without immediately building a large specialist department.', benefit: 'Create structure that can grow with the product.' },
]

export default function WhoItsForPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Who it is for" title="Built for medical-device innovators without an in-house regulatory team." description="ComplyBean helps founders, researchers, and small multidisciplinary teams navigate high-stakes FDA 510(k) decisions with greater clarity and confidence.">
        <TeamVisual />
      </PageHero>
      <section className="section-shell grid gap-12 py-16 md:py-24 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-kicker mb-5">Designed around your reality</p>
          <h2 className="section-title">Expert structure, without the full regulatory department.</h2>
          <p className="body-large mt-6">Whether the work begins with a product idea, scientific research, or a growing submission plan, the platform meets your team at its current stage.</p>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border bg-card p-4 text-sm font-medium text-primary shadow-sm"><span className="flex size-9 items-center justify-center rounded-xl bg-secondary"><ArrowRight className="size-4" /></span>Move from uncertainty to a clearer next step.</div>
        </div>
        <div className="flex flex-col gap-4">
          {groups.map(({ icon: Icon, title, text, benefit }, index) => (
            <article key={title} className="soft-card lift-card grid gap-6 rounded-3xl p-6 md:grid-cols-[auto_1fr] md:p-8">
              <span className={`flex size-14 items-center justify-center rounded-2xl ${index === 1 ? 'bg-accent text-accent-foreground' : 'bg-secondary text-primary'}`}><Icon className="size-6" /></span>
              <div><div className="flex items-center justify-between gap-4"><h3 className="text-3xl font-semibold">{title}</h3><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div>
              <p className="mt-3 text-lg leading-8 text-muted-foreground">{text}</p>
              <p className="mt-6 border-t pt-5 font-medium text-primary">{benefit}</p></div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
