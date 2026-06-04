import { encodePublicPath } from "@/lib/getProductImages";

/**
 * شعار جوري الوحيد — يُستخدم في:
 * 1) SiteHeader  2) SiteFooter  3) favicon (app/icon.png + metadata)
 */
/** شعار الموقع — header, footer, favicon */
export const BRAND_LOGO_PATH = "/brand/jouri-logo.png";

export const brandLogo = {
  png: BRAND_LOGO_PATH,
} as const;

export function getBrandLogoUrl(): string {
  return encodePublicPath(BRAND_LOGO_PATH);
}
