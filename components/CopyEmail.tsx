'use client'

import { useEffect, useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyEmail({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  const copyEmail = async () => {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard API unavailable')

      await navigator.clipboard.writeText('admin@complybean.com')
      setCopyFailed(false)
      setCopied(true)

      if (resetTimer.current) clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
      setCopyFailed(true)
    }
  }

  return (
    <div className={compact ? "text-sm text-foreground" : "text-sm text-background/80"}>
      {!compact && (
        <p className="mb-2">
          You can also reach us directly at
        </p>
      )}

      <div className="flex items-center gap-1">
        <a href="mailto:admin@complybean.com" className={`rounded-lg py-2 font-semibold ${compact ? "hover:text-primary" : "hover:text-accent"}`}>
          admin@complybean.com
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label={copied ? 'Email copied' : 'Copy email address'}
          className={`flex size-10 items-center justify-center rounded-full ${compact ? "hover:bg-secondary hover:text-primary" : "hover:bg-background/10 hover:text-accent"}`}
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </button>
      </div>

      <p className={`text-xs ${compact ? "text-muted-foreground" : "text-background/80"}`} role="status" aria-live="polite">
        {copied ? 'Copied!' : copyFailed ? 'Copy unavailable—use the email link.' : <span className="sr-only">Email ready to copy</span>}
      </p>
    </div>
  )
}
