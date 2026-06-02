# Jouri Beauty

Premium skincare brand for the UAE — three targeted serums under **jouribeauty.store**.

| Service | URL |
|---------|-----|
| Store | https://jouribeauty.store |
| API | https://api.jouribeauty.store |

## Repositories

| Repo | Purpose |
|------|---------|
| [jouribeauty](https://github.com/layali-beauty-009/jouribeauty) | Docker Compose & deployment (this repo) |
| [frontend](https://github.com/layali-beauty-009/frontend) | Next.js storefront |
| [backend](https://github.com/layali-beauty-009/backend) | Express API + PostgreSQL |

## Products

1. **5% Caffeine Under Eye Serum** — puffiness, dark circles, fine lines
2. **Bakuchiol Anti-Aging Serum** — wrinkles, firmness, brightness
3. **GHK-Cu Barrier Repair Serum** — barrier repair, hydration, fine lines

Each product includes **Problem → Solution** benefits in the database and on the product page.

## Quick start (Docker)

```bash
docker compose up --build
```

- Storefront: http://localhost:3000
- API: http://localhost:4000
- Health: http://localhost:4000/health
- Products: http://localhost:4000/api/products

## Database

```
postgres://jouribeauty:jouribeauty@jouribeauty_database:5432/jouribeauty?sslmode=disable
```

On first API start, migrations run and the three serums are seeded automatically.

## Local development

**Backend**

```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate deploy
npm run db:seed
npm run dev
```

**Frontend**

```bash
cd frontend
cp .env.example .env.local
# Set NEXT_PUBLIC_API_URL=http://localhost:4000
npm install
npm run dev
```

## Production deployment

1. Point **jouribeauty.store** → frontend (port 3000)
2. Point **api.jouribeauty.store** → backend (port 4000)
3. Set `DATABASE_URL` on the API service
4. Set `CORS_ORIGINS` to include your storefront domain
5. Set frontend build args:
   - `NEXT_PUBLIC_API_URL=https://api.jouribeauty.store`
   - `NEXT_PUBLIC_SITE_URL=https://jouribeauty.store`

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Service health + DB check |
| GET | `/api/products` | List all active serums |
| GET | `/api/products/:slug` | Single product with benefits |

## Contact

hello@jouribeauty.store
