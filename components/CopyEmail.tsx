'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyEmail({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('admin@complybean.com')
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="text-sm text-background/80">
      {!compact && (
        <p className="mb-2">
          You can also reach us directly at
        </p>
      )}

      <button
        onClick={copyEmail}
        className="inline-flex items-center gap-2 font-semibold hover:text-accent transition-colors"
      >
        admin@complybean.com

        {copied ? (
          <Check className="size-4" />
        ) : (
          <Copy className="size-4" />
        )}
      </button>

      {copied && !compact && (
        <p className="mt-2 text-xs text-accent">
          Copied!
        </p>
      )}
    </div>
  )
}
