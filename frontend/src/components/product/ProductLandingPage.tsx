"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProductConfig } from "@/types/product";
import { businessConfig } from "@/config/business";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { trackEvent } from "@/lib/tracking";
import { ProductSectionImage } from "@/components/product/ProductSectionImage";
import { getProductImages } from "@/lib/getProductImages";
import { IconCheck, IconQuote } from "@/components/ui/BrandIcons";
import { LpSectionHeader } from "@/components/product/lp/LpSectionHeader";
import { LpHeroStats } from "@/components/product/lp/LpHeroStats";
import { LpTrustGrid } from "@/components/product/lp/LpTrustGrid";
import { LpOfferSelector } from "@/components/product/lp/LpOfferSelector";
import { LpRelatedProducts } from "@/components/product/lp/LpRelatedProducts";

function defaultOfferId(product: ProductConfig) {
  const def = product.offers.find((o) => o.defaultSelected);
  if (def) return def.id;
  return product.offers[1]?.id ?? product.offers[0]?.id ?? "one";
}

function Stars({ n }: { n: number }) {
  return <span className="text-electric text-sm">{"★".repeat(Math.round(n))}</span>;
}

function formatReviews(n: number) {
  return n.toLocaleString("ar-EG");
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
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const anchor = document.getElementById("lp-offer-cta");
    if (!anchor) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyCta(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    trackEvent("ViewContent", {
      content_ids: product.id,
      content_name: product.name,
      value: selected?.price,
      currency: "AED",
    });
  }, [product.id, product.name, selected?.price]);

  const ctaLabel = useMemo(
    () => `ابدئي ${product.routineNameLocal} الآن · ${formatPrice(selected.price)}`,
    [product.routineNameLocal, selected.price],
  );
  const stickyCtaLabel = ctaLabel;

  const onCta = () => addOffer(product, offerId);

  const lpImages = getProductImages(product);
  const faq = product.faq ?? [];

  const statLabels = ["الحجم", "الميزة", "الشهادة", "الضمان"];
  const heroStats = useMemo(
    () =>
      product.badges.slice(0, 4).map((value, i) => ({
        value,
        label: statLabels[i] ?? "—",
      })),
    [product.badges],
  );

  const testimonials =
    product.testimonials ?? [
      {
        name: "سارة م.",
        meta: "٣٢ • دبي • مشترية مؤكدة",
        initial: "س",
        text: `«لاحظت فرق على ${product.problem} خلال أسبوعين — والأهم إن التركيبة واضحة من أول القراءة.»`,
        rating: 5,
      },
      {
        name: "نورة ك.",
        meta: "٣٨ • أبوظبي • مشترية مؤكدة",
        initial: "ن",
        text: `«${product.mainIngredient} كان بالضبط اللي كنت أدور عليه — مو إعلان فاضي.»`,
        rating: 5,
      },
    ];

  return (
    <div className="pb-28 bg-cream" style={{ ["--product-primary" as string]: t.primary }}>
      <div className="text-center text-xs py-2.5 text-pearl font-medium bg-teal-dark">
        {businessConfig.cod.paymentLabel} • {businessConfig.cod.deliveryPromise}
      </div>

      {/* صورة البطل */}
      <section className="px-4 pt-4 max-w-lg mx-auto">
        <ProductSectionImage
          src={lpImages.heroBeforeAfter}
          alt={product.imageAlts.heroBeforeAfter}
          theme={t}
          variant="heroBeforeAfter"
          label={product.shortName}
          sublabel={product.imageAlts.heroBeforeAfter}
        />
        <LpHeroStats stats={heroStats} />
      </section>

      {/* العنوان والتقييم */}
      <section className="px-4 pt-8 text-center max-w-lg mx-auto">
        <p className="text-[10px] font-semibold tracking-wide text-royal mb-2">
          {product.routineNameLocal} · جوري للجمال
        </p>
        <h1 className="font-sans text-xl md:text-2xl font-bold leading-snug text-navy">
          {product.heroHeadline}
        </h1>
        <p className="mt-4 text-sm text-muted leading-relaxed">{product.heroSubheadline}</p>
        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
          <Stars n={product.rating} />
          <span className="text-sm text-muted">
            {product.rating} ({formatReviews(product.reviewsCount)} تقييم · مؤكدة)
          </span>
        </div>
        <p className="mt-3 text-lg font-bold text-navy">
          يبدأ من {formatPrice(product.offers[0]?.price ?? 199)} / علبة
        </p>
      </section>

      <LpOfferSelector
        offers={product.offers}
        offerId={offerId}
        onSelect={setOfferId}
        onCta={onCta}
        ctaLabel={ctaLabel}
        scarcityLine={product.scarcityLine}
      />

      <LpTrustGrid />

      {product.insightStat && (
        <section className="px-4 mt-8 max-w-lg mx-auto">
          <div className="rounded-2xl p-5 text-pearl text-center border border-white/10 bg-navy">
            <span className="text-4xl font-bold block">{product.insightStat.value}</span>
            <p className="text-sm mt-2 leading-relaxed opacity-95">{product.insightStat.text}</p>
            {product.insightStat.source && (
              <p className="text-[10px] mt-2 opacity-70">{product.insightStat.source}</p>
            )}
          </div>
        </section>
      )}

      <section className="px-4 mt-10 max-w-lg mx-auto">
        <ProductSectionImage
          src={lpImages.problemImage}
          alt={product.imageAlts.problemImage}
          theme={t}
          variant="problem"
          label="المشكلة"
          sublabel={product.imageAlts.problemImage}
        />
      </section>

      <section className="px-4 mt-10 max-w-lg mx-auto">
        <LpSectionHeader
          label="مشاكل تعرفينها"
          title="هل تعانين من هذه؟"
          subtitle="مو نخفّف الأعراض بس — نستهدف السبب بمكوّن واضح لكل همّ."
          accentColor="#2a7a85"
        />
        <div className="space-y-4">
          {(product.problemAgitation ?? []).map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-mist shadow-sm">
              <div className="bg-white p-4 flex gap-3 text-right">
                <span className="text-lilac-dark text-lg font-bold flex-shrink-0" aria-hidden>
                  ✕
                </span>
                <p className="text-sm text-navy leading-relaxed">{item.pain}</p>
              </div>
              <div className="p-4 flex gap-3 text-right bg-clinical">
                <IconCheck className="w-5 h-5 flex-shrink-0 text-royal" />
                <p className="text-sm text-muted leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 mt-12 max-w-lg mx-auto">
        <LpSectionHeader
          label="المكوّنات الفعّالة"
          title="السرّ في التركيز، مو في القائمة"
          subtitle="كل مكوّن له دور واضح — بجرعة مفهومة، بلا خلطات غامضة."
          accentColor="#2a7a85"
        />
        <div className="space-y-3">
          {product.ingredientStack.map((ing, i) => {
            const item = typeof ing === "string" ? { name: ing, benefit: "" } : ing;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-mist p-5 text-right shadow-sm"
              >
                <div className="flex gap-3 flex-row-reverse items-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-pearl text-sm font-bold flex-shrink-0 bg-navy">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-navy">{item.name}</p>
                    {"dosage" in item && item.dosage && (
                      <p className="text-xs text-royal mt-0.5 font-medium">{item.dosage}</p>
                    )}
                    <p className="text-sm text-muted mt-2 leading-relaxed">{item.benefit}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {product.exclusions && (
        <section className="px-4 mt-10 max-w-lg mx-auto">
          <h3 className="font-bold text-navy mb-3 text-right text-sm">ما لن تجدينه في علبتك</h3>
          <div className="flex flex-wrap gap-2 justify-end">
            {product.exclusions.map((e) => (
              <span
                key={e}
                className="text-xs bg-white border border-mist rounded-full px-3 py-1.5 text-muted"
              >
                {e}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="px-4 mt-12 max-w-lg mx-auto">
        <LpSectionHeader label="التركيبة" title="سيرومك من جوري للجمال" accentColor="#2a7a85" />
        <ProductSectionImage
          src={lpImages.heroProduct}
          alt={product.imageAlts.heroProduct}
          theme={t}
          variant="productHero"
          label={product.shortName}
          sublabel={product.imageAlts.heroProduct}
        />
        <p className="text-center text-xs text-muted mt-3 leading-relaxed">
          {product.mainIngredient} · {product.format}
        </p>
      </section>

      <section className="px-4 mt-10 max-w-lg mx-auto text-center">
        <LpSectionHeader
          label="آلية العمل"
          title={`كيف يساعدك ${product.mainIngredient}؟`}
          subtitle={product.mechanism}
          accentColor="#2a7a85"
        />
      </section>

      {product.authority && (
        <section className="px-4 mt-10 max-w-lg mx-auto">
          <LpSectionHeader
            label="الأمان والمصداقية"
            title="تركيبة سريرية، مو وعود فاضية"
            accentColor="#2a7a85"
          />
          <div className="grid grid-cols-2 gap-2 mb-4">
            {product.authority.certifications.map((c) => (
              <div
                key={c}
                className="bg-white border border-mist rounded-xl py-3 px-2 text-center text-[11px] font-semibold text-navy"
              >
                {c}
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6 text-pearl text-right bg-teal-dark">
            <p className="text-xs text-electric mb-2 font-semibold">{product.authority.expertTitle}</p>
            <p className="text-sm leading-relaxed">&ldquo;{product.authority.expertQuote}&rdquo;</p>
          </div>
          {product.authority.stats && (
            <div className="grid grid-cols-2 gap-2 mt-4">
              {product.authority.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl border border-mist p-3 text-center"
                >
                  <p className="text-xl font-bold text-navy">
                    {s.value}
                  </p>
                  <p className="text-[10px] text-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      <section className="px-4 mt-12 max-w-lg mx-auto">
        <LpSectionHeader
          label="النتيجة المتوقعة"
          title="وش راح تلاحظين مع الاستمرار؟"
          subtitle="النتائج تختلف — هذي توقعات واقعية، مو وعود طبية."
          accentColor="#2a7a85"
        />
        {(product.timeline ?? []).map((step, i) => (
          <div
            key={step.label}
            className="bg-white rounded-2xl border border-mist p-6 mb-4 text-center shadow-sm"
          >
            <span className="inline-flex w-11 h-11 rounded-full text-pearl items-center justify-center font-bold text-lg bg-navy">
              {i + 1}
            </span>
            <h3 className="font-bold text-navy mt-3">{step.label}</h3>
            <p className="text-sm text-muted mt-2 leading-relaxed">{step.text}</p>
          </div>
        ))}
      </section>

      <section className="px-4 mt-12 max-w-lg mx-auto">
        <LpSectionHeader
          label="تجارب حقيقية"
          title={`ما تقوله ${formatReviews(product.reviewsCount)}+ عميلة`}
          subtitle="مشتريات مؤكدة من الإمارات — مو تعليقات مفبركة."
          accentColor="#2a7a85"
        />
        {testimonials.map((tm) => (
          <article
            key={tm.name}
            className="bg-white rounded-2xl border border-mist p-5 mb-4 text-right shadow-sm"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <IconQuote className="w-7 h-7 text-electric/40 flex-shrink-0" />
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-royal bg-clinical px-2 py-0.5 rounded-full">
                <IconCheck className="w-3 h-3" />
                مؤكدة
              </span>
            </div>
            <Stars n={tm.rating} />
            <p className="text-sm text-navy mt-3 leading-relaxed">{tm.text}</p>
            <div className="mt-4 flex items-center justify-between gap-3 flex-row-reverse">
              <div>
                <p className="font-semibold text-sm text-navy">{tm.name}</p>
                <p className="text-xs text-muted mt-0.5">{tm.meta}</p>
              </div>
              <span className="w-11 h-11 rounded-full text-pearl flex items-center justify-center font-bold text-sm ring-2 ring-electric/30 bg-navy">
                {tm.initial}
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="px-4 mt-10 max-w-lg mx-auto">
        <LpSectionHeader
          label="ليش جوري تختلف؟"
          title="قارني — وقرّري بنفسك"
          accentColor="#2a7a85"
        />
        {(product.failureAlternatives ?? []).map((alt) => (
          <div key={alt.name} className="bg-white rounded-2xl border border-mist p-4 mb-3 text-right">
            <p className="font-bold text-navy">{alt.name}</p>
            <p className="text-xs text-muted mt-1">{alt.priceRange}</p>
            <ul className="mt-3 space-y-1.5">
              {alt.cons.map((c) => (
                <li key={c} className="text-xs text-muted flex gap-2 flex-row-reverse">
                  <span className="text-lilac-dark" aria-hidden>
                    ✕
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="rounded-2xl p-5 text-pearl text-right border-2 border-electric/30 bg-navy">
          <p className="font-bold text-lg">{product.shortName}</p>
          <p className="text-2xl font-bold mt-1">{formatPrice(product.offers[0]?.price ?? 199)}</p>
          <ul className="text-xs mt-3 space-y-1 opacity-95">
            <li>✓ {product.mainIngredient} بتركيز واضح</li>
            <li>✓ {businessConfig.cod.paymentLabel}</li>
            <li>✓ {businessConfig.cod.returnGuarantee}</li>
          </ul>
        </div>
      </section>

      {product.comparisonRows && (
        <section className="px-4 mt-8 max-w-lg mx-auto">
          <div className="bg-white rounded-2xl border border-mist overflow-hidden text-sm shadow-sm">
            <div className="grid grid-cols-3 bg-clinical text-[10px] font-bold text-navy">
              <div className="p-2 text-center">البديل</div>
              <div className="p-2 text-center text-royal font-semibold">
                جوري
              </div>
              <div className="p-2 text-center">المقارنة</div>
            </div>
            {product.comparisonRows.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-t border-mist">
                <div className="p-3 text-muted text-xs">{row.them}</div>
                <div className="p-3 font-semibold text-center text-xs text-royal">
                  {row.us}
                </div>
                <div className="p-3 font-medium text-navy bg-mist/20 text-xs">{row.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-4 mt-10 rounded-3xl p-6 text-pearl max-w-lg md:mx-auto text-right bg-teal-dark">
        <h2 className="font-bold text-lg">{product.name}</h2>
        <p className="text-3xl font-bold mt-2">{formatPrice(selected.price)}</p>
        <p className="text-sm opacity-90 mt-2">{selected.label}</p>
        <ul className="text-xs mt-4 space-y-1.5 opacity-90">
          <li>✓ {businessConfig.cod.paymentLabel}</li>
          <li>✓ {businessConfig.cod.deliveryPromise}</li>
          <li>✓ {businessConfig.cod.returnGuarantee}</li>
        </ul>
        <button
          type="button"
          onClick={onCta}
          className="w-full mt-6 rounded-2xl py-3.5 bg-white text-navy font-bold text-sm hover:bg-pearl transition-colors"
        >
          {ctaLabel}
        </button>
      </section>

      <section className="px-4 mt-10 max-w-lg mx-auto bg-white rounded-2xl border border-mist p-6 text-center shadow-sm">
        <h2 className="font-bold text-navy text-lg">{businessConfig.cod.returnGuarantee}</h2>
        <p className="text-sm text-muted mt-3 leading-relaxed">
          جرّبي العلبة كاملة. إذا ما حسّيتي بفرق يستاهل، تواصلي معنا — فلوسك ترجع بدون تعقيد.
        </p>
      </section>

      {product.usage && (
        <section className="px-4 mt-10 max-w-lg mx-auto">
          <LpSectionHeader
            label="طريقة الاستخدام"
            title={product.usage.headline}
            subtitle="روتين بسيط — تقدرين تستمرين عليه كل يوم."
            accentColor="#2a7a85"
          />
          {product.usage.steps.map((step, i) => (
            <div
              key={step}
              className="bg-white rounded-2xl border border-mist p-4 mt-3 flex gap-4 flex-row-reverse text-right shadow-sm"
            >
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-pearl font-bold flex-shrink-0 bg-navy">
                {i + 1}
              </span>
              <p className="text-sm text-muted pt-2 leading-relaxed flex-1">{step}</p>
            </div>
          ))}
        </section>
      )}

      <section className="px-4 mt-10 max-w-lg mx-auto text-right">
        <LpSectionHeader
          label="التوصيل والدفع"
          title="كيف يوصلك طلبك؟"
          subtitle={businessConfig.cod.confirmationPromise}
          align="right"
          accentColor="#2a7a85"
        />
        {[
          { t: "اطلبي الحين", d: "اختاري العرض واكتبي اسمك ورقمك — بدون دفع أونلاين." },
          { t: "نتصل نأكّد", d: businessConfig.cod.confirmationPromise },
          { t: "استلمي وادفعي", d: businessConfig.cod.deliveryPromise },
        ].map((s, i) => (
          <div
            key={s.t}
            className="bg-white rounded-2xl border-r-4 border-navy p-4 mt-3 shadow-sm"
          >
            <p className="font-bold text-navy">
              {i + 1}. {s.t}
            </p>
            <p className="text-sm text-muted mt-1">{s.d}</p>
          </div>
        ))}
      </section>

      {product.delivery && (
        <section className="px-4 mt-8 max-w-lg mx-auto bg-white rounded-2xl border border-mist p-5 text-right">
          <h3 className="font-bold text-navy mb-3">نوصّل لكل إمارات الدولة</h3>
          <div className="flex flex-wrap gap-2 justify-end">
            {product.delivery.cities.map((c) => (
              <span key={c} className="text-xs bg-cream rounded-full px-3 py-1 border border-mist">
                {c}
              </span>
            ))}
            <span className="text-xs rounded-full px-3 py-1 text-pearl font-medium bg-navy">
              + كل المناطق
            </span>
          </div>
        </section>
      )}

      <section className="px-4 mt-10 max-w-lg mx-auto pb-4">
        <LpSectionHeader
          label="أسئلة شائعة"
          title="قبل ما تطلبين"
          accentColor="#2a7a85"
        />
        <div className="divide-y divide-mist border border-mist rounded-2xl bg-white overflow-hidden shadow-sm">
          {faq.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                className="w-full flex gap-3 p-4 text-right hover:bg-pearl/50 transition-colors items-center"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                aria-expanded={faqOpen === i}
              >
                <span className="flex-1 text-sm font-medium text-navy leading-snug">{item.q}</span>
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
                    faqOpen === i ? "bg-navy text-pearl" : "bg-clinical text-navy"
                  }`}
                >
                  {faqOpen === i ? "−" : "+"}
                </span>
              </button>
              {faqOpen === i && (
                <p className="px-4 pb-4 text-sm text-muted leading-relaxed text-right bg-pearl/30">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <LpRelatedProducts related={related} accentColor="#2a7a85" />

      {showStickyCta && (
        <div className="fixed bottom-0 inset-x-0 z-50 border-t border-mist bg-cream/95 p-3 backdrop-blur-md">
          <button
            type="button"
            onClick={onCta}
            className="mx-auto block min-h-[52px] w-full max-w-lg rounded-2xl bg-navy py-4 text-sm font-bold text-pearl shadow-lg transition-all hover:bg-royal active:scale-[0.98]"
          >
            {stickyCtaLabel}
          </button>
        </div>
      )}
    </div>
  );
}
