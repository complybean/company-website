'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const navigation = [
  { href: '/what-we-do/', label: 'What we do' },
  { href: '/who-its-for/', label: "Who it's for" },
  { href: '/platform/', label: 'Platform' },
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/about/', label: 'About' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3 rounded-lg font-semibold tracking-tight" aria-label="ComplyBean home">
          <Image src="/images/complybean-mark-transparent.png" alt="" width={52} height={52} className="size-12 object-contain" priority />
          <span className="text-xl sm:text-[1.35rem]">ComplyBean</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href.slice(0, -1) ? 'page' : undefined} className="rounded-full px-3 py-2.5 text-muted-foreground hover:bg-secondary hover:text-foreground aria-[current=page]:bg-secondary aria-[current=page]:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#start" className="hidden min-h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background hover:bg-primary lg:inline-flex">
            Let&apos;s talk <ArrowUpRight className="size-4" />
          </Link>

          <div className="relative lg:hidden" ref={menuRef}>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border bg-card hover:bg-secondary"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>

            {menuOpen && (
              <nav id="mobile-navigation" className="absolute right-0 top-13 flex w-64 flex-col gap-1 rounded-2xl border bg-card p-2 shadow-xl" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href} aria-current={pathname === item.href.slice(0, -1) ? 'page' : undefined} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 font-medium hover:bg-secondary aria-[current=page]:bg-secondary">
                    {item.label}
                  </Link>
                ))}
                <Link href="/#start" onClick={() => setMenuOpen(false)} className="mt-1 flex items-center justify-between rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground">
                  Let&apos;s talk <ArrowUpRight className="size-4" />
                </Link>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
