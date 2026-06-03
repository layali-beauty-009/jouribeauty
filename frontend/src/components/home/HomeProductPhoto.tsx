"use client";

import { useState } from "react";
import { getHomeProductImageAlt, getHomeProductImageBase } from "@/config/homeImages";

const EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"] as const;

type Props = {
  slug: string;
  className?: string;
  onMissing?: () => void;
};

/**
 * Renders the merchant file from /public/home/{slug}.{png|jpg|webp} unchanged.
 * No Next/Image — no optimization or re-encoding.
 */
export function HomeProductPhoto({ slug, className, onMissing }: Props) {
  const base = getHomeProductImageBase(slug);
  const alt = getHomeProductImageAlt(slug) ?? "";
  const [extIndex, setExtIndex] = useState(0);
  const [missing, setMissing] = useState(false);

  if (!base || missing) {
    onMissing?.();
    return null;
  }

  const src = `${base}${EXTENSIONS[extIndex]}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- intentional: zero processing
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (extIndex < EXTENSIONS.length - 1) {
          setExtIndex((i) => i + 1);
          return;
        }
        setMissing(true);
        onMissing?.();
      }}
    />
  );
}
