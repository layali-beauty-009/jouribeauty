# Backend — FastAPI

## Stack

| Tool | Purpose |
|------|---------|
| Python 3.12 | runtime |
| FastAPI | HTTP API |
| Uvicorn | ASGI server |
| SQLAlchemy 2.0 | ORM |
| Alembic | migrations |
| Pydantic v2 | schemas |
| httpx | async webhooks + CAPI |
| psycopg2-binary or asyncpg | Postgres |

## Project layout

```
backend/
  app/
    main.py                 # FastAPI app, CORS, routers
    core/
      config.py             # pydantic-settings from env
      database.py
    models/
      product.py
      order.py
    schemas/
      product.py
      order.py
    api/
      routes/
        health.py
        products.py
        orders.py
        tracking.py         # optional CAPI relay
    services/
      orders.py
      sheets.py             # Google webhook
      capi/
        meta.py
        tiktok.py
        snapchat.py
      hashing.py            # SHA256 normalize phone/name
    seed/
      products.py
  alembic/
    versions/
  alembic.ini
  requirements.txt
  Dockerfile
  docker-entrypoint.sh
```

## `docker-entrypoint.sh`

```bash
#!/bin/sh
set -e
alembic upgrade head
python -m app.seed.products  # idempotent upsert
exec uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}
```

## Endpoints

### `GET /health`

```json
{ "status": "ok", "db": "connected" }
```

### `GET /api/products`

Returns array for cards (slug, names, prices from, theme, image urls).

### `GET /api/products/{slug}`

Full LP JSON (sections can be assembled from DB or static JSON column).

### `POST /api/orders`

Validates:

- `customer.name` length ≥ 3  
- `customer.phone` matches KSA normalization  
- `lines` not empty  
- `total` matches server-side recalculation (prevent tampering)  

Side effects (order):

1. Insert DB  
2. POST to `GOOGLE_SHEET_WEBHOOK_URL`  
3. Send CAPI events (Purchase) with hashed PII  
4. Return `{ id, publicId }`  

### `POST /api/tracking/capi` (optional)

If browser sends events separately:

```json
{
  "eventName": "AddToCart",
  "eventId": "uuid",
  "eventSourceUrl": "https://namabeauty.shop/...",
  "userData": { "phone": "9665...", "name": "..." },
  "customData": { "value": 279, "currency": "SAR" }
}
```

Hash PII server-side before forwarding.

## Security

- `API_KEY` optional header for admin routes  
- Rate limit orders: slowapi or nginx  
- Log without raw phone in production logs (mask last 4)  

## Requirements.txt (starter)

```
fastapi>=0.115.0
uvicorn[standard]>=0.32.0
sqlalchemy>=2.0.36
alembic>=1.14.0
psycopg2-binary>=2.9.10
pydantic-settings>=2.6.0
httpx>=0.28.0
python-multipart>=0.0.12
```

## Replace Express backend

Remove Node/Prisma backend after FastAPI parity. Update Easypanel service build to Python Dockerfile.

## Env

See [templates/backend.env.example](./templates/backend.env.example).
