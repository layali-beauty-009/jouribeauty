import Link from "next/link";
import type { Product } from "@/lib/api";
import { formatPrice } from "@/lib/format";
import { getProductBySlug } from "@/config/products";
import { productsMarketing } from "@/config/productsMarketing";
import { PremiumImagePlaceholder } from "@/components/ui/PremiumImagePlaceholder";
import { getProductTheme } from "@/lib/productTheme";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-electric text-sm" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(Math.round(rating))}
      <span className="text-mist/80">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

export function ProductShowcaseCard({ product }: { product: Product }) {
  const config = getProductBySlug(product.slug);
  const meta = productsMarketing[product.slug];
  const theme = getProductTheme(product.slug);
  const priceFrom = config?.offers[0]?.price ?? product.priceAed;

  return (
    <article className="bg-white rounded-3xl border border-mist shadow-sm overflow-hidden">
      <div className="p-3 pb-0">
        <div className="relative">
          <span
            className={`absolute top-3 right-3 z-10 text-[10px] font-medium px-3 py-1 rounded-full bg-white/95 border ${theme.border} ${theme.accent}`}
          >
            {meta?.badgeText ?? product.category} • {meta?.routineLabel}
          </span>
          {config ? (
            <PremiumImagePlaceholder
              label={config.shortName}
              theme={config.theme}
              variant="square"
            />
          ) : (
            <div className="aspect-square rounded-2xl bg-mist/30" />
          )}
        </div>
      </div>
      <div className="p-5 pt-4">
        <h3 className="font-sans text-base font-bold text-navy leading-snug">
          {config?.cardHeadline ?? meta?.cardHeadline ?? product.name}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
          {meta?.cardSubheadline ?? product.description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          {meta && <Stars rating={meta.rating} />}
          {meta && (
            <span className="text-xs text-muted">({meta.reviewsCount} تقييم)</span>
          )}
        </div>
        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted">يبدأ من</p>
            <p className="text-xl font-semibold text-navy">{formatPrice(priceFrom)}</p>
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
