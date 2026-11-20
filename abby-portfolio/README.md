# Abby K.Y. Ho — Research & Creative Portfolio

A responsive academic portfolio built with Next.js App Router, TypeScript and Tailwind CSS. It is configured for static export and GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static site is exported to `out/`.

## GitHub Pages deployment

1. Create a GitHub repository and push this project.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys the site.
4. The workflow detects the repository name and sets `GITHUB_PAGES=true`, enabling the correct project-site base path.

For a custom domain or a `username.github.io` user site, review `next.config.ts` and remove/adjust the project `basePath` behaviour as appropriate.

## Content editing

- Research and project content lives in `lib/content.ts`.
- Blog posts are Markdown files in `content/blog/`. Each post has frontmatter for `title`, `date`, `category`, `excerpt`, `readingTime`, and `cover`.
- Update contact and social links in `lib/site.ts`.
- Replace the abstract visual placeholders in `public/images/` with your own project images. Keep descriptive `alt` text in the relevant content entry.
- The CV PDF is stored at `public/files/Abby_CV_2026.pdf`.

## Content accuracy notes

The portfolio uses the supplied CV for verified education, appointments, selected research, projects and talks. Some detail fields requested for research/project pages (for example detailed research questions, complete findings, outcomes and specific media) were not fully specified in the brief or CV. Those sections are explicitly labelled as areas to complete rather than presented as confirmed findings. The blog posts are sample editorial drafts, not previously published articles.

## Accessibility

Semantic landmarks, keyboard-visible focus states, reduced-motion support, responsive navigation, descriptive link labels and sufficient contrast are included. Check any replacement images and final copy before publication.
