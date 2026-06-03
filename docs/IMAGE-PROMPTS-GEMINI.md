# Gemini Image Prompts — Jouri Beauty Collection (3 serums)

Use for **collection page** product cards. Aspect ratio: **4:5** or **1:1**. Export high resolution (min 2000px).

**Global negative prompt** (append to every image):

```
No OEM look, no generic white-label bottle, no Alibaba drop-ship packaging, no blurry label, no cheap plastic shine, no cluttered background, no text errors, no extra logos, no hands, no people, no watermark, no cartoon, no illustration style.
```

**Brand bottle direction** (all 3):

- Minimal luxury dermocosmetic bottle, soft matte glass or frosted glass
- Label: clean Arabic-inspired luxury brand **"Jouri"** / **جوري** in refined sans-serif, subtle **clinical teal** `#0F5661` accent line (not gold, not purple)
- Looks like **Sephora / Paula's Choice / SkinCeuticals** tier — NOT factory OEM

---

## 1. Eye serum — سيروم جوري للهالات السوداء وانتفاخات العين

**Slug:** `caffeine-under-eye-serum` · **15ml** · roller applicator

**Active ingredients to show:** Caffeine 5%, retinol, hyaluronic acid, niacinamide

### Main prompt

```
Ultra-premium skincare product photography for a luxury Gulf beauty brand. Pure seamless white background (#FFFFFF), soft studio lighting with gentle shadows, 8K photorealistic.

Hero product: elegant slim skincare bottle 15ml with a metal cooling roller-ball applicator for under-eye serum. Frosted glass body, minimal label "Jouri" in refined typography, subtle teal accent — high-end clinical aesthetic, absolutely NOT generic OEM or white-label factory packaging.

Arranged beside the bottle (styled, not messy): a small cluster of roasted arabica coffee beans (for caffeine), 2–3 fresh green coffee beans, one clear hyaluronic acid gel droplet on glass surface, a few niacinamide-evoking soft white powder grains (minimal), and a tiny botanical retinol reference (one small green leaf, subtle — do not show pills). Ingredients feel fresh, scientific, and expensive.

Composition: product centered slightly right, ingredients artfully grouped left, plenty of white negative space. Soft reflection under bottle. Macro detail on roller tip. Mood: bright, awake, de-puffing, trustworthy pharmacy-luxury. Color palette only white, soft sage-teal accents, natural browns/greens from props — no purple, no loud blue.

Shot like Vogue Beauty / Sephora campaign still life. Sharp focus, commercial catalog ready for 199–349 AED premium serum.
```

### Short variant (if character limit)

```
Premium 15ml eye serum bottle with roller applicator, matte glass, minimal "Jouri" label, teal accent, pure white background. Coffee beans, hyaluronic gel drop, subtle green leaf. Luxury clinical still life, not OEM. 4:5, photorealistic, soft shadows.
```

---

## 2. Anti-aging serum — سيروم جوري لمكافحة التجاعيد والبشرة الباهتة

**Slug:** `bakuchiol-anti-aging-serum` · **30ml** · dropper

**Active ingredients:** Bakuchiol 1.3%, vitamin C, glutathione, centella (cica)

### Main prompt

```
Ultra-premium skincare product photography, pure white seamless background (#FFFFFF), soft diffused studio light, photorealistic 8K.

Hero product: tall 30ml glass dropper serum bottle, frosted or clear glass with matte white cap, luxury minimal label "Jouri" with subtle clinical teal line — looks like a €80+ dermocosmetic brand, custom designed bottle, NOT OEM generic serum from factory catalogs.

Ingredient still life beside bottle: babchi plant seeds and soft purple-tan bakuchiol plant pods (Psoralea corylifolia reference), half a fresh orange slice and 2–3 golden vitamin C crystals or orange zest curls, a few gotu kola / centella asiatica leaves (fresh green), and a whisper of luminous pearl powder suggesting glutathione glow (very subtle, not glitter). Arrangement organic but controlled — high-end apothecary style.

Composition: bottle upright center-left, ingredients fanning on right, generous white space top and bottom for e-commerce crop. Soft ground shadow. Palette: white, sage-teal label accent, natural greens, warm orange — harmonious, no clash with lavender or electric blue.

Mood: radiant, firming, gentle anti-aging, science-backed. Collection page hero for premium Arabic beauty brand. Sharp commercial photography.
```

### Short variant

```
30ml dropper serum bottle, minimal Jouri label, teal accent, white background. Bakuchiol seeds, orange slice, centella leaves, subtle glow powder. Luxury anti-aging still life, non-OEM, 4:5 photorealistic.
```

---

## 3. Barrier repair serum — سيروم جوري لإصلاح البشرة المرهقة والضعيفة

**Slug:** `ghk-cu-barrier-repair-serum` · **30ml** · dropper

**Active ingredients:** GHK-Cu copper peptide, ectoin, hyaluronic acid, panthenol

### Main prompt

```
Ultra-premium skincare product photography on pure seamless white background (#FFFFFF), clean clinical studio lighting, photorealistic 8K.

Hero product: 30ml glass dropper serum bottle, elegant minimal design, label "Jouri" with refined typography and subtle teal `#0F5661` accent — premium barrier-repair positioning, custom luxury packaging, zero OEM / white-label factory appearance.

Ingredient styling: delicate copper-toned water droplets or a single small copper mesh texture disc (hinting copper peptide GHK-Cu, very subtle and scientific), 2–3 clear hyaluronic acid gel beads, fresh aloe vera cut slice or succulent leaf (hydration + panthenol feel), and a small cluster of ectoin-evoking crystalline salt structures or desert rose crystal on white (minimal, scientific). Optional: one soft blue-green water splash frozen in motion — very subtle.

Composition: bottle center, ingredients balanced around base, lots of white negative space, soft reflection. Mood: hydrating, barrier repair, calming, post-sun recovery, pharmacy authority. Colors: white, teal accents, soft copper highlights, fresh green — cohesive with clinical teal brand, no icy neon blue.

High-end catalog shot for collection grid, sells at premium AED price point.
```

### Short variant

```
30ml GHK-Cu peptide serum dropper bottle, Jouri minimal label, white background. Hyaluronic gel beads, aloe slice, subtle copper droplet, crystal salt hint. Luxury barrier repair still life, non-OEM, 4:5.
```

---

## Gemini settings (recommended)

| Setting | Value |
|---------|--------|
| Aspect ratio | **4:5** (collection card) or **1:1** |
| Style | Photorealistic / product photography |
| Background | White only |
| Quality | Highest available |

## After generation

1. Remove background if needed — should already be white  
2. Compress to WebP for web (`products/jouri-eye.webp` etc.)  
3. Drop in `frontend/public/products/`  
4. Update `products.ts` → `images.heroProduct` paths  

## Optional: add Arabic label on bottle in post

Gemini sometimes misspells Arabic. Safer: English **"Jouri Beauty"** on bottle in prompt, add Arabic in Figma after.
