# albertomaserati.com

The new version of my personal website. It's not a traditional brochure site — 
given my current role, I didn't have a strict need for one — but I used it as 
an opportunity to experiment with AI-assisted development.

🌐 Live at: [albertomaserati.com](https://albertomaserati.com)

## Tech Stack

- **Next.js 15** (with Turbopack) — React framework for the frontend
- **React 19** — UI library
- **Tailwind CSS 4** — utility-first styling
- **next-intl** — localization / i18n
- **TypeScript** — static typing
- Fonts and colour palette inherited from the previous version of the site

## Development Process

I started by manually building the skeleton of the site — structure, 
localization, libraries — then brought in AI tools to accelerate the rest.

- **Claude Code** — used to organize sections, define layout, and apply 
  the visual style from the previous site
- **GitHub Copilot** (via VS Code) — switched to this in the second phase 
  of development

Both tools genuinely surprised me: the boost to development speed and the 
quality of the generated code were better than expected.

## Deploy

A **GitHub Action** handles deployment to an Azure Static Web App, 
reachable at `test.albertomaserati.com`.

For production, I used the native **Vercel–GitHub integration** 
(new to me, works seamlessly) — the site is now live there.

