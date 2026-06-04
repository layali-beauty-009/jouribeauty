"use client";

import { useState } from "react";
import { getBrandLogoUrl } from "@/config/brandAssets";
import { businessConfig } from "@/config/business";
import { BrandLogoMark } from "@/components/brand/BrandLogoMark";

type Props = {
  variant?: "light" | "dark";
  className?: string;
  iconClassName?: string;
};

const logoAlt = `${businessConfig.brand.nameLocal} — ${businessConfig.brand.nameEnglish}`;

/** شعار جوري — PNG شفاف (jouri-logo-mark.png) */
export function BrandLogo({
  variant = "light",
  className = "",
  iconClassName = "h-11 w-auto",
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <BrandLogoMark
        variant={variant}
        className={`shrink-0 ${iconClassName} ${className}`.trim()}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={getBrandLogoUrl()}
      alt={logoAlt}
      className={`shrink-0 object-contain object-center ${iconClassName} ${className}`}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
