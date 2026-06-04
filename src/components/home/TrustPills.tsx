import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";

type Pill = { icon: BrandIconName; title: string; sub: string };

export function TrustPills({ items }: { items: Pill[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-8">
      {items.map((item) => (
        <div
          key={item.title}
          className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-mist/80 py-3.5 px-3 text-center shadow-sm hover:border-electric/40 hover:shadow-md transition-all"
        >
          <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-clinical text-navy group-hover:bg-navy group-hover:text-electric transition-colors">
            <BrandIcon name={item.icon} className="w-5 h-5" />
          </span>
          <p className="text-[11px] font-bold text-navy leading-tight">{item.title}</p>
          <p className="text-[10px] text-muted mt-0.5 leading-snug">{item.sub}</p>
        </div>
      ))}
    </div>
  );
}
