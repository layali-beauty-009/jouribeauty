/**
 * Homepage images — merchant files in /public/home/, served unchanged.
 */
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
