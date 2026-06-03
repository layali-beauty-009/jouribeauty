# 9 prompts — ChatGPT (صور صفحات المنتجات)

**3 منتجات × 3 صور = 9 prompts**

| صورة | الملف | ارفع صورة العبوة في ChatGPT؟ |
|------|-------|------------------------------|
| 1 | `01-hero-before-after.webp` | **نعم** |
| 2 | `02-problem.webp` | **لا** |
| 3 | `03-product-hero.webp` | **نعم** |

**حفظ في:**
`frontend/public/products/{slug}/`

**Slugs:**
- `caffeine-under-eye-serum`
- `bakuchiol-anti-aging-serum`
- `ghk-cu-barrier-repair-serum`

---

## قبل كل prompt (صورة 1 و 3 فقط)

ارفع صورة packing ديالك في ChatGPT، ثم الصق:

```
Use my uploaded bottle photo exactly for label, shape, and cap. Brand: Jouri Beauty / جوري للجمال. Do not invent a different bottle. Photorealistic, 8K, premium Gulf skincare ecommerce.
```

---

## Negative (الصق بعد كل prompt في ChatGPT إن أمكن)

```
No cartoon, no illustration, no plastic skin, no beauty filter, no wrong bottle, no watermark, no medical claims text, no exaggerated before-after facelift.
```

---

# منتج 1 — سيروم العين (`caffeine-under-eye-serum`)

## Prompt 1 → `01-hero-before-after.webp` (ارفع العبوة ✅)

```
Use my uploaded bottle photo exactly for label, shape, and cap. Brand: Jouri Beauty / جوري للجمال. Do not invent a different bottle. Photorealistic, 8K, premium Gulf skincare ecommerce.

Create one wide image, horizontal triptych on pure white background, soft studio light.

LEFT: close-up under-eye of Gulf woman early 30s — dark circles, mild puffiness, tired look, no makeup, realistic pores, indoor AC office lighting UAE. Small Arabic text "قبل" at bottom optional.

CENTER: her exact eye serum 15ml with metal roller from my upload, label sharp and readable.

RIGHT: same woman same angle — under-eye slightly brighter, less puffy, subtle realistic improvement only (not plastic perfect). Arabic "بعد" optional.

No medical claims. No fake Instagram filter. Aspect ratio 16:10.
```

## Prompt 2 → `02-problem.webp` (لا ترفع العبوة ❌)

```
NO product bottle in the image.

Photorealistic lifestyle photo: Gulf woman early 30s, natural daylight by window in Dubai-style apartment, close-up face showing under-eye dark circles and puffiness, fine lines, screen-tired look. Modest modern clothing. Real skin texture with pores, not airbrushed. Empathetic mood for UAE shopper. No text overlay. Aspect ratio 4:3.
```

## Prompt 3 → `03-product-hero.webp` (ارفع العبوة ✅)

```
Use my uploaded bottle photo exactly for label, shape, and cap. Brand: Jouri Beauty / جوري للجمال. Do not invent a different bottle. Photorealistic, 8K, premium Gulf skincare ecommerce.

Premium product photo on pure white #FFFFFF background with soft reflection.

Center: her eye serum 15ml roller bottle upright, label fully visible.
Around bottle (do not cover label): green coffee beans, roasted coffee beans, one clear hyaluronic gel droplet, one small green leaf — minimal clinical luxury style.

No hands, no people. Aspect ratio 1:1.
```

---

# منتج 2 — سيروم التجاعيد (`bakuchiol-anti-aging-serum`)

## Prompt 4 → `01-hero-before-after.webp` (ارفع العبوة ✅)

```
Use my uploaded bottle photo exactly for label, shape, and cap. Brand: Jouri Beauty / جوري للجمال. Do not invent a different bottle. Photorealistic, 8K, premium Gulf skincare ecommerce.

Horizontal triptych, white studio background, nama-style product page hero.

LEFT "قبل": Gulf woman 35-42, dull tired skin, fine lines, lost radiance from AC and Gulf sun, natural light, modest styling, realistic.

CENTER: her 30ml dropper serum from upload, centered, label readable.

RIGHT "بعد": same woman, healthier glow, smoother look, subtle firmness — realistic skincare ad improvement, not facelift.

UAE/Gulf ICP. Aspect 16:10.
```

## Prompt 5 → `02-problem.webp` (لا ترفع العبوة ❌)

```
NO product bottle.

Photorealistic: Gulf woman 38, professional-quality mirror moment, noticing dull skin and fine lines, hand near cheek, soft bathroom light. Dry AC-stressed skin feeling. Relatable Emirates beauty shopper, real pores, no plastic filter. Warm tones. Aspect 4:3.
```

## Prompt 6 → `03-product-hero.webp` (ارفع العبوة ✅)

```
Use my uploaded bottle photo exactly for label, shape, and cap. Brand: Jouri Beauty / جوري للجمال. Do not invent a different bottle. Photorealistic, 8K, premium Gulf skincare ecommerce.

Luxury product shot, white background, reflective white surface.

Center: 30ml dropper serum from upload. Props beside bottle: bakuchiol seed pods, half orange slice, two centella leaves, tiny pearl powder pinch — label not covered.

Soft studio light. Aspect 1:1.
```

---

# منتج 3 — سيروم الإصلاح (`ghk-cu-barrier-repair-serum`)

## Prompt 7 → `01-hero-before-after.webp` (ارفع العبوة ✅)

```
Use my uploaded bottle photo exactly for label, shape, and cap. Brand: Jouri Beauty / جوري للجمال. Do not invent a different bottle. Photorealistic, 8K, premium Gulf skincare ecommerce.

Triptych on seamless white background.

LEFT "قبل": close-up Gulf woman 30s cheek — redness, dry patches, weak barrier look from sun and AC UAE, realistic skin.

CENTER: 30ml dropper serum from upload, barrier repair product.

RIGHT "بعد": same angle, calmer hydrated skin, less redness — subtle realistic improvement, not medical healing claim.

Aspect 16:10.
```

## Prompt 8 → `02-problem.webp` (لا ترفع العبوة ❌)

```
NO product bottle.

Photorealistic Gulf woman, bright window or car AC context, touching irritated dry cheek, optional light hijab, uncomfortable expression. Dehydrated sensitized skin, real texture, UAE heat and AC story. Editorial skincare realism. Aspect 4:3.
```

## Prompt 9 → `03-product-hero.webp` (ارفع العبوة ✅)

```
Use my uploaded bottle photo exactly for label, shape, and cap. Brand: Jouri Beauty / جوري للجمال. Do not invent a different bottle. Photorealistic, 8K, premium Gulf skincare ecommerce.

Premium product photography, pure white background.

Center: 30ml dropper from upload. Props: hyaluronic gel beads, aloe vera slice, one minimal copper-toned droplet, small mineral crystal cluster — clinical luxury, label visible.

No other brand names. Aspect 1:1.
```
