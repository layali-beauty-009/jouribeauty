import { businessConfig } from "@/config/business";
import type { Product } from "@/lib/api";
import { productsMarketing } from "@/config/productsMarketing";

export function getHomeContent(products: Product[]) {
  const count = products.length || 3;
  const ingredients = products
    .map((p) => productsMarketing[p.slug]?.mainIngredient)
    .filter(Boolean)
    .join("، ");

  return {
    announcement: `شحن مجاني للطلبات فوق ٢٠٠ د.إ • ${businessConfig.cod.paymentLabel}`,
    hero: {
      label: "سيرومات سريرية",
      title: `${count} سيرومات. ${count} مشاكل. روتين واحد واضح.`,
      subtitle: `تركيبات مستوحاة من العيادة لحياة ${businessConfig.market.countryName} — ${ingredients || "كافيين، باكوتشيول، وببتيدات النحاس"}. فيجان، خالي من القسوة، ووضوح مشكل + حل.`,
      cta: "تسوّقي المجموعة",
      ctaSecondary: "كيف يعمل",
      proofCard: {
        title: "مناسب للإمارات",
        subtitle: "تركيبات للحرارة والشمس ونمط الحياة النشط",
      },
    },
    formulations: {
      label: "تركيباتنا",
      title: `${count} سيرومات. ${count} مشاكل. حل واضح لكل واحد.`,
      subtitle:
        "كل سيروم من جوري بيوتي يوضح المشكلة التي يعالجها وكيف تساعدك التركيبة — بدون وعود فارغة.",
    },
    whyBrand: {
      label: "ليش جوري بيوتي؟",
      title: "عناية بالبشرة بعلم، مو بوعود",
      subtitle:
        "سيرومات فاخرة للمناخ الخليجي — مكوّنات شفافة وفوائد صادقة.",
      cards: [
        {
          icon: "shield",
          title: "مشكل ← حل",
          text: "كل صفحة منتج توضح الهمّ الحقيقي وكيف يعمل كل مكوّن نشط.",
        },
        {
          icon: "leaf",
          title: "نظيف وواعي",
          text: "تركيبات فيجان وخالية من القسوة — ريتينول، باكوتشيول، GHK-Cu وأكثر.",
        },
        {
          icon: "heart",
          title: businessConfig.cod.paymentLabel,
          text: "ادفعي عند استلام الطلب — بدون دفع أونلاين.",
        },
      ],
    },
    testimonials: {
      label: "تقييمات موثقة",
      title: "عميلات قرأن المكوّنات قبل ما يطلبن",
      subtitle: "روتين حقيقي. هموم حقيقية. نتائج نعتز فيها.",
      items: [
        {
          name: "سارة المكتوم",
          meta: "٣٢ • دبي • مشترية مؤكدة",
          initial: "س",
          text: "سيروم العين فعلاً ساعدني على الانتفاح الصباحي. أحب إنهم يشرحون كل مكوّن.",
          rating: 5,
        },
        {
          name: "نورة الكعبي",
          meta: "٣٨ • أبوظبي • مشترية مؤكدة",
          initial: "ن",
          text: "الباكوتشيول أنعم على بشرتي الحساسة من الريتينول. إشراق واضح بعد أسبوعين.",
          rating: 5,
        },
        {
          name: "فاطمة الراشدي",
          meta: "٤١ • الشارقة • مشترية مؤكدة",
          initial: "ف",
          text: "سيروم GHK-Cu أنقذ بشرتي بعد السفر — أقل جفاف وأكثر راحة.",
          rating: 5,
        },
      ],
    },
    howItWorks: {
      label: "كيف يعمل",
      title: "من الطلب لباب بيتك في ٣ خطوات",
      subtitle: `${businessConfig.cod.paymentLabel}. بدون التزام. تجربة بدون مخاطرة.`,
      steps: [
        {
          n: 1,
          title: "اختاري سيرومك",
          text: "اختاري التركيبة اللي تناسب همّك — عين، شباب، أو إصلاح الحاجز.",
        },
        {
          n: 2,
          title: "أكدي الطلب (بدون دفع)",
          text: "اسمك ورقمك فقط. الدفع عند الاستلام.",
        },
        {
          n: 3,
          title: "استلمي وادفعي",
          text: `توصيل لكل ${businessConfig.market.countryName} خلال ٢–٥ أيام عمل.`,
        },
      ],
    },
    finalCta: {
      label: "ابدئي روتينك",
      title: "بشرتك تستحق وضوح، مو لخبطة",
      subtitle: `${businessConfig.cod.paymentLabel}، شحن الإمارات، وسيرومات لهموم حقيقية.`,
      cta: "تسوّقي السيرومات",
    },
    faq: {
      label: "أسئلة شائعة",
      title: "قبل ما تطلبين",
      subtitle: "ادفعي عند الاستلام فقط.",
      items: [
        {
          q: "هل توصّلون لكل الإمارات؟",
          a: "نعم — لكل الإمارات. التوصيل عادة ٢–٥ أيام عمل.",
        },
        {
          q: "هل الدفع عند الاستلام متاح؟",
          a: `نعم. ${businessConfig.cod.paymentLabel}.`,
        },
        {
          q: "هل تناسب البشرة الحساسة؟",
          a: "الباكوتشيول لطيف على البشرة الحساسة. جرّبي على منطقة صغيرة أولاً.",
        },
        {
          q: "متى ألاحظ النتيجة؟",
          a: "٢–٤ أسابيع للاستمرار. النتائج تختلف من شخص لآخر.",
        },
      ],
    },
    trustStrip: [
      { icon: "truck", title: "شحن سريع", text: "٢–٥ أيام عمل" },
      { icon: "cod", title: businessConfig.cod.paymentLabel, text: "ادفعي عند الاستلام" },
      { icon: "vegan", title: "فيجان", text: "خالي من القسوة" },
    ],
  };
}
