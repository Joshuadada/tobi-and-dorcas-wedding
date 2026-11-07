import { useState } from 'react'
import { wedding } from '../config/wedding'

export function GiftRegistry() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(wedding.account.accountNumber)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = wedding.account.accountNumber
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        textArea.remove()
      }
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <section
      id="registry"
      className="bg-[#f1ebdc] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      aria-labelledby="registry-title"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
        <div data-reveal>
          <p className="mb-4 text-[10px] font-semibold tracking-[0.26em] text-champagne">
            HONOURING OUR BEGINNING
          </p>
          <h2
            id="registry-title"
            className="font-display text-5xl font-normal leading-[0.95] tracking-tight text-forest sm:text-7xl"
          >
            Gifts &amp;
            <br />
            <span className="italic">blessings.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#647267] sm:text-base">
            Your love, prayers, and presence as we say yes to forever mean the
            world to us. For friends and family who would love to celebrate us
            with a gift or financial blessing, our account details are below.
          </p>

          <div className="mt-7 flex items-center gap-3 text-xs text-[#647267]">
            <span className="text-champagne font-semibold tracking-[0.2em]">#REHOBOTH2026</span>
            <span>·</span>
            <span>With our gratitude</span>
          </div>
        </div>

        <div
          className="relative border border-champagne/40 bg-[#fbf8f0] p-6 shadow-sm sm:p-9"
          data-reveal
        >
          <div className="flex items-center justify-between border-b border-[#18372b]/10 pb-4">
            <div>
              <p className="text-[9px] font-semibold tracking-[0.25em] text-champagne">
                WEDDING REGISTRY &amp; ACCOUNT
              </p>
              <h3 className="mt-1 font-display text-2xl text-forest sm:text-3xl">
                Cash Gift Details
              </h3>
            </div>
            <span className="font-display text-2xl text-champagne" aria-hidden="true">
              ✳
            </span>
          </div>

          <dl className="mt-6 space-y-5 text-left">
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-[#7d877e]">
                BANK
              </dt>
              <dd className="mt-1 font-display text-xl text-forest sm:text-2xl">
                {wedding.account.bank}
              </dd>
            </div>

            <div>
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-[#7d877e]">
                ACCOUNT NUMBER
              </dt>
              <dd className="mt-1 flex flex-wrap items-center gap-3">
                <span className="font-display text-2xl font-semibold tracking-wider text-forest sm:text-3xl">
                  {wedding.account.accountNumber}
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex min-h-9 items-center justify-center border border-champagne bg-champagne/10 px-3.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-forest transition-colors hover:bg-champagne hover:text-white"
                  aria-label="Copy account number"
                >
                  {copied ? '✓ COPIED' : 'COPY NUMBER'}
                </button>
              </dd>
              <div aria-live="polite" className="sr-only">
                {copied ? 'Account number copied to clipboard' : ''}
              </div>
            </div>

            <div>
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-[#7d877e]">
                ACCOUNT NAME
              </dt>
              <dd className="mt-1 font-display text-xl text-forest sm:text-2xl">
                {wedding.account.accountName}
              </dd>
            </div>
          </dl>

          <div className="mt-7 border-t border-[#18372b]/10 pt-4 text-xs leading-6 text-[#647267]">
            <p>
              Kindly use <strong className="font-semibold text-forest">Rehoboth 2026</strong> or your name as the transfer remark or reference. Thank you so much for your generosity!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

