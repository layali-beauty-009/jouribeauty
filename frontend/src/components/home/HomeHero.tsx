"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { homeImages } from "@/config/homeImages";
import { TrustBadgeRow } from "./AnnouncementBar";

type HeroContent = {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
  proofCard: { title: string; subtitle: string };
};

export function HomeHero({ content }: { content: HeroContent }) {
  const slides = homeImages.hero;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const current = slides[active] ?? slides[0];

  return (
    <section className="relative px-4 pt-8 pb-12 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-electric/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-clinical blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-lg md:max-w-2xl mx-auto text-center">
        <p className="text-[0.65rem] tracking-[0.12em] text-royal font-semibold mb-4 leading-relaxed">
          {content.label}
        </p>
        <h1 className="font-sans text-2xl md:text-3xl font-bold text-navy leading-snug">
          {content.title}
        </h1>
        <p className="mt-4 text-muted text-sm leading-7 max-w-md mx-auto">
          {content.subtitle}
        </p>
        <TrustBadgeRow />
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-navy text-pearl rounded-full py-3.5 px-8 text-sm font-semibold tracking-wide hover:bg-royal transition-colors"
          >
            {content.cta}
            <span aria-hidden>←</span>
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full py-3.5 px-8 text-sm font-medium text-navy border border-mist bg-white hover:border-electric transition-colors"
          >
            {content.ctaSecondary}
          </Link>
        </div>
      </div>

      <div className="max-w-lg md:max-w-2xl mx-auto mt-10 relative">
        <div className="rounded-3xl overflow-hidden border border-mist shadow-lg bg-white">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] bg-white">
            {slides.map((slide, index) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={index !== active}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain object-center p-2 sm:p-4"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          {slides.length > 1 && (
            <div className="flex justify-center gap-2 py-3 border-t border-mist bg-pearl/50">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === active ? "w-6 bg-navy" : "w-2 bg-mist"
                  }`}
                  aria-label={`صورة ${index + 1}`}
                  aria-current={index === active}
                />
              ))}
            </div>
          )}
          {current && (
            <div className="px-4 pb-3 text-center">
              <Link
                href={`/products/${current.slug}`}
                className="text-xs font-medium text-royal hover:text-navy transition-colors"
              >
                اكتشفي التفاصيل ←
              </Link>
            </div>
          )}
        </div>

        <div className="relative bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3 mx-2 -mt-6 border border-mist z-10">
          <span className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-pearl text-sm font-bold shrink-0">
            ✓
          </span>
          <div className="text-right min-w-0">
            <p className="text-sm font-semibold text-navy">{content.proofCard.title}</p>
            <p className="text-xs text-muted">{content.proofCard.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
