# Frontend Stack & Rules

## Core stack

| Package | Version | Purpose |
|---------|---------|---------|
| next | 15.x | App Router, SSG, standalone Docker |
| react / react-dom | 19.x | UI |
| typescript | 5.x | types |
| tailwindcss | 4.x | styling (`@import "tailwindcss"`) |
| lucide-react | latest | icons |

### Optional (recommended)

| Package | Purpose |
|---------|---------|
| zod | form + API validation |
| react-hook-form | checkout form |
| uuid | event_id generation |
| clsx / tailwind-merge | classNames |

**Do not add** Redux, MUI, Bootstrap — keep bundle small for mobile KSA.

## Folder structure

```
frontend/src/
  app/
    layout.tsx          # fonts, providers, pixels
    page.tsx            # home
    collection/page.tsx
    about/page.tsx
    contact/page.tsx
    products/[slug]/page.tsx
    thank-you/page.tsx
  components/
    layout/             # Header, Footer, AnnouncementBar
    home/               # sections
    product/            # LP sections
    cart/               # Drawer, CheckoutModal, UpsellModal
    ui/                 # placeholders, buttons
  config/
    business.ts         # brand, COD, market KSA
    products.ts         # all copy + offers
  context/
    CartContext.tsx
  lib/
    api.ts              # fetch backend
    phone.ts            # KSA normalize + validate
    tracking/
      browser.ts        # deferred pixels
      event-id.ts
```

## Coding rules

1. **Server Components by default** — `"use client"` only for cart, forms, modals, pixels  
2. **Config-driven copy** — no hardcoded Arabic in random components; pull from `config/products.ts`  
3. **No `any`** — strict TypeScript  
4. **Images:** `next/image` when real URLs exist; placeholders as CSS/SVG until then  
5. **API URL:** `process.env.NEXT_PUBLIC_API_URL`  
6. **RTL:** use `text-right`, logical margin `ms-*` / `me-*`, test on mobile 375px  
7. **Performance:** dynamic import checkout modal; defer pixel scripts (see tracking doc)  
8. **SEO:** metadata per LP from product config  

## `next.config.ts`

```typescript
const nextConfig = {
  output: "standalone",
};
```

## Docker

Multi-stage Node 22 Alpine — copy `.next/standalone`, expose 3000, `HOSTNAME=0.0.0.0`.

## Environment

Copy [templates/frontend.env.example](./templates/frontend.env.example).

## Replace existing frontend

Current repo may have UAE/Express assumptions — **realign**:

- `businessConfig.market.countryCode` → `SA`  
- `currency` → `SAR`  
- Phone validation → KSA  
- Domain → namabeauty.shop  
- Product names → canonical Arabic from [05-products.md](./05-products.md)  
- Offers → 199 / 279 / 349  

## Skills file for AI

See [skills/frontend-cro.md](./skills/frontend-cro.md) — short reminders when editing UI.
