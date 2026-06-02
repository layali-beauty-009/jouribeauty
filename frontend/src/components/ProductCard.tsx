import Link from "next/link";
import type { Product } from "@/lib/api";
import { formatPrice } from "@/lib/api";
import { getProductTheme } from "@/lib/productTheme";

export function ProductCard({ product }: { product: Product }) {
  const theme = getProductTheme(product.slug);

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group block border ${theme.border} bg-white/70 ${theme.hoverBorder} transition-all duration-300 shadow-sm hover:shadow-md`}
    >
      <div
        className={`aspect-[4/5] bg-gradient-to-br ${theme.gradient} flex flex-col items-center justify-center p-8`}
      >
        <span className={`text-[10px] tracking-[0.3em] uppercase ${theme.accent} mb-3 font-medium`}>
          {product.category}
        </span>
        <span className="font-sans text-sm font-semibold text-center text-ink leading-snug max-w-[12rem]">
          {product.name.split(" ").slice(0, 3).join(" ")}
        </span>
        <span className="mt-2 text-sm text-muted">{product.volume}</span>
      </div>
      <div className="p-6 border-t border-mist/80">
        <p className="text-sm text-muted line-clamp-2">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium text-navy">{formatPrice(product.priceAed)}</span>
          <span className={`text-xs tracking-[0.15em] uppercase ${theme.accent} group-hover:underline`}>
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
