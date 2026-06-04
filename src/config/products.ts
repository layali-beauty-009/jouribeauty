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
    label: "علبتين · ثبّتي النتيجة",
    subtitle: "شهر النتيجة + شهر التثبيت",
    price: 249,
    compareAtPrice: 398,
    badge: "الأكثر اختياراً",
    defaultSelected: true,
  },
  {
    id: "three",
    quantity: 3,
    label: "ثلاث علب · الروتين الكامل",
    subtitle: "نتيجة + تثبيت + توفير أقصى",
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
    mainIngredient: "كافيين 5%",
    ingredientStack: [
      {
        name: "كافيين 5%",
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
    cardSubheadline: "كافيين 5% + ريتينول + هيالورونيك",
    heroHeadline: "هالاتك وانتفاخك مو بالضرورة نقص نوم — السبب أحياناً يكون الجلد تحت العين",
    heroSubheadline:
      "سيروم الكافيين 5% مع رولر يهدف الانتفاخ والهالات والخطوط الدقيقة — تركيبة مصممة لمنطقة العين فقط.",
    rating: 4.9,
    reviewsCount: 284,
    badges: ["15 مل", "رولر بارد", "فيجان", "ضمان 30 يوم"],
    offers: sharedOffers("15 مل • رولر"),
    upsell: {
      enabled: true,
      price: 199,
      label: "أضيفي علبة ثانية بنفس السعر الخاص",
      subtitle: "عرض لمرة واحدة بعد الطلب — علبة إضافية 199 د.إ",
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
        { value: "5%", label: "كافيين" },
        { value: "15 مل", label: "حجم العلبة" },
        { value: "4.9", label: "تقييم العملاء" },
        { value: "284+", label: "مراجعة" },
      ],
    },
    timeline: [
      {
        label: "أول 7 أيام",
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
    scarcityLine: "آخر 48 ساعة على عرض الشحن المجاني هذا الأسبوع",
    insightStat: {
      value: "72%",
      text: "من النساء في الإمارات يقلن إن عيونهن تبان متعبة أو منتفخة كل صباح — أنتِ مو لحالك، والحل واضح",
      source: "استطلاع عملاء جوري للجمال · 2025",
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
        priceRange: "200 – 500 د.إ",
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
      { label: "السعر", us: "من 199 د.إ", them: "أغلى بكثير" },
      { label: "الدفع", us: "عند الاستلام", them: "دفع أونلاين" },
      { label: "التركيز", us: "5% كافيين", them: "غير محدد" },
      { label: "الضمان", us: "30 يوم", them: "غير واضح" },
    ],
    testimonials: [
      {
        name: "لمى الفهد",
        meta: "31 • دبي • مشترية مؤكدة",
        initial: "ل",
        text: "«كنت أصرف على كونسيلر كل شهر — بعد أسبوعين على سيروم العين، الصباح ما أحتاج تغطية ثقيلة. الرولر البارد يعطي إحساس مريح مع المكيف.»",
        rating: 5,
      },
      {
        name: "دانة العنزي",
        meta: "34 • أبوظبي • مشترية مؤكدة",
        initial: "د",
        text: "«أهم شي عندي التركيز مكتوب — 5% كافيين مو كلمة “سيروم عين” فاضية. طلبت بالدفع عند الاستلام ووصل خلال 3 أيام.»",
        rating: 5,
      },
      {
        name: "هديل الزهراني",
        meta: "40 • الشارقة • مشترية مؤكدة",
        initial: "ه",
        text: "«الهالات عندي من السهر والتكييف، مو بس من النوم. لاحظت منطقة تحت العين أهدأ وأخف انتفاخ — بصراحة أفضل من كريمات الصيدلية اللي جرّبتهم.»",
        rating: 5,
      },
    ],
    faq: [
      {
        q: "كم السعر والعروض؟",
        a: "علبة واحدة 199 د.إ، علبتين 249 د.إ، ثلاث علب 349 د.إ. الدفع عند الاستلام.",
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
    mainIngredient: "باكوتشيول 1.3%",
    ingredientStack: [
      {
        name: "باكوتشيول 1.3%",
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
      "باكوتشيول 1.3% مع ببتيدات وفيتامين سي — يساعد على مظهر بشرة أكثر تماسكاً وإشراقاً بدون حرقان الريتينول.",
    rating: 4.8,
    reviewsCount: 312,
    badges: ["30 مل", "شهر كامل", "فيجان", "ضمان 30 يوم"],
    offers: sharedOffers("30 مل • شهر كامل"),
    upsell: {
      enabled: true,
      price: 199,
      label: "أضيفي علبة ثانية — 199 د.إ فقط",
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
        { value: "1.3%", label: "باكوتشيول" },
        { value: "30 مل", label: "الحجم" },
        { value: "4.8", label: "التقييم" },
        { value: "312+", label: "مراجعة" },
      ],
    },
    timeline: [
      {
        label: "أول 7–14 يوم",
        text: "قد تلاحظين ترطيباً أوضح ومظهراً أكثر نعومة.",
      },
      {
        label: "الأسبوع 3–4",
        text: "إشراق أفضل ومظهر خطوط أخف عند كثير من المستخدمات.",
      },
      {
        label: "بعد شهر",
        text: "الاستمرار يثبّت النتيجة — تختلف حسب نوع البشرة.",
      },
    ],
    usage: {
      headline: "3–4 قطرات يومياً",
      steps: [
        "بعد الغسيل، 3–4 قطرات على الوجه والرقبة.",
        "ربّتي بلطف حتى الامتصاص.",
        "صباحاً أو مساءً — واقي شمس ضروري صباحاً.",
      ],
    },
    delivery: { cities: uaeCities, carriers: ["شركاء توصيل محليين"] },
    relatedSlugs: ["caffeine-under-eye-serum", "ghk-cu-barrier-repair-serum"],
    scarcityLine: "كمية محدودة هذا الأسبوع — شحن مجاني للطلبات فوق 200 د.إ",
    insightStat: {
      value: "60%",
      text: "من النساء فوق 30 يحسّون باهتان البشرة أو خطوط دقيقة — والباكوتشيول هو البديل اللطيف اللي يدوروا عليه",
      source: "تجارب عميلات جوري في الإمارات",
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
        priceRange: "300 – 800 د.إ",
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
      { label: "السعر", us: "من 199 د.إ", them: "أغلى" },
      { label: "الدفع", us: "عند الاستلام", them: "غالباً أونلاين" },
      { label: "الشفافية", us: "مكوّنات واضحة", them: "غامض" },
    ],
    testimonials: [
      {
        name: "شما الخوري",
        meta: "36 • دبي • مشترية مؤكدة",
        initial: "ش",
        text: "«الريتينول حرق وجهي قبل — الباكوتشيول هنا منطقي. بعد 3 أسابيع بشرتي أنعم والخطوط الدقيقة أخف — خصوصاً مع شمس الإمارات والمكيف.»",
        rating: 5,
      },
      {
        name: "عائشة المنصوري",
        meta: "42 • العين • مشترية مؤكدة",
        initial: "ع",
        text: "«أنا أقرأ المكوّنات دايم. 1.3% باكوتشيول مكتوبة بوضوح — هالشي خلّاني أثق. الدفع عند الاستلام ريّحني من خوف السكام.»",
        rating: 5,
      },
      {
        name: "ريم السويدي",
        meta: "33 • أبوظبي • مشترية مؤكدة",
        initial: "ر",
        text: "«كنت أدفع على كريمات فاخرة ما تعطي نتيجة. السيروم أخف ومركّز — إشراقة واضحة بدون تهيّج.»",
        rating: 5,
      },
    ],
    faq: [
      {
        q: "هل يناسب البشرة الحساسة؟",
        a: "الباكوتشيول خيار لطيف — ننصح بتجربة على منطقة صغيرة أولاً.",
      },
      {
        q: "كم العروض؟",
        a: "1 علبة 199، 2 علبة 249، 3 علب 349 د.إ.",
      },
      {
        q: "متى النتيجة؟",
        a: "2–4 أسابيع للإشراق والتماسك عند الاستمرار. تختلف من شخص لآخر.",
      },
    ],
  },
  {
    id: "jouri-repair-003",
    slug: "ghk-cu-barrier-repair-serum",
    sku: "JOURI-REPAIR-30",
    name: "سيروم ببتيد النحاس لإصلاح الحاجز",
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
    mainIngredient: "ببتيد النحاس",
    ingredientStack: [
      {
        name: "ببتيد النحاس",
        benefit: "يدعم إصلاح البشرة ومرونتها",
      },
      { name: "إكتوين", benefit: "حماية من الإجهاد (شمس، جفاف)" },
      { name: "حمض الهيالورونيك", benefit: "ترطيب عميق" },
      { name: "بانثينول", benefit: "تهدئة وتلطيف" },
    ],
    mechanism:
      "ببتيد النحاس مع الإكتوين يعيدان بناء مرونة البشرة — مثالي بعد الشمس أو عندما يكون الحاجز ضعيفاً.",
    cardHeadline: "أصلحي حاجز بشرتك",
    cardSubheadline: "ببتيد النحاس + إكتوين + هيالورونيك",
    heroHeadline: "بشرتك عطشانة مو بس من قلة الماء — أحياناً الحاجز نفسه ضعيف",
    heroSubheadline:
      "سيروم ببتيد النحاس مع إكتوين وحمض الهيالورونيك — يرطّب بعمق ويدعم مظهر بشرة أقوى وأكثر صموداً.",
    rating: 4.9,
    reviewsCount: 196,
    badges: ["30 مل", "شهر كامل", "ببتيدات", "ضمان 30 يوم"],
    offers: sharedOffers("30 مل • شهر كامل"),
    upsell: {
      enabled: true,
      price: 199,
      label: "علبة إضافية 199 د.إ",
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
      heroProduct: "سيروم ببتيد النحاس",
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
        "مزيج ببتيد النحاس والإكتوين من الخيارات المفضّلة عندما تكون البشرة مجهدة من المناخ أو المنتجات القوية.",
      stats: [
        { value: "ببتيد نحاس", label: "مكوّن نشط" },
        { value: "30 مل", label: "الحجم" },
        { value: "4.9", label: "التقييم" },
        { value: "196+", label: "مراجعة" },
      ],
    },
    timeline: [
      {
        label: "أول 3–7 أيام",
        text: "ترطيب فوري وشعور براحة أقل شدّاً.",
      },
      {
        label: "الأسبوع 2",
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
        "3–4 قطرات بعد الغسيل.",
        "قبل المرطب — ممتاز بعد التعرّض للشمس.",
        "استخدميه يومياً لأفضل دعم للحاجز.",
      ],
    },
    delivery: { cities: uaeCities, carriers: ["شركاء توصيل محليين"] },
    relatedSlugs: ["caffeine-under-eye-serum", "bakuchiol-anti-aging-serum"],
    scarcityLine: "طلبات اليوم: شحن سريع لكل الإمارات",
    insightStat: {
      value: "58%",
      text: "يعانين من جفاف التكييف أو احمرار بعد أي منتج؟ أنتِ من الأغلبية — مو لحالك، والإصلاح يبدأ من الحاجز",
      source: "استطلاع عملاء جوري للجمال · 2025",
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
        solution: "ببتيد النحاس يدعم مظهراً أنعم وأكثر مرونة.",
      },
    ],
    failureAlternatives: [
      {
        name: "مرطبات سطحية فقط",
        priceRange: "100 – 300 د.إ",
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
      { label: "المكوّن", us: "ببتيد نحاس + إكتوين", them: "عام" },
      { label: "الدفع", us: "عند الاستلام", them: "غير متوفر أحياناً" },
      { label: "السعر", us: "من 199 د.إ", them: "أعلى" },
    ],
    testimonials: [
      {
        name: "موزة الهاشمي",
        meta: "35 • دبي • مشترية مؤكدة",
        initial: "م",
        text: "«بشرتي كانت تحمر من أي منتج جديد — هالسيروم أهدأ. بعد الشمس والمكيف حسّيت وجهي أقل شدّ وأكثر رطوبة من جوّا.»",
        rating: 5,
      },
      {
        name: "حصة النعيمي",
        meta: "39 • رأس الخيمة • مشترية مؤكدة",
        initial: "ح",
        text: "«جربت مرطبات كثيرة ما تثبت. ببتيد النحاس مع الإكتوين فرق معي — الحاجز صار أقوى وأقل حساسية.»",
        rating: 5,
      },
      {
        name: "مريم البلوشي",
        meta: "43 • الفجيرة • مشترية مؤكدة",
        initial: "م",
        text: "«الطلب وصل بسرعة والدفع عند الباب. التركيبة واضحة وما فيها ريحة قوية — مناسب لبشرتي الحساسة.»",
        rating: 5,
      },
    ],
    faq: [
      {
        q: "بعد الشمس في الإمارات؟",
        a: "مناسب كدعم بعد التعرّض — مع واقي شمس في النهار.",
      },
      {
        q: "العروض؟",
        a: "199 / 249 / 349 د.إ حسب عدد العلب.",
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
