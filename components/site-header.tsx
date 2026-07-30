import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
      <a href="#" className="flex items-center gap-2 font-semibold" aria-label="Complybean home">
        <Image src="/images/complybean-mark.png" alt="" width={40} height={40} className="size-9 object-contain" />
        <span>Complybean</span>
      </a>
      <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Main navigation">
        <a href="#what-we-do" className="hover:text-primary">What we do</a>
        <a href="#people" className="hover:text-primary">Who it&apos;s for</a>
        <a href="#how" className="hover:text-primary">How it works</a>
      </nav>
      <a href="#start" className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-85">Get started</a>
    </header>
  )
}
