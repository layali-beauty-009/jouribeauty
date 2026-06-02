# Start Here

## What we are building

A **premium DTC serum brand** that *owns* three products — not a generic marketplace. Every page must feel like **جوري للجمال** made these formulas for Gulf women and men who live in AC, sun, and stress.

Traffic: **TikTok, Snapchat, Meta** (short video + UGC).  
Goal: **High AOV** via 3-tier bundles (199 / 279 / 349 SAR) + cart cross-sells + **99 SAR one-time upsell** at checkout only.

Payment: **COD only** (الدفع عند الاستلام). No card fields.

## Stack (final)

| Layer | Tech |
|-------|------|
| Frontend | **Next.js 15**, React 19, **Tailwind CSS 4**, TypeScript |
| Backend | **Python 3.12**, **FastAPI**, SQLAlchemy 2, **Alembic** |
| DB | **PostgreSQL** (`namabeauty`) on Easypanel |
| Orders export | Backend → **Google Apps Script Web App** → Sheet |
| Tracking | Meta Pixel + TikTok + Snapchat (browser, deferred) + **server CAPI** (hashed PII) |

## Brand header (RTL)

On the **right** (start side in RTL):

1. Circle with letter **ن** (or **J** if Latin lockup) in brand primary color  
2. Next to it: **جوري للجمال** (main line)  
3. Below: **Jouri Beauty** (smaller, tracked caps)  
4. Then: nav links + **cart** icon with count badge  

Reference typography: thin, clean Arabic — **IBM Plex Sans Arabic** + **Inter** + **Dancing Script** for logo accent (see [09-design-system.md](./09-design-system.md)).

## The 3 products (use these names everywhere)

| # | Arabic name | Role |
|---|-------------|------|
| 1 | سيروم جوري لمكافحة التجاعيد والبشرة الباهتة | Anti-aging / dull skin |
| 2 | سيروم جوري لإصلاح البشرة المرهقة والضعيفة | Barrier / tired skin |
| 3 | سيروم جوري للهالات السوداء وانتفاخات العين | Eye circles + puffiness |

Each has a **long product landing page** (CRO machine). Home/collection use **cards** with headline, subhead, stars, scarcity, CTA → LP.

## Offers (every product)

| Tier | Price (SAR) | Label idea |
|------|-------------|------------|
| 1 piece | **199** | جرّبي العلبة الأولى |
| 2 pieces | **279** | الأكثر اختياراً — وفّري |
| 3 pieces | **349** | الروتين الكامل — أفضل قيمة |

Compare-at prices should show **realistic anchor** (e.g. 249 / 398 / 597) — see [05-products.md](./05-products.md).

## Checkout flow (summary)

1. User picks offer on LP → **Add to cart** → **cart drawer opens**  
2. Drawer shows line items + **cross-sells** (other serums / bundles)  
3. **Confirm order** → modal: summary, trust, scarcity, **name + KSA phone**  
4. Valid phone → submit → **10–15s upsell** (related product, **99 SAR**, only discount on site)  
5. Accept/decline upsell → **Thank you** + fire **Purchase** pixels + backend order + Sheet row  

Details: [08-cart-checkout-upsell.md](./08-cart-checkout-upsell.md).

## Phone validation

**KSA only** at launch: `+966` / `05xxxxxxxx` / `5xxxxxxxx` (9 digits after country).  
Normalize to E.164 `9665XXXXXXXX` for storage and CAPI.  
See [08-cart-checkout-upsell.md](./08-cart-checkout-upsell.md) and [13-tracking-pixels.md](./13-tracking-pixels.md).

## Next step for AI coder

Open **[18-AI-CODER-PROMPT.md](./18-AI-CODER-PROMPT.md)** and execute in order with this `docs/` folder open.
