"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { common, PAGES, type PageId } from "@/content/common"
import { useContent, useLanguage } from "@/lib/i18n"
import { SocialLinks } from "@/components/social-links"

function sectionHref(page: PageId) {
  return page === "blogs" ? "/?section=blogs" : `/?section=${page}`
}

export function BlogSiteHeader({ active = "blogs" }: { active?: PageId }) {
  const c = useContent(common)
  const { lang, setLang } = useLanguage()
  const { resolvedTheme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const dark = resolvedTheme === "dark"

  return (
    <header className="topbar">
      <Link className="brand" href={sectionHref("profile")} aria-label={c.homeLabel}>
        <img className="brand-logo" src="/kastaraya-logo.png" alt={c.logoAlt}/>
      </Link>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {PAGES.map((page) => <Link key={page} className={active === page ? "nav-link active" : "nav-link"} href={sectionHref(page)} onClick={() => setMenuOpen(false)}>{c.nav[page]}</Link>)}
      </nav>
      <div className="topbar-actions">
        <button className="theme-toggle" aria-label={dark ? c.toLight : c.toDark} title={c.themeTitle} onClick={() => setTheme(dark ? "light" : "dark")}>{dark ? <Sun size={16}/> : <Moon size={16}/>}</button>
        <button className="lang-toggle" aria-label={c.switchLang} title={c.switchLang} onClick={() => setLang(lang === "en" ? "id" : "en")}><span className={lang === "en" ? "on" : ""}>EN</span><span className={lang === "id" ? "on" : ""}>ID</span></button>
        <Link className="visit-button" href={sectionHref("tours")}>{c.planVisit} <ArrowUpRight size={15}/></Link>
        <button className="mobile-toggle" aria-label={menuOpen ? c.closeMenu : c.openMenu} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>
  )
}

export function BlogSiteFooter() {
  const c = useContent(common)
  return (
    <footer className="footer">
      <Link className="brand footer-brand" href={sectionHref("profile")} aria-label={c.homeLabel}><img className="brand-logo" src="/kastaraya-logo.png" alt={c.logoAlt}/></Link>
      <p>{c.footerTagline.split("\n").map((line, index) => <span key={index}>{index > 0 && <br/>}{line}</span>)}</p>
      <SocialLinks/>
      <span className="copyright">{c.copyright}</span>
    </footer>
  )
}
