"use client";

import type { CartLine } from "@/context/CartContext";
import { getProductBySlug } from "@/config/products";
import { getProductImages, encodePublicPath } from "@/lib/getProductImages";
import { displayText, formatPrice } from "@/lib/format";

type Props = {
  line: CartLine;
  onRemove: () => void;
};

export function CartLineItem({ line, onRemove }: Props) {
  const product = getProductBySlug(line.slug);
  const offer = product?.offers.find((o) => o.id === line.offerId);
  const img = product ? getProductImages(product).heroProduct : null;
  const qtyLabel = offer
    ? displayText(`${offer.label}${offer.subtitle ? ` · ${offer.subtitle}` : ""}`)
    : displayText(`${line.quantity} قطعة`);

  return (
    <div className="flex gap-3 rounded-2xl bg-gold-soft/50 p-3 ring-1 ring-gold/15">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={encodePublicPath(img)}
            alt={line.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-1 text-center text-[10px] text-muted">
            {product?.shortName ?? "جوري"}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1 text-right">
        <p className="text-sm font-bold leading-snug text-navy">{displayText(line.name)}</p>
        <p className="mt-1 text-xs text-muted">{qtyLabel}</p>
      </div>

      <div className="flex shrink-0 flex-col items-end justify-between py-0.5">
        <span className="text-sm font-extrabold tabular-nums text-navy">
          {formatPrice(line.price)}
        </span>
        <button
          type="button"
          onClick={onRemove}
          className="text-xs font-medium text-muted underline-offset-2 hover:text-lilac-dark hover:underline"
        >
          حذف
        </button>
      </div>
    </div>
  );
}
