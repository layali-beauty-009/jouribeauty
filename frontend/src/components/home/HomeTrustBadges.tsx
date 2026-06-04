import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";
import { businessConfig } from "@/config/business";

const badges: { icon: BrandIconName; title: string; sub: string }[] = [
  { icon: "flask", title: "تركيز معلن", sub: "لكل سيروم" },
  { icon: "vegan", title: "حلال", sub: "حيث ينطبق" },
  { icon: "shield", title: "GMP", sub: "معايير تصنيع" },
  { icon: "heart", title: "30 يوم", sub: "ضمان استرجاع" },
];

/** شارات ثقة — شريط 4 أعمدة تحت الهيرو مثل namabeauty.shop */
export function HomeTrustBadges() {
  return (
    <div className="border-y border-mist/80 bg-white">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-px bg-mist/50 sm:max-w-3xl sm:grid-cols-4 lg:max-w-5xl">
        {badges.map((b) => (
          <div
            key={b.title}
            className="flex flex-col items-center bg-white px-3 py-5 text-center sm:py-6"
          >
            <span className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 ring-1 ring-gold/40">
              <BrandIcon name={b.icon} className="h-5 w-5 text-gold" />
            </span>
            <p className="text-xs font-extrabold text-navy">{b.title}</p>
            <p className="mt-0.5 text-[10px] leading-snug text-muted">{b.sub}</p>
          </div>
        ))}
      </div>
      <p className="border-t border-mist/60 py-3 text-center text-[11px] font-semibold text-royal">
        {businessConfig.cod.returnGuarantee}
      </p>
      <p className="pb-3 text-center text-[10px] font-medium tracking-wide text-muted">
        Clinical-grade serums · UAE delivery
      </p>
    </div>
  );
}
