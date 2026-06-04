import { businessConfig } from "@/config/business";

const EASTERN_DIGITS = "0123456789";
const WESTERN_DIGITS = "0123456789";

/** أرقام غربية 0123456789 — مثل namabeauty.shop */
export function toWesternDigits(value: string | number): string {
  const s = String(value);
  return s.replace(/[0-9]/g, (d) => {
    const i = EASTERN_DIGITS.indexOf(d);
    return i >= 0 ? WESTERN_DIGITS[i]! : d;
  });
}

export function formatNumber(n: number): string {
  return toWesternDigits(n.toLocaleString("en-US"));
}

export function formatPrice(amount: number): string {
  const sym = businessConfig.market.currencySymbol;
  return toWesternDigits(`${amount} ${sym}`);
}

/** نص عربي مع أرقام غربية في العرض */
export function displayText(text: string): string {
  return toWesternDigits(text);
}
