import { encodePublicPath } from "@/lib/getProductImages";

/** Brand logo — PNG شفاف في /public/brand/ */
export const brandLogo = {
  default: "/brand/jouri-logo.svg",
  onDark: "/brand/jouri-logo-on-dark.svg",
  /** شعار جوري الرسمي (شفاف) */
  png: "/brand/ChatGPT Image Jun 4, 2026, 03_07_05 AM.png",
} as const;

export function getBrandLogoUrl(): string {
  return encodePublicPath(brandLogo.png);
}
