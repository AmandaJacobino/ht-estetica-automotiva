# PROJECT_REPORT.md — HT Estética Automotiva

> Generated: 2026-05-28 | Branch: `main` | Last commit: `ebcaca7 Merge pull request #10`
> Read-only analysis — no files were modified.

---

## 1. Project Identity

| Field | Value |
|---|---|
| **Name** | `ht-estetica-automotiva` |
| **Purpose** | Conversion-focused single-page landing site for a mobile/home-visit automotive polishing and detailing service (Sorocaba, SP, Brazil) |
| **Target audience** | Car owners in the Sorocaba region seeking premium home-service detailing — all content in pt-BR |
| **Primary CTA** | WhatsApp contact for quote requests (`wa.me/5515997861991`) |
| **Version** | `0.1.0` (private, `"type": "module"`, Node `>=18`) |
| **Active branch** | `main` |
| **Last commit** | `ebcaca7` — Merge PR #10 (fix: Vercel tsc permission error) |
| **SEO / Schema** | `og:locale=pt_BR`, canonical `https://htesteticaautomotiva.com.br/`, Schema.org `AutoBodyShop + LocalBusiness`, hours Mon–Sat 08:00–18:00 |

---

## 2. Tech Stack

### Runtime & Framework

| Package | Declared | Resolved (lockfile) |
|---|---|---|
| `react` | `^18.3.1` | 18.3.1 |
| `react-dom` | `^18.3.1` | 18.3.1 |

### Dev Dependencies

| Package | Declared | Resolved |
|---|---|---|
| `typescript` | `^5` | 5.9.3 |
| `vite` | `^5` | 5.x |
| `@vitejs/plugin-react` | `^4` | 4.x |
| `tailwindcss` | `^3` | 3.x |
| `postcss` | `^8` | 8.x |
| `autoprefixer` | `^10` | 10.x |
| `eslint` | `^9.39.4` | 9.39.4 |
| `typescript-eslint` | `^8.59.4` | 8.59.4 |
| `eslint-plugin-react-hooks` | `^7.1.1` | 7.1.1 |
| `eslint-plugin-jsx-a11y` | `^6.10.2` | 6.10.2 |
| `@eslint/js` | `^9.39.4` | 9.39.4 |
| `globals` | `^17.6.0` | 17.6.0 |
| `@types/react` / `@types/react-dom` | `^18` | 18.x |

### Tooling Summary

- **Bundler / dev server:** Vite 5 (`vite.config.ts`) — `target: es2020`, `sourcemap: true`
- **Type checker:** TypeScript strict mode via project references (`tsconfig.json` → `tsconfig.app.json` + `tsconfig.node.json`)
- **CSS pipeline:** PostCSS → Tailwind CSS 3 → Autoprefixer
- **Linter:** ESLint 9 flat config with TS, react-hooks, jsx-a11y recommended rules
- **Formatter:** **None configured** — no Prettier or equivalent
- **CI:** GitHub Actions (`.github/workflows/ci.yml`) — Node 20, runs `tsc --noEmit` + `npm run build` on push to main / PRs
- **No test framework, no state management library, no router** — pure static SPA

### Environment Variables

No `.env`, `.env.local`, or `.env.example` files exist. No environment variables are used at runtime.

---

## 3. Directory Structure

```
ht-estetica-automotiva/
├── .github/workflows/        CI pipeline (ci.yml)
├── .claude/                  Claude Code settings (not application code)
├── public/                   Static assets: favicons, og-image, fonts, robots.txt, sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/           Nav.tsx, Footer.tsx
│   │   ├── sections/         Hero, Services, About, Packages, Testimonials, Faq, Contact, BeforeAfter
│   │   ├── ui/               Atmosphere, BrandWordmark, FloatingWhatsApp, Icons, SectionHeader
│   │   └── ErrorBoundary.tsx
│   ├── hooks/                useScrollReveal.ts, useBeforeAfter.ts
│   ├── lib/                  whatsapp.ts
│   ├── styles/               globals.css (design tokens + all component classes)
│   ├── App.tsx               Section composition root + skip-link
│   └── main.tsx              React mount point + StrictMode + ErrorBoundary
├── dist/                     ⚠ Build output present on disk — verify it is not tracked by git
├── index.html                Vite entry; SEO meta, OG tags, JSON-LD LocalBusiness schema, font preload
├── CLAUDE.md                 Agent instructions (project-level)
├── README.md                 ⚠ Stale — references removed files (see §6)
├── PROJECT_REPORT.md         This file (untracked)
├── package.json / package-lock.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── tsconfig*.json            Project references (root, app, node)
```

**Entry point chain:** `index.html` → `src/main.tsx` → `src/App.tsx`

