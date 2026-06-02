# Architecture

## High-level diagram

```mermaid
flowchart TB
  subgraph client [Browser - namabeauty.shop]
    Next[Next.js App Router RTL]
    Pixels[Deferred Pixels FB TT Snap]
    Cart[Cart Context + Drawer]
  end

  subgraph api [api.namabeauty.shop]
    FastAPI[FastAPI]
    CAPI[CAPI Workers]
    Orders[Orders Service]
    Products[Products API]
  end

  subgraph data [Easypanel]
    PG[(PostgreSQL namabeauty)]
  end

  subgraph external [External]
    Sheet[Google Apps Script Web App]
    Meta[Meta Graph CAPI]
    TT[TikTok Events API]
    Snap[Snap CAPI]
  end

  Next -->|REST JSON| FastAPI
  Next --> Pixels
  FastAPI --> PG
  Orders --> Sheet
  CAPI --> Meta
  CAPI --> TT
  CAPI --> Snap
  FastAPI -->|event_id match| Pixels
```

## Monorepo layout

```
frontend/                 # Next.js — deploy port 3000
  src/
    app/                  # routes
    components/           # UI + CRO sections
    config/               # products.ts, business.ts (source of truth for copy)
    context/              # CartContext
    lib/                  # api client, tracking, phone validation
backend/                  # FastAPI — deploy port 8000
  app/
    main.py
    api/routes/
    models/
    services/
    tracking/             # capi meta, tiktok, snap
  alembic/                # migrations
  docker-entrypoint.sh    # migrate on start
docs/                     # this folder
templates/                # sheet CSV, Apps Script sample
```

## API contract (v1)

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/health` | Liveness + DB ping |
| GET | `/api/products` | List 3 products (cards) |
| GET | `/api/products/{slug}` | Full LP payload |
| POST | `/api/orders` | Create order + sheet + CAPI Purchase |
| POST | `/api/events` | Optional: forward browser event_id to CAPI (if not bundled in orders) |

## Order creation flow

1. Frontend validates cart + customer fields client-side  
2. `POST /api/orders` with body:

```json
{
  "customer": { "name": "...", "phone": "9665XXXXXXXX" },
  "lines": [{ "sku": "...", "slug": "...", "qty": 2, "unitPrice": 139.5 }],
  "upsellAccepted": true,
  "upsellSku": "JOURI-EYE-99",
  "subtotal": 378,
  "total": 378,
  "currency": "SAR",
  "source": { "fbp": "...", "fbc": "...", "ttclid": "...", "scid": "..." },
  "eventId": "uuid-v4-shared-with-browser-purchase"
}
```

3. Backend: insert `orders` + `order_lines`, call Sheet webhook, enqueue CAPI with **hashed** `ph`, `fn`  
4. Return `{ orderId, thankYouToken }`  

## Frontend data strategy

- **SSG/ISR** for product LPs where possible (`revalidate: 300`)  
- Product copy can live in `config/products.ts` with optional API merge  
- Cart = **client-only** (localStorage persist) until checkout  

## Security

- CORS: only `https://namabeauty.shop`, `https://www.namabeauty.shop`  
- Rate-limit `POST /api/orders` (e.g. 10/min/IP)  
- Sanitize all text fields; no HTML in names  
- Webhook URL + CAPI tokens **server-only**  
- Never expose Sheet script secret to browser  

## Docker (Easypanel)

| Service | Dockerfile | Port |
|---------|------------|------|
| frontend | `frontend/Dockerfile` | 3000 |
| backend | `backend/Dockerfile` | 8000 |

Internal DB URL (Easypanel):

```
postgres://namabeauty:namabeauty@namabeauty_database:5432/namabeauty?sslmode=disable
```

See [15-deploy-easypanel.md](./15-deploy-easypanel.md).
