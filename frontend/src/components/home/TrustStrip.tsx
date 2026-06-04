import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";

type Item = { icon: string; title: string; text: string };

export function TrustStrip({ items }: { items: Item[] }) {
  return (
    <section className="px-4 pb-14 bg-gradient-to-b from-clinical/40 to-cream">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-mist/80 p-4 flex items-center gap-3 shadow-sm hover:border-electric/30 transition-colors"
          >
            <span className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center text-electric flex-shrink-0">
              <BrandIcon name={(item.icon as BrandIconName) || "shield"} className="w-5 h-5" />
            </span>
            <div className="text-right min-w-0">
              <p className="text-sm font-semibold text-navy">{item.title}</p>
              <p className="text-xs text-muted mt-0.5">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
