"use client";

import { useEffect, useState } from "react";
import { getHomeProductImage } from "@/config/homeImages";

type Props = {
  slug: string;
  className?: string;
  onMissing?: () => void;
};

/** Merchant file only — src from homeImages, served unchanged via <img>. */
export function HomeProductPhoto({ slug, className, onMissing }: Props) {
  const configured = getHomeProductImage(slug);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    if (missing) onMissing?.();
  }, [missing, onMissing]);

  if (!configured || missing) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- no processing
    <img
      src={configured.src}
      alt={configured.alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setMissing(true)}
    />
  );
}
