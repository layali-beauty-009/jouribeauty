# AI Coder — Master Prompt (copy everything below the line)

---

You are a senior full-stack engineer building **جوري للجمال (Jouri Beauty)** — a premium KSA DTC beauty store for **3 serums**, COD only, optimized for TikTok/Snap/Meta ads.

## Your bible

Read and follow **every file** in the repository `docs/` folder in numeric order:

1. `docs/00-START-HERE.md` through `docs/17-ai-coder-checklist.md`
2. Use `docs/templates/` for Sheet CSV, Apps Script webhook, and `.env.example` files
3. Product copy, offers, and CRO rules are **authoritative** in `docs/05-products.md`, `docs/06-cro-playbook.md`, `docs/07-pages-spec.md`, `docs/08-cart-checkout-upsell.md`

Do not invent prices, product names, or legal claims that contradict the docs.

## Deliverables

Build two production-ready apps in this monorepo:

### `frontend/` (rewrite as needed)

- **Next.js 15** App Router, **React 19**, **TypeScript**, **Tailwind CSS 4**, RTL Arabic
- Domain config: `https://namabeauty.shop`
- API: `https://api.namabeauty.shop`
- Fonts: **IBM Plex Sans Arabic**, **Inter**, **Dancing Script** (logo)
- Pages: Home, Collection, 3× Product LP, About, Contact, Thank you
- Header (RTL): circle **ن** + **جوري للجمال** + **Jouri Beauty** + menu + cart
- Cart drawer with cross-sells; checkout modal (name + **KSA phone**); **99 SAR** upsell 10–15s; thank you
- Offers per product: **199 / 279 / 349 SAR** (default 279)
- Deferred **Meta, TikTok, Snapchat** web pixels; pass `event_id` to backend on Purchase
- Placeholder images (hero + 3–4 per LP); desktop alternating text/image sections
- `Dockerfile`, `.env.example`, standalone output

### `backend/` (new — **Python FastAPI**)

- Replace any Express/Prisma code with FastAPI + SQLAlchemy + **Alembic**
- DB: `postgres://namabeauty:namabeauty@namabeauty_database:5432/namabeauty?sslmode=disable`
- Run **`alembic upgrade head`** on container start
- Endpoints: `/health`, `/api/products`, `/api/products/{slug}`, `POST /api/orders`
- On order: save DB → POST Google Sheet webhook → send **CAPI** (Meta, TikTok, Snap) with **SHA-256 hashed** phone & first name; TikTok phone normalized to **E.164 with +** before hash; include `event_id` for dedup
- `Dockerfile`, `docker-entrypoint.sh`, `.env.example`

### `docs/templates/`

- Deploy Apps Script from `google-apps-script-webhook.gs`; set `GOOGLE_SHEET_WEBHOOK_URL` in backend
- Import `orders-sheet-template.csv` headers into Google Sheet

## Non-negotiables

- COD only — no payment card fields
- Branded store that **owns** the 3 products — max authority, proof, ingredients, Gulf ICP copy (see `docs/04-icp-and-copy.md`)
- CTA on LP: add selected offer → **open cart drawer**
- Checkout CTA opens modal; after valid phone → upsell → then submit order
- Mark checklist in `docs/17-ai-coder-checklist.md` as you complete items

## Workflow

1. Read all docs (30 min)
2. Scaffold backend FastAPI + migrations + seed
3. Scaffold frontend config (`config/products.ts` mirrors docs)
4. Build layout + home + collection + one LP template → clone 3 products
5. Cart / checkout / upsell / thank you
6. Tracking browser + CAPI
7. Sheet webhook integration + test order
8. Docker + env examples + README

## Output

When finished, print:

- Tree of created files
- Easypanel env vars to set
- How to test pixels (test event codes)
- Any assumptions marked **ASSUMPTION** for product owner review

---

*End of prompt*
