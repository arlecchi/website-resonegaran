"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { blogs } from "@/content/blogs"
import { useContent } from "@/lib/i18n"
import { BlogSiteFooter, BlogSiteHeader } from "@/components/blog-site-chrome"

const imageUrl = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=90`

export function BlogArticle({ slug }: { slug: string }) {
  const t = useContent(blogs)
  const post = t.posts.find((item) => item.slug === slug)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(`kastaraya-checklist-${slug}`)
      setCheckedItems(saved ? JSON.parse(saved) : {})
    } catch {
      setCheckedItems({})
    }
  }, [slug])

  const setItemChecked = (id: string, checked: boolean) => {
    setCheckedItems((current) => {
      const next = { ...current, [id]: checked }
      try { window.localStorage.setItem(`kastaraya-checklist-${slug}`, JSON.stringify(next)) } catch {}
      return next
    })
  }

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
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p className={"checkableParagraph" in section && section.checkableParagraph ? "checkable-paragraph" : undefined} key={paragraphIndex}>
                  {"checkableParagraph" in section && section.checkableParagraph && <label className="travel-kit-check"><input type="checkbox" aria-label={`Check off: ${paragraph}`} checked={!!checkedItems[`supplies-${index}-${paragraphIndex}`]} onChange={(event) => setItemChecked(`supplies-${index}-${paragraphIndex}`, event.target.checked)}/><span className="sr-only">Check off: </span></label>}
                  <LinkedParagraph text={paragraph}/>
                </p>
              ))}
              {"table" in section && section.table && (
                <div className="travel-kit-table-wrap" role="region" aria-label={`${section.heading} checklist`} tabIndex={0}>
                  <table className="travel-kit-table">
                    <thead><tr><th className="check-column" scope="col"><span className="sr-only">Packed</span></th>{section.table.headers.map((header, headerIndex) => <th key={headerIndex} scope="col">{header}</th>)}</tr></thead>
                    <tbody>{section.table.rows.map((row, rowIndex) => {
                      const itemId = `${index}-${rowIndex}`
                      return <tr key={rowIndex}>
                        <td className="check-column"><label className="travel-kit-check"><input type="checkbox" aria-label={`Check off: ${row.length > 2 ? `${row[0]} — ${row[1]}` : row[0]}`} checked={!!checkedItems[itemId]} onChange={(event) => setItemChecked(itemId, event.target.checked)}/><span className="sr-only">Check off: {row[0]}</span></label></td>
                        {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
                      </tr>
                    })}</tbody>
                  </table>
                </div>
              )}
              {"bullets" in section && section.bullets && <ul className="article-bullets">{section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}</ul>}
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

function LinkedParagraph({ text }: { text: string }) {
  const match = text.match(/^(.*?)\[([^\]]+)\]\((https?:\/\/[^)]+)\)(.*)$/)
  if (!match) return <>{text}</>
  return <>{match[1]}<a href={match[3]} target="_blank" rel="noreferrer">{match[2]}</a>{match[4]}</>
}
