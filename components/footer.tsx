import Image from 'next/image'

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
      <div className="flex items-center gap-2 text-foreground"><Image src="/images/complybean-mark.png" alt="" width={32} height={32} className="size-8 object-contain" /><span className="font-semibold">Complybean</span></div>
      <p>Serious compliance. Softer landing.</p>
      <p>© 2026 Complybean</p>
    </footer>
  )
}
