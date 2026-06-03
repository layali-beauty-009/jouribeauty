/** Public paths for the 3 nama-style LP images per product (see docs/PRODUCT-PAGE-IMAGE-PROMPTS-NANO-BANANA.md). */
export function productImagePaths(slug: string) {
  const base = `/products/${slug}`;
  return {
    heroBeforeAfter: `${base}/01-hero-before-after.webp`,
    problemImage: `${base}/02-problem.webp`,
    heroProduct: `${base}/03-product-hero.webp`,
  } as const;
}
