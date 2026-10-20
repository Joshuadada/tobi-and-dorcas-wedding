import { wedding } from '../config/wedding'

export function WeddingDetails() {
  return (
    <section
      id="details"
      className="bg-[#f1ebdc] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      aria-labelledby="details-title"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
        <div data-reveal>
          <p className="mb-4 text-[10px] font-semibold tracking-[0.26em] text-champagne">
            THE DAY WE’VE BEEN DREAMING OF
          </p>
          <h2
            id="details-title"
            className="font-display text-5xl font-normal leading-[0.95] tracking-tight text-forest sm:text-7xl"
          >
            Save the
            <br />
            <span className="italic">date.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#647267] sm:text-base">
            With our families, we invite you to share in the joy of our wedding
            day.
          </p>
          <div className="mt-7 flex items-center gap-4 border-t border-[#18372b]/15 pt-5">
            <span className="font-display text-4xl text-champagne" aria-hidden="true">21</span>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-forest">
                NOVEMBER 2026
              </p>
              <p className="mt-1 text-xs text-[#647267]">Saturday · Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="relative border-y border-champagne/45 py-8 sm:py-10" data-reveal>
          <span className="absolute -left-px top-0 h-10 w-px bg-champagne" aria-hidden="true" />
          <span className="absolute -right-px bottom-0 h-10 w-px bg-champagne" aria-hidden="true" />
          <div className="grid gap-7 sm:grid-cols-[0.65fr_1fr] sm:gap-10">
            <div>
              <p className="text-[9px] font-semibold tracking-[0.23em] text-champagne">
                THE CEREMONY
              </p>
              <p className="mt-3 font-display text-3xl text-forest">11:00 AM</p>
              <p className="mt-1 text-xs text-[#647267]">Prompt</p>
            </div>
            <div>
              <p className="text-[9px] font-semibold tracking-[0.23em] text-champagne">
                THE VENUE
              </p>
              <h3 className="mt-3 font-display text-3xl text-forest">
                {wedding.venue}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[#647267]">
                {wedding.address}
              </p>
              <a
                href={wedding.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-10 items-center gap-2 border-b border-champagne pb-1 text-[10px] font-semibold tracking-[0.16em] text-forest transition-colors hover:text-champagne"
              >
                GET DIRECTIONS <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
