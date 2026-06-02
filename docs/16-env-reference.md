# Environment Variables Reference

## Frontend (`frontend/.env.example`)

| Variable | Required | Example |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | yes | `https://namabeauty.shop` |
| `NEXT_PUBLIC_API_URL` | yes | `https://api.namabeauty.shop` |
| `NEXT_PUBLIC_META_PIXEL_ID` | ads | `1234567890` |
| `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | ads | `CXXXX` |
| `NEXT_PUBLIC_SNAP_PIXEL_ID` | ads | `xxxxxxxx` |
| `NEXT_PUBLIC_ENABLE_PIXELS` | yes | `true` / `false` |
| `NEXT_PUBLIC_WHATSAPP` | optional | `966501234567` |
| `NEXT_PUBLIC_GTM_ID` | optional | |

**Never** put CAPI tokens in frontend.

## Backend (`backend/.env.example`)

| Variable | Required | Example |
|----------|----------|---------|
| `DATABASE_URL` | yes | `postgres://namabeauty:namabeauty@namabeauty_database:5432/namabeauty?sslmode=disable` |
| `PORT` | yes | `8000` |
| `CORS_ORIGINS` | yes | `https://namabeauty.shop` |
| `GOOGLE_SHEET_WEBHOOK_URL` | yes | Apps Script web app URL |
| `WEBHOOK_SECRET` | recommended | random string |
| `META_PIXEL_ID` | CAPI | same as browser |
| `META_CAPI_ACCESS_TOKEN` | CAPI | from Events Manager |
| `TIKTOK_PIXEL_ID` | CAPI | |
| `TIKTOK_ACCESS_TOKEN` | CAPI | |
| `TIKTOK_TEST_EVENT_CODE` | test | optional |
| `SNAP_PIXEL_ID` | CAPI | |
| `SNAP_CAPI_TOKEN` | CAPI | |
| `API_ADMIN_KEY` | optional | replay sheet sync |
| `ENVIRONMENT` | yes | `production` |

## Easypanel checklist

- [ ] Frontend: all `NEXT_PUBLIC_*` set at **build** time  
- [ ] Backend: `DATABASE_URL` points to internal hostname  
- [ ] Webhook URL tested with curl POST  
- [ ] CAPI tokens only on backend service  

Copy from [templates/frontend.env.example](./templates/frontend.env.example) and [templates/backend.env.example](./templates/backend.env.example).
