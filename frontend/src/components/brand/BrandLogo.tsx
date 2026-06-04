"use client";

import { useState } from "react";
import { BrandLogoMark } from "@/components/brand/BrandLogoMark";
import { brandLogo } from "@/config/brandAssets";
import { businessConfig } from "@/config/business";

type Props = {
  variant?: "light" | "dark";
  className?: string;
  iconClassName?: string;
};

/** شعار جوري — PNG الأصلي (شفاف) فالهيدر، أبيض نظيف فالفوتر */
export function BrandLogo({
  variant = "light",
  className = "",
  iconClassName = "h-11 w-auto",
}: Props) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <BrandLogoMark
        variant={variant}
        className={`shrink-0 ${iconClassName} ${className}`.trim()}
      />
    );
  }

  const isDark = variant === "dark";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brandLogo.png}
      alt={`${businessConfig.brand.nameLocal} — ${businessConfig.brand.nameEnglish}`}
      className={`shrink-0 object-contain object-center ${iconClassName} ${className} ${
        isDark ? "brightness-0 invert" : ""
      }`}
      decoding="async"
      onError={() => setUseFallback(true)}
    />
  );
}
