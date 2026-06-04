"use client";

import type { ProductOffer } from "@/types/product";
import { businessConfig } from "@/config/business";
import { formatPrice } from "@/lib/format";
import { IconSparkles } from "@/components/ui/BrandIcons";

type Props = {
  offers: ProductOffer[];
  offerId: string;
  onSelect: (id: string) => void;
  onCta: () => void;
  ctaLabel: string;
  scarcityLine?: string;
};

function badgeKind(badge?: string) {
  if (!badge) return "none" as const;
  if (badge.includes("اختيار")) return "popular" as const;
  if (badge.includes("توفير")) return "value" as const;
  return "inline" as const;
}

function IconFlame({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
    </svg>
  );
}

/** مطابق لـ namabeauty.shop — هيكل العروض والشارات */
export function LpOfferSelector({
  offers,
  offerId,
  onSelect,
  onCta,
  ctaLabel,
  scarcityLine,
}: Props) {
  const firstInlineBadge = offers.find((o) => badgeKind(o.badge) === "inline")?.badge;

  return (
    <section className="px-4 pt-4 max-w-lg mx-auto bg-cream">
      <div className="space-y-5">
        {scarcityLine && (
          <div className="flex justify-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-[11px] font-extrabold text-red-700 sm:text-xs">
              <IconFlame className="h-3.5 w-3.5 shrink-0 animate-pulse" />
              {scarcityLine}
            </p>
          </div>
        )}

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-bold text-navy">اختاري العرض:</p>
            {firstInlineBadge && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                <IconSparkles className="h-3 w-3 shrink-0" />
                {firstInlineBadge}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {offers.map((o) => {
              const active = o.id === offerId;
              const savings =
                o.compareAtPrice && o.compareAtPrice > o.price ? o.compareAtPrice - o.price : 0;
              const kind = badgeKind(o.badge);

              return (
                <button
                  key={o.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onSelect(o.id)}
                  className={`relative flex w-full items-center justify-between gap-3 rounded-2xl border-2 p-4 text-right transition-all duration-200 ${
                    active
                      ? "border-navy bg-navy/5 shadow-md"
                      : "border-mist bg-white hover:border-royal/40 hover:bg-clinical/40"
                  }`}
                >
                  {kind === "popular" && (
                    <span className="absolute -top-3 right-4 z-10 rounded-full bg-navy px-3 py-1 text-[10px] font-extrabold tracking-wide text-pearl shadow-sm">
                      {o.badge}
                    </span>
                  )}
                  {kind === "value" && (
                    <span className="absolute -top-3 right-4 z-10 rounded-full border border-mist bg-[#f0e6d3] px-3 py-1 text-[10px] font-extrabold tracking-wide text-navy shadow-sm">
                      {o.badge}
                    </span>
                  )}

                  <div className="flex min-w-0 items-center gap-4">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                        active ? "border-navy bg-navy" : "border-mist bg-transparent"
                      }`}
                      aria-hidden
                    >
                      {active && <span className="h-2 w-2 rounded-full bg-electric" />}
                    </span>

                    <div className="min-w-0">
                      <p
                        className={`text-base font-extrabold leading-snug ${
                          active ? "text-navy" : "text-ink"
                        }`}
                      >
                        {o.label}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">{o.subtitle}</p>
                    </div>
                  </div>

                  <div className="shrink-0 text-left">
                    <p
                      className={`text-xl font-extrabold tabular-nums leading-none ${
                        active ? "text-navy" : "text-ink"
                      }`}
                    >
                      {formatPrice(o.price)}
                    </p>
                    {savings > 0 && (
                      <p className="mt-1 text-[11px] font-bold text-emerald-700">
                        وفّري {formatPrice(savings)}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <button
          id="lp-offer-cta"
          type="button"
          onClick={onCta}
          className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-navy py-4 text-base font-bold text-pearl shadow-lg shadow-navy/20 transition-all hover:bg-royal active:scale-[0.98]"
        >
          {ctaLabel}
        </button>

        <p className="-mt-2 text-center text-xs text-muted">
          {businessConfig.cod.paymentLabel} · بدون دفع أونلاين
        </p>
      </div>
    </section>
  );
}
