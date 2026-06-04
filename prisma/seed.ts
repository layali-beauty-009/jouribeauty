import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    slug: "caffeine-under-eye-serum",
    name: "5% Caffeine Under Eye Serum",
    tagline: "Awaken tired eyes. Smooth, hydrate, brighten.",
    description:
      "A targeted eye treatment with 5% caffeine, retinol, hyaluronic acid, and niacinamide. The cooling roller applicator helps depuff, fade the look of dark circles, and soften fine lines around the delicate eye area.",
    volume: "15ml",
    priceAed: 149,
    category: "Eye Care",
    keyIngredients: [
      "5% Caffeine",
      "Retinol",
      "Hyaluronic Acid",
      "Niacinamide",
      "Collagen",
      "Camellia",
    ],
    features: [
      "Anti-Puffiness",
      "Dark Circles",
      "Anti-Wrinkle",
      "Hydrating",
      "Vegan",
      "Roller Applicator",
    ],
    usage:
      "Apply morning and evening to clean, dry under-eye skin using the roller. Gently pat until absorbed. Follow with SPF in the morning. For external use only.",
    sortOrder: 1,
    benefits: [
      {
        problem: "Puffy under-eyes from fatigue or fluid retention",
        solution:
          "5% caffeine stimulates microcirculation to help reduce the appearance of puffiness.",
        sortOrder: 1,
      },
      {
        problem: "Dark circles and dull under-eye tone",
        solution:
          "Niacinamide and brightening actives help even tone and reduce the look of dark circles.",
        sortOrder: 2,
      },
      {
        problem: "Fine lines and crow's feet",
        solution:
          "Retinol supports cell renewal for smoother, younger-looking eye contours.",
        sortOrder: 3,
      },
      {
        problem: "Dry, dehydrated under-eye skin",
        solution:
          "Hyaluronic acid and camellia deliver lasting hydration and comfort.",
        sortOrder: 4,
      },
      {
        problem: "Aging, loss of firmness around the eyes",
        solution:
          "Collagen-supporting care nourishes skin and helps maintain elasticity.",
        sortOrder: 5,
      },
    ],
  },
  {
    slug: "bakuchiol-anti-aging-serum",
    name: "Bakuchiol Anti-Aging Serum",
    tagline: "Nature's retinol alternative. Firm, glow, renew.",
    description:
      "A gentle yet powerful face and neck serum with 1.3% bakuchiol peptides, vitamin C, glutathione, centella, and carnosine. Ideal for those who want anti-aging results without harsh retinol irritation.",
    volume: "30ml",
    priceAed: 189,
    category: "Face Serum",
    keyIngredients: [
      "1.3% Bakuchiol Peptides",
      "Vitamin C",
      "Glutathione",
      "Centella Asiatica",
      "Carnosine",
    ],
    features: [
      "Anti-Aging",
      "Firming",
      "Brightening",
      "Paraben-Free",
      "Cruelty-Free",
      "Sensitive-Skin Friendly",
    ],
    usage:
      "Apply 3–4 drops to face and neck after cleansing, before moisturizer. Use AM or PM. Always use SPF during the day. Patch test if you have very sensitive skin.",
    sortOrder: 2,
    benefits: [
      {
        problem: "Wrinkles and loss of skin elasticity",
        solution:
          "Bakuchiol — a plant-based retinol alternative — helps reduce wrinkles without typical retinol irritation.",
        sortOrder: 1,
      },
      {
        problem: "Sagging or lack of facial firmness",
        solution:
          "Peptides and carnosine support a plumper, firmer-looking complexion.",
        sortOrder: 2,
      },
      {
        problem: "Dull, uneven skin tone",
        solution:
          "Vitamin C and glutathione brighten and revive radiance.",
        sortOrder: 3,
      },
      {
        problem: "Retinol intolerance or sensitive skin",
        solution:
          "Bakuchiol delivers anti-aging benefits suitable for sensitive skin types.",
        sortOrder: 4,
      },
      {
        problem: "Dryness and lack of comfort",
        solution:
          "Centella soothes and nourishes while the serum texture hydrates.",
        sortOrder: 5,
      },
    ],
  },
  {
    slug: "ghk-cu-barrier-repair-serum",
    name: "GHK-Cu Copper Peptide Barrier Serum",
    tagline: "Repair. Strengthen. Restore your skin barrier.",
    description:
      "An advanced repair serum combining GHK-Cu copper peptide, ectoin, hyaluronic acid, and panthenol. Designed to hydrate deeply, smooth fine lines, and rebuild a resilient skin barrier stressed by climate, travel, or active skincare.",
    volume: "30ml",
    priceAed: 199,
    category: "Face Serum",
    keyIngredients: [
      "GHK-Cu Copper Peptide",
      "Ectoin",
      "Hyaluronic Acid",
      "Panthenol",
      "Peptides",
    ],
    features: [
      "Barrier Repair",
      "Anti-Wrinkle",
      "Firming",
      "Deep Hydration",
      "Stress Protection",
    ],
    usage:
      "Apply 3–4 drops to face after cleansing, morning or evening. Layer under moisturizer. Ideal after sun exposure or when skin feels compromised.",
    sortOrder: 3,
    benefits: [
      {
        problem: "Fine lines and reduced firmness",
        solution:
          "GHK-Cu copper peptide supports skin repair and renewal for smoother texture.",
        sortOrder: 1,
      },
      {
        problem: "Weakened or compromised skin barrier",
        solution:
          "Ectoin and panthenol protect against stressors and help restore barrier function.",
        sortOrder: 2,
      },
      {
        problem: "Dehydration and tight, thirsty skin",
        solution:
          "Hyaluronic acid delivers deep hydration and a plumped appearance.",
        sortOrder: 3,
      },
      {
        problem: "Skin that won't recover after harsh treatments or climate",
        solution:
          "Peptide and ectoin complex builds resilience and supports recovery.",
        sortOrder: 4,
      },
      {
        problem: "Uneven texture and lack of suppleness",
        solution:
          "Firming and smoothing actives refine skin for a healthier feel.",
        sortOrder: 5,
      },
    ],
  },
];

async function main() {
  for (const { benefits, ...product } of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        ...product,
        benefits: { create: benefits },
      },
    });
  }
  console.log("Seeded 3 Jouri Beauty serums.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
