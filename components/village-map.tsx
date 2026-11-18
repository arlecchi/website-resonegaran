"use client"

import { ArrowUpRight, MapPin, Navigation } from "lucide-react"
import { mapLinks, places, VILLAGE } from "@/lib/places"

type Props = {
  selected: string | null // slug of the highlighted place, or null for "whole village"
  onSelect: (slug: string | null) => void // tells the parent (app/page.tsx) to change the selection
}

export function VillageMap({ selected, onSelect }: Props) {
  // Work out what the map should centre on.
  const place = places.find((p) => p.slug === selected)
  const target = place ?? VILLAGE

  // Zoom in closer (17) on a single place, further out (15) for the whole village.
  const { embed: embedSrc, directions: directionsUrl, open: openUrl } = mapLinks(target.lat, target.lng, place ? 17 : 15)

  return (
    <div className="map-layout">
      <div className="map-embed">
        {/* Changing `src` makes the iframe reload at the new spot. */}
        <iframe
          src={embedSrc}
          title={`Map of ${place?.name ?? VILLAGE.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <aside className="map-aside">
        <span className="eyebrow">PLACES ON THE MAP</span>

        <ol className="map-list">
          <li>
            <button className={selected === null ? "active" : ""} onClick={() => onSelect(null)}>
              <span>★</span>
              <b>Kampung Resonegaran</b>
              <small>Overview</small>
            </button>
          </li>
          {places.map((p, i) => (
            <li key={p.slug}>
              <button className={p.slug === selected ? "active" : ""} onClick={() => onSelect(p.slug)}>
                <span>{i + 1}</span>
                <b>{p.name}</b>
                <small>{p.type}</small>
              </button>
            </li>
          ))}
        </ol>

        <div className="map-stat">
          <MapPin size={16} />
          <span>
            <b>{place?.name ?? VILLAGE.name}</b>
            <small>{place ? `${place.type} · best ${place.time.toLowerCase()}` : VILLAGE.area}</small>
          </span>
        </div>

        <a className="button dark-button full-button" href={directionsUrl} target="_blank" rel="noopener noreferrer">
          Get directions <Navigation size={16} />
        </a>
        <a className="under-link" href={openUrl} target="_blank" rel="noopener noreferrer">
          Open in Google Maps <ArrowUpRight size={15} />
        </a>
        <small className="map-note">Pin locations are placeholders · to be confirmed</small>
      </aside>
    </div>
  )
}
