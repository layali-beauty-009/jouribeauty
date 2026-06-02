# Jouri Beauty — Deploy branches

## Site shows 502?

**502 = domain reaches Easypanel, but the app container is down or wrong port.**

1. **Repository** must be `layali-beauty-009/jouribeauty` (not the empty `frontend` repo unless you pushed `deploy` there).
2. **Branch** `frontend` for store, `backend` for API — or `main` with paths below.
3. **Port** in Easypanel: storefront **3000**, API **4000**.
4. **Redeploy** after push: `./scripts/sync-deploy-branches.sh` then Easypanel → Deploy.
5. **Backend env**: `DATABASE_URL` required (Postgres service). Without it the API never starts.
6. **Domains**: link `jouribeauty.store` → frontend service, `api.jouribeauty.store` → backend service.

Check: `curl -s https://jouribeauty.store` → should be HTML (200), not 502.

---

## Branches on GitHub (`jouribeauty`)

| Branch | Easypanel service | Build path | Dockerfile |
|--------|-------------------|------------|------------|
| **`frontend`** | Storefront | *(empty — root)* | `Dockerfile` |
| **`backend`** | API | *(empty — root)* | `Dockerfile` |
| **`main`** | Monorepo | `frontend/` or `backend/` | see root `Dockerfile` |

### Frontend (Easypanel)

```
Repository: layali-beauty-009/jouribeauty
Branch:     frontend
```

### Backend (Easypanel)

```
Repository: layali-beauty-009/jouribeauty
Branch:     backend
Port:       4000
```

### Update deploy branches after code changes

```bash
./scripts/sync-deploy-branches.sh
```

### Separate repos

Run on your PC: `./scripts/push-separate-repos.sh` → pushes branch **`deploy`** to `frontend` and `backend` repos.
