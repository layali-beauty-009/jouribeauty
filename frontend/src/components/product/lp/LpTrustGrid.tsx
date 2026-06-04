import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";
import { businessConfig } from "@/config/business";
import { displayText } from "@/lib/format";

const items: { icon: BrandIconName; title: string; sub: string }[] = [
  { icon: "cod", title: businessConfig.cod.paymentLabel, sub: "بدون دفع أونلاين" },
  { icon: "truck", title: "توصيل 2–5 أيام", sub: "كل إمارات الدولة" },
  { icon: "shield", title: "ضمان 30 يوم", sub: "استرجاع كامل" },
  { icon: "vegan", title: "فيجان", sub: "خالي من القسوة" },
];

/** شريط ثقة — تيل + لمسات ذهبية مثل ناما */
export function LpTrustGrid() {
  return (
    <section className="mt-2 border-y border-gold/15 bg-teal-dark text-pearl">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3 px-4 py-5 sm:gap-5">
        {items.map((item) => (
          <div key={item.title} className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 ring-1 ring-gold/40 sm:h-12 sm:w-12">
              <BrandIcon name={item.icon} className="h-6 w-6 text-gold" />
            </span>
            <div className="min-w-0 text-right">
              <p className="text-[11px] font-bold leading-tight sm:text-xs">{displayText(item.title)}</p>
              <p className="text-[10px] leading-snug opacity-80">{displayText(item.sub)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
