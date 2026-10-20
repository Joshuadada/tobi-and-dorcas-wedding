export const wedding = {
  bride: 'Dorcas Toluwani',
  groom: 'Oluwatobi David',
  shortNames: 'Dorcas & Oluwatobi',
  date: 'Saturday, 21 November 2026',
  dateShort: '21 · 11 · 2026',
  eventTime: '2026-11-21T11:00:00+01:00',
  city: 'Lagos, Nigeria',
  ceremonyTime: '11:00 AM prompt',
  venue: 'Royal Rex Hotel & Spa',
  address:
    '38/40 Olatunji Idowu Street, off Alli Dada Street Bus Stop, Ago Palace Way, Okota, Lagos, Nigeria.',
  dressCode: 'Gold, White & Green',
  families: [
    'Pastor Peter & Deaconess Comfort Ogunlade',
    'Late Mr Isaac & Mrs Bridget Adebisi',
  ],
  contacts: [
    { name: 'Deborah', phone: '07068960161', tel: '+2347068960161' },
    { name: 'Favour', phone: '08035020829', tel: '+2348035020829' },
  ],
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Royal%20Rex%20Hotel%20%26%20Spa%2C%2038%2F40%20Olatunji%20Idowu%20Street%2C%20off%20Alli%20Dada%20Street%20Bus%20Stop%2C%20Ago%20Palace%20Way%2C%20Okota%2C%20Lagos%2C%20Nigeria',
} as const

export const storyMoments = [
  {
    date: 'APRIL 2024',
    title: 'The beginning',
    text: 'A bootcamp Oluwatobi held in April brought them into the same orbit. He did not even realise Dorcas had attended until she messaged him afterwards—with a new name for him: “Mentor.” The name stuck, whether he liked it or not.',
  },
  {
    date: 'JULY 2024',
    title: 'Two nos',
    text: 'He asked her out. She said no. He tried once more; the answer was still no. In his mind, there were green lights everywhere. Dorcas, apparently, had other plans—and her reasons were not quite convincing enough to him.',
  },
  {
    date: 'A SATURDAY, THREE MONTHS LATER',
    title: 'An unexpected return',
    text: 'After nearly three months of silence, Dorcas reached out. One Saturday conversation stretched on, and something that had gone quiet began to find its way back.',
  },
  {
    date: '21 NOVEMBER 2024',
    title: 'The yes',
    text: 'Somewhere in that long conversation came the yes Oluwatobi had hoped for. Two years later, on that very same date, they will say yes to forever.',
  },
] as const

export const weddingPhotos = [
  {
    src: '/images/wedding/IMG_3398.webp',
    alt: 'Dorcas and Oluwatobi sharing a joyful moment together',
    caption: 'Together, in their element',
    shape: 'portrait',
  },
  {
    src: '/images/wedding/IMG_3446.webp',
    alt: 'Dorcas and Oluwatobi smiling together outdoors',
    caption: 'A favourite kind of day',
    shape: 'landscape',
  },
  {
    src: '/images/wedding/IMG_3396.webp',
    alt: 'Dorcas smiling in her gold outfit',
    caption: 'Dorcas, in gold',
    shape: 'portrait',
  },
  {
    src: '/images/wedding/IMG_3431.webp',
    alt: 'Dorcas and Oluwatobi looking at one another',
    caption: 'A look that says it all',
    shape: 'portrait',
  },
  {
    src: '/images/wedding/IMG_3435.webp',
    alt: 'Dorcas and Oluwatobi walking together',
    caption: 'Side by side',
    shape: 'portrait',
  },
  {
    src: '/images/wedding/IMG_3406.webp',
    alt: 'Dorcas looking back with a smile',
    caption: 'A little joy, always',
    shape: 'landscape',
  },
] as const

export const weddingQuestions = [
  {
    question: 'When is the wedding?',
    answer: 'Saturday, 21 November 2026.',
  },
  {
    question: 'Where is the wedding taking place?',
    answer:
      'At Royal Rex Hotel & Spa, 38/40 Olatunji Idowu Street, off Alli Dada Street Bus Stop, Ago Palace Way, Okota, Lagos, Nigeria.',
  },
  {
    question: 'What time should guests arrive?',
    answer:
      'The ceremony begins at 11:00 AM prompt. Please plan your journey accordingly.',
  },
  {
    question: 'What is the dress code?',
    answer: 'Gold, White & Green.',
  },
  {
    question: 'How can I RSVP?',
    answer:
      'Use the RSVP form on this page, or contact Deborah on 07068960161 or Favour on 08035020829.',
  },
] as const