**Section render order in `App.tsx`:** Atmosphere → Nav → Hero → Services → About → Packages → Testimonials → Faq → Contact → Footer → FloatingWhatsApp

**Orphaned / inconsistent:**
- `dist/` is present in the working tree. Recent commits cleaned `node_modules/`; `dist/` deserves the same treatment. `.gitignore` lists it, but verify no dist files were accidentally committed (`git ls-files dist/`).
- No unused source folders — every folder in `src/` has active consumers.

---

## 4. Key Files Inventory

### Configuration

| File | Role |
|---|---|
| `vite.config.ts` | Vite + React plugin, `target: es2020`, `sourcemap: true` |
| `tsconfig.app.json` | `strict`, `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess` — excellent strictness |
| `tailwind.config.js` | Maps CSS custom properties (`--orange*`, `--bg-*`, `--fg-*`) to Tailwind utilities |
| `eslint.config.js` | TS + react-hooks + jsx-a11y recommended presets; no custom rules |
| `.github/workflows/ci.yml` | Node 20; runs `tsc --noEmit` + `npm run build`; **does not run `npm run lint`** |

### Core Application

| File | Role | Notes |
|---|---|---|
| `src/main.tsx` | React root | StrictMode + ErrorBoundary |
| `src/App.tsx` | Composition root | All sections + skip-link + `useScrollReveal()` |
| `src/styles/globals.css` | Single source of CSS | Design tokens, animation classes, fonts, component classes |
| `src/components/ErrorBoundary.tsx` | Top-level render-error fallback | Class component with reload button |
| `src/lib/whatsapp.ts` | WhatsApp deep-link builder | Hardcoded `WA_NUMBER = '5515997861991'` |

### Layout & UI

| File | Role |
|---|---|
| `src/components/layout/Nav.tsx` | Sticky header, scroll-spy active link, mobile menu (focus trap via `inert`, ESC close, body scroll-lock); exports `NAV_LINKS` |
| `src/components/layout/Footer.tsx` | Wordmark, nav columns, social links; imports `NAV_LINKS` from Nav |
| `src/components/ui/SectionHeader.tsx` | Reusable eyebrow + h2 + subtitle block |
| `src/components/ui/Icons.tsx` | 20+ inline SVG icon components (`Ico.Wrench`, `Ico.Whats`, etc.) |
| `src/components/ui/Atmosphere.tsx` | Fixed decorative background layers (`aria-hidden`) |
| `src/components/ui/FloatingWhatsApp.tsx` | Fixed bottom-right WhatsApp button |

### Sections

| File | Content status |
|---|---|
| `Hero.tsx` | Real — H1, subheading, 2 CTAs. `videoSrc: string \| null = null` intentionally disabled. |
| `Services.tsx` | Real — 4-step process + before/after slider |
| `About.tsx` | Real — brand story + CTAs |
| `Packages.tsx` | Real — 2 package cards (Lavagem Simples / Completa); pricing "sob consulta" |
| `Testimonials.tsx` | Real — 6 testimonials with name + car model (verify these are real clients) |
| `Faq.tsx` | Real — 6-item accessible accordion (`<button aria-expanded>` + `aria-controls`) |
| `Contact.tsx` | Real — WhatsApp, Email, Instagram, location, hours |
| `BeforeAfter.tsx` | ⚠ Placeholder — 4 slides use text labels (`OPACO`/`BRILHO`, `ARRANHADO`/`ESPELHADO`) instead of real before/after images |

### Hooks & Lib

| File | Role |
|---|---|
| `src/hooks/useScrollReveal.ts` | IntersectionObserver: adds `.in` to `.reveal`/`.stagger` elements; respects `prefers-reduced-motion` |
| `src/hooks/useBeforeAfter.ts` | rAF-throttled drag/touch state for slider; cleans up window listeners on unmount |

**Types:** No dedicated `types/` directory — interfaces declared inline per component (`ServiceItem`, `FaqItem`, `Testimonial`, `Slide`, etc.). Consistent with project's co-located data pattern.

**`TODO`/`FIXME`/`HACK`/`XXX`/`placeholder` strings in `src/`:** **None found.**

---

## 5. Current State of the Codebase

### Fully Implemented

- All 8 content sections with real content
- Sticky navigation with scroll-spy active link highlighting
- Mobile menu with focus trap (`inert`), ESC-to-close, body scroll-lock
- FAQ accordion: accessible `<button aria-expanded>` + `aria-controls` pattern
- Before/After draggable slider: rAF-throttled, keyboard + touch support, dots + arrow navigation
- Scroll reveal animations with `prefers-reduced-motion` fallback
- WhatsApp deep-link generator + floating button + multiple section CTAs
- Root-level ErrorBoundary
- SEO: complete meta tags, OG, Twitter cards, JSON-LD `AutoBodyShop/LocalBusiness` schema
- Self-hosted fonts (Inter, Teko) with unicode-range subsetting and `<link rel="preload">`
- Accessibility: skip link, `focus-visible` orange ring, `inert` mobile menu when closed, `noopener noreferrer` on all 13 external links

