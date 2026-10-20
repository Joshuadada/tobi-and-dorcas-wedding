import { storyMoments } from '../config/wedding'

export function OurStory() {
  return (
    <section id="story" className="bg-[#fbf8f0] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20" data-reveal>
          <p className="mb-4 text-[10px] font-semibold tracking-[0.26em] text-champagne">
            A STORY IN FOUR LITTLE CHAPTERS
          </p>
          <h2 className="font-display text-5xl font-normal leading-[0.95] tracking-tight text-forest sm:text-7xl">
            From “Mentor” <span className="italic text-champagne">to</span> forever.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#66756a] sm:text-base">
            Two rejections, one unexpected conversation, and a yes that changed
            everything.
          </p>
        </div>

        <ol className="relative">
          <span
            className="absolute bottom-8 left-[7px] top-8 w-px bg-[#c99a45]/40 sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />
          {storyMoments.map((moment, index) => (
            <li
              key={moment.date}
              className="relative grid grid-cols-[32px_1fr] gap-4 pb-12 last:pb-0 sm:grid-cols-[1fr_42px_1fr] sm:gap-5 sm:pb-16"
              data-reveal
            >
              <div className="relative col-start-1 row-start-1 flex justify-center sm:col-start-2">
                <span className="mt-1.5 size-4 rounded-full border-[5px] border-[#fbf8f0] bg-champagne ring-1 ring-champagne/50" />
              </div>
              <article
                className={`col-start-2 row-start-1 sm:col-span-1 ${
                  index % 2 === 0
                    ? 'sm:col-start-1 sm:row-start-1 sm:pr-8 sm:text-right'
                    : 'sm:col-start-3 sm:row-start-1 sm:pl-8'
                }`}
              >
                <p className="text-[9px] font-semibold tracking-[0.23em] text-champagne sm:text-[10px]">
                  {moment.date}
                </p>
                <h3 className="mt-2 font-display text-3xl leading-tight text-forest sm:text-4xl">
                  {moment.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#647267] sm:text-base sm:leading-8">
                  {moment.text}
                </p>
              </article>
              {index === 0 && (
                <div className="hidden items-start justify-center pt-2 sm:col-start-3 sm:row-start-1 sm:flex" aria-hidden="true">
                  <span className="font-display text-5xl italic text-[#d9c89f]/65">01</span>
                </div>
              )}
              {index === 1 && (
                <div className="hidden items-start justify-center pt-2 sm:col-start-1 sm:row-start-1 sm:flex" aria-hidden="true">
                  <span className="font-display text-5xl italic text-[#d9c89f]/65">02</span>
                </div>
              )}
              {index === 2 && (
                <div className="hidden items-start justify-center pt-2 sm:col-start-3 sm:row-start-1 sm:flex" aria-hidden="true">
                  <span className="font-display text-5xl italic text-[#d9c89f]/65">03</span>
                </div>
              )}
              {index === 3 && (
                <div className="hidden items-start justify-center pt-2 sm:col-start-1 sm:row-start-1 sm:flex" aria-hidden="true">
                  <span className="font-display text-5xl italic text-[#d9c89f]/65">04</span>
                </div>
              )}
            </li>
          ))}
        </ol>

        <p
          className="mx-auto mt-14 max-w-3xl text-center font-display text-2xl italic leading-relaxed text-forest sm:mt-20 sm:text-4xl"
          data-reveal
        >
          And now, the mentor and the girl who said no twice are ready to begin
          their forever.
        </p>
      </div>
    </section>
  )
}
