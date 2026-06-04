"use client";

import type { ProductOffer } from "@/types/product";
import { businessConfig } from "@/config/business";
import { formatPrice } from "@/lib/format";

type Props = {
  offers: ProductOffer[];
  offerId: string;
  onSelect: (id: string) => void;
  onCta: () => void;
  ctaLabel: string;
  scarcityLine?: string;
};

/** Nama-style bundle picker — واحد لون جوري (teal) بدون خلط ألوان المنتجات */
export function LpOfferSelector({
  offers,
  offerId,
  onSelect,
  onCta,
  ctaLabel,
  scarcityLine,
}: Props) {
  return (
    <section className="px-4 pt-6 max-w-lg mx-auto">
      {scarcityLine && (
        <p className="mb-4 text-xs text-center text-navy bg-pearl border border-mist rounded-xl py-2.5 px-4 leading-relaxed">
          {scarcityLine}
        </p>
      )}

      <p className="text-sm font-bold text-navy mb-3 text-right">اختاري العرض:</p>

      <div className="space-y-3">
        {offers.map((o) => {
          const active = o.id === offerId;
          const savings =
            o.compareAtPrice && o.compareAtPrice > o.price ? o.compareAtPrice - o.price : 0;
          const isPopular = o.badge?.includes("اختيار");
          const isBestValue = o.badge?.includes("توفير");

          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onSelect(o.id)}
              className={`relative w-full text-right rounded-2xl p-4 transition-all duration-200 ${
                active
                  ? "bg-white border-2 border-navy shadow-md"
                  : "bg-white border border-mist hover:border-royal/40"
              }`}
            >
              {o.badge && (
                <span
                  className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-md ${
                    isPopular
                      ? "bg-navy text-pearl"
                      : isBestValue
                        ? "bg-clinical text-navy border border-mist"
                        : "bg-pearl text-navy border border-mist"
                  }`}
                >
                  {o.badge}
                </span>
              )}

              <div className="flex items-start gap-3 flex-row-reverse pt-1">
                <span
                  className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    active ? "border-navy bg-navy" : "border-mist bg-white"
                  }`}
                  aria-hidden
                >
                  {active && <span className="h-2 w-2 rounded-full bg-pearl" />}
                </span>

                <div className={`flex-1 min-w-0 ${o.badge ? "pt-5" : ""}`}>
                  <p className="font-bold text-navy text-[15px] leading-snug">{o.label}</p>
                  <p className="text-xs text-muted mt-1 leading-relaxed">{o.subtitle}</p>
                  {savings > 0 && (
                    <p className="text-xs font-semibold text-royal mt-1.5">
                      وفّري {formatPrice(savings)}
                    </p>
                  )}
                </div>

                <p className="font-bold text-xl text-navy flex-shrink-0 pt-0.5">
                  {formatPrice(o.price)}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onCta}
        className="w-full mt-5 rounded-2xl py-4 bg-navy text-pearl font-bold text-sm shadow-md hover:bg-royal active:scale-[0.99] transition-all"
      >
        {ctaLabel}
      </button>
      <p className="text-center text-xs text-muted mt-2.5">
        {businessConfig.cod.paymentLabel} · بدون دفع أونلاين
      </p>
    </section>
  );
}
