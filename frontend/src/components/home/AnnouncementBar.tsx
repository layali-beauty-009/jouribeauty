import { businessConfig } from "@/config/business";

export function AnnouncementBar({ text }: { text: string }) {
  return (
    <div className="bg-navy text-pearl text-center text-xs md:text-sm py-2.5 px-4 tracking-wide">
      {text}
    </div>
  );
}

export function TrustBadgeRow() {
  const badges = [
    { label: "UAE", sub: "Ships nationwide" },
    { label: "Vegan", sub: "Cruelty-free" },
    { label: "COD", sub: businessConfig.cod.paymentLabel },
    { label: "30 Days", sub: "Easy returns" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8">
      {badges.map((b) => (
        <div
          key={b.label}
          className="bg-white rounded-xl border border-mist/80 py-3 px-2 text-center shadow-sm"
        >
          <p className="text-xs font-semibold text-navy tracking-wider">{b.label}</p>
          <p className="text-[10px] text-muted mt-0.5">{b.sub}</p>
        </div>
      ))}
    </div>
  );
}
