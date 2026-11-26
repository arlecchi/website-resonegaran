"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { blogs } from "@/content/blogs"
import { useContent } from "@/lib/i18n"
import { BlogSiteFooter, BlogSiteHeader } from "@/components/blog-site-chrome"

const imageUrl = (id: string) => id.startsWith("/") || id.startsWith("https://") ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=90`

export function BlogArticle({ slug }: { slug: string }) {
  const t = useContent(blogs)
  const post = t.posts.find((item) => item.slug === slug)
  const hasChecklist = !!post && "checklist" in post && post.checklist === true
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

  const renderParagraph = (paragraph: string, sectionIndex: number, paragraphIndex: number, checkable: boolean) => (
    <p className={checkable ? "checkable-paragraph" : undefined} key={paragraphIndex}>
      {checkable && <label className="travel-kit-check"><input type="checkbox" aria-label={`Check off: ${paragraph}`} checked={!!checkedItems[`supplies-${sectionIndex}-${paragraphIndex}`]} onChange={(event) => setItemChecked(`supplies-${sectionIndex}-${paragraphIndex}`, event.target.checked)}/><span className="sr-only">Check off: </span></label>}
      <LinkedParagraph text={paragraph}/>
    </p>
  )

  if (!post) return <main className="blog-archive"><p className="article-missing">This story could not be found. <Link href="/blogs">{t.archiveBack}</Link></p></main>

  return (
    <main className="site-shell blog-article-page">
      <BlogSiteHeader/>
      <div className="article-return"><Link className="article-back" href="/blogs"><ArrowLeft size={15}/>{t.archiveBack}</Link></div>
      <article>
        <div className={slug === "avoiding-insect-and-arthropod-bites-indonesia" ? "article-cover article-cover-bug" : "article-cover"} role="img" aria-label={post.imageAlt} style={{ backgroundImage: `url(${imageUrl(post.image)})` }}/>
        <header className="article-header">
          <span className="article-category">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.deck}</p>
          <div className="article-byline"><span>{t.articleLabel}</span>{post.date && <span>{post.date}</span>}</div>
        </header>
        <div className="article-copy">
          {post.sections.map((section, index) => (
            <section className="article-section" key={`${section.heading}-${index}`}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => renderParagraph(paragraph, index, paragraphIndex, "checkableParagraph" in section && section.checkableParagraph === true))}
              {"images" in section && section.images?.map((image, imageIndex) => <ArticleImage key={imageIndex} image={image}/>) }
              {"table" in section && section.table && (
                <div className="travel-kit-table-wrap" role="region" aria-label={`${section.heading} table`} tabIndex={0}>
                  <table className={hasChecklist ? "travel-kit-table checklist-table" : "travel-kit-table"}>
                    <thead><tr>{hasChecklist && <th className="check-column" scope="col"><span className="sr-only">Packed</span></th>}{section.table.headers.map((header, headerIndex) => <th key={headerIndex} scope="col">{header}</th>)}</tr></thead>
                    <tbody>{section.table.rows.map((row, rowIndex) => {
                      const itemId = `${index}-${rowIndex}`
                      return <tr key={rowIndex}>
                        {hasChecklist && <td className="check-column"><label className="travel-kit-check"><input type="checkbox" aria-label={`Check off: ${row.length > 2 ? `${row[0]} — ${row[1]}` : row[0]}`} checked={!!checkedItems[itemId]} onChange={(event) => setItemChecked(itemId, event.target.checked)}/><span className="sr-only">Check off: {row[0]}</span></label></td>}
                        {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
                      </tr>
                    })}</tbody>
                  </table>
                </div>
              )}
              {"afterTable" in section && section.afterTable?.map((paragraph, paragraphIndex) => renderParagraph(paragraph, index, paragraphIndex + 1000, "checkableParagraph" in section && section.checkableParagraph === true))}
              {"bullets" in section && section.bullets && <ul className="article-bullets">{section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}><LinkedParagraph text={bullet}/></li>)}</ul>}
              {"subsections" in section && section.subsections?.map((subsection, subsectionIndex) => (
                <section className="article-subsection" key={subsectionIndex}>
                  <h3>{subsection.heading}</h3>
                  {"images" in subsection && subsection.images?.map((image, imageIndex) => <ArticleImage key={imageIndex} image={image}/>) }
                  {subsection.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}><LinkedParagraph text={paragraph}/></p>)}
                </section>
              ))}
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
  if (match) return <>{match[1]}<a href={match[3]} target="_blank" rel="noreferrer">{match[2]}</a>{match[4]}</>
  return <>{text.split(/(https?:\/\/[^\s)]+)/g).map((part, index) => /^https?:\/\//.test(part) ? <a key={index} href={part} target="_blank" rel="noreferrer">{part}</a> : part)}</>
}

function ArticleImage({ image }: { image: { src: string; href?: string; alt: string } }) {
  const href = image.href ?? image.src
  return <figure className="article-inline-image"><a href={href} target="_blank" rel="noreferrer" aria-label={`Open image source: ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy"/></a></figure>
}
