# Cart, Checkout & Upsell

## Cart drawer

### Behavior

- Opens when: add from LP, header cart click  
- Persists: `localStorage` key `jouri_cart_v1`  
- Shows: line items with image, name, offer label, qty locked to offer tier  

### Cross-sells (required)

Below line items, section **"أكملي روتين جوري"**:

| Cart contains | Cross-sell order |
|---------------|------------------|
| Anti-aging | Barrier → Eye |
| Barrier | Anti-aging → Eye |
| Eye | Anti-aging → Barrier |

Each cross-sell card: mini image, one-line benefit, **from 199 SAR**, button **أضيفي** (adds 1× @ 199 or opens tier picker mini-modal).

### Cart footer

- Subtotal  
- Delivery: **مجاني** (or config)  
- Total bold  
- Scarcity: "أكملي الطلب خلال ١٥ دقيقة لتثبيت السعر" (session timer optional)  
- CTA: **إتمام الطلب — الدفع عند الاستلام** → opens checkout modal  

---

## Checkout modal

### Layout

1. **Order summary** (editable qty only if business allows — v1: fixed tiers)  
2. **Social proof** strip — 1 rotating quote  
3. **Scarcity** — "٧ أشخاص يشوفون هذا المنتج الآن" (static OK) or stock message  
4. Form fields:  
   - **الاسم الكامل** (required, min 3 chars, Arabic/Latin)  
   - **رقم الجوال** (KSA only)  
5. Trust: COD icons + "اتصال تأكيد قبل الشحن"  
6. Submit CTA: **تأكيد الطلب**  

### KSA phone validation

Accept input formats:

- `05XXXXXXXX` (10 digits)  
- `5XXXXXXXX` (9 digits)  
- `+9665XXXXXXXX`  
- `9665XXXXXXXX`  

Normalize storage: `9665XXXXXXXX` (12 digits, no `+` in DB).

Regex (after stripping spaces/dashes):

```typescript
/^(\+?966|0)?5[0-9]{8}$/
```

Show inline error in Arabic:  
`رقم سعودي غير صحيح — مثال: 05xxxxxxxx`

**Do not** accept UAE 05x for v1 unless product owner expands market.

### On valid submit (step 1)

- Do **not** create order yet  
- Open **Upsell interstitial** (fullscreen modal)  

---

## Upsell interstitial (10–15 seconds)

- Product: config-driven based on cart (see [05-products.md](./05-products.md))  
- Price: **99 SAR** strikethrough ~~199~~  
- Copy: "عرض لمرة واحدة — أضيفي سيروم العين بـ ٩٩ ريال فقط"  
- Countdown: 15 → 0 (auto-decline at 0)  
- Buttons: **نعم أضيفي** | **لا شكراً**  
- After choice → `POST /api/orders` with `upsellAccepted` boolean  

---

## Order submit (step 2)

Fire **browser** `Purchase` with `event_id` = UUID generated at submit click (store in session).

Payload to backend — see [02-architecture.md](./02-architecture.md).

On success:

- Clear cart  
- Redirect `/thank-you?order={id}`  
- Track Purchase (once)  

---

## Error handling

| Error | UX |
|-------|-----|
| API 500 | "تعذر إرسال الطلب — حاولي مرة أخرى أو واتساب" |
| Rate limit | "طلبات كثيرة — انتظري دقيقة" |
| Invalid phone | inline field error |

---

## WhatsApp fallback (optional)

Env `NEXT_PUBLIC_WHATSAPP=9665xxxxxxxxx` — link with prefilled order text on thank you.
