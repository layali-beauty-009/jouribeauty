import { IconCheck, IconQuote } from "@/components/ui/BrandIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Item = {
  name: string;
  meta: string;
  initial: string;
  text: string;
  rating: number;
};

export function Testimonials({
  label,
  title,
  subtitle,
  items,
}: {
  label: string;
  title: string;
  subtitle: string;
  items: Item[];
}) {
  return (
    <section className="px-4 py-16 bg-white border-y border-mist/60">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
        <SectionHeader label={label} title={title} subtitle={subtitle} />
        <div className="space-y-4">
          {items.map((t) => (
            <article
              key={t.name}
              className="bg-gradient-to-br from-pearl/80 to-white rounded-2xl border border-mist p-5 md:p-6 shadow-sm relative text-right"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <IconQuote className="w-8 h-8 text-electric/40 flex-shrink-0" />
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-royal bg-clinical px-2.5 py-1 rounded-full border border-mist">
                  <IconCheck className="w-3.5 h-3.5" />
                  مشترية مؤكدة
                </span>
              </div>
              <p className="text-electric text-sm mb-3" aria-label={`${t.rating} من 5`}>
                {"★".repeat(t.rating)}
              </p>
              <p className="text-sm md:text-[0.9375rem] text-navy leading-relaxed">{t.text}</p>
              <div className="mt-5 flex items-center justify-between gap-3 flex-row-reverse">
                <div className="text-right">
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-muted mt-0.5">{t.meta}</p>
                </div>
                <span className="w-11 h-11 rounded-full bg-navy text-pearl flex items-center justify-center text-sm font-semibold flex-shrink-0 ring-2 ring-electric/30">
                  {t.initial}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
