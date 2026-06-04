import { businessConfig } from "@/config/business";

export function AnnouncementBar({ text }: { text: string }) {
  return (
    <div className="bg-gradient-to-l from-teal-dark via-navy to-teal-dark text-pearl text-center text-xs md:text-sm py-2.5 px-4 tracking-wide font-medium border-b border-electric/20">
      {text}
    </div>
  );
}

export function TrustBadgeRow() {
  const badges = [
    { label: "صيدلية السيرومات", sub: businessConfig.brand.nameLocal },
    { label: "مكوّنات واضحة", sub: "مشكل + حل" },
    { label: "الإمارات", sub: "توصيل سريع" },
    { label: "دفع عند الاستلام", sub: "للإمارات" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8">
      {badges.map((b) => (
        <div
          key={b.label}
          className="bg-white rounded-xl border border-mist py-3 px-2 text-center shadow-sm"
        >
          <p className="text-xs font-semibold text-navy">{b.label}</p>
          <p className="text-[10px] text-muted mt-0.5">{b.sub}</p>
        </div>
      ))}
    </div>
  );
}
