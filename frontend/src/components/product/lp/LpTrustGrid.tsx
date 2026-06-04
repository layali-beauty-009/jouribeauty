import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";
import { businessConfig } from "@/config/business";

const items: { icon: BrandIconName; title: string; sub: string }[] = [
  { icon: "cod", title: businessConfig.cod.paymentLabel, sub: "بدون دفع أونلاين" },
  { icon: "truck", title: "توصيل ٢–٥ أيام", sub: "كل إمارات الدولة" },
  { icon: "shield", title: "ضمان ٣٠ يوم", sub: "استرجاع كامل" },
  { icon: "vegan", title: "فيجان", sub: "خالي من القسوة" },
];

/** شريط ثقة تحت العروض — مثل namabeauty.shop */
export function LpTrustGrid() {
  return (
    <section className="mt-2 border-y border-navy/10 bg-teal-dark text-pearl">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3 px-4 py-5 sm:gap-5">
        {items.map((item) => (
          <div key={item.title} className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-electric/15 ring-1 ring-electric/40 sm:h-12 sm:w-12">
              <BrandIcon name={item.icon} className="h-5 w-5 text-electric" />
            </span>
            <div className="min-w-0 text-right">
              <p className="text-[11px] font-bold leading-tight sm:text-xs">{item.title}</p>
              <p className="text-[10px] leading-snug opacity-80">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
