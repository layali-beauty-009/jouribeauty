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
    src: "/home/bakuchiol-anti-aging-serum.png",
    alt: "سيروم جوري لمكافحة التجاعيد — باكوتشيول",
  },
  "ghk-cu-barrier-repair-serum": {
    src: "/home/hero-barrier-repair.webp",
    alt: "سيروم جوري لإصلاح البشرة المرهقة — GHK-Cu",
  },
};

export function getHomeProductImage(slug: string) {
  return homeProductImages[slug];
}
