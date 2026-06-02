export const businessConfig = {
  brand: {
    nameLocal: "جوري للجمال",
    nameEnglish: "Jouri Beauty",
    tagline: "صيدلية السيرومات — تركيبات واضحة لبشرة الخليج",
    description:
      "ثلاث سيرومات متخصصة من جوري للجمال: للعين، لمكافحة التجاعيد والبهتان، ولإصلاح البشرة المرهقة. مكوّنات نشطة بتركيز واضح، شرح مشكل + حل، والدفع عند الاستلام في الإمارات.",
    monogram: "ن",
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
    currencySymbol: "د.إ",
    phoneCountryCode: "+971",
    phoneExample: "50 123 4567",
  },
  cod: {
    enabled: true,
    paymentLabel: "الدفع عند الاستلام",
    deliveryPromise: "توصيل خلال ٢–٥ أيام عمل لكل الإمارات",
    confirmationPromise: "نتصل لتأكيد طلبك قبل الشحن",
    returnGuarantee: "ضمان رضا ٣٠ يوماً",
  },
  design: {
    primaryColor: "#0f4c5c",
    primaryDarkColor: "#0a3540",
    accentColor: "#4db6a6",
    backgroundColor: "#f6faf9",
    cardColor: "#ffffff",
    textColor: "#1a2e32",
    mutedTextColor: "#5c7074",
    borderColor: "#d4e8e4",
  },
} as const;

/** @deprecated use businessConfig */
export const business = businessConfig;
