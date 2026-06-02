import type { Metadata } from "next";
import { getProducts } from "@/lib/api";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Serums",
  description: "Shop all Jouri Beauty serums — eye care, anti-aging, and barrier repair.",
};

export default async function ProductsPage() {
  const products = await getProducts().catch(() => []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs tracking-[0.35em] uppercase text-gold-dark mb-3">Shop</p>
      <h1 className="font-serif text-5xl text-charcoal mb-4">All Serums</h1>
      <p className="text-muted max-w-2xl mb-14 leading-relaxed">
        Each Jouri Beauty serum is built around a skin problem and a proven
        solution. Choose the formula that matches your concern.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
