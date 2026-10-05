# Frujt Global and TASTAR — local review

## Audit and scope

Existing Vite / vanilla JavaScript single page, npm, self-hosted Manrope and Inter, custom CSS and GSAP/ScrollTrigger. Content is centralized in src/data.js; rendering and interactions are in src/main.js. Existing galleries, career history, product accordions, email-draft inquiry flow, legal dialogs, and responsive navigation remain. No routing library or backend added. GitHub Pages workflow unchanged.

## Changes

- Frujt Global leads the header, hero, and brand presentation. TASTAR is a connected business under the same operation and ABN, based on client confirmation.
- Shared services, contact, and visual language. No unconfirmed division-specific services or responsibilities assigned.
- Two neutral business panels and shared navigation; products, markets, and photos remain accessible through section shortcuts.
- The supplied Frujt business-card logo is manually recreated as SVG with two broad circular arrows and a blue geographic globe. Original TASTAR files remain untouched. See public/brand/FRUJT-LOGO-NOTES.md for the five new assets and placements.
- Client field photography replaces stock imagery in active page sections. Original files remain in public/images/client. Named copies live under agriculture/ and tastar/.
- Professional name updated to Valerio C. Tanguilig, PhD; role is Agronomist / Plant Biologist, as supplied.
- Metadata and organization brand data now represent both businesses.

## Files

Changed: index.html, src/data.js, src/main.js, src/motion.js, tests/site.spec.js.

New: src/brands.js, src/unified.css, public/brand/shared-mark-light.svg, public/brand/shared-mark-dark.svg, five Frujt SVG logo assets, the owner portrait, four named client image copies, image-folder guidance, and this handoff.

src/brands.js controls brand hierarchy, neutral division copy, and section image choices. Existing gallery sources remain in src/data.js.

## Client input outstanding

- Confirm exact distinction between the two businesses when known.
- Original vector artwork, if available, to replace the manually recreated SVG; review the recreation against the supplied card.
- Owner portrait supplied and connected at public/images/profile/valerio-tanguilig.jpg. The original composition is preserved.
- ABN number and registered entity name if they should be displayed. No number or legal entity name has been invented.
- Confirm product details and final legal copy before publication.

## Review

Local preview: http://127.0.0.1:5175/

The user approved publication of the complete reviewed update on 5 October 2026. Target: https://jay-rtl.github.io/tastar/. No TypeScript configuration exists, so typecheck is not applicable.

Validation: lint, production build, and git diff --check passed. All 11 Playwright tests passed, including seven viewport widths (375-1440 px), division inquiries, gallery image loading, keyboard navigation, reduced motion, and desktop/mobile Axe A/AA scans. Desktop and mobile hero/division screenshots reviewed. No broken internal anchors or browser runtime errors found in checked flows. Performance preserves the existing lean stack, self-hosted assets, lazy images, and reduced-motion behavior; no new Lighthouse score was measured.
