"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/api";
import { displayText, formatNumber, formatPriceParts } from "@/lib/format";
import { getProductBySlug } from "@/config/products";
import { productsMarketing } from "@/config/productsMarketing";
import { getHomeProductImage } from "@/config/homeImages";
import { HomeProductPhoto } from "./HomeProductPhoto";
import { PremiumImagePlaceholder } from "@/components/ui/PremiumImagePlaceholder";
import { IconSparkles } from "@/components/ui/BrandIcons";
import { getProductImages, encodePublicPath } from "@/lib/getProductImages";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-sm text-gold" aria-label={`${rating} من 5`}>
      {"★".repeat(Math.round(rating))}
    </span>
  );
}

/** بطاقة منتج — عمودية مثل namabeauty.shop */
export function ProductShowcaseCard({ product }: { product: Product }) {
  const config = getProductBySlug(product.slug);
  const meta = productsMarketing[product.slug];
  const price = formatPriceParts(config?.offers[0]?.price ?? product.priceAed);
  const hasHomeImageSlot = Boolean(getHomeProductImage(product.slug));
  const lpImg = config ? getProductImages(config).heroProduct : null;
  const [usePlaceholder, setUsePlaceholder] = useState(!hasHomeImageSlot && !lpImg);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-mist bg-white shadow-lg transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-xl">
      <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-[10px] font-extrabold text-navy ring-1 ring-navy/10">
        <IconSparkles className="h-3 w-3 shrink-0" />
        اكتشفي
      </span>

      <div className="relative aspect-[4/5] overflow-hidden bg-clinical">
        {hasHomeImageSlot && !usePlaceholder ? (
          <HomeProductPhoto
            slug={product.slug}
            className="block h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            onMissing={() => setUsePlaceholder(true)}
          />
        ) : lpImg && !usePlaceholder ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={encodePublicPath(lpImg)}
            alt={config?.shortName ?? product.name}
            className="block h-full w-full object-cover"
            onError={() => setUsePlaceholder(true)}
          />
        ) : config ? (
          <PremiumImagePlaceholder label={config.shortName} theme={config.theme} variant="square" />
        ) : (
          <div className="h-full w-full bg-mist/30" />
        )}
      </div>

      <div className="flex flex-grow flex-col p-5 text-right">
        <p className="text-[10px] font-semibold text-royal">
          {meta?.routineLabel} · {meta?.badgeText}
        </p>
        <h3 className="mt-1 text-lg font-extrabold leading-snug text-navy">
          {displayText(config?.cardHeadline ?? meta?.cardHeadline ?? product.name)}
        </h3>
        <p className="mt-2 line-clamp-4 flex-grow text-sm leading-relaxed text-muted">
          {displayText(meta?.cardSubheadline ?? product.description)}
        </p>
        <div className="mt-3 flex items-center gap-2">
          {meta && <Stars rating={meta.rating} />}
          {meta && (
            <span className="text-xs text-muted">
              ({formatNumber(meta.reviewsCount)} تقييم)
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-mist pt-4">
          <div className="text-right">
            <p className="text-[11px] text-muted">يبدأ من</p>
            <p className="text-lg font-extrabold leading-tight text-navy tabular-nums sm:text-xl">
              {price.amount} <span className="text-sm font-semibold">{price.currency}</span>
            </p>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-clinical px-4 py-2 text-sm font-extrabold text-navy transition-colors group-hover:bg-navy group-hover:text-pearl"
          >
            اكتشفي
            <span aria-hidden>←</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