### In Progress / Pending

- Real before/after image assets (BeforeAfter.tsx currently uses text labels)
- Hero video (`videoSrc` intentionally `null` — manual edit point)
- Verify testimonials are real client quotes
- Production email address (currently a personal Hotmail)
- Verify favicon and OG image assets are final art (see §6 for file sizes)

### TypeScript / Build Status

- **`tsc --noEmit` could not be executed.** `node_modules/` is in an inconsistent state: the lockfile references `typescript@5.9.3` but the binary is not materialized on disk. Production dependencies `react`/`react-dom` also show as MISSING in `npm outdated`. Run `npm ci` to restore a clean install.
- **`build` script does not type-check.** After commit `6c501ab`, `npm run build` runs only `vite build` — TypeScript errors will not block a deploy. Type safety is only enforced by CI's separate `tsc --noEmit` step.
- **Lint is not enforced in CI.** `npm run lint` exists but has no CI step or pre-commit hook.

---

## 6. Open Issues & Obvious Gaps

### Stale README

`README.md` references files and structures that no longer exist in the codebase:

| README reference | Actual state |
|---|---|
| `src/components/ui/TweaksPanel.tsx` | **Removed** — file does not exist |
| `src/lib/tweaks.ts` | **Removed** — file does not exist |
| `index.css` | Actual file is `src/styles/globals.css` |
| `useScrollReveal.tsx` | Actual file is `useScrollReveal.ts` (`.ts`, not `.tsx`) |
| Short-key data pattern (`n`, `ico`, `t`, `d`) | Codebase now uses full readable keys (`number`, `icon`, `title`, `description`); CLAUDE.md is also stale on this point |

### Placeholder Assets in `public/`

| File | Size | Status |
|---|---|---|
| `og-image.png` | ~79 B | 8×8 non-functional placeholder |
| `apple-touch-icon.png` | ~79 B | 8×8 non-functional placeholder |
| `favicon.ico` | ~804 B | Minimal placeholder |
| `favicon.svg` | ~307 B | Minimal placeholder |

### Hardcoded Values Without a Central Config

All values are intentionally public contact info, but they are duplicated across multiple files and `index.html` with no single source of truth:

| Value | Locations |
|---|---|
| Phone `5515997861991` / `(15) 99786-1991` | `src/lib/whatsapp.ts:2`, `Contact.tsx:25`, `index.html:47` (JSON-LD) |
| Email `tedescohenrique@hotmail.com` | `Contact.tsx:31,35`, `Footer.tsx:29` |
| Instagram URL | `Footer.tsx:19`, `Contact.tsx:43`, `index.html:46` (JSON-LD) |
| Canonical URL `https://htesteticaautomotiva.com.br/` | `index.html:11,15,18,26,44,45` |
| Geo coords, opening hours, address | `index.html` JSON-LD block |
| Brand orange `#F25C05` | `index.html:10`, `globals.css:56` |

**Recommendation:** Introduce `src/config/site.ts` exporting `{ phone, phoneDisplay, email, instagram, baseUrl, address, geo }` for React components. For `index.html`, use a Vite HTML plugin or build-time substitution to keep JSON-LD in sync automatically.

### `.gitignore` Gap

The `.gitignore` correctly excludes `node_modules/` and `dist/` but has **no entries for `.env` files**. Currently no env files exist, but if they are introduced before `.gitignore` is updated, accidental commits are possible. Recommended additions:

```
.env
.env.*
!.env.example
*.pem
*.key
```

### Source Maps in Production

`vite.config.ts` sets `sourcemap: true`, which makes the original TypeScript source readable from browser devtools on the live site. For a static marketing page with no proprietary business logic this is low risk, but `sourcemap: 'hidden'` is the conventional choice — maps are generated for error tracking tools but not referenced in the JS bundle.

### CI Gaps

- `npm run lint` is not a CI step — ESLint findings are invisible to the build gate.
- CI does not run `npm ci`; should prefer it over `npm install` to enforce exact lockfile versions.

### Unnecessary Export

`CtaBand` is exported from `Packages.tsx` but only used internally. Harmless but unnecessary.

### Missing Capabilities (not bugs)

- **Analytics:** No GA4, Meta Pixel, Plausible, or equivalent. No conversion tracking.
- **Error reporting:** `ErrorBoundary` catches render errors locally but does not report to any service (Sentry, etc.).
- **Contact form with backend:** `Contact.tsx` links to external channels only. No transactional form.

---

## 7. Dependencies Health

