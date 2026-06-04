"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/api";
import { formatPrice } from "@/lib/format";
import { getProductBySlug } from "@/config/products";
import { productsMarketing } from "@/config/productsMarketing";
import { getHomeProductImage } from "@/config/homeImages";
import { HomeProductPhoto } from "./HomeProductPhoto";
import { PremiumImagePlaceholder } from "@/components/ui/PremiumImagePlaceholder";
import { getProductTheme } from "@/lib/productTheme";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-electric text-sm" aria-label={`${rating} من 5`}>
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
  const hasHomeImageSlot = Boolean(getHomeProductImage(product.slug));
  const [usePlaceholder, setUsePlaceholder] = useState(!hasHomeImageSlot);

  return (
    <article className="group bg-white rounded-3xl border border-mist/80 shadow-sm overflow-hidden hover:shadow-lg hover:border-electric/30 transition-all flex flex-col h-full">
      <div className="p-3 pb-0">
        <div className="relative">
          <span
            className={`absolute top-3 right-3 z-10 text-[10px] font-semibold px-3 py-1 rounded-full bg-white/95 border shadow-sm ${theme.border} ${theme.accent}`}
          >
            {meta?.badgeText ?? product.category} • {meta?.routineLabel}
          </span>
          {hasHomeImageSlot && !usePlaceholder ? (
            <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-clinical/30 to-white border border-mist/60">
              <HomeProductPhoto
                slug={product.slug}
                className="w-full h-auto block"
                onMissing={() => setUsePlaceholder(true)}
              />
            </div>
          ) : config ? (
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
      <div className="p-5 pt-4 flex flex-col flex-1 text-right">
        <h3 className="font-sans text-base font-bold text-navy leading-snug">
          {config?.cardHeadline ?? meta?.cardHeadline ?? product.name}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-4 flex-1">
          {meta?.cardSubheadline ?? product.description}
        </p>
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          {meta && <Stars rating={meta.rating} />}
          {meta && (
            <span className="text-xs text-muted">({meta.reviewsCount} تقييم)</span>
          )}
        </div>
        <div className="mt-5 flex items-end justify-between gap-3 pt-4 border-t border-mist/60">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted">يبدأ من</p>
            <p className="text-xl font-bold text-navy">{formatPrice(priceFrom)}</p>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-navy text-pearl text-xs font-semibold px-4 py-2.5 hover:bg-royal transition-colors whitespace-nowrap"
          >
            اكتشفي التركيبة
            <span aria-hidden>←</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
