# Easypanel — Frontend deploy

## Problem

If build fails with `Dockerfile: no such file or directory`, the Git repo is still the **empty** `frontend` repo (Initial commit only).

## Fix — Option A (recommended): use monorepo

In Easypanel → **jouribeauty / frontend** service:

| Setting | Value |
|---------|--------|
| Repository | `layali-beauty-009/jouribeauty` |
| Branch | `main` (after merging PR #1) |
| Root / Source directory | `frontend` |
| Dockerfile | `Dockerfile` |

Build args (keep yours):

```
NEXT_PUBLIC_SITE_URL=https://jouribeauty.store
NEXT_PUBLIC_API_URL=https://api.jouribeauty.store
NEXT_PUBLIC_ENABLE_PIXELS=true
NEXT_PUBLIC_META_PIXEL_ID=...
NEXT_PUBLIC_TIKTOK_PIXEL_ID=...
NEXT_PUBLIC_SNAP_PIXEL_ID=...
PORT=3000
```

## Fix — Option B: push this folder to `frontend` repo

From your machine:

```bash
git clone https://github.com/layali-beauty-009/frontend.git
cd frontend
# copy all files from jouribeauty/frontend/ into this folder
git add -A
git commit -m "Add Jouri Beauty storefront and Dockerfile"
git push origin main
```

Then redeploy in Easypanel.

## API service (backend)

Use repo `layali-beauty-009/jouribeauty`, root directory `backend`, port `4000`.

Environment:

```
DATABASE_URL=postgres://jouribeauty:jouribeauty@jouribeauty_database:5432/jouribeauty?sslmode=disable
CORS_ORIGINS=https://jouribeauty.store,https://www.jouribeauty.store
PORT=4000
```
