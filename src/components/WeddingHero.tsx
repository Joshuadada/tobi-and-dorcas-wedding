import { useEffect, useState } from 'react'
import { wedding } from '../config/wedding'

type TimeRemaining = {
  days: number
  hours: number
  minutes: number
  seconds: number
  hasStarted: boolean
}

function getTimeRemaining(): TimeRemaining {
  const difference = Math.max(
    0,
    new Date(wedding.eventTime).getTime() - Date.now(),
  )
  const secondsRemaining = Math.floor(difference / 1000)

  return {
    days: Math.floor(secondsRemaining / 86_400),
    hours: Math.floor((secondsRemaining % 86_400) / 3_600),
    minutes: Math.floor((secondsRemaining % 3_600) / 60),
    seconds: secondsRemaining % 60,
    hasStarted: difference === 0,
  }
}

function CountdownTimer() {
  const [remaining, setRemaining] = useState(getTimeRemaining)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(getTimeRemaining())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const units = [
    { label: 'Days', value: remaining.days },
    { label: 'Hours', value: remaining.hours },
    { label: 'Minutes', value: remaining.minutes },
    { label: 'Seconds', value: remaining.seconds },
  ]

  return (
    <div aria-label={remaining.hasStarted ? 'The wedding day has arrived' : 'Time until the wedding'}>
      <p className="mb-3 text-[9px] font-semibold tracking-[0.24em] text-white/55">
        {remaining.hasStarted ? 'TODAY IS THE DAY' : 'COUNTING DOWN TO OUR DAY'}
      </p>
      <div className="flex gap-5 sm:gap-7">
        {units.map((unit) => (
          <div key={unit.label} className="min-w-10">
            <p className="font-display text-2xl leading-none text-white sm:text-3xl">
              {String(unit.value).padStart(2, '0')}
            </p>
            <p className="mt-2 text-[9px] tracking-[0.12em] text-white/55">
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WeddingHero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-deep-forest text-cream"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 -right-20 -top-20 hidden bg-cover bg-center opacity-30 blur-3xl md:block"
        style={{ backgroundImage: 'url(/images/wedding/IMG_3398.webp)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-forest via-deep-forest/95 to-forest/60" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.04fr_0.96fr] md:gap-12 md:py-16 lg:px-12 lg:py-20">
        <div className="relative z-10 max-w-2xl" data-reveal>
          <p className="mb-5 text-[10px] font-semibold tracking-[0.27em] text-soft-gold sm:text-xs">
            TOGETHER WITH OUR FAMILIES
          </p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(3.4rem,10vw,7.1rem)] font-normal leading-[0.83] tracking-[-0.055em] text-cream"
          >
            Dorcas
            {' '}
            <span className="ml-1 inline-block align-middle font-display text-[0.3em] font-normal italic tracking-[0.02em] text-soft-gold sm:ml-2">
              Toluwani
            </span>
            <span className="my-3 block pl-[0.8em] font-display text-[0.46em] italic leading-none text-soft-gold sm:my-5">
              &amp;
            </span>
            Oluwatobi
            {' '}
            <span className="ml-1 inline-block align-middle font-display text-[0.3em] font-normal italic tracking-[0.02em] text-soft-gold sm:ml-2">
              David
            </span>
          </h1>
          <p className="mt-7 font-display text-xl italic text-white/80 sm:text-2xl">
            Two hearts. One beautiful beginning.
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65 sm:text-base">
            We would be honoured to have you with us as we celebrate a love that
            found its way home.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-medium tracking-[0.15em] text-white/75 sm:text-xs">
            <span>{wedding.date}</span>
            <span className="text-soft-gold" aria-hidden="true">✳</span>
            <span>{wedding.city}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#story"
              className="inline-flex min-h-12 items-center justify-center bg-soft-gold px-6 text-[10px] font-semibold tracking-[0.15em] text-deep-forest transition-colors hover:bg-cream"
            >
              EXPLORE OUR WEDDING
            </a>
            <a
              href="#details"
              className="inline-flex min-h-12 items-center justify-center border border-white/35 px-6 text-[10px] font-semibold tracking-[0.15em] text-cream transition-colors hover:border-soft-gold hover:text-soft-gold"
            >
              WEDDING DETAILS
            </a>
          </div>

          <div className="mt-10 border-t border-white/15 pt-5">
            <CountdownTimer />
          </div>
        </div>

        <figure
          className="relative mx-auto w-full max-w-[480px] md:ml-auto md:mr-0"
          data-reveal
        >
          <div className="absolute -inset-3 border border-soft-gold/45" aria-hidden="true" />
          <div className="absolute -inset-5 border border-white/10" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden bg-forest">
            <div
              className="photo-blur absolute inset-0 bg-cover bg-center opacity-70"
              style={{ backgroundImage: 'url(/images/wedding/IMG_3398.webp)' }}
              aria-hidden="true"
            />
            <img
              src="/images/wedding/IMG_3398.webp"
              alt="Dorcas and Oluwatobi smiling together in their gold and ivory outfits"
              className="relative h-full w-full object-contain"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-forest/70 to-transparent p-5 pt-14">
              <p className="text-right text-[9px] font-medium tracking-[0.2em] text-white/80">
                A LOVE, STILL UNFOLDING
              </p>
            </div>
          </div>
          <figcaption className="mt-5 text-center font-display text-lg italic text-white/70">
            Our next chapter begins with you.
          </figcaption>
        </figure>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-champagne/60 to-transparent" aria-hidden="true" />
    </section>
  )
}
