"use client";

import { useState } from "react";
import Link from "next/link";
import { HOME_COLLECTION_HERO_BASE, HOME_COLLECTION_HERO_SRC } from "@/config/homeImages";
import { encodePublicPath } from "@/lib/getProductImages";

const EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"] as const;

/** Full-width trio product visual — first thing on homepage (namabeauty-style). */
export function HomeCollectionHero() {
  const [fallbackIndex, setFallbackIndex] = useState(-1);
  const [missing, setMissing] = useState(false);

  const src =
    fallbackIndex < 0
      ? encodePublicPath(HOME_COLLECTION_HERO_SRC)
      : encodePublicPath(`${HOME_COLLECTION_HERO_BASE}${EXTENSIONS[fallbackIndex]}`);

  if (missing) {
    return (
      <section className="bg-gradient-to-b from-clinical to-pearl px-4 py-16 text-center">
        <p className="text-sm text-muted">
          صورة المجموعة — أضيفي ملفك فـ{" "}
          <code className="text-navy text-xs">frontend/public/home/</code>
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white w-full">
      <div className="w-full max-w-2xl lg:max-w-4xl mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="جوري للجمال — ثلاث سيرومات: العين، التجاعيد، وإصلاح البشرة"
          className="w-full h-auto block"
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
      <div className="text-center py-4 border-b border-mist/80 bg-pearl/40">
        <Link
          href="#products"
          className="inline-flex items-center gap-2 text-sm font-medium text-royal hover:text-navy transition-colors"
        >
          اكتشفي كل سيروم على حدة
          <span aria-hidden className="inline-block rotate-90">
            ←
          </span>
        </Link>
      </div>
    </section>
  );
}
