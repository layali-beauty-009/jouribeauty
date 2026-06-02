/** Extra marketing fields per serum (images added later) */
export const productsMarketing: Record<
  string,
  {
    routineLabel: string;
    badgeText: string;
    cardHeadline: string;
    cardSubheadline: string;
    rating: number;
    reviewsCount: number;
    problem: string;
    mainIngredient: string;
  }
> = {
  "caffeine-under-eye-serum": {
    routineLabel: "Eye Routine",
    badgeText: "Jouri Eye",
    cardHeadline: "Depuff, brighten & smooth the under-eye area",
    cardSubheadline:
      "5% caffeine + retinol + hyaluronic acid for dark circles, puffiness & crow's feet.",
    rating: 4.9,
    reviewsCount: 284,
    problem: "Puffy eyes, dark circles & fine lines",
    mainIngredient: "5% Caffeine",
  },
  "bakuchiol-anti-aging-serum": {
    routineLabel: "Youth Routine",
    badgeText: "Jouri Glow",
    cardHeadline: "Gentle anti-aging without harsh retinol",
    cardSubheadline:
      "1.3% bakuchiol peptides + vitamin C + glutathione for firmness & radiance.",
    rating: 4.8,
    reviewsCount: 312,
    problem: "Wrinkles, dull skin & loss of firmness",
    mainIngredient: "Bakuchiol",
  },
  "ghk-cu-barrier-repair-serum": {
    routineLabel: "Repair Routine",
    badgeText: "Jouri Repair",
    cardHeadline: "Rebuild your skin barrier overnight",
    cardSubheadline:
      "GHK-Cu copper peptide + ectoin + HA for hydration, soothing & fine lines.",
    rating: 4.9,
    reviewsCount: 196,
    problem: "Weak barrier, dehydration & fine lines",
    mainIngredient: "GHK-Cu",
  },
};
