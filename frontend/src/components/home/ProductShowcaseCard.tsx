import Link from "next/link";
import type { Product } from "@/lib/api";
import { formatPrice } from "@/lib/api";
import { productsMarketing } from "@/config/productsMarketing";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getProductTheme } from "@/lib/productTheme";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-accent text-sm" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(Math.round(rating))}
      <span className="text-mist">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

export function ProductShowcaseCard({ product }: { product: Product }) {
  const meta = productsMarketing[product.slug];
  const theme = getProductTheme(product.slug);

  return (
    <article className="bg-white rounded-3xl border border-mist shadow-sm overflow-hidden">
      <div className="p-3 pb-0">
        <div className="relative">
          <span
            className={`absolute top-3 right-3 z-10 text-[10px] font-medium px-3 py-1 rounded-full bg-white/95 border ${theme.border} ${theme.accent}`}
          >
            {meta?.badgeText ?? product.category} • {meta?.routineLabel}
          </span>
          <ImagePlaceholder
            slug={product.slug}
            label={product.name}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="p-5 pt-4">
        <h3 className="font-serif text-xl text-navy leading-snug">
          {meta?.cardHeadline ?? product.name}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
          {meta?.cardSubheadline ?? product.description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          {meta && <Stars rating={meta.rating} />}
          {meta && (
            <span className="text-xs text-muted">({meta.reviewsCount} reviews)</span>
          )}
        </div>
        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted">From</p>
            <p className="text-xl font-semibold text-navy">{formatPrice(product.priceAed)}</p>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className={`flex-shrink-0 w-12 h-12 rounded-full bg-navy text-pearl flex items-center justify-center hover:bg-royal transition-colors`}
            aria-label={`View ${product.name}`}
          >
            →
          </Link>
        </div>
      </div>
    </article>
  );
}
