# Nama Beauty / Jouri Beauty — Documentation Hub

**Brand (Arabic):** جوري للجمال  
**Brand (English):** Jouri Beauty  
**Store type:** DTC branded beauty (3 serums), COD only, KSA-first  
**Domains:** `https://namabeauty.shop` · API `https://api.namabeauty.shop`  
**Database:** `namabeauty` on Easypanel Postgres  

This folder is the **single source of truth** for the AI coder rebuilding the store to **max CRO**, **max authority**, and **max AOV** for Snapchat / TikTok / Meta traffic.

---

## Read in this order

| # | File | Purpose |
|---|------|---------|
| 0 | [00-START-HERE.md](./00-START-HERE.md) | Quick orientation |
| 1 | [01-MASTER-BRIEF.md](./01-MASTER-BRIEF.md) | Vision, goals, non-negotiables |
| 2 | [02-architecture.md](./02-architecture.md) | Monorepo, services, data flow |
| 3 | [03-brand-positioning.md](./03-brand-positioning.md) | Positioning, authority, trust |
| 4 | [04-icp-and-copy.md](./04-icp-and-copy.md) | KSA/Gulf ICP, voice, dialect |
| 5 | [05-products.md](./05-products.md) | 3 SKUs, slugs, offers, cross-sells |
| 6 | [06-cro-playbook.md](./06-cro-playbook.md) | Conversion psychology + proof |
| 7 | [07-pages-spec.md](./07-pages-spec.md) | Every page + sections |
| 8 | [08-cart-checkout-upsell.md](./08-cart-checkout-upsell.md) | Cart, checkout, 99 SAR upsell |
| 9 | [09-design-system.md](./09-design-system.md) | UI, fonts, layout, images |
| 10 | [10-frontend-stack.md](./10-frontend-stack.md) | Next.js, libs, rules |
| 11 | [11-backend-fastapi.md](./11-backend-fastapi.md) | Python API, migrations |
| 12 | [12-database-schema.md](./12-database-schema.md) | Tables, seed data |
| 13 | [13-tracking-pixels.md](./13-tracking-pixels.md) | Web pixels + CAPI + dedup |
| 14 | [14-orders-sheets-webhook.md](./14-orders-sheets-webhook.md) | Orders → Google Sheet |
| 15 | [15-deploy-easypanel.md](./15-deploy-easypanel.md) | Docker, branches, domains |
| 16 | [16-env-reference.md](./16-env-reference.md) | All env vars |
| 17 | [17-ai-coder-checklist.md](./17-ai-coder-checklist.md) | Definition of done |
| 18 | [18-AI-CODER-PROMPT.md](./18-AI-CODER-PROMPT.md) | Copy-paste prompt to start |
| — | [IMAGE-PROMPTS-GEMINI.md](./IMAGE-PROMPTS-GEMINI.md) | Homepage / collection images |
| — | [PRODUCT-PAGE-IMAGE-PROMPTS-CHATGPT.md](./PRODUCT-PAGE-IMAGE-PROMPTS-CHATGPT.md) | **9 ChatGPT prompts** (3 images × 3 products) |
| — | [PRODUCT-PAGE-IMAGE-PROMPTS-NANO-BANANA.md](./PRODUCT-PAGE-IMAGE-PROMPTS-NANO-BANANA.md) | نفس الـ prompts (Nano Banana) |

---

## Templates

| File | Purpose |
|------|---------|
| [templates/orders-sheet-template.csv](./templates/orders-sheet-template.csv) | Google Sheet column headers |
| [templates/google-apps-script-webhook.gs](./templates/google-apps-script-webhook.gs) | Deploy as Web App → URL in backend env |
| [templates/frontend.env.example](./templates/frontend.env.example) | Easypanel frontend env |
| [templates/backend.env.example](./templates/backend.env.example) | Easypanel backend env |

---

## Deliverables (repo layout)

```
/
├── docs/                    ← you are here
├── frontend/                ← Next.js 15 (App Router), RTL Arabic
├── backend/                 ← FastAPI + SQLAlchemy/Alembic + Postgres
├── docker-compose.yml       ← local dev (optional)
└── README.md                ← link to docs/
```

**Do not** ship until [17-ai-coder-checklist.md](./17-ai-coder-checklist.md) is 100% checked.
