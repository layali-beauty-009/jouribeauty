"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { businessConfig } from "@/config/business";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { getProductBySlug } from "@/config/products";
import { UpsellModal } from "./UpsellModal";

type DrawerView = "cart" | "checkout";

type FieldErrors = {
  name?: string;
  phone?: string;
};

function validateCheckout(name: string, phone: string): FieldErrors {
  const errors: FieldErrors = {};
  const trimmedName = name.trim();
  const trimmedPhone = phone.replace(/\s/g, "");

  if (!trimmedName) {
    errors.name = "اكتبي اسمك الكامل";
  } else if (trimmedName.length < 2) {
    errors.name = "الاسم قصير جداً";
  }

  if (!trimmedPhone) {
    errors.phone = "اكتبي رقم الهاتف";
  } else if (trimmedPhone.length < 8) {
    errors.phone = "رقم الهاتف غير صحيح — تأكدي من 8 أرقام على الأقل";
  }

  return errors;
}

export function CartDrawer() {
  const { lines, isOpen, closeCart, removeLine, total, clearCart } = useCart();
  const [view, setView] = useState<DrawerView>("cart");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [showUpsell, setShowUpsell] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const mainLine = lines[0];
  const product = mainLine ? getProductBySlug(mainLine.slug) : undefined;

  const resetCheckout = () => {
    setView("cart");
    setName("");
    setPhone("");
    setErrors({});
    setShowUpsell(false);
  };

  const dismissAll = () => {
    resetCheckout();
    closeCart();
  };

  useEffect(() => {
    if (!isOpen) resetCheckout();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset when drawer closes only
  }, [isOpen]);

  useEffect(() => {
    if (lines.length === 0 && view === "checkout") setView("cart");
  }, [lines.length, view]);

  useEffect(() => {
    if (pathname.startsWith("/thank-you")) {
      resetCheckout();
      closeCart();
    }
  }, [pathname, closeCart]);

  useEffect(() => {
    const open = isOpen || showUpsell;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, showUpsell]);

  const submitOrder = (upsellAccepted: boolean, upsellPrice?: number) => {
    const orderTotal = total + (upsellAccepted && upsellPrice ? upsellPrice : 0);
    const phoneForUrl = phone.replace(/\s/g, "");

    resetCheckout();
    clearCart();
    closeCart();

    router.push(
      `/thank-you?total=${orderTotal}&phone=${encodeURIComponent(phoneForUrl)}`,
    );
  };

  const proceedToCheckout = () => {
    if (lines.length === 0) return;
    setErrors({});
    setView("checkout");
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validateCheckout(name, phone);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (product?.upsell.enabled) {
      setShowUpsell(true);
      closeCart();
      return;
    }

    submitOrder(false);
  };

  if (showUpsell && product) {
    return (
      <UpsellModal
        product={product}
        onAccept={() => submitOrder(true, product.upsell.price)}
        onSkip={() => submitOrder(false)}
      />
    );
  }

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/40"
        onClick={dismissAll}
        aria-hidden
      />
      <div
        className="fixed inset-y-0 left-0 z-[70] flex w-full max-w-md flex-col bg-cream shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={view === "cart" ? "سلة الطلب" : "إتمام الطلب"}
      >
        <div className="flex items-center justify-between border-b border-mist p-4">
          {view === "checkout" ? (
            <button
              type="button"
              onClick={() => {
                setErrors({});
                setView("cart");
              }}
              className="text-sm font-medium text-royal"
            >
              ← رجوع للسلة
            </button>
          ) : (
            <h2 className="font-semibold text-navy">سلة الطلب</h2>
          )}
          <button
            type="button"
            onClick={dismissAll}
            className="text-2xl leading-none text-muted"
            aria-label="إغلاق"
          >
            ×
          </button>
        </div>

        {view === "cart" ? (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {lines.length === 0 ? (
                <p className="py-8 text-center text-muted">السلة فارغة</p>
              ) : (
                lines.map((line) => (
                  <div
                    key={`${line.sku}-${line.offerId}`}
                    className="rounded-xl border border-mist bg-white p-4"
                  >
                    <p className="text-sm font-medium text-navy">{line.name}</p>
                    <p className="mt-1 text-xs text-muted">الكمية: {line.quantity}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-semibold text-navy">{formatPrice(line.price)}</span>
                      <button
                        type="button"
                        className="text-xs text-lilac-dark"
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
              <div className="space-y-3 border-t border-mist bg-white p-4">
                <p className="flex justify-between text-lg font-semibold text-navy">
                  <span>المجموع</span>
                  <span>{formatPrice(total)}</span>
                </p>
                <p className="text-xs text-muted">{businessConfig.cod.paymentLabel}</p>
                <button
                  type="button"
                  onClick={proceedToCheckout}
                  className="w-full rounded-full py-4 font-medium text-pearl"
                  style={{ backgroundColor: businessConfig.design.primaryColor }}
                >
                  متابعة لإتمام الطلب
                </button>
              </div>
            )}
          </>
        ) : (
          <form onSubmit={handleCheckout} className="flex flex-1 flex-col">
            <div className="flex-1 overflow-y-auto p-4">
              <h2 className="mb-1 font-semibold text-navy">بيانات التوصيل</h2>
              <p className="mb-4 text-xs text-muted">
                {businessConfig.cod.confirmationPromise} — {businessConfig.cod.paymentLabel}
              </p>

              {lines.length > 0 && (
                <div className="mb-5 rounded-xl border border-mist bg-white p-3 text-sm">
                  <p className="font-medium text-navy">{lines[0].name}</p>
                  <p className="mt-1 text-xs text-muted">الكمية: {lines[0].quantity}</p>
                  <p className="mt-2 font-semibold text-navy">{formatPrice(total)}</p>
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <input
                    name="customerName"
                    autoComplete="name"
                    placeholder="الاسم الكامل"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    className={`w-full rounded-xl border px-4 py-3 text-sm ${
                      errors.name ? "border-red-400" : "border-mist"
                    }`}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    name="customerPhone"
                    autoComplete="tel"
                    type="tel"
                    inputMode="tel"
                    placeholder={`رقم الهاتف ${businessConfig.market.phoneExample}`}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    className={`w-full rounded-xl border px-4 py-3 text-sm ${
                      errors.phone ? "border-red-400" : "border-mist"
                    }`}
                    dir="ltr"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-xs text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2 border-t border-mist bg-white p-4">
              <p className="flex justify-between text-lg font-semibold text-navy">
                <span>المجموع</span>
                <span>{formatPrice(total)}</span>
              </p>
              <button
                type="submit"
                className="w-full rounded-full py-4 font-medium text-pearl"
                style={{ backgroundColor: businessConfig.design.primaryColor }}
              >
                تأكيد الطلب — {formatPrice(total)}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
