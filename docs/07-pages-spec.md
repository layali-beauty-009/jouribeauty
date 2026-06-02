# Page Specifications

## Global chrome

### Header (sticky, RTL)

```
[ ☰ Menu ]  [ 🛒 Cart (n) ]     [ ن ] جوري للجمال
                                    Jouri Beauty
```

- **Right side:** monogram circle (brand primary bg, cream text **ن**)  
- **Logo:** two lines as spec  
- **Menu:** الرئيسية | المجموعة | من نحن | تواصل  
- **Cart:** opens drawer; badge count  

### Footer

Columns (mobile accordion):

1. Brand blurb + trust chips  
2. روابط: الرئيسية، المجموعة، من نحن، تواصل، سياسة الاستبدال  
3. تواصل: واتساب (optional), email  
4. Payment: COD badge  
5. Legal disclaimer (small)  

---

## Home (`/`)

**Goal:** Brand authority + route to 3 LPs — **no checkout on home** (like Layali model).

| # | Section | Content |
|---|---------|---------|
| 1 | Announcement | COD + 279 offer + KSA delivery |
| 2 | Hero | Brand story: 3 serums for Gulf skin; CTA → #collection |
| 3 | Trust strip | 4 badges |
| 4 | Collection preview | 3 product cards (full spec below) |
| 5 | Why Jouri | 4 pillars |
| 6 | How it works | 3 steps: اختاري → تأكيد → استلمي وادفعي |
| 7 | Testimonials | 3 cards Gulf cities |
| 8 | FAQ | 5 questions |
| 9 | Final CTA | → collection |

**Hero image:** placeholder 16:9 gradient + product silhouettes.

---

## Collection (`/collection` or `/products`)

- H1: **مجموعة سيرومات جوري**  
- Sub: روتين كامل للبشرة والعين  
- Grid 3 cards → LP  
- Optional bundle banner: "اشتري ٣ مختلفة" future v2  

---

## Product card (home + collection)

Each card includes:

- Product image placeholder (3:4)  
- Category chip  
- **Headline** (emotional)  
- **Subhead** (ingredient)  
- ★★★★★ + "(٤٫٨)" style rating (static config OK)  
- Scarcity line: "طلب مرتفع هذا الأسبوع"  
- Price: **يبدأ من ١٩٩ ريال**  
- CTA: **اكتشفي التفاصيل** → slug LP  

---

## Product LP (`/products/[slug]`)

### Above fold

- Gallery placeholder (swipe on mobile)  
- Benefit chips (3)  
- H1 = full Arabic product name  
- Subhead problem → solution  
- Star row + review count  
- **Offer selector** (199/279/349)  
- Primary CTA: **أضيفي العرض للسلة** → add + **open cart drawer**  

### Below fold sections (alternating layout on desktop)

| Section | Layout desktop |
|---------|----------------|
| Trust bar | full width |
| Pain/solution pairs | image left, text right |
| Mechanism | text left, image right |
| Ingredients | image left, text right |
| vs alternatives | text only |
| Timeline | cards |
| Reviews | grid |
| Video UGC | 2–3 placeholders |
| FAQ | accordion |
| Final offer | repeat selector + CTA |

**Mobile:** stack image above text always.

### Placeholder images per LP

- 1 hero product shot  
- 3 lifestyle/texture shots (ingredient, application, packaging)  
Use `PremiumImagePlaceholder` with product theme color.

---

## About (`/about`)

- Story: why Jouri for Gulf climate  
- Mission: problem-solution serums, not hype  
- Quality/process (placeholder copy)  
- No fake team photos — use icon grid  

---

## Contact (`/contact`)

- WhatsApp link (env `NEXT_PUBLIC_WHATSAPP`)  
- Email  
- Hours  
- Simple form optional v2 — v1 click-to-WA enough  

---

## Thank you (`/thank-you?order=ID`)

- Order number  
- Summary lines  
- **Next steps:** confirmation call, delivery ETA  
- Trust reminder COD  
- No pixel double-fire if already fired on purchase confirm  

---

## 404

Arabic friendly, link home + collection.
