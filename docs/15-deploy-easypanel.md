# Deploy — Easypanel

## Services

| Service | Repo path | Branch strategy | Port | Domain |
|---------|-----------|-----------------|------|--------|
| frontend | `/frontend` | `main` or `frontend` orphan | 3000 | namabeauty.shop |
| backend | `/backend` | `main` or `backend` orphan | 8000 | api.namabeauty.shop |
| postgres | Easypanel addon | — | 5432 | internal only |

## Database

```
postgres://namabeauty:namabeauty@namabeauty_database:5432/namabeauty?sslmode=disable
```

Backend env `DATABASE_URL` = above.

## Frontend Easypanel

| Setting | Value |
|---------|-------|
| Build | Dockerfile in `frontend/` |
| Build args | `NEXT_PUBLIC_*` from env |
| Port | 3000 |
| Health | `/` 200 |

## Backend Easypanel

| Setting | Value |
|---------|-------|
| Build | `backend/Dockerfile` |
| Start | entrypoint runs migrations |
| Port | 8000 |
| Health | `/health` |

## SSL

Enable Let's Encrypt per domain in Easypanel → Domains.

## CORS

```
CORS_ORIGINS=https://namabeauty.shop,https://www.namabeauty.shop
```

## GitHub push

Two folders `frontend/` and `backend/` in one monorepo OR split repos — both need:

- `Dockerfile`  
- `.dockerignore`  
- `README.md` link to docs  

Use `scripts/sync-deploy-branches.sh` if orphan branches needed.

## Post-deploy smoke test

```bash
curl https://api.namabeauty.shop/health
curl -I https://namabeauty.shop
# Place test order with test phone → verify Sheet row
```

## 502 troubleshooting

See root `DEPLOY.md` — usually wrong port, missing DATABASE_URL, or container crash on migrate.
