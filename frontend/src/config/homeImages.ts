/**
 * Homepage product card photos — served from /public/home/ unchanged.
 * Replace files on disk; optional slug-named copies also work (see HomeProductPhoto).
 */
export const homeProductImages: Record<
  string,
  { src: string; alt: string }
> = {
  "caffeine-under-eye-serum": {
    src: "/home/hero-eye-serum.webp",
    alt: "سيروم جوري للهالات السوداء وانتفاخات العين",
  },
  "bakuchiol-anti-aging-serum": {
    src: "/home/hero-anti-aging.webp",
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
