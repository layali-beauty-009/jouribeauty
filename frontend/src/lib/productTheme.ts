/** Product cards — tonal variation within brand teal (no rainbow accents) */

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
    gradient: "from-royal/20 via-clinical to-pearl",
    border: "border-royal/30",
    hoverBorder: "hover:border-royal",
    accent: "text-royal",
    hoverAccent: "hover:text-navy",
    accentLight: "text-electric",
    pill: "bg-clinical text-navy border-mist",
  },
  "bakuchiol-anti-aging-serum": {
    gradient: "from-mist/80 via-clinical to-pearl",
    border: "border-mist",
    hoverBorder: "hover:border-royal",
    accent: "text-lilac-dark",
    hoverAccent: "hover:text-navy",
    accentLight: "text-royal",
    pill: "bg-pearl text-navy border-mist",
  },
  "ghk-cu-barrier-repair-serum": {
    gradient: "from-clinical via-pearl to-ice/40",
    border: "border-ice",
    hoverBorder: "hover:border-electric",
    accent: "text-navy",
    hoverAccent: "hover:text-royal",
    accentLight: "text-electric",
    pill: "bg-clinical text-navy border-mist",
  },
};

export const defaultTheme: ProductTheme = {
  gradient: "from-clinical to-pearl",
  border: "border-mist",
  hoverBorder: "hover:border-royal",
  accent: "text-navy",
  hoverAccent: "hover:text-royal",
  accentLight: "text-electric",
  pill: "bg-clinical text-navy border-mist",
};

export function getProductTheme(slug: string): ProductTheme {
  return productThemes[slug] ?? defaultTheme;
}
