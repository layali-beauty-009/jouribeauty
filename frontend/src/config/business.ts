export const businessConfig = {
  brand: {
    nameLocal: "جوري بيوتي",
    nameEnglish: "Jouri Beauty",
    tagline: "سيرومات فاخرة للعناية بالبشرة في الإمارات",
    description:
      "ثلاث سيرومات مستهدفة — للعين، لمكافحة التجاعيد، ولإصلاح حاجز البشرة. تركيبات واضحة: مشكل + حل.",
    logoUrl: "",
    iconUrl: "",
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
    confirmationPromise: "فريقنا يتصل لتأكيد الطلب خلال ساعات",
    returnGuarantee: "ضمان استرجاع ٣٠ يوم — بدون مخاطرة",
  },
  design: {
    primaryColor: "#1b365d",
    primaryDarkColor: "#0f2340",
    accentColor: "#c4a47c",
    backgroundColor: "#f5f2e9",
    cardColor: "#ffffff",
    textColor: "#1a2332",
    mutedTextColor: "#5a6578",
    borderColor: "#dce4ef",
  },
} as const;

/** @deprecated use businessConfig */
export const business = businessConfig;
