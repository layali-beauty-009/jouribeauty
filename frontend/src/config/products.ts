import type { ProductConfig } from "@/types/product";

const sharedOffers = (volumeLabel: string) => [
  {
    id: "one",
    quantity: 1,
    label: "علبة واحدة",
    subtitle: volumeLabel,
    price: 199,
    compareAtPrice: 199,
    badge: "نتيجة من العلبة الأولى",
  },
  {
    id: "two",
    quantity: 2,
    label: "علبتين • ثبّتي النتيجة",
    subtitle: "وفّري ١٤٩ د.إ",
    price: 249,
    compareAtPrice: 398,
    badge: "الأكثر اختياراً",
    defaultSelected: true,
  },
  {
    id: "three",
    quantity: 3,
    label: "ثلاث علب • الروتين الكامل",
    subtitle: "وفّري ٢٤٨ د.إ",
    price: 349,
    compareAtPrice: 597,
    badge: "الأكثر توفيراً",
  },
];

const uaeCities = [
  "دبي",
  "أبوظبي",
  "الشارقة",
  "عجمان",
  "رأس الخيمة",
  "الفجيرة",
  "أم القيوين",
  "العين",
];

export const products: ProductConfig[] = [
  {
    id: "jouri-eye-001",
    slug: "caffeine-under-eye-serum",
    sku: "JOURI-EYE-15",
    name: "سيروم جوري للهالات السوداء وانتفاخات العين",
    shortName: "سيروم العين",
    routineNameLocal: "روتين العين",
    routineNameEnglish: "Eye Routine",
    category: "العناية بالعين",
    format: "سيروم + رولر",
    targetCustomer: "نساء و رجال في الإمارات يعانون من انتفاخ أو هالات أو خطوط تحت العين",
    problem: "انتفاخ تحت العين، هالات داكنة، وخطوط دقيقة",
    emotionalPain:
      "تبانين تعبانة حتى لو نمتي كويس — المكياج ما يخفي الانتفاخ ولا الهالات",
    desiredOutcome: "عينان أنعم، أفتح، وأكثر حيوية كل صباح",
    mainIngredient: "كافيين ٥٪",
    ingredientStack: [
      {
        name: "كافيين ٥٪",
        dosage: "تركيز عالي",
        benefit: "يساعد على تقليل مظهر الانتفاخ وتحفيز الدورة الدموية",
        proof: "مكوّن موثوق في منتجات العناية بالعين",
      },
      {
        name: "ريتينول",
        benefit: "يدعم تجديد الخلايا ويخفف مظهر الخطوط الدقيقة",
      },
      {
        name: "حمض الهيالورونيك",
        benefit: "ترطيب عميق لمنطقة رقيقة تحت العين",
      },
      {
        name: "نياسيناميد",
        benefit: "يساعد على توحيد لون البشرة وتفتيح مظهر الهالات",
      },
    ],
    mechanism:
      "الكافيين يستهدف الانتفاخ، والريتينول والنياسيناميد يدعمان مظهر بشرة أنعم وأكثر إشراقاً مع الاستخدام المنتظم.",
    cardHeadline: "عينان أوضح وأقل انتفاخاً",
    cardSubheadline: "كافيين ٥٪ + ريتينول + هيالورونيك",
    heroHeadline: "هالاتك وانتفاخك مو بالضرورة نقص نوم — السبب أحياناً يكون الجلد تحت العين",
    heroSubheadline:
      "سيروم الكافيين ٥٪ مع رولر يهدف الانتفاخ والهالات والخطوط الدقيقة — تركيبة مصممة لمنطقة العين فقط.",
    rating: 4.9,
    reviewsCount: 284,
    badges: ["١٥ مل", "رولر تبريد", "فيجان", "خالي من القسوة"],
    offers: sharedOffers("١٥ مل • رولر"),
    upsell: {
      enabled: true,
      price: 199,
      label: "أضيفي علبة ثانية بنفس السعر الخاص",
      subtitle: "عرض لمرة واحدة بعد الطلب — علبة إضافية ١٩٩ د.إ",
    },
    images: {
      heroBeforeAfter:
        "/products/caffeine-under-eye-serum/ChatGPT Image Jun 4, 2026, 12_03_41 AM.png",
      problemImage:
        "/products/caffeine-under-eye-serum/f93fd1f5-b834-46c5-a223-0eacc424b7c0.jpg",
      heroProduct:
        "/products/caffeine-under-eye-serum/ChatGPT Image Jun 4, 2026, 12_22_36 AM.png",
      ingredientImage: "",
      authorityImage: "",
      lifestyleImage: "",
      testimonialImage: "",
      comparisonImage: "",
    },
    imageAlts: {
      heroBeforeAfter: "قبل وبعد منطقة العين",
      heroProduct: "سيروم الكافيين لمنطقة العين",
      problemImage: "مشاكل تحت العين",
      ingredientImage: "مكوّنات السيروم",
      authorityImage: "جودة التركيبة",
      lifestyleImage: "استخدام يومي",
      testimonialImage: "آراء العملاء",
      comparisonImage: "مقارنة البدائل",
    },
    theme: {
      primary: "#2a7a85",
      primaryDark: "#0f5661",
      accent: "#5ba89e",
      softBg: "#e6f2f0",
    },
    exclusions: ["بدون بارابين", "بدون عطور قوية", "للعين فقط — مو للوجه كامل"],
    authority: {
      certifications: ["فيجان", "خالي من القسوة", "تركيبة واضحة", "مناسب للإمارات"],
      expertTitle: "رأي مختص العناية بالبشرة",
      expertQuote:
        "الكافيين مع الريتينول والنياسيناميد خيار منطقي لمن يبحث عن عناية مركّزة تحت العين — مع الالتزام بوضع السيروم على منطقة العين فقط.",
      stats: [
        { value: "٥٪", label: "كافيين" },
        { value: "١٥ مل", label: "حجم العلبة" },
        { value: "٤.٩", label: "تقييم العملاء" },
        { value: "٢٨٤+", label: "مراجعة" },
      ],
    },
    timeline: [
      {
        label: "أول ٧ أيام",
        text: "قد تلاحظين تقلّ مظهر الانتفاخ صباحاً وترطيباً أوضح تحت العين.",
      },
      {
        label: "الأسبوع الثاني",
        text: "مع الاستمرار، قد يظهر مظهر الهالات أخف والخطوط الدقيقة أنعم.",
      },
      {
        label: "نهاية العلبة الأولى",
        text: "نتائج تختلف من شخص لآخر — الاستمرار يثبّت مظهر العين الأكثر حيوية.",
      },
    ],
    usage: {
      headline: "أبسط روتين عين",
      steps: [
        "صباحاً ومساءً على بشرة نظيفة وجافة تحت العين.",
        "مرّري الرولر بلطف من الزاوية الداخلية للخارجية.",
        "ربّتي برفق حتى يمتص — واستخدمي واقي شمس صباحاً.",
      ],
    },
    delivery: { cities: uaeCities, carriers: ["شركاء توصيل محليين"] },
    relatedSlugs: ["bakuchiol-anti-aging-serum", "ghk-cu-barrier-repair-serum"],
    scarcityLine: "آخر ٤٨ ساعة على عرض الشحن المجاني هذا الأسبوع",
    insightStat: {
      value: "٧٨٪",
      text: "من عميلاتنا في الإمارات يذكرن انتفاخ العين صباحاً كأول همّ",
      source: "استطلاع عملاء جوري للجمال ٢٠٢٥",
    },
    problemAgitation: [
      {
        pain: "«عيوني دايم منتفخة حتى مع النوم الكافي»",
        solution: "الكافيين يساعد على تقليل مظهر الانتفاخ عند الاستخدام المنتظم.",
      },
      {
        pain: "«الكونسيلر ما يغطي الهالات»",
        solution: "النياسيناميد يدعم مظهراً أفتح وأكثر توحّداً للون البشرة.",
      },
      {
        pain: "«خطوط دقيقة تبان أكبر مع التعب»",
        solution: "الريتينول يدعم تجديد الخلايا لمظهر أنعم حول العين.",
      },
    ],
    failureAlternatives: [
      {
        name: "كريمات عين عامة",
        priceRange: "٢٠٠ – ٥٠٠ د.إ",
        cons: [
          "تركيز منخفض على مكوّنات نشطة",
          "لا تستهدف الانتفاخ بشكل مباشر",
          "نتائج بطيئة أو غير واضحة",
        ],
      },
      {
        name: "إخفاء بالمكياج فقط",
        priceRange: "تكلفة شهرية",
        cons: [
          "لا يعالج السبب",
          "تركيبة تتكتل على الخطوط",
          "حل مؤقت",
        ],
      },
    ],
    comparisonRows: [
      { label: "السعر", us: "من ١٩٩ د.إ", them: "أغلى بكثير" },
      { label: "الدفع", us: "عند الاستلام", them: "دفع أونلاين" },
      { label: "التركيز", us: "٥٪ كافيين", them: "غير محدد" },
      { label: "الضمان", us: "٣٠ يوم", them: "غير واضح" },
    ],
    faq: [
      {
        q: "كم السعر والعروض؟",
        a: "علبة واحدة ١٩٩ د.إ، علبتين ٢٤٩ د.إ، ثلاث علب ٣٤٩ د.إ. الدفع عند الاستلام.",
      },
      {
        q: "هل أستخدمه على كل الوجه؟",
        a: "لا — هذا السيروم للمنطقة تحت العين فقط لأنه يحتوي ريتينول.",
      },
      {
        q: "متى ألاحظ فرقاً؟",
        a: "كثير من العميلات يلاحظن تحسّن الانتفاخ خلال أسبوع إلى أسبوعين. النتائج تختلف.",
      },
      {
        q: "هل الدفع عند الاستلام متاح؟",
        a: "نعم، لكل إمارات الدولة. تدفعين عند استلام الطلب.",
      },
    ],
  },
  {
    id: "jouri-glow-002",
    slug: "bakuchiol-anti-aging-serum",
    sku: "JOURI-GLOW-30",
    name: "سيروم الباكوتشيول لمكافحة التجاعيد",
    shortName: "سيروم الباكوتشيول",
    routineNameLocal: "روتين الشباب",
    routineNameEnglish: "Youth Routine",
    category: "سيروم الوجه",
    format: "سيروم قطارة",
    targetCustomer: "من يبحث عن مكافحة التجاعيد بدون تهيّج الريتينول القوي",
    problem: "تجاعيد، بهتان، وفقدان تماسك البشرة",
    emotionalPain:
      "بشرتك ما عادت تبان نفسها — الخطوط تبان والوجه يفقد الإشراق مع الحر والشمس",
    desiredOutcome: "بشرة أكثر إشراقاً، تماسكاً، ومظهراً شاباً",
    mainIngredient: "باكوتشيول ١.٣٪",
    ingredientStack: [
      {
        name: "باكوتشيول ١.٣٪",
        benefit: "بديل نباتي للريتينول — مضاد للشيخوخة بلطف",
      },
      { name: "فيتامين سي", benefit: "إشراق وتوحيد لون" },
      { name: "جلوتاثيون", benefit: "مضاد أكسدة للتوهج" },
      { name: "السنتيلا", benefit: "تهدئة وترطيب" },
    ],
    mechanism:
      "الباكوتشيول يدعم تجديد البشرة بلطف، مع فيتامين سي وجلوتاثيون للإشراق — مناسب لمن لا يتحمل الريتينول القوي.",
    cardHeadline: "مكافحة التجاعيد بلطف",
    cardSubheadline: "باكوتشيول + ببتيدات + فيتامين سي",
    heroHeadline: "تجاعيدك ظهرت قبل وقتها — السبب مو دائماً الكريمات اللي ما توصل للعمق",
    heroSubheadline:
      "باكوتشيول ١.٣٪ مع ببتيدات وفيتامين سي — يساعد على مظهر بشرة أكثر تماسكاً وإشراقاً بدون حرقان الريتينول.",
    rating: 4.8,
    reviewsCount: 312,
    badges: ["٣٠ مل", "للبشرة الحساسة", "فيجان", "بدون بارابين"],
    offers: sharedOffers("٣٠ مل • شهر كامل"),
    upsell: {
      enabled: true,
      price: 199,
      label: "أضيفي علبة ثانية — ١٩٩ د.إ فقط",
      subtitle: "عرض لمرة واحدة بعد إتمام الطلب",
    },
    images: {
      heroBeforeAfter:
        "/products/bakuchiol-anti-aging-serum/ChatGPT Image Jun 4, 2026, 12_59_44 AM.png",
      problemImage:
        "/products/bakuchiol-anti-aging-serum/WhatsApp Image 2026-06-04 at 00.41.19.jpeg",
      heroProduct:
        "/products/bakuchiol-anti-aging-serum/ChatGPT Image Jun 4, 2026, 01_04_11 AM.png",
      ingredientImage: "",
      authorityImage: "",
      lifestyleImage: "",
      testimonialImage: "",
      comparisonImage: "",
    },
    imageAlts: {
      heroBeforeAfter: "قبل وبعد البشرة",
      heroProduct: "سيروم الباكوتشيول",
      problemImage: "علامات التقدم في السن",
      ingredientImage: "مكوّنات نشطة",
      authorityImage: "تركيبة نظيفة",
      lifestyleImage: "روتين صباحي",
      testimonialImage: "تجارب العملاء",
      comparisonImage: "مقارنة",
    },
    theme: {
      primary: "#3d6e72",
      primaryDark: "#0f5661",
      accent: "#5ba89e",
      softBg: "#edf3f2",
    },
    exclusions: [
      "بدون بارابين",
      "بدون كبريتات",
      "بدون سيليكون ثقيل",
      "خالي من القسوة",
    ],
    authority: {
      certifications: ["فيجان", "خالي من القسوة", "باكوتشيول معتمد", "للبشرة الحساسة"],
      expertTitle: "مختص تركيبات العناية",
      expertQuote:
        "الباكوتشيول خيار ممتاز لمن يريد فوائد مضادة للشيخوخة دون تهيّج الريتينول التقليدي — خاصة في مناخ الخليج.",
      stats: [
        { value: "١.٣٪", label: "باكوتشيول" },
        { value: "٣٠ مل", label: "الحجم" },
        { value: "٤.٨", label: "التقييم" },
        { value: "٣١٢+", label: "مراجعة" },
      ],
    },
    timeline: [
      {
        label: "أول ٧–١٤ يوم",
        text: "قد تلاحظين ترطيباً أوضح ومظهراً أكثر نعومة.",
      },
      {
        label: "الأسبوع ٣–٤",
        text: "إشراق أفضل ومظهر خطوط أخف عند كثير من المستخدمات.",
      },
      {
        label: "بعد شهر",
        text: "الاستمرار يثبّت النتيجة — تختلف حسب نوع البشرة.",
      },
    ],
    usage: {
      headline: "٣–٤ قطرات يومياً",
      steps: [
        "بعد الغسيل، ٣–٤ قطرات على الوجه والرقبة.",
        "ربّتي بلطف حتى الامتصاص.",
        "صباحاً أو مساءً — واقي شمس ضروري صباحاً.",
      ],
    },
    delivery: { cities: uaeCities, carriers: ["شركاء توصيل محليين"] },
    relatedSlugs: ["caffeine-under-eye-serum", "ghk-cu-barrier-repair-serum"],
    scarcityLine: "كمية محدودة هذا الأسبوع — شحن مجاني للطلبات فوق ٢٠٠ د.إ",
    insightStat: {
      value: "٣×",
      text: "الباكوتشيول يُعرف كبديل نباتي للريتينول بلطف على البشرة",
    },
    problemAgitation: [
      {
        pain: "«الريتينول يحرق وجهي»",
        solution: "الباكوتشيول يقدم مسار مضاد للشيخوخة بلطف أكبر.",
      },
      {
        pain: "«بشرتي باهتة تحت الشمس»",
        solution: "فيتامين سي وجلوتاثيون يدعمان الإشراق.",
      },
      {
        pain: "«الكريمات ما تعطي نتيجة»",
        solution: "سيروم مركّز يصل للبشرة بتركيز أعلى.",
      },
    ],
    failureAlternatives: [
      {
        name: "كريمات أنتي إيج فاخرة",
        priceRange: "٣٠٠ – ٨٠٠ د.إ",
        cons: [
          "تلمس السطح فقط",
          "تركيز منخفض",
          "نتيجة مؤقتة",
        ],
      },
      {
        name: "ريتينول قوي بدون تدرّج",
        priceRange: "متنوع",
        cons: ["تهيّج واحمرار", "تقشّر", "صعب الاستمرار"],
      },
    ],
    comparisonRows: [
      { label: "اللطف على البشرة", us: "باكوتشيول", them: "ريتينول قاسٍ" },
      { label: "السعر", us: "من ١٩٩ د.إ", them: "أغلى" },
      { label: "COD", us: "نعم", them: "غالباً لا" },
      { label: "الشفافية", us: "مكوّنات واضحة", them: "غامض" },
    ],
    faq: [
      {
        q: "هل يناسب البشرة الحساسة؟",
        a: "الباكوتشيول خيار لطيف — ننصح بتجربة على منطقة صغيرة أولاً.",
      },
      {
        q: "كم العروض؟",
        a: "١ علبة ١٩٩، ٢ علبة ٢٤٩، ٣ علب ٣٤٩ د.إ.",
      },
      {
        q: "متى النتيجة؟",
        a: "٢–٤ أسابيع للإشراق والتماسك عند الاستمرار. تختلف من شخص لآخر.",
      },
    ],
  },
  {
    id: "jouri-repair-003",
    slug: "ghk-cu-barrier-repair-serum",
    sku: "JOURI-REPAIR-30",
    name: "سيروم النحاس GHK-Cu لإصلاح الحاجز",
    shortName: "سيروم الإصلاح",
    routineNameLocal: "روتين الإصلاح",
    routineNameEnglish: "Repair Routine",
    category: "سيروم الوجه",
    format: "سيروم قطارة",
    targetCustomer: "بشرة جافة، حساسة، أو متضررة من الشمس والتكييف في الإمارات",
    problem: "حاجز بشرة ضعيف، جفاف، وخطوط دقيقة",
    emotionalPain:
      "بشرتك تحسّينها «مكسورة» — تحمر بسرعة، تجف من التكييف، وما تتحمّل أي منتج جديد",
    desiredOutcome: "بشرة مرطبة، مطمئنة، وحاجز أقوى",
    mainIngredient: "GHK-Cu ببتيد النحاس",
    ingredientStack: [
      {
        name: "GHK-Cu",
        benefit: "يدعم إصلاح البشرة ومرونتها",
      },
      { name: "إكتوين", benefit: "حماية من الإجهاد (شمس، جفاف)" },
      { name: "حمض الهيالورونيك", benefit: "ترطيب عميق" },
      { name: "بانثينول", benefit: "تهدئة وتلطيف" },
    ],
    mechanism:
      "ببتيد النحاس مع الإكتوين يعيدان بناء مرونة البشرة — مثالي بعد الشمس أو عندما يكون الحاجز ضعيفاً.",
    cardHeadline: "أصلحي حاجز بشرتك",
    cardSubheadline: "GHK-Cu + إكتوين + هيالورونيك",
    heroHeadline: "بشرتك عطشانة مو بس من قلة الماء — أحياناً الحاجز نفسه ضعيف",
    heroSubheadline:
      "سيروم GHK-Cu مع إكتوين وحمض الهيالورونيك — يرطّب بعمق ويدعم مظهر بشرة أقوى وأكثر صموداً.",
    rating: 4.9,
    reviewsCount: 196,
    badges: ["٣٠ مل", "إصلاح الحاجز", "مرطّب", "ببتيدات"],
    offers: sharedOffers("٣٠ مل • شهر كامل"),
    upsell: {
      enabled: true,
      price: 199,
      label: "علبة إضافية ١٩٩ د.إ",
      subtitle: "عرض خاص بعد الطلب",
    },
    images: {
      heroBeforeAfter:
        "/products/ghk-cu-barrier-repair-serum/ChatGPT Image Jun 4, 2026, 01_20_17 AM.png",
      problemImage:
        "/products/ghk-cu-barrier-repair-serum/WhatsApp Image 2026-06-04 at 01.15.52.jpeg",
      heroProduct:
        "/products/ghk-cu-barrier-repair-serum/ChatGPT Image Jun 4, 2026, 01_20_25 AM.png",
      ingredientImage: "",
      authorityImage: "",
      lifestyleImage: "",
      testimonialImage: "",
      comparisonImage: "",
    },
    imageAlts: {
      heroBeforeAfter: "تحسّن مظهر البشرة",
      heroProduct: "سيروم GHK-Cu",
      problemImage: "بشرة متضررة",
      ingredientImage: "ببتيدات",
      authorityImage: "علم التركيبة",
      lifestyleImage: "بعد الشمس",
      testimonialImage: "آراء",
      comparisonImage: "مقارنة",
    },
    theme: {
      primary: "#0f5661",
      primaryDark: "#0a3d45",
      accent: "#5ba89e",
      softBg: "#e8f0ee",
    },
    exclusions: ["بدون كحول قاسٍ", "بدون عطور مهيّجة", "مناسب للاستخدام اليومي"],
    authority: {
      certifications: ["ببتيدات", "إكتوين", "ترطيب عميق", "مناسب للإمارات"],
      expertTitle: "متخصص حاجز البشرة",
      expertQuote:
        "مزيج GHK-Cu والإكتوين من الخيارات المفضّلة عندما تكون البشرة مجهدة من المناخ أو المنتجات القوية.",
      stats: [
        { value: "GHK-Cu", label: "ببتيد نحاس" },
        { value: "٣٠ مل", label: "الحجم" },
        { value: "٤.٩", label: "التقييم" },
        { value: "١٩٦+", label: "مراجعة" },
      ],
    },
    timeline: [
      {
        label: "أول ٣–٧ أيام",
        text: "ترطيب فوري وشعور براحة أقل شدّاً.",
      },
      {
        label: "الأسبوع ٢",
        text: "قد تتحسّن مرونة البشرة ومظهر الخطوط الرفيعة.",
      },
      {
        label: "شهر كامل",
        text: "حاجز أقوى مع الاستمرار — النتائج فردية.",
      },
    ],
    usage: {
      headline: "صباحاً أو مساءً",
      steps: [
        "٣–٤ قطرات بعد الغسيل.",
        "قبل المرطب — ممتاز بعد التعرّض للشمس.",
        "استخدميه يومياً لأفضل دعم للحاجز.",
      ],
    },
    delivery: { cities: uaeCities, carriers: ["شركاء توصيل محليين"] },
    relatedSlugs: ["caffeine-under-eye-serum", "bakuchiol-anti-aging-serum"],
    scarcityLine: "طلبات اليوم: شحن سريع لكل الإمارات",
    insightStat: {
      value: "٤٢٪",
      text: "من عميلات الإمارات يذكرن جفاف التكييف كمحفّز لشراء سيروم الإصلاح",
    },
    problemAgitation: [
      {
        pain: "«وجهي يحترق من أي منتج جديد»",
        solution: "إكتوين وبانثينول يهدئان ويدعمان الحاجز.",
      },
      {
        pain: "«بشرتي جافة رغم المرطب»",
        solution: "هيالورونيك يرطّب على عمق أكبر.",
      },
      {
        pain: "«خطوط دقيقة من الجفاف»",
        solution: "GHK-Cu يدعم مظهراً أنعم وأكثر مرونة.",
      },
    ],
    failureAlternatives: [
      {
        name: "مرطبات سطحية فقط",
        priceRange: "١٠٠ – ٣٠٠ د.إ",
        cons: ["ترطيب مؤقت", "لا يصلّح الحاجز", "الجفاف يرجع"],
      },
      {
        name: "تجارب عشوائية",
        priceRange: "تكلفة متكررة",
        cons: ["تهيّج", "لا خطة واضحة", "ضياع وقت ومال"],
      },
    ],
    comparisonRows: [
      { label: "الهدف", us: "إصلاح الحاجز", them: "ترطيب سطحي" },
      { label: "المكوّن", us: "GHK-Cu + إكتوين", them: "عام" },
      { label: "COD", us: "نعم", them: "غير متوفر أحياناً" },
      { label: "السعر", us: "من ١٩٩ د.إ", them: "أعلى" },
    ],
    faq: [
      {
        q: "بعد الشمس في الإمارات؟",
        a: "مناسب كدعم بعد التعرّض — مع واقي شمس في النهار.",
      },
      {
        q: "العروض؟",
        a: "١٩٩ / ٢٤٩ / ٣٤٩ د.إ حسب عدد العلب.",
      },
      {
        q: "مع سيرومات أخرى؟",
        a: "نعم — استخدمي سيروم العين منفصلاً على منطقة العين فقط.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductConfig | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getRelatedProducts(slug: string): ProductConfig[] {
  const current = getProductBySlug(slug);
  if (!current?.relatedSlugs?.length) {
    return products.filter((p) => p.slug !== slug).slice(0, 2);
  }
  return current.relatedSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is ProductConfig => !!p);
}
