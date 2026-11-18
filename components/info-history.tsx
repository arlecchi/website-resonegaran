"use client"

import { ArrowRight, ArrowUpRight, Bus, CircleParking, Clock3, Mail, MapPin, MessageCircle, Navigation, Sun } from "lucide-react"
import { contact, etiquette, intro, practical, timeline } from "@/lib/info"
import { mapLinks, VILLAGE } from "@/lib/places"

// Turns the icon names used in lib/info.ts into actual icon components.
const ICONS = { bus: Bus, sun: Sun, clock: Clock3, parking: CircleParking }

export function InfoHistory({ go }: { go: (page: string) => void }) {
  const map = mapLinks(VILLAGE.lat, VILLAGE.lng, 15)
  const socials = contact.socials.filter((s) => s.url) // only show socials that have a link

  return (
    <>
      {/* 1. Intro — photo + a few paragraphs */}
      <div className="history-layout">
        <div className="history-image" />
        <div className="history-copy">
          <span className="eyebrow">{intro.eyebrow}</span>
          <h3>Every place has<br />a <em>before and after.</em></h3>
          {intro.paragraphs.map((text) => <p key={text}>{text}</p>)}
          <div className="history-callout"><span>“</span><p>{intro.quote}</p></div>
          <button className="under-link" onClick={() => go("Blogs")}>Read stories from the village <ArrowRight size={15} /></button>
        </div>
      </div>

      {/* 2. Timeline */}
      <section className="info-section">
        <div className="info-head">
          <span className="eyebrow">A SHORT HISTORY</span>
          <h3>How Resonegaran<br /><em>came to be.</em></h3>
        </div>
        <ol className="timeline">
          {timeline.map((item, i) => (
            <li key={i}>
              <span className="timeline-year">{item.year}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 3. Good to know — practical info cards */}
      <section className="info-section">
        <div className="info-head">
          <span className="eyebrow">BEFORE YOU COME</span>
          <h3>Good <em>to know.</em></h3>
        </div>
        <div className="practical-grid">
          {practical.map((card) => {
            const Icon = ICONS[card.icon] // capitalised so JSX treats it as a component
            return (
              <article className="practical-card" key={card.title}>
                <Icon size={20} strokeWidth={1.6} />
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* 4. Find us — small map + contact details (like the reference site's "Temukan Kami") */}
      <section className="info-section">
        <div className="info-head">
          <span className="eyebrow">LOCATION & CONTACT</span>
          <h3>Find <em>us.</em></h3>
        </div>
        <div className="findus-layout">
          <div className="findus-map">
            <iframe src={map.embed} title="Map of Resonegaran" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div className="findus-details">
            <ContactRow icon={<MapPin size={16} />} label="Address" value={contact.address} href={map.open} />
            {contact.whatsapp.map((wa) => (
              <ContactRow
                key={wa.name}
                icon={<MessageCircle size={16} />}
                label={`WhatsApp — ${wa.name}`}
                value={wa.number && `+${wa.number}`}
                href={`https://wa.me/${wa.number}`}
              />
            ))}
            <ContactRow icon={<Mail size={16} />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />

            <div className="findus-socials">
              {socials.length > 0
                ? socials.map((s) => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name} <ArrowUpRight size={13} /></a>)
                : <span className="info-empty">Social media links to be added</span>}
            </div>

            <a className="button dark-button full-button" href={map.directions} target="_blank" rel="noopener noreferrer">
              Get directions <Navigation size={16} />
            </a>
            <button className="under-link" onClick={() => go("Map")}>See all places on the map <ArrowRight size={15} /></button>
          </div>
        </div>
      </section>

      {/* 5. Etiquette — kept from the original page */}
      <div className="visit-etiquette">
        <span className="eyebrow">A GOOD GUEST</span>
        <div><h3>{etiquette.title}</h3><p>{etiquette.text}</p></div>
        <span className="etiquette-mark">✳</span>
      </div>
    </>
  )
}

// One line in the contact list. If `value` is empty it shows "to be added" instead of a broken link.
function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <div className="contact-row">
      <span className="contact-icon">{icon}</span>
      <span>
        <small>{label}</small>
        {value
          ? <a href={href} target="_blank" rel="noopener noreferrer">{value}</a>
          : <span className="info-empty">to be added</span>}
      </span>
    </div>
  )
}
