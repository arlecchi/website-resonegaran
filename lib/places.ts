// Shared destination data for the Places, Map, Tour plans and Profile pages.
import { placesContent } from "@/content/places"
import { useContent } from "@/lib/i18n"

export type PlaceSlug = keyof typeof placesContent.en.places

type PlaceLocation = {
  slug: PlaceSlug
  image: string
  lat: number
  lng: number
  mapQuery: string
}

export const VILLAGE = {
  name: "Kampung Resonegaran",
  area: "Terban, Gondokusuman, Yogyakarta, Indonesia",
  lat: -7.779748,
  lng: 110.375693,
}

// Google Maps accepts place/address text as well as coordinates; use verified names
// when a precise public pin is unavailable rather than inventing coordinates.
export function mapLinks(lat: number, lng: number, zoom = 15, mapQuery?: string) {
  const destination = mapQuery || `${lat},${lng}`
  const q = encodeURIComponent(destination)
  return {
    embed: `https://maps.google.com/maps?q=${q}&z=${zoom}&output=embed`,
    directions: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
    open: `https://www.google.com/maps/search/?api=1&query=${q}`,
  }
}

const locations: PlaceLocation[] = [
  {
    slug: "museum-tni-ad",
    image: "photo-1518005020951-eccb494ad742",
    lat: -7.78293,
    lng: 110.37514,
    mapQuery: "Museum Pusat TNI AD Dharma Wiratama, Jl. Jenderal Sudirman No. 75, Yogyakarta",
  },
  {
    slug: "batik-sekar-rinonce",
    image: "photo-1528459801416-a9e53bbf4e17",
    lat: VILLAGE.lat,
    lng: VILLAGE.lng,
    mapQuery: "Batik Sekar Rinonce, Gg. Resonegaran GK No. 5/1296, Yogyakarta",
  },
  {
    slug: "sardjito-jamu",
    image: "photo-1566127992631-137a642a90f4",
    lat: VILLAGE.lat,
    lng: VILLAGE.lng,
    mapQuery: "Rumah Prof. Sardjito, Jl. Cik Di Tiro No. 16, Terban, Yogyakarta",
  },
]

export function usePlaces() {
  const text = useContent(placesContent).places
  return locations.map((loc) => ({ ...loc, ...text[loc.slug] }))
}

export type Place = ReturnType<typeof usePlaces>[number]
