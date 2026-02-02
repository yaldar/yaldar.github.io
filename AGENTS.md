# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the TypeScript/React app. `src/index.tsx` boots the app and `src/App.tsx` composes the page sections. `src/pages/` holds top-level sections (e.g., `src/pages/About/About.tsx`), `src/components/` holds reusable UI, and `src/assets/`, `src/data/`, `src/utils/`, `src/types/` hold supporting files.
- `public/` contains static assets and the HTML template.
- `build/` is the generated production output used for GitHub Pages; treat it as a build artifact.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm start` runs the local dev server with hot reload.
- `npm run build` generates the production build into `build/`.
- `npm run deploy` builds and publishes `build/` to GitHub Pages via `gh-pages`.
- Tests use Jest and React Testing Library (see `App.test.tsx` and `src/setupTests.ts`). There is no `test` script in `package.json`, so run `npx react-scripts test` when needed.

## Coding Style & Naming Conventions
- Use TypeScript and `.tsx` for React components.
- Follow the existing 2-space indentation and single-quote imports.
- Keep component and folder names in PascalCase, with co-located styles (e.g., `src/pages/Contact/Contact.tsx` and `Contact.css`).
- Linting is configured in `.eslintrc.json` with Prettier; format code with Prettier before commits when available.

## Testing Guidelines
- Use React Testing Library with jest-dom matchers.
- Name tests `*.test.tsx` and keep them near the feature they cover (the current baseline lives at the repo root as `App.test.tsx`).
- No coverage thresholds are configured in this repo.

## Commit & Pull Request Guidelines
- Commit history favors short, lowercase, past-tense summaries (e.g., "updated scripts", "added contact form"). Use the same concise style.
- PRs should include a clear summary, testing notes (even if "not run"), and screenshots for UI changes when applicable.

## Security & Configuration Notes
- Store local secrets in `.env` and avoid committing credentials.
- Keep `homepage` in `package.json` aligned with the GitHub Pages URL for correct asset paths.
