# Skill: Frontend CRO (Jouri / Nama Beauty)

When editing UI:

1. Read `docs/05-products.md` for names/prices — never hardcode 249 for 2-pack (use **279**).
2. Default offer tier = **two** (279 SAR).
3. LP CTA must call `addToCart()` then `openCart()`.
4. Arabic copy: Gulf/KSA tone from `docs/04-icp-and-copy.md` — no medical guarantees.
5. Use `font-sans` (IBM Plex Arabic) for headings; `font-brand` only for logo.
6. Desktop LP sections alternate image/text per `docs/07-pages-spec.md`.
7. Placeholders until real images — never break layout.
8. Pixels: defer load; Purchase includes `eventID` matching backend CAPI.
