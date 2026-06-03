import type { ProductConfig } from "@/types/product";
import { productImagePaths } from "@/lib/productImagePaths";

/** Resolved image URLs: config override, else default /products/{slug}/01|02|03 paths. */
export function getProductImages(product: ProductConfig) {
  const defaults = productImagePaths(product.slug);
  return {
    heroBeforeAfter: product.images.heroBeforeAfter || defaults.heroBeforeAfter,
    problemImage: product.images.problemImage || defaults.problemImage,
    heroProduct: product.images.heroProduct || defaults.heroProduct,
  };
}
