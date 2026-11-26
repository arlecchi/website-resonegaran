import { notFound } from "next/navigation"
import { blogs } from "@/content/blogs"
import { BlogArticle } from "@/components/blog-article"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!blogs.en.posts.some((post) => post.slug === slug)) notFound()
  return <BlogArticle slug={slug}/>
}
