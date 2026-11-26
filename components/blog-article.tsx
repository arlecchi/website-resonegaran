"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { blogs } from "@/content/blogs"
import { useContent } from "@/lib/i18n"
import { BlogSiteFooter, BlogSiteHeader } from "@/components/blog-site-chrome"

const imageUrl = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=90`

export function BlogArticle({ slug }: { slug: string }) {
  const t = useContent(blogs)
  const post = t.posts.find((item) => item.slug === slug)

  if (!post) return <main className="blog-archive"><p className="article-missing">This story could not be found. <Link href="/blogs">{t.archiveBack}</Link></p></main>

  return (
    <main className="site-shell blog-article-page">
      <BlogSiteHeader/>
      <div className="article-return"><Link className="article-back" href="/blogs"><ArrowLeft size={15}/>{t.archiveBack}</Link></div>
      <article>
        <div className="article-cover" role="img" aria-label={post.imageAlt} style={{ backgroundImage: `url(${imageUrl(post.image)})` }}/>
        <header className="article-header">
          <span className="article-category">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.deck}</p>
          <div className="article-byline"><span>{t.articleLabel}</span><span>{post.date}</span></div>
        </header>
        <div className="article-copy">
          {post.sections.map((section, index) => (
            <section className="article-section" key={`${section.heading}-${index}`}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </article>
      <footer className="article-footer">
        <span className="eyebrow">{t.signoffEyebrow}</span>
        <h2>{t.signoffTitle}</h2>
        <p>{t.signoffText}</p>
        <Link className="article-back article-footer-link" href="/blogs">{t.continueReading}<ArrowRight size={15}/></Link>
      </footer>
      <BlogSiteFooter/>
    </main>
  )
}
