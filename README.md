# TASTAR

Website for Triple A Services, Technologies, and Resources. The initial directory was empty; no existing files, framework, pages, or deployment configuration were replaced. GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.

## Local development

Requires Node.js 22.12+ (validated with Node 24) and npm.

```powershell
npm.cmd install --cache .local/npm-cache
npm.cmd run dev -- --port 5173 --strictPort
```

Preview: http://127.0.0.1:5173/

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd test
```

Tests use locally installed Microsoft Edge through Playwright. This is JavaScript; no TypeScript/typecheck command applies. `dist/` contains the production build. Pushes to `main` deploy through GitHub Actions to https://jay-rtl.github.io/tastar/. The production build uses `--base=/tastar/`; local development keeps the root path.

## Structure and editing

- `index.html`: document shell, SEO metadata, responsive image preload. Canonical and OpenGraph metadata target the GitHub Pages URL.
- `src/data.js`: company/contact information, navigation, services, product categories, process, professional profile, and inquiry choices. Product entries support image, imageAlt, name, category, and description. The current entries are category previews, not confirmed products.
- `src/main.js`: page sections, accessible menu, category interactions, inquiry email draft, legal dialogs, and organization structured data.
- `src/styles.css`: palette, typography, responsive layouts, focus states, and reduced-motion overrides.
- `src/motion.js`: reusable GSAP/ScrollTrigger reveal, stagger, scale, line, and parallax behaviors. Sticky storytelling uses native CSS. Expensive scrolling effects are desktop-only; reduced-motion preferences bypass entrance/scroll animation.
- `src/icons.js`: lightweight inline SVG icons.
- `public/brand/`: six original SVG brand deliverables.
- `public/images/`: locally hosted, compressed photography and smaller responsive variants.
- `tests/site.spec.js`: seven viewport checks plus inquiry, menu, and legal-dialog interaction tests.

## Brand

The geometric T combines a central connecting stem with paired field-row branches. It suggests agricultural rows, a shared connection point, and directional movement without using a leaf symbol. The wordmark uses portable SVG text with an Arial fallback; the website uses self-hosted Manrope and Inter.

Assets: `logo-main.svg` (stacked primary), `logo-horizontal.svg`, `logo-light.svg`, `logo-dark.svg`, `brand-mark.svg`, `favicon.svg`.

Palette: forest `#16352C`, agricultural green `#3F704D`, sand `#E9E3D7`, paper `#F7F6F2`, soft lime `#D9E7B6`.

## Contact behavior

The form validates required name, email, inquiry type, and a message of at least 10 non-whitespace characters. It then shows an explicit link to a prefilled email draft. The visitor reviews and sends through their email application. No network submission, email delivery guarantee, database, or form persistence is implemented. Direct email and telephone links are also available. Changes invalidate the previously prepared draft.

## Client content still required

- Review the LinkedIn-based professional summary and provide a portrait for Valerio Tanguilig. See PROFILE-SOURCES.md.
- Actual product names, images, descriptions, availability, and confirmed categories.
- Approval of draft company, mission, and vision copy.
- Final privacy policy and terms appropriate to the published service and hosting environment; current dialogs explicitly identify draft notices.
- Custom domain, if desired; update canonical and OpenGraph metadata when changing it.
- Approved client photography if desired. Current photographs illustrate agriculture and are not represented as TASTAR properties, products, or customers.

## Photography sources

Locally downloaded Unsplash images (no image requests to external services at runtime):

- Fields: https://images.unsplash.com/photo-1500382017468-9049fed747ef
- Produce: https://images.unsplash.com/photo-1471193945509-9ad0617afabf

The professional summary is paraphrased from publicly indexed LinkedIn information at the user?s request. PROFILE-SOURCES.md records the evidence and image-access limitation.
