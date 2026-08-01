import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import CopyEmail from './CopyEmail'

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1fr_auto_auto] md:px-8">
        <div className="max-w-xs">
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg text-foreground" aria-label="ComplyBean home">
            <Image src="/images/complybean-mark.png" alt="" width={32} height={32} className="size-8 object-contain" />
            <span className="font-semibold">ComplyBean</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Serious compliance. Softer landing.</p>
        </div>

        <nav className="flex flex-col items-start gap-2 text-sm" aria-label="Footer navigation">
          <p className="mb-1 font-semibold text-foreground">Explore</p>
          <Link href="/what-we-do/" className="rounded py-1 text-muted-foreground hover:text-primary">What we do</Link>
          <Link href="/who-its-for/" className="rounded py-1 text-muted-foreground hover:text-primary">Who it&apos;s for</Link>
          <Link href="/platform/" className="rounded py-1 text-muted-foreground hover:text-primary">Platform</Link>
          <Link href="/how-it-works/" className="rounded py-1 text-muted-foreground hover:text-primary">How it works</Link>
          <Link href="/about/" className="rounded py-1 text-muted-foreground hover:text-primary">About</Link>
        </nav>

        <div>
          <p className="mb-1 text-sm font-semibold text-foreground">Get in touch</p>
          <CopyEmail compact />
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-sm text-muted-foreground md:px-8">
          <p>© 2026 ComplyBean</p>
          <a href="#top" className="inline-flex min-h-10 items-center gap-2 rounded-full px-3 hover:bg-secondary hover:text-foreground">Back to top <ArrowUp className="size-4" /></a>
        </div>
      </div>
    </footer>
  )
}
