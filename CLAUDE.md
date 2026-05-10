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
All colors are CSS custom properties defined at `:root`, enabling runtime customization:
- `--orange`, `--orange-2`, `--orange-deep` (primary brand colors)
- `--bg-0`, `--bg-1`, `--bg-2`, `--bg-3` (background shades)
- `--fg`, `--fg-dim`, `--fg-mute` (foreground text shades)
- `--title-font`, `--title-tracking`, `--title-case` (typography)
- `--atmos-opacity` (background atmosphere effect visibility)

Tailwind config (`tailwind.config.js`) extends these as color utilities: `text-orange`, `bg-bg-1`, etc.

**Font System:**
Four title fonts available (mapped in `src/lib/tweaks.ts`):
- `pirate` → Orbitron with `.02em` tracking
- `racing` → Racing Sans One with `.01em` tracking
- `bebas` → Bebas Neue (uppercase) with `.04em` tracking
- `teko` → Teko (default) with `.02em` tracking

Applied via the `.title-font` class on `<h1>`, `<h2>`, `<h3>` elements.

### Tweaks System (`src/lib/tweaks.ts`)

Enables runtime UI customization without code changes:
- **Interface**: `Tweaks` with `font`, `atmos`, `palette`
- **Defaults**: Teko font, atmosphere off, orange palette
- **Function**: `applyTweaks(tweaks)` sets CSS custom properties on `document.documentElement`
- **Activation**: App listens for postMessage with `type: '__activate_edit_mode'` to show the TweaksPanel
- **Initial state**: `window.TWEAKS` can inject tweaks on page load (legacy compat)

Palettes defined as RGB values: orange, amber, red.

### Scroll Animation System

**Hook:** `useScrollReveal()` in `src/hooks/useScrollReveal.ts`
- Observes DOM elements with class `.reveal` or `.stagger`
- Adds `.in` class when element enters viewport (threshold 0.12)
- CSS transitions on `.in` trigger the animations
- Used in sections to stagger content reveal on scroll

CSS classes are pre-defined in `index.css` (not in this snapshot but convention is standard reveal + stagger patterns).

### Component Organization

**Layout** (`src/components/layout/`):
- `Nav.tsx` — Navigation/header
- `Footer.tsx` — Footer

**Sections** (`src/components/sections/`):
- `Hero.tsx` — Main hero with CTA
- `Services.tsx` — Service process steps + before/after slider
- `About.tsx` — Company info
- `Packages.tsx` — Service packages/pricing
- `Testimonials.tsx` — Client testimonials
- `Faq.tsx` — FAQ section
- `Contact.tsx` — Contact form/info
- `BeforeAfter.tsx` — Before/after image slider (used in Services)

**UI** (`src/components/ui/`):
- `Icons.tsx` — SVG icon components (`Ico.Wrench`, `Ico.Sparkle`, `Ico.Shield`, `Ico.Car`, etc.)
- `Atmosphere.tsx` — Fixed decorative background layers
- `FloatingWhatsApp.tsx` — Fixed WhatsApp button
- `TweaksPanel.tsx` — Edit mode panel for customizing colors/fonts (shown when tweakOn = true)

**Hooks** (`src/hooks/`):
- `useScrollReveal.ts` — Scroll-triggered animations via IntersectionObserver
- `useBeforeAfter.ts` — State logic for before/after slider

**Lib** (`src/lib/`):
- `tweaks.ts` — Tweaks interface, defaults, and applyTweaks function
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

Used in Hero and other sections with `<a href={waLink()}>Contact</a>`.

## Deployment Notes

- No environment variables in current setup
- Build output: `dist/` directory
- All customization happens at runtime via tweaks (no build-time config needed)
- PostMessage API enables parent frame to control edit mode (legacy compatibility for embedded scenarios)

## Key Files to Understand First

1. **App.tsx** — Entry point; shows structure, tweaks state management, scroll reveal hook
2. **src/lib/tweaks.ts** — Color/font customization system
3. **tailwind.config.js** — Color and font definitions
4. **src/components/sections/** — Where content/markup lives; follow ServiceItem pattern
