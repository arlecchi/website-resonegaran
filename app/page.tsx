"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Clock3, MapPin, Menu, Moon, Search, Sparkles, Sun, X } from "lucide-react"
import { places } from "@/lib/places"
import { VillageMap } from "@/components/village-map"
import { InfoHistory } from "@/components/info-history"

const pages = ["Profile", "Places to visit", "Map", "Tour plans", "Information & history", "Blogs"]
const tours = [
  { num: "01", title: "A gentle village morning", time: "2 hours", text: "Start with a slow walk through the lanes, stop by the fields, and share a local breakfast." },
  { num: "02", title: "Resonegaran by bike", time: "Half day", text: "Take the scenic route past farms and neighborhood landmarks, with plenty of time to pause." },
  { num: "03", title: "Meet the makers", time: "Half day", text: "Spend an unhurried afternoon meeting local residents and learning about daily village life." },
]
const blogs = [
  { category: "FIELD NOTES", title: "The quiet joy of taking the long way", date: "A slow travel journal", image: "photo-1470770841072-f978cf4d019e" },
  { category: "LOCAL LIFE", title: "A morning that begins in the fields", date: "Stories from Resonegaran", image: "photo-1500382017468-9049fed747ef" },
]
const img = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export default function Page() {
  const [active, setActive] = useState("Profile")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [mapPlace, setMapPlace] = useState<string | null>(null) // which place the Map page should focus on
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = mounted && resolvedTheme === "dark"
  const go = (page: string) => { setActive(page); setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }) }
  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => go("Profile")} aria-label="Kastaraya home"><img className="brand-logo" src="/kastaraya-logo.png" alt="Kastaraya — Kampung Wisata Terban Yogyakarta"/></button>
        <nav className={mobileOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">{pages.map((p, i) => <button key={p} className={active === p ? "nav-link active" : "nav-link"} onClick={() => go(p)}><span className="nav-index">0{i+1}</span>{p}</button>)}</nav>
        <div className="topbar-actions">
        <button className="theme-toggle" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title="Toggle theme (D)" onClick={() => setTheme(isDark ? "light" : "dark")}>{isDark ? <Sun size={16}/> : <Moon size={16}/>}</button>
        <button className="visit-button" onClick={() => go("Tour plans")}>Plan your visit <ArrowUpRight size={15}/></button>
        <button className="mobile-toggle" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      {active === "Profile" && <>
        <section className="hero">
          <div className="hero-photo" />
          <div className="hero-shade" />
          <div className="hero-content"><div className="eyebrow light"><span/> A SMALL PLACE WITH A BIG HEART</div><h1>Come for the<br/><em>quiet.</em> Stay for<br/>the stories.</h1><p>Find your slower side in Resonegaran — a welcoming village tucked into the green heart of Yogyakarta.</p><div className="hero-actions"><button className="button cream" onClick={() => go("Places to visit")}>Explore the village <ArrowRight size={16}/></button><button className="text-link light-link" onClick={() => go("Information & history")}>A little about us <ArrowDown size={15}/></button></div></div>
          <div className="hero-caption"><MapPin size={14}/> RESONEGARAN, YOGYAKARTA <span>·</span> 7° 48′ S, 110° 22′ E</div><div className="hero-number">01 <i/> 06</div>
        </section>
        <section className="intro-section section-pad"><div className="section-kicker">A PLACE TO PAUSE <span>01 — PROFILE</span></div><div className="intro-grid"><h2>Not a landmark.<br/><em>A feeling.</em></h2><div><p className="intro-copy">Resonegaran is the kind of place you discover by slowing down. A village of open skies, familiar faces, and paths that invite you to wander a little further.</p><p className="muted-copy">Come curious. Leave feeling like you know the way back.</p><button className="under-link" onClick={() => go("Information & history")}>Get to know Resonegaran <ArrowRight size={15}/></button></div></div></section>
        <section className="feature-band"><div className="feature-image"/><div className="feature-copy"><span className="eyebrow">A DIFFERENT KIND OF GETAWAY</span><h2>Let the day<br/>unfold <em>naturally.</em></h2><p>No packed itinerary required. Just open roads, a warm welcome, and room to see where the day takes you.</p><button className="button dark-button" onClick={() => go("Tour plans")}>Find your kind of day <ArrowRight size={16}/></button></div></section>
        <PlacesPreview go={go}/><JournalPreview go={go}/><Footer go={go}/>
      </>}

      {active === "Places to visit" && <PageFrame go={go} kicker="FIND YOUR WAY" title={<>Places to<br/><em>slow down.</em></>} lead="A few lovely places to begin. Take your time, follow a path, and see what catches your eye." number="02"><div className="filter-row"><span>THOUGHTFUL STOPS, ALL AROUND THE VILLAGE</span><div className="search-box"><Search size={15}/><input aria-label="Search places" placeholder="Find a place" value={query} onChange={e => setQuery(e.target.value)}/></div></div><div className="place-grid">{places.filter(x => `${x.name} ${x.type}`.toLowerCase().includes(query.toLowerCase())).map((p,i)=><article className="place-card" key={p.slug}><div className="place-image" style={{backgroundImage:`url(${img(p.image)})`}}><span className="place-count">0{i+1}</span></div><div className="place-meta"><span>{p.type}</span><span><Clock3 size={13}/>{p.time}</span></div><h3>{p.name}</h3><p>{p.desc}</p><button className="under-link" onClick={()=>{ setMapPlace(p.slug); go("Map") }}>Find it on the map <ArrowRight size={15}/></button></article>)}</div></PageFrame>}

      {active === "Map" && <PageFrame go={go} kicker="GETTING AROUND" title={<>A little map.<br/><em>A lot to find.</em></>} lead="Resonegaran is best explored at an easy pace. Use this starting point to find your bearings." number="03"><VillageMap selected={mapPlace} onSelect={setMapPlace}/></PageFrame>}

      {active === "Tour plans" && <PageFrame go={go} kicker="MAKE A DAY OF IT" title={<>Good days,<br/><em>well spent.</em></>} lead="Simple ideas for exploring Resonegaran. Mix and match, or let the day surprise you." number="04"><div className="tour-list">{tours.map((t,i)=><article className="tour-row" key={t.num}><span className="tour-number">{t.num}</span><div className="tour-photo" style={{backgroundImage:`url(${img(places[i].image,700)})`}}/><div className="tour-details"><div className="tour-time"><Clock3 size={14}/>{t.time}</div><h3>{t.title}</h3><p>{t.text}</p></div><button className="round-arrow" aria-label={`Explore ${t.title}`} onClick={()=>go("Places to visit")}><ArrowUpRight size={18}/></button></article>)}</div><div className="tour-note"><Sparkles size={18}/><p><b>Make it your own.</b> These are just starting points. Ask a local guide about seasonal activities and community visits.</p><button onClick={()=>go("Information & history")}>Good to know <ArrowRight size={15}/></button></div></PageFrame>}

      {active === "Information & history" && <PageFrame go={go} kicker="THE PLACE, THE PEOPLE" title={<>A story still<br/><em>being told.</em></>} lead="Resonegaran's story lives in its people, its shared spaces, and the landscape that shapes daily life." number="05"><InfoHistory go={go}/></PageFrame>}

      {active === "Blogs" && <PageFrame go={go} kicker="POSTCARDS & PEOPLE" title={<>Notes from<br/><em>Resonegaran.</em></>} lead="Small stories, local voices, and little things worth remembering from a slower kind of trip." number="06"><div className="blog-grid">{blogs.map((b,i)=><article className={`blog-card blog-${i+1}`} key={b.title}><div className="blog-image" style={{backgroundImage:`url(${img(b.image)})`}}><span>{b.category}</span></div><div className="blog-meta"><span>{b.date}</span><span>0{i+1} / 02</span></div><h3>{b.title}</h3><p>Some places ask you to do more. Here, we’re learning the pleasure of noticing more — one unhurried moment at a time.</p><button className="under-link" onClick={()=>go("Information & history")}>Read the story <ArrowRight size={15}/></button></article>)}</div><div className="blog-signoff"><span className="eyebrow">A NOTE FROM THE VILLAGE</span><h3>Have a story to share?</h3><p>We’d love to hear what made your visit special.</p><button className="button dark-button" onClick={()=>go("Profile")}>Come say hello <ArrowRight size={16}/></button></div></PageFrame>}
    </main>
  )
}

