"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { ProductConfig } from "@/types/product";
import { businessConfig } from "@/config/business";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { trackEvent } from "@/lib/tracking";
import { ProductSectionImage } from "@/components/product/ProductSectionImage";
import { getProductImages } from "@/lib/getProductImages";

function defaultOfferId(product: ProductConfig) {
  const def = product.offers.find((o) => o.defaultSelected);
  if (def) return def.id;
  return product.offers[1]?.id ?? product.offers[0]?.id ?? "one";
}

function Stars({ n }: { n: number }) {
  return <span className="text-electric">{"★".repeat(Math.round(n))}</span>;
}

type Props = {
  product: ProductConfig;
  related: ProductConfig[];
};

export function ProductLandingPage({ product, related }: Props) {
  const { addOffer } = useCart();
  const [offerId, setOfferId] = useState(() => defaultOfferId(product));
  const selected = product.offers.find((o) => o.id === offerId) ?? product.offers[0];
  const t = product.theme;
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    trackEvent("ViewContent", {
      content_ids: product.id,
      content_name: product.name,
      value: selected?.price,
      currency: "AED",
    });
  }, [product.id, product.name, selected?.price]);

  const ctaLabel = useMemo(
    () => `ابدئي ${product.shortName} الآن · ${formatPrice(selected.price)}`,
    [product.shortName, selected.price],
  );

  const onCta = () => addOffer(product, offerId);

  const lpImages = getProductImages(product);
  const faq = product.faq ?? [];
  const testimonials =
    product.testimonials ??
    [
      {
        name: "سارة م.",
        meta: "٣٢ • دبي • مشترية مؤكدة",
        initial: "س",
        text: `لاحظت فرقاً على ${product.problem} خلال أسبوعين. التركيبة واضحة.`,
        rating: 5,
      },
      {
        name: "نورة ك.",
        meta: "٣٨ • أبوظبي • مشترية مؤكدة",
        initial: "ن",
        text: `${product.mainIngredient} كان بالضبط اللي كنت أدور عليه.`,
        rating: 5,
      },
    ];

  return (
    <div className="pb-28" style={{ ["--product-primary" as string]: t.primary }}>
      {/* Announcement */}
      <div className="text-center text-xs py-2 text-pearl" style={{ backgroundColor: t.primaryDark }}>
        {businessConfig.cod.paymentLabel} • {businessConfig.cod.deliveryPromise}
      </div>

      {/* Image 1 — قبل / المنتج / بعد (namabeauty-style hero) */}
      <section className="px-4 pt-4">
        <ProductSectionImage
          src={lpImages.heroBeforeAfter}
          alt={product.imageAlts.heroBeforeAfter}
          theme={t}
          variant="heroBeforeAfter"
          label={product.shortName}
          sublabel={product.imageAlts.heroBeforeAfter}
        />
        <div className="grid grid-cols-2 gap-2 mt-3">
          {product.badges.slice(0, 4).map((b) => (
            <div key={b} className="bg-white rounded-xl border border-mist py-2 px-2 text-center text-[10px] font-medium text-navy">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* Pain headline */}
      <section className="px-4 pt-8 text-center">
        <h1 className="font-sans text-xl font-bold leading-snug" style={{ color: t.primaryDark }}>
          {product.heroHeadline}
        </h1>
        <p className="mt-4 text-sm text-muted leading-relaxed">{product.heroSubheadline}</p>
        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
          <Stars n={product.rating} />
          <span className="text-sm text-muted">
            {product.rating} ({product.reviewsCount} تقييم)
          </span>
        </div>
        <p className="mt-2 text-lg font-semibold" style={{ color: t.primary }}>
          يبدأ من {formatPrice(product.offers[0]?.price ?? 199)}
        </p>
        {product.scarcityLine && (
          <p className="mt-2 text-xs bg-clinical text-navy border border-electric/40 rounded-lg py-2 px-3 inline-block font-medium">
            {product.scarcityLine}
          </p>
        )}
      </section>

      {/* Offers */}
      <section className="px-4 pt-8">
        <p className="text-sm font-semibold text-navy mb-3">اختاري العرض:</p>
        <div className="space-y-3">
          {product.offers.map((o) => {
            const active = o.id === offerId;
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => setOfferId(o.id)}
                className={`w-full text-right rounded-2xl border-2 p-4 transition-all ${
                  active ? "bg-white shadow-md" : "bg-white/60 border-mist"
                }`}
                style={active ? { borderColor: t.primary } : undefined}
              >
                <div className="flex justify-between items-start gap-2">
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 ${
                      active ? "border-4" : "border-mist"
                    }`}
                    style={active ? { borderColor: t.primary, backgroundColor: t.primary } : undefined}
                  />
                  <div className="flex-1">
                    {o.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full text-pearl mb-1 inline-block" style={{ backgroundColor: t.primary }}>
                        {o.badge}
                      </span>
                    )}
                    <p className="font-semibold text-navy">{o.label}</p>
                    <p className="text-xs text-muted">{o.subtitle}</p>
                  </div>
                  <p className="font-bold text-lg" style={{ color: t.primary }}>
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
          className="w-full mt-6 rounded-full py-4 text-pearl font-semibold text-sm shadow-lg"
          style={{ backgroundColor: t.primary }}
        >
          {ctaLabel}
        </button>
        <p className="text-center text-xs text-muted mt-2">
          {businessConfig.cod.paymentLabel} • بدون دفع أونلاين
        </p>
      </section>

      {/* Trust strip */}
      <section className="mx-4 mt-8 rounded-2xl p-4 text-pearl grid grid-cols-2 gap-3 text-center text-xs" style={{ backgroundColor: t.primaryDark }}>
        <div><p className="font-semibold">{businessConfig.cod.paymentLabel}</p><p className="opacity-80">بدون دفع أونلاين</p></div>
        <div><p className="font-semibold">توصيل ٢–٥ أيام</p><p className="opacity-80">{businessConfig.market.countryName}</p></div>
        <div><p className="font-semibold">فيجان</p><p className="opacity-80">خالي من القسوة</p></div>
        <div><p className="font-semibold">٣٠ يوم</p><p className="opacity-80">ضمان استرجاع</p></div>
      </section>

      {/* Insight */}
      {product.insightStat && (
        <section className="px-4 mt-8">
          <div className="rounded-xl p-4 text-pearl" style={{ backgroundColor: t.primary }}>
            <span className="text-3xl font-bold">{product.insightStat.value}</span>
            <p className="text-sm mt-2 opacity-95">{product.insightStat.text}</p>
            {product.insightStat.source && <p className="text-[10px] mt-1 opacity-70">{product.insightStat.source}</p>}
          </div>
        </section>
      )}

      {/* Image 2 — المشكلة (واقعية، بدون مبالغة) */}
      <section className="px-4 mt-10">
        <ProductSectionImage
          src={lpImages.problemImage}
          alt={product.imageAlts.problemImage}
          theme={t}
          variant="problem"
          label="المشكلة"
          sublabel={product.imageAlts.problemImage}
        />
      </section>

      {/* Problem agitation */}
      <section className="px-4 mt-8">
        <h2 className="text-center font-sans text-base font-bold text-navy mb-2">هل تعانين من هذه؟</h2>
        <p className="text-center text-sm text-muted mb-6">مشاكل تعرفينها — وحل من التركيبة</p>
        <div className="space-y-4">
          {(product.problemAgitation ?? []).map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-mist">
              <div className="bg-white p-4 flex gap-3">
                <span className="text-lilac-dark text-lg font-bold" aria-hidden>✕</span>
                <p className="text-sm text-navy">{item.pain}</p>
              </div>
              <div className="p-4 flex gap-3" style={{ backgroundColor: t.softBg }}>
                <span className="text-lg" style={{ color: t.primary }}>✓</span>
                <p className="text-sm text-muted">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Failure alternatives */}
      <section className="px-4 mt-10">
        <h2 className="font-sans text-base font-bold text-navy mb-4">ليش البدائل العادية تفشل؟</h2>
        {(product.failureAlternatives ?? []).map((alt) => (
          <div key={alt.name} className="bg-white rounded-2xl border border-mist p-4 mb-3">
            <p className="font-semibold text-navy flex items-center gap-2">
              <span className="text-lilac-dark" aria-hidden>⚠</span> {alt.name}
            </p>
            <p className="text-xs text-muted mt-1">{alt.priceRange}</p>
            <ul className="mt-2 space-y-1">
              {alt.cons.map((c) => (
                <li key={c} className="text-xs text-muted flex gap-2">
                  <span className="text-lilac-dark" aria-hidden>✕</span> {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Image 3 — المنتج (تصوير بريميوم) */}
      <section className="px-4 mt-10">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-center text-royal font-semibold mb-3">
          التركيبة
        </p>
        <ProductSectionImage
          src={lpImages.heroProduct}
          alt={product.imageAlts.heroProduct}
          theme={t}
          variant="productHero"
          label={product.shortName}
          sublabel={product.imageAlts.heroProduct}
        />
        <p className="text-center text-xs text-muted mt-3 leading-relaxed">
          {product.mainIngredient} · {product.format} · {businessConfig.brand.nameLocal}
        </p>
      </section>

      {/* Mechanism */}
      <section className="px-4 mt-10 text-center">
        <p className="text-xs tracking-widest uppercase font-medium" style={{ color: t.primary }}>آلية العمل</p>
        <h2 className="font-sans text-base font-bold text-navy mt-2">كيف يساعد {product.mainIngredient}؟</h2>
        <p className="text-sm text-muted mt-3 leading-relaxed">{product.mechanism}</p>
      </section>

      {/* Exclusions */}
      {product.exclusions && (
        <section className="px-4 mt-8">
          <h3 className="font-semibold text-navy mb-3">ما لن تجدينه داخل العلبة</h3>
          <div className="flex flex-wrap gap-2">
            {product.exclusions.map((e) => (
              <span key={e} className="text-xs bg-white border border-mist rounded-full px-3 py-1.5">
                {e}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Ingredients */}
      <section className="px-4 mt-10">
        <h2 className="font-sans text-base font-bold text-navy mb-4">المكوّنات الرئيسية</h2>
        <div className="space-y-3">
          {product.ingredientStack.map((ing, i) => {
            const item = typeof ing === "string" ? { name: ing, benefit: "", proof: "" } : ing;
            return (
              <div key={i} className="bg-white rounded-2xl border border-mist p-4 flex gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-pearl text-sm font-bold flex-shrink-0" style={{ backgroundColor: t.primary }}>
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-navy">{item.name}</p>
                  {"dosage" in item && item.dosage && <p className="text-xs text-muted">{item.dosage}</p>}
                  <p className="text-sm text-muted mt-1">{item.benefit}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Authority */}
      {product.authority && (
        <section className="px-4 mt-10">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {product.authority.certifications.map((c) => (
              <div key={c} className="bg-white border border-mist rounded-xl py-3 text-center text-xs font-semibold text-navy">
                {c}
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6 text-pearl" style={{ backgroundColor: t.primaryDark }}>
            <p className="text-xs text-royal mb-2">{product.authority.expertTitle}</p>
            <p className="text-sm leading-relaxed italic">&ldquo;{product.authority.expertQuote}&rdquo;</p>
          </div>
        </section>
      )}

      {/* Stats */}
      {product.authority?.stats && (
        <section className="px-4 mt-6 grid grid-cols-2 gap-2">
          {product.authority.stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-mist p-3 text-center">
              <p className="text-xl font-bold" style={{ color: t.primary }}>{s.value}</p>
              <p className="text-[10px] text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </section>
      )}

      {/* Timeline */}
      <section className="px-4 mt-10">
        <p className="text-xs text-center tracking-widest uppercase" style={{ color: t.primary }}>النتيجة المتوقعة</p>
        <h2 className="text-center font-sans text-base font-bold text-navy mt-2 mb-6">ماذا قد تلاحظين؟</h2>
        {(product.timeline ?? []).map((step, i) => (
          <div key={step.label} className="bg-white rounded-2xl border border-mist p-6 mb-4 text-center">
            <span className="inline-flex w-10 h-10 rounded-full text-pearl items-center justify-center font-bold" style={{ backgroundColor: t.primary }}>
              {i + 1}
            </span>
            <h3 className="font-semibold text-navy mt-3">{step.label}</h3>
            <p className="text-sm text-muted mt-2">{step.text}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="px-4 mt-10">
        <p className="text-xs text-center tracking-widest text-royal uppercase font-semibold">تقييمات موثقة</p>
        <h2 className="text-center font-sans text-base font-bold text-navy mt-2 mb-6">تجارب حقيقية</h2>
        {testimonials.map((tm) => (
          <div key={tm.name} className="bg-pearl rounded-2xl border border-mist p-5 mb-3">
            <Stars n={tm.rating} />
            <p className="text-sm text-navy mt-2 leading-relaxed">{tm.text}</p>
            <div className="flex justify-between items-center mt-3">
              <div>
                <p className="font-semibold text-sm text-navy">{tm.name}</p>
                <p className="text-xs text-muted">{tm.meta}</p>
              </div>
              <span className="w-10 h-10 rounded-full text-pearl flex items-center justify-center font-sans font-bold" style={{ backgroundColor: t.primary }}>
                {tm.initial}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Comparison */}
      {product.comparisonRows && (
        <section className="px-4 mt-10">
          <h2 className="font-sans text-base font-bold text-navy mb-4 text-center">قارني وقرّري</h2>
          <div className="bg-white rounded-2xl border border-mist overflow-hidden text-sm">
            {product.comparisonRows.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-mist last:border-0">
                <div className="p-3 text-muted">{row.them}</div>
                <div className="p-3 font-medium text-center" style={{ color: t.primary }}>{row.us}</div>
                <div className="p-3 font-medium text-navy bg-mist/30">{row.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Offer recap */}
      <section className="mx-4 mt-10 rounded-3xl p-6 text-pearl" style={{ backgroundColor: t.primaryDark }}>
        <h2 className="font-sans text-base font-bold">{product.shortName}</h2>
        <p className="text-2xl font-bold mt-2">{formatPrice(selected.price)}</p>
        <p className="text-sm opacity-90 mt-2">{selected.label}</p>
        <ul className="text-xs mt-4 space-y-1 opacity-90">
          <li>✓ {businessConfig.cod.paymentLabel}</li>
          <li>✓ {businessConfig.cod.deliveryPromise}</li>
          <li>✓ {businessConfig.cod.returnGuarantee}</li>
        </ul>
        <button type="button" onClick={onCta} className="w-full mt-6 rounded-full py-3 bg-accent text-navy font-semibold">
          {ctaLabel}
        </button>
      </section>

      {/* Guarantee */}
      <section className="px-4 mt-10 bg-white rounded-2xl border border-mist p-6 text-center">
        <h2 className="font-sans text-base font-bold text-navy">{businessConfig.cod.returnGuarantee}</h2>
        <p className="text-sm text-muted mt-3">تواصلي معنا خلال ٣٠ يوماً إذا لم تكوني راضية — نساعدك في الاسترجاع.</p>
      </section>

      {/* How to use */}
      {product.usage && (
        <section className="px-4 mt-10">
          <p className="text-xs tracking-widest text-center uppercase" style={{ color: t.primary }}>طريقة الاستخدام</p>
          <h2 className="text-center font-sans text-base font-bold text-navy mt-2">{product.usage.headline}</h2>
          {product.usage.steps.map((step, i) => (
            <div key={step} className="bg-white rounded-2xl border border-mist p-5 mt-4 flex gap-4">
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-pearl font-bold flex-shrink-0" style={{ backgroundColor: t.primary }}>
                {i + 1}
              </span>
              <p className="text-sm text-muted pt-2">{step}</p>
            </div>
          ))}
        </section>
      )}

      {/* COD delivery */}
      <section className="px-4 mt-10">
        <p className="text-xs tracking-widest uppercase" style={{ color: t.primary }}>التوصيل والدفع</p>
        <h2 className="font-sans text-base font-bold text-navy mt-2">كيف يوصلك طلبك؟</h2>
        <p className="text-sm text-muted mt-2">{businessConfig.cod.confirmationPromise}</p>
        {[
          { t: "اطلبي الآن", d: "اختاري العرض وأدخلي اسمك ورقمك — بدون دفع أونلاين." },
          { t: "تأكيد الطلب", d: businessConfig.cod.confirmationPromise },
          { t: "استلمي وادفعي", d: businessConfig.cod.deliveryPromise },
        ].map((s, i) => (
          <div key={s.t} className="bg-white rounded-2xl border-r-4 p-4 mt-3" style={{ borderColor: t.primary }}>
            <p className="font-semibold text-navy">{i + 1}. {s.t}</p>
            <p className="text-sm text-muted mt-1">{s.d}</p>
          </div>
        ))}
      </section>

      {/* Cities */}
      {product.delivery && (
        <section className="px-4 mt-8 bg-white rounded-2xl border border-mist p-5">
          <h3 className="font-semibold text-navy mb-3">نوصّل لجميع مدن الإمارات</h3>
          <div className="flex flex-wrap gap-2">
            {product.delivery.cities.map((c) => (
              <span key={c} className="text-xs bg-cream rounded-full px-3 py-1 border border-mist">
                {c}
              </span>
            ))}
            <span className="text-xs rounded-full px-3 py-1 text-pearl" style={{ backgroundColor: t.primary }}>+ كل المناطق</span>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-4 mt-10 pb-4">
        <h2 className="font-sans text-base font-bold text-navy text-center mb-6">أسئلة قبل الطلب</h2>
        <div className="divide-y divide-mist border border-mist rounded-2xl bg-white overflow-hidden">
          {faq.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                className="w-full flex gap-3 p-4 text-right"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              >
                <span className="w-8 h-8 rounded-full bg-ice/50 flex items-center justify-center flex-shrink-0">
                  {faqOpen === i ? "−" : "+"}
                </span>
                <span className="flex-1 text-sm font-medium text-navy">{item.q}</span>
              </button>
              {faqOpen === i && <p className="px-4 pb-4 pr-16 text-sm text-muted">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-4 mt-10">
          <h2 className="font-sans text-sm font-bold text-navy mb-4">قد يعجبك أيضاً</h2>
          <div className="space-y-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/products/${r.slug}`}
                className="block bg-white rounded-2xl border border-mist p-4"
              >
                <p className="font-medium text-navy text-sm">{r.shortName}</p>
                <p className="text-xs text-muted mt-1">من {formatPrice(r.offers[0]?.price ?? 199)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-cream/95 backdrop-blur border-t border-mist">
        <button
          type="button"
          onClick={onCta}
          className="w-full max-w-lg mx-auto block rounded-full py-4 text-pearl font-semibold text-sm shadow-lg"
          style={{ backgroundColor: t.primary }}
        >
          ابدئي {product.shortName} الآن · {formatPrice(selected.price)}
        </button>
      </div>
    </div>
  );
}
