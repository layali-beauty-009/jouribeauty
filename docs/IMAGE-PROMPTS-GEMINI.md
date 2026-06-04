# Gemini — 3 صور بنفس الـ packaging (جوري للجمال)

## قبل ما تبدا (ضروري)

عندك **تصويرة واحدة** ديال الـ packing اللي كتبيع؟

1. Gemini → **Upload** صورة الـ packing ديالك  
2. فعّل **Use as reference** / Image-to-image  
3. من تحت: **انسخ prompt واحد كامل** (ما بقاش `[Paste...]` — كولشي داخل)

> **ممنوع:** Gemini يخترع bottle جديد فكل prompt.  
> **المسموح:** نفس العلبة من الـ reference + مكوّنات مختلفة حولها + سطر صغير على اللابل.

---

## Negative prompt (لصق مع كل صورة)

```
No new packaging design, no different bottle from reference, no OEM generic bottle, no factory white-label, no blurry label, no wrong brand name, no cluttered background, no hands, no people, no watermark, no cartoon, no illustration. Photorealistic product photography only. Pure white background #FFFFFF.
```

---

## إعدادات

| | |
|--|--|
| Reference | **صورة packing ديالك فقط** |
| Ratio | 4:5 أو 1:1 |
| Background | أبيض #FFFFFF |

---

## BLOCK مشترك (داخل كل prompt تحت — ما تزيدش packaging جديد)

هاد الجزء **نفسو** فـ 3 prompts؛ ما تبدلوش إلا السطر ديال "SKU label line" و "bottle format" و المكوّنات.

```
PACKAGING — CRITICAL (match uploaded reference 100%):
Reproduce ONLY the bottle/label from the reference photo. Same shape, same label layout, same cap, same glass, same print positions, same brand colors. Do NOT redesign. Do NOT use generic OEM serum bottles.

Collection rules (if reference unclear):
- Frosted sage-tinted glass, matte finish
- White label band + clinical teal #0F5661 stripe
- "Jouri Beauty" + "جوري للجمال" — same typography on all SKUs
- Matte white cap — identical style on entire line

SKU differences ONLY:
- Eye: 15ml slimmer + metal roller tip (same label template)
- Face (2 serums): 30ml dropper — identical bottle body & label between them; change only one small product name line under stripe
```

---

## Prompt 1 — سيروم العين (كافيين)

**Slug:** `caffeine-under-eye-serum`  
**سطر اللابل الصغير:** Eye Serum · 5% Caffeine · 15ml  
**حفظ:** `frontend/public/products/jouri-eye.webp`

```
PACKAGING — CRITICAL (match uploaded reference 100%):
Reproduce ONLY the bottle/label from the reference photo. Same shape, same label layout, same cap, same glass, same print positions, same brand colors. Do NOT redesign. Do NOT use generic OEM serum bottles.
Collection: frosted sage glass, white label + teal #0F5661 stripe, Jouri Beauty / جوري للجمال, matte white cap.
This SKU: 15ml slimmer bottle + metal roller-ball tip. Label text under stripe ONLY: "Eye Serum" / "سيروم العين" · 15ml.

Ultra-premium e-commerce photo, pure white #FFFFFF, soft studio light, subtle shadow, 8K photorealistic.
Bottle hero center-right. Ingredients left (do not cover label): roasted + 2 green coffee beans (caffeine), one hyaluronic gel droplet, one small green leaf, minimal white powder (niacinamide). Large white negative space. Gulf pharmacy luxury, 199–349 SAR tier. Same packaging as entire Jouri line — reference image is source of truth.
```

---

## Prompt 2 — سيروم التجاعيد (باكوتشيول)

**Slug:** `bakuchiol-anti-aging-serum`  
**سطر اللابل:** Anti-Aging Serum · Bakuchiol · 30ml  
**حفظ:** `frontend/public/products/jouri-aging.webp`

```
PACKAGING — CRITICAL (match uploaded reference 100%):
Reproduce ONLY the bottle/label from the reference photo. Same shape, same label layout, same cap, same glass, same print positions, same brand colors. Do NOT redesign. Do NOT use generic OEM serum bottles.
Collection: frosted sage glass, white label + teal #0F5661 stripe, Jouri Beauty / جوري للجمال, matte white cap.
This SKU: 30ml glass dropper — IDENTICAL bottle body and label to the other face serum in the line. Label text under stripe ONLY: "Anti-Aging Serum" / "سيروم التجاعيد" · 30ml.

Ultra-premium product photo, pure white #FFFFFF, soft diffused light, 8K photorealistic.
Bottle upright center-left. Ingredients right: bakuchiol/babchi seeds, half orange + zest (vitamin C), 2–3 centella leaves, subtle pearl pinch (glutathione, not glitter). White space for crop. Same packing as Prompt 3 face serum — only ingredients and label line differ.
```

---

## Prompt 3 — سيروم الإصلاح (GHK-Cu)

**Slug:** `ghk-cu-barrier-repair-serum`  
**سطر اللابل:** Barrier Repair · GHK-Cu · 30ml  
**حفظ:** `frontend/public/products/jouri-repair.webp`

```
PACKAGING — CRITICAL (match uploaded reference 100%):
Reproduce ONLY the bottle/label from the reference photo. Same shape, same label layout, same cap, same glass, same print positions, same brand colors. Do NOT redesign. Do NOT use generic OEM serum bottles.
Collection: frosted sage glass, white label + teal #0F5661 stripe, Jouri Beauty / جوري للجمال, matte white cap.
This SKU: 30ml glass dropper — IDENTICAL to anti-aging face serum (same glass, same label layout, same cap). Label text under stripe ONLY: "Barrier Repair" / "سيروم الإصلاح" · 30ml.

Ultra-premium product photo, pure white #FFFFFF, clinical studio light, 8K photorealistic.
Centered bottle. Ingredients: 2–3 hyaluronic gel beads, aloe slice (panthenol), one minimal copper-toned droplet (GHK-Cu), tiny mineral crystal (ectoin). Soft reflection. Packaging = reference image; not a new design.
```

---

## Workflow (Darija)

1. صوّر **packing ديالك** (ضوء ناعم، خلفية فاتحة)  
2. Gemini → reference = هاد التصويرة **واحدة** لـ 3 المنتجات  
3. Prompt 1 → 2 → 3 (كول واحد copy-paste كامل)  
4. إلا بدّل الشكل: زيد فالآخر `Match reference packaging 100%, pixel-perfect label`  
5. حط الصور فـ `frontend/public/products/` وربط فـ `products.ts`:

```ts
images.heroProduct:
  caffeine-under-eye-serum → "/products/jouri-eye.webp"
  bakuchiol-anti-aging-serum → "/products/jouri-aging.webp"
  ghk-cu-barrier-repair-serum → "/products/jouri-repair.webp"
```

---

## ملخص

| منتج | كيتبدّل | ما كيتبدّلش |
|------|---------|-------------|
| العين | مكوّنات + roller 15ml + سطر Eye | العلبة / اللابل / الألوان |
| التجاعيد | مكوّنات + سطر Anti-Aging | نفس 30ml dropper كالإصلاح |
| الإصلاح | مكوّنات + سطر Barrier | نفس 30ml dropper كالتجاعيد |

**Reference photo = المصدر الوحيد للـ packaging.** المكوّنات حول الزجاجة غير للتسويق.