function PageFrame({kicker,title,lead,number,children,go}:{kicker:string,title:React.ReactNode,lead:string,number:string,children:React.ReactNode,go:(page:string)=>void}){return <><section className="page-heading"><div className="eyebrow"><span/>{kicker}</div><div className="heading-grid"><h1>{title}</h1><p>{lead}</p></div><span className="heading-number">{number} <i/> 06</span></section><section className="page-content">{children}</section><Footer go={go}/></>}
function PlacesPreview({go}:{go:(s:string)=>void}){return <section className="places-section section-pad"><div className="section-kicker">A FEW PLACES TO BEGIN <span>02 — PLACES</span></div><div className="section-title-row"><h2>Little moments.<br/><em>Lovely places.</em></h2><button className="under-link" onClick={()=>go("Places to visit")}>See all places <ArrowRight size={15}/></button></div><div className="preview-grid">{places.slice(0,2).map((p,i)=><article className="preview-card" key={p.name} onClick={()=>go("Places to visit")}><div className="preview-photo" style={{backgroundImage:`url(${img(p.image)})`}}/><span className="preview-num">0{i+1}</span><div className="preview-card-copy"><span>{p.type}</span><h3>{p.name}</h3></div><ArrowUpRight className="preview-arrow" size={20}/></article>)}</div></section>}
function JournalPreview({go}:{go:(s:string)=>void}){return <section className="journal-strip"><div><span className="eyebrow">A LITTLE SOMETHING TO REMEMBER</span><h2>Leave room for<br/><em>the unexpected.</em></h2></div><button className="button cream" onClick={()=>go("Blogs")}>Read our field notes <ArrowRight size={16}/></button></section>}
function Footer({go}:{go:(s:string)=>void}){return <footer className="footer"><button className="brand footer-brand" onClick={()=>go("Profile")} aria-label="Kastaraya home"><img className="brand-logo" src="/kastaraya-logo.png" alt="Kastaraya — Kampung Wisata Terban Yogyakarta"/></button><p>A slower kind of welcome,<br/>in the heart of Yogyakarta.</p><div className="footer-links">{pages.map(p=><button key={p} onClick={()=>go(p)}>{p}</button>)}</div><span className="copyright">© RESONEGARAN · MADE WITH CARE</span></footer>}
