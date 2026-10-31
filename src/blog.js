import { marked } from 'marked'

// Every Markdown file in src/posts becomes a post. Filenames look like
// 2026-10-31-my-post.md; the part after the date is the URL slug.
const files = import.meta.glob('./posts/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }
  const meta = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim()
  }
  return { meta, body: match[2] }
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const file = path.split('/').pop().replace(/\.md$/, '')
    const slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, '')
    const { meta, body } = parseFrontmatter(raw)
    const date = meta.date || file.slice(0, 10)
    const words = body.trim().split(/\s+/).length
    return {
      slug,
      title: meta.title || slug,
      date,
      summary: meta.summary || '',
      readingTime: Math.max(1, Math.round(words / 220)),
      html: marked.parse(body),
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug) => posts.find((p) => p.slug === slug)

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
