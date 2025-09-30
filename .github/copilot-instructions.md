# Copilot Instructions for AI Agents

## Project Overview

- This is a [Next.js](https://nextjs.org) project using the `/app` directory structure, bootstrapped with `create-next-app`.
- The project uses TypeScript, Tailwind CSS, and shadcn/ui components (see `src/components/ui/`).
- Main UI sections are in `src/components/sections/`.
- Utility functions are in `src/lib/utils.ts`.
- Static assets are in the `public/` directory.

## Key Files & Structure

- `src/app/` — Next.js app directory (entry: `page.tsx`, layout: `layout.tsx`, global styles: `globals.css`).
- `src/components/ui/` — Reusable UI primitives, often from shadcn/ui.
- `src/components/sections/` — Page-level or large UI sections.
- `src/lib/` — Utility modules.
- `public/` — Static files (images, SVGs).

## Developer Workflows

- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Build for production:** `npm run build`
- **No custom test scripts or test files detected.**
- **Linting:** Uses ESLint config in `eslint.config.mjs`.
- **Styling:** Tailwind config in `tailwind.config.js` and `postcss.config.mjs`.

## Project Conventions

- Use functional React components with TypeScript.
- UI components are colocated by type: `ui/` for primitives, `sections/` for composed sections.
- Prefer importing from `src/components/ui/` for shared UI elements.
- Use utility functions from `src/lib/utils.ts` for cross-cutting helpers.
- Static assets should be placed in `public/` and referenced with `/` paths.
- Follow Next.js routing and layout conventions in `src/app/`.

## Integration & Patterns

- shadcn/ui components are added via CLI (e.g., `npx shadcn@latest add navigation-menu`).
- No custom API routes or backend logic present.
- No database or external service integration detected.

## Examples

- To add a new section: create a file in `src/components/sections/`, export a functional component, and use it in `src/app/page.tsx`.
- To add a new UI primitive: add to `src/components/ui/` and document usage if non-standard.

## References

- See `README.md` for basic Next.js usage and deployment.
- See `eslint.config.mjs` and `tailwind.config.js` for linting and styling rules.

---

If you are unsure about a pattern or workflow, prefer following the structure and conventions in the `src/` directory and referenced config files. When in doubt, keep code modular and colocated by feature or type.
