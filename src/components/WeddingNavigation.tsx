import { useState } from 'react'

const links = [
  { href: '#story', label: 'Our Story' },
  { href: '#details', label: 'The Wedding' },
  { href: '#dress-code', label: 'Dress Code' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#rsvp', label: 'RSVP' },
]

export function WeddingNavigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#18372b]/10 bg-[#fbf8f0]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <a
          href="#home"
          aria-label="Dorcas and Oluwatobi, home"
          className="font-display text-2xl font-semibold tracking-tight text-forest"
          onClick={() => setMenuOpen(false)}
        >
          D<span className="mx-1 text-champagne">&</span>O
        </a>

        <p className="hidden text-[10px] font-semibold tracking-[0.24em] text-[#647267] sm:block">
          LAGOS <span className="mx-2 text-champagne">·</span> 21 NOVEMBER 2026
        </p>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] font-medium tracking-[0.12em] transition-colors hover:text-champagne ${
                link.label === 'RSVP' ? 'text-forest' : 'text-[#485a4e]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="flex size-11 items-center justify-center text-forest md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
            <span className={`h-px w-full bg-current transition-transform ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`h-px w-full bg-current transition-transform ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#18372b]/10 bg-[#fbf8f0] px-6 py-3 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block border-b border-[#18372b]/10 py-3 text-sm text-forest last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
