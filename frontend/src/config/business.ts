export const businessConfig = {
  brand: {
    nameLocal: "جوري للجمال",
    nameEnglish: "Jouri Beauty",
    tagline: "صيدلية السيرومات — تركيبات واضحة لبشرة الخليج",
    description:
      "ثلاث سيرومات متخصصة من جوري للجمال: للعين، لمكافحة التجاعيد والبهتان، ولإصلاح البشرة المرهقة. مكوّنات نشطة بتركيز واضح، شرح مشكل + حل، والدفع عند الاستلام في الإمارات.",
    monogram: "J",
    email: "hello@jouribeauty.store",
    positioningLine:
      "صيدلية سيرومات لبشرة الخليج — ثقة الصيدلية، وضوح المكوّنات",
  },
  market: {
    countryName: "الإمارات العربية المتحدة",
    countryCode: "AE",
    language: "ar",
    direction: "rtl" as const,
    currency: "AED",
    currencyLabel: "د.إ",
    phoneCountryCode: "+971",
    phoneExample: "50 123 4567",
  },
  cod: {
    enabled: true,
    paymentLabel: "الدفع عند الاستلام",
    deliveryPromise: "توصيل خلال 2–5 أيام عمل لكل الإمارات",
    confirmationPromise: "نتصل لتأكيد طلبك قبل الشحن",
    returnGuarantee: "ضمان رضا 30 يوماً",
  },
  design: {
    primaryColor: "#0f5661",
    primaryDarkColor: "#0a3d45",
    accentColor: "#5ba89e",
    backgroundColor: "#f4f9f8",
    cardColor: "#ffffff",
    textColor: "#14282c",
    mutedTextColor: "#5a7176",
    borderColor: "#d2e6e2",
  },
} as const;

/** @deprecated use businessConfig */
export const business = businessConfig;
