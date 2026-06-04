"use client";

import type { CartLine } from "@/context/CartContext";
import { products, getRelatedProducts } from "@/config/products";
import { productsMarketing } from "@/config/productsMarketing";
import { useCart } from "@/context/CartContext";
import { displayText, formatNumber, formatPriceParts } from "@/lib/format";
import { encodePublicPath, getProductImages } from "@/lib/getProductImages";

function pickRecommendations(lines: CartLine[]) {
  const inCart = new Set(lines.map((l) => l.slug));
  const anchor = lines[0]?.slug;
  const fromRelated = anchor
    ? getRelatedProducts(anchor).filter((p) => !inCart.has(p.slug))
    : [];
  const pool = products.filter((p) => !inCart.has(p.slug));
  const merged = [...fromRelated];
  for (const p of pool) {
    if (merged.length >= 3) break;
    if (!merged.some((m) => m.slug === p.slug)) merged.push(p);
  }
  return merged.slice(0, 3);
}

export function CartRecommendations({ lines }: { lines: CartLine[] }) {
  const { addOffer } = useCart();
  const items = pickRecommendations(lines);
  if (!items.length) return null;

  return (
    <div className="mt-6">
      <h3 className="mb-3 text-right text-sm font-bold text-navy">ينصحون بها معك</h3>
      <div className="space-y-3">
        {items.map((p) => {
          const meta = productsMarketing[p.slug];
          const img = getProductImages(p).heroProduct;
          const defaultOffer =
            p.offers.find((o) => o.defaultSelected) ?? p.offers[1] ?? p.offers[0];
          const price = formatPriceParts(defaultOffer?.price ?? 199);

          return (
            <div
              key={p.slug}
              className="flex items-center gap-3 rounded-2xl border border-mist bg-white p-3"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-clinical">
                {img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={encodePublicPath(img)}
                    alt={p.shortName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[10px] text-muted">
                    {p.shortName}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1 text-right">
                <p className="line-clamp-2 text-xs font-bold leading-snug text-navy">
                  {displayText(p.cardHeadline)}
                </p>
                {meta && (
                  <p className="mt-1 flex items-center justify-end gap-1 text-[11px] text-muted">
                    <span className="text-gold">★ {formatNumber(meta.rating)}</span>
                    <span>({formatNumber(meta.reviewsCount)} تقييم)</span>
                  </p>
                )}
                <p className="mt-1 text-xs font-semibold text-navy tabular-nums">
                  من {price.amount} {price.currency}
                </p>
              </div>

              <button
                type="button"
                onClick={() => defaultOffer && addOffer(p, defaultOffer.id)}
                className="shrink-0 rounded-xl bg-navy px-3 py-2 text-xs font-bold text-pearl transition-colors hover:bg-royal"
              >
                + أضيفي
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
