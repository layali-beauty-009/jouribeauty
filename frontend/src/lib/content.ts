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
    announcement: `✦ تركيبات سريرية واضحة • ${businessConfig.cod.paymentLabel} • توصيل الإمارات`,
    hero: {
      label: businessConfig.brand.positioningLine,
      title: `${businessConfig.brand.nameLocal} — ثلاث سيرومات، ثلاث مشاكل، حل واحد موثوق`,
      subtitle: `سيرومات بمعايير صيدلية: مكوّنات نشطة بتركيز معلن (${ingredients || "كافيين، باكوتشيول، ببتيدات النحاس"})، شرح مشكل + حل لكل تركيبة، ومناسبة لجو الخليج — حرارة، مكيف، وسهر.`,
      cta: "تصفّحي السيرومات",
      ctaSecondary: "لماذا جوري؟",
      proofCard: {
        title: "ثقة الصيدلية",
        subtitle: "وضوح المكوّنات قبل الطلب — بدون وعود طبية مبالغ فيها",
      },
    },
    formulations: {
      label: "تركيبات جوري",
      title: "ثلاث سيرومات. ثلاث مشاكل. حلّ واحد موثوق.",
      subtitle:
        "كل سيروم تركيبة مستقلة بمكوّن نشط واضح. اختاري الهمّ اللي يشغلك، أو كمّلي الروتين بثلاثتهم.",
    },
    whyBrand: {
      label: "لماذا جوري للجمال؟",
      title: "عناية بمعايير صيدلية — مو وعود فارغة",
      subtitle:
        "نختصر الرفوف إلى ثلاث تركيبات مركّزة لبشرة الخليج: عين، شباب وإشراق، وإصلاح الحاجز.",
      cards: [
        {
          icon: "shield",
          title: "مشكل ← مكوّن ← حل",
          text: "كل صفحة منتج تشرح الهمّ، التركيز، والفائدة المتوقعة — بصدق وبدون ادعاءات علاجية.",
        },
        {
          icon: "leaf",
          title: "تركيبات نظيفة",
          text: "فيجان وخالي من القسوة حيث ينطبق — مكوّنات معروفة في العناية الجلدية المتقدمة.",
        },
        {
          icon: "heart",
          title: businessConfig.cod.paymentLabel,
          text: `${businessConfig.cod.confirmationPromise}. ${businessConfig.cod.returnGuarantee}.`,
        },
      ],
    },
    testimonials: {
      label: "تجارب عملاء",
      title: "يثقون بوضوح التركيبة قبل الشراء",
      subtitle: "عملاء في الإمارات يقدّرون الصراحة والروتين البسيط.",
      items: [
        {
          name: "سارة المكتوم",
          meta: "٣٢ • دبي • عميلة مؤكدة",
          initial: "س",
          text: "أحب إن الموقع يشرح المكوّنات مثل الصيدلية — عرفت بالضبط ليش سيروم العين قبل ما أطلب.",
          rating: 5,
        },
        {
          name: "نورة الكعبي",
          meta: "٣٨ • أبوظبي • عميلة مؤكدة",
          initial: "ن",
          text: "بشرتي حساسة — الباكوتشيول كان خيار واضح ومنطقي. إحساس أنعم بعد أسبوعين من الروتين.",
          rating: 5,
        },
        {
          name: "فاطمة الراشدي",
          meta: "٤١ • الشارقة • عميلة مؤكدة",
          initial: "ف",
          text: "سيروم الإصلاح ساعدني بعد سفر ومكيف — بشرتي أقل شدّاً وأكثر راحة.",
          rating: 5,
        },
      ],
    },
    howItWorks: {
      label: "طريقة الطلب",
      title: "من الاختيار إلى باب بيتك — بثلاث خطوات",
      subtitle: `${businessConfig.cod.paymentLabel}. ${businessConfig.cod.confirmationPromise}.`,
      steps: [
        {
          n: 1,
          title: "اختاري السيروم المناسب",
          text: "عين، تجاعيد وبهتان، أو إصلاح الحاجز — حسب همّك الحقيقي.",
        },
        {
          n: 2,
          title: "أكدي الطلب",
          text: "اسمك ورقمك فقط. نتصل للتأكيد — الدفع عند الاستلام.",
        },
        {
          n: 3,
          title: "استلمي وادفعي",
          text: businessConfig.cod.deliveryPromise,
        },
      ],
    },
    finalCta: {
      label: "ابدئي روتينك",
      title: "بشرتك تستحق صيدلية سيرومات — مو تجربة عشوائية",
      subtitle: `${businessConfig.brand.nameLocal}: ثقة، وضوح، و${businessConfig.cod.paymentLabel.toLowerCase()}.`,
      cta: "تسوّقي السيرومات",
    },
    faq: {
      label: "أسئلة شائعة",
      title: "قبل الطلب",
      subtitle: "إجابات واضحة — كما في الصيدلية.",
      items: [
        {
          q: "هل جوري للجمال علامة صيدلية؟",
          a: "نحن متخصصون في السيرومات بمعايير وضوح صيدلية: مكوّنات معلنة، مشكل + حل، وبدون ادعاءات طبية مبالغ فيها. منتجات عناية بالبشرة فقط.",
        },
        {
          q: "هل توصّلون لكل الإمارات؟",
          a: `نعم. ${businessConfig.cod.deliveryPromise}.`,
        },
        {
          q: "هل الدفع عند الاستلام متاح؟",
          a: `نعم. ${businessConfig.cod.paymentLabel} — بدون دفع إلكتروني مسبق.`,
        },
        {
          q: "متى ألاحظ فرقاً؟",
          a: "مع الاستمرار ٢–٤ أسابيع حسب الهمّ. النتائج تختلف — نتحدث عن مظهر وإحساس البشرة، ليس علاجاً.",
        },
      ],
    },
    trustStrip: [
      { icon: "shield", title: "وضوح المكوّنات", text: "تركيز معلن لكل سيروم" },
      { icon: "cod", title: businessConfig.cod.paymentLabel, text: "ادفعي عند الاستلام" },
      { icon: "truck", title: "توصيل الإمارات", text: "٢–٥ أيام عمل" },
      { icon: "vegan", title: "نظيف وواعي", text: "فيجان · خالي من القسوة" },
    ],
  };
}
