# Kushagra Srivastav · GPU performance engineering

A static Astro + TypeScript consulting website for CUDA, GPU kernels, and production LLM inference. No backend, database, cookies, tracking, external fonts, or paid services. All visible graphics are local SVG/CSS; there are no remote image dependencies.

## Requirements

Node.js **22.12 or newer** (Node 24 LTS recommended; `.nvmrc` included) and npm. If your terminal uses Node 18, run `nvm install` and `nvm use` in this directory before installing dependencies.

## Run locally

```sh
npm install
npm run dev
```

Open the address printed by Astro (usually http://localhost:4321).

## Build and preview

```sh
npm run build
npm run preview
```

Build runs Astro's TypeScript checks, then produces the static site in `dist/`. `npm run check` runs only the type check. Use `npm ci` for a clean install from the committed lockfile.

## Before publishing

1. The supplied email address is set in `src/data/site.ts`. Update `EMAIL` there if needed. All email CTAs are `mailto:` links with encoded subjects and a useful inquiry template; they require a configured email app. If you replace it with `YOUR_EMAIL_HERE`, the contact section will clearly show that setup is pending.
2. The supplied LinkedIn URL is also configured in that file. Update `LINKEDIN_URL` there if needed. Empty values render a clearly labeled, non-clickable placeholder. GitHub is already set to the supplied profile.
3. Review the investigation outlines in `src/data/work.ts`. They are explicitly illustrative, not completed engagements. Add verified PR links, hardware/software details, correctness checks, and real measurements before turning them into case studies. The open-source cards describe focus areas, not official project roles.

## GitHub Pages deployment

The repository is `Kushagra7777.github.io` and publishes at **https://Kushagra7777.github.io/**. The `site` URL is set in `astro.config.mjs`; no repository-name base path is needed for this root-domain user site.

1. Commit and push the project to the repository's `main` branch when ready. No commit or push is performed by this setup.
2. Open **GitHub repository → Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions** (not “Deploy from a branch”).
4. Under **Actions**, open **Deploy to GitHub Pages**. A push to `main` triggers the workflow; use **Run workflow** if the push occurred before Pages was enabled.
5. The workflow installs with `npm ci`, checks types, builds, uploads `dist/`, and deploys using the official GitHub Pages actions. The completed deployment shows the site URL. No manual `dist/` copying is needed.

The `github-pages` environment may require approval if your repository has protection rules. The workflow itself has only the permissions needed for build and Pages deployment. See [Astro's GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) and [GitHub's custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Editing guide

- `src/components/`: page sections, reusable icons, and the GPU illustration.
- `src/data/site.ts`: email, LinkedIn, GitHub, and inquiry templates.
- `src/data/work.ts`: investigation cards and their real, statically generated notes pages.
- `src/layouts/Layout.astro`: title, description, canonical, OpenGraph, and Twitter metadata.
- `src/styles/global.css`: colors, layout, responsive rules, and motion.
- `src/scripts/site.ts`: mobile navigation, one-time reveals, and the scroll story; no client framework.
- `public/`: favicon, social card, robots, and sitemap. Update the sitemap if adding routes.
- `.github/workflows/deploy.yml`: GitHub Pages build and deployment.

The GPU illustration and trace diagrams are **schematic**, not hardware diagrams or performance measurements. Replace them with local images in `public/images/` if desired; use meaningful alt text, explicit dimensions, responsive sizes, and lazy loading below the fold. Avoid adding third-party image dependencies to the hero.

## Accessibility and performance

Semantic landmarks, skip link, visible keyboard focus, accessible mobile menu, readable contrast, and navigation without JavaScript. Reduced-motion preferences disable decorative motion and reveal transitions; mobile uses a compact, linear story without a sticky panel. No scroll hijacking, animation framework, WebGL, or heavy client runtime. Essential content is visible before JavaScript loads.

## Verification checklist

- Run `npm run build` and preview the production build.
- Check mobile, tablet, and desktop widths; all navigation links, notes pages, and CTAs.
- Test keyboard menu, Escape, skip link, and reduced motion.
- Confirm the supplied email and LinkedIn details before publishing.
- Run Lighthouse against the production preview, not the development server.

## Verified locally · September 24, 2026

- Dependency installation completed with no reported npm vulnerabilities.
- `npm run dev` served HTTP 200; `npm run build` passed with zero errors, warnings, or hints.
- All four static pages built; internal links, anchors, and asset paths resolved.
- Browser checks passed at 320, 375, 390, 430, 582, 768, 1024, 1440, and 1920 pixels with no horizontal document overflow.
- Mobile menu, Escape/focus return, anchor links, inquiry email template, all five story stages, pause control, reduced motion, and no-JavaScript navigation passed.
- Automated axe accessibility checks reported no violations on the home page at phone and desktop sizes and on both notes pages and the 404 page.
- Lighthouse against the local production preview, mobile preset: **Performance 100 / Accessibility 100 / Best Practices 100 / SEO 100**. Local measured LCP was 0.8 seconds, TBT 0 ms, and CLS 0. Hosting and devices can change those measurements.

No commit, push, or live deployment was performed.
