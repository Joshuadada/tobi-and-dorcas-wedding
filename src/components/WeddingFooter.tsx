import { wedding } from '../config/wedding'

export function WeddingFooter() {
  return (
    <footer className="bg-deep-forest px-5 pb-8 pt-16 text-cream sm:px-8 sm:pb-10 sm:pt-20 lg:px-12">
      <div className="mx-auto max-w-6xl text-center" data-reveal>
        <p className="text-[9px] font-semibold tracking-[0.28em] text-soft-gold">
          WITH FULL HEARTS, AND OUR FAMILIES
        </p>
        <h2 className="mt-5 font-display text-4xl font-normal leading-tight sm:text-6xl">
          We said yes to forever.
          <span className="mt-1 block italic text-soft-gold">
            We would love you there.
          </span>
        </h2>
        <p className="mt-5 text-sm text-white/65">
          Thank you for being part of the beginning.
        </p>
        <p className="mt-7 font-display text-2xl">
          {wedding.shortNames}
        </p>
        <p className="mt-2 text-[10px] tracking-[0.2em] text-white/55">
          {wedding.dateShort}
        </p>
        <a
          href="#rsvp"
          className="mt-8 inline-flex min-h-12 items-center justify-center border border-soft-gold px-7 text-[10px] font-semibold tracking-[0.16em] text-soft-gold transition-colors hover:bg-soft-gold hover:text-deep-forest"
        >
          RSVP
        </a>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/15 pt-5 text-center text-[9px] tracking-[0.15em] text-white/45 sm:flex-row sm:text-left">
        <p>{wedding.families[0]}</p>
        <a href="#home" className="font-display text-xl text-soft-gold" aria-label="Back to top">
          D <span className="italic">&amp;</span> O
        </a>
        <p>{wedding.families[1]}</p>
      </div>
    </footer>
  )
}
