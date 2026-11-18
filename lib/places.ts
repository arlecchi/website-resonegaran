// Single source of truth for the places shown on the site.
// The Places, Map and Tour plans pages (and the home page preview) all read from here,
// so adding or editing a place only has to happen in this file.

export type Place = {
  slug: string // short unique id, used to tell the map which place is selected
  name: string
  type: string
  time: string
  image: string // Unsplash photo id, turned into a full URL by img() in app/page.tsx
  desc: string
  lat: number // latitude  (negative = south of the equator)
  lng: number // longitude
}

// TODO: replace every coordinate below with the real spot.
// How: open Google Maps, right-click the exact location, and click the
// "-7.80…, 110.36…" line at the top of the menu — that copies "lat, lng".

// Centre of the village, used when no specific place is selected on the map.
export const VILLAGE = {
  name: "Resonegaran",
  area: "Yogyakarta, Indonesia",
  lat: -7.779748, // Depan Pak budi
  lng: 110.375693, 
}

// Builds the three Google Maps links for a point. Used by the Map page and the "Find us" block.
// No API key needed for any of these.
export function mapLinks(lat: number, lng: number, zoom = 15) {
  const coords = `${lat},${lng}`
  return {
    embed: `https://maps.google.com/maps?q=${coords}&z=${zoom}&output=embed`, // for <iframe src>
    directions: `https://www.google.com/maps/dir/?api=1&destination=${coords}`, // opens a route
    open: `https://www.google.com/maps/search/?api=1&query=${coords}`, // opens the pin in Google Maps
  }
}

export const places: Place[] = [
  {
    slug: "village-lanes",
    name: "The village lanes",
    type: "Village life",
    time: "Anytime",
    image: "photo-1518005020951-eccb494ad742",
    desc: "Wander through quiet lanes framed by old trees, friendly homes, and the everyday rhythm of Resonegaran.",
    lat: -7.779748, // Depan Pak Budi
    lng: 110.375693, 

  },
  {
    slug: "rice-fields",
    name: "Green rice fields",
    type: "Nature",
    time: "Early morning",
    image: "photo-1500382017468-9049fed747ef",
    desc: "Follow the footpaths between emerald paddies and watch the light change across the fields.",
    lat: -7.8015, // placeholder
    lng: 110.3689, // placeholder
  },
  {
    slug: "gathering-space",
    name: "Local gathering space",
    type: "Culture",
    time: "Late afternoon",
    image: "photo-1518998053901-5348d3961a04",
    desc: "Meet the community and discover the small traditions that make a visit feel personal.",
    lat: -7.8004, // placeholder
    lng: 110.3641, // placeholder
  },
]
