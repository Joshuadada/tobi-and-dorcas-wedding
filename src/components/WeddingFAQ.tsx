import { useState } from 'react'
import { weddingQuestions } from '../config/wedding'

export function WeddingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="questions"
      className="bg-[#fbf8f0] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div data-reveal>
          <p className="mb-4 text-[10px] font-semibold tracking-[0.26em] text-champagne">
            A FEW HELPFUL THINGS
          </p>
          <h2
            id="faq-title"
            className="font-display text-5xl font-normal leading-[0.95] tracking-tight text-forest sm:text-7xl"
          >
            Good to
            <br />
            <span className="italic">know.</span>
          </h2>
        </div>

        <div className="divide-y divide-[#18372b]/15 border-y border-[#18372b]/15" data-reveal>
          {weddingQuestions.map((item, index) => {
            const isOpen = index === openIndex
            const answerId = `faq-answer-${index}`

            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex min-h-16 w-full items-center justify-between gap-5 py-4 text-left font-display text-xl text-forest sm:text-2xl"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {item.question}
                    <span className="font-sans text-xl text-champagne" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <p id={answerId} className="max-w-xl pb-5 pr-8 text-sm leading-7 text-[#647267]">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
