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

const inputBase =
  "w-full rounded-xl border-2 bg-white px-4 py-3.5 text-sm shadow-sm transition-all placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-gold/35";

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
    <form onSubmit={onSubmit} className="flex min-h-0 flex-1 flex-col bg-gradient-to-b from-cream via-gold-soft/20 to-cream">
      <div className="flex-1 overflow-y-auto px-4 pb-4 pt-1">
        {product?.scarcityLine && (
          <p className="mb-4 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold-soft via-white to-gold-soft px-3 py-2.5 text-center text-[11px] font-bold leading-snug text-gold-dark shadow-sm ring-1 ring-gold/25">
            <span className="text-gold" aria-hidden>
              ✦
            </span>{" "}
            {displayText(product.scarcityLine)}
            <span className="text-gold" aria-hidden>
              {" "}
              ✦
            </span>
          </p>
        )}

        {product && (
          <div className="mb-5 rounded-2xl border border-gold/30 bg-white/80 px-3 py-2.5 text-center shadow-sm ring-1 ring-gold/15">
            <p className="text-sm text-navy">
              <span className="font-extrabold text-gold tabular-nums">
                ★ {formatNumber(product.rating)}
              </span>
              <span className="mx-1.5 text-gold/50" aria-hidden>
                ·
              </span>
              <span className="text-muted">
                {formatNumber(product.reviewsCount)}+ عميلة في الإمارات طلبن هذا الأسبوع
              </span>
            </p>
          </div>
        )}

        <div className="checkout-surface rounded-2xl p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-2 border-b border-gold/25 pb-3">
            <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-gold-dark ring-1 ring-gold/30">
              طلبك
            </span>
            <span className="text-[10px] font-semibold text-royal">
              {businessConfig.cod.paymentLabel}
            </span>
          </div>

          {line && (
            <div className="flex gap-3 border-b border-gold/20 pb-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white ring-2 ring-gold/35 shadow-md">
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
                <p className="text-sm font-bold leading-snug text-navy">{displayText(line.name)}</p>
                <p className="mt-1 text-xs text-muted">
                  {offer
                    ? displayText(`${offer.label} · ${offer.subtitle ?? ""}`)
                    : displayText(`${line.quantity} قطعة`)}
                </p>
              </div>
              <span className="shrink-0 self-start rounded-lg bg-gold/10 px-2 py-1 text-sm font-extrabold tabular-nums text-navy ring-1 ring-gold/25">
                {formatPrice(line.price)}
              </span>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-teal-dark/5 px-3 py-3 ring-1 ring-gold/20">
            <span className="text-sm font-bold text-navy">الإجمالي</span>
            <span className="font-sans text-2xl font-extrabold tabular-nums text-gold-dark">
              {formatPrice(total)}
            </span>
          </div>

          <p className="mt-3 flex items-center justify-end gap-2 text-xs font-semibold text-royal">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/35">
              <IconCheck className="h-3.5 w-3.5 text-gold-dark" />
            </span>
            شحن لكل الإمارات · {businessConfig.cod.paymentLabel} فقط
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="cart-name"
              className="mb-1.5 flex items-center justify-end gap-1.5 text-right text-sm font-bold text-navy"
            >
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
              الاسم الكامل
            </label>
            <input
              id="cart-name"
              name="customerName"
              autoComplete="name"
              placeholder="مثال: سارة المكتوم"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              className={`${inputBase} text-right ${
                errors.name
                  ? "border-red-400 focus:border-red-400"
                  : "border-gold/25 focus:border-gold"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-right text-xs font-medium text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="cart-phone"
              className="mb-1.5 flex items-center justify-end gap-1.5 text-right text-sm font-bold text-navy"
            >
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
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
              className={`${inputBase} ${
                errors.phone
                  ? "border-red-400 focus:border-red-400"
                  : "border-gold/25 focus:border-gold"
              }`}
              dir="ltr"
            />
            <p className="mt-1.5 text-right text-[11px] leading-relaxed text-muted">
              رقم صحيح لتأكيد التوصيل — {businessConfig.cod.confirmationPromise.toLowerCase()}
            </p>
            {errors.phone && (
              <p className="mt-1 text-right text-xs font-medium text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2.5 text-center">
          {[
            { icon: IconShield, label: "بدون دفع الآن" },
            { icon: IconPhone, label: "نتصل للتأكيد" },
            { icon: IconCod, label: "ادفعي عند الاستلام" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="checkout-trust-pill rounded-xl px-1.5 py-3 shadow-sm">
              <span className="mx-auto mb-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
                <Icon className="h-[18px] w-[18px] text-gold-dark" />
              </span>
              <p className="text-[10px] font-semibold leading-snug text-navy">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-[10px] leading-relaxed text-muted">
          بالمتابعة توافقين على الشروط — منتجات عناية بالبشرة فقط، بدون ادعاءات طبية.
        </p>
      </div>

      <div className="shrink-0 border-t-2 border-gold/30 bg-gradient-to-t from-gold-soft/80 via-gold-soft/50 to-transparent p-4 pt-5">
        <button
          type="submit"
          className="checkout-cta w-full rounded-2xl py-4 text-sm font-extrabold tracking-wide transition-all active:scale-[0.99]"
        >
          تأكيد الطلب بالدفع عند الاستلام
        </button>
        <p className="mt-2.5 text-center text-[10px] font-medium text-gold-dark">
          ✦ خطوة أخيرة — نتصل بكِ خلال دقائق للتأكيد ✦
        </p>
      </div>
    </form>
  );
}
