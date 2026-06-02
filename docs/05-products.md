# Products Catalog

## Offer tiers (all 3 products)

| ID | Qty | Price SAR | Compare-at (anchor) | Badge |
|----|-----|-----------|---------------------|-------|
| `one` | 1 | **199** | 249 | جرّبي أول عبوة |
| `two` | 2 | **279** | 398 | **الأكثر اختياراً** (default) |
| `three` | 3 | **349** | 597 | الأكثر توفيراً |

Savings copy:

- 2-pack: وفّري **119** ريال  
- 3-pack: وفّري **248** ريال  

## Product 1 — Anti-aging / dull skin

| Field | Value |
|-------|-------|
| Slug | `jouri-anti-aging-serum` |
| SKU base | `JOURI-AGE-30` |
| Arabic name | سيروم جوري لمكافحة التجاعيد والبشرة الباهتة |
| Hero ingredient | باكوتشيول (بديل طبيعي للريتينول) |
| Volume | 30ml |
| Theme color | Lavender / lilac |
| Target | خطوط مبكرة، بهتان، ملمس خشن |

**Card headline example:** "باهتة ومتهالكة؟ رجّعي لمعة الشباب بدون تهيّج الريتينول"  
**Card sub:** باكوتشيول + فيتامين سي — روتين ليلي ونهاري  

**Cross-sell priority:** Product 2 (barrier) then Product 3 (eye)  

**Checkout upsell (99 SAR):** Product 3 mini/eye roller variant `JOURI-EYE-UPSALE-99` when cart has Product 1 or 2  

## Product 2 — Barrier repair / tired skin

| Field | Value |
|-------|-------|
| Slug | `jouri-barrier-repair-serum` |
| SKU base | `JOURI-BARRIER-30` |
| Arabic name | سيروم جوري لإصلاح البشرة المرهقة والضعيفة |
| Hero ingredient | ببتيد النحاس GHK-Cu |
| Volume | 30ml |
| Theme color | Navy + ice blue |
| Target | حاجز ضعيف، شد من المكيف، بشرة "مجهدة" |

**Card headline:** "المكيف خلّى بشرتج حساسة ومشدودة؟ أصلحي الحاجز من أول أسبوع"  

**Cross-sell:** Product 1, Product 3  

**Upsell when cart has P2:** Product 3 @ 99  

## Product 3 — Eye / dark circles / puffiness

| Field | Value |
|-------|-------|
| Slug | `jouri-eye-serum` |
| SKU base | `JOURI-EYE-15` |
| Arabic name | سيروم جوري للهالات السوداء وانتفاخات العين |
| Hero ingredient | كافيين 5% |
| Volume | 15ml + roller |
| Theme color | Royal blue |
| Target | هالات، انتفاخ، خطوط تحت العين |

**Card headline:** "عيونك تبان تعبانة؟ كافيين ٥٪ + رولر يبرد ويخفّف الانتفاخ"  

**Cross-sell:** Product 1, Product 2  

**Upsell when cart has P3 only:** Product 2 sample @ 99 OR second eye @ 99 (pick one in config)  

## Upsell product (checkout only)

| Field | Value |
|-------|-------|
| Name | عيّنة سيروم جوري للعين — عرض لمرة واحدة |
| Price | **99 SAR** (only discounted SKU) |
| SKU | `JOURI-UPSELL-99` |
| Timer | 10–15 seconds countdown |
| Rule | Shown **once** per session after valid phone submit step |

## SKU matrix (orders)

| Cart offer | SKU example |
|------------|-------------|
| P1 ×1 | `JOURI-AGE-1X` |
| P1 ×2 | `JOURI-AGE-2X` |
| P1 ×3 | `JOURI-AGE-3X` |
| … | same pattern for BARRIER, EYE |

## Ingredient proof blocks (each LP)

Minimum 4 ingredients with: **name, role, one-line benefit, "why Gulf skin" tie-in**.

## Sections required per LP

See [07-pages-spec.md](./07-pages-spec.md) — full CRO section list.

## Config file

Implement as `frontend/src/config/products.ts` + mirror seed in backend `products` table for API consistency.
