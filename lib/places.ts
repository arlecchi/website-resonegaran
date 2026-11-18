// Single source of truth for WHERE the places are (photo + coordinates).
// The Places, Map and Tour plans pages (and the home page preview) all read from here.
// The place NAMES and DESCRIPTIONS (English + Indonesian) live in content/places.ts.

import { placesContent } from "@/content/places"
import { useContent } from "@/lib/i18n"

// The slug must also exist under `places:` in content/places.ts — TypeScript will complain if it doesn't.
export type PlaceSlug = keyof typeof placesContent.en.places

type PlaceLocation = {
  slug: PlaceSlug // short unique id, used to tell the map which place is selected
  image: string // Unsplash photo id, turned into a full URL by img() in app/page.tsx
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

const locations: PlaceLocation[] = [
  {
    slug: "village-lanes",
    image: "photo-1518005020951-eccb494ad742",
    lat: -7.779748, // Depan Pak Budi
    lng: 110.375693,
  },
  {
    slug: "rice-fields",
    image: "photo-1500382017468-9049fed747ef",
    lat: -7.8015, // placeholder
    lng: 110.3689, // placeholder
  },
  {
    slug: "gathering-space",
    image: "photo-1518998053901-5348d3961a04",
    lat: -7.8004, // placeholder
    lng: 110.3641, // placeholder
  },
]

/** All places, with name/type/time/desc in the language the visitor picked. */
export function usePlaces() {
  const text = useContent(placesContent).places
  return locations.map((loc) => ({ ...loc, ...text[loc.slug] }))
}

export type Place = ReturnType<typeof usePlaces>[number]
