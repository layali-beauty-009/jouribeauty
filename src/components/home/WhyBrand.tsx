import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Card = { icon: string; title: string; text: string };

export function WhyBrand({
  label,
  title,
  subtitle,
  cards,
}: {
  label: string;
  title: string;
  subtitle: string;
  cards: Card[];
}) {
  return (
    <section className="bg-cream px-4 py-14 sm:py-16" id="why-jouri">
      <div className="mx-auto max-w-lg sm:max-w-2xl lg:max-w-4xl">
        <SectionHeader label={label} title={title} subtitle={subtitle} />
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex gap-4 rounded-2xl border border-mist bg-white p-5 text-right shadow-sm transition-all hover:border-gold/35 hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/10 ring-1 ring-gold/40">
                <BrandIcon
                  name={(card.icon as BrandIconName) || "shield"}
                  className="h-6 w-6 text-gold"
                />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-navy">{card.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
