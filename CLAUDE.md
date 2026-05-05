# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

After any change, push to auto-deploy on Vercel:
```bash
git add . && git commit -m "descrição" && git push
```

## Architecture

Multi-page Vite app (no framework). Two entry points defined in `vite.config.js`:
- `index.html` — form page, saves `{ nome, dia, mes, ano }` to `sessionStorage` and redirects
- `resultado.html` — reads sessionStorage, calculates, renders report, exports PDF

### Data flow

```
index.html
  └─ form submit → sessionStorage("numerologia_dados") → redirect resultado.html
       └─ src/relatorio.js → reads sessionStorage
              ├─ src/engine.js       (pure calculations)
              ├─ src/interpretacoes.js (text content)
              └─ DOM render + fills #pdf-capa for PDF cover
                   └─ src/pdf.js → html2pdf.js (CDN) → download
```

### Key files

- **`src/engine.js`** — all Pythagorean numerology calculations. `reduzir(n)` preserves master numbers 11, 22, 33. All functions are pure and exported individually.
- **`src/interpretacoes.js`** — exports `ARCANOS` (number → archetype name) and `INTERPRETACOES` (object with keys `destino`, `alma`, `personalidade`, `licao`, each mapping numbers 1-9/11/22/33 to 3-paragraph strings).
- **`src/relatorio.js`** — `renderizarRelatorio()` is the single entry point; also populates `#capa-nome` / `#capa-data` for the PDF cover page.
- **`src/pdf.js`** — uses `html2pdf.js` via CDN (`window.html2pdf`). The `onclone` callback is critical: it fixes gradient text (unsupported by html2canvas) by forcing solid colours on `.destino-numero-grande` and `.card-numero`, and activates `.pdf-capa` (hidden on web, visible in PDF).

### CSS variables (defined in `style/main.css`)

| Variable | Use |
|---|---|
| `--roxo-escuro` `#2A1060` | headings, large numbers |
| `--roxo` `#4B2090` | primary brand colour |
| `--rosa` `#C4607A` | accents, ornaments, card stripe |
| `--bg` `#F9F7FC` | page background |
| `--serif` | EB Garamond — all display text and numbers |
| `--sans` | Inter — body and UI |

### PDF generation notes

- `.pdf-capa` is `display:none` on the web; the `onclone` callback sets it to `display:flex` so it appears as the first page of the PDF only.
- `.card-faixa` is a real `<div>` (not `::before`) because html2canvas does not render pseudo-elements with gradients.
- `windowWidth: 900` is set in html2canvas options to force desktop layout regardless of viewport.

## Deploy

Live at **https://numerologia-rosy.vercel.app**. Connected to GitHub `santessencia/numerologia` — every push to `main` triggers automatic redeploy.
