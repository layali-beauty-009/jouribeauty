"use client";

import { useState } from "react";
import { brandLogo } from "@/config/brandAssets";
import { businessConfig } from "@/config/business";

type Variant = "light" | "dark";
type BrandLogoSrc = (typeof brandLogo)[keyof typeof brandLogo];

type Props = {
  variant?: Variant;
  className?: string;
  iconClassName?: string;
};

export function BrandLogo({
  variant = "light",
  className = "",
  iconClassName = "h-11 w-auto",
}: Props) {
  const [src, setSrc] = useState<BrandLogoSrc>(
    variant === "dark" ? brandLogo.onDark : brandLogo.png,
  );
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy text-pearl text-lg font-semibold shadow-sm ${className}`}
        aria-hidden
      >
        {businessConfig.brand.monogram}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${businessConfig.brand.nameLocal} — ${businessConfig.brand.nameEnglish}`}
      className={`object-contain object-center ${iconClassName} ${className}`}
      decoding="async"
      onError={() => {
        if (variant === "light" && src === brandLogo.png) {
          setSrc(brandLogo.default);
          return;
        }
        setFailed(true);
      }}
    />
  );
}
