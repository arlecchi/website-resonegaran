"use client"

// Layout of every page. The TEXT lives in content/*.ts (English + Indonesian) — see TRANSLATING.md.

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, ChevronDown, Clock3, MapPin, Menu, Moon, Search, Sparkles, Sun, X } from "lucide-react"
import { usePlaces } from "@/lib/places"
import { Rich, useContent, useLanguage } from "@/lib/i18n"
import { common, PAGES, type PageId } from "@/content/common"
import { profile } from "@/content/profile"
import { placesContent } from "@/content/places"
import { mapContent } from "@/content/map"
import { tours } from "@/content/tours"
import { info } from "@/content/info"
import { blogs } from "@/content/blogs"
import { VillageMap } from "@/components/village-map"
import { InfoHistory } from "@/components/info-history"
import { BlogCards } from "@/components/blog-cards"
import { SocialLinks } from "@/components/social-links"

const img = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
const pad = (n: number) => String(n).padStart(2, "0") // 1 → "01"

export default function Page() {
  const [active, setActive] = useState<PageId>("profile")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [expandedTour, setExpandedTour] = useState<number | null>(null)
  const [mapPlace, setMapPlace] = useState<string | null>(null) // which place the Map page should focus on
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("section") as PageId | null
    if (requested && PAGES.includes(requested)) setActive(requested)
  }, [])
  const isDark = mounted && resolvedTheme === "dark"
  const go = (page: PageId) => { setActive(page); setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }) }

  const places = usePlaces()
  const c = useContent(common)
  const tProfile = useContent(profile)
  const tPlaces = useContent(placesContent)
  const tMap = useContent(mapContent)
  const tTours = useContent(tours)
  const tInfo = useContent(info)
  const tBlogs = useContent(blogs)

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => go("profile")} aria-label={c.homeLabel}><img className="brand-logo" src="/kastaraya-logo.png" alt={c.logoAlt}/></button>
        <nav className={mobileOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">{PAGES.map((p, i) => <button key={p} className={active === p ? "nav-link active" : "nav-link"} onClick={() => go(p)}><span className="nav-index">0{i+1}</span>{c.nav[p]}</button>)}</nav>
        <div className="topbar-actions">
        <button className="theme-toggle" aria-label={isDark ? c.toLight : c.toDark} title={c.themeTitle} onClick={() => setTheme(isDark ? "light" : "dark")}>{isDark ? <Sun size={16}/> : <Moon size={16}/>}</button>
        <LanguageToggle label={c.switchLang}/>
        <button className="visit-button" onClick={() => go("tours")}>{c.planVisit} <ArrowUpRight size={15}/></button>
        <button className="mobile-toggle" aria-label={mobileOpen ? c.closeMenu : c.openMenu} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      {/* 01 — PROFILE · text in content/profile.ts */}
      {active === "profile" && <>
        <section className="hero">
          <div className="hero-photo" />
          <div className="hero-shade" />
          <div className="hero-content"><div className="eyebrow light"><span/> {tProfile.heroEyebrow}</div><h1><Rich text={tProfile.heroTitle}/></h1><p>{tProfile.heroText}</p><div className="hero-actions"><button className="button cream" onClick={() => go("places")}>{tProfile.heroExplore} <ArrowRight size={16}/></button><button className="text-link light-link" onClick={() => go("info")}>{tProfile.heroAbout} <ArrowDown size={15}/></button></div></div>
          <div className="hero-caption"><MapPin size={14}/> {tProfile.heroCaption} <span>·</span> 7° 48′ S, 110° 22′ E</div><div className="hero-number">01 <i/> 06</div>
        </section>
        <section className="intro-section section-pad"><div className="section-kicker">{tProfile.introKicker} <span>{tProfile.introLabel}</span></div><div className="intro-grid"><h2><Rich text={tProfile.introTitle}/></h2><div><p className="intro-copy">{tProfile.introText}</p><p className="muted-copy">{tProfile.introMuted}</p><button className="under-link" onClick={() => go("info")}>{tProfile.introLink} <ArrowRight size={15}/></button></div></div></section>
        <section className="feature-band"><div className="feature-image"/><div className="feature-copy"><span className="eyebrow">{tProfile.featureEyebrow}</span><h2><Rich text={tProfile.featureTitle}/></h2><p>{tProfile.featureText}</p><button className="button dark-button" onClick={() => go("tours")}>{tProfile.featureButton} <ArrowRight size={16}/></button></div></section>
        <section className="places-section section-pad"><div className="section-kicker">{tProfile.previewKicker} <span>{tProfile.previewLabel}</span></div><div className="section-title-row"><h2><Rich text={tProfile.previewTitle}/></h2><button className="under-link" onClick={()=>go("places")}>{tProfile.previewSeeAll} <ArrowRight size={15}/></button></div><div className="preview-grid">{places.slice(0,3).map((p,i)=><article className="preview-card" key={p.slug} onClick={()=>go("places")}><div className="preview-photo" style={{backgroundImage:`url(${img(p.image)})`}}/><span className="preview-num">0{i+1}</span><div className="preview-card-copy"><span>{p.type}</span><h3>{p.name}</h3></div><ArrowUpRight className="preview-arrow" size={20}/></article>)}</div></section>
        <section className="journal-strip"><div><span className="eyebrow">{tProfile.journalEyebrow}</span><h2><Rich text={tProfile.journalTitle}/></h2></div><button className="button cream" onClick={()=>go("blogs")}>{tProfile.journalButton} <ArrowRight size={16}/></button></section>
        <Footer go={go}/>
      </>}

      {/* 02 — PLACES TO VISIT · text in content/places.ts */}
      {active === "places" && <PageFrame go={go} kicker={tPlaces.kicker} title={tPlaces.title} lead={tPlaces.lead} number="02"><div className="filter-row"><span>{tPlaces.filterLabel}</span><div className="search-box"><Search size={15}/><input aria-label={tPlaces.searchLabel} placeholder={tPlaces.searchPlaceholder} value={query} onChange={e => setQuery(e.target.value)}/></div></div><div className="place-grid">{places.filter(x => `${x.name} ${x.type}`.toLowerCase().includes(query.toLowerCase())).map((p,i)=><article className="place-card" key={p.slug}><div className="place-image" style={{backgroundImage:`url(${img(p.image)})`}}><span className="place-count">0{i+1}</span></div><div className="place-meta"><span>{p.type}</span><span><Clock3 size={13}/>{p.time}</span></div><h3>{p.name}</h3><p>{p.desc}</p><button className="under-link" onClick={()=>{ setMapPlace(p.slug); go("map") }}>{tPlaces.mapButton} <ArrowRight size={15}/></button></article>)}</div></PageFrame>}

      {/* 03 — MAP · text in content/map.ts */}
      {active === "map" && <PageFrame go={go} kicker={tMap.kicker} title={tMap.title} lead={tMap.lead} number="03"><VillageMap selected={mapPlace} onSelect={setMapPlace}/></PageFrame>}

      {/* 04 — TOUR PLANS · text in content/tours.ts */}
      {active === "tours" && <PageFrame go={go} kicker={tTours.kicker} title={tTours.title} lead={tTours.lead} number="04"><div className="tour-list">{tTours.list.map((t,i)=>{
          const expanded = expandedTour === i
          const imageSlug = i === 0 || i === 3 || i === 4 ? "sardjito-jamu" : i === 2 || i === 5 ? "batik-sekar-rinonce" : "museum-tni-ad"
          const tourImage = places.find((place) => place.slug === imageSlug) ?? places[0]
          return <article className={expanded ? "tour-item expanded" : "tour-item"} key={t.title}>
            <div className="tour-row">
              <span className="tour-number">{pad(i+1)}</span>
              <div className="tour-photo" style={{backgroundImage:`url(${img(tourImage.image,700)})`}}/>
              <div className="tour-details"><span className="tour-group">{t.group}</span><div className="tour-time"><Clock3 size={14}/>{t.time}</div><h3>{t.title}</h3><p>{t.text}</p></div>
              <button className="round-arrow" type="button" aria-label={`${expanded ? tTours.collapse : tTours.explore}: ${t.title}`} aria-expanded={expanded} aria-controls={expanded ? `tour-itinerary-${i}` : undefined} onClick={()=>setExpandedTour(expanded ? null : i)}><ChevronDown className={expanded ? "is-open" : ""} size={18}/><span className="sr-only">{expanded ? tTours.collapse : tTours.explore}</span></button>
            </div>
            {expanded && <div className="tour-expanded" id={`tour-itinerary-${i}`}><span className="eyebrow">{tTours.itineraryLabel}</span><ol>{t.itinerary.map((step,stepIndex)=><li key={stepIndex}>{step}</li>)}</ol></div>}
          </article>
        })}</div><div className="tour-note"><Sparkles size={18}/><p><b>{tTours.noteBold}</b> {tTours.noteText}</p><button onClick={()=>go("info")}>{tTours.noteButton} <ArrowRight size={15}/></button></div></PageFrame>}

      {/* 05 — INFORMATION & HISTORY · text in content/info.ts */}
      {active === "info" && <PageFrame go={go} kicker={tInfo.kicker} title={tInfo.title} lead={tInfo.lead} number="05"><InfoHistory go={go}/></PageFrame>}

      {/* 06 — BLOGS · text in content/blogs.ts */}
      {active === "blogs" && <PageFrame go={go} kicker={tBlogs.kicker} title={tBlogs.title} lead={tBlogs.lead} number="06"><BlogCards posts={tBlogs.posts} readStory={tBlogs.readStory}/><div className="blog-signoff"><span className="eyebrow">{tBlogs.signoffEyebrow}</span><h3>{tBlogs.signoffTitle}</h3><p>{tBlogs.signoffText}</p><button className="button dark-button" onClick={()=>go("profile")}>{tBlogs.signoffButton} <ArrowRight size={16}/></button></div></PageFrame>}
    </main>
  )
}

