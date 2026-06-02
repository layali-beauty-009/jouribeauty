/**
 * Jouri Beauty / Nama Beauty — Orders webhook for Google Sheets
 *
 * Setup:
 * 1. Create Sheet from orders-sheet-template.csv headers
 * 2. Paste this script in Apps Script
 * 3. Set SHEET_NAME + SCRIPT_SECRET below
 * 4. Deploy → Web app → Anyone can access → copy URL to backend GOOGLE_SHEET_WEBHOOK_URL
 */

const SHEET_NAME = "Orders";
const SCRIPT_SECRET = "CHANGE_ME_TO_RANDOM_SECRET"; // same as backend WEBHOOK_SECRET

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (SCRIPT_SECRET && body.secret !== SCRIPT_SECRET) {
      return jsonResponse({ ok: false, error: "unauthorized" }, 401);
    }
    const order = body.order;
    if (!order) {
      return jsonResponse({ ok: false, error: "missing order" }, 400);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse({ ok: false, error: "sheet not found" }, 500);
    }

    const lines = order.lines || [];
    const productNames = lines.map(function (l) { return l.name; }).join(" | ");
    const skus = lines.map(function (l) { return l.sku; }).join(" | ");
    const qtys = lines.map(function (l) { return l.qty; }).join(" | ");

    sheet.appendRow([
      order.publicId || "",
      order.createdAt || new Date().toISOString(),
      order.customerName || "",
      order.customerPhoneDisplay || order.customerPhone || "",
      productNames,
      skus,
      qtys,
      order.subtotal || "",
      order.upsellAccepted ? "yes" : "no",
      order.upsellAmount || 0,
      order.total || "",
      order.currency || "SAR",
      order.utmSource || "",
      order.landingSlug || "",
      order.status || "pending_confirmation",
      order.eventId || "",
      order.notes || "",
    ]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) }, 500);
  }
}

function doGet() {
  return jsonResponse({ ok: true, service: "jouri-orders-webhook" });
}

function jsonResponse(obj, code) {
  code = code || 200;
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
