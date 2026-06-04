"use client";

import { useState } from "react";
import Link from "next/link";
import { HOME_COLLECTION_HERO_BASE, HOME_COLLECTION_HERO_SRC } from "@/config/homeImages";
import { encodePublicPath } from "@/lib/getProductImages";

const EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"] as const;

/** بانر المجموعة — عرض كامل مثل ناما */
export function HomeCollectionHero() {
  const [fallbackIndex, setFallbackIndex] = useState(-1);
  const [missing, setMissing] = useState(false);

  const src =
    fallbackIndex < 0
      ? encodePublicPath(HOME_COLLECTION_HERO_SRC)
      : encodePublicPath(`${HOME_COLLECTION_HERO_BASE}${EXTENSIONS[fallbackIndex]}`);

  if (missing) {
    return (
      <section className="bg-clinical px-4 py-16 text-center">
        <p className="text-sm text-muted">
          صورة المجموعة — أضيفي ملف الصورة في مجلد الصور الرئيسية للموقع
        </p>
      </section>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-2xl lg:max-w-4xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="جوري للجمال — ثلاث سيرومات: العين، التجاعيد، وإصلاح البشرة"
          className="block h-auto w-full"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={() => {
            if (fallbackIndex < EXTENSIONS.length - 1) {
              setFallbackIndex((i) => i + 1);
              return;
            }
            setMissing(true);
          }}
        />
      </div>
      <div className="border-b border-mist/80 bg-cream py-3 text-center">
        <Link
          href="#products"
          className="inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors hover:text-navy"
        >
          اكتشفي كل سيروم على حدة
          <span aria-hidden>←</span>
        </Link>
      </div>
    </section>
  );
}
