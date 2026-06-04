import { IconCheck, IconQuote } from "@/components/ui/BrandIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { displayText } from "@/lib/format";

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
    <section className="border-y border-mist/60 bg-cream px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-lg sm:max-w-2xl lg:max-w-4xl">
        <SectionHeader label={label} title={title} subtitle={subtitle} />
        <div className="space-y-4">
          {items.map((t) => (
            <article
              key={t.name}
              className="relative rounded-2xl border border-mist bg-white p-5 text-right shadow-sm md:p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold text-gold-dark">
                  <IconCheck className="h-3.5 w-3.5 shrink-0" />
                  مشترية مؤكدة
                </span>
                <IconQuote className="h-9 w-9 shrink-0 text-gold/35" aria-hidden />
              </div>
              <p className="mb-3 text-sm text-gold" aria-label={`${t.rating} من 5`}>
                {"★".repeat(t.rating)}
              </p>
              <p className="text-sm leading-relaxed text-navy md:text-[0.9375rem]">
                {displayText(t.text)}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-pearl ring-2 ring-gold/40">
                  {t.initial}
                </span>
                <div className="min-w-0 flex-1 text-right">
                  <p className="text-sm font-bold text-navy">{t.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{displayText(t.meta)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
