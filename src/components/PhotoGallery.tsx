import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { weddingPhotos } from '../config/wedding'

export function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const selectedPhoto =
    selectedIndex === null ? null : weddingPhotos[selectedIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !selectedPhoto) return

    if (!dialog.open) dialog.showModal()
    closeButtonRef.current?.focus()
  }, [selectedPhoto])

  function closeDialog() {
    dialogRef.current?.close()
    setSelectedIndex(null)
  }

  function changePhoto(direction: -1 | 1) {
    setSelectedIndex((current) => {
      if (current === null) return current
      return (current + direction + weddingPhotos.length) % weddingPhotos.length
    })
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeDialog()
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      changePhoto(1)
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      changePhoto(-1)
    }
  }

  return (
    <section
      id="gallery"
      className="bg-[#f1ebdc] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      aria-labelledby="gallery-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end" data-reveal>
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.26em] text-champagne">
              LITTLE MOMENTS, BIG LOVE
            </p>
            <h2
              id="gallery-title"
              className="font-display text-5xl font-normal leading-[0.95] tracking-tight text-forest sm:text-7xl"
            >
              Our gallery
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#647267]">
            A few favourite frames from the story we’re still writing.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {weddingPhotos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              className={`group relative isolate overflow-hidden bg-deep-forest text-left ${
                photo.shape === 'landscape' ? 'aspect-[1.12] sm:aspect-[1.15]' : 'aspect-[0.78]'
              } ${index === 1 ? 'sm:mt-10' : ''} ${index === 4 ? 'sm:-mt-10' : ''}`}
              aria-label={`Open photo: ${photo.caption}`}
              onClick={() => setSelectedIndex(index)}
              data-reveal
            >
              <img
                src={photo.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="photo-blur absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-110"
              />
              <img
                src={photo.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-forest/80 to-transparent px-3 pb-3 pt-12 text-xs text-white sm:px-4 sm:pb-4">
                {photo.caption}
              </span>
              <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-white/55 bg-deep-forest/30 text-sm text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="gallery-dialog w-[94vw] rounded-none"
        aria-label="Wedding photo gallery"
        onClose={() => setSelectedIndex(null)}
        onKeyDown={handleKeyDown}
      >
        {selectedPhoto && selectedIndex !== null && (
          <div className="relative grid max-h-[92dvh] w-full grid-rows-[1fr_auto]">
            <div className="relative flex min-h-0 items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[78dvh] max-w-full object-contain"
              />
              <button
                type="button"
                className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center border border-white/40 bg-deep-forest/65 text-2xl text-white transition-colors hover:bg-forest"
                aria-label="Previous photo"
                onClick={() => changePhoto(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center border border-white/40 bg-deep-forest/65 text-2xl text-white transition-colors hover:bg-forest"
                aria-label="Next photo"
                onClick={() => changePhoto(1)}
              >
                ›
              </button>
            </div>
            <div className="flex items-center justify-between gap-4 py-3">
              <p className="font-display text-xl italic text-white">
                {selectedPhoto.caption}
                <span className="ml-3 font-sans text-[10px] not-italic tracking-[0.15em] text-white/55">
                  {selectedIndex + 1} / {weddingPhotos.length}
                </span>
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                className="min-h-11 px-3 text-[10px] font-semibold tracking-[0.16em] text-white hover:text-soft-gold"
                onClick={closeDialog}
              >
                CLOSE <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
