# Easypanel — Deploy بلا صداع (جوري / jouribeauty)

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

## إذا خدمتك branches منفصلة

```
Storefront → branch frontend | path فارغ | port 3000
API        → branch backend  | path فارغ | port 4000
```

حدّث من المشروع:

```bash
./scripts/sync-deploy-branches.sh
git push   # (السكريبت كيدفع frontend و backend)
```

---

## تحقق

```bash
curl -I https://jouribeauty.store
# HTTP/2 200
```
