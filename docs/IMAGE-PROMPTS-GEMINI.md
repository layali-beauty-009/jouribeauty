# Gemini Image Prompts — Jouri Beauty (نفس الـ packaging لكل المنتجات)

## المهم — قبل ما تبدا

عندك **تصويرة واحدة ديال الـ packaging الحقيقي** اللي كتبيع؟

1. فـ Gemini: **Upload** → صورة الـ packing ديالك  
2. فعّل **Use image as reference** / Image-to-image  
3. **انسخ "MASTER PACKAGING"** + **prompt المنتج** (المواد فقط كيتبدلو)

> **ما تخلّي Gemini يخترع bottle جديد** — غير يحافظ على **نفس العلبة** و يبدّل المكوّنات حولها.

---

## MASTER PACKAGING (نفس النص — لصق فكل prompt)

```
CRITICAL — PACKAGING (must match reference upload exactly):
Use the uploaded reference photo as the ONLY packaging design. Reproduce the SAME bottle shape, SAME label layout, SAME cap color, SAME glass finish, SAME print positions, SAME brand colors. Do NOT redesign the bottle. Do NOT create a different label. Do NOT use generic OEM serum bottles.

If no reference: Jouri Beauty unified line — one family only:
- Frosted sage-tinted glass bottle (matte, not cheap glossy plastic)
- Label: white band, clinical teal #0F5661 horizontal stripe, "Jouri Beauty" + "جوري للجمال" in clean sans-serif, small product line under stripe (change only this one line of text per SKU)
- Matte white cap — identical cap style on ALL products in the collection
- Premium pharmacy-luxury print quality, embossed or flat matte label — high AED price positioning

Allowed differences between SKUs ONLY:
- Eye product: 15ml slimmer bottle + metal roller-ball tip (same label template, same cap family)
- Face serums (2 products): 30ml same height bottle + glass dropper pipette (identical bottle body and label to each other, only product name text changes)

Forbidden: inventing new packaging per image, different bottle shapes per product, different label colors per product, Alibaba-style white label.
```

---

## Negative prompt (لصق مع كل صورة)

```
No new packaging design, no different bottle from reference, no OEM generic bottle, no factory white-label, no blurry label, no wrong brand name, no cluttered background, no hands, no people, no watermark, no cartoon, no illustration. Photorealistic product photography only. Pure white background #FFFFFF.
```

---

## إعدادات Gemini

| Setting | Value |
|---------|--------|
| Reference image | **صورة packing ديالك** (إجباري) |
| Aspect ratio | **4:5** أو **1:1** |
| Background | أبيض فقط |
| Style | Photorealistic / product photo |

---

## 1. سيروم العين — كافيين / هالات / انتفاخ

**Slug:** `caffeine-under-eye-serum`  
**على اللابل (صغير):** Eye Serum · 5% Caffeine · 15ml  
**المكوّنات للتصوير:** كافيين، ريتينول، هيالورونيك، نياسيناميد

### Prompt

```
[Paste MASTER PACKAGING block above]

Ultra-premium e-commerce product photo, seamless pure white background #FFFFFF, soft studio light, subtle shadow, 8K photorealistic.

The product is the SAME Jouri packaging family as reference — 15ml under-eye format with roller applicator tip only (slimmer bottle, SAME label design as other Jouri serums).

Small label text change only: "Eye Serum" / "سيروم العين" under the teal stripe.

Ingredients arranged cleanly beside the bottle (not covering label):
- roasted coffee beans + 2 green coffee beans (caffeine)
- one clear hyaluronic gel droplet
- one small fresh green leaf (subtle)
- minimal white powder grains (niacinamide hint)

Composition: bottle hero center-right, ingredients left, large white negative space. Luxury Gulf pharmacy brand, collection page, 199–349 AED tier. Same packaging identity as entire Jouri line.
```

---

## 2. سيروم التجاعيد — باكوتشيول / بهتان

**Slug:** `bakuchiol-anti-aging-serum`  
**على اللابل (صغير):** Anti-Aging Serum · Bakuchiol · 30ml  
**المكوّنات:** باكوتشيول 1.3%، فيتامين C، جلوتاثيون، سنتيلا

### Prompt

```
[Paste MASTER PACKAGING block above]

Ultra-premium product photography, pure white background #FFFFFF, soft diffused light, 8K photorealistic.

EXACT same 30ml dropper bottle and label template as reference Jouri packaging — identical to the other face serum in the line, ONLY change small product name text to "Anti-Aging Serum" / "سيروم التجاعيد".

Ingredients beside bottle (styled, premium):
- bakuchiol / babchi seeds and soft tan plant pods
- half orange slice + small zest curl (vitamin C)
- 2–3 centella asiatica leaves
- very subtle pearl powder pinch (glutathione, not glitter)

Bottle upright center-left, ingredients right, white space for crop. Same packing as all Jouri products — do not invent new bottle.
```

---

## 3. سيروم الإصلاح — GHK-Cu / حاجز البشرة

**Slug:** `ghk-cu-barrier-repair-serum`  
**على اللابل (صغير):** Barrier Repair · GHK-Cu · 30ml  
**المكوّنات:** ببتيد نحاس GHK-Cu، إكتوين، هيالورونيك، بانثينول

### Prompt

```
[Paste MASTER PACKAGING block above]

Ultra-premium product photography, pure white #FFFFFF background, clinical studio lighting, 8K photorealistic.

SAME 30ml dropper bottle as reference — identical packaging to anti-aging serum (same glass, same label layout, same cap). Only change small line text to "Barrier Repair" / "سيروم الإصلاح".

Ingredients around bottle:
- 2–3 hyaluronic acid gel beads
- fresh aloe vera slice (hydration / panthenol)
- one subtle copper-toned droplet on glass (GHK-Cu hint, minimal)
- tiny crystalline salt/mineral cluster (ectoin, scientific)

Centered composition, soft reflection, premium collection card. Packaging must match reference image exactly — same Jouri line, not a new design.
```

---

## Workflow مختصر (Darija)

1. صوّر **packing حقيقي** ديالك — ضوء ناعم، خلفية بيضاء أو رمادية فاتحة  
2. Gemini → حمّلها كـ **Reference**  
3. لكل منتج: MASTER PACKAGING + prompt المكوّنات  
4. إذا بدّل الشكل → زيد: `Match reference packaging 100%, pixel-perfect label`  
5. حفظ: `jouri-eye.png`, `jouri-aging.png`, `jouri-repair.png` → `frontend/public/products/`

---

## نفس الـ packing فالموقع

بعد ما عندك 3 صور بنفس العلبة:

```ts
// frontend/src/config/products.ts → images.heroProduct
caffeine-under-eye-serum: "/products/jouri-eye.webp"
bakuchiol-anti-aging-serum: "/products/jouri-aging.webp"
ghk-cu-barrier-repair-serum: "/products/jouri-repair.webp"
```
