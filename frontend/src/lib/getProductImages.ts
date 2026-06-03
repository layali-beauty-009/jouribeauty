import type { ProductConfig } from "@/types/product";
import { productImagePaths } from "@/lib/productImagePaths";

/** Encode filename segments so spaces and commas work in static /public paths. */
export function encodePublicPath(path: string): string {
  if (!path) return path;
  return path
    .split("/")
    .map((segment, i) => (i === 0 || !segment ? segment : encodeURIComponent(segment)))
    .join("/");
}

/** Resolved image URLs: config override, else default /products/{slug}/01|02|03 paths. */
export function getProductImages(product: ProductConfig) {
  const defaults = productImagePaths(product.slug);
  return {
    heroBeforeAfter: encodePublicPath(
      product.images.heroBeforeAfter || defaults.heroBeforeAfter
    ),
    problemImage: encodePublicPath(product.images.problemImage || defaults.problemImage),
    heroProduct: encodePublicPath(product.images.heroProduct || defaults.heroProduct),
  };
}
