// Content for the "Information & history" page.
// Edit the text here — the layout lives in components/info-history.tsx.
// Anything marked TODO is a placeholder waiting for real info from fieldwork / interviews.

export const intro = {
  eyebrow: "ROOTED IN COMMUNITY",
  paragraphs: [
    "Resonegaran is part of the wider Yogyakarta region, where village life and a deep sense of community are woven into the everyday. Here, the best way to understand a place is often the simplest: walk, listen, and meet the people who call it home.",
    "Stories and traditions are shared person to person. We’re still gathering more of Resonegaran’s local history — and we invite you to learn with care and curiosity.",
  ],
  quote: "The heart of a village is found in the people who welcome you.",
}

// A short timeline. Keep each entry to 1–2 sentences.
// `year` can be a year, a decade ("1950s") or an era ("Long ago").
export const timeline = [
  {
    year: "TODO",
    title: "Where the name comes from",
    text: "Placeholder — the origin of the name “Resonegaran”, as told by village elders.",
  },
  {
    year: "TODO",
    title: "The first families settle",
    text: "Placeholder — how and when the kampung first formed.",
  },
  {
    year: "TODO",
    title: "A turning point",
    text: "Placeholder — an important event, change, or landmark in the village’s story.",
  },
  {
    year: "Today",
    title: "A village that welcomes visitors",
    text: "Placeholder — what Resonegaran is known for now, and the community behind it.",
  },
]

// "Good to know" cards. `icon` must match a key in the ICONS map in components/info-history.tsx.
export const practical = [
  {
    icon: "bus",
    title: "Getting here",
    text: "TODO — route and travel time from Tugu Station / Malioboro, and which transport works best.",
  },
  {
    icon: "sun",
    title: "Best time to visit",
    text: "TODO — best season and time of day, plus any regular events worth timing a visit around.",
  },
  {
    icon: "clock",
    title: "Visiting hours",
    text: "TODO — when visitors are welcome, and whether tours need to be booked ahead.",
  },
  {
    icon: "parking",
    title: "Parking & facilities",
    text: "TODO — where to park, toilets, places to eat, and accessibility notes.",
  },
] as const

// Contact block ("Find us"). Leave a value as "" and the page shows "to be added".
export const contact = {
  address: "", // TODO e.g. "Jl. ..., Kelurahan ..., Kecamatan ..., Kota Yogyakarta"
  whatsapp: [
    // number in international format without "+" or spaces, e.g. "6281234567890"
    { name: "Village contact", number: "" }, // TODO
  ],
  email: "", // TODO
  socials: [
    { name: "Instagram", url: "" }, // TODO e.g. "https://instagram.com/..."
    { name: "TikTok", url: "" },
    { name: "YouTube", url: "" },
  ],
}

export const etiquette = {
  title: "Travel gently.",
  text: "Ask before taking photos, respect private spaces, and support locally owned businesses when you can. A little kindness goes a long way.",
}
