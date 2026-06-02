# Jouri Beauty — Frontend (Easypanel deploy branch)

This branch contains **only the storefront** with `Dockerfile` at the repository root.

## Easypanel settings

Use **Public Git URL** (avoids GitHub OAuth "Repository not found"):

| Field | Value |
|-------|--------|
| Git URL | `https://github.com/layali-beauty-009/jouribeauty.git` |
| Branch | `easypanel-frontend` |
| Dockerfile | `Dockerfile` |
| Root path | *(leave empty — files are at repo root)* |

Build args:

```
NEXT_PUBLIC_SITE_URL=https://jouribeauty.store
NEXT_PUBLIC_API_URL=https://api.jouribeauty.store
NEXT_PUBLIC_ENABLE_PIXELS=true
PORT=3000
```

Full monorepo (API + DB): use branch `main` instead.
