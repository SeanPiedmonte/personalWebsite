import { Link } from 'react-router'
import { posts, formatDate } from '../blog.js'
import usePageTitle from '../usePageTitle.js'

export default function Blog() {
  usePageTitle('Blog')
  return (
    <section className="page">
      <header className="page__head">
        <span className="section__label">Writing</span>
        <h1 className="page__title">Blog</h1>
        <p className="page__intro">Short essays on software, systems and whatever else I’m thinking about.</p>
      </header>

      {posts.length === 0 ? (
        <p className="page__intro">No posts yet — check back soon.</p>
      ) : (
        <ul className="postlist">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="postlist__item">
                <time dateTime={p.date}>{formatDate(p.date)}</time>
                <h2>{p.title}</h2>
                {p.summary && <p>{p.summary}</p>}
                <span className="postlist__meta">{p.readingTime} min read</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
