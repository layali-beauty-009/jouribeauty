/** Colors matched to each serum’s packaging */

export type ProductTheme = {
  gradient: string;
  border: string;
  hoverBorder: string;
  accent: string;
  hoverAccent: string;
  accentLight: string;
  pill: string;
};

export const productThemes: Record<string, ProductTheme> = {
  "caffeine-under-eye-serum": {
    gradient: "from-royal/25 via-electric/20 to-pearl",
    border: "border-royal/25",
    hoverBorder: "hover:border-royal",
    accent: "text-royal",
    hoverAccent: "hover:text-royal",
    accentLight: "text-electric",
    pill: "bg-royal/10 text-royal border-royal/20",
  },
  "bakuchiol-anti-aging-serum": {
    gradient: "from-lavender via-lilac/80 to-pearl",
    border: "border-lavender",
    hoverBorder: "hover:border-lilac",
    accent: "text-lilac-dark",
    hoverAccent: "hover:text-lilac-dark",
    accentLight: "text-lilac-dark",
    pill: "bg-lavender/60 text-ink border-lilac",
  },
  "ghk-cu-barrier-repair-serum": {
    gradient: "from-ice via-ice/40 to-pearl",
    border: "border-ice",
    hoverBorder: "hover:border-navy/40",
    accent: "text-navy",
    hoverAccent: "hover:text-navy",
    accentLight: "text-ice-dark",
    pill: "bg-ice/50 text-navy border-ice-dark/30",
  },
};

export const defaultTheme: ProductTheme = {
  gradient: "from-mist/50 to-pearl",
  border: "border-mist",
  hoverBorder: "hover:border-navy/30",
  accent: "text-navy",
  hoverAccent: "hover:text-royal",
  accentLight: "text-royal",
  pill: "bg-mist/50 text-ink",
};

export function getProductTheme(slug: string): ProductTheme {
  return productThemes[slug] ?? defaultTheme;
}
