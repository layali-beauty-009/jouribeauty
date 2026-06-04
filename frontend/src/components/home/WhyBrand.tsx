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
    <section className="px-4 py-16 bg-pearl/40" id="why-jouri">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
        <SectionHeader label={label} title={title} subtitle={subtitle} />
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl border border-mist/80 p-5 flex gap-4 shadow-sm hover:shadow-md hover:border-electric/25 transition-all text-right"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                <BrandIcon
                  name={(card.icon as BrandIconName) || "shield"}
                  className="w-6 h-6 text-electric"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-navy">{card.title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
