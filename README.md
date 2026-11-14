# seanpiedmonte.com

Personal portfolio site built with React + Vite.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All text, projects, experience and links live in [`src/data.js`](src/data.js).
Put a `resume.pdf` in `public/` to enable the résumé download.

## Write a blog post

Scaffold a new essay:

```bash
npm run new-post -- "My essay title"
```

That creates `src/posts/YYYY-MM-DD-my-essay-title.md` with the header filled in, and the post will be served at `/blog/my-essay-title`. You can also create the file by hand; it must start with:

```md
---
title: My essay
date: 2026-11-05
summary: One sentence for the blog index.
---
```

Write the post in Markdown below the header. Posts are listed newest first, and reading time is calculated automatically. Preview with `npm run dev`, then commit and push to `master` to publish.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. Pull requests run the build only, so a broken build is caught before merge.

GitHub Pages is enabled on this repo with **Source: GitHub Actions** and the custom domain `seanpiedmonte.com`. With an Actions source the custom domain lives in **Settings → Pages**, not in `public/CNAME` (that file is kept only as a record).

### DNS

For the custom domain to load, the domain's DNS must point at GitHub Pages:

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `seanpiedmonte.github.io` |

Remove any registrar URL-forwarding or parking records for `@` and `www` first. Once DNS has propagated, tick **Enforce HTTPS** in **Settings → Pages**.
