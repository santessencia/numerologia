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

Multi-page Vite app (no framework). Pages defined in `vite.config.js`:

| Page | Purpose |
|---|---|
| `captacao.html` | Lead capture — name, birth date, email, WhatsApp |
| `obrigado.html` | Plan selection — Free / R$27 Imediato / R$97 VIP |
| `aguarde.html` | Free plan confirmation |
| `pagamento-sucesso.html` | Post-payment redirect from Mercado Pago |
| `index.html` | Map generator form (used after plan is chosen) |
| `resultado.html` | Renders numerology report + PDF export |

### Full data flow

```
captacao.html
  └─ form submit → Google Sheets (Apps Script) + sessionStorage → /obrigado.html
       └─ plan choice:
            ├─ Free → sessionStorage("plano_escolhido","gratis") → /aguarde.html
            ├─ Imediato/VIP → POST /api/criar-pagamento → Mercado Pago redirect
            │     └─ on success → /pagamento-sucesso.html → /index.html
            └─ Coupon (EVENTO2025/VIP2025) → skip payment → /index.html

index.html
  └─ form submit → sessionStorage("numerologia_dados") → /resultado.html
       └─ src/relatorio.js → reads sessionStorage
              ├─ src/engine.js          (pure calculations)
              └─ src/interpretacoes.js  (text content — Aline Paixão)
                   └─ DOM render + #pdf-template for PDF
                        └─ src/pdf.js → window.print()
```

### Key source files

- **`src/engine.js`** — all Pythagorean numerology calculations. `reduzir(n)` preserves master numbers 11, 22, 33. `anoPessoal(dia, mes)` checks whether birthday has already passed in the current year before choosing the reference year.
- **`src/interpretacoes.js`** — exports `ARCANOS`, `PALAVRAS_CHAVE`, `INTROS`, `INTERPRETACOES` (destino, alma, personalidade, licao, anoPessoal, ausencia, excesso, cristal). Text by therapist Aline Paixão.
- **`src/relatorio.js`** — `renderizarRelatorio()` single entry point; renders both web UI and `#pdf-template`.
- **`src/pdf.js`** — calls `window.print()`. PDF layout is handled entirely via `@media print` in `style/relatorio.css`.

### API (Vercel Serverless Functions)

- **`api/criar-pagamento.js`** — creates Mercado Pago Checkout Preference; returns `init_point` URL. Reads `process.env.MP_ACCESS_TOKEN` and `process.env.APP_URL`.
- **`api/webhook-mp.js`** — receives MP payment notification, verifies approval status, records in Google Sheets.

### Environment variables (Vercel Settings → Environment Variables)

| Variable | Value |
|---|---|
| `MP_ACCESS_TOKEN` | Mercado Pago production access token (APP_USR-...) |
| `APP_URL` | `https://numerologia-rosy.vercel.app` |

### CSS variables (defined in `style/main.css`)

| Variable | Value | Use |
|---|---|---|
| `--roxo-escuro` | `#2A1060` | headings, large numbers |
| `--roxo` | `#4B2090` | primary brand colour |
| `--rosa` | `#C4607A` | accents, ornaments |
| `--bg` | `#F9F7FC` | page background |
| `--serif` | EB Garamond | display text and numbers |
| `--sans` | Inter | body and UI |

### PDF generation

PDF uses `window.print()` — the browser's native print dialog. All print styles are in `style/relatorio.css` under `@media print`:
- Hides web UI elements (header, buttons, navigation)
- Shows `#pdf-template` (hidden on screen via `display:none`)
- Forces A4 layout with page breaks via `break-before: page`

## Deploy

Live at **https://numerologia-rosy.vercel.app**. Connected to GitHub `santessencia/numerologia` — every push to `main` triggers automatic redeploy.
