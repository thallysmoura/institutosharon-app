# Instituto Sharon — site institucional

- `web/` — landing page premium (Next.js 14 App Router, TypeScript, Tailwind). `pnpm install && pnpm dev` (porta 3100). Para servir pela API: `NEXT_PUBLIC_SITE_URL=http://localhost:4000 pnpm build` (gera `web/out`).
- `api/` — API NestJS (auth + leads) que também serve `web/out`. Copie `.env.example` para `.env`, depois `pnpm install && pnpm build && node dist/main.js` (porta 4000).
- `docker-compose.yml` — Postgres 16 leve (porta 5433): `docker compose up -d`.
- `landing/` — versão estática anterior (HTML/CSS/JS), mantida como histórico.
- `ESTUDO-INSTITUTO-SHARON.md` — estudo de marca e estratégia.

## Produção (Docker + Cloudflare Tunnel)
`deploy/docker-compose.yml`: db + api + web (nginx) + cloudflared, sem portas abertas no host. Crie `deploy/.env` (POSTGRES_PASSWORD, JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD) e `deploy/cf/` com `config.yml` + credenciais do túnel (ambos fora do Git). Subir: `cd deploy && docker compose up -d --build`.
