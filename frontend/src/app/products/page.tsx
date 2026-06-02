import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/api";
import { fallbackProducts } from "@/lib/fallbackProducts";
import { ProductShowcaseCard } from "@/components/home/ProductShowcaseCard";

export const metadata: Metadata = {
  title: "Serums",
  description: "Shop all Jouri Beauty serums — eye care, anti-aging, and barrier repair.",
};

export default async function ProductsPage() {
  const products = await getProducts().catch(() => fallbackProducts);
  const list = products.length ? products : fallbackProducts;

  return (
    <div className="px-4 py-8 max-w-lg md:max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-muted hover:text-royal">
        ← Home
      </Link>
      <h1 className="font-serif text-3xl text-navy mt-4">All serums</h1>
      <p className="text-sm text-muted mt-2 mb-8">
        Three formulas. Pick your concern.
      </p>
      <div className="space-y-8">
        {list.map((p) => (
          <ProductShowcaseCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
