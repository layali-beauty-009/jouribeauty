# Design System

## Typography (match premium Gulf DTC)

| Role | Font | Weights |
|------|------|---------|
| Arabic UI + headings | **IBM Plex Sans Arabic** | 300, 400, 500, 600, 700 |
| Latin / numbers | **Inter** | 300–600 |
| Logo accent | **Dancing Script** | 400–700 italic |

```tsx
// next/font/google — see 10-frontend-stack.md
```

### Scale (mobile-first)

| Token | Size |
|-------|------|
| body | 15px (`0.9375rem`) |
| small | 13px |
| h1 LP | 22–28px `font-bold` |
| h2 section | 18–20px `font-bold` |
| badge | 10–11px uppercase tracking |

**Avoid** heavy Cormorant-style serif for body — too editorial, not Layali/Gulf DTC.

## Color palette (Jouri / Nama)

| Token | Hex | Use |
|-------|-----|-----|
| `--cream` | `#f5f2e9` | page bg |
| `--navy` | `#1b365d` | primary, header text |
| `--emerald` | `#19372f` | alt dark (Layali-inspired option) |
| `--gold` | `#c4a47c` | accent, badges |
| `--royal` | `#0047ab` | eye product theme |
| `--lavender` | `#dcd0ff` | anti-aging theme |
| `--ice` | `#b9e2f5` | barrier theme |
| `--ink` | `#1a2332` | body text |
| `--muted` | `#5a6578` | secondary text |

Product LPs use **theme override** on buttons/chips per product file in config.

## Spacing & radius

- Section padding: `py-12` mobile, `py-16` desktop  
- Cards: `rounded-2xl` / `rounded-3xl`  
- Buttons: `rounded-full`  
- Container: `max-w-lg` mobile content, `max-w-4xl` desktop  

## Header monogram

- Circle: `w-11 h-11 rounded-full bg-[var(--navy)] text-[var(--gold)]`  
- Letter: **ن** (Arabic) — font-weight 600, centered  
- Alternative Latin: **J** if brand prefers  

## Alternating sections (desktop)

```tsx
// Pattern for LP sections
<section className="grid md:grid-cols-2 gap-8 items-center">
  <div className={even ? "md:order-2" : ""}>{/* text */}</div>
  <div className={even ? "md:order-1" : ""}>{/* image */}</div>
</section>
```

Even index = image left, odd = image right (RTL-aware: use logical properties `ms`/`me`).

## Image placeholders

Component: `ProductImagePlaceholder`

- Gradient from product theme  
- Silhouette bottle SVG  
- Label: "صورة المنتج قريباً"  
- Aspect ratios: hero 4:5, section 1:1, card 3:4  

## Icons

Use **lucide-react** (tree-shake imports).

## Motion

- Subtle `hover:-translate-y-0.5` on cards  
- Drawer slide from bottom (mobile)  
- Respect `prefers-reduced-motion`  

## Accessibility

- RTL `dir="rtl"` on `<html>`  
- Focus rings on buttons  
- `aria-label` on cart/icon buttons  
- Form labels associated with inputs  
