import { Link, useParams } from 'react-router'
import { getPost, formatDate } from '../blog.js'
import usePageTitle from '../usePageTitle.js'
import NotFound from './NotFound.jsx'

export default function Post() {
  const post = getPost(useParams().slug)
  usePageTitle(post ? post.title : 'Not found')
  if (!post) return <NotFound />

  return (
    <article className="page post">
      <Link to="/blog" className="post__back">← All posts</Link>
      <header className="post__head">
        <h1 className="page__title">{post.title}</h1>
        <p className="post__meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime} min read
        </p>
      </header>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
