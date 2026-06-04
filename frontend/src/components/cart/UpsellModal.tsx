"use client";

import { useEffect } from "react";
import type { ProductConfig } from "@/types/product";
import { businessConfig } from "@/config/business";
import { formatPrice } from "@/lib/format";
import { trackEvent } from "@/lib/tracking";

type Props = {
  product: ProductConfig;
  onAccept: () => void;
  onSkip: () => void;
};

export function UpsellModal({ product, onAccept, onSkip }: Props) {
  useEffect(() => {
    trackEvent("UpsellView", { content_name: product.name });
    const t = setTimeout(onSkip, 15000);
    return () => clearTimeout(t);
  }, [onSkip, product.name]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upsell-title"
    >
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-xl">
        <p className="text-[0.65rem] text-royal font-semibold tracking-[0.2em]">عرض لمرة واحدة</p>
        <h3 id="upsell-title" className="font-sans text-base font-bold text-navy mt-2">
          {product.upsell.label}
        </h3>
        <p className="text-sm text-muted mt-2 leading-relaxed">{product.upsell.subtitle}</p>
        <p className="text-2xl font-bold text-navy mt-4">{formatPrice(product.upsell.price)}</p>
        <p className="text-xs text-muted mt-1">{businessConfig.cod.paymentLabel}</p>
        <button
          type="button"
          onClick={() => {
            trackEvent("UpsellAccepted", { value: product.upsell.price });
            onAccept();
          }}
          className="w-full mt-5 rounded-2xl py-3.5 bg-navy text-pearl font-semibold hover:bg-royal transition-colors"
        >
          نعم، أضيفي العرض
        </button>
        <button
          type="button"
          onClick={() => {
            trackEvent("UpsellSkipped");
            onSkip();
          }}
          className="w-full mt-2 text-sm text-muted py-2"
        >
          لا شكراً
        </button>
      </div>
    </div>
  );
}
