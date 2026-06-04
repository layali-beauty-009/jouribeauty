export type ProductOffer = {
  id: string;
  quantity: number;
  label: string;
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  defaultSelected?: boolean;
};

export type ProductIngredient =
  | string
  | {
      name: string;
      dosage?: string;
      benefit: string;
      proof?: string;
    };

export type ProductImages = {
  heroBeforeAfter: string;
  heroProduct: string;
  problemImage: string;
  ingredientImage: string;
  authorityImage: string;
  lifestyleImage: string;
  testimonialImage: string;
  comparisonImage: string;
};

export type ProductThemeColors = {
  primary: string;
  primaryDark: string;
  accent: string;
  softBg: string;
};

export type ProductConfig = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  shortName: string;
  routineNameLocal: string;
  routineNameEnglish: string;
  category: string;
  format: string;
  targetCustomer: string;
  problem: string;
  emotionalPain: string;
  desiredOutcome: string;
  mainIngredient: string;
  ingredientStack: ProductIngredient[];
  mechanism: string;
  cardHeadline: string;
  cardSubheadline: string;
  heroHeadline: string;
  heroSubheadline: string;
  rating: number;
  reviewsCount: number;
  badges: string[];
  offers: ProductOffer[];
  upsell: {
    enabled: boolean;
    price: number;
    label: string;
    subtitle: string;
  };
  images: ProductImages;
  imageAlts: Record<keyof ProductImages, string>;
  theme: ProductThemeColors;
  exclusions?: string[];
  authority?: {
    certifications: string[];
    expertTitle: string;
    expertQuote: string;
    stats: { value: string; label: string }[];
  };
  timeline?: { label: string; text: string }[];
  usage?: { headline: string; steps: string[] };
  delivery?: { cities: string[]; carriers: string[] };
  testimonials?: {
    name: string;
    meta: string;
    initial: string;
    text: string;
    rating: number;
  }[];
  problemAgitation?: { pain: string; solution: string }[];
  failureAlternatives?: { name: string; priceRange: string; cons: string[] }[];
  comparisonRows?: { label: string; us: string; them: string }[];
  faq?: { q: string; a: string }[];
  scarcityLine?: string;
  insightStat?: { value: string; text: string; source?: string };
  relatedSlugs?: string[];
};
