# Easypanel deployment — Jouri Beauty

## Error: `Repository not found`

This happens when Easypanel’s **GitHub account** cannot access the org `layali-beauty-009` (very common with organization repos).

### Fix 1 — Use Public Git URL (recommended)

Do **not** pick the repo from the GitHub dropdown. Use **Custom Git** / **Public Repository URL**:

| Field | Value |
|-------|--------|
| **Repository URL** | `https://github.com/layali-beauty-009/jouribeauty.git` |
| **Branch** | `easypanel-frontend` |
| **Dockerfile path** | `Dockerfile` |
| **Root / Source directory** | *(empty)* |

Branch `easypanel-frontend` has the Next.js app and `Dockerfile` at the **root** (no `frontend/` subfolder).

### Fix 2 — Grant GitHub org access

1. Easypanel → **Settings** → **GitHub** → reconnect
2. On GitHub: **Settings → Applications → Easypanel** (or installed GitHub App)
3. **Grant access** to organization **`layali-beauty-009`**
4. Retry selecting `layali-beauty-009/jouribeauty`

### Fix 3 — Keep repo `frontend` (your current Easypanel service)

Push this folder to `layali-beauty-009/frontend` from your PC (account **BAYLA09**):

```bash
git clone https://github.com/layali-beauty-009/jouribeauty.git
cd jouribeauty
git checkout easypanel-frontend
# all files are at root — copy to your frontend clone or push this branch to frontend repo
```

---

## Build arguments

```
NEXT_PUBLIC_SITE_URL=https://jouribeauty.store
NEXT_PUBLIC_API_URL=https://api.jouribeauty.store
NEXT_PUBLIC_ENABLE_PIXELS=true
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_TIKTOK_PIXEL_ID=
NEXT_PUBLIC_SNAP_PIXEL_ID=
PORT=3000
```

---

## API service (backend)

| Field | Value |
|-------|--------|
| Repository URL | `https://github.com/layali-beauty-009/jouribeauty.git` |
| Branch | `main` |
| Root directory | `backend` |
| Port | `4000` |

```env
DATABASE_URL=postgres://jouribeauty:jouribeauty@jouribeauty_database:5432/jouribeauty?sslmode=disable
CORS_ORIGINS=https://jouribeauty.store,https://www.jouribeauty.store
PORT=4000
```
