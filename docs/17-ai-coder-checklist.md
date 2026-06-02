# AI Coder — Definition of Done

## Brand & content

- [ ] Brand name **جوري للجمال** / **Jouri Beauty** everywhere
- [ ] 3 products use **exact** Arabic names from [05-products.md](./05-products.md)
- [ ] Offers **199 / 279 / 349** SAR, default **279**
- [ ] KSA COD copy + phone validation only
- [ ] No medical cure claims; disclaimer in footer

## Pages

- [ ] Home with authority sections (no checkout on home)
- [ ] Collection page with 3 CRO cards
- [ ] 3 full product LPs with alternating image/text desktop
- [ ] About, Contact, Thank you
- [ ] Header: **ن** circle + logo + menu + cart
- [ ] Footer complete

## Cart & checkout

- [ ] Add to cart opens drawer
- [ ] Cross-sells for other 2 serums
- [ ] Checkout modal: name + KSA phone
- [ ] 10–15s upsell @ **99 SAR** only
- [ ] Order POST + thank you page

## Backend

- [ ] FastAPI replaces Node backend
- [ ] Alembic migrate on container start
- [ ] Products seed (3 SKUs)
- [ ] Order total validated server-side
- [ ] Sheet webhook + CSV template documented

## Tracking

- [ ] FB / TikTok / Snap pixels deferred
- [ ] CAPI with SHA-256 phone + name
- [ ] TikTok phone E.164 with `+` before hash
- [ ] `event_id` dedup browser + server
- [ ] Single Purchase per order

## Ops

- [ ] `frontend/Dockerfile` + `backend/Dockerfile`
- [ ] `.env.example` both apps
- [ ] `docker-compose.yml` optional local
- [ ] README points to `docs/`
- [ ] Responsive 375px tested
- [ ] Placeholder images all pages

## Deploy

- [ ] Env docs match namabeauty.shop domains
- [ ] Health endpoints pass
- [ ] Test order row in Google Sheet
