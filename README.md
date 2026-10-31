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

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
`public/CNAME` points Pages at `seanpiedmonte.com`.

One-time setup:

1. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
2. At your DNS provider, point `seanpiedmonte.com` at GitHub Pages
   (A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   and a `www` CNAME to `seanpiedmonte.github.io`).
3. Back in **Settings → Pages**, enter `seanpiedmonte.com` as the custom domain and enable **Enforce HTTPS**.