// The EN / ID switch next to the sun/moon button. The highlighted code is the current language.
function LanguageToggle({label}:{label:string}){
  const { lang, setLang } = useLanguage()
  return <button className="lang-toggle" aria-label={label} title={label} onClick={() => setLang(lang === "en" ? "id" : "en")}>
    <span className={lang === "en" ? "on" : ""}>EN</span><span className={lang === "id" ? "on" : ""}>ID</span>
  </button>
}

function PageFrame({kicker,title,lead,number,children,go}:{kicker:string,title:string,lead:string,number:string,children:React.ReactNode,go:(page:PageId)=>void}){return <><section className="page-heading"><div className="eyebrow"><span/>{kicker}</div><div className="heading-grid"><h1><Rich text={title}/></h1><p>{lead}</p></div><span className="heading-number">{number} <i/> 06</span></section><section className="page-content">{children}</section><Footer go={go}/></>}
function Footer({go}:{go:(page:PageId)=>void}){const c = useContent(common); return <footer className="footer"><button className="brand footer-brand" onClick={() => go("profile")} aria-label={c.homeLabel}><img className="brand-logo" src="/kastaraya-logo.png" alt={c.logoAlt}/></button><p><Rich text={c.footerTagline}/></p><SocialLinks/><span className="copyright">{c.copyright}</span></footer>}
