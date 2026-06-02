export const business = {
  brand: {
    nameLocal: "جوري بيوتي",
    nameEnglish: "Jouri Beauty",
    tagline: "Premium serums for the UAE",
    description:
      "Three targeted serums — eye care, anti-aging, and barrier repair. Problem-led formulas with clinic-inspired actives.",
    logoUrl: "",
    iconUrl: "",
  },
  market: {
    countryName: "United Arab Emirates",
    countryCode: "AE",
    language: "en",
    direction: "ltr" as const,
    currency: "AED",
    currencySymbol: "AED",
    phoneCountryCode: "+971",
    phoneExample: "50 123 4567",
  },
  cod: {
    enabled: true,
    label: "Cash on delivery",
    note: "Pay when your order arrives — no online payment required.",
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
