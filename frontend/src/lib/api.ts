const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.jouribeauty.store";

export type ProductBenefit = {
  id: string;
  problem: string;
  solution: string;
  sortOrder: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  volume: string;
  priceAed: number;
  category: string;
  keyIngredients: string[];
  features: string[];
  usage: string;
  benefits: ProductBenefit[];
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

export async function getProduct(slug: string): Promise<Product | null> {
  const res = await fetch(`${API_URL}/api/products/${slug}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to load product");
  return res.json();
}

export function formatPrice(aed: number): string {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  }).format(aed);
}
