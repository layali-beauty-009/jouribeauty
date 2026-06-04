"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { businessConfig } from "@/config/business";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { getProductBySlug } from "@/config/products";
import { IconShoppingBag } from "@/components/ui/BrandIcons";
import { UpsellModal } from "./UpsellModal";
import { CartLineItem } from "./CartLineItem";
import { CartRecommendations } from "./CartRecommendations";
import { CartCheckoutPanel, type FieldErrors } from "./CartCheckoutPanel";

type DrawerView = "cart" | "checkout";

function validateCheckout(name: string, phone: string): FieldErrors {
  const errors: FieldErrors = {};
  const trimmedName = name.trim();
  const trimmedPhone = phone.replace(/\s/g, "");

  if (!trimmedName) errors.name = "اكتبي اسمك الكامل";
  else if (trimmedName.length < 2) errors.name = "الاسم قصير جداً";

  if (!trimmedPhone) errors.phone = "اكتبي رقم الهاتف";
  else if (trimmedPhone.length < 8) errors.phone = "رقم الهاتف غير صحيح — 8 أرقام على الأقل";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleCheckout = (e: FormEvent) => {
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
        className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-[2px]"
        onClick={dismissAll}
        aria-hidden
      />
      <div
        className="fixed inset-y-0 left-0 z-[70] flex w-full max-w-md flex-col bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={view === "cart" ? "سلة التسوق" : "إتمام الطلب"}
      >
        <header className="flex shrink-0 items-center justify-between border-b border-mist px-4 py-4">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-navy">
              {view === "cart" ? "سلة التسوق" : "إتمام الطلب"}
            </h2>
            {view === "cart" && <IconShoppingBag className="h-5 w-5 text-navy" aria-hidden />}
          </div>

          <div className="flex items-center gap-3">
            {view === "checkout" && (
              <button
                type="button"
                onClick={() => {
                  setErrors({});
                  setView("cart");
                }}
                className="text-sm font-semibold text-royal"
              >
                ← رجوع
              </button>
            )}
            <button
              type="button"
              onClick={dismissAll}
              className="text-2xl font-light leading-none text-muted"
              aria-label="إغلاق"
            >
              ×
            </button>
          </div>
        </header>

        {view === "cart" ? (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {lines.length === 0 ? (
                <p className="py-12 text-center text-muted">السلة فارغة</p>
              ) : (
                <>
                  <div className="space-y-3">
                    {lines.map((line) => (
                      <CartLineItem
                        key={`${line.sku}-${line.offerId}`}
                        line={line}
                        onRemove={() => removeLine(line.sku, line.offerId)}
                      />
                    ))}
                  </div>
                  <CartRecommendations lines={lines} />
                </>
              )}
            </div>

            {lines.length > 0 && (
              <footer className="shrink-0 border-t border-mist bg-gold-soft/40 px-4 py-4">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-lg font-extrabold tabular-nums text-navy">
                    {formatPrice(total)}
                  </span>
                  <span className="text-sm font-bold text-navy">الإجمالي:</span>
                </div>
                <p className="mb-4 text-center text-[11px] text-muted">
                  {businessConfig.cod.paymentLabel} · بدون دفع أونلاين
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setErrors({});
                    setView("checkout");
                  }}
                  className="w-full rounded-2xl bg-navy py-4 text-sm font-bold text-pearl transition-colors hover:bg-royal"
                >
                  إتمام الطلب
                </button>
              </footer>
            )}
          </>
        ) : (
          <CartCheckoutPanel
            lines={lines}
            product={product}
            total={total}
            name={name}
            phone={phone}
            errors={errors}
            onNameChange={(v) => {
              setName(v);
              if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
            }}
            onPhoneChange={(v) => {
              setPhone(v);
              if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
            }}
            onSubmit={handleCheckout}
          />
        )}
      </div>
    </>
  );
}
