"use client";

import { useEffect } from "react";
import type { ProductConfig } from "@/types/product";
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
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-xl">
        <p className="text-xs text-accent font-medium tracking-widest uppercase">عرض خاص</p>
        <h3 className="font-serif text-xl text-navy mt-2">{product.upsell.label}</h3>
        <p className="text-sm text-muted mt-2">{product.upsell.subtitle}</p>
        <p className="text-2xl font-bold text-navy mt-4">{formatPrice(product.upsell.price)}</p>
        <button
          type="button"
          onClick={() => {
            trackEvent("UpsellAccepted", { value: product.upsell.price });
            onAccept();
          }}
          className="w-full mt-6 rounded-full py-3 text-pearl font-medium"
          style={{ backgroundColor: product.theme.primary }}
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
