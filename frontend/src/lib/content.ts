import { businessConfig } from "@/config/business";
import type { Product } from "@/lib/api";
import { productsMarketing } from "@/config/productsMarketing";

export function getHomeContent(products: Product[]) {
  const ingredients = products
    .map((p) => productsMarketing[p.slug]?.mainIngredient)
    .filter(Boolean)
    .join("، ");

  return {
    announcement: `سيرومات سريرية بتركيز معلن • ${businessConfig.cod.paymentLabel} • توصيل الإمارات`,
    hero: {
      label: "صيدلية السيرومات · الإمارات",
      brandLine: businessConfig.brand.nameLocal,
      title: "سيرومات سريرية — جمال يبدأ من وضوح التركيبة",
      subtitle: `ثلاث تركيبات مركّزة (${ingredients || "كافيين، باكوتشيول، GHK-Cu"}) — كل واحدة تستهدف همّك الحقيقي: العين، التجاعيد والبهتان، أو إصلاح الحاجز. حلال حيث ينطبق، تركيز معلن، و${businessConfig.cod.paymentLabel.toLowerCase()}.`,
      cta: "اختاري سيرومك",
      ctaSecondary: "لماذا جوري؟",
    },
    formulations: {
      label: "تركيباتنا",
      title: "ثلاث سيرومات. ثلاث مشاكل. حلّ سريري واحد.",
      subtitle:
        "كل سيروم عالم مستقل — مكوّن نشط واضح، جرعة مفهومة، وصفحة تشرح لك لماذا يناسب بشرتك في الإمارات. اختاري همّك، أو كمّلي الروتين الثلاثي.",
    },
    whyBrand: {
      label: "لماذا جوري؟",
      title: "صيدلية، مو متجر تجميل",
      subtitle:
        "العميلة الواعية تشتري بعد ما تقرأ المكوّنات. جوري تختصر الرفوف إلى ثلاث سيرومات مركّزة لبشرة الخليج — صرامة صيدلية، روتين بسيط.",
      cards: [
        {
          icon: "flask",
          title: "مشكل ← مكوّن ← حل",
          text: "كل صفحة تشرح الهمّ الحقيقي (مكيف، شمس، سهر)، التركيز النشط، والنتيجة المتوقعة بصدق — بلا ادعاءات علاجية.",
        },
        {
          icon: "shield",
          title: "شفافية تستحق ثقتك",
          text: "نذكر المكوّنات والفائدة بوضوح — كما تتوقعين من رف الصيدلية، لا من إعلان تيك توك عشوائي.",
        },
        {
          icon: "vegan",
          title: "تركيبات واعية",
          text: "فيجان وخالي من القسوة حيث ينطبق — مكوّنات معروفة في العناية المتقدمة، بلا خلطات غامضة.",
        },
        {
          icon: "heart",
          title: businessConfig.cod.paymentLabel,
          text: `${businessConfig.cod.confirmationPromise}. ${businessConfig.cod.returnGuarantee}. جرّبي بلا مخاطرة مالية مسبقة.`,
        },
      ],
    },
    testimonials: {
      label: "تجارب مؤكدة",
      title: "عميلات قرأن المكوّنات قبل ما يطلبن",
      subtitle: "جوري اختيار من يبحث عن المنطق قبل الجمال — وضوح، ثم شراء.",
      items: [
        {
          name: "سارة المكتوم",
          meta: "32 • دبي • مشترية مؤكدة",
          initial: "س",
          text: "«أنا أقرأ كل ingredient label. جوري أول براند إماراتي يشرح ليش 5٪ كافيين للعين — مو مجرد كلمة “سيروم عين”. هذا وحده خلّاني أطلب بثقة.»",
          rating: 5,
        },
        {
          name: "نورة الكعبي",
          meta: "38 • أبوظبي • مشترية مؤكدة",
          initial: "ن",
          text: "«بشرتي حساسة والريتينول يحرقني. الباكوتشيول هنا منطقي — بعد أسبوعين إحساس أنعم وإشراقة أوضح، خصوصاً مع المكيف.»",
          rating: 5,
        },
        {
          name: "فاطمة الراشدي",
          meta: "41 • الشارقة • مشترية مؤكدة",
          initial: "ف",
          text: "«سفر + شمس + تكييف = بشرتي كانت “مكسورة”. سيروم GHK-Cu رجّع راحة للحاجز — أقل احمرار وأقل شدّ بعد الاستمرار.»",
          rating: 5,
        },
      ],
    },
    howItWorks: {
      label: "كيف يعمل الطلب",
      title: "من الطلب لباب بيتك في 3 خطوات",
      subtitle: `${businessConfig.cod.paymentLabel}. ${businessConfig.cod.confirmationPromise}.`,
      steps: [
        {
          n: 1,
          title: "اختاري همّك",
          text: "عين، تجاعيد وبهتان، أو إصلاح الحاجز — كل سيروم له صفحة تشرح المشكلة والحل.",
        },
        {
          n: 2,
          title: "أكدي الطلب (بدون دفع)",
          text: "اسمك ورقمك فقط. نتصل لتأكيد العنوان — لا تدفعين إلا عند الاستلام.",
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
      title: "جمالك يستحق علم، مو وعود",
      subtitle: `${businessConfig.brand.nameLocal}: تركيبات واضحة، ثقة الخليج، و${businessConfig.cod.paymentLabel.toLowerCase()}.`,
      cta: "ابدئي روتينك الآن",
      chips: [
        { icon: "flask" as const, text: "تركيز معلن" },
        { icon: "cod" as const, text: businessConfig.cod.paymentLabel },
        { icon: "truck" as const, text: "توصيل الإمارات" },
        { icon: "shield" as const, text: "ضمان 30 يوم" },
      ],
    },
    faq: {
      label: "أسئلة شائعة",
      title: "كل ما تحتاجين معرفته قبل الطلب",
      subtitle: "إجابات مباشرة — كما في الصيدلية.",
      items: [
        {
          q: "هل جوري علامة صيدلية حقيقية؟",
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
          a: "مع الاستمرار 2–4 أسابيع حسب الهمّ. النتائج تختلف — نتحدث عن مظهر وإحساس البشرة، ليس علاجاً.",
        },
        {
          q: "ما ضمان الاسترجاع؟",
          a: `${businessConfig.cod.returnGuarantee}. تواصلي معنا إن لم يناسبك الروتين.`,
        },
      ],
    },
    trustStrip: [
      { icon: "shield", title: "وضوح المكوّنات", text: "تركيز معلن لكل سيروم" },
      { icon: "cod", title: businessConfig.cod.paymentLabel, text: "ادفعي عند الاستلام" },
      { icon: "truck", title: "توصيل الإمارات", text: "2–5 أيام عمل" },
      { icon: "vegan", title: "نظيف وواعي", text: "فيجان · خالي من القسوة" },
    ],
  };
}
