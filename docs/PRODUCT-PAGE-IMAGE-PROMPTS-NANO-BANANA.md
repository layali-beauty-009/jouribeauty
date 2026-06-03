# Product page images — Nano Banana Pro (جوري للجمال)

ثلاث صور لكل منتج على صفحة `/products/[slug]` — نفس ترتيب [namabeauty.shop/products/glutathione-collagen-gummies](https://namabeauty.shop/products/glutathione-collagen-gummies):

| # | المكان في الصفحة | الملف | مرجع المنتج؟ |
|---|------------------|-------|----------------|
| **1** | أعلى الصفحة (قبل/منتج/بعد) | `01-hero-before-after.webp` | **نعم** — حمّل العلبة |
| **2** | قسم «هل تعانين من هذه؟» | `02-problem.webp` | **لا** — بشرة/مشهد فقط |
| **3** | قسم «التركيبة» (تصوير بريميوم) | `03-product-hero.webp` | **نعم** — حمّل العلبة |

## أين تحفظ الملفات

```
frontend/public/products/
  caffeine-under-eye-serum/
    01-hero-before-after.webp
    02-problem.webp
    03-product-hero.webp
  bakuchiol-anti-aging-serum/
    ...
  ghk-cu-barrier-repair-serum/
    ...
```

بعد الرفع → Commit → Redeploy.

---

## إعدادات Nano Banana Pro (عام)

| Setting | القيمة |
|---------|--------|
| Style | Photorealistic, premium Gulf DTC skincare |
| Background | أبيض `#FFFFFF` للمنتج؛ مشاهد طبيعية للمشكلة |
| Negative | cartoon, illustration, plastic skin, over-smoothed face, wrong bottle, OEM generic, watermark, text overlay, medical claims |
| ICP | امرأة/رجل خليجي ٢٢–٤٥، مكيف، حر، دوام — **واقعي مو فلتر انستغرام مبالغ فيه** |

### متى ترفع صورة المنتج (Reference)؟

| Prompt | Reference upload |
|--------|------------------|
| **صورة ١** و **صورة ٣** | **نعم** — صورة packing حقيقي ديالك (نفس العلبة لكل السيرومات) |
| **صورة ٢** | **لا** — ما ترفعش العلبة (مشكلة بشرة/عين فقط) |

---

## MASTER — عبوة جوري (لصق مع صورة ١ و ٣)

```
Use uploaded reference as the ONLY bottle/label. Same Jouri Beauty / جوري للجمال packaging family: frosted sage glass, white label, clinical teal #0F5661 stripe. Do NOT invent a new bottle. Photorealistic, 8K, Gulf pharmacy-luxury, no OEM white-label.
```

---

## سيروم العين — `caffeine-under-eye-serum`

### صورة ١ — قبل | المنتج | بعد  
**ملف:** `01-hero-before-after.webp` · **Reference: نعم**

```
[MASTER PACKAGING]

Ultra-premium horizontal triptych, pure white seamless background, soft studio light, 8K photorealistic.

Layout left-to-right (RTL-friendly for Arabic site):
LEFT panel "قبل": close-up under-eye area of Gulf woman 30s, natural skin — visible dark circles and mild puffiness, tired look, NO makeup, realistic pores, indoor AC lighting (Dubai office vibe). Label small subtle "قبل" in Arabic optional at bottom.
CENTER: Jouri eye serum 15ml with metal roller from reference — hero product, sharp label readable.
RIGHT panel "بعد": SAME woman same angle, under-eye looks brighter and less puffy — subtle realistic improvement only (NOT plastic perfect). Label "بعد" optional.

No medical claims text. No fake influencer filter. Professional e-commerce hero like nama beauty Saudi DTC.
Aspect ratio 16:10 or 4:5.
```

### صورة ٢ — المشكلة  
**ملف:** `02-problem.webp` · **Reference: لا**

```
NO product bottle in frame.

Photorealistic lifestyle close-up: Gulf woman early 30s, natural light near window, visible under-eye dark circles and puffiness, slight fine lines, stressed from screen/AC — empathetic not ugly. Wearing modest modern abaya or neutral top. Dubai/Abu Dhabi apartment feel, soft daylight.

Real skin texture, pores visible, NOT airbrushed. No cartoon. No text overlay. Conveys "هذا أنا قبل ما ألقى حل" for UAE ICP.

Aspect 4:3. Premium editorial skincare ad realism.
```

### صورة ٣ — المنتج بريميوم  
**ملف:** `03-product-hero.webp` · **Reference: نعم**

```
[MASTER PACKAGING]

Ultra-premium product photography, pure white #FFFFFF, reflective surface, 8K.

Center: Jouri 15ml eye serum with roller from reference, upright, label sharp.
Props styled premium (do not cover label): green + roasted coffee beans, one hyaluronic gel bead, small green leaf, minimal — clinical Gulf pharmacy aesthetic.

Soft shadow, luxury serum PDP hero like high-end namabeauty product section. No hands. No people.
Aspect 1:1 or 4:5.
```

---

## سيروم التجاعيد — `bakuchiol-anti-aging-serum`

### صورة ١ — قبل | المنتج | بعد  
**Reference: نعم**

```
[MASTER PACKAGING]

Horizontal triptych, white studio background, 8K photorealistic, nama-style PDP hero.

LEFT "قبل": Gulf woman 35–42, natural indoor light, dull tired skin, fine lines on forehead/cheeks, loss of radiance from AC and sun — realistic NOT aged excessively. Modest Gulf styling.
CENTER: Jouri 30ml dropper serum from reference, label "Anti-Aging" line if on pack.
RIGHT "بعد": same person, healthier glow, smoother appearance, subtle firmness — realistic 2-week skincare ad standard, not facelift.

ICP UAE/Gulf. No medical cure claims. Aspect 16:10.
```

### صورة ٢ — المشكلة  
**Reference: لا**

```
NO product.

Photorealistic: Gulf woman 38, mirror selfie-style but professional quality, noticing dull skin and fine lines, hand near face, soft bathroom or bedroom light. AC-dry skin feel — slight tightness visible in expression.

Authentic Gulf beauty concern moment, relatable for Instagram shopper in Emirates. Realistic skin, no plastic smoothing.

Aspect 4:3. Warm neutral tones, not cold hospital.
```

### صورة ٣ — المنتج بريميوم  
**Reference: نعم**

```
[MASTER PACKAGING]

Premium e-commerce product shot, white #FFFFFF, 8K.

Jouri 30ml dropper bottle center from reference. Props: bakuchiol seed pods, half orange slice, 2 centella leaves, subtle pearl powder — arranged like luxury INCI story, label fully visible.

Reflective white surface, soft studio light. Match bakuchiol card on homepage style but YOUR Jouri label only.
Aspect 1:1.
```

---

## سيروم الإصلاح — `ghk-cu-barrier-repair-serum`

### صورة ١ — قبل | المنتج | بعد  
**Reference: نعم**

```
[MASTER PACKAGING]

Triptych hero, seamless white background, clinical teal accents in props only, 8K.

LEFT "قبل": close-up cheek/jaw Gulf woman 30s — redness, dry patches, stressed barrier look from sun + AC (UAE climate), realistic texture.
CENTER: Jouri 30ml dropper from reference, barrier repair line on label.
RIGHT "بعد": same angle, calmer hydrated skin, less redness — subtle realistic recovery look, NOT medical wound healing claim.

Gulf ICP. Aspect 16:10.
```

### صورة ٢ — المشكلة  
**Reference: لا**

```
NO product.

Photorealistic: woman in Gulf summer context — car AC vent or bright window, touching cheek showing irritation/dryness, lightweight hijab optional, natural expression of discomfort. Skin looks sensitized, dehydrated.

Real pores, no fake filter. Communicates weak barrier + UAE heat/AC. Editorial skincare realism.

Aspect 4:3.
```

### صورة ٣ — المنتج بريميوم  
**Reference: نعم**

```
[MASTER PACKAGING]

Ultra-premium product photo, white background, 8K.

Jouri 30ml dropper center from reference. Props: hyaluronic gel beads, aloe slice, tiny copper-toned droplet (GHK-Cu hint), small mineral crystal — minimal clinical luxury.

Label readable. No PANSLY/OEM brands. Soft reflection on white surface.
Aspect 1:1.
```

---

## Negative prompt (كل الصور)

```
cartoon, illustration, 3D render, plastic doll skin, beauty filter, uncanny face, wrong brand, generic OEM bottle, blurry label, watermark, logo spam, before-after exaggeration, facelift result, clinical disease, blood, needles, hands covering label, cluttered background, dark moody background for product shots, text paragraphs on image
```

---

## ملخص سريع (Darija)

1. **صورة ١ و ٣** → حمّل **packing ديالك** فـ Nano Banana كـ reference  
2. **صورة ٢** → **بلا** منتج، غير مشكل بشرة خليجي واقعي  
3. حطّ الناتج فـ `frontend/public/products/{slug}/` بالأسماء فوق  
4. Redeploy — الصفحة كتقرا المسارات تلقائياً
