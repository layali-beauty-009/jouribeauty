# Orders → Google Sheets

## Flow

```
Frontend POST /api/orders
    → FastAPI saves Postgres
    → FastAPI POST GOOGLE_SHEET_WEBHOOK_URL (JSON)
    → Apps Script appends row to Sheet
```

## Sheet template

Use [templates/orders-sheet-template.csv](./templates/orders-sheet-template.csv) as first row headers.

Import to Google Sheets → name tab **Orders**.

## Apps Script setup

1. Open Sheet → Extensions → Apps Script  
2. Paste [templates/google-apps-script-webhook.gs](./templates/google-apps-script-webhook.gs)  
3. Set `SHEET_NAME` and optional `SECRET`  
4. Deploy → **Web app** → Execute as: Me → Who has access: **Anyone**  
5. Copy Web App URL → backend env `GOOGLE_SHEET_WEBHOOK_URL`  

If using secret, frontend never sees it — backend adds header `X-Webhook-Secret`.

## Webhook payload (backend → script)

```json
{
  "secret": "matches SCRIPT_SECRET",
  "order": {
    "publicId": "NB-8F3K2",
    "createdAt": "2026-06-02T14:30:00Z",
    "customerName": "سارة العتيبي",
    "customerPhone": "966501234567",
    "customerPhoneDisplay": "+966 50 123 4567",
    "lines": [
      { "sku": "JOURI-AGE-2X", "name": "سيروم التجاعيد", "qty": 2, "total": 279 }
    ],
    "upsellAccepted": true,
    "upsellSku": "JOURI-UPSELL-99",
    "upsellAmount": 99,
    "subtotal": 378,
    "total": 378,
    "currency": "SAR",
    "utmSource": "tiktok",
    "landingSlug": "jouri-anti-aging-serum",
    "eventId": "uuid"
  }
}
```

## Column mapping

| Column | Source |
|--------|--------|
| order_id | publicId |
| date | createdAt (Asia/Riyadh display optional) |
| name | customerName |
| phone | customerPhoneDisplay |
| products | joined line names |
| skus | joined SKUs |
| qty_total | sum qty |
| subtotal | subtotal |
| upsell | yes/no |
| upsell_amount | 0 or 99 |
| total | total |
| currency | SAR |
| utm_source | utm |
| status | pending_confirmation |
| notes | landing slug |

## Retry logic

If webhook fails:

- Still return 200 to customer if DB saved (order must not be lost)  
- Set `sheet_synced_at` null; background retry 3× with exponential backoff  
- Log error for manual replay  

## Manual replay endpoint (admin)

`POST /api/admin/orders/{id}/resync-sheet` with API key — optional v1.1.

## Standalone JS file for client

Provide `templates/sheet-webhook-standalone.js` — duplicate of Apps Script for repo reference; **deployed copy lives in Google**, not on server.
