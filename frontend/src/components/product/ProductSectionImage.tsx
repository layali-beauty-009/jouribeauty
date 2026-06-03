"use client";

import { useState } from "react";
import type { ProductThemeColors } from "@/types/product";
import { PremiumImagePlaceholder } from "@/components/ui/PremiumImagePlaceholder";

type Variant = "heroBeforeAfter" | "problem" | "productHero";

type Props = {
  src: string;
  alt: string;
  theme: ProductThemeColors;
  variant: Variant;
  label: string;
  sublabel?: string;
};

export function ProductSectionImage({ src, alt, theme, variant, label, sublabel }: Props) {
  const [failed, setFailed] = useState(!src);

  if (failed || !src) {
    return (
      <PremiumImagePlaceholder
        label={label}
        sublabel={sublabel}
        theme={theme}
        variant={variant === "heroBeforeAfter" ? "hero" : variant === "problem" ? "wide" : "square"}
        showBeforeAfter={variant === "heroBeforeAfter"}
      />
    );
  }

  const aspect =
    variant === "heroBeforeAfter"
      ? "aspect-[4/5] sm:aspect-[16/10]"
      : variant === "problem"
        ? "aspect-[4/3]"
        : "aspect-square";

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-mist bg-white ${aspect}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading={variant === "heroBeforeAfter" ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
