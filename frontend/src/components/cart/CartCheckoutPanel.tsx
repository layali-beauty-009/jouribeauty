"use client";

import type { FormEvent } from "react";
import type { CartLine } from "@/context/CartContext";
import type { ProductConfig } from "@/types/product";
import { businessConfig } from "@/config/business";
import { IconCheck, IconCod, IconPhone, IconShield } from "@/components/ui/BrandIcons";
import { displayText, formatNumber, formatPrice } from "@/lib/format";
import { encodePublicPath, getProductImages } from "@/lib/getProductImages";

export type FieldErrors = {
  name?: string;
  phone?: string;
};

type Props = {
  lines: CartLine[];
  product?: ProductConfig;
  total: number;
  name: string;
  phone: string;
  errors: FieldErrors;
  onNameChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
  onSubmit: (e: FormEvent) => void;
};

export function CartCheckoutPanel({
  lines,
  product,
  total,
  name,
  phone,
  errors,
  onNameChange,
  onPhoneChange,
  onSubmit,
}: Props) {
  const line = lines[0];
  const offer = product?.offers.find((o) => o.id === line?.offerId);
  const img = product ? getProductImages(product).heroProduct : null;

  return (
    <form onSubmit={onSubmit} className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {product?.scarcityLine && (
          <p className="mb-4 rounded-full bg-red-50 px-3 py-2 text-center text-[11px] font-semibold text-red-700 ring-1 ring-red-200">
            🔥 {displayText(product.scarcityLine)}
          </p>
        )}

        {product && (
          <div className="mb-5 flex items-center justify-center gap-2 text-center text-sm text-muted">
            <span className="font-bold text-gold tabular-nums">
              ★ {formatNumber(product.rating)}
            </span>
            <span>
              {formatNumber(product.reviewsCount)}+ عميلة في الإمارات طلبن هذا الأسبوع
            </span>
          </div>
        )}

        <div className="rounded-2xl bg-gold-soft/50 p-4 ring-1 ring-gold/15">
          <p className="mb-3 text-right text-xs font-bold text-navy">طلبك</p>
          {line && (
            <div className="flex gap-3 border-b border-mist/80 pb-3">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white">
                {img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={encodePublicPath(img)}
                    alt={line.name}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="min-w-0 flex-1 text-right">
                <p className="text-sm font-semibold text-navy">{displayText(line.name)}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {offer
                    ? displayText(`${offer.label} · ${offer.subtitle ?? ""}`)
                    : displayText(`${line.quantity} قطعة`)}
                </p>
              </div>
              <span className="shrink-0 text-sm font-bold tabular-nums text-navy">
                {formatPrice(line.price)}
              </span>
            </div>
          )}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-extrabold tabular-nums text-navy">
              {formatPrice(total)}
            </span>
            <span className="text-sm font-bold text-navy">الإجمالي</span>
          </div>
          <p className="mt-3 flex items-center justify-end gap-1.5 text-xs text-royal">
            <IconCheck className="h-4 w-4 shrink-0" />
            شحن لكل الإمارات · {businessConfig.cod.paymentLabel} فقط
          </p>
        </div>

        <div className="mt-5 space-y-4">
          <div>
            <label htmlFor="cart-name" className="mb-1.5 block text-right text-sm font-semibold text-navy">
              الاسم الكامل
            </label>
            <input
              id="cart-name"
              name="customerName"
              autoComplete="name"
              placeholder="مثال: سارة المكتوم"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-right ${
                errors.name ? "border-red-400" : "border-mist"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-right text-xs text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="cart-phone" className="mb-1.5 block text-right text-sm font-semibold text-navy">
              رقم الجوال (الإمارات)
            </label>
            <input
              id="cart-phone"
              name="customerPhone"
              autoComplete="tel"
              type="tel"
              inputMode="tel"
              placeholder={businessConfig.market.phoneExample}
              value={phone}
              onChange={(e) => onPhoneChange(e.target.value)}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm ${
                errors.phone ? "border-red-400" : "border-mist"
              }`}
              dir="ltr"
            />
            <p className="mt-1.5 text-right text-[11px] text-muted">
              رقم صحيح لتأكيد التوصيل — {businessConfig.cod.confirmationPromise.toLowerCase()}
            </p>
            {errors.phone && (
              <p className="mt-1 text-right text-xs text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 text-center">
          {[
            { icon: IconShield, label: "بدون دفع الآن" },
            { icon: IconPhone, label: "نتصل للتأكيد" },
            { icon: IconCod, label: "ادفعي عند الاستلام" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-xl bg-clinical/80 px-1 py-2">
              <Icon className="mx-auto h-5 w-5 text-navy" />
              <p className="mt-1 text-[10px] leading-snug text-muted">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-[10px] leading-relaxed text-muted">
          بالمتابعة توافقين على الشروط — منتجات عناية بالبشرة فقط، بدون ادعاءات طبية.
        </p>
      </div>

      <div className="shrink-0 border-t border-mist bg-gold-soft/40 p-4">
        <button
          type="submit"
          className="w-full rounded-2xl bg-navy py-4 text-sm font-bold text-pearl transition-colors hover:bg-royal"
        >
          تأكيد الطلب بالدفع عند الاستلام
        </button>
      </div>
    </form>
  );
}
