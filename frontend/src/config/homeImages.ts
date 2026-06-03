/**
 * Homepage product card photos — YOUR files only, no AI, no resize.
 *
 * Put originals in frontend/public/home/ named exactly:
 *   caffeine-under-eye-serum.png   (or .jpg / .webp)
 *   bakuchiol-anti-aging-serum.png
 *   ghk-cu-barrier-repair-serum.png
 *
 * Files are served as-is (<img>, not next/image). Do not run ffmpeg on them.
 */
export const homeProductImageAlts: Record<string, string> = {
  "caffeine-under-eye-serum":
    "سيروم جوري للهالات السوداء وانتفاخات العين",
  "bakuchiol-anti-aging-serum":
    "سيروم جوري لمكافحة التجاعيد — باكوتشيول",
  "ghk-cu-barrier-repair-serum":
    "سيروم جوري لإصلاح البشرة المرهقة — GHK-Cu",
};

export function getHomeProductImageAlt(slug: string) {
  return homeProductImageAlts[slug];
}

/** Public URL base — extension resolved in HomeProductPhoto */
export function getHomeProductImageBase(slug: string) {
  if (!homeProductImageAlts[slug]) return null;
  return `/home/${slug}`;
}
