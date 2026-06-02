# Master Brief

## Business objective

Build the **best-converting Gulf DTC beauty store in 2026** for paid social: high **AOV**, high **order confirmation rate**, high **delivery success**, and **brand authority** so premium pricing (199–349 SAR bundles) feels justified.

## Brand promise

**جوري للجمال** = science-backed serums, made for Gulf climate (AC, sun, dehydration), sold with **honest problem → solution** copy — not medical claims.

Positioning line (internal):  
*"روتين جوري يفهم بشرة الخليج — مش كريم عشوائي من الإنترنت."*

## Non-negotiables

1. **COD only** — never collect card data  
2. **Branded ownership** — site must feel like Jouri *manufactures* these 3 serums  
3. **Arabic RTL first** — KSA/Gulf dialect, warm, direct, feminine-friendly but inclusive of men  
4. **Proof stack** on every money page: ingredients, how-it-works, reviews-style quotes (no fake medical outcomes), certifications *placeholders* until real assets provided  
5. **Bundle-first pricing** — default selected offer = **2 pieces @ 279 SAR**  
6. **Cross-sell in cart** — always show the other 2 serums  
7. **Checkout upsell 99 SAR** — only discounted SKU on entire store; only shown post valid phone  
8. **KSA phone validation** before order submit  
9. **Orders to Google Sheet** via webhook + full payload in Postgres  
10. **Pixels**: browser deferred + server CAPI with **SHA-256 hashed** phone/name; shared `event_id` for dedup  
11. **Responsive** — mobile 80%+ traffic; desktop alternating text/image sections  
12. **Placeholder images** until client uploads — never broken layouts  

## Success metrics (post-launch)

| Metric | Target direction |
|--------|------------------|
| LP → Add to cart | > 8% (cold traffic) |
| Cart → checkout open | > 40% |
| Checkout → confirmed order | > 55% |
| Upsell take rate | 15–25% |
| AOV | > 280 SAR (push bundles + upsell) |
| Pixel Purchase match rate | > 75% (CAPI + browser) |

## Out of scope (v1)

- Card payments, Apple Pay, Tabby/Tamara  
- User accounts / loyalty  
- Multi-country shipping rules (KSA first; UAE copy OK in content but phone = KSA)  
- Inventory sync with ERP  
- Arabic blog / CMS (static config files OK)  

## Authority assets to surface (use placeholders if missing)

- "مختبر وفق معايير الجودة" (generic, no false GSO unless client provides)  
- Vegan / cruelty-free icons  
- "صنع للمناخ الخليجي" badge  
- Ingredient % callouts where defensible (caffeine 5%, bakuchiol, copper peptide GHK-Cu, etc.)  
- **Before/after**: use *illustrative* or "نتائج قد تختلف" — no guaranteed cure language  

## Repo migration note

Existing repo may have **Express/Prisma** backend and **jouribeauty** naming. **Rebuild backend as FastAPI** per [11-backend-fastapi.md](./11-backend-fastapi.md). Rebrand domains to **namabeauty.shop** in env and config.
