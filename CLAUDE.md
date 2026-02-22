# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev           # Start dev server
pnpm devsafe       # Clean .next cache then start dev (use when Next.js acts up)

# Production
pnpm build         # Build (uses --max-old-space-size=8192)
pnpm start         # Start production server

# Code quality
pnpm lint          # Run ESLint
pnpm lint:fix      # Auto-fix linting issues

# Payload CMS
pnpm generate:types      # Regenerate TypeScript types from Payload collections
pnpm generate:importmap  # Regenerate Payload import map
```

## Architecture

This is a **Next.js 15 App Router portfolio site** with **Payload CMS 3** as the headless backend, PostgreSQL (NeonTech) as the database, and Uploadthing for media storage.

### Route Groups

- `src/app/(frontend)/` — The public-facing portfolio (single page)
- `src/app/(payload)/` — Payload CMS admin panel and API routes (`/admin`, `/api/...`)

### Data Flow

Data flows through three layers:

1. **Collections** (`src/collections/`) — Payload CMS schema definitions. Generate `payload-types.ts` via `pnpm generate:types` after changes.
2. **Services** (`src/app/services/`) — Server-side data fetching using `getPayloadClient()` wrapped in Next.js `unstable_cache()` (5-minute TTL with cache tags).
3. **Server Actions** (`src/components/sections/actions.ts`) — Type-safe actions via `next-safe-action` that call services; consumed by client components via `useAction()`.

### Component Architecture

- `src/components/sections/` — Full-page sections (Header, Projects, Skills, Contact). All are `'use client'` components that call server actions.
- `src/components/ui/` — Reusable UI primitives (Shadcn/ui base + custom). Barrel-exported from `ui/index.ts`.
- `src/components/skeletons/` — Suspense loading skeletons for Projects and Skills.

### Internationalization

- **Context:** `src/lib/contexts/language-context.tsx` — wraps the app; exposes `useLanguage()` hook.
- **Translations:** All UI strings live in `src/lib/translations.ts` as a typed bilingual object (ES/EN).
- **Content:** Bilingual fields in Payload collections (e.g., `nameEN`/`nameES`, `descriptionEN`/`descriptionES`). The `getUserAction` accepts a `language` param and returns the correct CV URL (`curriculum` for ES, `resume` for EN).
- Language is auto-detected from browser and persisted to localStorage.

### Key Libraries

- **Framer Motion (`motion`)** — Animations throughout; `whileInView` for scroll-triggered, `AnimatePresence` for exit animations.
- **Lenis** — Smooth scroll; provided globally via `src/components/lenis-provider.tsx`.
- **Zod + React Hook Form** — Form validation in the contact email form.
- **Sonner** — Toast notifications for form feedback.
- **next-themes** — Dark theme only; no light mode toggle.

### Styling Conventions

- **Tailwind CSS v4** with `@theme` variables in `src/styles/globals.css`.
- Background is always `#050816`; accent colors are purple-to-pink gradients.
- Glassmorphism via `backdrop-blur` is used heavily in cards and the navbar.

### Payload CMS Notes

- Config: `src/payload.config.ts`. Uses `withPayload()` wrapper in `next.config.mjs`.
- Admin credentials are stored in the `Users` collection (auth-enabled). The `Users` collection also stores `curriculum` (ES CV URL) and `resume` (EN resume URL).
- Media uploads go to Uploadthing; the `beforeChange` hook on the Media collection converts the Uploadthing `_key` to a `publicUrl`.
- After modifying any collection schema, run `pnpm generate:types` to keep `payload-types.ts` in sync.

## Environment Variables

```
PAYLOAD_SECRET=
DATABASE_URI=           # PostgreSQL connection string
UPLOADTHING_TOKEN=
NEXT_PUBLIC_URL=        # Optional; deployed URL
```

## Installed Skills

Skills live in `.agents/skills/<name>/SKILL.md`. Each skill is auto-triggered based on its `description` frontmatter.

@.agents/skills/seo-audit/SKILL.md
