import type { Metadata } from 'next'
import Image from 'next/image'
import { Lightbulb, Microscope, Rocket } from 'lucide-react'
import { PageHero, PageShell } from '@/components/page-shell'

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
      <PageHero eyebrow="Who it is for" title="Built for medical-device innovators without an in-house regulatory team." description="ComplyBean helps founders, researchers, and small multidisciplinary teams navigate high-stakes FDA 510(k) decisions with greater clarity and confidence." />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div className="overflow-hidden rounded-4xl border bg-secondary lg:sticky lg:top-24">
          <Image src="/images/illustrations/medical-research.svg" alt="A medical researcher studying scientific results" width={855} height={578} className="aspect-[4/3] size-full object-contain p-6 md:p-10" priority />
        </div>
        <div className="flex flex-col gap-4">
          {groups.map(({ icon: Icon, title, text, benefit }) => (
            <article key={title} className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
              <span className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground"><Icon className="size-6" /></span>
              <h2 className="text-3xl font-semibold">{title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{text}</p>
              <p className="mt-6 border-t pt-5 font-medium text-primary">{benefit}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
