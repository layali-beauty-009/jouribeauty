import { encodePublicPath } from "@/lib/getProductImages";

/**
 * Homepage images — merchant files in /public/home/, served unchanged.
 */
/** Top banner — 3 products grouped (uploaded filename on GitHub). */
export const HOME_COLLECTION_HERO_SRC =
  "/home/ChatGPT Image Jun 3, 2026, 10_42_42 PM.png";

/** Legacy basename if you rename the file later. */
export const HOME_COLLECTION_HERO_BASE = "/home/home-collection-hero";

export const homeProductImages: Record<
  string,
  { src: string; alt: string }
> = {
  "caffeine-under-eye-serum": {
    src: "/home/hero-eye-serum.webp",
    alt: "سيروم جوري للهالات السوداء وانتفاخات العين",
  },
  "bakuchiol-anti-aging-serum": {
    src: "/home/ChatGPT Image Jun 4, 2026, 02_58_20 AM.png",
    alt: "مكافحة التجاعيد بلطف — سيروم باكوتشيول جوري",
  },
  "ghk-cu-barrier-repair-serum": {
    src: "/home/hero-barrier-repair.webp",
    alt: "سيروم جوري لإصلاح البشرة المرهقة — ببتيد النحاس",
  },
};

export function getHomeProductImage(slug: string) {
  const entry = homeProductImages[slug];
  if (!entry) return undefined;
  return { ...entry, src: encodePublicPath(entry.src) };
}
