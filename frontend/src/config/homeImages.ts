/**
 * Homepage-only product visuals.
 * Do NOT use these paths on product landing pages — those use products.ts when ready.
 */
export const homeImages = {
  hero: [
    {
      src: "/home/hero-eye-serum.webp",
      alt: "سيروم جوري للهالات السوداء وانتفاخات العين — كافيين ٥٪",
      slug: "caffeine-under-eye-serum",
    },
    {
      src: "/home/hero-anti-aging.webp",
      alt: "سيروم جوري لمكافحة التجاعيد — باكوتشيول",
      slug: "bakuchiol-anti-aging-serum",
    },
    {
      src: "/home/hero-barrier-repair.webp",
      alt: "سيروم جوري لإصلاح البشرة المرهقة — GHK-Cu",
      slug: "ghk-cu-barrier-repair-serum",
    },
  ] as const,
} as const;
