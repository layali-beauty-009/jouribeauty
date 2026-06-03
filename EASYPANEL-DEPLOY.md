# Easypanel — Deploy بلا صداع (جوري / jouribeauty)

## ✅ تحققنا (2026-06-03)

| Branch | Build `npm` | Dockerfile فالجذر | ملاحظة |
|--------|-------------|-------------------|--------|
| `frontend` | ✅ يبني | ✅ | **Build path = فارغ** |
| `backend` | ✅ يبني | ✅ | **Build path = فارغ** |
| `main` (موقع) | ✅ | `Dockerfile` جذر | path فارغ |
| `main` (API) | ✅ | `backend/Dockerfile` | path = `backend` |

الموقع الحي: `https://jouribeauty.store` → **200**  
API: `https://api.jouribeauty.store/health` → **ok**

```bash
./scripts/sync-deploy-branches.sh   # حدّث frontend + backend من main
```

---

## الطريقة السهلة (ننصح بها) — branch `main`

ما تحتاجش branches `frontend` / `backend` إلا إذا عندك service منفصل لكل واحد.

### Service 1 — الموقع (Storefront)

| الحقل | القيمة |
|--------|--------|
| GitHub repo | `layali-beauty-009/jouribeauty` |
| Branch | **`main`** |
| Build path / Root | **فارغ** (ما تكتب `frontend/`) |
| Dockerfile | `Dockerfile` (فالجذر) |
| Port | **3000** |
| Domain | `jouribeauty.store` أو `namabeauty.shop` |

**Build args:**

```
NEXT_PUBLIC_SITE_URL=https://jouribeauty.store
NEXT_PUBLIC_API_URL=https://api.jouribeauty.store
NEXT_PUBLIC_ENABLE_PIXELS=false
```

بعد كل push على `main` → **Deploy** في Easypanel.

---

### Service 2 — API

| الحقل | القيمة |
|--------|--------|
| Branch | **`main`** |
| Build path | **`backend`** |
| Dockerfile | `Dockerfile` |
| Port | **4000** |

**Environment:**

```
DATABASE_URL=postgres://jouribeauty:jouribeauty@jouribeauty_database:5432/jouribeauty?sslmode=disable
PORT=4000
CORS_ORIGINS=https://jouribeauty.store,https://namabeauty.shop
```

---

## علاش branch `frontend` كيفشل؟

| غلطة | النتيجة |
|------|---------|
| Branch `frontend` + Build path `frontend/` | Dockerfile ما كاينش → **build failed** |
| Branch `frontend` + path فارغ | ✅ |
| Branch `main` + path `frontend/` | ❌ |
| Port 80 | **502** |
| Repo `frontend` فارغ على GitHub | **502** |

---

## إذا خدمتك branches منفصلة (`frontend` + `backend`)

**Repo واحد:** `https://github.com/layali-beauty-009/jouribeauty.git`

### Service — الموقع

| الحقل | القيمة الصحيحة |
|--------|----------------|
| Branch | **`frontend`** |
| Build path / Root | **فارغ** — ما تكتب `frontend/` ❌ |
| Dockerfile | `Dockerfile` |
| Port | **3000** |

### Service — API

| الحقل | القيمة الصحيحة |
|--------|----------------|
| Branch | **`backend`** |
| Build path | **فارغ** |
| Dockerfile | `Dockerfile` |
| Port | **4000** |

### أغلاط كتخلّي Deploy يفشل

1. Branch `frontend` + path `frontend/` → **Dockerfile not found**
2. Repo `layali-beauty-009/frontend` (repo فارغ) بدل `jouribeauty`
3. Port **80** بدل 3000 / 4000 → **502**
4. GitHub App ما عندوش access لـ org `layali-beauty-009`
5. ما درتيش **Redeploy** بعد push على branch

حدّث branches من `main`:

```bash
./scripts/sync-deploy-branches.sh
```

---

## تحقق

```bash
curl -I https://jouribeauty.store
# HTTP/2 200
```
