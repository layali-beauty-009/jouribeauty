import { businessConfig } from "@/config/business";

export function formatPrice(amount: number): string {
  const sym = businessConfig.market.currencySymbol;
  return `${amount} ${sym}`;
}
