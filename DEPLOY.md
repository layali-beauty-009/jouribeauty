# Jouri Beauty — Deploy branches

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

### Separate repos

Run on your PC: `./scripts/push-separate-repos.sh` → pushes branch **`deploy`** to `frontend` and `backend` repos.
