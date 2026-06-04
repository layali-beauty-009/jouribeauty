"use client";

import { getBrandLogoUrl } from "@/config/brandAssets";
import { businessConfig } from "@/config/business";

type Props = {
  /** light = هيدر (خلفية فاتحة) · dark = فوتر (خلفية غامقة — فلتر أبيض) */
  variant?: "light" | "dark";
  className?: string;
  iconClassName?: string;
};

const logoAlt = `${businessConfig.brand.nameLocal} — ${businessConfig.brand.nameEnglish}`;

/** شعار جوري — نفس PNG في الهيدر والفوتر: ChatGPT Image Jun 4, 2026, 03_07_05 AM.png */
export function BrandLogo({
  variant = "light",
  className = "",
  iconClassName = "h-11 w-auto",
}: Props) {
  const isDark = variant === "dark";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={getBrandLogoUrl()}
      alt={logoAlt}
      className={`shrink-0 object-contain object-center ${iconClassName} ${className} ${
        isDark ? "brightness-0 invert" : ""
      }`}
      decoding="async"
    />
  );
}
