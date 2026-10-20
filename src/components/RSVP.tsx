import { useState, type FormEvent } from 'react'
import { wedding } from '../config/wedding'

type Attendance = 'yes' | 'no' | ''

export function RSVP() {
  const [guestName, setGuestName] = useState('')
  const [attendance, setAttendance] = useState<Attendance>('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ guestName?: string; attendance?: string }>({})
  const [confirmedName, setConfirmedName] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors: typeof errors = {}
    const trimmedName = guestName.trim()

    if (!trimmedName) nextErrors.guestName = 'Please enter your name.'
    if (!attendance) nextErrors.attendance = 'Please choose an attendance response.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setConfirmedName(trimmedName)
  }

  return (
    <section
      id="rsvp"
      className="bg-forest px-5 py-20 text-cream sm:px-8 sm:py-28 lg:px-12"
      aria-labelledby="rsvp-title"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div data-reveal>
          <p className="mb-4 text-[10px] font-semibold tracking-[0.26em] text-soft-gold">
            WE HOPE YOU CAN JOIN US
          </p>
          <h2
            id="rsvp-title"
            className="font-display text-5xl font-normal leading-[0.95] tracking-tight sm:text-7xl"
          >
            Be there
            <br />
            <span className="italic text-soft-gold">with us.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70 sm:text-base">
            It would mean so much to celebrate this day with you. Let us know
            whether you can make it.
          </p>

          <div className="mt-10 border-t border-white/20 pt-6">
            <p className="text-[9px] font-semibold tracking-[0.22em] text-soft-gold">
              PREFER TO REPLY BY PHONE?
            </p>
            <ul className="mt-4 space-y-3">
              {wedding.contacts.map((contact) => (
                <li key={contact.name}>
                  <a
                    href={`tel:${contact.tel}`}
                    className="inline-flex min-h-11 items-center gap-3 text-sm text-white/85 transition-colors hover:text-soft-gold"
                  >
                    <span className="font-display text-xl">{contact.name}</span>
                    <span className="text-xs text-white/55">{contact.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-white/20 bg-deep-forest/40 p-5 sm:p-8" data-reveal>
          {confirmedName ? (
            <div className="py-6" role="status" aria-live="polite">
              <span className="text-3xl text-soft-gold" aria-hidden="true">✳</span>
              <h3 className="mt-4 font-display text-4xl text-cream">
                Thank you, {confirmedName}.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Your response has been checked on this page, but has not been
                sent to the couple. Please call Deborah or Favour using the
                numbers here to share your RSVP.
              </p>
              <button
                type="button"
                className="mt-6 min-h-11 border-b border-soft-gold pb-1 text-[10px] font-semibold tracking-[0.15em] text-soft-gold"
                onClick={() => setConfirmedName('')}
              >
                SUBMIT ANOTHER RESPONSE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="guest-name" className="block text-xs font-medium text-white/85">
                Your name <span className="text-soft-gold">*</span>
              </label>
              <input
                id="guest-name"
                name="name"
                required
                autoComplete="name"
                value={guestName}
                onChange={(event) => {
                  setGuestName(event.target.value)
                  if (errors.guestName) setErrors((current) => ({ ...current, guestName: undefined }))
                }}
                aria-invalid={Boolean(errors.guestName)}
                aria-describedby={errors.guestName ? 'guest-name-error' : undefined}
                className="mt-2 min-h-12 w-full border border-white/25 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:border-soft-gold focus:outline-none"
                placeholder="Enter your full name"
              />
              {errors.guestName && (
                <p id="guest-name-error" className="mt-2 text-xs text-[#f0c0a6]" role="alert">
                  {errors.guestName}
                </p>
              )}

              <fieldset className="mt-7">
                <legend className="text-xs font-medium text-white/85">
                  Will you be joining us? <span className="text-soft-gold">*</span>
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {[
                    { value: 'yes', label: 'Accepts with pleasure' },
                    { value: 'no', label: 'Regretfully declines' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex min-h-12 cursor-pointer items-center gap-3 border px-3 text-xs transition-colors ${
                        attendance === option.value
                          ? 'border-soft-gold text-cream'
                          : 'border-white/25 text-white/75 hover:border-white/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={option.value}
                        required
                        checked={attendance === option.value}
                        onChange={() => {
                          setAttendance(option.value as Attendance)
                          if (errors.attendance) setErrors((current) => ({ ...current, attendance: undefined }))
                        }}
                        aria-invalid={Boolean(errors.attendance)}
                        aria-describedby={errors.attendance ? 'attendance-error' : undefined}
                        className="accent-[#e4c77e]"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
                {errors.attendance && (
                  <p id="attendance-error" className="mt-2 text-xs text-[#f0c0a6]" role="alert">
                    {errors.attendance}
                  </p>
                )}
              </fieldset>

              <label htmlFor="guest-message" className="mt-7 block text-xs font-medium text-white/85">
                A little note <span className="text-white/45">(optional)</span>
              </label>
              <textarea
                id="guest-message"
                name="message"
                rows={3}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-2 w-full resize-y border border-white/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-soft-gold focus:outline-none"
                placeholder="Send the couple a message"
              />

              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-soft-gold px-6 text-[10px] font-semibold tracking-[0.17em] text-deep-forest transition-colors hover:bg-cream sm:w-auto"
              >
                CHECK MY RESPONSE
              </button>
              <p className="mt-4 text-[11px] leading-5 text-white/50">
                This form only checks your response on this device. It does not
                send or store your RSVP.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
