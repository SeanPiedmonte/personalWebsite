#!/usr/bin/env node
// Scaffold a new essay: npm run new-post -- "My essay title"
import { existsSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const title = process.argv.slice(2).join(' ').trim()
if (!title) {
  console.error('Usage: npm run new-post -- "My essay title"')
  process.exit(1)
}

const slug = title
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
if (!slug) {
  console.error('That title has no letters or numbers to build a URL from.')
  process.exit(1)
}

// Local date, not UTC, so a post written in the evening isn't dated tomorrow.
const now = new Date()
const date = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  .map((n) => String(n).padStart(2, '0'))
  .join('-')

const postsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'posts')
const file = path.join(postsDir, `${date}-${slug}.md`)
if (existsSync(file)) {
  console.error(`Already exists: ${path.relative(process.cwd(), file)}`)
  process.exit(1)
}

writeFileSync(
  file,
  `---
title: ${title}
date: ${date}
summary: One sentence that shows up on the blog index.
---

Start writing here.
`,
)
console.log(`Created ${path.relative(process.cwd(), file)}`)
console.log(`It will be published at /blog/${slug}`)
