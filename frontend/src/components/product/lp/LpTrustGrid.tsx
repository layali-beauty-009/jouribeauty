import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";
import { businessConfig } from "@/config/business";

const items: { icon: BrandIconName; title: string; sub: string }[] = [
  { icon: "cod", title: businessConfig.cod.paymentLabel, sub: "بدون دفع أونلاين" },
  { icon: "truck", title: "توصيل ٢–٥ أيام", sub: "كل إمارات الدولة" },
  { icon: "vegan", title: "فيجان", sub: "خالي من القسوة" },
  { icon: "shield", title: "ضمان ٣٠ يوم", sub: "استرجاع كامل" },
];

export function LpTrustGrid() {
  return (
    <section className="mx-4 mt-8 rounded-2xl p-4 md:p-5 grid grid-cols-2 gap-3 text-center text-xs text-pearl bg-teal-dark">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col items-center gap-1.5 py-1">
          <BrandIcon name={item.icon} className="w-5 h-5 text-electric" />
          <p className="font-semibold leading-tight">{item.title}</p>
          <p className="opacity-80 text-[10px] leading-snug">{item.sub}</p>
        </div>
      ))}
    </section>
  );
}
