import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { blogs } from "@/content/blogs"

type BlogPost = (typeof blogs.en.posts)[number]

const imageUrl = (id: string, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export function BlogCards({ posts, readStory }: { posts: BlogPost[]; readStory: string }) {
  return (
    <div className="blog-grid">
      {posts.map((post, index) => (
        <article className={`blog-card blog-${index + 1}`} key={post.slug}>
          <Link className="blog-card-link" href={`/blogs/${post.slug}`} aria-label={`${readStory}: ${post.title}`}>
            <div className="blog-image" role="img" aria-label={post.imageAlt} style={{ backgroundImage: `url(${imageUrl(post.image)})` }}>
              <span>{post.category}</span>
            </div>
            <div className="blog-meta"><span>{post.date}</span></div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span className="under-link">{readStory} <ArrowRight size={15}/></span>
          </Link>
        </article>
      ))}
    </div>
  )
}
