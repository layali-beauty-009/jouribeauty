# Database Schema

**Database name:** `namabeauty`  
**Connection (Easypanel internal):**

```
postgres://namabeauty:namabeauty@namabeauty_database:5432/namabeauty?sslmode=disable
```

## Tables

### `products`

| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| slug | VARCHAR UNIQUE | `jouri-anti-aging-serum` etc. |
| sku_base | VARCHAR | |
| name_ar | TEXT | full Arabic name |
| name_short_ar | VARCHAR | |
| description_ar | TEXT | |
| hero_ingredient | VARCHAR | |
| volume | VARCHAR | 30ml / 15ml |
| theme_primary | VARCHAR | hex |
| price_from | INT | 199 |
| sort_order | INT | |
| card_headline_ar | TEXT | |
| card_subhead_ar | TEXT | |
| config_json | JSONB | full LP sections, ingredients, FAQ |
| created_at | TIMESTAMPTZ | |

### `offer_tiers` (or embed in config_json)

| Column | Type |
|--------|------|
| id | UUID |
| product_id | FK |
| tier_key | one/two/three |
| quantity | INT |
| price_sar | INT |
| compare_at_sar | INT |
| badge_ar | VARCHAR |
| is_default | BOOL |

### `orders`

| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| public_id | VARCHAR UNIQUE | short ID for thank-you URL |
| customer_name | VARCHAR | |
| customer_phone | VARCHAR | 9665XXXXXXXX |
| subtotal_sar | DECIMAL | |
| upsell_sar | DECIMAL | 0 or 99 |
| total_sar | DECIMAL | |
| currency | CHAR(3) | SAR |
| status | VARCHAR | `pending_confirmation` default |
| upsell_accepted | BOOL | |
| utm_source | VARCHAR | nullable |
| fbp | VARCHAR | nullable |
| fbc | VARCHAR | nullable |
| event_id | VARCHAR | pixel dedup |
| sheet_synced_at | TIMESTAMPTZ | nullable |
| created_at | TIMESTAMPTZ | |

### `order_lines`

| Column | Type |
|--------|------|
| id | UUID |
| order_id | FK |
| sku | VARCHAR |
| product_slug | VARCHAR |
| product_name_ar | VARCHAR |
| quantity | INT |
| unit_price_sar | DECIMAL |
| line_total_sar | DECIMAL |

## Seed data

On startup, upsert 3 products + offer tiers from [05-products.md](./05-products.md).

## Indexes

- `orders.created_at DESC`  
- `orders.customer_phone`  
- `products.slug`  

## Migration command

```bash
alembic revision --autogenerate -m "init"
alembic upgrade head
```

Auto-run on container start per [11-backend-fastapi.md](./11-backend-fastapi.md).
