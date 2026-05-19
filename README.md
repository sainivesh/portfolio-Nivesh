# Portfolio — The Human Layer

A modern, Web3-flavored professional portfolio built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS v4**. The creative concept is **The Human Layer**: you are the interface between protocol-level systems and human intent—shipping products where incentives, interfaces, and operations meet.

## Prerequisites

Portable Node (no admin install) at:

`C:\Users\nivesh.bagavatham\OneDrive - OTSI\Desktop\node-v24.15.0-win-x64`

## Run locally (recommended — no PATH or PowerShell policy needed)

In **Command Prompt** or PowerShell, from this folder:

```text
install.cmd
dev.cmd
```

Then open **http://localhost:5173/**

If `npm` is on your PATH after a Cursor restart:

```text
npm install
npm run dev
```

One-liner without PATH (paste in any terminal):

```powershell
& "C:\Users\nivesh.bagavatham\OneDrive - OTSI\Desktop\node-v24.15.0-win-x64\npm.cmd" run dev
```

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), GitHub Pages, or any static host.

## Personalize

All narrative copy, links, and lists live in **`src/data/portfolio.ts`**. Update:

- `site` — name, role, thesis, email, social URLs  
- `skills` — capability map (layer labels are thematic; change freely)  
- `projects` — case studies; `anchor` is a stylistic “commit hash” footer  
- `experience` — roles and periods  

Typography: **Syne** (display) and **IBM Plex Mono** (technical accents), loaded in `index.html`.

## Theme notes

- **Palette**: deep void background, teal accent, violet secondary—readable contrast, not neon overload.  
- **Motion**: subtle scroll reveals via Framer Motion; respects reduced motion if you extend with `useReducedMotion`.  
- **Texture**: light scanline overlay and grid mesh for a “signal through noise” feel without hurting readability.

## Optional next steps

- Add real **wallet connect** (e.g. wagmi + RainbowKit) for a live “connect” CTA—keep it optional so the site works for all visitors.  
- Add **MDX** or markdown-driven case studies.  
- Wire **analytics** and **Open Graph** images for sharing.

## Git & hosting

This project is set up for Git. To push to GitHub:

1. Create a new repository at [github.com/new](https://github.com/new) (name e.g. `portfolio-nivesh`, **no** README/license — empty repo).
2. In this folder, run (replace `YOUR_USERNAME` with your GitHub username):

```powershell
cd "C:\Users\nivesh.bagavatham\OneDrive - OTSI\Desktop\Portfolio-Nivesh"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-nivesh.git
git push -u origin main
```

**Deploy:** Connect the repo to [Vercel](https://vercel.com), [Netlify](https://www.netlify.com), or GitHub Pages. Build command: `npm run build`, output folder: `dist`.

Edit site copy in `src/data/portfolio.ts`, then commit and push — your host will redeploy automatically if CI is enabled.

## License

MIT — use and adapt freely for your own portfolio.
