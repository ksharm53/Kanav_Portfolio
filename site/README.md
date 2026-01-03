# Kanav Portfolio — Modern Scaffold

This is a Vite + React + Tailwind scaffold that migrates core content from the legacy static site.

Quick start:

```bash
cd site
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Notes:
- Static images are referenced from the repository `assets/images` directory to avoid duplicating large files.
- Provide your resume file as `site/public/resume.pdf` (or update the sidebar link) and I'll integrate it into the UI.
 - The resume PDF has been added as `site/public/resume.pdf` (downloadable from the site).

Deployment (GitHub Pages via Actions)

1. Push changes to the `main` branch. The workflow `.github/workflows/deploy.yml` will build the site and publish `site/dist` to the `gh-pages` branch automatically.

Manual preview:

```bash
cd site
npm install
npm run build
npm run preview
```
