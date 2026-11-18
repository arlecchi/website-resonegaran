"use client"

import { ArrowRight, ArrowUpRight, Bus, CircleParking, Clock3, Mail, MapPin, MessageCircle, Navigation, Sun } from "lucide-react"
import { contact, info } from "@/content/info"
import type { PageId } from "@/content/common"
import { Rich, useContent } from "@/lib/i18n"
import { mapLinks, VILLAGE } from "@/lib/places"

// Which icon each "Good to know" card gets. Keys match `practical` in content/info.ts.
const ICONS = { gettingHere: Bus, bestTime: Sun, hours: Clock3, parking: CircleParking }

export function InfoHistory({ go }: { go: (page: PageId) => void }) {
  const t = useContent(info) // text for this page → edit in content/info.ts
  const map = mapLinks(VILLAGE.lat, VILLAGE.lng, 15)
  const socials = contact.socials.filter((s) => s.url) // only show socials that have a link

  return (
    <>
      {/* 1. Intro — photo + a few paragraphs */}
      <div className="history-layout">
        <div className="history-image" />
        <div className="history-copy">
          <span className="eyebrow">{t.intro.eyebrow}</span>
          <h3><Rich text={t.intro.title} /></h3>
          {t.intro.paragraphs.map((text) => <p key={text}>{text}</p>)}
          <div className="history-callout"><span>“</span><p>{t.intro.quote}</p></div>
          <button className="under-link" onClick={() => go("blogs")}>{t.intro.link} <ArrowRight size={15} /></button>
        </div>
      </div>

      {/* 2. Timeline */}
      <section className="info-section">
        <div className="info-head">
          <span className="eyebrow">{t.timelineEyebrow}</span>
          <h3><Rich text={t.timelineTitle} /></h3>
        </div>
        <ol className="timeline">
          {t.timeline.map((item, i) => (
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
          <span className="eyebrow">{t.practicalEyebrow}</span>
          <h3><Rich text={t.practicalTitle} /></h3>
        </div>
        <div className="practical-grid">
          {(Object.keys(t.practical) as (keyof typeof ICONS)[]).map((key) => {
            const card = t.practical[key]
            const Icon = ICONS[key] // capitalised so JSX treats it as a component
            return (
              <article className="practical-card" key={key}>
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
          <span className="eyebrow">{t.findEyebrow}</span>
          <h3><Rich text={t.findTitle} /></h3>
        </div>
        <div className="findus-layout">
          <div className="findus-map">
            <iframe src={map.embed} title={t.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div className="findus-details">
            <ContactRow icon={<MapPin size={16} />} label={t.addressLabel} value={contact.address} href={map.open} empty={t.toBeAdded} />
            {contact.whatsapp.map((wa) => (
              <ContactRow
                key={wa.name}
                icon={<MessageCircle size={16} />}
                label={`WhatsApp — ${wa.name}`}
                value={wa.number && `+${wa.number}`}
                href={`https://wa.me/${wa.number}`}
                empty={t.toBeAdded}
              />
            ))}
            <ContactRow icon={<Mail size={16} />} label={t.emailLabel} value={contact.email} href={`mailto:${contact.email}`} empty={t.toBeAdded} />

            <div className="findus-socials">
              {socials.length > 0
                ? socials.map((s) => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name} <ArrowUpRight size={13} /></a>)
                : <span className="info-empty">{t.socialsEmpty}</span>}
            </div>

            <a className="button dark-button full-button" href={map.directions} target="_blank" rel="noopener noreferrer">
              {t.directions} <Navigation size={16} />
            </a>
            <button className="under-link" onClick={() => go("map")}>{t.seeMap} <ArrowRight size={15} /></button>
          </div>
        </div>
      </section>

      {/* 5. Etiquette — kept from the original page */}
      <div className="visit-etiquette">
        <span className="eyebrow">{t.etiquetteEyebrow}</span>
        <div><h3>{t.etiquetteTitle}</h3><p>{t.etiquetteText}</p></div>
        <span className="etiquette-mark">✳</span>
      </div>
    </>
  )
}

// One line in the contact list. If `value` is empty it shows "to be added" instead of a broken link.
function ContactRow({ icon, label, value, href, empty }: { icon: React.ReactNode; label: string; value: string; href: string; empty: string }) {
  return (
    <div className="contact-row">
      <span className="contact-icon">{icon}</span>
      <span>
        <small>{label}</small>
        {value
          ? <a href={href} target="_blank" rel="noopener noreferrer">{value}</a>
          : <span className="info-empty">{empty}</span>}
      </span>
    </div>
  )
}
