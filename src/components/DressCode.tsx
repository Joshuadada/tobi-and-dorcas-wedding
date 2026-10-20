const colours = [
  { name: 'Gold', shade: '#c99a45', className: 'bg-[#c99a45]' },
  { name: 'White', shade: '#fffdf7', className: 'bg-[#fffdf7]' },
  { name: 'Emerald', shade: '#063d2e', className: 'bg-[#063d2e]' },
]

export function DressCode() {
  return (
    <section
      id="dress-code"
      className="bg-[#fbf8f0] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      aria-labelledby="dress-code-title"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
        <div data-reveal>
          <p className="mb-4 text-[10px] font-semibold tracking-[0.26em] text-champagne">
            A PALETTE FOR THE DAY
          </p>
          <h2
            id="dress-code-title"
            className="font-display text-5xl font-normal leading-[0.95] tracking-tight text-forest sm:text-7xl"
          >
            Dress with
            <br />
            <span className="italic">joy.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#647267] sm:text-base">
            We would love to see you in the colours chosen for our celebration.
            Gold, white and green—wear them in the way that feels most like you.
          </p>
          <p className="mt-6 font-display text-2xl italic text-forest sm:text-3xl">
            Gold, White &amp; Green
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-5" data-reveal>
          {colours.map((colour, index) => (
            <div key={colour.name} className="text-center">
              <div
                className={`aspect-[0.72] ${colour.className} ${
                  colour.name === 'White' ? 'border border-[#e6dece]' : ''
                }`}
                style={{ boxShadow: index === 1 ? 'inset 0 0 40px rgb(16 42 32 / 5%)' : undefined }}
                aria-label={`${colour.name} colour swatch`}
              />
              <p className="mt-3 font-display text-lg text-forest sm:text-xl">
                {colour.name}
              </p>
              <p className="text-[9px] tracking-[0.12em] text-[#7d877e]">
                {colour.shade.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
