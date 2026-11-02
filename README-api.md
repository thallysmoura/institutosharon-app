# Backend + banco (Instituto Sharon)

```powershell
docker compose up -d                 # Postgres 16-alpine, porta 5433 (volume sharon_pgdata)
cd api; pnpm install; copy .env.example .env
pnpm dev                             # http://localhost:4000  (landing + API em /api)
```

Endpoints: `GET /api/health` · `POST /api/auth/register` · `POST /api/auth/login` · `GET /api/auth/me` (Bearer) · `POST /api/leads` · `GET /api/leads` (admin).
Admin de desenvolvimento criado no start via `ADMIN_EMAIL`/`ADMIN_PASSWORD` do `.env`.
