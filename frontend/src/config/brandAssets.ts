import { encodePublicPath } from "@/lib/getProductImages";

/**
 * شعار جوري الوحيد — يُستخدم في:
 * 1) SiteHeader  2) SiteFooter  3) favicon (app/icon.png + metadata)
 */
/** مسار بلا مسافات — يخدم بثبات على Easypanel/CDN */
export const BRAND_LOGO_PATH = "/brand/jouri-logo-mark.png";

/** الاسم الأصلي عند الرفع يدوياً (نفس الملف) */
export const BRAND_LOGO_UPLOAD_NAME =
  "ChatGPT Image Jun 4, 2026, 03_07_05 AM.png";

export const brandLogo = {
  png: BRAND_LOGO_PATH,
} as const;

export function getBrandLogoUrl(): string {
  return encodePublicPath(BRAND_LOGO_PATH);
}
