"use client";

import { useState } from "react";
import { getBrandLogoUrl } from "@/config/brandAssets";
import { businessConfig } from "@/config/business";
import { BrandLogoMark } from "@/components/brand/BrandLogoMark";

type Props = {
  /** light = هيدر · dark = فوتر (خلفية غامقة) */
  variant?: "light" | "dark";
  className?: string;
  iconClassName?: string;
};

const logoAlt = `${businessConfig.brand.nameLocal} — ${businessConfig.brand.nameEnglish}`;

/**
 * شعار جوري — PNG واحد لكل المواقع.
 * بدون invert: الصورة فيها خلفية بيضاء، والفلتر القديم كان يعطي مربع أبيض فالفوتر.
 * multiply / screen يدمج الخلفية البيضاء مع لون الصفحة.
 */
export function BrandLogo({
  variant = "light",
  className = "",
  iconClassName = "h-11 w-auto",
}: Props) {
  const [failed, setFailed] = useState(false);
  const isDark = variant === "dark";

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
      className={`shrink-0 object-contain object-center ${iconClassName} ${className} ${
        isDark ? "mix-blend-screen" : "mix-blend-multiply"
      }`}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
