"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { businessConfig } from "@/config/business";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { getProductBySlug } from "@/config/products";
import { UpsellModal } from "./UpsellModal";

export function CartDrawer() {
  const { lines, isOpen, closeCart, removeLine, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showUpsell, setShowUpsell] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const mainLine = lines[0];
  const product = mainLine ? getProductBySlug(mainLine.slug) : undefined;

  const submitOrder = (upsellAccepted: boolean, upsellPrice?: number) => {
    const orderTotal = total + (upsellAccepted && upsellPrice ? upsellPrice : 0);
    clearCart();
    closeCart();
    setShowUpsell(false);
    router.push(
      `/thank-you?total=${orderTotal}&phone=${encodeURIComponent(phone)}`,
    );
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 8) return;
    if (product?.upsell.enabled) {
      setShowUpsell(true);
    } else {
      submitOrder(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-black/40" onClick={closeCart} aria-hidden />
      <div className="fixed inset-y-0 left-0 z-[70] w-full max-w-md bg-cream shadow-2xl flex flex-col">
        <div className="p-4 border-b border-mist flex justify-between items-center">
          <h2 className="font-semibold text-navy">سلة الطلب</h2>
          <button type="button" onClick={closeCart} className="text-2xl leading-none text-muted">
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {lines.length === 0 ? (
            <p className="text-muted text-center py-8">السلة فارغة</p>
          ) : (
            lines.map((line) => (
              <div key={`${line.sku}-${line.offerId}`} className="bg-white rounded-xl p-4 border border-mist">
                <p className="font-medium text-navy text-sm">{line.name}</p>
                <p className="text-xs text-muted mt-1">الكمية: {line.quantity}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-semibold text-navy">{formatPrice(line.price)}</span>
                  <button
                    type="button"
                    className="text-xs text-red-600"
                    onClick={() => removeLine(line.sku, line.offerId)}
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {lines.length > 0 && (
          <form onSubmit={handleCheckout} className="p-4 border-t border-mist bg-white space-y-3">
            <p className="text-lg font-semibold text-navy flex justify-between">
              <span>المجموع</span>
              <span>{formatPrice(total)}</span>
            </p>
            <p className="text-xs text-muted">{businessConfig.cod.paymentLabel} — بدون دفع أونلاين</p>
            <input
              required
              placeholder="الاسم الكامل"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-mist px-4 py-3 text-sm"
            />
            <input
              required
              type="tel"
              placeholder={`رقم الهاتف ${businessConfig.market.phoneExample}`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-mist px-4 py-3 text-sm"
              dir="ltr"
            />
            <button
              type="submit"
              className="w-full rounded-full py-4 text-pearl font-medium"
              style={{ backgroundColor: businessConfig.design.primaryColor }}
            >
              تأكيد الطلب — {formatPrice(total)}
            </button>
          </form>
        )}
      </div>
      {product && showUpsell && (
        <UpsellModal
          product={product}
          onAccept={() => submitOrder(true, product.upsell.price)}
          onSkip={() => submitOrder(false)}
        />
      )}
    </>
  );
}
