import { business } from "@/config/business";
import type { Product } from "@/lib/api";
import { productsMarketing } from "@/config/productsMarketing";

export function getHomeContent(products: Product[]) {
  const count = products.length || 3;
  const ingredients = products
    .map((p) => productsMarketing[p.slug]?.mainIngredient)
    .filter(Boolean)
    .join(", ");

  return {
    announcement: `Free UAE delivery on orders over 200 ${business.market.currencySymbol} • ${business.cod.label}`,
    hero: {
      label: "CLINICAL SERUMS",
      title: `${count} serums. ${count} concerns. One trusted routine.`,
      subtitle: `Clinic-inspired actives for life in the ${business.market.countryName} — ${ingredients || "caffeine, bakuchiol & copper peptides"}. Vegan, cruelty-free, problem → solution clarity.`,
      cta: "Shop the collection",
      ctaSecondary: "How it works",
      proofCard: {
        title: "UAE Ready",
        subtitle: "Formulas for heat, sun & active lifestyles",
      },
    },
    formulations: {
      label: "OUR FORMULATIONS",
      title: `${count} serums. ${count} problems. One clear solution each.`,
      subtitle:
        "Each Jouri serum tells you the skin concern it treats and how the formula solves it — no vague promises.",
    },
    whyBrand: {
      label: "WHY JOURI BEAUTY",
      title: "Skincare with science, not empty promises",
      subtitle:
        "Premium serums designed for the Gulf climate — transparent ingredients, honest benefits.",
      cards: [
        {
          icon: "shield",
          title: "Problem → Solution",
          text: "Every product page lists real concerns and how each active addresses them.",
        },
        {
          icon: "leaf",
          title: "Clean & conscious",
          text: "Vegan, cruelty-free formulas with proven actives — retinol, bakuchiol, GHK-Cu & more.",
        },
        {
          icon: "heart",
          title: `${business.cod.label}`,
          text: business.cod.note,
        },
      ],
    },
    testimonials: {
      label: "VERIFIED REVIEWS",
      title: "Customers who read the ingredients before they ordered",
      subtitle: "Real routines. Real concerns. Honest results.",
      items: [
        {
          name: "Sara Al M.",
          meta: `32 • Dubai • Verified buyer`,
          initial: "S",
          text: "The caffeine eye serum actually helped my morning puffiness. I love that they explain what each ingredient does.",
          rating: 5,
        },
        {
          name: "Noura K.",
          meta: `38 • Abu Dhabi • Verified buyer`,
          initial: "N",
          text: "Bakuchiol is so much gentler than retinol for my sensitive skin. Skin looks brighter after two weeks.",
          rating: 5,
        },
        {
          name: "Fatima R.",
          meta: `41 • Sharjah • Verified buyer`,
          initial: "F",
          text: "GHK-Cu serum saved my skin after travel — less tightness, more hydration. Will reorder.",
          rating: 5,
        },
      ],
    },
    howItWorks: {
      label: "HOW IT WORKS",
      title: `From order to your door in 3 steps`,
      subtitle: `${business.cod.label}. No commitment. Risk-free try.`,
      steps: [
        {
          n: 1,
          title: "Choose your serum",
          text: "Pick the formula that matches your concern — eyes, anti-aging, or barrier repair.",
        },
        {
          n: 2,
          title: "Confirm (no online payment)",
          text: "Enter your details. Pay only when the order arrives at your door.",
        },
        {
          n: 3,
          title: "Receive & enjoy",
          text: `Delivery across the ${business.market.countryName} in 2–5 business days.`,
        },
      ],
    },
    finalCta: {
      label: "BEGIN YOUR RITUAL",
      title: "Your skin deserves clarity, not confusion",
      subtitle: `${business.cod.label}, UAE shipping, and serums built for real concerns.`,
      cta: "Shop serums now",
    },
    faq: {
      label: "FAQ",
      title: "Questions before you order",
      subtitle: business.cod.note,
      items: [
        {
          q: `Do you ship across the ${business.market.countryName}?`,
          a: "Yes — we deliver to all emirates. Delivery typically takes 2–5 business days.",
        },
        {
          q: "Is cash on delivery available?",
          a: `Yes. ${business.cod.label} — pay when you receive your package.`,
        },
        {
          q: "Are the serums suitable for sensitive skin?",
          a: "Bakuchiol is ideal for retinol-sensitive skin. Patch test any new serum and use the eye formula on the under-eye area only.",
        },
        {
          q: "When will I see results?",
          a: "Many customers notice hydration and brightness within 2 weeks. Anti-aging and eye concerns may take 4–8 weeks of consistent use.",
        },
        {
          q: "What is your return policy?",
          a: "Contact us within 14 days if the product is sealed and unused. We're here to help at hello@jouribeauty.store.",
        },
      ],
    },
    trustStrip: [
      { icon: "truck", title: "Fast UAE shipping", text: "2–5 business days" },
      { icon: "cod", title: business.cod.label, text: "Pay on delivery" },
      { icon: "vegan", title: "Vegan & cruelty-free", text: "Clean actives" },
    ],
  };
}