### Outdated Packages (`npm outdated`)

| Package | Installed | Wanted | Latest | Notes |
|---|---|---|---|---|
| `react` / `react-dom` | MISSING* | 18.3.1 | 19.2.6 | Major upgrade available; 18.x still under active patches — no urgency |
| `eslint` | 9.39.4 | 9.39.4 | 10.4.0 | Major upgrade; flat config migration is straightforward |
| `@eslint/js` | 9.39.4 | 9.39.4 | 10.0.1 | Tracks ESLint major |

\* Shows MISSING because `node_modules/` is not fully installed — not a real absence from the project.

All other packages (`vite ^5`, `tailwindcss ^3`, `typescript ^5`, `postcss ^8`, `autoprefixer ^10`, `@vitejs/plugin-react ^4`, `typescript-eslint ^8`, `eslint-plugin-react-hooks ^7`, `eslint-plugin-jsx-a11y ^6`, `globals ^17`) are at current majors with no known deprecations.

**Note on loose ranges:** Several devDependencies use major-only ranges (`^4`, `^5`, `^8`, `^10`), reducing reproducibility across fresh installs. The lockfile (`lockfileVersion: 3`) mitigates this as long as CI runs `npm ci`.

### Security Audit (`npm audit`)

| Vulnerability | Package | Severity | GHSA | Impact |
|---|---|---|---|---|
| Dev server CORS bypass | `esbuild <=0.24.2` | Moderate (CVSS 5.3) | GHSA-67mh-4wv8-2f99 | Dev-only — does not affect production build |
| Path traversal in `.map` handling | `vite <=6.4.1` | Moderate | GHSA-4w7w-66w2-5vf9 | Dev-only — does not affect production build |

Both are **development-server-only** vulnerabilities with no production risk. Patching requires upgrading Vite to 8.x (major). Low priority but worth scheduling.

**No high or critical vulnerabilities found.**
**No secrets, API keys, or tokens found in `src/`.**
**All 13 `target="_blank"` links correctly use `rel="noopener noreferrer"`.**

---

## 8. Recommended Next Steps

### Blocking — Must resolve before launch

1. **Run `npm ci`** to restore the full `node_modules/` tree and verify the local environment matches the lockfile. Then run `npx tsc --noEmit -p tsconfig.app.json` to confirm zero type errors.

2. **Replace placeholder assets in `public/`:**
   - `og-image.png` (currently 8×8 pixels — social shares will be broken)
   - `apple-touch-icon.png` (currently 8×8 — broken on iOS home screen)
   - `favicon.svg` / `favicon.ico` (minimal placeholders)

3. **Replace business contact info:**
   - Swap `tedescohenrique@hotmail.com` with a dedicated business email in `Contact.tsx` and `Footer.tsx`

4. **Supply real before/after image assets** for `BeforeAfter.tsx` — the slider currently shows text labels where images should appear.

5. **Confirm `dist/` is not tracked by git:** run `git ls-files dist/` — if it returns files, remove them and commit.

### High priority — Should fix before launch

6. **Restore type-checking in the build pipeline.** Either re-add `tsc -b` to the `build` script (the Vercel root cause was a missing `npx` prefix, per commits `6c501ab`/`5e50584` — use `"build": "npx tsc -b && vite build"`) or add a dedicated `"typecheck": "tsc --noEmit"` script and run it as a CI step before `npm run build`.

7. **Add `npm run lint` to CI** (`.github/workflows/ci.yml`) so ESLint findings block the gate.

8. **Add `.env` / `*.pem` / `*.key` entries to `.gitignore`** before any secrets are introduced.

9. **Verify testimonial data** — confirm the 6 testimonials are real clients before the site goes live.

### Quality improvements (non-blocking)

10. **Centralize hardcoded brand/contact values** into `src/config/site.ts` to prevent drift between React components and the JSON-LD block in `index.html`.

11. **Change `sourcemap: true` → `sourcemap: 'hidden'`** in `vite.config.ts` to keep source maps for error tracking without exposing TypeScript source in browser devtools.

12. **Sync README** — remove references to `TweaksPanel`, `tweaks.ts`, `index.css`, and the stale data-key pattern.

13. **Add Prettier** or an equivalent formatter to complement the existing ESLint setup.

14. **Run a Lighthouse / Axe audit** before go-live — the codebase already follows strong accessibility patterns, but a final audit will catch any regressions.

15. **Consider adding analytics** (Plausible is lightweight and privacy-friendly) to measure WhatsApp click conversion from day one.

16. **React 19 / ESLint 10 upgrades** — optional, low priority for a static landing page; plan a testing pass before migrating.

---

*Report produced via static read-only analysis and `npm outdated` / `npm audit`. No codebase changes were made. Awaiting instructions.*
