import type { Product } from "@/lib/api";
import { products } from "@/config/products";

/** Arabic fallback when API is down — mirrors products.ts */
export const fallbackProducts: Product[] = products.map((p) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  tagline: p.heroSubheadline,
  description: p.mechanism,
  volume: p.format,
  priceAed: p.offers[0]?.price ?? 199,
  category: p.category,
  keyIngredients: p.ingredientStack.map((i) => (typeof i === "string" ? i : i.name)),
  features: p.badges,
  usage: p.usage?.steps.join(" ") ?? "",
  benefits: [],
}));
