import Link from "next/link";
import type { Product } from "@/lib/api";
import { formatPrice } from "@/lib/api";

const accent: Record<string, string> = {
  "Eye Care": "from-amber-100/80 to-cream",
  "Face Serum": "from-stone-200/60 to-cream",
};

export function ProductCard({ product }: { product: Product }) {
  const gradient = accent[product.category] ?? "from-sand/40 to-cream";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block border border-sand bg-white/50 hover:border-gold/50 transition-all duration-300"
    >
      <div
        className={`aspect-[4/5] bg-gradient-to-b ${gradient} flex flex-col items-center justify-center p-8`}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
          {product.category}
        </span>
        <span className="font-serif text-3xl text-center text-charcoal leading-tight max-w-[12rem]">
          {product.name.split(" ").slice(0, 3).join(" ")}
        </span>
        <span className="mt-2 text-sm text-muted">{product.volume}</span>
      </div>
      <div className="p-6 border-t border-sand/60">
        <p className="text-sm text-muted line-clamp-2">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium text-charcoal">{formatPrice(product.priceAed)}</span>
          <span className="text-xs tracking-[0.15em] uppercase text-gold-dark group-hover:underline">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
