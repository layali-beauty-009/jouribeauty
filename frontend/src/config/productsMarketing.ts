/** Arabic marketing fields for homepage product cards */
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
    routineLabel: "روتين العين",
    badgeText: "جوري للعين",
    cardHeadline: "سيروم الكافيين — هالات، انتفاخ، وخطوط دقيقة",
    cardSubheadline:
      "5٪ كافيين + ريتينول + هيالورونيك — يستهدف مظهر التعب تحت العين من حرارة الخليج والسهر.",
    rating: 4.9,
    reviewsCount: 284,
    problem: "هالات، انتفاخ، وخطوط تحت العين",
    mainIngredient: "5٪ كافيين",
  },
  "bakuchiol-anti-aging-serum": {
    routineLabel: "روتين الشباب",
    badgeText: "جوري للإشراق",
    cardHeadline: "سيروم الباكوتشيول — تجاعيد بلطف بلا حرقان",
    cardSubheadline:
      "باكوتشيول 1.3٪ + فيتامين سي + جلوتاثيون — إشراقة وتماسك لبشرة باهتة من الشمس والمكيف.",
    rating: 4.8,
    reviewsCount: 312,
    problem: "تجاعيد، بهتان، وفقدان تماسك",
    mainIngredient: "باكوتشيول 1.3٪",
  },
  "ghk-cu-barrier-repair-serum": {
    routineLabel: "روتين الإصلاح",
    badgeText: "جوري للإصلاح",
    cardHeadline: "سيروم GHK-Cu — أصلحي حاجز بشرتك",
    cardSubheadline:
      "ببتيد النحاس + إكتوين + هيالورونيك — رطوبة عميقة وبشرة أهدأ بعد الشمس والتكييف.",
    rating: 4.9,
    reviewsCount: 196,
    problem: "حاجز ضعيف، جفاف، وخطوط دقيقة",
    mainIngredient: "GHK-Cu",
  },
};
