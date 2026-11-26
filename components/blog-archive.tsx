"use client"

import Link from "next/link"
import { blogs } from "@/content/blogs"
import { Rich, useContent } from "@/lib/i18n"
import { BlogCards } from "@/components/blog-cards"
import { BlogSiteFooter, BlogSiteHeader } from "@/components/blog-site-chrome"

export function BlogArchive() {
  const t = useContent(blogs)

  return (
    <main className="site-shell blog-archive">
      <BlogSiteHeader/>
      <section className="archive-content">
        <div className="archive-heading">
          <span className="article-category">{t.kicker}</span>
          <h1><Rich text={t.title}/></h1>
          <p>{t.lead}</p>
        </div>
        <BlogCards posts={t.posts} readStory={t.readStory}/>
        <div className="blog-signoff">
          <span className="eyebrow">{t.signoffEyebrow}</span>
          <h3>{t.signoffTitle}</h3>
          <p>{t.signoffText}</p>
          <Link className="button dark-button" href="/">{t.homeLabel}</Link>
        </div>
      </section>
      <BlogSiteFooter/>
    </main>
  )
}
