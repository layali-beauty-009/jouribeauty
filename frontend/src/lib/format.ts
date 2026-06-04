import { businessConfig } from "@/config/business";

const EASTERN_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const WESTERN_DIGITS = "0123456789";

/** أرقام غربية 0123456789 */
export function toWesternDigits(value: string | number): string {
  const s = String(value);
  return s.replace(/[٠-٩]/g, (d) => {
    const i = EASTERN_DIGITS.indexOf(d);
    return i >= 0 ? WESTERN_DIGITS[i]! : d;
  });
}

export function formatNumber(n: number): string {
  return toWesternDigits(n.toLocaleString("en-US"));
}

export function formatPrice(amount: number): string {
  const label = businessConfig.market.currencyLabel;
  return toWesternDigits(`${amount} ${label}`);
}

/** للبطاقات: مبلغ كبير + عملة أصغر */
export function formatPriceParts(amount: number) {
  return {
    amount: toWesternDigits(String(amount)),
    currency: businessConfig.market.currencyLabel,
  };
}

/** نص عربي مع أرقام غربية */
export function displayText(text: string): string {
  return toWesternDigits(text.replace(/درهم إماراتي/g, businessConfig.market.currencyLabel));
}
