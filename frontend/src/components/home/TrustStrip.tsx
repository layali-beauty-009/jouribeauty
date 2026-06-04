import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";
import { displayText } from "@/lib/format";

type Item = { icon: string; title: string; text: string };

/** شريط ثقة سفلي — تيل + ذهب مثل صفحات المنتج */
export function TrustStrip({ items }: { items: Item[] }) {
  return (
    <section className="border-t border-gold/15 bg-teal-dark text-pearl">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3 px-4 py-8 sm:max-w-2xl sm:gap-5 lg:max-w-4xl lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 ring-1 ring-gold/40 sm:h-12 sm:w-12">
              <BrandIcon name={(item.icon as BrandIconName) || "shield"} className="h-5 w-5 text-gold" />
            </span>
            <div className="min-w-0 text-right">
              <p className="text-[11px] font-bold leading-tight sm:text-xs">
                {displayText(item.title)}
              </p>
              <p className="text-[10px] leading-snug opacity-80">{displayText(item.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
