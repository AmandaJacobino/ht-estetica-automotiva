# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev
```
Starts Vite dev server at `http://localhost:5173` with hot reload for `.tsx`, `.ts`, and `.css` changes.

### Build
```bash
npm run build
```
Runs TypeScript type-checking (`tsc -b`) then Vite build. Output in `dist/`.

### Preview Production Build
```bash
npm run preview
```
Local preview of the production build from `dist/`.

### Linting & Type Checking
- **Type check**: `npx tsc --noEmit` (strict mode enabled in tsconfig.json)
- **No dedicated linter configured** — rely on TypeScript strict mode

## Architecture

### Core Tech Stack
- **React 18.3** with TypeScript strict mode
- **Vite 5** for bundling/dev server
- **Tailwind CSS 3** with custom color system (extended config)
- **PostCSS + Autoprefixer** for CSS processing

### Styling System

**Custom Property Model:**
All colors are CSS custom properties defined at `:root` in `src/styles/globals.css`:
- `--orange`, `--orange-2`, `--orange-deep`, `--orange-rgb` (primary brand colors)
- `--orange-grad` (gradient shorthand used for backgrounds/text fills)
- `--bg-0`, `--bg-1`, `--bg-2`, `--bg-3` (background shades)
- `--fg`, `--fg-dim`, `--fg-mute` (foreground text shades)
- `--title-font`, `--title-tracking`, `--title-case` (typography)
- `--atmos-opacity` (background atmosphere effect visibility)
- `--space-xs` through `--space-3xl` (spacing scale 8–120px)

Tailwind config (`tailwind.config.js`) extends these as color utilities: `text-orange`, `bg-bg-1`, etc.

**Important:** Always use `rgba(var(--orange-rgb), .xx)` instead of hardcoding `rgba(242, 92, 5, .xx)` so palette changes propagate everywhere.

**Font System:**
The `.title-font` CSS class applies the active title font via `--title-font` custom property (default: Teko). Currently loaded fonts: Orbitron, Teko, Inter.

Applied via the `.title-font` class on `<h1>`, `<h2>`, `<h3>`, `.ba-cap-title` elements.

### Scroll Animation System

**Hook:** `useScrollReveal()` in `src/hooks/useScrollReveal.ts`
- Observes DOM elements with class `.reveal` or `.stagger`
- Adds `.in` class when element enters viewport (threshold 0.12)
- Immediately adds `.in` to all elements when `prefers-reduced-motion` is active
- CSS transitions on `.in` trigger the animations
- Only observes elements present at mount time (adequate for this static page)

### Component Organization

**Layout** (`src/components/layout/`):
- `Nav.tsx` — Navigation/header; exports `NAV_LINKS` for reuse
- `Footer.tsx` — Footer; imports `NAV_LINKS` from Nav.tsx

**Sections** (`src/components/sections/`):
- `Hero.tsx` — Main hero with CTA
- `Services.tsx` — Service process steps + before/after slider
- `About.tsx` — Company info
- `Packages.tsx` — Service packages/pricing
- `Testimonials.tsx` — Client testimonials
- `Faq.tsx` — FAQ section (accessible accordion with `<button aria-expanded>`)
- `Contact.tsx` — Contact channels card
- `BeforeAfter.tsx` — Before/after image slider (used in Services)

**UI** (`src/components/ui/`):
- `Icons.tsx` — SVG icon components (`Ico.Wrench`, `Ico.Sparkle`, `Ico.Shield`, `Ico.Car`, etc.)
- `Atmosphere.tsx` — Fixed decorative background layers (`aria-hidden`)
- `FloatingWhatsApp.tsx` — Fixed WhatsApp button
- `SectionHeader.tsx` — Reusable eyebrow + h2 + subtitle block; used by all sections

**Hooks** (`src/hooks/`):
- `useScrollReveal.ts` — Scroll-triggered animations via IntersectionObserver
- `useBeforeAfter.ts` — Drag/touch state for before/after slider; cleans up window listeners on unmount

**Lib** (`src/lib/`):
- `whatsapp.ts` — WhatsApp link generator with phone number and message templates

### Data Patterns

Components define local data as TypeScript interfaces + constant arrays:
```tsx
interface ServiceItem {
  n: string;        // number (display order)
  ico: React.ReactNode;
  t: string;        // title
  d: string;        // description
}

const SERVICE_ITEMS: ServiceItem[] = [
  { n: '01', ico: <Ico.Wrench />, t: 'Title', d: 'Desc' },
  // ...
];
```

No API integration or state management library — all data is co-located with components.

### WhatsApp Integration

**Utility:** `src/lib/whatsapp.ts`
- `WA_NUMBER` = '5515997861991' (Henrique's WhatsApp)
- `waLink(msg?)` generates `https://wa.me/{number}?text={encoded}` URLs
- Default message in Portuguese; can be overridden per CTA

### Accessibility Conventions

- All `target="_blank"` links must use `rel="noopener noreferrer"`
- Interactive elements use `<button>` not `<div onClick>` — see Faq.tsx for the accordion pattern
- Decorative icons/elements use `aria-hidden="true"`
- The `*:focus-visible` rule in globals.css provides the orange keyboard ring — do not set `outline: none` without a visible alternative

## Deployment Notes

- No environment variables in current setup
- Build output: `dist/` directory
- **Pending before launch**: replace `og-image.png`, `favicon.svg`, `favicon.ico` placeholders in `index.html` with real assets; update canonical URL if domain changes
- **Email**: `tedescohenrique@hotmail.com` in Contact.tsx/Footer.tsx should be replaced with a dedicated business address before launch

## Key Files to Understand First

1. **App.tsx** — Entry point; shows structure and scroll reveal hook
2. **src/styles/globals.css** — All global styles, design tokens, and CSS component classes
3. **tailwind.config.js** — Color and font definitions
4. **src/components/sections/** — Where content/markup lives; follow ServiceItem data pattern
5. **src/components/ui/SectionHeader.tsx** — Shared section header pattern
