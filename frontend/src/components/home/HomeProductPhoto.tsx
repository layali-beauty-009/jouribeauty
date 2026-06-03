"use client";

import { useEffect, useState } from "react";
import { getHomeProductImage } from "@/config/homeImages";

const SLUG_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"] as const;

type Props = {
  slug: string;
  className?: string;
  onMissing?: () => void;
};

/**
 * Shows merchant file from homeImages config, or /home/{slug}.{ext} if you add slug-named files.
 */
export function HomeProductPhoto({ slug, className, onMissing }: Props) {
  const configured = getHomeProductImage(slug);
  const [slugExtIndex, setSlugExtIndex] = useState(0);
  const [useSlugFallback, setUseSlugFallback] = useState(false);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    if (missing) onMissing?.();
  }, [missing, onMissing]);

  if (!configured) return null;
  if (missing) return null;

  const src = useSlugFallback
    ? `/home/${slug}${SLUG_EXTENSIONS[slugExtIndex]}`
    : configured.src;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- no Next/Image processing
    <img
      src={src}
      alt={configured.alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (!useSlugFallback) {
          setUseSlugFallback(true);
          return;
        }
        if (slugExtIndex < SLUG_EXTENSIONS.length - 1) {
          setSlugExtIndex((i) => i + 1);
          return;
        }
        setMissing(true);
        onMissing?.();
      }}
    />
  );
}
