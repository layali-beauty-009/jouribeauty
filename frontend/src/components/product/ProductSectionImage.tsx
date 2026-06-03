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

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-mist bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full max-w-full"
        loading={variant === "heroBeforeAfter" ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
