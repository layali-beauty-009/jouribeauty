# Tracking — Web Pixels & CAPI

## Platforms

| Platform | Browser | Server CAPI |
|----------|---------|-------------|
| Meta (Facebook) | `fbq` Pixel | Conversions API |
| TikTok | `ttq` Pixel | Events API |
| Snapchat | Snap Pixel | CAPI v2/v3 |

## Event map

| Funnel step | Browser event | Server event | event_id |
|-------------|---------------|--------------|----------|
| LP view | ViewContent | ViewContent | optional |
| Add to cart | AddToCart | AddToCart | **required** |
| Initiate checkout | InitiateCheckout | InitiateCheckout | **required** |
| Purchase | Purchase | Purchase | **required** |

Use **same `event_id`** (UUID v4) on browser + server for deduplication.

## Browser implementation (deferred for speed)

### Load strategy

1. Do **not** block LCP — inject after `window.load` or `requestIdleCallback`  
2. Single `AnalyticsProvider` client component in layout  
3. Read IDs from env; if missing, no-op  

### Meta Pixel (web — no hashing)

```html
<!-- load script deferred -->
fbq('init', PIXEL_ID);
fbq('track', 'PageView');
// Purchase:
fbq('track', 'Purchase', { value, currency: 'SAR', content_ids }, { eventID: eventId });
```

**Web:** send plain phone/name **only if** you use Advanced Matching in pixel init — optional. User asked: **no hashing in web** — OK to omit PII in browser and send **only on CAPI**.

Recommended: browser sends **value, currency, content_ids, eventID** only; CAPI sends hashed PII.

### TikTok Pixel (web)

```javascript
ttq.track('AddToCart', { content_id, value, currency: 'SAR' });
ttq.track('CompletePayment', { ... }); // Purchase equivalent
```

Use `event_id` parameter if available in your SDK version for dedup with Events API.

### Snapchat (web)

```javascript
snaptr('init', PIXEL_ID);
snaptr('track', 'PURCHASE', { price, currency: 'SAR', transaction_id: orderId });
```

## Server CAPI — hashing required

### Meta — normalize then SHA-256

| Field | Key | Normalize | Hash |
|-------|-----|-----------|------|
| Phone | `ph` | Remove symbols; country code; KSA: `9665XXXXXXXX` | SHA256 |
| First name | `fn` | lowercase, trim | SHA256 |
| Email | `em` | if ever added | SHA256 |

**Phone example (Meta docs):**  
Input: `+966 50 123 4567` → normalize `966501234567` → hash.

**Do not hash:** `client_ip_address`, `client_user_agent`, `fbc`, `fbp`, `event_id`.

```python
# backend/app/services/hashing.py
import hashlib, re

def norm_phone_ksa(phone: str) -> str:
    digits = re.sub(r"\D", "", phone)
    if digits.startswith("0"):
        digits = "966" + digits[1:]
    elif digits.startswith("5") and len(digits) == 9:
        digits = "966" + digits
    elif digits.startswith("966"):
        pass
    return digits  # 9665XXXXXXXX

def sha256_lower(s: str) -> str:
    return hashlib.sha256(s.strip().lower().encode()).hexdigest()
```

### TikTok Events API

- Phone: **E.164 with `+`** before hash per TikTok docs — e.g. `+966501234567`  
- Many integrations hash after normalizing to E.164 **including `+`**  
- Confirm in TikTok Events Manager test events when implementing  

```python
def norm_phone_tiktok(phone: str) -> str:
    core = norm_phone_ksa(phone)
    return f"+{core}"  # +966501234567
```

### Snapchat CAPI

- Follow Snap docs for `hashed_phone_number` / `hashed_email`  
- Typically SHA-256 of normalized E.164  

## Dedup checklist

- [ ] Generate `event_id` once per action on client  
- [ ] Pass `eventID` / `event_id` to browser pixel  
- [ ] Send same `event_id` in server payload  
- [ ] `event_time` within 7 days, unix seconds  
- [ ] `action_source`: `website`  
- [ ] `event_source_url`: full LP URL  

## Backend CAPI payload (Meta example)

```json
{
  "data": [{
    "event_name": "Purchase",
    "event_time": 1717353600,
    "event_id": "uuid-from-frontend",
    "action_source": "website",
    "event_source_url": "https://namabeauty.shop/thank-you",
    "user_data": {
      "ph": ["<sha256>"],
      "fn": ["<sha256>"],
      "client_ip_address": "1.2.3.4",
      "client_user_agent": "Mozilla/5.0...",
      "fbc": "fb.1.xxx",
      "fbp": "fb.1.yyy"
    },
    "custom_data": {
      "currency": "SAR",
      "value": 378.00,
      "content_ids": ["JOURI-AGE-2X"]
    }
  }]
}
```

POST `https://graph.facebook.com/v21.0/{PIXEL_ID}/events?access_token={TOKEN}`

## Env vars

See [16-env-reference.md](./16-env-reference.md) — all tokens **backend only**.

## Testing

1. Meta Events Manager → Test events  
2. TikTok Events Manager → Test mode + test code  
3. Snap Pixel Helper  
4. Verify one Purchase per order (no double on thank-you refresh — use session flag)

## Frontend capture cookies

On checkout, read `document.cookie` for `_fbp`, `_fbc`; store `ttclid` from URL if present; send in order body for CAPI.
